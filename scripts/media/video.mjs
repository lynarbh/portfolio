// ffmpeg encoders per video class: "hero" (silent SDR loop + poster), "cv" (original
// resolution, AAC 128k) and "process" (SkøllRub Animate clips, 1280×720 25 fps, AAC 64k,
// written in place under public/animate/videos/). Single-pass CRF with bitexact flags:
// byte-identical across runs (two-pass is not deterministic, RESEARCH Pitfall 4).
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";
import { PUBLIC, insideDir, run, ssim } from "./util.mjs";

// HLG bt2020 master → SDR bt709. colorspace has no arib-std-b67 input curve: bt2020-10
// corrects primaries but does not tone-map highlights (accepted, RESEARCH Pitfall 3).
const HERO_FILTER = "colorspace=all=bt709:iall=bt2020:itrc=bt2020-10:format=yuv420p,fps=30";
const HERO_FPS = 30;

const heroArgs = (src, out, crf) => [
  "-v",
  "error",
  "-y",
  "-i",
  src,
  "-vf",
  HERO_FILTER,
  "-c:v",
  "libx264",
  "-preset",
  "slow",
  "-crf",
  String(crf),
  "-profile:v",
  "high",
  "-pix_fmt",
  "yuv420p",
  "-color_primaries",
  "bt709",
  "-color_trc",
  "bt709",
  "-colorspace",
  "bt709",
  "-color_range",
  "tv",
  "-an",
  "-map_metadata",
  "-1",
  "-map_chapters",
  "-1",
  "-fflags",
  "+bitexact",
  "-flags:v",
  "+bitexact",
  "-movflags",
  "+faststart",
  out,
];

// Shared tail for the classes that keep their audio track (cv, process).
const withAudioArgs = (src, out, crf, { vf, maxrate, bufsize, audio }) => [
  "-v",
  "error",
  "-y",
  "-i",
  src,
  ...(vf ? ["-vf", vf] : []),
  "-c:v",
  "libx264",
  "-preset",
  "slow",
  "-crf",
  String(crf),
  "-maxrate",
  maxrate,
  "-bufsize",
  bufsize,
  // VBV + x264 frame threads is not deterministic: single thread keeps runs byte-identical.
  "-threads:v",
  "1",
  "-profile:v",
  "high",
  "-pix_fmt",
  "yuv420p",
  "-color_primaries",
  "bt709",
  "-color_trc",
  "bt709",
  "-colorspace",
  "bt709",
  "-c:a",
  "aac",
  "-b:a",
  audio,
  "-map_metadata",
  "-1",
  "-fflags",
  "+bitexact",
  "-flags:v",
  "+bitexact",
  "-flags:a",
  "+bitexact",
  "-movflags",
  "+faststart",
  out,
];

// Process clips: the Animate player shows them well under 1280 px wide (CONTEXT addendum).
const PROCESS_FILTER = "fps=25,scale=1280:720:flags=lanczos";
const PROCESS_FPS = 25;
const CLASS_ARGS = {
  cv: { maxrate: "3000k", bufsize: "6000k", audio: "128k" },
  process: { vf: PROCESS_FILTER, maxrate: "1500k", bufsize: "3000k", audio: "64k" },
};

// Poster = frame 0 of the SDR output, native width, no resize.
const posterFrameArgs = (video, png) => [
  "-v",
  "error",
  "-y",
  "-i",
  video,
  "-frames:v",
  "1",
  "-update",
  "1",
  png,
];
const POSTER_WEBP = { effort: 6 };

// Every encoder setting that shapes the output bytes, with the per-entry values (paths, crf,
// poster quality: already in the entry options) as placeholders. media.mjs hashes it into
// the cache key, so changing an argument re-encodes without a hand-bumped version.
export const VIDEO_SIGNATURE = {
  hero: heroArgs("<src>", "<out>", "<crf>"),
  withAudio: Object.fromEntries(
    Object.entries(CLASS_ARGS).map(([name, a]) => [
      name,
      withAudioArgs("<src>", "<out>", "<crf>", a),
    ]),
  ),
  posterFrame: posterFrameArgs("<out>", "<png>"),
  posterWebp: POSTER_WEBP,
};

function probeFps(file) {
  const { stdout } = run("ffprobe", [
    "-v",
    "error",
    "-select_streams",
    "v:0",
    "-show_entries",
    "stream=r_frame_rate",
    "-of",
    "csv=p=0",
    file,
  ]);
  const rate = stdout.trim().split("\n")[0];
  if (!/^[0-9]+\/[0-9]+$/.test(rate)) throw new Error(`ffprobe: bad r_frame_rate ${rate}`);
  return rate;
}

// cv: SSIM against the source itself (same resolution and frame rate).
// process: reference = the source through the same fps/scale chain, lossless, so SSIM
// measures the CRF only.
async function encodeWithAudio(entry, srcAbs, outAbs, tmpDir) {
  mkdirSync(dirname(outAbs), { recursive: true });
  run("ffmpeg", withAudioArgs(srcAbs, outAbs, entry.crf, CLASS_ARGS[entry.class]));

  let score;
  if (entry.class === "cv") {
    score = ssim(srcAbs, outAbs, `(${probeFps(srcAbs)})`);
  } else {
    const refAbs = join(tmpDir, `${entry.id}-ref.mkv`);
    run("ffmpeg", [
      "-v",
      "error",
      "-y",
      "-i",
      srcAbs,
      "-vf",
      PROCESS_FILTER,
      "-c:v",
      "libx264",
      "-qp",
      "0",
      "-preset",
      "ultrafast",
      "-an",
      refAbs,
    ]);
    score = ssim(refAbs, outAbs, PROCESS_FPS);
  }
  const { width, height } = probeSize(outAbs);
  return { outputs: [outAbs], meta: { width, height, ssim: score } };
}

function probeSize(file) {
  const { stdout } = run("ffprobe", [
    "-v",
    "error",
    "-select_streams",
    "v:0",
    "-show_entries",
    "stream=width,height",
    "-of",
    "csv=p=0",
    file,
  ]);
  const [width, height] = stdout.trim().split(/[\n,]/).map(Number);
  if (!width || !height) throw new Error(`ffprobe: no width/height for ${file}`);
  return { width, height };
}

// outRoot: where the poster path (entry.poster.out, relative to public/) is written. The
// pipeline passes a staging directory and moves the files into public/ only on success.
export async function encodeVideo(entry, srcAbs, outAbs, tmpDir, outRoot = PUBLIC) {
  if (entry.class === "cv" || entry.class === "process") {
    return encodeWithAudio(entry, srcAbs, outAbs, tmpDir);
  }
  if (entry.class !== "hero") throw new Error(`class not implemented: ${entry.class}`);

  mkdirSync(dirname(outAbs), { recursive: true });
  run("ffmpeg", heroArgs(srcAbs, outAbs, entry.crf));

  const posterPng = join(tmpDir, `${entry.id}-poster.png`);
  run("ffmpeg", posterFrameArgs(outAbs, posterPng));
  const posterAbs = insideDir(outRoot, entry.poster.out);
  mkdirSync(dirname(posterAbs), { recursive: true });
  await sharp(posterPng)
    .webp({ ...POSTER_WEBP, quality: entry.poster.quality })
    .toFile(posterAbs);

  // Reference = lossless encode of the same filter chain, so SSIM measures the CRF only.
  const refAbs = join(tmpDir, `${entry.id}-ref.mkv`);
  run("ffmpeg", [
    "-v",
    "error",
    "-y",
    "-i",
    srcAbs,
    "-vf",
    HERO_FILTER,
    "-c:v",
    "libx264",
    "-qp",
    "0",
    "-preset",
    "ultrafast",
    "-an",
    refAbs,
  ]);
  const score = ssim(refAbs, outAbs, HERO_FPS);

  const { width, height } = probeSize(outAbs);
  return {
    outputs: [outAbs, posterAbs],
    meta: { width, height, ssim: score, poster: "/" + entry.poster.out },
  };
}

// ffmpeg encoders per video class. Only "hero" exists for now; "cv" and "process" arrive
// with plan 02-06. Single-pass CRF with bitexact flags: byte-identical across runs
// (two-pass is not deterministic, RESEARCH Pitfall 4).
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

export async function encodeVideo(entry, srcAbs, outAbs, tmpDir) {
  if (entry.class !== "hero") throw new Error(`class not implemented: ${entry.class}`);

  mkdirSync(dirname(outAbs), { recursive: true });
  run("ffmpeg", heroArgs(srcAbs, outAbs, entry.crf));

  // Poster = frame 0 of the SDR output, native width, no resize.
  const posterPng = join(tmpDir, `${entry.id}-poster.png`);
  run("ffmpeg", ["-v", "error", "-y", "-i", outAbs, "-frames:v", "1", "-update", "1", posterPng]);
  const posterAbs = insideDir(PUBLIC, entry.poster.out);
  mkdirSync(dirname(posterAbs), { recursive: true });
  await sharp(posterPng).webp({ quality: entry.poster.quality, effort: 6 }).toFile(posterAbs);

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

// Read-only checks on the pipeline outputs (`npm run verify-media`). Reads the generated
// src/data/media.generated.ts (its object literals, see readGenerated) and checks every
// video it lists:
// file under public/, faststart, yuv420p, ≤ 12,000,000 B; for the hero, the exact SDR
// signature, no audio, ≤ 4,000,000 B, 1080×574 and a WebP poster ≤ 110,000 B at 1080 px;
// for the CV, profile High and an AAC track.
// Every public/animate/videos/*.mp4: faststart, yuv420p, ≤ 12,000,000 B; the ones that are
// "process" outputs of media-src/manifest.json (read-only, skipped with a WARN when absent)
// must also be 1280×720 at 25/1 with an AAC track. The size ceiling always fails.
// Every image: all files exist, long edge ≤ 2400 (≤ 1200 for thumbnails/*), no ICC
// profile, w descriptors equal to the real widths, fallback ≤ 640 px, kebab-case names,
// graphic = no WebP and AVIF in 4:4:4.
// Galleries: every member is a known image, the Tafsut gallery has ≥ 6 plates (curated selection), and no
// .pdf file exists anywhere under public/ (PDF masters stay in media-src/).
// Finally, every "/media/..." URL in the module must exist on disk.
// Never writes anything. Exit codes: 2 = generated module missing, 1 = any FAIL, 0 = OK.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { runInNewContext } from "node:vm";
import sharp from "sharp";
import { GENERATED, MEDIA_SRC, PUBLIC, run, topLevelBoxes } from "./media/util.mjs";

const VIDEO_MAX = 12_000_000;
const HERO_MAX = 4_000_000;
const POSTER_MAX = 110_000;
const HERO_SIGNATURE = {
  profile: "High",
  pix_fmt: "yuv420p",
  color_primaries: "bt709",
  color_transfer: "bt709",
  color_space: "bt709",
  r_frame_rate: "30/1",
};

if (!existsSync(GENERATED)) {
  console.error("verify-media: src/data/media.generated.ts missing: run `npm run media` first");
  process.exit(2);
}
// The module is TypeScript, but scripts/media.mjs emits each export as a plain object
// literal followed by "as const satisfies ...". Evaluating those literals (in an empty
// context) avoids importing a .ts file, which needs Node type stripping (>= 22.18).
function readGenerated(name) {
  const text = readFileSync(GENERATED, "utf8");
  const m = new RegExp(`^export const ${name} = (\\{[\\s\\S]*?\\}) as const satisfies `, "m").exec(
    text,
  );
  if (!m) {
    console.error(`verify-media: no "export const ${name}" literal in ${GENERATED}`);
    process.exit(2);
  }
  return runInNewContext(`(${m[1]})`, Object.create(null));
}
const images = readGenerated("images");
const videos = readGenerated("videos");
const galleries = readGenerated("galleries");

const errors = [];
const warns = [];
const fail = (msg) => errors.push(msg);
const urlToPath = (url) => join(PUBLIC, url.replace(/^\//, ""));

// key=value lines of the first video stream (or of every stream of a type).
function probe(file, select, entries) {
  const { stdout } = run("ffprobe", [
    "-v",
    "error",
    "-select_streams",
    select,
    "-show_entries",
    `stream=${entries}`,
    "-of",
    "default=noprint_wrappers=1",
    file,
  ]);
  return Object.fromEntries(
    stdout
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)]),
  );
}

for (const [id, v] of Object.entries(videos)) {
  const file = urlToPath(v.src);
  if (!existsSync(file)) {
    fail(`${id}: ${v.src} missing under public/`);
    continue;
  }
  const size = statSync(file).size;
  const boxes = topLevelBoxes(file);
  const moov = boxes.indexOf("moov");
  const mdat = boxes.indexOf("mdat");
  if (moov === -1 || (mdat !== -1 && moov > mdat)) {
    fail(`${id}: not faststart (${boxes.join(",")})`);
  }
  try {
    const s = probe(file, "v:0", "pix_fmt,width,height");
    if (s.pix_fmt !== "yuv420p") fail(`${id}: pix_fmt=${s.pix_fmt}`);
    if (size > VIDEO_MAX) fail(`${id}: ${size} B > ${VIDEO_MAX} B`);

    if (id === "hero") {
      const sig = probe(file, "v:0", Object.keys(HERO_SIGNATURE).join(","));
      for (const [k, want] of Object.entries(HERO_SIGNATURE)) {
        if (sig[k] !== want) fail(`hero: ${k}=${sig[k]} (want ${want})`);
      }
      const audio = run("ffprobe", [
        "-v",
        "error",
        "-select_streams",
        "a",
        "-show_entries",
        "stream=codec_type",
        "-of",
        "csv=p=0",
        file,
      ]).stdout.trim();
      if (audio) fail("hero: has an audio stream");
      if (size > HERO_MAX) fail(`hero: ${size} B > ${HERO_MAX} B`);
      if (`${s.width},${s.height}` !== "1080,574") fail(`hero: ${s.width}x${s.height}`);
      if (`${v.width},${v.height}` !== `${s.width},${s.height}`) {
        fail(`hero: manifest says ${v.width}x${v.height}, file is ${s.width}x${s.height}`);
      }
      if (!v.poster) fail("hero: no poster in manifest");
      else if (!existsSync(urlToPath(v.poster))) fail(`hero: poster ${v.poster} missing`);
      else {
        const posterFile = urlToPath(v.poster);
        const meta = await sharp(posterFile).metadata();
        const posterSize = statSync(posterFile).size;
        if (meta.format !== "webp") fail(`hero: poster format=${meta.format}`);
        if (posterSize > POSTER_MAX) fail(`hero: poster ${posterSize} B > ${POSTER_MAX} B`);
        if (meta.width !== 1080) fail(`hero: poster width=${meta.width}`);
      }
    }
  } catch (err) {
    fail(`${id}: ${err.message}`);
  }
}

// CV: original resolution kept, audio kept.
if (videos.cv) {
  const file = urlToPath(videos.cv.src);
  if (existsSync(file)) {
    try {
      const s = probe(file, "v:0", "profile");
      if (s.profile !== "High") fail(`cv: profile=${s.profile}`);
      if (audioCodec(file) !== "aac") fail(`cv: audio=${audioCodec(file) || "none"} (want aac)`);
    } catch (err) {
      fail(`cv: ${err.message}`);
    }
  }
}

// Animate process clips, written in place under public/animate/videos/.
function audioCodec(file) {
  return run("ffprobe", [
    "-v",
    "error",
    "-select_streams",
    "a:0",
    "-show_entries",
    "stream=codec_name",
    "-of",
    "csv=p=0",
    file,
  ]).stdout.trim();
}
const ANIMATE_VIDEOS = join(PUBLIC, "animate/videos");
const MANIFEST_FILE = join(MEDIA_SRC, "manifest.json");
let processOuts = null;
if (existsSync(MANIFEST_FILE)) {
  const manifest = JSON.parse(readFileSync(MANIFEST_FILE, "utf8"));
  processOuts = new Set(
    (manifest.videos ?? []).filter((v) => v.class === "process").map((v) => v.out),
  );
} else {
  warns.push("media-src/manifest.json absent: process clips checked without 720p/25 fps rules");
}
const animateClips = existsSync(ANIMATE_VIDEOS)
  ? readdirSync(ANIMATE_VIDEOS).filter((n) => n.endsWith(".mp4"))
  : [];
for (const name of animateClips.sort()) {
  const rel = `animate/videos/${name}`;
  const file = join(PUBLIC, rel);
  const size = statSync(file).size;
  if (size > VIDEO_MAX) fail(`${rel}: ${size} B > ${VIDEO_MAX} B`);
  const boxes = topLevelBoxes(file);
  const moov = boxes.indexOf("moov");
  const mdat = boxes.indexOf("mdat");
  if (moov === -1 || (mdat !== -1 && moov > mdat)) fail(`${rel}: not faststart`);
  try {
    const s = probe(file, "v:0", "pix_fmt,width,height,r_frame_rate");
    if (s.pix_fmt !== "yuv420p") fail(`${rel}: pix_fmt=${s.pix_fmt}`);
    if (processOuts?.has(rel)) {
      if (`${s.width},${s.height}` !== "1280,720") fail(`${rel}: ${s.width}x${s.height}`);
      if (s.r_frame_rate !== "25/1") fail(`${rel}: r_frame_rate=${s.r_frame_rate}`);
      const a = audioCodec(file);
      if (a !== "aac") fail(`${rel}: audio=${a || "none"} (want aac)`);
    }
  } catch (err) {
    fail(`${rel}: ${err.message}`);
  }
}

// Images.
const IMAGE_MAX = 2400;
const THUMB_MAX = 1200;
const FALLBACK_MAX = 640;
const FILE_RE = /^[a-z0-9-]+\.(avif|webp|jpg|png)$/;
const DIR_RE = /^[a-z0-9-]+$/;

// AVIF chroma subsampling: sharp does not expose it for HEIF, ffprobe reports the pix_fmt.
function avifPixFmt(file) {
  try {
    const { stdout } = run("ffprobe", [
      "-v",
      "error",
      "-select_streams",
      "v:0",
      "-show_entries",
      "stream=pix_fmt",
      "-of",
      "csv=p=0",
      file,
    ]);
    return stdout.trim().split("\n")[0] || undefined;
  } catch {
    return undefined;
  }
}

for (const [id, img] of Object.entries(images)) {
  const cap = id.startsWith("thumbnails/") ? THUMB_MAX : IMAGE_MAX;
  const files = [
    ...img.avif.map(([w, url]) => ({ w, url, kind: "avif" })),
    ...(img.webp ?? []).map(([w, url]) => ({ w, url, kind: "webp" })),
    { url: img.fallback, kind: "fallback" },
  ];
  if (img.preset === "graphic" && img.webp) fail(`${id}: graphic entry has webp`);
  if (!img.avif.length) fail(`${id}: no avif rung`);
  for (const { w, url, kind } of files) {
    const parts = url.split("/");
    const name = parts.at(-1);
    const dir = parts.at(-2);
    if (!url.startsWith("/media/") || !FILE_RE.test(name) || !DIR_RE.test(dir)) {
      fail(`${id}: bad file name ${url}`);
    }
    const file = urlToPath(url);
    if (!existsSync(file)) {
      fail(`${id}: ${url} missing under public/`);
      continue;
    }
    try {
      const meta = await sharp(file).metadata();
      const edge = Math.max(meta.width, meta.height);
      if (edge > IMAGE_MAX) fail(`${id}: ${url} long edge ${edge} > ${IMAGE_MAX}`);
      if (kind !== "fallback" && edge > cap) fail(`${id}: ${url} long edge ${edge} > ${cap}`);
      if (meta.icc !== undefined) fail(`${id}: ${url} carries an ICC profile`);
      if (w !== undefined && w !== meta.width) {
        fail(`${id}: ${url} descriptor ${w}w but file is ${meta.width} px wide`);
      }
      if (kind === "fallback" && edge > FALLBACK_MAX) {
        fail(`${id}: fallback long edge ${edge} > ${FALLBACK_MAX}`);
      }
      if (kind === "avif" && img.preset === "graphic") {
        const pixFmt = meta.chromaSubsampling ?? avifPixFmt(file);
        if (pixFmt === undefined) warns.push(`${id}: ${url} chroma non vérifiable`);
        else if (pixFmt !== "4:4:4" && pixFmt !== "yuv444p") {
          fail(`${id}: ${url} graphic AVIF is ${pixFmt}, want 4:4:4`);
        }
      }
    } catch (err) {
      fail(`${id}: ${url}: ${err.message}`);
    }
  }
  const top = img.avif.at(-1);
  if (top && top[0] !== img.width) fail(`${id}: width ${img.width} != top rung ${top[0]}w`);
}

// Galleries.
const TAFSUT_MIN = 6;
for (const [key, members] of Object.entries(galleries ?? {})) {
  for (const id of members) if (!images[id]) fail(`gallery ${key}: unknown image ${id}`);
}
const tafsut = galleries?.["festival-identite"] ?? [];
if (tafsut.length < TAFSUT_MIN) {
  fail(`gallery festival-identite: ${tafsut.length} plates < ${TAFSUT_MIN}`);
}

// No PDF may ever be published, except the downloadable CV (also capped by check-assets).
const PDF_ALLOWLIST = new Set([join(PUBLIC, "media", "cv-lyna-rebahi.pdf")]);
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
for (const file of walk(PUBLIC)) {
  if (file.toLowerCase().endsWith(".pdf") && !PDF_ALLOWLIST.has(file)) {
    fail(`PDF under public/: ${file}`);
  }
}

// Every /media/... literal of the generated module must exist on disk.
const urls = new Set(readFileSync(GENERATED, "utf8").match(/"\/media\/[^"]+"/g) ?? []);
for (const quoted of urls) {
  const url = JSON.parse(quoted);
  if (!existsSync(urlToPath(url))) fail(`missing on disk: ${url}`);
}

for (const w of warns) console.warn(`  WARN  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(errors.length ? `verify-media: ${errors.length} failure(s)` : "verify-media: OK");
process.exit(errors.length ? 1 : 0);

// Read-only checks on the pipeline outputs (`npm run verify-media`). Imports the generated
// src/data/media.generated.ts (Node type stripping) and checks every video it lists:
// file under public/, faststart, yuv420p, ≤ 12,000,000 B; for the hero, the exact SDR
// signature, no audio, ≤ 4,000,000 B, 1080×574 and a WebP poster ≤ 110,000 B at 1080 px.
// Finally, every "/media/..." URL in the module must exist on disk.
// Never writes anything. Exit codes: 2 = generated module missing, 1 = any FAIL, 0 = OK.
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";
import { GENERATED, PUBLIC, run, topLevelBoxes } from "./media/util.mjs";

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
const { videos } = await import(pathToFileURL(GENERATED).href);

const errors = [];
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

// Every /media/... literal of the generated module must exist on disk.
const urls = new Set(readFileSync(GENERATED, "utf8").match(/"\/media\/[^"]+"/g) ?? []);
for (const quoted of urls) {
  const url = JSON.parse(quoted);
  if (!existsSync(urlToPath(url))) fail(`missing on disk: ${url}`);
}

for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(errors.length ? `verify-media: ${errors.length} failure(s)` : "verify-media: OK");
process.exit(errors.length ? 1 : 0);

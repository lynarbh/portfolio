// Offline media pipeline. Run by hand only (`npm run media`), never from check, build or
// deploy: it needs the gitignored masters in media-src/ and native binaries.
//
// Reads   media-src/manifest.json (hand-written).
// Writes  public/media/**, public/animate/videos/*.mp4, src/data/media.generated.ts and
//         media-src/.cache.json. Scratch files go to media-src/.tmp/ (removed at exit).
// Needs   sharp, ffmpeg and ffprobe (plus gs once the manifest has pdf entries).
// Output is deterministic: same masters + same manifest = byte-identical files.
//
// Flags:
//   --force             ignore the cache and re-encode every entry
//   --manifest <path>   read another manifest (validator tests)
//
// Exit codes: 2 = environment or configuration, 1 = an entry failed, 0 = OK.
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join, relative, resolve } from "node:path";
import {
  GENERATED,
  MEDIA_SRC,
  PUBLIC,
  ROOT,
  byKey,
  insideDir,
  requireBins,
  sha256,
  sha256File,
} from "./media/util.mjs";

// Bump on any encoder change (arguments, filters, poster settings) to invalidate the cache.
const PIPELINE_VERSION = "1";
const MiB = 1024 * 1024;
const BUDGET_MIB = 60;
const HERO_SSIM_WARN = 0.9;
const CLASSES = new Set(["hero"]);
const OUT_PREFIXES = ["media/", "animate/videos/"];
const CACHE_FILE = join(MEDIA_SRC, ".cache.json");
const TMP_DIR = join(MEDIA_SRC, ".tmp");

const argv = process.argv.slice(2);
const FORCE = argv.includes("--force");
const manifestArg = argv.indexOf("--manifest");
if (manifestArg !== -1 && !argv[manifestArg + 1]) {
  console.error("media: --manifest needs a path");
  process.exit(2);
}
const MANIFEST_FILE =
  manifestArg !== -1 ? resolve(argv[manifestArg + 1]) : join(MEDIA_SRC, "manifest.json");

const errors = [];
const warns = [];

// a) Binaries
requireBins(["ffmpeg", "ffprobe"]);

// b) Manifest: load and validate. Any problem is a configuration error (exit 2).
function loadManifest() {
  const invalid = (msg) => {
    console.error(`media: invalid ${MANIFEST_FILE}: ${msg}`);
    process.exit(2);
  };
  if (!existsSync(MANIFEST_FILE)) invalid("file not found");
  let m;
  try {
    m = JSON.parse(readFileSync(MANIFEST_FILE, "utf8"));
  } catch (err) {
    invalid(err.message);
  }
  if (m?.version !== 1) invalid('"version" must be 1');
  for (const key of ["images", "pdf", "videos"]) {
    if (!Array.isArray(m[key])) invalid(`"${key}" must be an array`);
  }
  if (typeof m.galleries !== "object" || m.galleries === null || Array.isArray(m.galleries)) {
    invalid('"galleries" must be an object');
  }
  if (m.images.length || m.pdf.length || Object.keys(m.galleries).length) {
    invalid("images, pdf and galleries are not implemented yet (plan 02-03 / 02-06)");
  }

  const ids = new Set();
  const outPath = (where, rel) => {
    let abs;
    try {
      abs = insideDir(PUBLIC, rel);
    } catch (err) {
      invalid(`${where}: ${err.message} (must stay inside public/)`);
    }
    if (!OUT_PREFIXES.some((p) => rel.startsWith(p))) {
      invalid(`${where}: "${rel}" must start with ${OUT_PREFIXES.join(" or ")}`);
    }
    return abs;
  };
  for (const [i, v] of m.videos.entries()) {
    const where = `videos[${i}]`;
    if (typeof v?.id !== "string" || !/^[a-z0-9-]+$/.test(v.id)) {
      invalid(`${where}: "id" must match /^[a-z0-9-]+$/`);
    }
    if (ids.has(v.id)) invalid(`${where}: duplicate id "${v.id}"`);
    ids.add(v.id);
    if (!CLASSES.has(v.class)) {
      invalid(`${where}: unknown class ${JSON.stringify(v.class)}; valid: ${[...CLASSES]}`);
    }
    let srcAbs;
    try {
      srcAbs = insideDir(MEDIA_SRC, v.src);
    } catch (err) {
      invalid(`${where}.src: ${err.message} (sources must stay inside media-src/)`);
    }
    if (!existsSync(srcAbs)) invalid(`${where}.src: media-src/${v.src} not found`);
    const outAbs = outPath(`${where}.out`, v.out);
    if (!Number.isInteger(v.crf) || v.crf < 0 || v.crf > 51) {
      invalid(`${where}: "crf" must be an integer in 0..51`);
    }
    if (v.class === "hero") {
      if (typeof v.poster?.out !== "string") invalid(`${where}: hero needs "poster.out"`);
      outPath(`${where}.poster.out`, v.poster.out);
      const q = v.poster.quality;
      if (!Number.isInteger(q) || q < 1 || q > 100) {
        invalid(`${where}.poster: "quality" must be an integer in 1..100`);
      }
    }
    v.srcAbs = srcAbs;
    v.outAbs = outAbs;
  }
  return m;
}

const manifest = loadManifest();

// c) Cache: { [id]: { key, outputs: [{ path, sha256 }], meta } }, paths relative to ROOT.
function loadCache() {
  if (!existsSync(CACHE_FILE)) return {};
  try {
    return JSON.parse(readFileSync(CACHE_FILE, "utf8"));
  } catch {
    warns.push("cache unreadable: starting from an empty cache");
    return {};
  }
}
const cache = loadCache();
const toRootRel = (abs) => relative(ROOT, abs).split("\\").join("/");

const cacheHit = (id, key) => {
  const c = cache[id];
  if (!c || c.key !== key || !Array.isArray(c.outputs)) return false;
  return c.outputs.every((o) => {
    const abs = join(ROOT, o.path);
    return existsSync(abs) && sha256File(abs) === o.sha256;
  });
};

// Effective options: everything that changes the output bytes, except the source path.
const videoOptions = (v) => ({ class: v.class, out: v.out, crf: v.crf, poster: v.poster });

const produced = new Set();
const lines = [];

// d) Scratch directory, always removed.
mkdirSync(TMP_DIR, { recursive: true });
try {
  const { encodeVideo } = await import("./media/video.mjs").catch((err) => {
    console.error(`media: cannot load encoders (is sharp installed?): ${err.message}`);
    process.exit(2);
  });
  for (const v of manifest.videos) {
    const key = sha256(sha256File(v.srcAbs) + JSON.stringify(videoOptions(v)) + PIPELINE_VERSION);
    try {
      let status = "cached";
      if (FORCE || !cacheHit(v.id, key)) {
        const { outputs, meta } = await encodeVideo(v, v.srcAbs, v.outAbs, TMP_DIR);
        cache[v.id] = {
          key,
          outputs: outputs.map((abs) => ({ path: toRootRel(abs), sha256: sha256File(abs) })),
          meta,
        };
        status = "encoded";
      }
      const { outputs, meta } = cache[v.id];
      for (const o of outputs) produced.add(o.path);
      const mib = (statSync(v.outAbs).size / MiB).toFixed(2);
      lines.push(`media: ${v.id} ${status} ${mib} MiB SSIM ${meta.ssim.toFixed(4)}`);
      if (v.class === "hero" && meta.ssim < HERO_SSIM_WARN) {
        warns.push(`${v.id} SSIM ${meta.ssim.toFixed(4)} < ${HERO_SSIM_WARN}`);
      }
    } catch (err) {
      errors.push(`${v.id}: ${err.message}`);
    }
  }
} finally {
  rmSync(TMP_DIR, { recursive: true, force: true });
}

// Keep only entries still in the manifest, keys sorted: stable file across runs.
const cacheOut = {};
for (const id of Object.keys(cache).sort(byKey)) {
  if (manifest.videos.some((v) => v.id === id)) cacheOut[id] = cache[id];
}
writeFileSync(CACHE_FILE, JSON.stringify(cacheOut, null, 2) + "\n");

// e) src/data/media.generated.ts, built only from the manifest and cached meta.
const str = JSON.stringify;
function renderGenerated() {
  const videoLines = [];
  const videos = manifest.videos
    .filter((v) => v.out.startsWith("media/video/") && cache[v.id]?.meta)
    .sort((a, b) => byKey(a.id, b.id));
  for (const v of videos) {
    const { meta } = cache[v.id];
    const fields = [["src", str("/" + v.out)]];
    if (meta.poster) fields.push(["poster", str(meta.poster)]);
    fields.push(["width", String(meta.width)], ["height", String(meta.height)]);
    videoLines.push(`  ${str(v.id)}: {`);
    for (const [k, val] of fields) videoLines.push(`    ${k}: ${val},`);
    videoLines.push("  },");
  }
  return [
    "/* eslint-disable */",
    "// AUTO-GENERATED by scripts/media.mjs from media-src/manifest.json — DO NOT EDIT. Run `npm run media`.",
    "",
    'export type MediaPreset = "photo" | "graphic";',
    "",
    "export type Rung = readonly [width: number, url: string];",
    "",
    "export type ImageEntry = {",
    "  readonly preset: MediaPreset;",
    "  readonly width: number;",
    "  readonly height: number;",
    "  readonly avif: readonly Rung[];",
    "  readonly webp?: readonly Rung[];",
    "  readonly fallback: string;",
    "  readonly alt?: string;",
    "};",
    "",
    "export type VideoEntry = {",
    "  readonly src: string;",
    "  readonly width: number;",
    "  readonly height: number;",
    "  readonly poster?: string;",
    "};",
    "",
    "export const images = {} as const satisfies Record<string, ImageEntry>;",
    "",
    "export type MediaId = keyof typeof images;",
    "",
    "export const galleries = {} as const satisfies Record<string, readonly MediaId[]>;",
    "",
    "export const videos = {",
    ...videoLines,
    "} as const satisfies Record<string, VideoEntry>;",
    "",
  ].join("\n");
}
writeFileSync(GENERATED, renderGenerated());

// f) Report: orphans under public/media (never deleted), public/ budget.
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
const mediaDir = join(PUBLIC, "media");
if (existsSync(mediaDir)) {
  for (const abs of walk(mediaDir).sort(byKey)) {
    const rel = toRootRel(abs);
    if (!produced.has(rel) && !abs.endsWith(".DS_Store")) warns.push(`orphan ${rel}`);
  }
}
const publicMiB = walk(PUBLIC).reduce((sum, f) => sum + statSync(f).size, 0) / MiB;
const budgetLine = `public/ total ${publicMiB.toFixed(1)} MiB (budget ${BUDGET_MIB} MiB)`;
if (publicMiB > BUDGET_MIB) warns.push(budgetLine);

for (const l of lines) console.log(l);
console.log(budgetLine);
for (const w of warns) console.warn(`  WARN  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(errors.length ? `media: ${errors.length} failure(s)` : "media: OK");
process.exit(errors.length ? 1 : 0);

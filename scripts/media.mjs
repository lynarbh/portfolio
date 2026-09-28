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
//   --check             validate the manifest and exit (writes nothing, needs no binaries)
//   --manifest <path>   read another manifest (validator tests). Implies --check: a test
//                       manifest must never rewrite public/, media.generated.ts or the cache.
//                       Add --write to really encode from it.
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
  toKebab,
} from "./media/util.mjs";

// Bump on any encoder change (arguments, filters, poster settings) to invalidate the cache.
const PIPELINE_VERSION = "4";
const MiB = 1024 * 1024;
const BUDGET_MIB = 60;
const SSIM_WARN = { hero: 0.9, cv: 0.98, process: 0.95 };
const CLASSES = new Set(["hero", "cv", "process"]);
const PRESET_NAMES = new Set(["photo", "graphic"]);
const IMAGE_SSIM_WARN = { photo: 0.93, graphic: 0.96 };
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
const CHECK_ONLY = argv.includes("--check") || (manifestArg !== -1 && !argv.includes("--write"));

const errors = [];
const warns = [];

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
  const defaults = m.defaults ?? {};
  if (typeof defaults !== "object" || Array.isArray(defaults)) {
    invalid('"defaults" must be an object');
  }

  // Ids are shared by images and videos: a collision is a configuration error.
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
  // Output paths: two entries must never write the same file (the later encode would
  // silently overwrite the earlier one). Keys are lower-cased: the disk is case-insensitive.
  const claimed = new Map();
  const claim = (where, rel) => {
    const k = rel.toLowerCase();
    if (claimed.has(k)) invalid(`${where}: "${rel}" is already written by ${claimed.get(k)}`);
    claimed.set(k, where);
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
    claim(`${where}.out`, v.out);
    // Process clips overwrite the file the Animate scene loads by relative path: the name
    // must be the source basename, exactly. Other classes live under media/video/.
    if (v.class === "process") {
      const want = "animate/videos/" + v.src.split("/").at(-1);
      if (v.out !== want) invalid(`${where}.out: process output must be "${want}"`);
    } else if (!v.out.startsWith("media/video/")) {
      invalid(`${where}.out: ${v.class} output must start with media/video/`);
    }
    if (!Number.isInteger(v.crf) || v.crf < 0 || v.crf > 51) {
      invalid(`${where}: "crf" must be an integer in 0..51`);
    }
    if (v.class === "hero") {
      if (typeof v.poster?.out !== "string") invalid(`${where}: hero needs "poster.out"`);
      outPath(`${where}.poster.out`, v.poster.out);
      claim(`${where}.poster.out`, v.poster.out);
      const q = v.poster.quality;
      if (!Number.isInteger(q) || q < 1 || q > 100) {
        invalid(`${where}.poster: "quality" must be an integer in 1..100`);
      }
    }
    v.srcAbs = srcAbs;
    v.outAbs = outAbs;
  }
  for (const [i, img] of m.images.entries()) {
    const where = `images[${i}]`;
    if (typeof img !== "object" || img === null) invalid(`${where}: must be an object`);
    let srcAbs;
    try {
      srcAbs = insideDir(MEDIA_SRC, img.src);
    } catch (err) {
      invalid(`${where}.src: ${err.message} (sources must stay inside media-src/)`);
    }
    if (!existsSync(srcAbs)) invalid(`${where}.src: media-src/${img.src} not found`);
    const segments = img.src.split("/");
    const project = segments[0];
    if (segments.length < 2 || !/^[a-z0-9-]+$/.test(project)) {
      invalid(`${where}.src: first segment "${project}" must be a /^[a-z0-9-]+$/ project folder`);
    }
    img.preset ??= defaults.preset ?? "graphic";
    if (!PRESET_NAMES.has(img.preset)) {
      invalid(
        `${where}: unknown preset ${JSON.stringify(img.preset)}; valid: ${[...PRESET_NAMES]}`,
      );
    }
    if (img.max !== undefined && (!Number.isInteger(img.max) || img.max < 640 || img.max > 2400)) {
      invalid(`${where}: "max" must be an integer in 640..2400`);
    }
    if (img.alt !== undefined && typeof img.alt !== "string") {
      invalid(`${where}: "alt" must be a string`);
    }
    if (img.id !== undefined) {
      if (typeof img.id !== "string" || !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(img.id)) {
        invalid(`${where}: "id" must match /^[a-z0-9-]+\\/[a-z0-9-]+$/`);
      }
    } else {
      const name = toKebab(segments[segments.length - 1].replace(/\.[^.]*$/, ""));
      if (!name) invalid(`${where}.src: cannot derive an id from "${img.src}"`);
      img.id = `${project}/${name}`;
    }
    if (ids.has(img.id)) invalid(`${where}: duplicate id "${img.id}"`);
    ids.add(img.id);
    img.srcAbs = srcAbs;
  }

  // PDF masters: each listed page becomes a still image entry (same id space).
  const imageIds = new Set(m.images.map((img) => img.id));
  m.pages = [];
  for (const [i, pdf] of m.pdf.entries()) {
    const where = `pdf[${i}]`;
    if (typeof pdf !== "object" || pdf === null) invalid(`${where}: must be an object`);
    let srcAbs;
    try {
      srcAbs = insideDir(MEDIA_SRC, pdf.src);
    } catch (err) {
      invalid(`${where}.src: ${err.message} (sources must stay inside media-src/)`);
    }
    if (!/\.pdf$/i.test(pdf.src)) invalid(`${where}.src: "${pdf.src}" is not a .pdf`);
    if (!existsSync(srcAbs)) invalid(`${where}.src: media-src/${pdf.src} not found`);
    if (!Number.isInteger(pdf.dpi) || pdf.dpi < 72 || pdf.dpi > 600) {
      invalid(`${where}: "dpi" must be an integer in 72..600`);
    }
    pdf.preset ??= "graphic";
    if (!PRESET_NAMES.has(pdf.preset)) {
      invalid(
        `${where}: unknown preset ${JSON.stringify(pdf.preset)}; valid: ${[...PRESET_NAMES]}`,
      );
    }
    if (!Array.isArray(pdf.pages) || pdf.pages.length === 0) {
      invalid(`${where}: "pages" must be a non-empty array`);
    }
    for (const [j, pg] of pdf.pages.entries()) {
      const pw = `${where}.pages[${j}]`;
      if (typeof pg !== "object" || pg === null) invalid(`${pw}: must be an object`);
      if (!Number.isInteger(pg.page) || pg.page < 1)
        invalid(`${pw}: "page" must be an integer ≥ 1`);
      if (typeof pg.id !== "string" || !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(pg.id)) {
        invalid(`${pw}: "id" must match /^[a-z0-9-]+\\/[a-z0-9-]+$/`);
      }
      if (pg.alt !== undefined && typeof pg.alt !== "string") {
        invalid(`${pw}: "alt" must be a string`);
      }
      if (ids.has(pg.id)) invalid(`${pw}: duplicate id "${pg.id}"`);
      ids.add(pg.id);
      imageIds.add(pg.id);
      m.pages.push({
        id: pg.id,
        preset: pdf.preset,
        alt: pg.alt,
        page: pg.page,
        dpi: pdf.dpi,
        pdfAbs: srcAbs,
      });
    }
  }

  // Image outputs are predictable from the id "<project>/<name>":
  // media/<project>/<name>-<width>.avif|webp and the fallback media/<project>/<name>.jpg|png.
  // Unique ids keep images apart; a video or poster must not land on one of these names.
  for (const img of [...m.images, ...m.pages]) {
    const [project, name] = img.id.split("/");
    const own = new RegExp(`^media/${project}/${name}(?:-[0-9]+)?\\.(?:avif|webp|jpg|png)$`);
    for (const [rel, where] of claimed) {
      if (own.test(rel)) {
        invalid(`${where}: "${rel}" collides with the outputs of image "${img.id}"`);
      }
    }
  }

  // Galleries: kebab keys, members are known image ids, order kept as written.
  for (const [key, members] of Object.entries(m.galleries)) {
    const where = `galleries[${JSON.stringify(key)}]`;
    if (!/^[a-z0-9-]+$/.test(key)) invalid(`${where}: key must match /^[a-z0-9-]+$/`);
    if (!Array.isArray(members) || members.length === 0) {
      invalid(`${where}: must be a non-empty array of image ids`);
    }
    for (const id of members) {
      if (!imageIds.has(id)) invalid(`${where}: unknown image id ${JSON.stringify(id)}`);
    }
    if (new Set(members).size !== members.length) invalid(`${where}: duplicate member`);
  }
  return m;
}

const manifest = loadManifest();
if (CHECK_ONLY) {
  console.log(`media: manifest OK (${MANIFEST_FILE}), nothing written`);
  process.exit(0);
}

// a) Binaries, once the manifest is known (gs only when it has pdf entries).
requireBins(["ffmpeg", "ffprobe", ...(manifest.pdf.length ? ["gs"] : [])]);

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
const imageOptions = (img) => ({ id: img.id, preset: img.preset, max: img.max, alt: img.alt });
const pageOptions = (pg) => ({ ...imageOptions(pg), page: pg.page, dpi: pg.dpi });

// Encodes (or reuses the cache for) one entry, records its outputs as produced.
async function processEntry(id, key, encode) {
  let status = "cached";
  if (FORCE || !cacheHit(id, key)) {
    const { outputs, meta } = await encode();
    cache[id] = {
      key,
      outputs: outputs.map((abs) => ({ path: toRootRel(abs), sha256: sha256File(abs) })),
      meta,
    };
    status = "encoded";
  }
  for (const o of cache[id].outputs) produced.add(o.path);
  return { status, ...cache[id] };
}

const produced = new Set();
const lines = [];

// d) Scratch directory, always removed.
mkdirSync(TMP_DIR, { recursive: true });
try {
  const loadEncoders = (path) =>
    import(path).catch((err) => {
      console.error(`media: cannot load encoders (is sharp installed?): ${err.message}`);
      process.exit(2);
    });
  const { encodeVideo } = await loadEncoders("./media/video.mjs");
  const { encodeImage } = await loadEncoders("./media/images.mjs");
  const { renderPdfPage } = await loadEncoders("./media/pdf.mjs");
  for (const v of manifest.videos) {
    const key = sha256(sha256File(v.srcAbs) + JSON.stringify(videoOptions(v)) + PIPELINE_VERSION);
    try {
      const { status, meta } = await processEntry(v.id, key, () =>
        encodeVideo(v, v.srcAbs, v.outAbs, TMP_DIR),
      );
      const mib = (statSync(v.outAbs).size / MiB).toFixed(2);
      const low = meta.ssim < SSIM_WARN[v.class];
      lines.push(
        `media: ${v.id} ${status} ${mib} MiB SSIM ${meta.ssim.toFixed(4)}${low ? " WARN" : ""}`,
      );
      if (low) warns.push(`${v.id} SSIM ${meta.ssim.toFixed(4)} < ${SSIM_WARN[v.class]}`);
    } catch (err) {
      errors.push(`${v.id}: ${err.message}`);
    }
  }
  for (const img of [...manifest.images].sort((a, b) => byKey(a.id, b.id))) {
    const key = sha256(
      sha256File(img.srcAbs) + JSON.stringify(imageOptions(img)) + PIPELINE_VERSION,
    );
    try {
      const { status, outputs, meta } = await processEntry(img.id, key, () =>
        encodeImage(img, img.srcAbs, TMP_DIR),
      );
      const kib = outputs.reduce((sum, o) => sum + statSync(join(ROOT, o.path)).size, 0) / 1024;
      const low = meta.ssim < IMAGE_SSIM_WARN[meta.preset];
      lines.push(
        `media: ${img.id} ${status} ${kib.toFixed(1)} KiB SSIM ${meta.ssim.toFixed(4)}${low ? " WARN" : ""}`,
      );
      if (low) {
        warns.push(`${img.id} SSIM ${meta.ssim.toFixed(4)} < ${IMAGE_SSIM_WARN[meta.preset]}`);
      }
    } catch (err) {
      errors.push(`${img.id}: ${err.message}`);
    }
  }
  // PDF pages: gs renders one page at a time into media-src/.tmp/, then the image preset.
  const pdfHashes = new Map();
  for (const pg of [...manifest.pages].sort((a, b) => byKey(a.id, b.id))) {
    if (!pdfHashes.has(pg.pdfAbs)) pdfHashes.set(pg.pdfAbs, sha256File(pg.pdfAbs));
    const key = sha256(
      pdfHashes.get(pg.pdfAbs) + JSON.stringify(pageOptions(pg)) + PIPELINE_VERSION,
    );
    try {
      const { status, outputs, meta } = await processEntry(pg.id, key, async () => {
        const png = join(TMP_DIR, `page-${String(pg.page).padStart(2, "0")}.png`);
        renderPdfPage(pg.pdfAbs, pg.page, pg.dpi, png);
        try {
          return await encodeImage(pg, png, TMP_DIR);
        } finally {
          rmSync(png, { force: true });
        }
      });
      const kib = outputs.reduce((sum, o) => sum + statSync(join(ROOT, o.path)).size, 0) / 1024;
      const low = meta.ssim < IMAGE_SSIM_WARN[meta.preset];
      lines.push(
        `media: ${pg.id} (pdf p.${pg.page}) ${status} ${kib.toFixed(1)} KiB SSIM ${meta.ssim.toFixed(4)}${low ? " WARN" : ""}`,
      );
      if (low) {
        warns.push(`${pg.id} SSIM ${meta.ssim.toFixed(4)} < ${IMAGE_SSIM_WARN[meta.preset]}`);
      }
    } catch (err) {
      errors.push(`${pg.id}: ${err.message}`);
    }
  }
} finally {
  rmSync(TMP_DIR, { recursive: true, force: true });
}

// Keep only entries still in the manifest, keys sorted: stable file across runs.
const cacheOut = {};
for (const id of Object.keys(cache).sort(byKey)) {
  if ([...manifest.videos, ...manifest.images, ...manifest.pages].some((e) => e.id === id)) {
    cacheOut[id] = cache[id];
  }
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
  const imageLines = [];
  const rungs = (list) => list.map(([w, url]) => `      [${w}, ${str(url)}],`);
  const imgs = [...manifest.images, ...manifest.pages]
    .filter((img) => cache[img.id]?.meta)
    .sort((a, b) => byKey(a.id, b.id));
  for (const img of imgs) {
    const { meta } = cache[img.id];
    imageLines.push(`  ${str(img.id)}: {`);
    imageLines.push(`    preset: ${str(meta.preset)},`);
    imageLines.push(`    width: ${meta.width},`, `    height: ${meta.height},`);
    imageLines.push("    avif: [", ...rungs(meta.avif), "    ],");
    if (meta.webp) imageLines.push("    webp: [", ...rungs(meta.webp), "    ],");
    imageLines.push(`    fallback: ${str(meta.fallback)},`);
    if (meta.alt !== undefined) imageLines.push(`    alt: ${str(meta.alt)},`);
    imageLines.push("  },");
  }
  const galleryLines = [];
  for (const key of Object.keys(manifest.galleries).sort(byKey)) {
    // Members keep the manifest order (gallery order is editorial, never sorted).
    const members = manifest.galleries[key].filter((id) => cache[id]?.meta);
    galleryLines.push(`  ${str(key)}: [`, ...members.map((id) => `    ${str(id)},`), "  ],");
  }
  const galleriesDecl = galleryLines.length
    ? ["export const galleries = {", ...galleryLines, "}"]
    : ["export const galleries = {}"];
  galleriesDecl[galleriesDecl.length - 1] +=
    " as const satisfies Record<string, readonly MediaId[]>;";
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
    "export const images = {",
    ...imageLines,
    "} as const satisfies Record<string, ImageEntry>;",
    "",
    "export type MediaId = keyof typeof images;",
    "",
    ...galleriesDecl,
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

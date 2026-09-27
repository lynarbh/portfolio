// sharp presets for still images. Deterministic (same source + options = same bytes):
// no metadata is ever kept (no withMetadata/keepIccProfile), so EXIF, GPS and ICC are
// stripped and every output is plain sRGB.
//
// Ladder (RESEARCH Pitfall 9): top = min(long edge, cap); rungs = 640/1200/2400 below top,
// plus top itself. Never upscaled. Descriptors come from sharp's info.width, never from
// the ladder constant. One fallback at min(640, long edge): JPEG for opaque photos, PNG
// for graphics and for any transparent image (Pitfall 6).
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { PUBLIC, run } from "./util.mjs";

sharp.cache(false);

const LADDER = [640, 1200, 2400];
const MAX_EDGE = 2400;
const FALLBACK_EDGE = 640;
const SSIM_EDGE = 1200;

export const PRESETS = {
  photo: {
    avif: { quality: 55, effort: 4, chromaSubsampling: "4:2:0" },
    webp: { quality: 78, effort: 5, smartSubsample: true },
    jpg: { quality: 80, mozjpeg: true },
    png: { palette: true, quality: 90, effort: 10, compressionLevel: 9 },
  },
  graphic: {
    avif: { quality: 70, effort: 4, chromaSubsampling: "4:4:4" },
    png: { palette: true, quality: 90, effort: 10, compressionLevel: 9 },
  },
};

export const SSIM_WARN = { photo: 0.93, graphic: 0.96 };

// Resize to fit a t×t box, sRGB, alpha dropped only when the source is fully opaque.
const base = (file, t, opaque) => {
  const p = sharp(file, { failOn: "none" })
    .rotate()
    .resize({ width: t, height: t, fit: "inside", withoutEnlargement: true, kernel: "lanczos3" })
    .toColourspace("srgb");
  return opaque ? p.removeAlpha() : p;
};

// Image SSIM through ffmpeg on rgb24 (alpha ignored).
function imageSsim(refPng, testPng) {
  const { stderr } = run("ffmpeg", [
    "-v",
    "info",
    "-nostats",
    "-i",
    refPng,
    "-i",
    testPng,
    "-lavfi",
    "[0:v]format=rgb24[a];[1:v]format=rgb24[b];[a][b]ssim",
    "-f",
    "null",
    "-",
  ]);
  const m = /All:([0-9.]+)/.exec(stderr);
  if (!m) throw new Error("ssim: no All: value in ffmpeg output");
  return Number(m[1]);
}

// entry: validated manifest entry { id: "<project>/<name>", preset, max?, alt? }.
export async function encodeImage(entry, srcAbs, tmpDir) {
  const preset = PRESETS[entry.preset];
  if (!preset) throw new Error(`unknown preset: ${entry.preset}`);
  const [project, name] = entry.id.split("/");

  // Real format from the content (several ".jpg" masters are PNG files).
  const meta = await sharp(srcAbs, { failOn: "none" }).metadata();
  if (!meta.width || !meta.height) throw new Error(`no dimensions (format ${meta.format})`);
  // The long edge does not depend on the EXIF orientation (rotate() only swaps axes).
  const longEdge = Math.max(meta.width, meta.height);
  const opaque = (await sharp(srcAbs, { failOn: "none" }).stats()).isOpaque;

  const top = Math.min(longEdge, entry.max ?? MAX_EDGE, MAX_EDGE);
  const targets = [...LADDER.filter((t) => t < top), top];

  const outDir = join(PUBLIC, "media", project);
  mkdirSync(outDir, { recursive: true });
  const url = (file) => `/media/${project}/${file}`;

  const outputs = [];
  const avif = [];
  const webp = [];
  let width = 0;
  let height = 0;
  for (const t of targets) {
    const avifFile = `${name}-${t}.avif`;
    const info = await base(srcAbs, t, opaque).avif(preset.avif).toFile(join(outDir, avifFile));
    outputs.push(join(outDir, avifFile));
    avif.push([info.width, url(avifFile)]);
    if (t === top) ({ width, height } = info);
    if (preset.webp) {
      const webpFile = `${name}-${t}.webp`;
      const wInfo = await base(srcAbs, t, opaque).webp(preset.webp).toFile(join(outDir, webpFile));
      outputs.push(join(outDir, webpFile));
      webp.push([wInfo.width, url(webpFile)]);
    }
  }

  const useJpg = entry.preset === "photo" && opaque;
  const fbFile = `${name}.${useJpg ? "jpg" : "png"}`;
  const fb = base(srcAbs, FALLBACK_EDGE, opaque);
  await (useJpg ? fb.jpeg(preset.jpg) : fb.png(preset.png)).toFile(join(outDir, fbFile));
  outputs.push(join(outDir, fbFile));

  // SSIM on the 1200 rung (or the top rung when smaller): lossless reference of the same
  // resize vs the decoded AVIF.
  const ssimTarget = Math.min(SSIM_EDGE, top);
  const refPng = join(tmpDir, `${project}-${name}-ref.png`);
  const decPng = join(tmpDir, `${project}-${name}-dec.png`);
  await base(srcAbs, ssimTarget, opaque).png().toFile(refPng);
  await sharp(join(outDir, `${name}-${ssimTarget}.avif`))
    .png()
    .toFile(decPng);
  const ssim = imageSsim(refPng, decPng);

  const result = {
    preset: entry.preset,
    width,
    height,
    avif,
    ...(preset.webp ? { webp } : {}),
    fallback: url(fbFile),
    ...(entry.alt !== undefined ? { alt: entry.alt } : {}),
    ssim,
  };
  return { outputs, meta: result };
}

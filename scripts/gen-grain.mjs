// Génère la tuile de grain du hero : bruit seedé (mulberry32, 4 niveaux de gris) en 128×128,
// agrandi ×2 en « nearest » vers 256×256, enregistré en WebP lossless. Sortie byte-identique
// entre exécutions. Usage : node scripts/gen-grain.mjs  →  public/media/grain.webp
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = join(import.meta.dirname, "..");
const OUT = join(ROOT, "public/media/grain.webp");
const SIZE = 128;
const SEED = 0x5eed1234;

const mulberry32 = (a) => () => {
  a |= 0;
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const rnd = mulberry32(SEED);
const levels = [40, 110, 170, 230];
const px = Buffer.alloc(SIZE * SIZE);
for (let i = 0; i < px.length; i++) px[i] = levels[Math.floor(rnd() * levels.length)];

const webp = await sharp(px, { raw: { width: SIZE, height: SIZE, channels: 1 } })
  .resize(SIZE * 2, SIZE * 2, { kernel: "nearest" })
  .toColourspace("b-w")
  .webp({ lossless: true, effort: 6 })
  .toBuffer();
writeFileSync(OUT, webp);
console.log(`grain: ${OUT} ${webp.length} B`);

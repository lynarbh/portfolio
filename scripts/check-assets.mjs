// Asset guard: run after `vite build`. Fails on oversize files, forbidden source files,
// non-yuv420p videos and non-faststart MP4s in dist/client (what Cloudflare will serve).
import {
  readdirSync,
  statSync,
  readFileSync,
  existsSync,
  openSync,
  readSync,
  closeSync,
} from "node:fs";
import { join, relative, extname } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = join(import.meta.dirname, "..");
const DIST = join(ROOT, "dist/client");
const EXCEPTIONS_FILE = join(ROOT, "scripts/check-assets.exceptions.json");
const MiB = 1024 * 1024;
const HARD = 25 * MiB; // Cloudflare per-asset limit, never waivable
const FAIL = 20 * MiB; // waivable with rule "size"
const WARN = 10 * MiB;
const FORBIDDEN = new Set([".fla", ".ai", ".tmp", ".pdf", ".psd", ".xd", ".aep", ".prproj"]);

if (!existsSync(DIST)) {
  console.error("dist/client missing: run vite build first");
  process.exit(2);
}

const exceptions = JSON.parse(readFileSync(EXCEPTIONS_FILE, "utf8")).exceptions ?? [];
const waived = (rel, rule) =>
  exceptions.some((e) => e.path.normalize("NFC") === rel && e.waive.includes(rule));

const assetsIgnorePath = join(DIST, ".assetsignore");
const ignored = existsSync(assetsIgnorePath)
  ? new Set(
      readFileSync(assetsIgnorePath, "utf8")
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    )
  : new Set();

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

// Top-level MP4 boxes, in file order. Faststart = "moov" before "mdat".
function topLevelBoxes(file) {
  const size = statSync(file).size;
  const fd = openSync(file, "r");
  const buf = Buffer.alloc(16);
  const boxes = [];
  let offset = 0;
  try {
    while (offset < size && boxes.length < 32) {
      const read = readSync(fd, buf, 0, 16, offset);
      if (read < 8) break;
      let boxSize = buf.readUInt32BE(0);
      const type = buf.toString("latin1", 4, 8);
      if (boxSize === 1) {
        if (read < 16) break;
        boxSize = Number(buf.readBigUInt64BE(8));
      } else if (boxSize === 0) {
        boxSize = size - offset;
      }
      if (boxSize < 8) break;
      boxes.push(type);
      offset += boxSize;
    }
  } finally {
    closeSync(fd);
  }
  return boxes;
}

// null = ffprobe unavailable (graceful skip)
function pixFmt(file) {
  const r = spawnSync(
    "ffprobe",
    [
      "-v",
      "error",
      "-select_streams",
      "v:0",
      "-show_entries",
      "stream=pix_fmt",
      "-of",
      "csv=p=0",
      file,
    ],
    { encoding: "utf8" },
  );
  if (r.error) return null;
  // csv output can carry trailing fields/lines (e.g. "yuv420p10le,"): keep the first value
  return r.stdout.trim().split(/[\n,]/)[0].trim();
}

const errors = [];
const warns = [];
const report = (rel, rule, message) => {
  if (waived(rel, rule)) warns.push(`${message} [waived]`);
  else errors.push(message);
};

let total = 0;
let ffprobeMissing = false;

for (const abs of walk(DIST)) {
  const rel = relative(DIST, abs).split("\\").join("/").normalize("NFC");
  if (rel === ".assetsignore" || ignored.has(rel)) continue;
  const size = statSync(abs).size;
  total += size;
  const mib = (size / MiB).toFixed(2);
  const ext = extname(rel).toLowerCase();

  if (FORBIDDEN.has(ext)) errors.push(`forbidden source file: ${rel}`);

  if (size > HARD) errors.push(`${rel} ${mib} MiB > 25 MiB (Cloudflare hard limit, not waivable)`);
  else if (size > FAIL) report(rel, "size", `${rel} ${mib} MiB > 20 MiB`);
  else if (size > WARN) warns.push(`${rel} ${mib} MiB > 10 MiB`);

  if (ext === ".mp4") {
    const boxes = topLevelBoxes(abs);
    const moov = boxes.indexOf("moov");
    const mdat = boxes.indexOf("mdat");
    const faststart = moov !== -1 && (mdat === -1 || moov < mdat);
    if (!faststart) report(rel, "faststart", `${rel} not faststart (${boxes.join(",")})`);
    const pf = pixFmt(abs);
    if (pf === null) ffprobeMissing = true;
    else if (pf !== "yuv420p") report(rel, "pix_fmt", `${rel} pix_fmt=${pf}`);
  }
}

for (const e of exceptions) {
  if (!existsSync(join(DIST, e.path))) warns.push(`stale exception (file gone): ${e.path}`);
}
if (ffprobeMissing) warns.push("ffprobe not found: pix_fmt NOT checked");

console.log(
  `check-assets: ${(total / MiB).toFixed(1)} MiB in dist/client, ${exceptions.length} exception(s):`,
);
for (const e of exceptions) {
  console.log(`  EXCEPTION ${e.path} waive=[${e.waive.join(",")}]: ${e.reason}`);
}
for (const w of warns) console.warn(`  WARN  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(errors.length ? `check-assets: ${errors.length} failure(s)` : "check-assets: OK");
process.exit(errors.length ? 1 : 0);

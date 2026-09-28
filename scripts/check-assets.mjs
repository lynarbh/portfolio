// Asset guard: run after `vite build`. Fails on oversize files, forbidden source files,
// non-yuv420p videos and non-faststart MP4s in dist/client (what Cloudflare will serve).
// The whole dist/client must also stay under a 60 MiB total budget (real byte sizes of the
// files Cloudflare uploads), and every MP4 under 12,000,000 B (the per-video contract of the
// media pipeline); these two rules are never waivable.
//
// Requires ffprobe (FFmpeg) on PATH for the pix_fmt rule. Without it, the rule is skipped
// with a WARN by default. Strict mode turns "ffprobe not found" into a failure; use it on
// CI or any machine where the pix_fmt check must be enforced:
//   node scripts/check-assets.mjs --strict      (or CHECK_ASSETS_STRICT=1)
// Strict mode is deliberately not wired into `npm run check`.
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
const BUDGET = 60 * MiB; // whole dist/client, never waivable
const VIDEO_MAX = 12_000_000; // bytes per .mp4, never waivable
const FORBIDDEN = new Set([".fla", ".ai", ".tmp", ".pdf", ".psd", ".xd", ".aep", ".prproj"]);
// The only PDF allowed to ship: the downloadable CV, under a hard byte cap. Not waivable, not extensible
// through the exceptions file (brand-guide PDFs and other sources stay in media-src/).
const PDF_ALLOWLIST = new Map([["media/cv-lyna-rebahi.pdf", 3_000_000]]);
const STRICT = process.argv.includes("--strict") || process.env.CHECK_ASSETS_STRICT === "1";

if (!existsSync(DIST)) {
  console.error("dist/client missing: run vite build first");
  process.exit(2);
}

const errors = [];
const warns = [];

// Rules an exception may waive. The 25 MiB ceiling, the 60 MiB total budget, the
// 12,000,000 B per-MP4 ceiling, forbidden extensions and ffprobe failures are deliberately
// absent: they can never be waived.
const RULES = new Set(["size", "faststart", "pix_fmt"]);

function loadExceptions() {
  if (!existsSync(EXCEPTIONS_FILE)) {
    warns.push("exceptions file not found: no exceptions applied");
    return [];
  }
  const invalid = (msg) => {
    console.error(`check-assets: invalid ${relative(ROOT, EXCEPTIONS_FILE)}: ${msg}`);
    process.exit(2);
  };
  let parsed;
  try {
    parsed = JSON.parse(readFileSync(EXCEPTIONS_FILE, "utf8"));
  } catch (err) {
    invalid(err.message);
  }
  const list = parsed?.exceptions ?? [];
  if (!Array.isArray(list)) invalid('"exceptions" must be an array');
  for (const [i, e] of list.entries()) {
    const where = `exception #${i} ${JSON.stringify(e)}`;
    if (typeof e?.path !== "string" || e.path === "") invalid(`${where}: "path" must be a string`);
    if (!Array.isArray(e.waive) || e.waive.length === 0) {
      invalid(`${where}: "waive" must be a non-empty array`);
    }
    const unknown = e.waive.filter((r) => !RULES.has(r));
    if (unknown.length) {
      invalid(
        `${where}: unknown rule(s) ${unknown.join(", ")}; valid rules: ${[...RULES].join(", ")}` +
          " (25 MiB ceiling and forbidden extensions are never waivable)",
      );
    }
    if (e.reason !== undefined && typeof e.reason !== "string") {
      invalid(`${where}: "reason" must be a string`);
    }
  }
  return list;
}

const exceptions = loadExceptions();
const waived = (rel, rule) =>
  exceptions.some((e) => e.path.normalize("NFC") === rel && e.waive.includes(rule));

// .assetsignore uses gitignore syntax on Cloudflare. Supported subset: "#" comments,
// "!" negation (last match wins), leading "/" anchor, trailing "/" directory, "*", "?",
// "**". A pattern without an inner "/" matches at any depth. Not supported: "[...]"
// classes and "\" escapes (matched literally). Unlike git, "!" here can re-include a file
// whose parent directory is excluded: avoid negations under an excluded directory.
function globToRegExp(pattern) {
  let p = pattern;
  const dirOnly = p.endsWith("/");
  if (dirOnly) p = p.slice(0, -1);
  const anchored = p.includes("/");
  if (p.startsWith("/")) p = p.slice(1);
  let body = "";
  for (let i = 0; i < p.length; i++) {
    const c = p[i];
    if (c === "*" && p[i + 1] === "*") {
      if (p[i + 2] === "/") {
        body += "(?:.*/)?";
        i += 2;
      } else {
        body += ".*";
        i += 1;
      }
    } else if (c === "*") body += "[^/]*";
    else if (c === "?") body += "[^/]";
    else body += c.replace(/[.+^${}()|[\]\\]/g, "\\$&");
  }
  const prefix = anchored ? "^" : "^(?:.*/)?";
  const suffix = dirOnly ? "/.*$" : "(?:/.*)?$";
  return new RegExp(prefix + body + suffix);
}

const assetsIgnorePath = join(DIST, ".assetsignore");
const ignoreRules = existsSync(assetsIgnorePath)
  ? readFileSync(assetsIgnorePath, "utf8")
      .split("\n")
      .map((s) => s.trim().normalize("NFC"))
      .filter((s) => s && !s.startsWith("#"))
      .map((s) => {
        const negate = s.startsWith("!");
        return { negate, re: globToRegExp(negate ? s.slice(1) : s) };
      })
  : [];
const isIgnored = (rel) => {
  let result = false;
  for (const { negate, re } of ignoreRules) if (re.test(rel)) result = !negate;
  return result;
};

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

// null = ffprobe unavailable (graceful skip unless strict mode)
// { error } = ffprobe ran but could not read a video stream (corrupt file, audio-only...)
// { pixFmt } = pixel format of the first video stream
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
  if (r.status !== 0) {
    const firstLine = (r.stderr || "").trim().split("\n")[0].trim();
    return { error: firstLine || `exit ${r.status}` };
  }
  // csv output can carry trailing fields/lines (e.g. "yuv420p10le,"): keep the first value
  const value = r.stdout.trim().split(/[\n,]/)[0].trim();
  return value ? { pixFmt: value } : { error: "no video stream" };
}

const report = (rel, rule, message) => {
  if (waived(rel, rule)) warns.push(`${message} [waived]`);
  else errors.push(message);
};

let total = 0;
let ffprobeMissing = false;

for (const abs of walk(DIST)) {
  const rel = relative(DIST, abs).split("\\").join("/").normalize("NFC");
  if (rel === ".assetsignore" || isIgnored(rel)) continue;
  const size = statSync(abs).size;
  total += size;
  const mib = (size / MiB).toFixed(2);
  const ext = extname(rel).toLowerCase();

  if (FORBIDDEN.has(ext)) {
    const cap = PDF_ALLOWLIST.get(rel);
    if (cap === undefined) errors.push(`forbidden source file: ${rel}`);
    else if (size > cap) errors.push(`${rel} ${size} B > ${cap} B CV PDF cap (not waivable)`);
  }

  if (size > HARD) errors.push(`${rel} ${mib} MiB > 25 MiB (Cloudflare hard limit, not waivable)`);
  else if (size > FAIL) report(rel, "size", `${rel} ${mib} MiB > 20 MiB`);
  else if (size > WARN) warns.push(`${rel} ${mib} MiB > 10 MiB`);

  if (ext === ".mp4") {
    if (size > VIDEO_MAX) {
      errors.push(`${rel} ${size} B > ${VIDEO_MAX} B per-video ceiling (not waivable)`);
    }
    const boxes = topLevelBoxes(abs);
    const moov = boxes.indexOf("moov");
    const mdat = boxes.indexOf("mdat");
    const faststart = moov !== -1 && (mdat === -1 || moov < mdat);
    if (!faststart) report(rel, "faststart", `${rel} not faststart (${boxes.join(",")})`);
    const pf = pixFmt(abs);
    if (pf === null) ffprobeMissing = true;
    // A file ffprobe cannot read is a hard failure, never waivable under "pix_fmt".
    else if (pf.error) errors.push(`${rel} ffprobe failed: ${pf.error}`);
    else if (pf.pixFmt !== "yuv420p") report(rel, "pix_fmt", `${rel} pix_fmt=${pf.pixFmt}`);
  }
}

if (total > BUDGET) {
  errors.push(`dist/client ${(total / MiB).toFixed(1)} MiB > 60 MiB total budget (not waivable)`);
}

for (const e of exceptions) {
  if (!existsSync(join(DIST, e.path))) warns.push(`stale exception (file gone): ${e.path}`);
}
if (ffprobeMissing) {
  const msg = "ffprobe not found: pix_fmt NOT checked";
  if (STRICT) errors.push(`${msg} (strict mode)`);
  else warns.push(msg);
}

console.log(
  `check-assets: ${(total / MiB).toFixed(1)} MiB in dist/client, ${exceptions.length} exception(s):`,
);
for (const e of exceptions) {
  console.log(`  EXCEPTION ${e.path} waive=[${e.waive.join(",")}]: ${e.reason ?? ""}`);
}
for (const w of warns) console.warn(`  WARN  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(errors.length ? `check-assets: ${errors.length} failure(s)` : "check-assets: OK");
process.exit(errors.length ? 1 : 0);

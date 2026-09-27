// Shared helpers for scripts/media.mjs and scripts/verify-media.mjs.
// No side effects at import time: paths, subprocess runner (argument arrays, never a
// shell), hashing, kebab-case ids, path-traversal guard, MP4 box scan and video SSIM.
import { createHash } from "node:crypto";
import { closeSync, openSync, readFileSync, readSync, statSync } from "node:fs";
import { isAbsolute, join, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";

export const ROOT = join(import.meta.dirname, "..", "..");
export const MEDIA_SRC = join(ROOT, "media-src");
export const PUBLIC = join(ROOT, "public");
export const GENERATED = join(ROOT, "src/data/media.generated.ts");

// Runs a binary with an argument array. Throws on a non-zero exit (first stderr line) and
// tags a missing binary with code "ENOBIN".
export function run(bin, args, opts = {}) {
  const r = spawnSync(bin, args, { encoding: "utf8", maxBuffer: 256 * 1024 * 1024, ...opts });
  if (r.error) {
    const err = new Error(`${bin}: ${r.error.message}`);
    if (r.error.code === "ENOENT") err.code = "ENOBIN";
    throw err;
  }
  if (r.status !== 0) {
    const firstLine = (r.stderr || "").trim().split("\n")[0].trim();
    throw new Error(`${bin} exited ${r.status}: ${firstLine || "(no stderr)"}`);
  }
  return { stdout: r.stdout, stderr: r.stderr };
}

// Exit 2 (environment) when a required binary is missing.
export function requireBins(list) {
  for (const bin of list) {
    try {
      run(bin, ["-version"]);
    } catch (err) {
      console.error(`media: required binary not usable: ${bin} (${err.message})`);
      process.exit(2);
    }
  }
}

export const sha256 = (data) => createHash("sha256").update(data).digest("hex");
export const sha256File = (path) => sha256(readFileSync(path));

// Decode each run of %XX sequences on its own (a stray "%" is kept as-is).
const decodePercent = (text) =>
  text.replace(/(?:%[0-9A-Fa-f]{2})+/g, (run) => {
    try {
      return decodeURIComponent(run);
    } catch {
      return run;
    }
  });

// ø/Ø do not decompose under NFKD, so they are mapped explicitly.
export const toKebab = (name) =>
  decodePercent(name)
    .normalize("NFKD")
    .replace(/ø/g, "o")
    .replace(/Ø/g, "O")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Resolves `rel` under `baseAbs`. Throws on absolute paths, ".." segments and anything
// that resolves outside the base directory.
export function insideDir(baseAbs, rel) {
  if (typeof rel !== "string" || rel === "") throw new Error("path must be a non-empty string");
  if (isAbsolute(rel)) throw new Error(`absolute path not allowed: ${rel}`);
  if (rel.split(/[\\/]/).includes("..")) throw new Error(`".." segment not allowed: ${rel}`);
  const abs = resolve(baseAbs, rel);
  if (!abs.startsWith(baseAbs + sep)) throw new Error(`path escapes its base: ${rel}`);
  return abs;
}

// Fixed comparator: never localeCompare (locale-dependent output breaks determinism).
export const byKey = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

// Top-level MP4 boxes, in file order. Faststart = "moov" before "mdat".
// Copied from scripts/check-assets.mjs (that file runs and exits at module level).
export function topLevelBoxes(file) {
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

// Video SSIM. Both inputs are re-timed to frame index N in a 1/fps timebase first: the
// ssim filter pairs frames by timestamp, and MKV/MP4 timebases round differently
// (RESEARCH Pitfall 2). settb before setpts matters: "setpts=N/fps/TB" alone, on a 1/1000
// MKV timebase, rounds 33.33 ms steps into colliding timestamps and shifts the pairing by
// one frame (measured 0.806 instead of 0.916 on the hero).
export function ssim(refPath, testPath, fps) {
  const { stderr } = run("ffmpeg", [
    "-v",
    "info",
    "-nostats",
    "-i",
    refPath,
    "-i",
    testPath,
    "-lavfi",
    `[0:v]settb=1/${fps},setpts=N[a];[1:v]settb=1/${fps},setpts=N[b];[a][b]ssim`,
    "-f",
    "null",
    "-",
  ]);
  const m = /All:([0-9.]+)/.exec(stderr);
  if (!m) throw new Error("ssim: no All: value in ffmpeg output");
  return Number(m[1]);
}

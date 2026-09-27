// Asset inventory: classifies every file served from public/ (outside public/animate/) as
// REF (full URL path found in the corpus), NAME-ONLY (only the file name found) or UNREF,
// and reverse-scans src/ for /assets|videos|animate|media/ URLs that point to missing files.
// URLs are percent-decoded and everything is compared in NFC (macOS may store NFD names).
// Read-only: this script never moves or deletes anything. Exit 1 if any MISSING.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative, extname, basename, sep } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SRC = join(ROOT, "src");
const PUBLIC = join(ROOT, "public");
const ANIMATE = join(PUBLIC, "animate");
const SRC_EXT = new Set([".ts", ".tsx", ".css", ".json", ".html"]);
const ANIMATE_EXT = new Set([".html", ".js"]);

const nfc = (s) => s.normalize("NFC");
const toUrl = (abs) => "/" + relative(PUBLIC, abs).split(sep).join("/");

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

// Decode each run of %XX sequences on its own: decodeURIComponent on the whole text
// throws on any stray "%" (CSS percentages, minified JS...), so failures are kept as-is.
const decodePercent = (text) =>
  text.replace(/(?:%[0-9A-Fa-f]{2})+/g, (run) => {
    try {
      return decodeURIComponent(run);
    } catch {
      return run;
    }
  });

const srcFiles = walk(SRC).filter(
  (f) => SRC_EXT.has(extname(f)) && basename(f) !== "routeTree.gen.ts",
);
const animateFiles = existsSync(ANIMATE)
  ? readdirSync(ANIMATE)
      .map((n) => join(ANIMATE, n))
      .filter((f) => ANIMATE_EXT.has(extname(f)))
  : [];

const readNfc = (f) => {
  const raw = readFileSync(f, "utf8");
  return nfc(raw + "\n" + decodePercent(raw));
};
const srcTexts = srcFiles.map(readNfc);
const corpus = [...srcTexts, ...animateFiles.map(readNfc)].join("\n");

// 1. Classify public files (outside public/animate/).
const publicFiles = walk(PUBLIC)
  .filter((f) => !f.startsWith(ANIMATE + sep))
  .filter((f) => basename(f) !== ".DS_Store")
  .sort();
const ref = [];
const nameOnly = [];
const unref = [];
for (const f of publicFiles) {
  const url = nfc(toUrl(f));
  const name = nfc(basename(f));
  if (corpus.includes(url)) ref.push(url);
  else if (corpus.includes(name)) nameOnly.push(url);
  else unref.push(url);
}

// 2. Reverse scan: URL literals in src/ that do not resolve to a file in public/.
const existing = new Set(walk(PUBLIC).map((f) => nfc(toUrl(f))));
const missing = new Set();
const URL_RE = /\/(?:assets|videos|animate|media)\/[^"'`\n]+/g;
for (const text of srcTexts) {
  for (const match of text.matchAll(URL_RE)) {
    const url = nfc(decodePercent(match[0]).replace(/[?#].*$/, ""));
    if (url.includes("${")) continue; // template expression, not a literal path
    if (!existing.has(url)) missing.add(url);
  }
}

const print = (label, list) => {
  console.log(`\n${label} (${list.length})`);
  for (const item of list) console.log(`  ${item}`);
};
print("NAME-ONLY: file name found, full path not found (review by hand)", nameOnly);
print("UNREF: not referenced anywhere", unref);
print("MISSING: referenced in src/ but absent from public/", [...missing].sort());
console.log(
  `\nREF=${ref.length} NAME-ONLY=${nameOnly.length} UNREF=${unref.length} MISSING=${missing.size}`,
);
process.exit(missing.size > 0 ? 1 : 0);

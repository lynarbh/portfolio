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

const withDecoded = (raw) => nfc(raw + "\n" + decodePercent(raw));
const srcRaw = srcFiles.map((f) => readFileSync(f, "utf8"));
const animateRaw = animateFiles.map((f) => readFileSync(f, "utf8"));
const corpus = [...srcRaw, ...animateRaw].map(withDecoded).join("\n");

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
// Scanned on the raw (still percent-encoded) text so that "%20" is not turned into a space
// that would cut the match short; each match is decoded afterwards. Two passes:
// - quoted literals ("...", '...', `...`) that start with the prefix: the whole literal is the
//   path, so spaces, parentheses and commas inside it are kept;
// - bare text (quoted literals blanked out): stops at whitespace, quotes, brackets and commas,
//   drops trailing sentence punctuation, and skips external URLs and template pieces (a path
//   preceded by a host, path or "}" character, e.g. https://cdn.example.com/assets/x.png or
//   ${BASE}/assets/x.png).
const QUOTED_RE = /(["'`])(\/(?:assets|videos|animate|media)\/[^"'`\n]+?)\1/g;
const BARE_RE = /(?<![\w.:/}-])\/(?:assets|videos|animate|media)\/[^\s"'`()<>,]+/g;
const candidates = (text) => [
  ...[...text.matchAll(QUOTED_RE)].map((m) => m[2]),
  ...[...text.replace(QUOTED_RE, " ").matchAll(BARE_RE)].map((m) =>
    m[0].replace(/[.,;:!?)>\]]+$/, ""),
  ),
];
for (const text of srcRaw.map(nfc)) {
  for (const raw of candidates(text)) {
    if (raw.includes("${")) continue; // template expression, not a literal path
    const url = nfc(decodePercent(raw).replace(/[?#].*$/, ""));
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

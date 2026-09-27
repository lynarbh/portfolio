---
phase: 01-nettoyage-filet-de-s-curit
reviewed: 2026-09-27T21:11:26Z
depth: standard
iteration: 3
files_reviewed: 12
files_reviewed_list:
  - scripts/check-assets.mjs
  - scripts/check-assets.exceptions.json
  - scripts/inventory-assets.mjs
  - src/data/projects.ts
  - src/routes/index.tsx
  - src/routes/projects/$projectId.tsx
  - src/styles.css
  - package.json
  - knip.json
  - eslint.config.js
  - .prettierignore
  - .nvmrc
findings:
  critical: 0
  warning: 2
  info: 15
  total: 17
status: issues_found
---

# Phase 01: Code Review Report (iteration 3)

**Reviewed:** 2026-09-27T21:11:26Z
**Depth:** standard
**Files Reviewed:** 12
**Status:** issues_found

## Summary

Since iteration 2 there is one new commit, `8a0ee29`, and it changes only `scripts/inventory-assets.mjs`. The commit replaces the single `URL_RE` with two passes:

- `QUOTED_RE` takes quoted literals whole.
- `BARE_RE` scans the text left after the quoted literals are blanked. It rejects matches that come after a host, a path character or `}`, and trims trailing punctuation.

The iteration-1 findings WR-01 to WR-08 were not touched, so their verdicts from iteration 2 carry over unchanged. WR-01 to WR-05, WR-07 and WR-08 are resolved. WR-06 became iteration-2 WR-01, which is re-checked below.

**Tool results on the real tree:**
- `node scripts/inventory-assets.mjs` prints `REF=62 NAME-ONLY=0 UNREF=0 MISSING=0` and exits 0.
- `npx prettier --check scripts/inventory-assets.mjs` passes.
- `npx eslint scripts/inventory-assets.mjs` passes.

**Synthetic tests:** a harness in `scratchpad/iter3/t.mjs` ran the exact two regexes and the `candidates()` logic on 27 inputs.

| Input | Result | Verdict |
|---|---|---|
| `"/assets/palette de couleurs.png"` | whole path | OK (iter-2 WR-01 case fixed) |
| `"/assets/logo (1).png",` | whole path | OK (iter-2 WR-01 case fixed) |
| `"/assets/a,b.png"` | whole path | OK |
| `"/assets/palette%20de%20couleurs.png"` | raw match, decoded afterwards | OK |
| `Voir /assets/a.png.` / `;` / `(voir /assets/a.png)` | `/assets/a.png` | OK (prose punctuation trimmed) |
| `https://cdn.example.com/assets/x.png` | no match | OK |
| `` `${BASE}/assets/x.png` `` | no match (`}` lookbehind) | OK |
| `` `/assets/${name}.png` `` | candidate containing `${`, then skipped | OK |
| `url("/assets/bg.png")`, `url('/assets/bg one.png')`, `url(/assets/bg.png)` | correct path | OK |
| `"/assets/a.png""/assets/b.png"` (adjacent) | both found separately | OK (lazy match plus back-reference does not merge them) |
| `"/assets/a.png" /assets/b.png` (blank then bare) | both found | OK |
| a quoted path that spans `\n` | not taken as one literal | OK |
| `"\/assets\/a.png"` (JSON-escaped) | no match | false negative, IN-15 |
| `"/assets/l'image.png"` | `/assets/l` | **false MISSING, WR-02** |
| `'/assets/l"x.png'` | `/assets/l` | **false MISSING, WR-02** |
| `srcSet="/assets/a.png 1x, /assets/a@2x.png 2x"` | a single candidate `/assets/a.png 1x, /assets/a@2x.png 2x` | **false MISSING, regression, WR-01** |
| `"/assets/a.png "` (trailing space) | `/assets/a.png ` | false MISSING, IN-15 |
| `l'/assets/a.png d'abord` (apostrophe directly before the path) | `/assets/a.png d` | contrived, IN-15 |

**Blanking and offsets:** `text.replace(QUOTED_RE, " ")` replaces each literal with a single space, so it does not preserve length. That is harmless here: nothing uses match indices. Only the matched text is consumed, and the one-space replacement leaves the bare pass's lookbehind context unchanged or neutral. No defect.

**Iteration-2 WR-01 verdict: resolved** for every case it listed (spaces, `(1)`, commas, prose punctuation). However, the commit introduces a new regression for `srcset` lists (WR-01 below). It also leaves the "taken whole" promise false for literals that contain the other quote character (WR-02). `inventory-assets.mjs` is not wired into `check` or `deploy`, so neither warning blocks a deploy. Both give a false exit 1 from the manual audit tool, which is the same impact class as iteration-2 WR-01, so they keep the same severity.

## Warnings

### WR-01: A quoted `srcset`/`srcSet` value is taken whole as one path, giving a false MISSING (regression from `8a0ee29`)

**File:** `scripts/inventory-assets.mjs:76`, `:79`
**Issue:** `QUOTED_RE` treats the whole literal as one URL. In a `srcset` the literal is a comma-separated list of `URL descriptor` pairs.

- Input: `srcSet="/assets/a.png 1x, /assets/a@2x.png 2x"`
- Result: one candidate, `/assets/a.png 1x, /assets/a@2x.png 2x`, which is reported MISSING and makes the script exit 1.

Before this commit, `BARE_RE`-style matching stopped at whitespace and commas, so it produced `/assets/a.png` and `/assets/a@2x.png`, which is correct. The repo has no `srcset` today, so the real tree is clean. But phase 2 of this milestone is about cutting image weight, and responsive `srcSet`/`sizes` markup is the usual way to do that. It will likely trip the tool as soon as it is added. The same applies to `w` descriptors (`/assets/a-480.jpg 480w, …`).

**Fix:** after extracting a quoted literal, split it when it looks like a candidate list. Verified in `scratchpad/iter3/fix.mjs`:
```js
const split = (lit) =>
  /\s\d+(?:\.\d+)?[wx]\b/.test(lit)
    ? lit.split(",").map((s) => s.trim().split(/\s+/)[0])
    : [lit.trim()];
// in candidates(): ...[...text.matchAll(QUOTED_RE)].flatMap((m) => split(m[1] ?? m[2] ?? m[3])),
```

### WR-02: A quoted literal that contains the other quote character is cut short, giving a false MISSING (`"/assets/l'image.png"`)

**File:** `scripts/inventory-assets.mjs:76`
**Issue:** the body class `[^"'`\n]` excludes all three quote characters whichever quote opened the literal. For `"/assets/l'image.png"`, `QUOTED_RE` finds no closing `"` before the `'`, so it does not match. The literal is not blanked, and `BARE_RE` then reports `/assets/l` as MISSING. The same happens with `'/assets/l"x.png'` and with a backtick literal that contains `'`.

This site's files are named in French, and elisions such as `l'affiche.png` or `d'identité.jpg` are realistic macOS file names. The commit message says quoted literals are "taken whole", which is not true in this case. The bug existed before `8a0ee29` as well, but that commit was the fix meant to make quoted literals robust.

**Fix:** use one alternative per quote type, so each body only excludes its own delimiter:
```js
const P = String.raw`\/(?:assets|videos|animate|media)\/`;
const QUOTED_RE = new RegExp(
  String.raw`"(${P}[^"\n]+?)"|'(${P}[^'\n]+?)'|` + "`(" + P + "[^`\\n]+?)`",
  "g",
);
// capture = m[1] ?? m[2] ?? m[3]
```
This was verified on the synthetic cases. Adjacent literals are still found separately, `${` literals are still skipped, and the spaces, `(1)` and comma cases still pass. Re-run `node scripts/inventory-assets.mjs` afterwards to confirm the real tree still reports `MISSING=0`.

## Info

### IN-01: Orphaned `// --- SITE WEB ---` header and double blank line (carried over)
**File:** `src/data/projects.ts:16-19`
**Fix:** Delete the empty section header.

### IN-02: `Project.category` union has dead members (`Design`, `SAE`), and `Site Web` has no filter chip (carried over)
**File:** `src/data/projects.ts:4`, `src/routes/index.tsx:15`
**Fix:** Remove the dead members from the union. Either derive `CATEGORIES` from the data or add the missing chip.

### IN-03: Stale comments `// Ajoute Link ici` and `{/* Circular portrait */}` (carried over)
**File:** `src/routes/index.tsx:1`, `:134`

### IN-04: The stale-exception check only detects a missing file, not an unused waiver, and does not normalize `path` (carried over)
**File:** `scripts/check-assets.mjs:231-233`

### IN-05: Only `.mp4` files get the faststart/pix_fmt inspection (carried over)
**File:** `scripts/check-assets.mjs:217`

### IN-06: `walk(PUBLIC)` runs twice, and REF/NAME-ONLY matching is substring-based (carried over)
**File:** `scripts/inventory-assets.mjs:50`, `:60-61`, `:66`

### IN-07: `@custom-variant dark` has no consumer (carried over)
**File:** `src/styles.css:4`

### IN-08: `knip` is configured but not installed; `wrangler` is used by `check`/`deploy` but not declared (carried over)
**File:** `package.json:16-17`, `knip.json`
**Fix:** `npm i -D knip wrangler@^4`.

### IN-09: `scripts/*.mjs` are outside ESLint's recommended-rules block (carried over)
**File:** `eslint.config.js:12`

### IN-10: `npm run lint` is red (609 Prettier errors), so `check` and `deploy` do not gate lint (carried over)
**File:** `package.json:16`

### IN-11: Some malformed exceptions-file shapes fail closed without a diagnostic (carried over)
**File:** `scripts/check-assets.mjs:58`, `:82`, `:232`

### IN-12: Minor parity and diagnostics gaps (`_headers`/`_redirects` are not skipped, raw box types are printed, a truncated MP4 with faststart passes) (carried over)
**File:** `scripts/check-assets.mjs:205`, `:149`, `:222`

### IN-13: `engines` is advisory only; `@types/node` targets 22 while `.nvmrc` pins 24; extraneous `tw-animate-css` in local `node_modules` (carried over)
**File:** `package.json:6-8`, `.nvmrc`

### IN-14: An audio-only `.mp4` is a hard failure that cannot be waived; make sure the header comment says so (carried over)
**File:** `scripts/check-assets.mjs:191-192`, `:226`

### IN-15: Remaining edge cases in the two-pass scanner (new, minor)
**File:** `scripts/inventory-assets.mjs:76-82`
**Issue:**
- **Surrounding whitespace:** A quoted literal with leading or trailing whitespace (`"/assets/a.png "`) is reported MISSING. Browsers strip that whitespace from `src`/`href`. The `.trim()` in the WR-01 fix covers this.
- **JSON-escaped slashes:** `"\/assets\/a.png"` produces no candidate, so a missing file written this way goes undetected. There are no `.json` files under `src/` today.
- **Elision just before a path:** An apostrophe directly before a bare path, as in `l'/assets/a.png d'abord`, is read as a quoted literal and produces `/assets/a.png d`. This is contrived. The per-quote alternatives do not change it.
- **Unused capture group:** `m[1]`, the quote character, is captured only to support the back-reference. This is harmless.

**Fix:** The `.trim()` from the WR-01 fix handles the first case. The others can be documented as known limits in the header comment.

---

_Reviewed: 2026-09-27T21:11:26Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_

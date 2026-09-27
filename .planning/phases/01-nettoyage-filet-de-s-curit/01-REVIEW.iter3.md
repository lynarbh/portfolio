---
phase: 01-nettoyage-filet-de-s-curit
reviewed: 2026-09-27T21:06:15Z
depth: standard
iteration: 2
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
  warning: 1
  info: 14
  total: 15
status: issues_found
---

# Phase 01: Code Review Report (iteration 2)

**Reviewed:** 2026-09-27T21:06:15Z
**Depth:** standard
**Files Reviewed:** 12
**Status:** issues_found

## Summary

This pass re-checked the eight iteration-1 warnings against the fix commits `cc17cfe..719bb5b`, ran each fix where that was possible, and looked for regressions. Fixtures were kept in the scratchpad: a copy of the script with a symlinked or synthetic `dist/client`. No repo files were modified.

The toolchain is green on a fresh build: `tsc --noEmit` passes, and `vite build` exits 0. `check-assets.mjs` returns OK and consumes the 3 exceptions. `inventory-assets.mjs` reports `REF=62 NAME-ONLY=0 UNREF=0 MISSING=0`, and `npm ls --package-lock-only` exits 0.

### Verification of iteration-1 warnings

| ID | Verdict | Evidence |
|----|---------|----------|
| WR-01 ffprobe failure reporting | **Resolved** | A garbage `bad.mp4` gives `FAIL ffprobe failed: [mov,mp4,…] moov atom not found`. This failure is not waivable: a `pix_fmt` waiver on that file had no effect. An AAC-only `.mp4` gives `FAIL ffprobe failed: no video stream`. |
| WR-02 exceptions schema | **Resolved** | Each malformed input exits 2 with a one-line message: missing `path`, `waive:["hard"]`, `waive:"pix_fmt"`, a `null` entry, `reason: 3` and invalid JSON. A missing file gives `WARN exceptions file not found` and the check still fails closed. Some shape errors are still accepted silently, but they fail closed (IN-11). |
| WR-03 `.assetsignore` globs | **Resolved** | Differential test: 26 pattern sets × 29 paths compared with `ignore@5.3.2`, the library wrangler's `createAssetsIgnoreFunction` uses. There were 5 divergences, all in the documented limitations: a `!` re-include under an excluded directory, and `[ab]` classes. In the first case the script checks *more* files than Cloudflare uploads, which is the safe direction. An end-to-end run with `sub/` + `*.map` correctly skipped `sub/huge.fla` and `a.js.map`. |
| WR-04 strict mode | **Resolved** | With `PATH=/usr/bin:/bin`: the default run exits 0 with a WARN, `--strict` exits 1, and `CHECK_ASSETS_STRICT=1` exits 1. |
| WR-05 guard on deploy path | **Resolved** | `"deploy": "npm run check && wrangler deploy"`. There is no `vercel.json` or other deploy path left in the repo. Not executed. |
| WR-06 `URL_RE` false MISSING | **Partially resolved; regression reopened as WR-01 below** | The three reviewer inputs now behave correctly, and `%20` paths decode correctly. But a quoted path containing a literal space, `(` or `,` is now cut short and reported MISSING. The old regex handled that case correctly. Prose with trailing punctuation is also still a false MISSING. |
| WR-07 `tw-animate-css` | **Resolved** | The package is gone from `styles.css`, `package.json`, the lockfile and `knip.json`. No `animate-*`/`fade-*`/`zoom-*`/`slide-in-*` utility remains in `src/`. The lockfile edit was checked by running `npm install --package-lock-only` in a scratch copy. It produces the same 60-line `@tailwindcss/oxide-wasm32-wasi` bundled-deps delta as the pre-fix lockfile (`3c98145`), so that drift predates the fix. The hand edit added no inconsistency. |
| WR-08 Node floor | **Resolved** | The root package in `package.json` and the lockfile both declare `engines.node >=20.11`, and `.nvmrc` is `24`. Enforcement is advisory only (IN-13). |

## Warnings

### WR-01: Tightened `URL_RE` truncates quoted paths that contain spaces, parentheses or commas, producing false MISSING (regression from the WR-06 fix)

**File:** `scripts/inventory-assets.mjs:72-78`
**Issue:** The fix stops matches at `\s ( ) ,` everywhere, including inside quoted string literals. Browsers percent-encode `src` values themselves, so a literal space in a quoted path is valid and works. The repo already contains such a file: `public/assets/palette de couleurs.png`. Today it is referenced as `palette%20de%20couleurs.png`, so the run is clean. If the phase 2 rename or re-encode work writes it the natural way, the tool fails with exit 1. Verified with synthetic inputs:
- `src="/assets/palette de couleurs.png"` → match `/assets/palette` → MISSING. The pre-fix regex (`[^"'`\n]+`) handled this correctly, so this is a regression.
- `image: "/assets/logo (1).png",` → `/assets/logo` → MISSING. `(1)` is the default macOS/Windows duplicate-file suffix.
- `<p>Voir la maquette /assets/a.png.</p>` → `/assets/a.png.` → MISSING. The JSX-prose case from the original WR-06 still fails whenever the sentence ends on the path. The same happens with `;` in `Voir /assets/a.png; puis`.
- `` `${BASE}/assets/x.png` `` → matched as a literal `/assets/x.png` because `}` is not in the lookbehind. This is harmless today but gives a false MISSING if the file does not exist.

The corpus-based REF classification (line 60) still uses `includes()` and finds the literal-space path. The same file would therefore show up as both REF and MISSING in one run.
**Fix:** Scan quoted literals and unquoted occurrences separately. Inside quotes, allow everything except the closing quote. Outside quotes, keep the strict class and trim trailing sentence punctuation:
```js
const QUOTED_RE = /(["'`])(\/(?:assets|videos|animate|media)\/[^"'`\n]+?)\1/g;
const BARE_RE = /(?<![\w.:/}-])\/(?:assets|videos|animate|media)\/[^\s"'`()<>,]+/g;
const candidates = (text) => [
  ...[...text.matchAll(QUOTED_RE)].map((m) => m[2]),
  ...[...text.replace(QUOTED_RE, "").matchAll(BARE_RE)].map((m) => m[0].replace(/[.;:!?]+$/, "")),
];
for (const text of srcRaw.map(nfc)) {
  for (const raw of candidates(text)) {
    const url = nfc(decodePercent(raw).replace(/[?#].*$/, ""));
    if (url.includes("${")) continue;
    if (!existing.has(url)) missing.add(url);
  }
}
```
Then re-run the synthetic cases above, and confirm the real tree still reports `MISSING=0`.

## Info

### IN-01: Orphaned `// --- SITE WEB ---` header and double blank line (carried over, still true)
**File:** `src/data/projects.ts:16-19`
**Fix:** Delete the empty section header.

### IN-02: `Project.category` union has dead members (`Design`, `SAE`) and `Site Web` has no filter chip (carried over)
**File:** `src/data/projects.ts:4`, `src/routes/index.tsx:15`
**Fix:** Prune the union; derive `CATEGORIES` from the data or add the chip.

### IN-03: Stale comments `// Ajoute Link ici` and `{/* Circular portrait */}` (carried over, still true)
**File:** `src/routes/index.tsx:1`, `src/routes/index.tsx:134`
**Fix:** Delete or correct them.

### IN-04: The stale-exception check only detects a missing file, not an unused waiver, and does not normalize `path` (carried over)
**File:** `scripts/check-assets.mjs:231-233`
**Fix:** Track consumed `(path, rule)` pairs in `report()` and warn about the unused ones. Compare against the NFC-normalized walked `rel` set instead of `existsSync`.

### IN-05: Only `.mp4` gets the faststart/pix_fmt inspection; `.mov`/`.m4v`/`.webm` do not (carried over)
**File:** `scripts/check-assets.mjs:217`

### IN-06: `walk(PUBLIC)` runs twice; REF/NAME-ONLY matching is substring-based (carried over)
**File:** `scripts/inventory-assets.mjs:50`, `:60-61`, `:66`

### IN-07: `@custom-variant dark` has no consumer (carried over, now line 4)
**File:** `src/styles.css:4`

### IN-08: `knip` is configured but not installed or scripted; `wrangler` is invoked by `check` and by the new `deploy` script but not declared (carried over)
**File:** `package.json:17-18`, `knip.json`
**Fix:** `npm i -D knip wrangler@^4`. The new `deploy` script now depends on the transitive `wrangler` binary too, which makes this more relevant.

### IN-09: `scripts/*.mjs` are outside ESLint's recommended-rules block (carried over)
**File:** `eslint.config.js:12`

### IN-10: `npm run lint` is red with 609 Prettier errors, so `check`/`deploy` do not gate lint (carried over, re-verified: 609 errors, 1 warning)
**File:** `package.json:17`

### IN-11: Some malformed exceptions shapes still fail silently (they fail closed)
**File:** `scripts/check-assets.mjs:58`, `scripts/check-assets.mjs:82`, `scripts/check-assets.mjs:232`
**Issue:** These shapes are all silently treated as "0 exceptions": a top-level array `[{…}]`, a misspelled key `{"exception": […]}`, `{"exceptions": null}`, or a JSON string. The run then FAILs on every waived rule, and nothing points at the real cause. A path written as `"./videos/hero.mp4"` or `"/videos/hero.mp4"` never matches `rel`, so the waiver has no effect. It also gets no "stale" warning, because `existsSync(join(DIST, "./videos/hero.mp4"))` is true. All of these fail closed, so this is diagnostics only.
**Fix:** Require `parsed` to be a plain object with an `exceptions` array. Reject `path` values that start with `/` or `./` or contain `\`.

### IN-12: Minor parity and diagnostics gaps in `check-assets.mjs`
**File:** `scripts/check-assets.mjs:205`, `:149`, `:222`
**Issue:**
- Wrangler always ignores `/_headers` and `/_redirects`, in addition to `/.assetsignore` (`createAssetsIgnoreFunction`). The script only skips `.assetsignore`, so those files are counted in the total. They are tiny, so there is no practical impact.
- For a non-MP4 file with a `.mp4` extension, box types are printed as raw latin1 bytes. The observed output was `not faststart (age⏎)`, which puts a newline in the log line.
- A truncated MP4 with faststart (the first 3000 bytes of a valid file) passes both rules and ships, because ffprobe reads the moov header without decoding. This is outside the guard's stated rules, but it is worth knowing.
**Fix:** Add `rel === "_headers" || rel === "_redirects"` to the skip. Sanitize box types with `type.replace(/[^\x20-\x7e]/g, "?")`.

### IN-13: `engines` is advisory only; `@types/node` targets 22 while `.nvmrc` pins 24; local `node_modules` still has extraneous `tw-animate-css`
**File:** `package.json:6-8`, `.nvmrc`
**Issue:** Without `engine-strict=true` in `.npmrc`, `npm install` on Node 18 only warns, and the scripts then crash as described in iteration 1. `npm ls` reports `tw-animate-css@1.4.0 extraneous`, along with the pre-existing `@emnapi/runtime` and `tslib`.
**Fix:** Optionally add `.npmrc` with `engine-strict=true`. Run `npm prune` locally.

### IN-14: An audio-only `.mp4` is now a hard, non-waivable failure
**File:** `scripts/check-assets.mjs:191-192`, `:226`
**Issue:** This is an intentional design choice, as the fixer documented: `no video stream` is pushed straight into `errors`. If an audio-only `.mp4` is ever served (for example a soundtrack excerpt), the only way out is renaming it to `.m4a`. Make sure the header comment says this, so a future author does not try to add a waiver.

---

_Reviewed: 2026-09-27T21:06:15Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_

---
last_mapped_commit: 163c48737bad29b01210096abf6fb8eeec45c5a0
---

# Testing Patterns

**Analysis Date:** 2026-09-27

## Test Framework

**Runner:**
- **None.** There is no unit/integration/E2E test runner installed (no Jest, Vitest, Playwright, Cypress, Testing Library), no `*.test.*`/`*.spec.*` files anywhere in the repo, and no `test` script in `package.json`. This is a deliberate, out-of-scope decision for this milestone (confirmed in `.planning/phases/01-nettoyage-filet-de-s-curit/01-VALIDATION.md:20`: *"Framework: none — no unit test framework in this repo (out of scope)"*).
- Do not add a test framework speculatively; if a future phase decides to add one, it will be a scoped decision recorded in `.planning/`, not an ad-hoc addition.

**Assertion Library:** Not applicable — none used.

**Run Commands:**
```bash
npm run check          # tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run
npm run lint            # eslint . — currently RED (609 pre-existing Prettier errors, tracked as IN-10; not part of `check`)
npx knip                 # manual unused-file/export/dependency audit (knip is not an installed devDependency)
node scripts/inventory-assets.mjs   # asset reference/missing-file audit (read-only)
```

## Verification Story (de-facto "testing")

Since there is no test runner, correctness is verified through a chain of static/build-time checks plus manual smoke checks. This is the actual quality gate developers and CI-equivalent workflows rely on:

1. **`tsc --noEmit`** — TypeScript type-checking only, no emit (`tsconfig.json`: `noEmit: true`). Strict mode is on, but `noUnusedLocals`/`noUnusedParameters` are off, so this does not catch dead code.
2. **`vite build`** — Full production build (SSR + client), the same build used by both deployment targets (Cloudflare Workers, Vercel).
3. **`node scripts/check-assets.mjs`** — Custom asset guard, run after `vite build`, that inspects `dist/client` (what Cloudflare will actually serve):
   - Hard 25 MiB per-asset ceiling (Cloudflare Workers limit) — **never waivable**.
   - 20 MiB soft `FAIL` threshold, 10 MiB `WARN` threshold — waivable per-file via `scripts/check-assets.exceptions.json` (rule `"size"` only).
   - Forbidden source-file extensions in the served output: `.fla`, `.ai`, `.tmp`, `.pdf`, `.psd`, `.xd`, `.aep`, `.prproj` — **never waivable**.
   - MP4 validation: must have "faststart" (moov atom placement) and `yuv420p` pixel format. Requires `ffprobe` (FFmpeg) on `PATH` for the `pix_fmt` check; without it, that rule is skipped with a WARN by default.
   - `--strict` / `CHECK_ASSETS_STRICT=1` turns a missing `ffprobe` into a hard failure. Strict mode is **deliberately not wired into `npm run check`** (see `scripts/check-assets.mjs:1-8`) — it is meant for environments (e.g. CI) where the `pix_fmt` rule must be enforced.
   - Exceptions file format: `{ "exceptions": [...] }`, entries reference a waivable `rule` (`"size" | "faststart" | "pix_fmt"`); malformed exceptions cause the script to exit non-zero with a diagnostic (`scripts/check-assets.mjs` invalid-exceptions handling).
4. **`wrangler deploy --dry-run`** — Validates the Cloudflare Workers deployment configuration (`wrangler.jsonc`) without actually deploying. **Never run `wrangler deploy` (without `--dry-run`) as part of exploration/verification** — that performs a real deployment.

```bash
npm run check   # = tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run
```

**Separately, `node scripts/inventory-assets.mjs`** (not part of `npm run check`) performs a read-only asset audit:
- Classifies every file under `public/` (excluding `public/animate/`, the compiled Adobe Animate export) as `REF` (full URL path found referenced in `src/`), `NAME-ONLY` (only the bare filename appears, e.g. a partial/dynamic reference), or `UNREF` (not referenced at all).
- Reverse-scans `src/**/*.{ts,tsx,css,json,html}` (and `public/animate/**/*.{html,js}`) for `/assets|videos|animate|media/`-style URLs pointing at files that don't exist, reporting them as `MISSING`.
- Handles percent-encoded URLs and NFC/NFD Unicode filename normalization (macOS stores composed filenames differently than some tools expect) — see the header comment at `scripts/inventory-assets.mjs:1-4`.
- Exit code is 1 if any `MISSING` reference is found; it never moves or deletes files (read-only by design).
- Run it manually with `node scripts/inventory-assets.mjs`; expect a final summary line of the form `UNREF=<n> MISSING=<n>` — `MISSING` must be `0`.

**`npm run lint` (`eslint .`) is a separate, currently-red signal, not part of `npm run check`:**
- As of this analysis: 609 errors + 1 warning, effectively all `prettier/prettier` formatting violations (see `CONVENTIONS.md`). This is known, pre-existing debt (tracked as review finding IN-10), not something to "fix" incidentally while doing unrelated work — but do not add *new* lint errors, and prefer running `npm run format` / `prettier --write <file>` on any file you touch to avoid growing the count.
- `npm run check` intentionally omits `lint` so that this pre-existing redness does not block builds/deploys.

## Test File Organization

Not applicable — no test files exist. If a future phase introduces tests, there is no established co-location or `__tests__/` convention yet to follow; that decision has not been made in this codebase.

## GSD Phase-Level Validation Artifacts

Per-phase validation contracts exist under `.planning/phases/<phase>/`, e.g. `.planning/phases/01-nettoyage-filet-de-s-curit/01-VALIDATION.md`. These are GSD workflow artifacts, not a test suite:
- Define a **Per-Task Verification Map** — each task maps to a threat/requirement reference and a concrete automated command (mostly shell one-liners combining `grep`, `test`, `git`, `npm run check`, `curl`, and occasional `npx knip@<pinned-version>` invocations) or a manual/human checkpoint.
- Distinguish **automated** verification (fs/git/grep/http assertions, e.g. `test ! -d src/components/ui && ... && npm run check`) from **manual-only** verification, e.g.:
  - Following the 6-scene Adobe Animate/CreateJS chain end-to-end in a real browser (canvas-based animation with timed `window.open` calls — no headless browser in this project to automate this).
  - Visually confirming absence of removed decorative elements (petals, cursor, ornaments) — the automated proof is a `grep` for the removed component/class names in `src/`, but visual confirmation itself is manual.
  - Sweeping the Network tab (DevTools, "Disable cache") across the home page + 9 project pages for 0 × 404s, since a curl sweep only covers server-rendered HTML, not runtime-triggered requests (client JS, iframes).
- These validation docs are the closest thing to a "test plan" in this repo. When making changes to phase-1-adjacent areas (asset pipeline, cleanup guarantees, Animate embed), check for a relevant `*-VALIDATION.md` before assuming there is no verification contract.

## Mocking

Not applicable — no mocking framework or pattern exists (no test framework to mock within).

## Fixtures and Factories

Not applicable — no test fixtures exist. The closest analog is the deliberately temporary `public/zz-*` fixture files used manually in phase-1 validation to exercise `scripts/check-assets.mjs` failure paths (oversize, non-faststart, forbidden extension) before being deleted — see `.planning/phases/01-nettoyage-filet-de-s-curit/01-VALIDATION.md:43`. This is a manual verification technique, not a committed fixture directory.

## Coverage

**Requirements:** None enforced — no coverage tool is configured (there is no test runner to produce coverage from).

## Test Types

**Unit Tests:** Not used.

**Integration Tests:** Not used.

**E2E Tests:** Not used. The closest equivalent is manual smoke testing via `npx wrangler dev --port 8787` plus a `curl` sweep of the home page and each of the 9 project detail pages, and manual DevTools inspection for the Animate-embed scene chain and absence of removed decorative UI (see GSD validation docs above).

## Common Patterns

**Async Testing:** Not applicable.

**Error Testing:** Not applicable — error paths (`Contact`'s EmailJS failure branch, the "Projet introuvable" not-found branch, the router's `DefaultErrorComponent`) are exercised manually, not via automated tests. If verifying one of these paths, trigger it directly in a running dev server (`npm run dev`) rather than looking for an existing automated test.

## Adding Verification For New Work

Since there is no test framework, when a phase/task needs a verifiable acceptance check:
- Prefer a deterministic shell-composable check (`grep`/`test`/`git` + `npm run check` + targeted `curl`) over prose, matching the style already used in `.planning/phases/*/`-VALIDATION.md` files.
- Reach for `npm run check` as the baseline "did I break the build/assets/deploy config" gate.
- Reach for `node scripts/inventory-assets.mjs` when a change touches asset references or filenames.
- Reach for `npx knip` when a change removes/adds dependencies or files, to confirm nothing is orphaned.
- Flag anything that genuinely requires a human (visual confirmation, following the Animate scene chain, DevTools network sweep) as a manual checkpoint rather than inventing a fake automated proxy for it.

---

*Testing analysis: 2026-09-27*

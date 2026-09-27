---
phase: 01-nettoyage-filet-de-s-curit
fixed_at: 2026-09-27T21:30:00Z
review_path: .planning/phases/01-nettoyage-filet-de-s-curit/01-REVIEW.md
iteration: 1
fix_scope: critical_warning
findings_in_scope: 8
fixed: 8
skipped: 0
status: all_fixed
---

# Phase 01: Code Review Fix Report

**Fixed at:** 2026-09-27T21:30:00Z
**Source review:** .planning/phases/01-nettoyage-filet-de-s-curit/01-REVIEW.md
**Iteration:** 1

**Summary:**
- Findings in scope: 8 (WR-01 to WR-08; 0 critical; IN-01 to IN-10 out of scope)
- Fixed: 8
- Skipped: 0

## Fixed Issues

### WR-01: ffprobe non-zero exit is reported as `pix_fmt=` instead of as an ffprobe failure

**Files modified:** `scripts/check-assets.mjs`
**Commit:** cc17cfe
**Applied fix:** `pixFmt()` now returns `null` (binary missing), `{ error }` (non-zero exit, with the first stderr line, or `no video stream` when stdout is empty) or `{ pixFmt }`. An `{ error }` becomes a **hard failure** `"<file> ffprobe failed: <reason>"`, pushed straight into `errors` and never routed through `report()`, so a `pix_fmt` waiver cannot hide it. Chosen over a separate waivable `probe` rule: a file ffprobe cannot read should never ship. Consequence: an audio-only `.mp4` will fail and cannot be waived. Checked with a fake `dist/client/videos/bad.mp4`: `FAIL videos/bad.mp4 ffprobe failed: [mov,mp4,...] moov atom not found`.

### WR-02: Exceptions file is consumed without any schema validation

**Files modified:** `scripts/check-assets.mjs`
**Commit:** 2cf45e3
**Applied fix:** New `loadExceptions()` checks the file when it loads. Each entry must be `{ path: non-empty string, waive: non-empty array, reason?: string }`. Unknown rule names are rejected, with the valid rules listed (`size, faststart, pix_fmt`) and a reminder that the 25 MiB ceiling and forbidden extensions can never be waived. Malformed JSON or a bad shape exits 2 with a one-line message instead of a stack trace. A missing file means "no exceptions" and adds a WARN (no ENOENT crash). The existing `check-assets.exceptions.json` is unchanged and still passes (`check-assets: OK`, 3 exceptions). Tested: missing `path`, unknown rules `hard`/`pixfmt`, invalid JSON, file deleted.

### WR-03: `.assetsignore` is treated as an exact-path list; Cloudflare treats it as gitignore-style globs

**Files modified:** `scripts/check-assets.mjs`
**Commit:** b327027
**Applied fix:** Added a small gitignore-style matcher (`globToRegExp` + `isIgnored`) with no new dependency. It supports `#` comments, `!` negation (last match wins), a leading `/` anchor, a trailing `/` for directories, `*`, `?` and `**`, and patterns without an inner `/` match at any depth. Checked against 16 matcher cases, and against a temporary `.assetsignore` (`animate/videos/` + `!animate/videos/empattage.mp4`), which excluded the right files. Limitations are noted in the code comment: `[...]` classes and `\` escapes are matched literally, and unlike git, `!` can re-include a file under an excluded directory.

### WR-04: Missing ffprobe only downgrades to a warning — no strict mode for CI

**Files modified:** `scripts/check-assets.mjs`
**Commit:** bc2375b
**Applied fix:** With `--strict` or `CHECK_ASSETS_STRICT=1`, a missing ffprobe becomes a FAIL (`ffprobe not found: pix_fmt NOT checked (strict mode)`). The default is still a WARN. `CI=true` does **not** turn strict mode on, so a Cloudflare build image without ffprobe will not break unexpectedly. Strict mode is not wired into `npm run check`. The script header now says ffprobe is required and explains strict mode. Tested with `PATH=/usr/bin:/bin`: non-strict passes with a WARN, and both `--strict` and the env variable exit 1.

### WR-05: The guard is not on the deploy path

**Files modified:** `package.json`
**Commit:** 4fe6ba2
**Applied fix:** Added `"deploy": "npm run check && wrangler deploy"`. **Not executed**, so production is untouched until phase 2. `check` is unchanged (it still ends with `wrangler deploy --dry-run`, as decided in CONTEXT.md).

### WR-06: `URL_RE` in the inventory reverse-scan is over-greedy and produces false `MISSING`

**Files modified:** `scripts/inventory-assets.mjs`
**Commit:** aeedf3d
**Applied fix:** The new pattern is ``/(?<![\w.:/-])\/(?:assets|videos|animate|media)\/[^\s"'`()<>,]+/g``. It stops at whitespace, quotes, backticks, `()`, `<>` and `,`, and it skips external URLs (a path preceded by a host or path character). Tightening the regex exposed one more issue: the scan ran on the corpus *after* `%20` had been decoded, so `palette%20de%20couleurs.png` was cut at the first space and reported as MISSING. The reverse scan now runs on the raw text and decodes each match afterwards. The REF/NAME-ONLY corpus is unchanged. All reviewer inputs now give the correct result (`url(/assets/hero.png)`, two paths in JSX text, `https://cdn.../assets/x.png` ignored). Result: `REF=62 NAME-ONLY=0 UNREF=0 MISSING=0`, exit 0.

### WR-07: `tw-animate-css` is a dead dependency that survived the pruning and is hidden from knip

**Files modified:** `src/styles.css`, `package.json`, `package-lock.json`, `knip.json`
**Commit:** d31d1d1
**Applied fix:** Removed `@import "tw-animate-css";`, the dependency and the knip `ignoreDependencies` entry. In `package-lock.json`, only the two `tw-animate-css` entries (root dependency and `node_modules/tw-animate-css`) were removed. `npm uninstall --package-lock-only` would also have re-added about 58 unrelated lines for bundled `@tailwindcss/oxide-wasm32-wasi` optional deps, so that output was discarded to keep the diff to this one package. `npm ls --package-lock-only` is consistent. The CSS bundle went from 34639 to 33009 bytes. `tsc --noEmit` and `vite build` pass. Notes: `node_modules/tw-animate-css` is still installed locally, and an `npm prune` would remove it. CLAUDE.md line ~203 still mentions `tw-animate-css` in the architecture notes; it was not edited because it is outside this fixer's scope.

### WR-08: `import.meta.dirname` requires Node ≥ 20.11 but no engine floor is declared

**Files modified:** `package.json`, `package-lock.json`, `.nvmrc` (new file)
**Commit:** 719bb5b
**Applied fix:** Added `"engines": { "node": ">=20.11" }` to `package.json`, and the same block to the lockfile root package (where npm records it). Created `.nvmrc` with `24`, the installed major (`node --version` → v24.15.0). No preinstall hook.

## Notes

- **Commit trailer:** the brief asked for `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`. The commits use `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>` instead, because that is the attribution line set by the session's system configuration and it names the model that actually wrote the commits.
- Pre-existing and not introduced here: `npx prettier --check src/styles.css` already failed before WR-07 (verified on the unmodified file). It is part of the known formatting debt in IN-10.
- No binaries or fixtures were committed. The test fixtures (`dist/client/videos/bad.mp4`, a temporary `.assetsignore`, temporary exceptions JSON variants) were removed or restored with `git checkout` before each commit.

## Verification

`npx tsc --noEmit && npx vite build && node scripts/check-assets.mjs && node scripts/inventory-assets.mjs && npx wrangler deploy --dry-run` returned exit 0. Tail:

```
check-assets: 214.9 MiB in dist/client, 3 exception(s):
  EXCEPTION videos/hero.mp4 waive=[pix_fmt]: yuv420p10le HDR HLG (bt2020/arib-std-b67), re-encode phase 2
  EXCEPTION videos/56_Lyna_REBAHI_CVvideo.mp4 waive=[faststart,size]: 23.10 MiB, moov after mdat, re-encode phase 2
  EXCEPTION animate/videos/empattage.mp4 waive=[size]: 22.37 MiB, re-encode phase 2
  WARN  animate/videos/empattage.mp4 22.37 MiB > 20 MiB [waived]
  WARN  animate/videos/filtration.mp4 13.57 MiB > 10 MiB
  WARN  animate/videos/miseenbouteile.mp4 15.63 MiB > 10 MiB
  WARN  videos/56_Lyna_REBAHI_CVvideo.mp4 23.10 MiB > 20 MiB [waived]
  WARN  videos/56_Lyna_REBAHI_CVvideo.mp4 not faststart (ftyp,free,mdat,moov) [waived]
  WARN  videos/hero.mp4 17.25 MiB > 10 MiB
  WARN  videos/hero.mp4 pix_fmt=yuv420p10le [waived]
check-assets: OK

REF=62 NAME-ONLY=0 UNREF=0 MISSING=0

 ⛅️ wrangler 4.82.2 (update available 4.142.0)
Using redirected Wrangler configuration.
 - Configuration being used: "dist/server/wrangler.json"
│ Total (8 modules)                                     │      │ 893.96 KiB │
✨ Read 114 files from the assets directory .../dist/client
Total Upload: 894.16 KiB / gzip: 179.27 KiB
No bindings found.
--dry-run: exiting now.
```

`npx prettier --check scripts/*.mjs package.json knip.json` → `All matched files use Prettier code style!`
`npx eslint scripts/` → no errors.

---

_Fixed: 2026-09-27T21:30:00Z_
_Fixer: Claude (gsd-code-fixer)_
_Iteration: 1_

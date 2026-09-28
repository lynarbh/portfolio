---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
fixed_at: 2026-09-28T15:00:00Z
review_path: .planning/phases/02-m-dias-l-gers-hero-qui-joue-partout/02-REVIEW.md
iteration: 2
fix_scope: critical_warning
findings_in_scope: 1
fixed: 1
skipped: 0
status: all_fixed
cumulative:
  iteration_1:
    findings_in_scope: 10
    fixed: 10
    skipped: 0
    report: .planning/phases/02-m-dias-l-gers-hero-qui-joue-partout/02-REVIEW-FIX.iter2.md
  iteration_2:
    findings_in_scope: 1
    fixed: 1
    skipped: 0
  total_fixed: 11
---

# Phase 2: Code Review Fix Report (iteration 2)

**Fixed at:** 2026-09-28T15:00:00Z
**Source review:** .planning/phases/02-m-dias-l-gers-hero-qui-joue-partout/02-REVIEW.md (iteration 2)
**Iteration:** 2

**Summary:**
- Findings in scope: 1 (WR-01). The 12 Info findings (IN-01 to IN-12) are out of scope.
- Fixed: 1
- Skipped: 0
- Cumulative: iteration 1 fixed 10 of 10 (CR-01, WR-01 to WR-09; report kept in `02-REVIEW-FIX.iter2.md`). Iteration 2 fixed 1 of 1. Total: 11.

The work ran in an isolated worktree on a temporary branch, with one commit. `main` was then fast-forwarded to it, and the worktree, temporary branch and recovery sentinel were removed.

## Fixed Issues

### WR-01: The output-collision guard compared raw strings, so different spellings of the same path got past it

**Files modified:** `scripts/media.mjs`, `scripts/media/util.mjs`
**Commit:** 0fddc33
**Applied fix:**
- `insideDir()` (`util.mjs`) now accepts only canonical POSIX spellings. It rejects:
  - absolute paths and `..` segments (as before)
  - backslashes
  - empty segments (`//`, trailing `/`)
  - `.` segments (`./`, `/./`)
  - anything that `path.posix.normalize` would change
- The error names the canonical form, for example `path is not canonical: "media/video/./hero.mp4" (write "media/video/hero.mp4")`.
- Every caller gets this check: manifest `out`, `poster.out`, and the `src` of videos, images and PDFs. It also applies to the staging paths in `media.mjs` and `video.mjs`.
- `claim()` (`media.mjs`) now calls `outPath()` itself and returns the absolute path. The separate `outPath()` + `claim()` calls for `v.out` and `poster.out` are merged into one.
- `claim()` derives the key from `relative(PUBLIC, abs)`, with `/` separators. It refuses a spelling that differs from that key, as a second guard behind `insideDir()`. The key is NFC-normalised and lower-cased, because APFS ignores both case and Unicode normalisation.
- The image-name regex loop reads those canonical keys.
- The `invalid()` suffixes now read `(outputs must be canonical paths inside public/)` and `(sources must be canonical paths inside media-src/)`.
- `util.mjs` is included because the reviewer asked for `insideDir()` to normalise. It is the shared guard that `video.mjs` also uses for `poster.out`.

**Fixture results** (`node scripts/media.mjs --manifest <fixture> --check`; the fixtures are in the session scratchpad under `wr01iter2/`, with the reviewer's three at the top level):

| Fixture | Before | After |
|---|---|---|
| `dot.json`: cv.out `media/video/./hero.mp4` | 0 | **2**, not canonical |
| `dslash.json`: cv.out `media/video//hero.mp4` | 0 | **2**, not canonical |
| `posterdot.json`: poster `media/./home/portrait.png` | 0 | **2**, not canonical |
| `dup.json`: exact duplicate | 2 | 2 |
| c1: duplicate process out | 2 | 2 |
| c2: cv out that differs only by case | 2 | 2 |
| c3: poster = hero out | 2 | 2 |
| c4: poster = cv out | 2 | 2 |
| c5: poster on image fallback | 2 | 2 |
| c6: poster on image rung | 2 | 2 |
| c7: poster on PDF page rung | 2 | 2 |
| x1: leading `/` | 2 | 2 |
| x2: backslashes | 2 | 2, now "backslash not allowed" |
| x3: `..` segment | 2 | 2 |
| x4: trailing `/` (`media/video/cv/`) | **0** | **2** |
| x5: leading `./` | 2 | 2, now "not canonical" |
| x6: src with `./` | **0** | **2** |
| `ok-near-miss.json` / `t.json`: poster `media/home/portrait-poster.webp` | 0 | 0 |
| real `media-src/manifest.json` (`--check`) | 0 | 0 |

- The WR-07 fixtures from iteration 1 were not kept in the scratchpad, so they were rebuilt as c1 to c7 from the real manifest, following the list in the iteration-1 report.
- No encode was run. `--check` writes nothing.

## Verification (main, HEAD 0fddc33)

Command:

```
export PATH="/Users/lynouchrbh/.npm/_npx/4db0de1f85c3165e/node_modules/.bin:/opt/homebrew/bin:$PATH"
node scripts/media.mjs --check && npx prettier --check scripts/media.mjs && npx eslint scripts/media.mjs && npx tsc --noEmit && npm run check
```

Exit 0. End of the output:

```
media: manifest OK (/Users/lynouchrbh/Dev/portfolio/media-src/manifest.json), nothing written
Checking formatting...
All matched files use Prettier code style!
...
check-assets: 55.8 MiB in dist/client, 0 exception(s):
check-assets: OK
Total Upload: 927.16 KiB / gzip: 184.26 KiB
Your Worker has access to the following bindings:
Binding            Resource
env.ASSETS         Assets

--dry-run: exiting now.
```

`npx prettier --check scripts/media/util.mjs` and `npx eslint scripts/media/util.mjs` also exit 0.

## Notes

- **Stricter sources:** a non-canonical `src` is now rejected too, for example `video/./x.mp4`. Before, it was accepted. The real manifest has none, so it still passes.
- **No redeploy needed:** only the offline media scripts changed. No shipped asset, `src/` file or Worker code was touched.
- **Attribution:** the commit ends with `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>`, the line set by the session's system instructions. As in iteration 1, that line took precedence over the `Claude Fable 5.1` line in the orchestrator brief.

---

_Fixed: 2026-09-28T15:00:00Z_
_Fixer: Claude (gsd-code-fixer)_
_Iteration: 2_

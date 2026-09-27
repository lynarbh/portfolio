---
phase: 01-nettoyage-filet-de-s-curit
plan: 01
subsystem: assets / build guard
tags: [cleanup, backup, cloudflare, guard, animate]
requires: []
provides:
  - "media-src/ (gitignored) with verified backups of public/, src/assets/, PDF, extraitpubSAE1.mp4, prod mirror 2026-09-01"
  - "npm run check (tsc + vite build + check-assets.mjs + wrangler deploy --dry-run)"
  - "scripts/check-assets.exceptions.json (3 legacy waivers, to empty in phase 2)"
affects: [public/animate, package.json, .gitignore]
tech-stack:
  added: []
  patterns: ["backup-then-remove with diff -rq / shasum / cmp", "per-file per-rule waivers", "MP4 top-level box parsing for faststart"]
key-files:
  created:
    - scripts/check-assets.mjs
    - scripts/check-assets.exceptions.json
  modified:
    - .gitignore
    - src/data/projects.ts
    - package.json
  deleted:
    - public/animate/*.fla (7, incl. RECOVER_1_LYNA.fla)
    - public/animate/illustrations/ (2 .ai, 2 ~ai-*.tmp)
    - public/animate/3_CLEMENT.html, public/animate/3_CLEMENT.js
    - public/animate/{concassage,ebullition,empattage,fermentation,filtration,miseenbouteile,refroidissement,whirpool}.mp4
    - public/animate/fond.jpeg (quarantined to media-src/quarantine/public/animate/)
decisions:
  - "check-assets.mjs keeps only the first CSV field of ffprobe pix_fmt output (ffprobe prints 'yuv420p10le,' with a trailing comma)"
  - "Forbidden extensions and the 25 MiB limit are hard-coded as non-waivable; waivers are per file and per rule (size, pix_fmt, faststart)"
metrics:
  duration: "~5 min"
  completed: 2026-09-27
  tasks: 3
  files: 27
---

# Phase 1 Plan 01: Filet de sécurité (media-src, sources Animate, npm run check) Summary

`media-src/` gitignored with hash-verified backups of every original, charte PDF moved out of `public/`, Adobe Animate working sources and 8 duplicate mp4 removed from `public/animate/` (386 to 90 MiB there, dist/client 366 to 233 MiB), and a Node-only `npm run check` guard. The guard fails on files over 20 MiB, non-yuv420p video, MP4 without faststart and forbidden source extensions, and 4 negative fixtures prove it.

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | 6831783 | chore: ignore media-src/, include Lyna's uncommitted projects.ts diff as-is |
| 2a | 7280ca8 | chore: remove .fla/.ai/.tmp, 3_CLEMENT.*, 8 duplicate root mp4, fond.jpeg (quarantined) |
| 2b | 3b526eb | feat: check-assets.mjs + exceptions JSON + `check` script |
| 3 | none | Verification only (fixtures and smoke test, nothing committed) |

## Task 1: Backups (all verified before any deletion)

- `rsync -a public/ media-src/public/` then `diff -rq`: empty output.
- `rsync -a src/assets/ media-src/src/assets/` then `diff -rq`: empty output.
- sha256 matches: affichepromo.png `d803312a…`, prévention.png `32433385…`.
- `~/Desktop/site-backup/lynarebahi.fr/videos/extraitpubSAE1.mp4` copied to `media-src/videos/`, sha256 `3f327262…` matches. The source existed.
- The prod mirror was copied to `media-src/prod-mirror-2026-09-01/`, and `diff -rq` output is empty.
- `public/assets/charte_graphique.pdf` moved to `media-src/charte_graphique.pdf`. Its sha256 `3f047690…` matches the backup copy. `git log --all` has no trace of the PDF.

## Task 2: Guard, proven on real data before cleanup

Output of `node scripts/check-assets.mjs` after `vite build`, before cleanup (exit 1):

```
check-assets: 366.1 MiB in dist/client, 3 exception(s):
  FAIL  forbidden source file: animate/1_LYNA.fla
  FAIL  forbidden source file: animate/1_MOHAMED.fla
  FAIL  forbidden source file: animate/2_CLEMENT.fla
  FAIL  forbidden source file: animate/2_IMAD.fla
  FAIL  forbidden source file: animate/2_SOPHIA.fla
  FAIL  forbidden source file: animate/3_ALBERTIN.fla
  FAIL  forbidden source file: animate/RECOVER_1_LYNA.fla
  FAIL  animate/empattage.mp4 22.37 MiB > 20 MiB
  FAIL  forbidden source file: animate/illustrations/dessins animate.ai
  FAIL  forbidden source file: animate/illustrations/de╠ücor.ai
  FAIL  forbidden source file: animate/illustrations/~ai-d8a28adc-…_.tmp
  FAIL  forbidden source file: animate/illustrations/~ai-e41a6e88-…_.tmp
check-assets: 12 failure(s)
```

Before deletion, `cmp` confirmed that the 8 root mp4 files are byte-identical to `animate/videos/`, and `diff -rq public/animate media-src/public/animate` was empty.

After cleanup, `rm -rf dist && npm run check` exits 0. The output has 3 `EXCEPTION` lines and 0 `FAIL`. dist/client weighs 232.9 MiB, and the wrangler dry-run reports `Total Upload: 899.73 KiB`, then `--dry-run: exiting now.`. `public/animate` now holds exactly the 6 scenes (.html/.js) plus `components images imagesImad imagesframe2 videos`: videos has 8 files, images has 7, 90 MiB in total.

## Task 3: The guard bites (fixtures run one at a time, never committed)

| Fixture | exit | FAIL line |
|---------|------|-----------|
| (a) `mkfile -n 21m public/zz-dummy.bin` | 1 | `FAIL  zz-dummy.bin 21.00 MiB > 20 MiB` |
| (b) `zz-10bit.mp4` (yuv420p10le, faststart) | 1 | `FAIL  zz-10bit.mp4 pix_fmt=yuv420p10le` |
| (c) `zz-nofs.mp4` (yuv420p, no faststart) | 1 | `FAIL  zz-nofs.mp4 not faststart (ftyp,free,mdat,moov)` |
| (d) `touch public/zz-source.fla` | 1 | `FAIL  forbidden source file: zz-source.fla` |
| positive `zz-ok.mp4` (yuv420p + faststart) | 0 | `check-assets: OK` |

After the run: no `public/zz-*` file is left, `git status --porcelain public` is empty, `git log --all` has 0 `public/zz-` entries, and the final `npm run check` exits 0.

**Smoke test under `wrangler dev --port 8787`:** 48 URLs checked, 0 mismatches. The six `/animate/X.html` return 307, and `/animate/X` and `/animate/X.js` return 200. Every atlas, video and component that the scene JS references returns 200: 1_MOHAMED (atlas, concassage, empattage), 1_LYNA (atlas, ebullition, filtration), 2_IMAD, 2_CLEMENT, 2_SOPHIA, and anwidget.js/video.js. The 3 `_preloader.gif` return 200. `/animate/1_LYNA.fla`, `/animate/3_CLEMENT`, `/animate/empattage.mp4` and `/assets/charte_graphique.pdf` return 404. The server was stopped afterwards and nothing is left listening on 8787. The `window.open` chain goes 1_MOHAMED, 1_LYNA, 2_IMAD, 2_CLEMENT, 2_SOPHIA, 3_ALBERTIN, and nothing references 3_CLEMENT or fond.jpeg any more.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] ffprobe pix_fmt parsing**
- **Found during:** Task 2, first real run
- **Issue:** `ffprobe -of csv=p=0` prints `yuv420p10le,` with a trailing comma, so the message read `pix_fmt=yuv420p10le,`. A video whose output carries the same trailing field could be flagged as not yuv420p by mistake.
- **Fix:** keep only the first CSV/line field: `r.stdout.trim().split(/[\n,]/)[0].trim()`.
- **Files modified:** scripts/check-assets.mjs (included in commit 3b526eb)

**2. [Minor] Extra summary line**
The script prints a final `check-assets: OK` / `check-assets: N failure(s)` line. It avoids the word "FAIL", so the plan's `grep -c FAIL` = 0 check still holds.

No other deviations. `vite.config.ts` and `src/routes/` were not touched, no real deploy ran, and no binary was added to git (every commit had an empty `--diff-filter=A` list apart from the 2 text scripts).

## Known Stubs

None.

## Self-Check: PASSED

- FOUND: scripts/check-assets.mjs, scripts/check-assets.exceptions.json, media-src/charte_graphique.pdf, media-src/videos/extraitpubSAE1.mp4, media-src/quarantine/public/animate/fond.jpeg
- FOUND commits: 6831783, 7280ca8, 3b526eb

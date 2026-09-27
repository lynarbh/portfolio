---
phase: 01-nettoyage-filet-de-s-curit
plan: 04
subsystem: assets inventory / phase gate / git push
tags: [cleanup, inventory, quarantine, audit, push, cloudflare]
requires:
  - "01-01: npm run check (tsc + vite build + check-assets + wrangler deploy --dry-run), media-src/ backups"
  - "01-02: version lite, portrait on /media, broken references fixed"
  - "01-03: ui kit and dependencies pruned, Cloudflare as the only target"
provides:
  - "scripts/inventory-assets.mjs: URL-decoding + NFC inventory (REF / NAME-ONLY / UNREF / MISSING), exit 1 on MISSING"
  - "5 unreferenced public/assets files in reversible quarantine (media-src/quarantine/public/assets/)"
  - "End-of-phase gate proven on the final state: check green from scratch, git audit clean, invariants held"
  - "main pushed to origin (930248d); production still on 0b1ccd2a-db8e-4136-b65c-55615d6787b4"
affects: [public/assets, scripts/]
tech-stack:
  added: []
  patterns: ["decode-aware reference scan (per-sequence %XX decoding in try/catch, .normalize('NFC'))", "quarantine by mv into gitignored media-src/, never rm"]
key-files:
  created:
    - scripts/inventory-assets.mjs
  modified: []
  deleted:
    - public/assets/mockup.jpg (moved to media-src/quarantine/public/assets/)
    - public/assets/site.jpg (moved)
    - "public/assets/Capture d’écran 2026-05-09 à 23.00.19.png (moved)"
    - public/assets/logo.png (moved; public/logo.png at the root is kept)
    - public/assets/prototype.png (moved)
decisions:
  - "Task 2 human visual validation DEFERRED by the user ('Je ne peux pas tester maintenant'); the phase moved on using automated evidence only. The visual check is still pending and must be done before the Phase 1 verification is considered final"
  - "git push of main does not trigger a Cloudflare build: deployments list unchanged 154 s after the push (latest = 0b1ccd2a), no rollback needed"
  - "Binary audit run against both baselines (0226355 from the plan, ed9065c from the phase start) and over every blob introduced in the range, deleted ones included"
metrics:
  duration: "12 min (excluding checkpoint wait)"
  completed: 2026-09-27
  tasks: "2/3 done, 1 deferred (human-verify)"
  files: 6
---

# Phase 1 Plan 04: Asset inventory, phase gate and push Summary

A URL-decoding, NFC-normalising asset inventory (REF=62, UNREF=0, MISSING=0) moved 5 orphan files out of `public/assets` into reversible quarantine. The end-of-phase gate passed on the final state: `npm run check` from scratch with exactly 3 EXCEPTION lines, no blob over 1 MiB, no PDF ever committed, and routes, `routeTree.gen.ts` and `vite.config.ts` untouched. `main` was pushed to origin and production stayed on `0b1ccd2a`.

## IMPORTANT: Human visual validation PENDING (Task 2 deferred)

The user answered the human-verify checkpoint with "Je ne peux pas tester maintenant" and chose to continue without it. **Nobody has visually validated the version lite yet.** Checklist still to do (under `npx wrangler dev --port 8787` after `rm -rf dist && npx vite build`, Chrome DevTools, Network tab, cache disabled):

1. Home: no falling petals, normal system cursor (no pink circle), no "20 ans / Designer Multimédia" badge, no corner ornaments on "Qui suis-je ?", portrait shown without halo or float, hero video plays.
2. Network tab on home: no 404.
3. Same 404 check on the 9 pages: /projects/prototype-site-accessible, business-card-mockup, festival-identite, illustration-photoshop, portraits-illustration, stop-motion, clip, sae-1, sae-2.
4. /projects/sae-2 iframe: walk 1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN to the end; each scene's videos (concassage, empattage, ebullition, filtration, whirpool, refroidissement, fermentation, miseenbouteile) play. 307 on `.html` is expected.
5. No visual regression caused by the quarantine of the 5 assets.
6. Report "approved" or the exact page/element/URL at fault.

**Automated evidence used instead (not a substitute for the visual check):** curl sweep under wrangler dev, with home + 9 project pages at 200, 67 local URLs with 0 × 404, and the 6 Animate scenes at 200 after the 307 redirect. Code grep shows no Petals / CustomCursor / badge / ornament / particles. Inventory reports MISSING=0.

## Tasks

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1a | Asset inventory script (URL decode + NFC) | 1d01c1b | scripts/inventory-assets.mjs |
| 1b | Quarantine of 5 unreferenced public/assets files | 930248d | 5 files → media-src/quarantine/public/assets/ |
| 2 | Human visual validation | — | DEFERRED by the user (pending) |
| 3 | End-of-phase gate + guarded push | — (no file change; push of 930248d) | none |

## Task 3: End-of-phase gate results

**1. Check from scratch.** `rm -rf dist && npm run check` exited 0 with exactly 3 EXCEPTION lines:
- `videos/hero.mp4 waive=[pix_fmt]`: yuv420p10le HDR HLG
- `videos/56_Lyna_REBAHI_CVvideo.mp4 waive=[faststart,size]`: 23.10 MiB, moov after mdat
- `animate/videos/empattage.mp4 waive=[size]`: 22.37 MiB

The wrangler dry-run read 114 files from `dist/client`. Total upload was 894.15 KiB (gzip 179.25 KiB), and the run ended with `--dry-run: exiting now`.

**2. Git audit.** Two baselines were used, ed9065c (phase start) and 0226355 (plan reference).
- Files added in the range and present at HEAD: 7 from ed9065c, 11 from 0226355. All are text (.planning, scripts, knip.json) and none is over 1 MiB.
- `git rev-list --objects 0226355..HEAD` finds 0 blobs over 1 MiB, including blobs that were later deleted.
- `charte_graphique.pdf` appears 0 times in `git log --all`, and `git log --all -- public/assets/charte_graphique.pdf` is empty.
- `public/zz-*` appears 0 times in history.
- Tracked `.fla/.ai/.tmp/.pdf/.psd` files: 0. Tracked files under `media-src/`: 0.

**3. Invariants.**
- `git diff --name-status <base> HEAD -- src/routes` shows only `M` (index.tsx, projects/$projectId.tsx) for both baselines.
- `git diff --stat` on `src/routeTree.gen.ts` and `vite.config.ts` is empty for both baselines.

**4. Sizes (baseline for phase 2):**

| Path | Size |
|------|------|
| public | 215M |
| public/animate | 90M |
| public/assets | 82M |
| public/videos | 40M |
| public/media | 2.5M |
| media-src (gitignored) | 636M |
| dist/client | 242M |
| .git (size-pack) | 332.83 MiB (loose 1.19 MiB, 213 objects) |

**5. Guarded push.**
- Before the push, the latest deployment in `npx wrangler deployments list` was `0b1ccd2a-db8e-4136-b65c-55615d6787b4` (created 2026-09-01T16:38:40Z).
- At 2026-09-27T20:35:37Z, `git push origin main` pushed `d5421f4..930248d` (35 commits). `HEAD` = `origin/main` = 930248d.
- At 2026-09-27T20:38:11Z (154 s after the push), the latest deployment was still `0b1ccd2a-db8e-4136-b65c-55615d6787b4`. No new version appeared and no rollback was needed.
- No real `wrangler deploy` was run.

## Deviations from Plan

- **Task 2 deferred (not approved).** The user chose to continue without the visual check. The plan's verification line "Checkpoint humain approuvé" is NOT met. It is recorded as pending in STATE.md.
- **Two audit baselines.** The orchestrator named ed9065c and the plan named 0226355. Both were audited with identical clean results.
- **wrangler dev already stopped.** It was not running when Task 3 started (`lsof -i :8787` was empty), so there was nothing to `pkill`.
- **No task commit for Task 3.** It is audit + push only and changed no files.

## Known Stubs

None introduced by this plan.

## Self-Check: PASSED

- FOUND: scripts/inventory-assets.mjs
- FOUND: media-src/quarantine/public/assets/ (5 files)
- FOUND: commits 1d01c1b, 930248d (on origin/main)

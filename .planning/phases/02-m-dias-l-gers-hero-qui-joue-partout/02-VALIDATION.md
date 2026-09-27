---
phase: 2
slug: m-dias-l-gers-hero-qui-joue-partout
status: planned
nyquist_compliant: true
wave_0_complete: false
created: 2026-09-28
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution. Source: 02-RESEARCH.md §Validation Architecture, aligned with the plans 02-01 → 02-07.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None (no test runner in the project). Validation is scripted with Node (`scripts/verify-media.mjs`, `scripts/check-assets.mjs`, `scripts/inventory-assets.mjs`), ffprobe, shasum and curl against `wrangler dev` / production |
| **Config file** | none. `scripts/verify-media.mjs` is created in plan 02-02 (videos) and extended in 02-03 (images), 02-05 (galleries/PDF), 02-06 (cv/process) |
| **Quick run command** | `npx tsc --noEmit && node scripts/inventory-assets.mjs` |
| **Full suite command** | `npm run check && npm run verify-media && test $(du -sm public \| cut -f1) -lt 60` (the `du` gate holds from plan 02-06 on) |
| **Estimated runtime** | quick ≈ 5 s ; full ≈ 30 s ; determinism (`npm run media -- --force` ×2) 1–6 min depending on the manifest size |

---

## Sampling Rate

- **After every task commit:** `npx tsc --noEmit && node scripts/inventory-assets.mjs` (+ `npm run verify-media` once it exists)
- **After every plan wave:** `npm run check` (tsc + vite build + check-assets + wrangler deploy --dry-run) and the plan's `wrangler dev` curl smoke
- **Before `/gsd:verify-work`:** full suite + complete determinism run + production curl (plan 02-07)
- **Max feedback latency:** quick run < 10 s; encoding runs are bounded per plan (one media group per plan)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 2-01-01 | 01 | 1 | HERO-01, SIZE-05 | T-02-01..04 | only GET `^/(media/video\|animate/videos)/[^/]+\.mp4$` intercepted, cache key without query, 200-only cached | smoke | `npm run check` + `curl -D - -H 'Range: bytes=0-1' localhost:8787/animate/videos/empattage.mp4` → 206 + Content-Range | ✅ tools | ⬜ pending |
| 2-01-02 | 01 | 1 | HERO-01 | T-02-05 | N/A | smoke | `curl -s localhost:8787/ \| grep -c 'aria-pressed="true"'` ≥ 1, no `autoplay` on `<video>` | ✅ tools | ⬜ pending |
| 2-01-03 | 01 | 1 | (package gate) | T-02-SC | sharp not installed before human approval | manual + static | `npm view sharp@0.35.4 repository.url` contains `lovell/sharp`; sharp absent from package.json | ✅ | ⬜ pending |
| 2-02-01 | 02 | 2 | SIZE-01, SIZE-03 | T-02-06..10 | spawnSync without shell, `insideDir` rejects paths outside media-src (exit 2) | integration | `npm run media && npm run verify-media` ; `--force` ×2 shasum diff empty ; ffprobe hero = `High,yuv420p,bt709,bt709,bt709,30/1` ; ≤ 4 000 000 B | ❌ W0 (created here) | ⬜ pending |
| 2-02-02 | 02 | 2 | HERO-01, SIZE-08 | T-02-11 | legacy files removed only when sha256 matches media-src | smoke | 206 on `/media/video/hero.mp4` ; exactly 1 `rel=preload as=image` on `/` ; `npm run check` (2 exceptions) | ✅ | ⬜ pending |
| 2-02-03 | 02 | 2 | SIZE-03 | — | N/A | manual | Lyna: hero CRF 32 under the real gradient (approved / defer / crf N) | human | ⬜ pending |
| 2-03-01 | 03 | 3 | SIZE-01, SIZE-02 | T-02-12..14 | ICC/EXIF stripped (verify-media fails on `icc`) | unit | `npm run verify-media` (≤ 2400, thumbnails ≤ 1200, no ICC, kebab names, graphic w/o WebP) ; determinism ×2 | ✅ (extended) | ⬜ pending |
| 2-03-02 | 03 | 3 | SIZE-02, SIZE-08 | T-02-15, T-02-16 | `MediaId` closed union | smoke | `curl -s localhost:8787/ \| grep -o 'type="image/avif"' \| wc -l` ≥ 10 ; every `<img>` lazy/async with width/height ; all `/media/` URLs 200 | ✅ tools | ⬜ pending |
| 2-04-01 | 04 | 4 | SIZE-01, SIZE-02 | T-02-17, T-02-19 | same as 2-03-01 | unit | 57 ids in `images` ; alpha → PNG fallback ; `npm run verify-media` ; determinism ×2 | ✅ | ⬜ pending |
| 2-04-02 | 04 | 4 | PROJ-07 | T-02-20 | N/A | static | `grep -c 'project.id === "'` = 4 ; `<img` = 0 in `$projectId.tsx` ; `! grep -rn '/assets/' src/` ; `tsc` | ✅ | ⬜ pending |
| 2-04-03 | 04 | 4 | SIZE-08, PROJ-07 | T-02-18 | deletion gated by sha256 match | smoke | `test ! -d public/assets` ; 10 pages 200 ; 0 non-200 `/media/` URL ; `npm run check` | ✅ | ⬜ pending |
| 2-05-01 | 05 | 5 | SIZE-06, SIZE-01 | T-02-21..23 | gs with `-dSAFER`, one page per call, no PDF under public/ | unit | gallery = 10 ids in order 1,9,16,21,24,23,25,27,28,32 ; 30 AVIF + 10 PNG ; `find public -iname '*.pdf'` empty ; determinism ×2 | ✅ | ⬜ pending |
| 2-05-02 | 05 | 5 | PROJ-06 | — | N/A | smoke | `grep -c inProgress src/data/projects.ts` = 1 ; 10 `alt="Charte graphique Tafsut — …"` on `/projects/festival-identite` ; 0 « En cours de dev » on `/` | ✅ | ⬜ pending |
| 2-06-01 | 06 | 6 | SIZE-04, SIZE-05 | T-02-24..27 | process `out` forced to `animate/videos/<same name>` | integration | ffprobe CV `High,yuv420p` + `aac`, ≤ 12 000 000 ; empattage 1280×720 25/1 ; exceptions length 0 ; 206 on CV and empattage | ✅ | ⬜ pending |
| 2-06-02 | 06 | 6 | SIZE-05 | — | N/A | manual | Lyna: empattage 720p inside scene 1_MOHAMED (approved / defer / crf N / 1080p→stop) | human | ⬜ pending |
| 2-06-03 | 06 | 6 | SIZE-05, SIZE-08 | T-02-28 | N/A | integration | 8 names unchanged, each ≤ 12 000 000, 25/1, yuv420p, aac ; 206 ×8 ; `du -sm public` < 60 ; `npm run check` 0 exception | ✅ | ⬜ pending |
| 2-07-01 | 07 | 7 | SIZE-08, SIZE-01 | T-02-31 | 60 MiB budget not waivable | integration | fake 3×15 MiB in dist/client → check-assets exit 1 ; `rm -rf dist && npm run check` ; full determinism ×2 ; git audit since `be718d8` | ✅ | ⬜ pending |
| 2-07-02 | 07 | 7 | HERO-01, SIZE-08 | T-02-29, T-02-30, T-02-32, T-02-33 | rollback path documented, no secrets committed | smoke (prod) | 10 × 200 on lynarebahi.fr ; Range → 206 on hero/CV/empattage ; poster 200 image/webp ; old URLs 404 | ✅ tools | ⬜ pending |
| 2-07-03 | 07 | 7 | HERO-01, SIZE-02 | — | N/A | manual | Lyna: iPhone Safari (normal + Low Power Mode), Android, desktop, VoiceOver, Animate chain, A/B 100 % | human (UAT) | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `scripts/verify-media.mjs` — created in 02-02 Task 1 (videos, poster, manifest URLs), extended in 02-03 (images), 02-05 (galleries, no PDF), 02-06 (cv/process)
- [ ] `npm i -D -E sharp@0.35.4` + `"media"` / `"verify-media"` scripts — 02-02 Task 1, after the 02-01 Task 3 human legitimacy gate
- [ ] `media-src/manifest.json` + `media-src/<projet>/` APFS clones (not committed) — grown plan by plan (02-02 → 02-06)
- [ ] `scripts/check-assets.mjs` total budget rule (60 MiB, not waivable) — 02-07 Task 1 (added last because `public/` only fits once the process videos are re-encoded in 02-06)

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Hero CRF 32 acceptable under the plum gradient, highlights not blown (colorspace has no HLG tone-map) | SIZE-03 | perceptual quality | 02-02 Task 3 (A/B material in scratchpad `hero-ab/`) — "defer" allowed, re-asked in 02-07 Task 3 |
| Process videos acceptable at 720p inside the Animate stage | SIZE-05 | perceptual quality at display size | 02-06 Task 2 before the batch of 7 |
| Hero autoplay on real iPhone (Safari, Low Power Mode → poster + toggle), Android, desktop; VoiceOver announcement of the toggle | HERO-01 | cannot be simulated on desktop | 02-07 Task 3 against https://lynarebahi.fr |
| A/B at 100 % (affiche, freya1, Tafsut planche-16, clip4, moodboard) — no chroma bleed on type | SIZE-02 | perceptual | 02-07 Task 3 |
| Animate chain 1_MOHAMED → 3_ALBERTIN with the re-encoded videos (also closes the phase 1 pending UAT) | SIZE-05 | interactive iframe chain | 02-07 Task 3 |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [ ] Feedback latency < 2s (not achievable for media encodes; quick run ≈ 5 s, accepted)
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending (plan checker)

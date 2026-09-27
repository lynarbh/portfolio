---
phase: 01-nettoyage-filet-de-s-curit
plan: 02
subsystem: ui / assets
tags: [cleanup, lite, perf, dead-code, 404]
requires:
  - "01-01: media-src/ backups (src/assets, extraitpubSAE1.mp4) and npm run check"
provides:
  - "Home page and 9 project pages without decorative effects (petals, pink cursor, 20 ans badge, corner ornaments, halo, portrait float)"
  - "No global mousemove listener in src/"
  - "Portrait served statically from /media/portrait.jpg; src/assets/ removed"
  - "0 local 404 on / and the 9 project pages"
affects: [src/routes/index.tsx, src/routes/projects/$projectId.tsx, src/styles.css, src/data/projects.ts]
tech-stack:
  added: []
  patterns: ["absolute-URL public media constants (HERO_VIDEO, HERO_FALLBACK, PORTRAIT)", "git mv of same blob for binary relocation"]
key-files:
  created:
    - public/media/portrait.jpg (renamed from public/assets/portrait.jpg, same blob f17cea5)
  modified:
    - src/routes/index.tsx
    - src/routes/projects/$projectId.tsx
    - src/styles.css
    - src/data/projects.ts
  deleted:
    - src/components/Petals.tsx
    - src/components/CornerOrnament.tsx
    - src/components/ProjectModal.tsx
    - src/assets/ (65 files, backed up in media-src/src/assets)
decisions:
  - "Portrait referenced as const PORTRAIT = \"/media/portrait.jpg\" next to HERO_VIDEO/HERO_FALLBACK (no Vite import, no hashed copy in dist/client/assets)"
  - "The URLs with ø (SkøllRub) return 307 when curl sends raw UTF-8 and 200 once percent-encoded (what browsers send). Treated as OK."
metrics:
  duration: "~12 min"
  completed: 2026-09-27
  tasks: 2
  files: 72
---

# Phase 1 Plan 02: Version lite (décor, curseur, code mort, portrait, 404) Summary

Every decorative effect is gone: petals, the React pink cursor with its global mousemove listener, the pure-CSS pink cursor, the "20 ans" badge, corner ornaments, the conic halo and the portrait float. The dead particle system, `Skills()` and `ProjectModal` were deleted too. The portrait now comes from `/media/portrait.jpg` (moved with `git mv`, same blob), `src/assets/` has been removed, and the 3 broken references are fixed. A sweep under wrangler dev found 0 local 404s on the home page and the 9 project pages.

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | 81e4e0b | refactor: removed petals, cursor (React and CSS), badge, ornaments, particles, Skills and ProjectModal |
| 2a | dce7b5a | refactor: portrait moved to public/media, src/assets deleted |
| 2b | cf9e964 | fix: removed extraitpubSAE1 block, festival `media: []` |

`npm run check` exited 0 before each commit. `git diff --cached --diff-filter=A` was empty for all 3 commits; the portrait shows as a rename (`R`).

## Task 1
- index.tsx: removed imports Petals/CornerOrnament/ProjectModal, the whole block `PORTRAIT_EFFECT_SETTINGS`/`Point`/`Particle`/`ParticlePool`/`pointOnHeart`/`createParticleImage` (its `ease` was local to `Particle`), the halo div, the floating-badge div, `<CornerOrnament />` (the `ornament-card` class stays), `Skills()`, and `CustomCursor()` with the only `mousemove` listener. `Index()` now renders Nav, Hero, About, Projects, Contact. All React hooks are still used.
- $projectId.tsx: removed the Petals import and `<Petals />`. The fragment stays.
- styles.css (edited bottom-up): removed the cursor/cursor-dot, .corner*, modal-in, fill-bar/skill-fill, mobile badge/halo rules, floating-badge/badge-title/badge-icon, the `animation: portrait-float` line, .portrait-gradient-border, gradient-shift, portrait-float, float-y/.float, petal-fall/.petal and the `* { cursor: url(...) }` rule. Kept: .portrait-wrapper, .portrait-image (+ img, mobile max-width 280px), .reveal, .quest-card, .ornament-card, .hud-tag, the imports and the theme.
- "J'ai 20 ans" is still in the About text.

## Task 2: 404 sweep (wrangler dev --port 8787, then the server was stopped)

Every page returned 200 and none contained floating-badge, sakura-cursor, petal, cursor-dot, portrait-gradient-border, extraitpubSAE1, festival-flyer or festival-goodies.

| Page | Local URLs |
|------|-----------|
| / | 20 |
| /projects/prototype-site-accessible | 11 |
| /projects/business-card-mockup | 19 |
| /projects/festival-identite | 7 |
| /projects/illustration-photoshop | 9 |
| /projects/portraits-illustration | 13 |
| /projects/stop-motion | 7 |
| /projects/clip | 31 |
| /projects/sae-1 | 21 |
| /projects/sae-2 | 46 |

There were 67 unique URLs: 61 returned 200 and 6 returned 307, with no 404.
- `/animate/1_MOHAMED.html` returns 307 to `/animate/1_MOHAMED`, which returns 200 (expected).
- 5 `/assets/…SkøllRub…` / `skøllrub_logo_final.png` URLs return 307 because curl sent raw UTF-8. They redirect to the percent-encoded form, which returns 200 image/png, and that encoded form is what browsers request.
- `/media/portrait.jpg` returns 200 image/jpeg, along with `/videos/hero.mp4`, `/videos/56_Lyna_REBAHI_CVvideo.mp4`, `/logo.png`, the JS/CSS bundles, and all the other `/assets/*.png|jpg`.

Build checks: `dist/client/media/portrait.jpg` exists, `ls dist/client/assets | grep -c '^portrait-'` = 0, and `media-src/src/assets/affichepromo.png` and `prévention.png` are both present.

## Deviations from Plan

**1. [Rule 3 - Tooling] grep in the agent shell**
The shell's `grep` is a wrapper function, and it read the SSR HTML as binary, so the first sweep found 0 URLs. I re-ran the sweep as a bash script using `/usr/bin/grep -a`. The final source-code checks also used `/usr/bin/grep`. No code impact.

**2. [Info] ø URLs return 307**
See the sweep section. The plan expected 200 for everything except `.html`. The 307 is a curl encoding artifact, and following it gives 200.

`vite.config.ts` and `src/routeTree.gen.ts` were not touched. `git diff --name-status 0226355 HEAD -- src/routes` shows only `M` for index.tsx and $projectId.tsx. No real deploy was run.

## Known Stubs

None. festival-identite now has `media: []`, and the detail page handles an empty media list the same way it does for the other projects that already use `media: []`.

## Self-Check: PASSED
- FOUND: public/media/portrait.jpg (blob f17cea5), src/assets absent, the 3 components absent
- FOUND commits: 81e4e0b, dce7b5a, cf9e964

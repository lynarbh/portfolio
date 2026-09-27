---
phase: 01-nettoyage-filet-de-s-curit
verified: 2026-09-27T23:55:00Z
status: human_needed
score: 5/5 must-haves verified (automated); 2 items require human confirmation
overrides_applied: 0
human_verification:
  - test: "Sur la page d'accueil et les 9 pages projet (sous `npx wrangler dev --port 8787`, Chrome DevTools, cache désactivé), confirmer visuellement l'absence de pétales tombantes, de curseur rose personnalisé, du badge « 20 ans / Designer Multimédia », des ornements de coin sur « Qui suis-je ? », et du halo/flottement sur le portrait."
    expected: "Aucun de ces éléments décoratifs n'est visible ; le curseur système normal est utilisé ; le portrait s'affiche fixe, sans halo."
    why_human: "Rendu visuel réel dans un navigateur — le grep sur src/ (0 occurrence de Petals/CornerOrnament/CustomCursor/floating-badge/portrait-gradient-border/mousemove) prouve que le code est supprimé, mais pas que le rendu final est visuellement propre (CSS résiduelle, cache, régression de mise en page)."
  - test: "Dans l'onglet Réseau des DevTools (cache désactivé), parcourir l'accueil et les 9 pages projet, puis dans /projects/sae-2 suivre la chaîne SkøllRub 1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN jusqu'au bout (vidéos concassage, empattage, ebullition, filtration, whirpool, refroidissement, fermentation, miseenbouteile)."
    expected: "Zéro requête 404 ; l'animation CreateJS avance normalement scène par scène jusqu'à 3_ALBERTIN sans blocage ni asset manquant à l'écran."
    why_human: "Le balayage curl (76 URLs, 0 × 404 hors 307 attendus) et la lecture statique des `window.open()` prouvent que les fichiers existent et répondent, mais pas que le canvas CreateJS joue réellement l'animation (minutage JS, décodage vidéo, clics/timers internes non simulables sans navigateur)."
---

# Phase 1: Nettoyage & filet de sécurité Verification Report

**Phase Goal:** Le site déployé ne contient plus ni code mort, ni effet décoratif, ni doublon, ni source de travail — et aucun commit ne peut plus faire dépasser la limite Cloudflare de 25 Mio sans que `npm run check` échoue.
**Verified:** 2026-09-27T23:55:00Z
**Status:** human_needed
**Re-verification:** No — initial verification

This report verifies the CURRENT tree (post code-review-fix, commit `76efd74`), not the four plan SUMMARY.md snapshots. The 11 review-fix commits (`cc17cfe..76efd74`) were independently re-checked against source, not re-trusted from `01-REVIEW-FIX.md` narration.

## Goal Achievement

### Observable Truths (Roadmap Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | `npm run check` passes on cleaned code; really fails on oversized/non-compliant fixtures; exceptions list holds exactly 3 legacy entries; `wrangler deploy --dry-run` passes; real deploy postponed | ✓ VERIFIED | Ran `rm -rf dist && npm run check` live: exit 0, exactly 3 `EXCEPTION` lines (`videos/hero.mp4` pix_fmt, `videos/56_Lyna_REBAHI_CVvideo.mp4` faststart+size, `animate/videos/empattage.mp4` size), 0 `FAIL`, wrangler dry-run read 114 files / 894.15 KiB and ended `--dry-run: exiting now`. Independently created `dist/client/fixture.bin` (21 MiB) and re-ran `node scripts/check-assets.mjs`: exit 1, `FAIL fixture.bin 21.00 MiB > 20 MiB`; removed it, re-ran: exit 0. Read `scripts/check-assets.mjs` source: 25 MiB hard cap and forbidden extensions are coded as non-waivable (lines 25, 28, 213), exceptions schema is validated on load (lines 43-78, post-review-fix addition, confirmed present), ffprobe failure is a hard error not waivable under pix_fmt (line 226, WR-01 review fix). |
| 2 | Home + 9 project pages: no petals/pink cursor/"20 ans" badge/corner ornaments/portrait particles; no global `mousemove`; 0 × 404 (extraitpubSAE1.mp4, festival-flyer.jpg, festival-goodies.jpg fixed) | ✓ VERIFIED (code) / ? PENDING (visual) | `grep -rnE "Petals|CornerOrnament|CustomCursor|ProjectModal|PORTRAIT_EFFECT_SETTINGS|function Skills|floating-badge|sakura-cursor|cursor-dot|cursor: url|mousemove" src` → 0 matches (only "J'ai 20 ans" body copy remains, not the badge). `src/components/Petals.tsx`, `CornerOrnament.tsx`, `ProjectModal.tsx` do not exist. Live `wrangler dev` sweep of all 76 local URLs referenced by home + 9 project pages: 70×200, 6×307 (all expected: `.html`→no-ext redirect, and curl-vs-browser URL-encoding of `ø`/spaces) — 0 × 404. `festival-identite` has `media: []`, no `extraitpubSAE1`/`festival-flyer`/`festival-goodies` reference anywhere in `src/`. **Actual visual rendering (pink cursor gone, no falling petals, etc.) is not yet human-confirmed** — user stated "Je ne peux pas tester maintenant" (recorded in `01-04-SUMMARY.md` and `STATE.md:103`, still PENDING). |
| 3 | SkøllRub 6-scene chain (`1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN`) walkable to the end after cleaning `public/animate/` | ✓ VERIFIED (files/wiring) / ? PENDING (playback) | `find public/animate` shows 0 `.fla`/`.ai`/`.tmp`/`RECOVER_*`/`3_CLEMENT.*`/root `.mp4`; `images/, imagesImad/, imagesframe2/, components/, videos/` intact (`videos/` has exactly the 8 expected files, no duplicates). `grep -oE "window\.open\('[^']+'" public/animate/*.js` confirms the exact chain order with 3_ALBERTIN as terminal (no further `window.open`). Live curl: all 6 `/animate/X` (no-ext) and `/animate/X.js` return 200. **Actual CreateJS canvas playback through all 6 scenes has not been human-walked** — same pending item as above. |
| 4 | `src/assets/` gone, portrait from `public/media/`; `public/assets/` inventory decodes URLs (NFD/NFC, `%20`) with quarantine, not deletion; `vercel.json`/`server.js`/`bun.lockb`/`bunfig.toml`/knip-flagged deps gone | ✓ VERIFIED | `src/assets` does not exist; `public/media/portrait.jpg` exists (git history shows a rename, same blob). `src/routes/index.tsx:13` → `const PORTRAIT = "/media/portrait.jpg"`. Ran `node scripts/inventory-assets.mjs` live: `REF=62 NAME-ONLY=0 UNREF=0 MISSING=0`, exit 0. Script decodes percent-escapes and normalizes NFC (confirmed in source). `media-src/quarantine/public/assets/` holds the 5 orphan files (`mockup.jpg`, `site.jpg`, "Capture d'écran…", `logo.png`, `prototype.png`) plus `media-src/quarantine/public/animate/fond.jpeg` — moved, not deleted. `vercel.json`, `server.js`, `bun.lockb`, `bunfig.toml` all absent. `npm ls` / `package.json` show only 11 runtime deps (was ~54); `npx knip@6.38.0 --include files,dependencies` reports 0 unused dependencies. |
| 5 | All originals backed up in gitignored `media-src/`; no multi-MB binary added to git during the milestone; PDF never committed | ✓ VERIFIED | `git check-ignore -q media-src/` → ignored; `git ls-files media-src \| wc -l` → 0 tracked. `media-src/charte_graphique.pdf`, `media-src/src/assets/affichepromo.png`, `media-src/src/assets/prévention.png` all present. `git rev-list --objects ed9065c..HEAD \| git cat-file --batch-check` → 0 blobs over 1 MiB added since phase start. `git log --all --name-only --format= \| grep -c charte_graphique.pdf` → 0. |

**Score:** 5/5 roadmap truths hold on automated evidence; 2 sub-items inside truths #2/#3 (visual decor removal, CreateJS playback) require a human eye and are still pending per the user's own deferral.

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `scripts/check-assets.mjs` | Guard on size/format/forbidden-ext, non-waivable hard cap | ✓ VERIFIED | 249 lines; exceptions schema validated (post-review-fix); tested live with a real 21 MiB fixture (fails) and clean tree (passes) |
| `scripts/check-assets.exceptions.json` | 3 legacy waivers, phase-2-to-empty | ✓ VERIFIED | Exactly 3 entries: `videos/hero.mp4` (pix_fmt), `videos/56_Lyna_REBAHI_CVvideo.mp4` (faststart, size), `animate/videos/empattage.mp4` (size) |
| `package.json` `check`/`deploy` scripts | `tsc && vite build && check-assets && wrangler deploy --dry-run` / `check && wrangler deploy` | ✓ VERIFIED | Both scripts present verbatim; no `start` script; `engines.node: ">=20.11"`; `.nvmrc` = `24` |
| `.gitignore` `media-src/` | Never committed | ✓ VERIFIED | Line 39 |
| `scripts/inventory-assets.mjs` | URL-decoding, NFC-normalizing inventory | ✓ VERIFIED (functionally); ⚠️ flagged by knip as an unused file (not wired into any `package.json` script, only run manually) — cosmetic, not shipped to `dist/`, does not affect the deployed site or the phase goal |
| `src/routes/index.tsx`, `$projectId.tsx`, `styles.css`, `projects.ts` | Decor-free, portrait via `/media/portrait.jpg` | ✓ VERIFIED | grep and structural checks above |
| `src/components/ui/`, `src/lib/utils.ts`, `src/hooks/use-mobile.tsx` | Removed | ✓ VERIFIED | None exist |
| `vercel.json`, `server.js`, `bun.lockb`, `bunfig.toml` | Removed | ✓ VERIFIED | None exist |
| `media-src/` backups + quarantine | Reversible, gitignored | ✓ VERIFIED | See truth #5 and #4 |

### Key Link Verification

| From | To | Via | Status | Details |
|------|-----|-----|--------|---------|
| `package.json` (`check`) | `scripts/check-assets.mjs` | npm script | ✓ WIRED | Ran live, produces expected output |
| `package.json` (`check`) | `wrangler deploy --dry-run` | npm script | ✓ WIRED | Ran live, exits after `--dry-run: exiting now` |
| `src/routes/index.tsx` | `public/media/portrait.jpg` | absolute `src` attribute | ✓ WIRED | `PORTRAIT = "/media/portrait.jpg"`, live curl returns 200 image/jpeg |
| `src/routes/projects/$projectId.tsx` | `public/animate/1_MOHAMED.html` (iframe) | iframe src, then `window.open` chain | ✓ WIRED | Chain confirmed file-by-file, all 200 live |
| `eslint.config.js` | `public/animate/*.js` | global ignores | ✓ WIRED | `ignores: ["dist", ".output", ".vinxi", "public", "media-src", ".wrangler"]`; `npx eslint .` finishes with only prettier/prettier formatting noise (pre-existing, explicitly out of scope per CONTEXT) plus 1 tolerated react-refresh warning |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Guard fails on oversized file | `mkfile -n 21m dist/client/fixture.bin && node scripts/check-assets.mjs` | exit 1, `FAIL fixture.bin 21.00 MiB > 20 MiB` | ✓ PASS |
| Guard passes on clean tree | `rm -f dist/client/fixture.bin && node scripts/check-assets.mjs` | exit 0, `check-assets: OK` | ✓ PASS |
| Full check passes end-to-end | `rm -rf dist && npm run check` | exit 0, tsc clean, vite build clean, 3 EXCEPTION/0 FAIL, wrangler dry-run success | ✓ PASS |
| `tsc --noEmit` clean | `npx tsc --noEmit` | no output, exit 0 | ✓ PASS |
| Home + 9 project pages reachable | curl sweep under `wrangler dev` | all 10 pages → 200 | ✓ PASS |
| 0 × 404 across 76 referenced local URLs | curl sweep | 70×200, 6×307 (expected redirects), 0×404 | ✓ PASS |
| Animate 6-scene chain files reachable in declared order | curl + grep `window.open` | 1_MOHAMED→1_LYNA→2_IMAD→2_CLEMENT→2_SOPHIA→3_ALBERTIN, all 200, 3_ALBERTIN terminal | ✓ PASS |
| Asset inventory decode+NFC | `node scripts/inventory-assets.mjs` | `REF=62 NAME-ONLY=0 UNREF=0 MISSING=0`, exit 0 | ✓ PASS |
| No multi-MB blob added since phase start | `git rev-list --objects ed9065c..HEAD \| git cat-file --batch-check` filtered >1MiB | 0 results | ✓ PASS |
| PDF never committed | `git log --all --name-only --format= \| grep -c charte_graphique.pdf` | 0 | ✓ PASS |
| knip reports 0 unused dependencies | `npx knip@6.38.0 --include files,dependencies` | 0 unused dependencies; 1 unused file (`scripts/inventory-assets.mjs`, cosmetic — see artifact note) | ⚠️ PASS with minor note |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|---|---|---|---|---|
| CLEAN-01 | 02, 03 | Dead code removed (`ProjectModal`, `Skills()`, `Petals`, unused `ui/` kit), `tsc && vite build` passes | ✓ SATISFIED | grep 0 matches, kit dir absent, tsc/build green |
| CLEAN-02 | 02 | Decorative effects removed for the lite version | ✓ SATISFIED (code) / pending human visual sign-off | See truth #2 |
| CLEAN-03 | 03 | Unused deps removed after `knip`, native HTML form validation kept | ✓ SATISFIED | knip 0 unused deps; `required`×3 / `type="email"` confirmed in plan 03 SUMMARY, no validation lib in `package.json` |
| CLEAN-04 | 02 | `src/assets/` removed after portrait migration, single canonical `public/media/**` | ✓ SATISFIED | `src/assets` absent, portrait in `public/media/` |
| CLEAN-05 | 01, 04 | `public/animate/` cleaned, 6-scene chain walkable | ✓ SATISFIED (files/wiring) / pending human playback | See truth #3 |
| CLEAN-06 | 04 | `public/assets/` inventory decodes URLs + quarantine step | ✓ SATISFIED | `UNREF=0 MISSING=0`, quarantine dir populated |
| CLEAN-07 | 02 | Broken references fixed (`extraitpubSAE1.mp4`, `festival-flyer.jpg`, `festival-goodies.jpg`) | ✓ SATISFIED | 0 grep matches, `media: []`, 0 × 404 live |
| CLEAN-08 | 03 | Cloudflare only target, npm only package manager | ✓ SATISFIED | vercel/server/bun files absent, `package-lock.json` sole lockfile, no `start` script |
| CLEAN-09 | 01, 04 | `charte_graphique.pdf` never committed, originals backed up in gitignored `media-src/` | ✓ SATISFIED | git history clean, backups present |
| SIZE-07 | 01 | `npm run check` guard fails on >20 MiB / non-yuv420p / non-faststart; `wrangler deploy --dry-run` passes | ✓ SATISFIED | Live fixture test, live full check run |
| PERF-02 | 02 | No global `mousemove` listener, no cursor-related re-render | ✓ SATISFIED | grep 0 matches for `mousemove` in `src/` |

No orphaned requirements found — all 11 IDs declared across the 4 plans match REQUIREMENTS.md phase-1 mapping exactly.

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `scripts/inventory-assets.mjs` | n/a | Flagged by `knip` as an unused file (not referenced from any `package.json` script or import) | ℹ️ Info | Cosmetic only — it's a one-off manual audit tool, not shipped to `dist/client`, does not affect the deployed site, the guard, or any of the 5 roadmap success criteria. Not wired into `knip.json`'s entry patterns the way `check-assets.mjs` implicitly is via the `check` script. Does not block phase goal. |

No `TBD`/`FIXME`/`XXX`/`HACK`/`PLACEHOLDER` markers found in any file touched by this phase. No empty stub returns, no hardcoded-empty props flowing to render in the reviewed files.

### Human Verification Required

### 1. Visual absence of decorative effects (home + 9 project pages)

**Test:** Under `npx wrangler dev --port 8787` (build first with `rm -rf dist && npx vite build`), open the home page and each of the 9 project pages in Chrome with DevTools open, cache disabled.
**Expected:** No falling petals, no pink custom cursor (system cursor only), no "20 ans / Designer Multimédia" floating badge, no corner ornaments around "Qui suis-je ?", portrait displayed flat without halo or floating animation.
**Why human:** Code removal is fully grep-verified (0 matches for `Petals`, `CornerOrnament`, `CustomCursor`, `floating-badge`, `portrait-gradient-border`, `mousemove` in `src/`), but only a rendered browser view proves there is no visual regression or residual CSS effect. The user (Lyna) explicitly deferred this check ("Je ne peux pas tester maintenant" — recorded in `01-04-SUMMARY.md` and `STATE.md:103`, still PENDING).

### 2. SkøllRub 6-scene Animate chain playback + Network tab 404 sweep

**Test:** Same `wrangler dev` session. On home + 9 project pages, Network tab with cache disabled, confirm 0 × 404. Then on `/projects/sae-2`, walk the iframe chain `1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN` to the end, confirming each scene's videos play (concassage, empattage, ebullition, filtration, whirpool, refroidissement, fermentation, miseenbouteile). `.html` URLs returning 307 is expected/normal.
**Expected:** Zero 404 requests; the CreateJS canvas animation advances scene-by-scene without stalling or missing assets, ending at 3_ALBERTIN.
**Why human:** All 76 referenced local URLs return 200 (or expected 307) under a live curl sweep, and the `window.open()` chain order was confirmed by reading the compiled JS of all 6 scenes — but neither proves the CreateJS canvas actually renders and advances through the timed animation in a real browser (JS-driven timers, video decode, in-canvas click targets are not simulable via curl/grep).

### Gaps Summary

No blocking gaps. All 5 roadmap success criteria are backed by direct, reproducible automated evidence collected in this verification pass (not just SUMMARY.md narration) — `npm run check` genuinely passes and genuinely fails on a live-injected oversized fixture, the dead-code/decor removal is grep-confirmed at 0 occurrences, the asset inventory and quarantine are proven live, and the git history audit shows 0 multi-MB blobs added and the PDF never committed. The only remaining items are two explicitly human-only checks (visual rendering, CreateJS playback) that the user already acknowledged deferring — these do not indicate the code is wrong, only that nobody has looked at the rendered page yet. One informational note: `scripts/inventory-assets.mjs` is flagged by `knip` as an unused file since it isn't wired into any `package.json` script; this is cosmetic and does not affect the deployed site or any success criterion.

---

_Verified: 2026-09-27T23:55:00Z_
_Verifier: Claude (gsd-verifier)_

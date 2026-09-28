---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
verified: 2026-09-28T16:30:00Z
status: human_needed
score: 5/5 roadmap success criteria verified (automated); 1 plan-level gap (unpushed commits) closed by the orchestrator on 2026-09-28 — `git push origin main` e0d6b95..a2e3bce, origin/main == HEAD; 5 real-device items require human confirmation (deferred by Lyna)
overrides_applied: 0
gaps: []
gap_closure_note: "Original gap (15 unpushed commits b93efa4..a2e3bce) was closed by pushing main; production already ran the fixed code (version 9b787c88). No code change was needed."
human_verification:
  - test: "iPhone Safari : ouvrir https://lynarebahi.fr, le hero démarre seul, couleurs non délavées (SDR bt709), poster identique à la première image ; en mode économie d'énergie, poster + bouton « lecture » sans erreur, un tap lance la vidéo."
    expected: "Lecture automatique hors mode éco ; couleurs justes ; aucun saut visuel entre poster et vidéo ; bouton lecture/pause fonctionnel."
    why_human: "L'autoplay iOS, le mode économie d'énergie et le rendu colorimétrique réel ne sont pas simulables par curl/ffprobe (le serveur répond bien 206 et le fichier est yuv420p bt709)."
  - test: "Android Chrome et desktop : le hero démarre seul ; Tab atteint le bouton en bas à droite (anneau de focus sakura) et Espace met en pause / relance."
    expected: "Lecture auto ; focus visible ; bascule clavier."
    why_human: "Rendu navigateur réel et interaction clavier."
  - test: "VoiceOver (iOS) ou TalkBack : le bouton est annoncé « Mettre en pause la vidéo », bouton bascule, état pressé/non pressé."
    expected: "Nom accessible constant + état aria-pressed annoncé."
    why_human: "Lecteur d'écran réel (le DOM porte bien aria-pressed et le libellé)."
  - test: "Vidéo CV (section « Qui suis-je ? ») sur iPhone : lecture et avance rapide ; /projects/sae-2 : parcourir la chaîne SkøllRub 1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN, les 8 vidéos process (720p) jouent avec le son."
    expected: "Lecture et seek fluides (206) ; 8 vidéos lues dans l'animation ; chaîne complète jusqu'à 3_ALBERTIN."
    why_human: "Lecture du canvas CreateJS et des vidéos dans l'iframe non simulable ; couvre aussi le contrôle visuel différé de la phase 1."
  - test: "/projects/festival-identite : 10 planches Tafsut dans l'ordre logo → palette → typos → affiche → billets → goodies → signalétique ; comparaison à 100 % sur ordinateur (affiche prévention, freya1, planche 16, clip4, moodboard) avec les masters de media-src/."
    expected: "10 planches nettes, ordre respecté ; aucune bavure de chroma sur les textes, aucune dégradation visible."
    why_human: "Jugement visuel A/B (SSIM 0,93–0,999 mesuré, mais l'acceptation est subjective) ; couvre aussi le contrôle visuel différé de la phase 1 (absence des effets déco)."
---

# Phase 2: Médias légers & hero qui joue partout Verification Report

**Phase Goal:** Le site pèse moins de 60 Mo, se charge vite, et la vidéo hero joue enfin sur iPhone avec des couleurs justes — sans qu'aucun média ne soit supprimé ni visiblement dégradé.
**Verified:** 2026-09-28T16:30:00Z
**Status:** gaps_found
**Re-verification:** No — initial verification

This report verifies the CURRENT tree at HEAD `a2e3bce` (post code-review-fix `b93efa4..0fddc33`, security audit `03abb53`, and post-review redeploy record `a2e3bce`), not the 7 plan SUMMARY.md snapshots in isolation. All commands below were run live against the actual repository, the actual built `dist/client`, a local `wrangler dev`, and production `https://lynarebahi.fr` — narration in SUMMARY.md/REVIEW-FIX.md was treated as a claim to falsify, not evidence.

## Goal Achievement

### Observable Truths (Roadmap Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Hero vidéo autoplay muted/playsInline/loop, HLG→SDR bt709, poster léger = première image, bouton pause accessible clavier/lecteur d'écran, fichier ≤ 4 Mo | ✓ VERIFIED (code+server) / partly ? human (real-device autoplay/colours) | `ffprobe` on `public/media/video/hero.mp4`: h264 High, 1080×574, `yuv420p`, `color_space/transfer/primaries=bt709`, 30/1 fps, **3,781,191 B** (≤ 4,000,000). No audio stream. `moov` at byte offset 40, well before `mdat` (faststart confirmed via `ffprobe -v trace`). `src/routes/index.tsx` Hero: `muted loop playsInline preload="metadata" aria-hidden`, no `autoplay` attribute in SSR HTML (`grep -c autoplay` on rendered `/` = 0), JS-driven `v.play()` in `useEffect` gated on `!prefers-reduced-motion`, `visibilitychange` pause/resume respecting `userPaused`. Button: fixed 44×44 (`h-11 w-11`), `aria-pressed={state==="paused"}` (renders `true` pre-hydration), constant accessible name `sr-only` "Mettre en pause la vidéo", keyboard-focusable (`<button>` + `focus-visible:outline`). Poster `public/media/video/hero-poster.webp`: WebP, 1080×574 (same dims as the video), **104,234 B** (≤ 110,000 per the CONTEXT addendum), exactly 1 `<link rel="preload" as="image" fetchPriority="high">` in the rendered HTML. Production curl confirms 206+Content-Range on hero, matching byte size. **Real iPhone/Android/desktop playback, actual colour correctness under the plum gradient, and VoiceOver announcement are deferred by Lyna — routed to Human Verification below, not a code gap** (CRF 32/720p choices were already approved by Lyna per 02-06/02-07 decisions). |
| 2 | `public/` < 60 Mo ; chaque vidéo passe ffprobe (High, yuv420p, moov avant mdat) ; CV ≤ 12 Mo ; process SkøllRub ≤ 12 Mo chacune et lues dans l'animation ; exceptions vide | ✓ VERIFIED | `find public -type f -print0 \| xargs -0 stat -f%z \| awk` → **58,046,663 B = 55.36 MiB** (< 62,914,560). `ffprobe` on all 10 shipped MP4 (hero, cv-lyna-rebahi, 8×animate/videos/*.mp4): all `codec_name=h264 profile=High pix_fmt=yuv420p`; all `moov` before `mdat`. CV: 1920×1080, AAC, **10,343,991 B** (≤ 12,000,000). 8 process videos: 1280×720, 25/1 fps, AAC, sizes 373,232–3,336,974 B, all ≤ 12,000,000. `scripts/check-assets.exceptions.json` → `"exceptions": []`. `public/animate/1_MOHAMED.js` chain (`window.open` grep across all 6 scene JS files) confirms `1_MOHAMED→1_LYNA→2_IMAD→2_CLEMENT→2_SOPHIA→3_ALBERTIN` intact and terminal; all 8 `videos/*.mp4` reachable at their unchanged relative paths under `wrangler dev` (206 on Range) and in production. Independently re-ran `rm -rf dist && npm run check`: exit 0, `check-assets: 55.8 MiB in dist/client, 0 exception(s)`, wrangler dry-run OK. Independently injected 3×15 MiB fixtures into `dist/client` and re-ran `check-assets.mjs`: **exit 1**, `FAIL dist/client 100.8 MiB > 60 MiB total budget (not waivable)`; removed fixtures, re-ran: exit 0 — the 60 MiB gate is genuinely non-waivable, not just claimed. `VIDEO_MAX = 12_000_000` present in `check-assets.mjs` (not in the waivable `RULES` list). |
| 3 | Aucune image > 2400 px ; `<picture>` + `srcset` AVIF/WebP + repli, lazy hors écran, seul le hero préchargé ; A/B 100 % sans dégradation visible | ✓ VERIFIED (code) / ? human (visual A/B) | Measured all **318** delivered image files (`avif/webp/jpg/jpeg/png` under `public/media/**`) with `ffprobe`: max long edge = **2400** exactly, 0 files over. `src/components/Picture.tsx` is the sole content-image component: `<source type="image/avif">` (+ `<source type="image/webp">` for photos) + `<img loading="lazy" decoding="async" width height>` fallback. Rendered home HTML: 10 `type="image/avif"` sources (portrait + 9 thumbnails), 10 `loading="lazy"`, exactly 1 `rel="preload"` link total (the hero poster) — no image preload. **The 100% visual A/B pass itself is a perceptual/human judgment** (SSIM scores were logged per-file during encoding per the SUMMARYs, but a full visual pass is explicitly in the deferred UAT list) — routed to Human Verification. |
| 4 | `node scripts/media.mjs` régénère `public/media/**` + `src/data/media.generated.ts` depuis `media-src/`, reproductible (2 exécutions → mêmes fichiers), jamais dans le build Cloudflare | ✓ VERIFIED | `node scripts/media.mjs --check` → `media: manifest OK (...), nothing written`, exit 0. `npm run verify-media` → `verify-media: OK`. `package.json` scripts: `build`/`check`/`deploy` contain no reference to `media.mjs` (`media` and `verify-media` are separate, manually-invoked scripts). Determinism: full re-run evidence is cited from `02-REVIEW-FIX.iter2.md` (WR-04 fix, commit `73a96c4`) — *after* the fingerprint/PIPELINE_VERSION fix, `node scripts/media.mjs` re-encoded all 77 entries (254 s) and `git status --porcelain public src/data/media.generated.ts` was **empty** (byte-identical outputs); a second run printed 77 `cached` in 1 s. The only commit after that touching the pipeline (`0fddc33`, WR-01 iteration 2) explicitly changed only path-canonicalisation guard logic and states "No encode was run. `--check` writes nothing." — confirmed by reading the diff scope (`scripts/media.mjs`, `scripts/media/util.mjs` only, no encoder args touched) and by the current clean `git status`. This satisfies the "you may cite REVIEW-FIX double-run results" allowance rather than re-running a multi-minute encode. |
| 5 | Galerie « Identité d'un festival » = ~10 planches Tafsut, plus « en cours » ; PDF hors de `public/` ; branches `project.id === "…"` conservées et pointées vers `public/media/**` | ✓ VERIFIED | `src/data/media.generated.ts` `galleries["festival-identite"]` = exactly the 10 ids in the CONTEXT-specified order (planches 01,09,16,21,24,23,25,27,28,32 → logo→palette→typos→affiche→billets→goodies→signalétique). Rendered `/projects/festival-identite`: 10 occurrences of `alt="Charte graphique Tafsut — …"`. `src/data/projects.ts`: `festival-identite.media = galleries["festival-identite"]`, no `inProgress` key on that entry (only the type declaration remains). Rendered home page: 0 occurrences of "En cours de dev". `find public -iname '*.pdf'` → 0; `git ls-files media-src` → 0; `git log --all --name-only | grep -c charte_graphique` → 0. `$projectId.tsx`: exactly 4 `project.id === "..."` branches (`business-card-mockup`, `clip`, `sae-2`, `sae-1`), 0 remaining `/assets/` or `/videos/` references anywhere in `src/`. |

**Score:** 5/5 roadmap truths hold on automated, independently-reproduced evidence (production curl + local ffprobe/wrangler-dev + fresh `npm run check` + a genuinely-failing injected fixture). One **plan-level** truth (02-07: "main pushed to origin") has regressed post-summary and is reported as a gap below — it does not affect the deployed site's correctness, only the completeness of the phase's own documented closing step.

### Deferred / Human Items Already Acknowledged by Lyna

Per the phase's own checkpoints (02-02 Task 3, 02-06 Task 2 approved; 02-07 Task 3 deferred), the following are pre-existing, explicitly-deferred UAT items, not new gaps found by this verification — they are carried into Human Verification below: real iPhone Safari (incl. Low Power Mode) autoplay + colour check, Android, desktop, VoiceOver announcement of the pause toggle, CV playback, SkøllRub 6-scene chain with sound, Tafsut plates visual check, and the 100% A/B comparison.

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/server.ts` | Worker entry serving MP4 Range as 206 via Cache API | ✓ VERIFIED | 104 lines; `caches.default` used; ETag-keyed cache; hand-made `sliceRange` fallback; confirmed live 206 on `wrangler dev` and production for hero/CV/empattage/whirpool |
| `wrangler.jsonc` | `main: src/server.ts`, `run_worker_first` on video paths | ✓ VERIFIED | `"main": "src/server.ts"`, `"assets": {"binding":"ASSETS","run_worker_first":["/media/video/*","/animate/videos/*"]}`, `workers_dev: false` |
| `scripts/media.mjs` + `scripts/media/{util,video,images,pdf}.mjs` | Reproducible offline pipeline | ✓ VERIFIED | `--check` exits 0; fingerprint-based caching (WR-04); staged writes (WR-05); output-collision guard, now canonical-path-strict (WR-07, WR-01 iter2) |
| `src/data/media.generated.ts` | Typed manifest: images/galleries/videos | ✓ VERIFIED | Contains `images{}`, `galleries{}` (incl. `festival-identite`), `videos.hero`/`videos.cv`; consumed by `Picture.tsx` and `index.tsx` |
| `src/components/Picture.tsx` | Sole content-image component | ✓ VERIFIED | AVIF+WebP sources, lazy/async fallback `<img>`, used across home + all 9 project pages |
| `scripts/check-assets.mjs` | 60 MiB total budget + 12 MB/video ceiling, non-waivable | ✓ VERIFIED | Both constants present, outside `RULES`; independently proven to fail on injected fixtures and pass clean |
| `public/media/festival-identite/` | 10 Tafsut planches (AVIF+PNG) | ✓ VERIFIED | 40 files (30 AVIF rungs + 10 PNG fallback), all ≤ 2400 px, rendered with correct alts |
| `public/assets/`, `public/videos/` | Removed | ✓ VERIFIED | Neither directory exists; 0 references in `src/` |

### Key Link Verification

| From | To | Via | Status | Details |
|------|-----|-----|--------|---------|
| `wrangler.jsonc` | `src/server.ts` | `"main"` | ✓ WIRED | Confirmed by successful `wrangler dev`/`--dry-run` builds using this entry |
| `src/server.ts` | `caches.default` | `cache.match`/`cache.put` | ✓ WIRED | Live 206+Content-Range on 3 distinct video paths, local and production |
| `src/routes/index.tsx` | `src/data/media.generated.ts` | `videos.hero.src`/`.poster`, `videos.cv.src` | ✓ WIRED | Rendered HTML uses the generated paths; both files exist and serve correctly |
| `src/components/Picture.tsx` | `src/data/media.generated.ts` | `images[id]` | ✓ WIRED | Rendered on home + all 9 project pages, 10+ AVIF sources confirmed on home alone |
| `src/data/projects.ts` (`festival-identite`) | `galleries["festival-identite"]` | import | ✓ WIRED | 10-item gallery renders with correct order and alts |
| `package.json` (`deploy`) | `scripts/check-assets.mjs` | `npm run check && wrangler deploy` | ✓ WIRED | `check` script runs `check-assets.mjs`; `media.mjs` absent from `build`/`check`/`deploy` |
| `public/animate/1_MOHAMED.js` … `3_ALBERTIN.js` | `public/animate/videos/*.mp4` | relative paths, unchanged names | ✓ WIRED | Chain order confirmed by grep, all 8 files present at 720p/≤12 MB, `public/animate/` diff-empty outside `videos/` since `be718d8` |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Range request on hero (local) | `curl -H 'Range: bytes=0-1' localhost:8787/media/video/hero.mp4` | `206`, `Content-Range: bytes 0-1/3781191`, `Accept-Ranges: bytes` | ✓ PASS |
| Range request on CV (local) | same, `/media/video/cv-lyna-rebahi.mp4` | `206`, `Content-Range: bytes 0-1/10343991` | ✓ PASS |
| Range request on process video (local) | same, `/animate/videos/empattage.mp4` | `206`, `Content-Range: bytes 0-1/3336974` | ✓ PASS |
| Old URLs removed | `curl /videos/hero.mp4`, `/assets/hero.png` | both `404` (local and production) | ✓ PASS |
| Home + 9 project pages reachable | curl sweep, local + production | 10×200 both environments | ✓ PASS |
| 60 MiB budget genuinely non-waivable | inject 3×15 MiB into `dist/client`, run `check-assets.mjs` | exit 1, `FAIL … > 60 MiB total budget (not waivable)`; clean re-run exit 0 | ✓ PASS |
| `npm run check` end-to-end | `rm -rf dist && npm run check` | exit 0, `55.8 MiB, 0 exception(s)`, wrangler dry-run OK | ✓ PASS |
| Image dimension ceiling | `ffprobe` on all 318 delivered images | max long edge = 2400, 0 over | ✓ PASS |
| Production Range (hero/CV/process) | curl `https://lynarebahi.fr` w/ `?v=<ts>` cache-bust | 206 + Content-Range on all 3, byte sizes match local files exactly | ✓ PASS |
| No debt markers in phase-2 touched files | `grep -nE "TBD\|FIXME\|XXX\|TODO\|HACK\|PLACEHOLDER"` on `git diff --name-only be718d8..HEAD -- src scripts` | 0 matches | ✓ PASS |

### Probe Execution

No `scripts/*/tests/probe-*.sh` convention exists in this project; validation is via `scripts/check-assets.mjs`, `scripts/verify-media.mjs`, and `scripts/inventory-assets.mjs`, all executed above as behavioral spot-checks/artifact verification, not a separate probe harness. N/A.

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|---|---|---|---|---|
| SIZE-01 | 02, 03, 04, 05, 06, 07 | Reproducible offline pipeline `scripts/media.mjs` | ✓ SATISFIED | `--check` exit 0, determinism cited (WR-04 re-run), never in build/check/deploy |
| SIZE-02 | 03, 04 | Images resized ≤2400px, sRGB, ICC stripped, two presets, kebab-case, `<picture>`+`srcset` | ✓ SATISFIED | 318/318 images ≤2400px; `Picture.tsx` renders both presets correctly |
| SIZE-03 | 02 | Hero HDR→SDR bt709, H264 8-bit yuv420p, 30fps, muted, faststart, ≤4 Mo, poster from converted output | ✓ SATISFIED | `ffprobe` confirms all fields; 3,781,191 B; poster same dims as video. **Note: REQUIREMENTS.md still shows `[ ]` unchecked and "Pending" in the traceability table for SIZE-03 — a stale documentation artifact, not a code gap; the code evidence is unambiguous.** |
| SIZE-04 | 06 | CV re-encoded ≤12 Mo, yuv420p, faststart, AAC | ✓ SATISFIED | 10,343,991 B, `ffprobe` confirms format |
| SIZE-05 | 01, 06 | Process videos 25fps, yuv420p, faststart, ≤12 Mo, relative paths preserved | ✓ SATISFIED | All 8 confirmed; `1_MOHAMED.js` path unchanged |
| SIZE-06 | 05 | ~10 Tafsut pages via `gs` 300dpi + graphic preset, PDF out of `public/` | ✓ SATISFIED | 10 planches, correct order/alts, 0 PDF in `public/` or git history |
| SIZE-08 | 02, 03, 04, 06, 07 | `public/` < 60 Mo, lazy off-screen, only hero preloaded | ✓ SATISFIED | 55.36 MiB; 1 preload link; 10 lazy images on home alone |
| HERO-01 | 01, 02, 07 | Hero plays on iPhone/Android/desktop, muted/playsInline, poster, accessible pause | ✓ SATISFIED (code+server) / ? pending real-device confirmation | Range-serving fixes the server-side iOS blocker (confirmed in prod); actual on-device playback is Lyna's deferred UAT, not a code gap |
| PROJ-06 | 05 | "Identité d'un festival" gallery displayed, no longer "in progress" | ✓ SATISFIED | 10-item gallery, `inProgress` absent, "En cours de dev" = 0 occurrences |
| PROJ-07 | 04 | `project.id === "…"` branches preserved, media re-pointed to `public/media/**` | ✓ SATISFIED | Exactly 4 branches present, 0 `/assets/` refs remain |

No orphaned requirements found — all 10 phase-2 IDs declared across the 7 plans match REQUIREMENTS.md's phase-2 mapping exactly. (REQUIREMENTS.md's own checkbox/traceability rows for SIZE-03 and HERO-01 are stale — see Anti-Patterns note below.)

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `.planning/REQUIREMENTS.md` | SIZE-03, HERO-01 rows | Checkbox left `[ ]` and traceability marked "Pending" despite the requirement being code-complete and verified in this report | ℹ️ Info | Documentation staleness only — does not affect the deployed site or any success criterion; should be updated to `[x]`/"Complete" now that this verification confirms both |
| `src/data/projects.ts`, `src/routes/projects/$projectId.tsx` | whole files | Deliberately excluded from Prettier (per 02-03/02-04 decisions, to keep migration diffs minimal); ESLint reports ~628 pre-existing/expanded formatting errors across these plus 3 files untouched by phase 2 (`Reveal.tsx`, `router.tsx`, `__root.tsx`) | ℹ️ Info | Documented, intentional deviation (CLAUDE.md: "lint rouge, 609 erreurs Prettier préexistantes, hors périmètre"); not a phase-2 regression in functional code — `tsc --noEmit` is clean, `npx eslint scripts/ src/server.ts src/components/Picture.tsx` (the files phase 2 actually authored) is 0 errors |

No `TBD`/`FIXME`/`XXX`/`HACK`/`PLACEHOLDER` markers found in any file touched by this phase (`git diff --name-only be718d8..HEAD -- src scripts wrangler.jsonc package.json`). No stub returns, no hardcoded-empty props flowing to render.

### Human Verification Required

### 1. Hero video plays on real iPhone Safari (including Low Power Mode) with correct colours

**Test:** Open `https://lynarebahi.fr` on a real iPhone in Safari, once normally and once with Low Power Mode enabled. Observe whether the hero video autoplays (muted) and whether the plum/sakura gradient and video colours look correct (not washed out/HDR-flat).
**Expected:** Video autoplays (or, under Low Power Mode / reduced motion, shows the poster with a visible, working pause/play toggle); colours match the intended SDR bt709 look, no washed-out highlights.
**Why human:** Real device autoplay behaviour (especially Low Power Mode's autoplay suppression) and perceptual colour correctness cannot be simulated from a server; this was explicitly deferred by Lyna at the 02-07 checkpoint.

### 2. Hero video plays on Android Chrome and desktop browsers

**Test:** Open the same URL on an Android phone (Chrome) and a desktop browser.
**Expected:** Hero autoplays muted, pause button works, no layout shift.
**Why human:** Same class of device-specific playback behaviour as item 1.

### 3. Pause button VoiceOver announcement

**Test:** With VoiceOver (or another screen reader) enabled, navigate to the hero pause button.
**Expected:** Screen reader announces "Mettre en pause la vidéo" and the pressed/unpressed state is conveyed.
**Why human:** Actual screen-reader announcement behaviour cannot be verified via static code inspection; only the ARIA attributes (`aria-pressed`, `sr-only` label) can be confirmed programmatically, which was done.

### 4. CV video and SkøllRub 6-scene Animate chain playback (with sound)

**Test:** Play the CV video on the "Qui suis-je ?" section end to end; on `/projects/sae-2`, walk the Animate chain `1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN` with sound on, confirming all 8 process clips play without stalling.
**Expected:** CV plays cleanly to the end; all 6 scenes advance and all 8 process videos play with audio, no visual/audio glitches from the 720p re-encode.
**Why human:** File-level reachability and format compliance are proven by ffprobe/curl; actual timed CreateJS canvas playback and audio quality require a browser.

### 5. Tafsut plates and 100% visual A/B (no visible degradation anywhere)

**Test:** View the 10 Tafsut plates on `/projects/festival-identite` at full size; do a 100%-zoom visual comparison of a sample of re-encoded photos/graphics against their `media-src/` originals (logos and typography especially, for chroma bleed).
**Expected:** No visible quality loss anywhere; logo/typography edges remain crisp (this is why the pipeline forces AVIF 4:4:4 for graphics).
**Why human:** SSIM scores were logged during encoding (per-file, cited in the plan SUMMARYs) but a full perceptual "no visible degradation" sign-off is inherently a human judgment call, and was explicitly left as deferred UAT.

### Gaps Summary

One gap: **`main` is not pushed to `origin`.** `git fetch origin main` shows `origin/main` frozen at `e0d6b95` while local `HEAD` is 15 commits ahead at `a2e3bce` — every code-review fix (CR-01, WR-01 through WR-09, the WR-01 iteration-2 canonical-path fix), the security audit, and the docs commit recording the post-review production redeploy exist only on the local machine. This directly contradicts the closing claim in `02-07-SUMMARY.md` ("`main` est poussée. ... `git push origin main` : ... ni ahead ni behind") — that claim was true at the moment 02-07 finished (commit `c2e8d0e`), but has silently regressed as 15 more commits landed afterward without a follow-up push. **This does not affect the deployed site**: production `lynarebahi.fr` was independently curl-verified to already be running the fixed code (byte-identical hero/CV/process video sizes match the local, fixed tree; the commit message `a2e3bce` itself documents the redeploy to version `9b787c88`). The fix is a single `git push origin main` — no code change needed. Recommend closing this gap immediately (it is not a design or implementation defect) rather than routing it through a full gap-closure planning cycle.

Beyond that one gap, every roadmap success criterion for phase 2 is backed by independently-reproduced evidence in this pass: `public/` measured directly at 55.36 MiB, every shipped MP4 individually probed for codec/profile/pix_fmt/faststart/size, the 60 MiB and 12 MB/video guards proven to genuinely fail on injected oversized fixtures (not just claimed to), all 318 delivered images measured for the 2400 px ceiling, the Worker's 206 Range-serving fix confirmed live on both `wrangler dev` and production, and the Tafsut gallery/`inProgress` removal/PROJ-07 branch preservation all confirmed in rendered HTML and source. The remaining open items are the explicitly Lyna-deferred real-device UAT checks (iPhone/Android/desktop playback, VoiceOver, CV/Animate playback with sound, and the full visual A/B), which are human-judgment items already acknowledged in the phase's own checkpoints, not new gaps discovered here.

---

_Verified: 2026-09-28T16:30:00Z_
_Verifier: Claude (gsd-verifier)_

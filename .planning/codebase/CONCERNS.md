---
last_mapped_commit: 163c48737bad29b01210096abf6fb8eeec45c5a0
---

# Codebase Concerns

**Analysis Date:** 2026-09-27

**Context:** Phase 1 ("nettoyage & filet de sécurité") just removed dead code (`ProjectModal`, `Skills()`, `Petals`, `CornerOrnament`, custom cursor), the unused shadcn/Radix `ui/` kit, decorative effects, duplicate media, `server.js`, `vercel.json`, and the bun toolchain. Runtime dependencies dropped from ~54 to 10. A media-weight guard (`scripts/check-assets.mjs`) now runs as part of `npm run check` / `npm run deploy` and is described accurately below — it is **not** itself a gap, but it currently waives 3 legacy media files that phase 2 must fix. This document reflects the tree at commit `163c487` (post phase-1 verification, 2 items still pending human sign-off).

## Tech Debt

**Oversized/non-compliant media waived through `check-assets`, awaiting phase 2 re-encode:**
- Issue: three files are individually exempted in `scripts/check-assets.exceptions.json` from rules that would otherwise fail `npm run check`. The 25 MiB hard cap and forbidden-extension rules can never be waived, but `size`, `faststart`, and `pix_fmt` can be, and are, for these three:
  - `public/videos/hero.mp4` — waived rule `pix_fmt`. Confirmed via `ffprobe`: `pix_fmt=yuv420p10le`, `color_space=bt2020nc`, `color_transfer=arib-std-b67`, `color_primaries=bt2020` (10-bit HDR HLG). This does not play correctly (or at all) on iPhone Safari / most non-HDR displays, which is the primary device class a recruiter is likely to use.
  - `public/videos/56_Lyna_REBAHI_CVvideo.mp4` — waived rules `faststart`, `size`. File is 24,224,597 bytes (23.10 MiB) — only ~1.86 MiB under Cloudflare's hard 25 MiB per-asset limit, leaving almost no re-encode margin. Confirmed via `ffprobe -v trace`: `moov` atom is written after `mdat` (offset 24,165,300 of 24,224,597), i.e. no `faststart` — the browser cannot begin playback before downloading nearly the whole file.
  - `public/animate/videos/empattage.mp4` — waived rule `size`. File is 23,460,806 bytes (22.37 MiB), also close to the 25 MiB ceiling.
  - Files: `scripts/check-assets.exceptions.json` (all three entries), `scripts/check-assets.mjs:25-28` (hard cap / waivable rule definitions)
  - Impact: the site currently ships an HDR hero video that will render wrong or fail silently on non-HDR/iPhone playback paths, and two videos sit within ~2–3 MiB of a hard platform limit with no faststart on one of them (slow start-to-play).
  - Fix approach: re-encode `hero.mp4` to standard `yuv420p` (8-bit, bt709), re-mux `56_Lyna_REBAHI_CVvideo.mp4` with `-movflags +faststart` and reduce bitrate, re-encode `empattage.mp4` to reduce size with margin under 20 MiB. The exceptions file's own `$comment` says: "Legacy media tolerated until phase 2 re-encode. Empty this list in phase 2." — emptying it is the acceptance criterion.

**`public/` is ~215 MB total, dominating repo weight:**
- Issue: `du -sh public/*` → `animate` 90M, `assets` 82M, `videos` 40M, `media` 2.5M, `logo.png` 60K, `favicon.ico` 248K.
- Files: `public/animate/`, `public/assets/`, `public/videos/`
- Impact: even with the Cloudflare per-asset guard passing, aggregate page weight (especially the 8 animate-chain videos, ranging 2.7–22 MB each, and several multi-megabyte PNGs) is heavy for a "loads fast" core value.
- Fix approach: phase 2's stated scope — re-encode without visible loss, no deletion of visible media.

**Giant, uncompressed source PNGs with embedded ICC/monitor profiles:**
- Issue: `public/assets/chartegraphique_SkollRub.png` is 9047×5032 px, 3.02 MiB, `Colorspace: sRGB` (embedded profile confirmed via `identify -verbose`). Other large originals found: `site1–4.png` (2940×~1600), `designcarterose.png`/`designcartechocolat.png` (~2870×890), `logoprincipal.png`/`logosecondaire.png` (~2700×1530), `affiche_sensibilisation_Lyna_Rebahi.png` (2480×3508).
- Files: `public/assets/*.png` (run `identify -format "%f %wx%h\n" public/assets/*.png` to reproduce the full list)
- Impact: these are print/source-resolution exports served directly to the browser at full size — far larger than any on-screen display size needs, inflating page weight without a visible quality gain.
- Fix approach: resize to realistic max display dimensions and strip embedded color profiles/metadata during phase 2's re-encode pass (per the "no visible degradation" constraint, verify visually after resize).

**`festival-identite` project has no media:**
- Issue: `src/data/projects.ts:50-55` — the "Identité d'un festival" project entry has `media: []` and is awaiting images to be extracted from `media-src/charte_graphique.pdf` (a Tafsut brand-guide PDF, gitignored, never committed). `affichepromo.png` and `prévention.png` also sit only in `media-src/src/assets/` (confirmed present, un-migrated to `public/`), awaiting a content decision from Lyna about whether/how to use them.
- Files: `src/data/projects.ts:50-55`, `media-src/charte_graphique.pdf`, `media-src/src/assets/affichepromo.png`, `media-src/src/assets/prévention.png`
- Impact: this project card renders in the filtered grid (category "Branding") with no thumbnail/media images — a visibly incomplete card for a recruiter browsing the "Branding" filter.
- Fix approach: extract the relevant images from the PDF once Lyna decides on final assets; wire them into `public/assets/` and update `media: [...]`.

**`Project.category` union carries two dead members with no data or UI:**
- Issue: `type Project.category` in `src/data/projects.ts:4` is `"Site Web" | "Design" | "Branding" | "Illustration" | "Vidéo" | "SAE" | "Photo" | "Projet universitaire"`. Grep of the actual `projects` data shows only `Site Web`, `Branding`, `Photo`, `Illustration`, `Vidéo`, `Projet universitaire` are ever assigned — `Design` and `SAE` are unused union members. Separately, the filter-chip list `CATEGORIES` in `src/routes/index.tsx:15` is `["Tout", "Vidéo", "Photo", "Branding", "Illustration", "Projet universitaire"]` — it has no "Site Web" chip even though one project uses that category, so that project can never be isolated by the category filter (only reachable via "Tout").
- Files: `src/data/projects.ts:4`, `src/routes/index.tsx:15`
- Impact: low runtime impact (TypeScript narrowing only), but misleading to future edits — the type suggests more categories exist than are usable, and a real project is unreachable via filter.
- Fix approach: drop `Design`/`SAE` from the union, and either derive `CATEGORIES` from the data (`[...new Set(projects.map(p => p.category))]`) or add the missing "Site Web" chip.

**Hardcoded per-project branches in the project detail route:**
- Issue: `src/routes/projects/$projectId.tsx` (647 lines) contains four `project.id === "…"` conditional blocks (`"business-card-mockup"` at `:81`, `"clip"` at `:173`, `"sae-2"` at `:293`, `"sae-1"` at `:512`) instead of structured per-project data. This is a known, accepted decision for this milestone (not to be refactored now).
- Files: `src/routes/projects/$projectId.tsx:81,173,293,512`
- Impact: the file is large and each project's rich content is coupled to its literal ID string; adding/renaming a project ID requires touching this file directly, and the branches are easy to miss when adding a new project.
- Fix approach: deferred by design this milestone — flag for a future phase if more project-specific layouts are added (extract to per-project data or a `renderExtra(project)` map keyed by ID).

**Two stale comments left over from prior edits:**
- Issue: `import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici` (`src/routes/index.tsx:1`) is an editing artifact, not documentation — `Link` is already imported and presumably used; the comment no longer describes an action to take. `{/* Circular portrait */}` (`src/routes/index.tsx:134`) is a leftover label for markup that may no longer be styled as circular after phase-1's decoration removal (portrait halo/gradient border was deleted).
- Files: `src/routes/index.tsx:1`, `src/routes/index.tsx:134`
- Impact: cosmetic, but the "Ajoute Link ici" comment reads like an unresolved TODO to anyone unfamiliar with its origin, and "Circular portrait" may now be inaccurate given the decoration removal.
- Fix approach: delete both comments (or replace with an accurate description) in a small cleanup pass.

**Orphaned data-file section header:**
- Issue: `src/data/projects.ts:16-19` has a `// --- SITE WEB ---` header immediately followed by two blank lines and no entries directly under it before the next section comment (`// --- PROTOTYPE SITE WEB ACCESSIBLE ---` at line 20) — the section-comment convention documented for this file (group entries by category) is broken by an empty group.
- Files: `src/data/projects.ts:16-19`
- Impact: purely cosmetic; a future contributor following the section-comment convention could be confused about where "Site Web" entries actually live.
- Fix approach: delete the empty header block, or move the one `"Site Web"`-category entry under it.

**`@custom-variant dark` has no consumer:**
- Issue: `src/styles.css:4` declares `@custom-variant dark (&:is(.dark *));` but the codebase has no dark-mode toggle, no `.dark` class application anywhere, and no dark-specific styling that depends on it.
- Files: `src/styles.css:4`
- Impact: dead CSS-config surface; harmless but unused.
- Fix approach: remove if dark mode is not planned; otherwise wire up a toggle.

**`knip` and `wrangler` are used but not declared as devDependencies:**
- Issue: `package.json`'s `check`/`deploy` scripts invoke `wrangler deploy --dry-run` / `wrangler deploy` (`package.json:16-17`), and the phase-1 verification report ran `npx knip@6.38.0` to audit unused dependencies — but neither `wrangler` nor `knip` appears in `package.json` `dependencies` or `devDependencies` (confirmed: grep of `package.json` for `wrangler`/`knip` only matches the script strings, not a dependency entry). `knip.json` exists as a config file with no corresponding installed/declared tool.
- Files: `package.json` (scripts section), `knip.json`
- Impact: `npm install` on a clean checkout will not install `wrangler`, so `npm run check`/`npm run deploy` will fail (or silently resolve to a globally-cached/npx-fetched version, which is non-reproducible across machines/CI). `knip` audits become ad hoc, undocumented, unpinned `npx` invocations.
- Fix approach: `npm i -D wrangler@^4 knip` (per phase-1 review IN-08) to make both tools reproducible and lockfile-pinned.

**`engines` field is advisory-only; Node version mismatch between `.nvmrc` and `@types/node`:**
- Issue: `package.json` declares `"engines": { "node": ">=20.11" }` with no `.npmrc` `engine-strict=true` anywhere in the repo (confirmed: no `.npmrc` file found), so npm will only warn, never block, an incompatible Node version. Separately, `.nvmrc` pins Node `24`, while `@types/node` is `^22.16.5` — the installed type definitions target an older Node major than the pinned runtime.
- Files: `package.json:6-8`, `.nvmrc`
- Impact: a contributor on Node 18/20 can still `npm install` and run scripts without an explicit error, only a warning that's easy to miss; type-checking against Node 22 APIs while actually running Node 24 risks type/runtime drift for any newer Node 24-only API usage (currently low risk since the code doesn't use exotic Node APIs).
- Fix approach: either add `.npmrc` with `engine-strict=true` and align `engines.node` to `>=24`, or bump `@types/node` to `^24`.

**`npm run lint` is red — 609 pre-existing Prettier errors block lint as a real gate:**
- Issue: running `npx eslint .` reports 609 errors (mostly `prettier/prettier` formatting mismatches — indentation/spacing in `src/routes/projects/$projectId.tsx` and elsewhere) plus 1 warning; `npx prettier --check .` independently reports 37 files with formatting issues, including `src/components/Reveal.tsx`, `src/data/projects.ts`, `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/projects/$projectId.tsx`, `src/styles.css`, and most of `.planning/**`/`CLAUDE.md`.
- Files: `package.json:16` (`lint` script), all files listed by `npx prettier --check .`
- Impact: `lint` is not part of `check`/`deploy`, so this does not block a build or deploy, but it means lint is not currently usable as a real signal — a genuine new lint error is invisible in 609 pre-existing ones. Combined with `"@typescript-eslint/no-unused-vars": "off"` (disabled in `eslint.config.js`) and `"noUnusedLocals": false"/"noUnusedParameters": false` in `tsconfig.json`, dead code/unused imports are not caught by any automated tool in this project.
- Fix approach: run `npx prettier --write .` scoped to `src/` and `scripts/` (excluding `.planning/**` if those are intentionally left unformatted), then re-run `npx eslint .` to confirm a clean baseline; consider re-enabling `no-unused-vars` once the baseline is clean.

**`scripts/inventory-assets.mjs` is a functional but disconnected manual tool with known false-MISSING edge cases:**
- Issue: `knip` flags `scripts/inventory-assets.mjs` as an unused file — it is not wired into any `package.json` script and is only ever run manually (`node scripts/inventory-assets.mjs`). The tool works correctly on the current tree (`REF=62 NAME-ONLY=0 UNREF=0 MISSING=0`), but the phase-1 code review (iteration 3, `01-REVIEW.md`) identified two still-open regex edge cases in its quoted-literal matching at `scripts/inventory-assets.mjs:76-82`:
  - **WR-01 (regression):** a quoted `srcSet`/`srcset` value (e.g. `srcSet="/assets/a.png 1x, /assets/a@2x.png 2x"`) is taken as one literal path instead of split per descriptor, producing a false `MISSING`. The repo has no `srcset` today, so the real tree is clean, but phase 2 (image-weight work) is likely to introduce responsive `srcSet`/`sizes` markup, which would trip this.
  - **WR-02:** a quoted literal containing the *other* quote character (e.g. `"/assets/l'image.png"`, realistic for French file names with elisions like `l'affiche.png`) is cut short by the regex, producing a false `MISSING` for `/assets/l`.
  - Minor documented edge cases (IN-15): surrounding whitespace in a quoted literal, JSON-escaped slashes (`"\/assets\/a.png"`), and an apostrophe directly preceding a bare path — all narrow/contrived, not currently triggered by any real file.
- Files: `scripts/inventory-assets.mjs:76-82`
- Impact: none on the deployed site (the tool is not part of `check`/`deploy` and produces no `dist/` output), but a false `MISSING`/exit-1 from a future manual run (especially once `srcSet` responsive images are added in phase 2) could be mistaken for a real broken reference.
- Fix approach: apply the two documented regex fixes from `01-REVIEW.md` (split `srcSet` literals on `\d+[wx]` descriptors before treating them as single candidates; use one regex alternative per quote type so a literal only excludes its own delimiter). Re-run `node scripts/inventory-assets.mjs` afterward to confirm `MISSING=0` still holds.

**`check-assets.mjs` has several narrower diagnostic gaps (all non-blocking, carried from phase-1 review):**
- Issue: (a) the stale-exception check only detects a *missing* waived file, not an *unused* waiver that no longer applies, and does not normalize the `path` field for comparison (`scripts/check-assets.mjs:231-233`); (b) only `.mp4` files get the faststart/`pix_fmt` ffprobe inspection — other video containers, if ever added, would skip these checks (`scripts/check-assets.mjs:217`); (c) some malformed exceptions-file shapes fail closed (hard error) without a clear diagnostic message (`scripts/check-assets.mjs:58,82,232`); (d) `_headers`/`_redirects` Cloudflare Pages config files are not explicitly skipped from the size scan, raw MP4 box types are printed in diagnostics rather than human-readable labels, and a truncated MP4 that happens to have its `moov` early could pass the faststart check without a full-file integrity check (`scripts/check-assets.mjs:205,149,222`); (e) an audio-only `.mp4` is treated as a hard, non-waivable failure — this is intentional but should be called out explicitly in the script's header comment so a future contributor doesn't mistake it for an oversight (`scripts/check-assets.mjs:191-192,226`).
- Files: `scripts/check-assets.mjs:58,82,149,191-192,205,217,222,226,231-233`
- Impact: low — these are guard-rail refinements, not correctness bugs in the currently-passing guard.
- Fix approach: address opportunistically; none block phase 1 or 2.

## Known Bugs

None found that affect the currently deployed/deployable tree. (The two `inventory-assets.mjs` regex issues above are classified as tech debt, not bugs, because the tool is not wired into any build/deploy gate and produces no false result on the real tree today.)

## Security Considerations

**EmailJS credentials are hardcoded client-side literals with no anti-abuse controls:**
- Risk: the EmailJS public key (`vH9gSi4D3ru6ad63Z`), service ID (`service_mkurl73`), and template ID (`template_b9lcxkl`) are hardcoded string literals in `src/routes/index.tsx:314,332` (`emailjs.init("vH9gSi4D3ru6ad63Z")`, `emailjs.send("service_mkurl73", "template_b9lcxkl", templateParams)`). EmailJS public keys are designed to be exposed client-side, so this is not a secret leak by itself. However, the contact form (`src/routes/index.tsx:366-392`) has no honeypot field, no CAPTCHA, and no client- or server-side rate limiting — confirmed by reading the full `Contact` component: it is three plain `required` inputs (`name`, `email` with `type="email"`, `message`) submitted directly via `emailjs.send` with no other guard.
- Files: `src/routes/index.tsx:314,332,366-392`
- Current mitigation: EmailJS's own dashboard-side quota/domain-restriction settings (not visible in this codebase) are the only backstop.
- Recommendations: enable EmailJS's built-in domain allowlist (if not already set) and/or add a honeypot field / simple client-side throttle (disable resubmission for N seconds, already partially done via `loading` state) as a low-cost deterrent against automated spam submissions.

**Third-party script loaded without Subresource Integrity (SRI):**
- Risk: `public/animate/*.html` (`1_LYNA.html`, `2_CLEMENT.html`, `1_MOHAMED.html`, `2_SOPHIA.html`, `3_ALBERTIN.html`, `2_IMAD.html`) each load `https://code.createjs.com/1.0.0/createjs.min.js` directly from a third-party CDN with no `integrity="sha…"` attribute and no self-hosted fallback (confirmed: `grep -n "integrity=" public/animate/*.html` returns no matches). If `code.createjs.com` is ever compromised or serves a modified file, the animate-chain pages would execute arbitrary injected JS with no browser-side integrity check.
- Files: `public/animate/1_LYNA.html`, `2_CLEMENT.html`, `1_MOHAMED.html`, `2_SOPHIA.html`, `3_ALBERTIN.html`, `2_IMAD.html` (all reference the same external URL)
- Current mitigation: none.
- Recommendations: add an `integrity` hash pinned to the CreateJS 1.0.0 release, or vendor/self-host `createjs.min.js` under `public/animate/` to remove the runtime dependency on an external CDN entirely (also improves load reliability and removes a third-party network hop from the animate pages).

**No CSP headers configured for the Cloudflare deployment:**
- Risk: no `public/_headers` file exists (confirmed via `find . -iname "_headers"`, no result), so Cloudflare serves no `Content-Security-Policy` (or other security headers like `X-Frame-Options`/`Referrer-Policy`) for any route. Combined with the unpinned third-party CreateJS script above, there is no defense-in-depth if a script injection vector is ever found.
- Files: none present (absence is the finding) — would live at `public/_headers` for Cloudflare Pages/Workers static asset headers.
- Current mitigation: none.
- Recommendations: add a `public/_headers` file with a baseline CSP (at minimum allowing `script-src` for `code.createjs.com` and the app's own origin, `frame-src`/`child-src` for `www.youtube.com` for the embedded iframes) once phase 1/2 media work stabilizes; low priority for a static portfolio site but cheap to add.

## Performance Bottlenecks

**Three YouTube iframes load eagerly, no `loading="lazy"`:**
- Problem: `src/routes/projects/$projectId.tsx` renders 3 `<iframe>` elements (confirmed via `grep -c "<iframe"`) at lines `59`, `442`, `457` — the one at `:458` embeds `https://www.youtube.com/embed/jYkGO5j1BM4`. None carry a `loading="lazy"` attribute, so all embedded YouTube players' associated scripts/thumbnails load immediately on page render regardless of scroll position.
- Files: `src/routes/projects/$projectId.tsx:59,442,457-458`
- Cause: no `loading` attribute set on any of the three `<iframe>` tags.
- Improvement path: add `loading="lazy"` to all three iframes — a one-line change per iframe with no functional risk, directly reduces initial page weight/requests on project pages that embed YouTube video.

**No `prefers-reduced-motion` handling anywhere in the stylesheet:**
- Problem: `grep -n "prefers-reduced-motion" src/styles.css` returns no matches — none of the site's CSS transitions/animations (`Reveal` fade/slide-in, hover transitions on `.quest-btn`/`.hud-tag`, etc.) are gated behind a reduced-motion media query.
- Files: `src/styles.css`, `src/components/Reveal.tsx`
- Cause: media query never added.
- Improvement path: wrap animation-related CSS in `@media (prefers-reduced-motion: reduce) { ... }` to disable/shorten transitions for users who have that OS-level preference set — an accessibility gap more than a raw performance one, but commonly grouped with "unnecessary motion" concerns.

## Fragile Areas

**`public/animate/` CreateJS export chain (SkøllRub SAE-2 animation):**
- Files: `public/animate/*.html`, `public/animate/*.js` (compiled/minified Adobe Animate export — not deep-read per scope), `public/animate/videos/*.mp4`
- Why fragile: the 6-scene interactive chain (`1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN`) is wired entirely through `window.open()` calls inside the compiled Animate JS (confirmed via `grep -oE "window\.open\('[^']+'"` in the phase-1 verification report) — there is no React-level routing or error boundary around this chain. Any renamed/moved file under `public/animate/` (image, video, or `.js`) breaks the chain silently at runtime with no build-time check (the guard scripts check size/format, not internal cross-references between animate scenes). The actual in-browser CreateJS canvas playback through all 6 scenes has **not yet been human-verified** — per `01-VERIFICATION.md`, this is an explicitly pending item (`01-HUMAN-UAT.md`), deferred by the user.
- Safe modification: never rename/move files under `public/animate/` without also re-checking every `.html`/`.js` reference by hand (there is no build step that would catch the breakage); treat this whole directory as fixed content, not iteratively editable markup.
- Test coverage: none automated (no test runner in the project at all); only manual curl/grep sweeps performed during phase-1 verification, and full canvas playback confirmation is still pending human review.

**`src/routes/projects/$projectId.tsx` (647 lines) — largest source file, ID-string-coupled:**
- Files: `src/routes/projects/$projectId.tsx`
- Why fragile: renders per-project markup via string-literal `project.id === "…"` branches (see Tech Debt above) inside a single large route component; a typo in an ID string (no compile-time check tying these strings back to `src/data/projects.ts` entries) would silently render nothing extra for that project with no error.
- Safe modification: when adding/renaming a project ID in `src/data/projects.ts`, grep this file for the old ID string before renaming to catch any matching branch.
- Test coverage: none.

## Scaling Limits

**Cloudflare Workers 25 MiB per-asset hard limit:**
- Current capacity: enforced by `scripts/check-assets.mjs` (`HARD = 25 * MiB`, never waivable, `scripts/check-assets.mjs:25`).
- Limit: two currently-shipped video files sit within ~1.6–2 MiB of this ceiling (`56_Lyna_REBAHI_CVvideo.mp4` at 23.10 MiB, `empattage.mp4` at 22.37 MiB) — any further edit that grows either file (e.g. a higher-quality re-encode attempt) risks tripping the hard, non-waivable failure.
- Scaling path: phase 2's re-encode work should aim to reduce these files well below 20 MiB (the softer `FAIL` threshold) rather than just under 25 MiB, to leave real margin.

## Dependencies at Risk

None identified. The dependency set is now small (10 runtime dependencies, confirmed via `package.json`) and `npx knip@6.38.0 --include files,dependencies` reported 0 unused dependencies as of the phase-1 verification. `wrangler`/`knip` themselves are a process risk (see Tech Debt: not declared as devDependencies) rather than a package-currency risk.

## Missing Critical Features

**No automated tests of any kind:**
- Problem: no test runner is configured (`package.json` has no `test` script, no Jest/Vitest/Playwright config, no `*.test.*`/`*.spec.*` files anywhere under `src/` or `scripts/`).
- Blocks: any refactor (e.g. of `$projectId.tsx`'s branch logic, or `check-assets.mjs`/`inventory-assets.mjs` regex fixes) currently relies entirely on manual curl sweeps and code review rather than a repeatable test suite.

## Test Coverage Gaps

**Entire codebase — no test infrastructure:**
- What's not tested: everything — route components, the contact form's EmailJS integration, the `check-assets.mjs`/`inventory-assets.mjs` guard scripts' regex logic (which have documented false-positive/false-negative edge cases, see Tech Debt above), the category filter logic in `src/routes/index.tsx`.
- Files: entire `src/`, `scripts/` tree.
- Risk: regressions in guard-script regex behavior (WR-01/WR-02 style bugs) or in the contact form's submission flow would only surface through manual testing or in production.
- Priority: Low for this milestone (explicitly out of scope — "présentable à un recruteur cette semaine" is the stated priority), but worth flagging for scripts/check-assets.mjs and scripts/inventory-assets.mjs specifically once phase 2 touches media pipelines, since those scripts gate what can be deployed.

**Pending human-only verification (not a code gap, but an open item):**
- What's not confirmed: (1) visual absence of decorative effects (falling petals, pink custom cursor, "20 ans / Designer Multimédia" badge, corner ornaments, portrait halo) across home + 9 project pages under a live `wrangler dev` session; (2) actual CreateJS canvas playback through the full 6-scene SkøllRub animate chain, and a live Network-tab 404 sweep.
- Files: n/a (browser-rendering behavior, not a static code check) — see `.planning/phases/01-nettoyage-filet-de-s-curit/01-HUMAN-UAT.md`.
- Risk: code-level grep confirms 0 occurrences of the removed decorative components/listeners, and curl sweeps confirm 0×404 across 76 referenced URLs, but neither proves clean visual rendering or working canvas animation in a real browser.
- Priority: High — blocks final phase-1 sign-off; the user (Lyna) explicitly deferred this check rather than skipping it.

---

*Concerns audit: 2026-09-27*

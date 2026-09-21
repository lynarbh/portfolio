# Codebase Concerns

**Analysis Date:** 2026-09-21

## Tech Debt

**Duplicate video assets in `public/animate/`:**
- Issue: Every animation video exists twice with identical content and size — once at `public/animate/*.mp4` and again at `public/animate/videos/*.mp4` (e.g. `public/animate/empattage.mp4` and `public/animate/videos/empattage.mp4`, both 22M).
- Files: `public/animate/empattage.mp4`, `public/animate/videos/empattage.mp4`, `public/animate/miseenbouteile.mp4`, `public/animate/videos/miseenbouteile.mp4`, `public/animate/filtration.mp4`, `public/animate/videos/filtration.mp4`, `public/animate/concassage.mp4`, `public/animate/videos/concassage.mp4`, `public/animate/refroidissement.mp4`, `public/animate/videos/refroidissement.mp4`, `public/animate/whirpool.mp4`, `public/animate/videos/whirpool.mp4`, `public/animate/fermentation.mp4`, `public/animate/videos/fermentation.mp4`, `public/animate/ebullition.mp4`, `public/animate/videos/ebullition.mp4`
- Impact: ~100MB of pure duplication is committed to git and shipped as static assets, bloating the repo (`.git` is 333M) and the deployed build.
- Fix approach: Determine which copy is actually referenced by `public/animate/1_MOHAMED.html` (embedded via iframe in `src/routes/projects/$projectId.tsx:445`), delete the unused copy, and consider moving raw animation sources out of `public/` entirely.

**Raw design-tool source files committed under `public/`:**
- Issue: `public/animate/` contains Adobe Animate/Illustrator project sources and temp files, not just exported web assets: `public/animate/2_SOPHIA.fla` (7.5M), `public/animate/2_CLEMENT.fla` (6.3M), `public/animate/illustrations/dessins animate.ai` (7.7M), and Illustrator autosave temp files like `public/animate/illustrations/~ai-e41a6e88-a1e7-4213-bf3a-1cf656177b69_.tmp` (7.8M) and `public/animate/illustrations/~ai-d8a28adc-60a6-404d-bbd8-6e4c028794ba_.tmp` (7.4M).
- Files: `public/animate/**`
- Impact: `public/` is served as-is by the static host, so these multi-megabyte non-web files are publicly downloadable and inflate both the git repo and the deploy artifact for no functional benefit (they aren't referenced by any route).
- Fix approach: Move `.fla`/`.ai`/`.tmp` source files out of `public/` into a non-deployed `design-sources/` directory (or delete if no longer needed), keeping only the exported `.html`/`.js`/`.mp4` assets that `1_MOHAMED.html` actually loads.

**Dual package manager lockfiles:**
- Issue: Both `bun.lockb` and `package-lock.json` are present at the repo root.
- Files: `bun.lockb`, `package-lock.json`
- Impact: Ambiguous which package manager is authoritative; CI/deploy tooling (Vercel/Cloudflare) may resolve dependencies differently than local dev depending on which lockfile it picks up, risking version drift.
- Fix approach: Pick one package manager (scripts in `package.json` don't indicate bun-specific usage), delete the other lockfile, and document the choice.

**Dead/unused `ProjectModal` component:**
- Issue: `src/components/ProjectModal.tsx` is imported in `src/routes/index.tsx:7` but never rendered anywhere in the codebase.
- Files: `src/components/ProjectModal.tsx`, `src/routes/index.tsx:7`
- Impact: Dead code adds maintenance confusion; it also currently contains a latent bug (see Known Bugs) that would only surface if someone wires it up.
- Fix approach: Either remove the unused import/component or actually use it as a "quick view" modal on the projects grid, fixing the YouTube-embed bug first.

**`Skills()` component is a stub returning `null`:**
- Issue: `function Skills() { return null; }` in `src/routes/index.tsx:495-497` renders nothing, while `SKILL_TAGS` (`src/routes/index.tsx:21-24`) is defined and still used elsewhere (line 347, inside `About`), suggesting a dedicated "Skills" section was removed or never finished.
- Files: `src/routes/index.tsx:21-24`, `src/routes/index.tsx:495-497`
- Impact: Dead component in the render tree; confusing for future edits (looks like a bug rather than an intentional no-op).
- Fix approach: Remove the unused `Skills` component entirely, or implement the section if a dedicated skills block is still desired.

**Large monolithic route files mixing many concerns:**
- Issue: `src/routes/index.tsx` (642 lines) and `src/routes/projects/$projectId.tsx` (665 lines) each combine data constants, animation/particle classes, multiple page sections, and the custom cursor implementation in a single file.
- Files: `src/routes/index.tsx`, `src/routes/projects/$projectId.tsx`
- Impact: Harder to navigate, test, or reuse individual sections (Hero, About, Projects, Contact, CustomCursor all live in one file); increases merge-conflict risk as the site grows.
- Fix approach: Extract section components (`Hero`, `About`, `Projects`, `Contact`, `CustomCursor`, the `Point`/particle classes) into `src/components/` files, keeping `index.tsx` as a thin composition layer.

**Lint rules disabled for unused code:**
- Issue: `@typescript-eslint/no-unused-vars` is turned off in `eslint.config.js:24`, and `tsconfig.json` sets `"noUnusedLocals": false` and `"noUnusedParameters": false`.
- Files: `eslint.config.js`, `tsconfig.json`
- Impact: Dead imports/variables (like the unused `ProjectModal` import) are never flagged automatically, making it easy for dead code to accumulate unnoticed.
- Fix approach: Re-enable `noUnusedLocals`/`noUnusedParameters` and the ESLint rule (with an `_`-prefix ignore pattern for intentionally unused args) once existing violations are cleaned up.

## Known Bugs

**Broken video reference: `extraitpubSAE1.mp4` does not exist and is gitignored:**
- Symptoms: The project detail page for the SAE project renders a `<video>` `<source>` pointing at a file that is not present in the working tree and is excluded from git, so it 404s in every environment (dev, preview, and production).
- Files: `src/routes/projects/$projectId.tsx:589` (`<source src="/videos/extraitpubSAE1.mp4" type="video/mp4" />`), `.gitignore:33` (`public/videos/extraitpubSAE1.mp4`)
- Trigger: Open the project detail page for the project that embeds this video.
- Workaround: None currently in code (no fallback/poster shown if the source fails). Likely this file was removed for exceeding Cloudflare's 25MiB asset limit (per the "Compress CV video" commit history) but the reference and the `.gitignore` entry were never cleaned up.

**Missing project media: festival flyer/goodies images:**
- Symptoms: A project entry references two images that don't exist in `public/assets/`, so they render as broken `<img>` tags in the project detail gallery.
- Files: `src/data/projects.ts:54` (`media: ["/assets/festival-flyer.jpg", "/assets/festival-goodies.jpg"]`)
- Trigger: View the project detail page for the project referencing these two files.
- Workaround: None; both files are absent from `public/assets/`.

**`ProjectModal` would break for YouTube-embedded projects:**
- Symptoms: `ProjectModal` always renders `<video src={project.video} controls />` regardless of the video source (`src/components/ProjectModal.tsx:52-56`), but two projects in `src/data/projects.ts:92,103` use YouTube embed URLs (`https://www.youtube.com/embed/...`). A native `<video>` element cannot play a YouTube embed URL, so the video area would render as a broken/black player.
- Files: `src/components/ProjectModal.tsx:51-56`, `src/data/projects.ts:92`, `src/data/projects.ts:103`
- Trigger: Currently unreachable because `ProjectModal` is never rendered (see Tech Debt), but would trigger immediately if the component is wired up without fixing this.
- Workaround: `src/routes/projects/$projectId.tsx:60-` already implements the correct pattern — checking `project.video.includes("youtube.com/embed")` and rendering an `<iframe>` instead of `<video>`. `ProjectModal` should mirror that logic before use.

**Uncommitted removal of two projects from `projects.ts` (working tree only):**
- Symptoms: `git status` shows `src/data/projects.ts` modified with two project entries removed (`page-web-perso` and `mashup`) but not yet committed. Their thumbnail/media assets (e.g. `/assets/portfolio-thumbnail-03-web.png`, `/assets/site.jpg`, `/assets/portfolio-thumbnail-04-video.png`) remain in `public/assets/` even after removal, becoming orphaned if the change is committed as-is.
- Files: `src/data/projects.ts` (uncommitted diff)
- Trigger: Committing the current working-tree state as-is.
- Workaround: None required functionally, but the now-unused assets should be cleaned up in the same commit to avoid further asset bloat.

## Security Considerations

**EmailJS credentials hardcoded in client bundle:**
- Risk: The EmailJS public key, service ID, and template ID are hardcoded directly in source rather than sourced from environment variables: `emailjs.init("vH9gSi4D3ru6ad63Z")` and `emailjs.send("service_mkurl73", "template_b9lcxkl", templateParams)`.
- Files: `src/routes/index.tsx:506`, `src/routes/index.tsx:524`
- Current mitigation: EmailJS public keys are designed to be exposed client-side, so this is not a leaked-secret issue per se, but the service/template IDs being fully visible in the bundle (and never rotated via env config) means anyone can call `emailjs.send()` with these exact IDs from a browser console or script, independent of this site, to send email through the owner's EmailJS account/template.
- Recommendations: Move IDs into `VITE_*` environment variables (even though they'll still ship to the client, this makes rotation and per-environment configuration easier), and configure rate limiting / domain allowlisting in the EmailJS dashboard to prevent quota abuse from outside the site's origin.

**No spam protection on the contact form:**
- Risk: `handleSubmit` in `src/routes/index.tsx:509-534` posts directly to EmailJS with no CAPTCHA, honeypot field, or client/server-side rate limiting.
- Files: `src/routes/index.tsx:499-534`
- Current mitigation: None.
- Recommendations: Add a honeypot input (cheap, no dependency) and/or EmailJS's built-in reCAPTCHA integration to reduce automated spam submissions against the free-tier EmailJS quota.

**Minimal input validation on contact form fields:**
- Risk: `formRef.current` fields are read via `FormData` and sent directly as `templateParams` with no client-side validation of email format or message length beyond native HTML `required`/`type="email"` attributes (would need to confirm via the `<form>` markup, but no Zod/`react-hook-form` validation is wired up here despite both being dependencies used elsewhere for other UI primitives).
- Files: `src/routes/index.tsx:509-534`
- Current mitigation: Native browser form validation only (`type="email"`, `required`, if present in the JSX).
- Recommendations: Reuse the already-installed `react-hook-form` + `zod` + `@hookform/resolvers` stack (already a dependency, per `package.json`) for the contact form instead of raw `FormData`, matching validation patterns likely used by the `src/components/ui/form.tsx` primitive.

## Performance Bottlenecks

**Custom cursor triggers a React re-render on every `mousemove` event:**
- Problem: `CustomCursor` calls `setPos({ x: e.clientX, y: e.clientY })` inside a raw `window.addEventListener("mousemove", ...)` handler with no throttling/`requestAnimationFrame` batching.
- Files: `src/routes/index.tsx:613-627`
- Cause: Every mouse movement (potentially 60-120+ events/sec) triggers a React state update and re-render of the cursor `<div>`, which is wasteful compared to updating the element's position directly via a ref/CSS custom property outside React's render cycle.
- Improvement path: Replace `useState`/re-render with a `ref`-based approach that mutates `style.transform` directly in the event handler (bypassing React reconciliation), or throttle updates with `requestAnimationFrame`.

**Large uncompressed/near-limit video and image assets served from `public/`:**
- Problem: Several static assets are large enough to matter for page load and are close to platform limits: `public/videos/56_Lyna_REBAHI_CVvideo.mp4` is 23.1 MiB (just under Cloudflare's 25 MiB per-asset limit, per recent commit `15df7a8 Compress CV video to meet Cloudflare 25MiB asset limit`), `public/videos/hero.mp4` is 17M, and images like `public/assets/mockup.jpg` (9.8M) and `public/assets/affiche_sensibilisation_Lyna_Rebahi.png` (9.6M) are unusually large for web delivery.
- Files: `public/videos/56_Lyna_REBAHI_CVvideo.mp4`, `public/videos/hero.mp4`, `public/assets/mockup.jpg`, `public/assets/affiche_sensibilisation_Lyna_Rebahi.png`
- Cause: No image optimization pipeline (no `next/image`-equivalent, no responsive `srcset` generation, no build-time compression step observed in `vite.config.ts`); videos and images appear to be uploaded at or near their original export size.
- Improvement path: Introduce a build-time asset optimization step (e.g. `vite-plugin-image-optimize`, or pre-process with `ffmpeg`/`sharp` before committing), serve responsive image sizes, and keep the CV video comfortably under the 25 MiB Cloudflare limit with margin for future edits (currently only ~1.9 MiB of headroom).

**223MB `public/animate/` directory shipped in full to every deploy:**
- Problem: The entire `public/animate/` directory (223M, including duplicated videos and raw design-tool source files — see Tech Debt) is part of the static output shipped on every deploy, even though only `public/animate/1_MOHAMED.html` and its direct dependencies are actually used (embedded via iframe in `src/routes/projects/$projectId.tsx:445`).
- Files: `public/animate/**`, `src/routes/projects/$projectId.tsx:445`
- Cause: No separation between "used web assets" and "project source files" within `public/animate/`.
- Improvement path: Audit which files `1_MOHAMED.html` actually loads (likely a small subset of the videos/images), move everything else out of `public/`, and remove the duplicate `public/animate/videos/` copies.

## Fragile Areas

**Contact form (EmailJS integration):**
- Files: `src/routes/index.tsx:499-610`
- Why fragile: Relies entirely on a third-party service (EmailJS) with hardcoded IDs and no server-side fallback; if EmailJS quota is exhausted (e.g. due to spam, see Security) or the account/template is modified, the form silently fails with a generic French error message (`"Erreur lors de l'envoi. Veuillez réessayer."`) and only a `console.error(err)` for diagnostics.
- Safe modification: Any change to the EmailJS template field names must be mirrored exactly in `templateParams` (`name`, `email`, `message`) at `src/routes/index.tsx:517-521`— there's no shared type/schema tying the form fields to the EmailJS template.
- Test coverage: None (no test suite in the repo at all — see Test Coverage Gaps).

**Project data/media coupling (`src/data/projects.ts`):**
- Files: `src/data/projects.ts`, `public/assets/`, `public/videos/`
- Why fragile: Media paths in `projects.ts` are plain string literals with no build-time check that the referenced file exists in `public/`; as demonstrated by the two confirmed broken references (festival images, `extraitpubSAE1.mp4`), it's easy for asset and data changes to drift out of sync silently, since nothing fails at build time.
- Safe modification: When adding/removing a project, always verify referenced `thumbnail`/`media`/`video` paths resolve to real files under `public/` before committing; consider deleting the corresponding asset files in the same commit when a project entry is removed.
- Test coverage: None — no automated check verifies asset references against the filesystem.

**Custom cursor and particle/portrait animation code:**
- Files: `src/routes/index.tsx:35-`(`Point` class and `PORTRAIT_EFFECT_SETTINGS`), `src/routes/index.tsx:613-627` (`CustomCursor`)
- Why fragile: Hand-rolled canvas/DOM animation logic embedded directly in the route file with no unit tests and tight coupling to specific DOM/CSS class names (`sakura-cursor`, `cursor-dot` in `src/styles.css:391-394`); refactoring the styles or route structure could silently break the animation with no test to catch it.
- Safe modification: Keep CSS class names and JS logic changes in sync manually; visually verify in a browser after any change since there's no automated regression check.
- Test coverage: None.

## Scaling Limits

**Cloudflare per-asset size limit (25 MiB):**
- Current capacity: `public/videos/56_Lyna_REBAHI_CVvideo.mp4` sits at 23.1 MiB, only ~1.9 MiB under Cloudflare's 25 MiB per-file asset limit (the same limit that previously caused a build/deploy failure, per commit `15df7a8`).
- Limit: Any future re-export of the CV video at slightly higher quality/bitrate risks exceeding 25 MiB again and breaking deployment.
- Scaling path: Adopt a stricter target bitrate/resolution for this asset, or move large video assets to an external CDN/host (e.g. YouTube unlisted, Cloudflare Stream, Bunny) instead of bundling them as static site assets, as already done for two other project videos (`src/data/projects.ts:92,103`).

**Static `public/` directory size growing with every new project:**
- Current capacity: `public/assets/` alone is 122M and `public/animate/` is 223M, for a portfolio with a modest number of projects (`public/assets` currently has ~123 tracked files).
- Limit: Continuing to add full-resolution photos/videos directly to `public/` without optimization will keep increasing repo clone time, `.git` size (currently 333M), and deploy artifact size, eventually impacting build/deploy times on Cloudflare/Vercel.
- Scaling path: Adopt an external asset host/CDN for large media (video especially), and/or enforce an image optimization step before assets are added to `public/assets/`.

## Dependencies at Risk

**Two overlapping deploy targets (Cloudflare + Vercel) with a custom Node server:**
- Risk: The repo contains configuration for three different deployment paths simultaneously: `wrangler.jsonc` (Cloudflare Workers, via `@cloudflare/vite-plugin`), `vercel.json` (Vercel, `buildCommand`/`outputDirectory`), and a standalone `server.js` (plain Node HTTP server wrapping the TanStack Start server entry, started via `npm start`).
- Impact: Unclear which target is the actual production deployment; behavior (headers, env var injection, edge runtime constraints) can differ meaningfully between Cloudflare Workers and a plain Node server, so a fix validated on one target may not carry over to another.
- Migration plan: Confirm which target is actually live (Cloudflare per recent commit history mentioning "Cloudflare 25MiB asset limit"), and remove or clearly document the unused deploy configs (`vercel.json` and/or `server.js`) to avoid configuration drift.

**`@lovable.dev/vite-tanstack-config` as an opaque base config:**
- Risk: `vite.config.ts` delegates almost all Vite/plugin configuration (TanStack Start, React, Tailwind, path aliases, Cloudflare plugin, dev-only component tagger, env injection) to an external package `@lovable.dev/vite-tanstack-config`, with an explicit comment warning not to duplicate plugins manually.
- Files: `vite.config.ts`
- Impact: Debugging build/dev issues requires understanding an external, less-documented package's internals rather than local, inspectable Vite config; upgrades to this dependency could silently change build behavior.
- Migration plan: If build issues become hard to diagnose, consider "ejecting" to an explicit local `vite.config.ts` with the actual plugin list, based on this package's current output.

## Missing Critical Features

**No automated tests of any kind:**
- Problem: There is no test runner configured (no Jest/Vitest config, no `*.test.*`/`*.spec.*` files anywhere in `src/`), and no `test` script in `package.json`.
- Blocks: Regression-safe refactoring of the large route files, safe validation of the contact form logic, and safe cleanup of the asset/data mismatches identified above (broken video/image references) all currently rely entirely on manual browser testing.

**No CI pipeline:**
- Problem: No GitHub Actions/CI configuration was found in the repository for running lint, type-check, or build on pull requests.
- Blocks: Type errors, lint violations, or broken asset references (like the ones found in this audit) can be merged/deployed without being caught automatically.

## Test Coverage Gaps

**Entire codebase has zero test coverage:**
- What's not tested: Everything — the contact form submission flow, project data/asset integrity, routing (`$projectId` not-found handling), and all UI components.
- Files: entire `src/` tree
- Risk: Regressions (like the two broken asset references and the dormant `ProjectModal` bug found in this audit) are only caught by manual inspection or user reports.
- Priority: Medium — for a personal portfolio site the risk profile is lower than a production application, but a small smoke test (e.g. verifying every `thumbnail`/`media`/`video` path in `src/data/projects.ts` resolves to a real file in `public/`) would have caught the concrete bugs found here and is cheap to add.

---

*Concerns audit: 2026-09-21*

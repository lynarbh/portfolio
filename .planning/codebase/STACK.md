---
last_mapped_commit: b4a65c7eb7cb5381e1e814d9888c57c5bdb3009a
---

# Technology Stack

**Analysis Date:** 2026-09-27

## Languages

**Primary:**
- TypeScript 5.8.3 - Application code (`src/**/*.ts`, `src/**/*.tsx`), strict mode enabled (`tsconfig.json`)

**Secondary:**
- JavaScript (ESM) - `eslint.config.js`, `vite.config.ts` (`.ts` but plain config), two build/CI scripts under `scripts/` (`scripts/check-assets.mjs`, `scripts/inventory-assets.mjs`)
- Minified/compiled JS - `public/animate/*.js` (Adobe Animate CreateJS export; not hand-written source, not TypeScript, do not deep-edit)

## Runtime

**Environment:**
- Node.js — pinned via `.nvmrc` = `24`; `package.json` `engines.node` requires `>=20.11`
- No standalone Node HTTP server in this codebase (previously `server.js` existed; it has been removed). The only production runtime is Cloudflare Workers.

**Package Manager:**
- npm only. `package-lock.json` present (`lockfileVersion: 3`).
- No `bun.lockb`, no `bunfig.toml`, no `pnpm-lock.yaml`, no `yarn.lock` — the repo is npm-only, not dual-tracked.

## Frameworks

**Core:**
- React 19.2.0 (`react`, `react-dom`) - UI library
- TanStack Start 1.167.14 (`@tanstack/react-start`) - Full-stack React meta-framework (SSR, file-based routing, server entry consumed by Cloudflare Workers)
- TanStack Router 1.168.0 (`@tanstack/react-router`) - Routing; generated route tree at `src/routeTree.gen.ts` (do not hand-edit); router setup in `src/router.tsx`
- TanStack Router Plugin 1.167.10 (`@tanstack/router-plugin`) - Vite plugin for route-tree codegen, wired via `@lovable.dev/vite-tanstack-config`
- Tailwind CSS 4.2.1 (`tailwindcss`, `@tailwindcss/vite`) - CSS-first config, no `tailwind.config.*` file; theme defined in `src/styles.css` via `@theme inline`

**Testing:**
- Not detected — no test runner (Jest/Vitest/Playwright), no `*.test.*`/`*.spec.*` files, no test script in `package.json`. Verification instead relies on `tsc --noEmit`, `vite build`, and the custom asset-guard scripts described below.

**Build/Dev:**
- Vite 7.3.1 - Bundler/dev server, config at `vite.config.ts`
- `@lovable.dev/vite-tanstack-config` 1.4.0 (devDependency) - Shared Vite config wrapper (Lovable.dev platform) bundling: `tanstackStart`, `viteReact`, `tailwindcss`, `tsConfigPaths`, the Cloudflare plugin (build-only), a dev-only component tagger, `VITE_*` env injection, the `@` path alias, React/TanStack dedupe, error-logger plugins, and sandbox port/host detection. Per the comment in `vite.config.ts`, these must NOT be re-added manually.
- `@cloudflare/vite-plugin` 1.25.5 - Cloudflare Workers build integration (invoked by the Lovable config, build-only)
- `vite-tsconfig-paths` 6.0.2 - Resolves the `@/*` → `./src/*` path alias from `tsconfig.json`
- ESLint 9.32.0 flat config (`eslint.config.js`) - `@eslint/js`, `typescript-eslint` 8.56.1, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-prettier` (+ `eslint-config-prettier`)
- Prettier 3.7.3 - Formatting, config at `.prettierrc` (100 print width, double quotes, semicolons, trailing commas), ignore list at `.prettierignore`
- `wrangler` (via `devDependencies`, resolved through `@cloudflare/vite-plugin`) - Cloudflare Workers CLI, used by `npm run check` (`wrangler deploy --dry-run`) and `npm run deploy`
- `knip` config present at `knip.json` (dependency/dead-code checker), ignoring `public/**`, `media-src/**`, `src/routeTree.gen.ts`, and treating `tailwindcss`/`@tanstack/router-plugin` as used even without a direct import

## Key Dependencies

**Critical (runtime, `dependencies` in `package.json` — ~10 packages after pruning):**
- `@emailjs/browser` 4.4.1 - Client-side email delivery for the contact form (see INTEGRATIONS.md), used in `src/routes/index.tsx`
- `@tanstack/react-router` 1.168.0, `@tanstack/react-start` 1.167.14, `@tanstack/router-plugin` 1.167.10 - Routing/SSR framework
- `react` 19.2.0, `react-dom` 19.2.0 - UI runtime
- `tailwindcss` 4.2.1, `@tailwindcss/vite` 4.2.1 - Styling
- `vite-tsconfig-paths` 6.0.2 - Path alias resolution
- `@cloudflare/vite-plugin` 1.25.5 - Cloudflare build integration

**Removed since the previous stack map (cleanup phase):**
- The entire shadcn/ui component kit at `src/components/ui/` and its supporting Radix UI packages (~25 `@radix-ui/react-*`), `zod`, `react-hook-form`, `@hookform/resolvers`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `sonner`, `embla-carousel-react`, `recharts`, `cmdk`, `vaul`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `date-fns`, `tw-animate-css`, `@tanstack/react-query` — none of these appear in the current `package.json` dependency list. `components.json` (shadcn CLI config) and `src/hooks/use-mobile.tsx`/`src/lib/utils.ts` are gone along with them — verify before assuming any shadcn/Radix pattern still applies.
- `bun.lockb`, `bunfig.toml`, `server.js`, `vercel.json` — all absent; the repo previously supported bun + a plain Node server + Vercel, none of that remains.

**Infrastructure:**
- `@types/node` 22.16.5, `@types/react` 19.2.0, `@types/react-dom` 19.2.0 - Type definitions
- `@vitejs/plugin-react` 5.2.0 - React Fast Refresh support for Vite (transitively required by the Lovable config)
- `globals` 15.15.0 - ESLint global variable definitions

## Custom Build/CI Scripts

Two hand-written Node ESM scripts live under `scripts/`, both run against `dist/client` (the built output), not source:

**`scripts/check-assets.mjs`** — asset guard invoked by `npm run check` (`node scripts/check-assets.mjs`). Walks `dist/client` after `vite build` and fails the build on:
- Any file over 25 MiB (Cloudflare's hard per-asset limit — never waivable)
- Any file over 20 MiB (`"size"` rule — waivable via exceptions file)
- Forbidden source-file extensions leaking into the deploy (`.fla`, `.ai`, `.tmp`, `.pdf`, `.psd`, `.xd`, `.aep`, `.prproj` — never waivable)
- Non-faststart MP4s (`moov` atom after `mdat`) — waivable via `"faststart"` rule
- Non-`yuv420p` pixel format video, detected via `ffprobe` if present on `PATH` — waivable via `"pix_fmt"` rule; if `ffprobe` is missing the check WARNs (not FAILs) unless run with `--strict` / `CHECK_ASSETS_STRICT=1`
- Also warns (10 MiB threshold), respects Cloudflare's `.assetsignore` glob syntax in `dist/client`, and reads waivers from `scripts/check-assets.exceptions.json`
- Two further rules were added for the phase-2 media pipeline, both **never waivable**: any single `.mp4` over 12,000,000 B (the per-video contract the media pipeline encodes to), and the whole `dist/client` tree over a 60 MiB total budget (the real byte sizes of everything Cloudflare uploads).

`scripts/check-assets.exceptions.json` currently waives 3 legacy media files pending a "phase 2" re-encode: `videos/hero.mp4` (HDR `yuv420p10le`, waives `pix_fmt`), `videos/56_Lyna_REBAHI_CVvideo.mp4` (23.10 MiB, `moov` after `mdat`, waives `faststart` + `size`), `animate/videos/empattage.mp4` (22.37 MiB, waives `size`). The 25 MiB hard ceiling and forbidden extensions can never be waived through this file.

**`scripts/inventory-assets.mjs`** — read-only asset inventory (not wired into `npm run check`). Scans `public/` (excluding `public/animate/`) and classifies every file as REF (full path referenced in source), NAME-ONLY (only the bare filename found — needs manual review), or UNREF (not referenced anywhere). It also reverse-scans `src/**/*.{ts,tsx,css,json,html}` plus the Animate export's `.html`/`.js` files for `/assets|videos|animate|media/` URL literals that point to files missing from `public/`, exiting 1 if any are MISSING. Run manually (`node scripts/inventory-assets.mjs`) to audit for dead/missing media before a cleanup or release.

**Offline media pipeline (`scripts/media.mjs` + `scripts/media/{util,images,video,pdf}.mjs`, and `scripts/verify-media.mjs`)** — a separate, hand-run pipeline, never wired into `build`/`check`/`deploy`, added alongside the Worker-based video serving in `src/server.ts`. `npm run media` reads the gitignored `media-src/manifest.json` and encodes source masters under `media-src/` with `sharp` (images: AVIF/WebP/JPEG/PNG, presets `photo`/`graphic`, widths 640/1200/2400), `ffmpeg` (videos: `hero`/`cv`/`process` classes, single-pass CRF, `-threads:v 1`, bitexact flags for reproducible output), and Ghostscript (`gs`, only when the manifest has PDF page entries). Outputs are staged under `media-src/.tmp/stage/<id>/` and moved atomically into `public/media/**` / `public/animate/videos/*.mp4` only once an entry's encode, SSIM check, and probes all succeed; a content-addressed cache at `media-src/.cache.json` (source SHA-256 + entry options + a `PIPELINE_VERSION` constant + an encoder-tool-version fingerprint) skips re-encoding unchanged entries. Every successful run rewrites `src/data/media.generated.ts` (generated, Prettier-ignored, exports the `MediaId` union plus `images`/`videos`/`galleries` const records) from scratch; a failed run leaves it untouched. `npm run verify-media` is a separate, read-only companion script that re-checks the pipeline's own committed output (via `ffprobe`) against the claims in `media.generated.ts` — file existence, faststart, `yuv420p`, per-file byte ceilings (≤ 12,000,000 B for any video, plus tighter hero-specific limits), no residual `.pdf` under `public/`, and gallery completeness — without needing `media-src/` or any encoder binary beyond `ffprobe`/`sharp`. `sharp` (pinned `0.35.4`) and `wrangler` (pinned `4.82.2`) are both `devDependencies` specifically for this pipeline and its verification/dry-run needs; `package.json` also now declares `engines.node >= 22.12` (up from the prior `>=20.11`), matching the Node APIs these scripts rely on.

## Configuration

**Environment:**
- No `.env`/`.env.*` files present in the repo
- No `VITE_*` environment variables referenced in `src/` (only `import.meta.env.DEV` is used, a Vite built-in, in `src/router.tsx`)
- EmailJS credentials (public key, service ID, template ID) are hardcoded directly in `src/routes/index.tsx` rather than sourced from environment variables — see INTEGRATIONS.md for details and the security note

**Build:**
- `vite.config.ts` - Thin wrapper delegating to `@lovable.dev/vite-tanstack-config`'s `defineConfig()`; additional Vite options would go under `defineConfig({ vite: { ... } })`
- `tsconfig.json` - Target ES2022, bundler module resolution, strict mode, `@/*` path alias to `./src/*`, includes `src/**/*.ts(x)`, `vite.config.ts`, `eslint.config.js`. `noUnusedLocals`/`noUnusedParameters` are both `false` — dead code is not caught by the compiler.
- `components.json` — **removed**. The shadcn/ui scaffolding config no longer exists in the repo; do not assume shadcn conventions apply to new components.
- `wrangler.jsonc` - Cloudflare Workers config: app name `tanstack-start-app`, `compatibility_date: 2025-09-24`, `nodejs_compat` flag, entry `@tanstack/react-start/server-entry`. No `vercel.json` exists.
- `knip.json` - Dead-code/unused-dependency checker config (ignores `public/**`, `media-src/**`, `src/routeTree.gen.ts`)

**Package scripts (`package.json`):**
```bash
npm run dev        # vite dev
npm run build      # vite build
npm run build:dev  # vite build --mode development
npm run preview    # vite preview
npm run lint       # eslint .
npm run format     # prettier --write .
npm run check      # tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run
npm run deploy     # npm run check && wrangler deploy
```
`check` is the full pre-deploy gate (typecheck + build + asset guard + Cloudflare dry-run); `deploy` runs `check` then actually deploys via `wrangler deploy`. Neither script has been executed as part of this mapping pass.

## Platform Requirements

**Development:**
- Node `>=20.11` (`.nvmrc` pins `24`)
- `npm install` then `npm run dev`

**Production:**
- Cloudflare Workers only (`wrangler.jsonc`), built from the same `vite build` output (`dist/client` for static assets, `dist/server` for the SSR entry)
- Per-asset hard limit of 25 MiB enforced by Cloudflare and by `scripts/check-assets.mjs`

---

*Stack analysis: 2026-09-27*

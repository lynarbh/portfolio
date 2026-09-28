---
last_mapped_commit: b4a65c7eb7cb5381e1e814d9888c57c5bdb3009a
---
<!-- refreshed: 2026-09-28 -->
# Architecture

**Analysis Date:** 2026-09-28

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│              Cloudflare Worker entry (edge)                  │
│                    `src/server.ts`                           │
│  GET /media/video/*.mp4, /animate/videos/*.mp4 → Cache API   │
│  (Range → 206); everything else → TanStack Start SSR handler │
└───────────────┬──────────────────────────┬────────────────────┘
                │ (video paths)             │ (all other paths)
                ▼                          ▼
┌──────────────────────────┐   ┌─────────────────────────────────────────────┐
│  Workers Static Assets    │   │              Root Shell / Document           │
│  binding `ASSETS`         │   │  `src/routes/__root.tsx`, `src/router.tsx`   │
│  (`wrangler.jsonc`)       │   │  <head> meta/fonts, global stylesheet,       │
└──────────────────────────┘   │  404 + error boundary                        │
                                └──────────────────────────┬────────────────────┘
                                                │ <Outlet/>
                                 ┌──────────────┴───────────────┐
                                 ▼                              ▼
                ┌──────────────────────────────┐   ┌──────────────────────────────┐
                │   Home route  "/"             │   │  Project detail  "/projects  │
                │  `src/routes/index.tsx`       │   │      /$projectId"            │
                │  Nav, Hero, About, Projects,  │   │ `src/routes/projects/        │
                │  Contact — all inline in      │   │  $projectId.tsx`             │
                │  one file (431 lines)         │   │ per-project hardcoded         │
                │                                │   │ branches (647 lines),         │
                │                                │   │ 45 `<Picture>` call sites     │
                └───────────────┬───────────────┘   └───────────────┬───────────────┘
                                │                                    │
                                └───────────────┬────────────────────┘
                                                ▼
                              ┌───────────────────────────────────┐
                              │   Shared building blocks           │
                              │  `src/components/Reveal.tsx`       │
                              │  `src/components/Picture.tsx`      │
                              │  `src/data/projects.ts` (Project[])│
                              │  `src/data/media.generated.ts`     │
                              └───────────────┬────────────────────┘
                                                ▼
                              ┌───────────────────────────────────┐
                              │  Static media (public/)            │
                              │  /media (images, hero/CV video),   │
                              │  /animate (iframed Adobe Animate   │
                              │  export; process clips re-encoded) │
                              └───────────────────────────────────┘
                                                ▲
                              ┌───────────────────────────────────┐
                              │  Offline media pipeline (build-time,│
                              │  hand-run, never in check/build)    │
                              │  `scripts/media.mjs` + `media/*.mjs`│
                              │  reads `media-src/manifest.json`    │
                              │  writes public/media/**,            │
                              │  public/animate/videos/*.mp4,       │
                              │  `src/data/media.generated.ts`      │
                              └───────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Cloudflare Worker entry | Wraps the TanStack Start server-entry fetch handler; intercepts GET requests on `/media/video/*.mp4` and `/animate/videos/*.mp4` and answers them from `caches.default` with Range/206 support, otherwise delegates to Static Assets or the SSR handler | `src/server.ts` |
| Workers runtime typings | Ambient `declare module "cloudflare:workers"` typing the `env.ASSETS.fetch` binding, avoids pulling in `@cloudflare/workers-types` | `src/cloudflare-workers.d.ts` |
| Root route | HTML shell, `<head>` meta/fonts/favicon, global 404, mounts `<Outlet/>` | `src/routes/__root.tsx` |
| Router factory | Creates the TanStack Router instance, wires the generated route tree, defines the default error boundary UI | `src/router.tsx` |
| Generated route tree | Auto-generated route registration/type map; do not hand-edit | `src/routeTree.gen.ts` |
| Home page | Single-page site: `Nav`, `Hero`, `About`, `Projects` (filterable grid), `Contact` (EmailJS form) — all defined inline in one file | `src/routes/index.tsx` |
| Project detail page | Renders one project looked up by `$projectId`; large per-project conditional content blocks (`project.id === "..."`), renders project imagery through `Picture` (45 call sites) | `src/routes/projects/$projectId.tsx` |
| Project data | Canonical `Project` type + the full array of portfolio entries; `thumbnail`/`media` fields are typed `MediaId` (keys of the generated media manifest), not raw URL strings | `src/data/projects.ts` |
| Generated media manifest | Auto-generated `MediaId` union plus `images`/`videos`/`galleries` const records (AVIF/WebP srcset rungs, fallback, intrinsic width/height, poster) consumed by `Picture` and `projects.ts` | `src/data/media.generated.ts` |
| Picture | `<picture>` component: AVIF source (+ WebP for photo-preset images), a single lazy/async fallback `<img>` with intrinsic `width`/`height` from the manifest — the only first-party image renderer used by project detail content | `src/components/Picture.tsx` |
| Reveal | Scroll-triggered fade/slide-in wrapper using `IntersectionObserver`; the other shared component in `src/components/` | `src/components/Reveal.tsx` |
| Design tokens / theme | Tailwind v4 CSS-first theme, OKLCH color variables, custom component classes (`.quest-btn`, `.hud-tag`, `.ornament-card`, `.reveal`, `.chapter-title`) | `src/styles.css` |
| Asset guard | Post-build script enforcing Cloudflare's 25 MiB/asset ceiling, a 60 MiB `dist/client` total budget, a 12,000,000 B per-MP4 ceiling, forbidden source-file extensions, and video encoding rules (`yuv420p`, faststart) against `dist/client` — the size/budget/per-MP4/extension rules are never waivable | `scripts/check-assets.mjs` |
| Asset exceptions | Waiver list for legacy oversized/non-faststart media — currently **empty**; the phase-2 media re-encode closed every prior waiver | `scripts/check-assets.exceptions.json` |
| Asset inventory | Manual/CI audit script: classifies every file under `public/` (excluding `public/animate/`) as referenced, name-only-referenced, or unreferenced, and reverse-scans `src/` for dangling media URLs | `scripts/inventory-assets.mjs` |
| Media pipeline entry | Hand-run offline pipeline (`npm run media`, never wired into `check`/`build`/`deploy`); reads `media-src/manifest.json`, drives the sharp/ffmpeg/gs encoders, stages outputs then atomically moves them into `public/`, maintains `media-src/.cache.json`, and emits `src/data/media.generated.ts` | `scripts/media.mjs` |
| Media pipeline shared helpers | Subprocess runner (argument arrays, never a shell), hashing, kebab-case id derivation, path-traversal guard for manifest paths, MP4 top-level-box scan (faststart check), and video/image SSIM | `scripts/media/util.mjs` |
| Media pipeline — images | sharp presets (`photo`, `graphic`): AVIF/WebP/JPEG/PNG ladder at 640/1200/2400px, metadata always stripped, deterministic output | `scripts/media/images.mjs` |
| Media pipeline — video | ffmpeg encoders per class (`hero`: silent SDR loop + WebP poster; `cv`: original resolution + AAC; `process`: SkøllRub Animate clips re-encoded to 1280×720/25fps/AAC), single-pass CRF, bitexact flags for reproducibility | `scripts/media/video.mjs` |
| Media pipeline — PDF | Ghostscript page rasterizer (`-dSAFER`, one page per invocation) turning PDF masters into PNGs that then go through the image preset pipeline | `scripts/media/pdf.mjs` |
| Media verification | Read-only, hand-run (`npm run verify-media`) checks against the outputs described by `src/data/media.generated.ts`: file existence, faststart, `yuv420p`, per-file size ceilings, the hero's exact SDR signature, image chroma/ICC/dimension rules, gallery membership, and "no PDF ever published under `public/`" | `scripts/verify-media.mjs` |

## Pattern Overview

**Overall:** Single-page marketing site built on TanStack Start/Router, statically rendered with no server-side data loading, fronted by a thin Cloudflare Worker that adds Range-request support for first-party video. Everything under the SSR path is a client-rendered React tree hydrated from SSR HTML; media asset production is a separate, offline, hand-run build step.

**Key Characteristics:**
- No client-side data-fetching layer: `@tanstack/react-query` is **not** a dependency in `package.json` — there was never any active usage in `src/`.
- No global state management (no Context providers, no store). All state is local `useState`/`useRef` inside route components (category filter, contact form status, nav open/close, `Reveal`'s visibility flag).
- Heavy use of inline component definitions co-located inside route files rather than extracted into `src/components/` — `Nav`, `Hero`, `About`, `ProjectCard`, `Projects`, `Contact` are all defined directly in `src/routes/index.tsx`.
- `src/components/` now contains two files: `Reveal.tsx` (scroll animation) and `Picture.tsx` (manifest-driven responsive image renderer). The previously-scaffolded shadcn/Radix `src/components/ui/` kit, `src/lib/`, `src/hooks/`, and `src/assets/` directories remain absent — confirmed via `find src -type f`.
- All page markup uses hand-rolled Tailwind utility classes plus custom CSS classes defined in `src/styles.css` (`quest-btn`, `hud-tag`, `ornament-card`, `chapter-title`, `reveal`, `corner`, `portrait-wrapper`, `grain`). There is no component-variant system (no `cva`/shadcn primitives left in the tree).
- Per-project rich content on the detail page is implemented as literal `project.id === "..."` conditional branches inside `src/routes/projects/$projectId.tsx` (four branches: `business-card-mockup`, `clip`, `sae-2`, `sae-1`) rather than as structured data — this couples page logic to specific project IDs and makes the route file the largest in the codebase (647 lines).
- The `sae-2` branch embeds a third-party interactive export (Adobe Animate, `public/animate/1_MOHAMED.html`) via `<iframe>`, which itself chains to five further HTML/JS scenes (`1_LYNA`, `2_IMAD`, `2_CLEMENT`, `2_SOPHIA`, `3_ALBERTIN`) navigated through `window.open` inside that compiled export — this sub-tree is opaque, vendored, non-source-controlled-in-spirit content, not authored React code. Its `videos/*.mp4` ("process" class clips), however, **are** now managed content: they are re-encoded to 1280×720/25fps/AAC by the media pipeline (`scripts/media/video.mjs`) and served through the Worker's `run_worker_first` interception like any other first-party video.
- Media production is decoupled from the app build entirely: `npm run media` (offline, hand-run, needs gitignored `media-src/` masters plus `sharp`/`ffmpeg`/`ffprobe`/`gs` on the machine) is the only writer of `public/media/**`, `public/animate/videos/*.mp4`, and the generated `src/data/media.generated.ts`. `vite build`, `npm run check`, and `npm run deploy` never invoke it — they only consume its already-committed output.
- The Cloudflare Worker entry point (`src/server.ts`) is no longer a passthrough to the TanStack Start default server-entry: it now contains routing/caching logic of its own (regex match on video paths, Cache API read-through, a hand-rolled Range-slicing fallback) before falling through to `handler.fetch(request)` for every other path.

## Layers

**Edge/Worker layer:**
- Purpose: Serve first-party video with `Range`/206 support (required by Safari/iOS, which will not play a `<video>` that only gets 200 responses) without adding that responsibility to the SSR handler or to every video-serving route.
- Location: `src/server.ts` (the `wrangler.jsonc` `main` entry), `src/cloudflare-workers.d.ts` (ambient typing for the lazily-imported `cloudflare:workers` module).
- Contains: `serveVideo()` (Cache API read-through keyed by asset ETag, query-string stripped), `sliceRange()` (manual single-range fallback when the Cache API is unavailable or misses), `forBrowser()` (revalidating `Cache-Control` for the browser response), the `VIDEO`/`WORKER_FIRST` path regexes.
- Depends on: `@tanstack/react-start/server-entry`'s exported `handler`/`createServerEntry`, the Workers `ASSETS` binding (`wrangler.jsonc` `assets.binding`), the `caches.default` Cache API.
- Used by: `wrangler.jsonc` (`main: "src/server.ts"`) as the sole production entry point. Not used by `vite dev` — Vite's own static middleware answers `public/` requests directly in dev, so the `cloudflare:workers` import is never reached there (loaded lazily via `await import(...)` specifically so `vite dev` does not crash on a module workerd-only).

**Router/shell layer:**
- Purpose: Registers routes, renders the HTML document shell, provides global error/404 handling.
- Location: `src/router.tsx`, `src/routes/__root.tsx`, `src/routeTree.gen.ts`
- Contains: Router configuration (`scrollRestoration: true`, `defaultPreloadStaleTime: 0`), `<html>/<head>/<body>` shell, meta tags/fonts (`Cormorant Garamond`, `DM Sans` via Google Fonts `<link>`), favicon handling, default error and not-found components.
- Depends on: `@tanstack/react-router`, `@tanstack/react-start` (via the Vite plugin bundled in `@lovable.dev/vite-tanstack-config`), the generated route tree.
- Used by: `handler.fetch(request)` inside `src/server.ts` for any path that is not a video path, and the dev server (`vite dev`).

**Page/route layer:**
- Purpose: Page-level composition — hero, sections, forms, project listing/detail.
- Location: `src/routes/index.tsx`, `src/routes/projects/$projectId.tsx`
- Contains: Page-specific sub-components (defined inline), section markup, local UI state (filters, form state, animation refs).
- Depends on: `src/data/projects.ts`, `src/components/Reveal.tsx`, `src/components/Picture.tsx`, static paths under `/media`, `/animate`.
- Used by: `src/routeTree.gen.ts` route registration only.
- Invariant for this milestone: no file under `src/routes/` is created, deleted, or renamed, so `routeTree.gen.ts` stays stable — new route-level work must reuse the two existing route files.

**Component layer:**
- Purpose: Reusable, presentational, cross-page building blocks.
- Location: `src/components/Reveal.tsx`, `src/components/Picture.tsx`
- Contains: `Reveal` (scroll-triggered entrance-animation wrapper), `Picture` (manifest-driven `<picture>`: AVIF source, WebP source for `photo`-preset images only, lazy/async fallback `<img>` with intrinsic `width`/`height`; a hook-free component, so its SSR output is final and stable across hydration).
- Depends on: React (`Reveal`: `useEffect`, `useRef`, `useState`; `Picture`: none — no hooks), browser `IntersectionObserver` (`Reveal` only), `src/data/media.generated.ts` (`Picture` only, for the `images` record and `ImageEntry`/`MediaId` types).
- Used by: Both route components — `Reveal` wraps nearly every section/block for staggered fade-in; `Picture` renders all first-party project imagery on the detail page (45 call sites) and is available to the home page for the same purpose.

**Data layer:**
- Purpose: Single source of truth for portfolio project content, plus the generated media manifest that both `projects.ts` and `Picture` depend on.
- Location: `src/data/projects.ts`, `src/data/media.generated.ts`
- Contains: `Project` TypeScript type and a hardcoded `projects: Project[]` array (image/video paths reference `public/assets` and `public/videos` as absolute `/...` URLs, or external YouTube embed URLs for two entries — **note:** `thumbnail: MediaId` and `media?: readonly MediaId[]` are now typed against the generated manifest's key union rather than being raw path strings; project galleries can be pulled directly from the manifest, e.g. `media: galleries["festival-identite"]`). `media.generated.ts` exports `MediaId` (a `keyof typeof images` union), `images`/`videos` const records (AVIF/WebP srcset rungs, fallback URL, intrinsic dimensions, optional poster/alt), and `galleries` (named ordered lists of `MediaId`).
- Depends on: `src/data/projects.ts` depends on `src/data/media.generated.ts` (imports `galleries`, `MediaId`) — otherwise no I/O. `media.generated.ts` has no imports; it is pure generated data, written only by `scripts/media.mjs`.
- Used by: `src/routes/index.tsx` (grid + category filtering), `src/routes/projects/$projectId.tsx` (detail lookup by `id`, per-`id` branch dispatch, `Picture` rendering), `src/components/Picture.tsx` (reads `images`/`ImageEntry`/`MediaId` from `media.generated.ts`).

**Styling/theme layer:**
- Purpose: Design tokens (OKLCH color variables), Tailwind v4 theme wiring, and custom component classes for the site's visual language.
- Location: `src/styles.css` (236 lines; imported via `src/routes/__root.tsx` as `appCss`, injected as a `<link rel="stylesheet">` using Vite's `?url` import).
- Contains: `@theme inline` token mappings, `:root` CSS custom properties (`--cream`, `--sakura`, `--rose-dust`, `--mint-sage`, `--plum`, `--gold`, plus shadow tokens), custom classes (`.quest-btn`, `.hud-tag`, `.ornament-card`, `.reveal`, `.chapter-title`, `.corner`, `.grain`, `.portrait-wrapper`).
- Depends on: Tailwind CSS v4 (`@tailwindcss/vite`), `@source "../src"` directive (no separate `tailwind.config.*`).
- Used by: All route/component markup via Tailwind utility classes and the custom class names above.

**Build/tooling layer:**
- Purpose: Quality gates for the "lite" milestone — enforce the Cloudflare 25 MiB asset ceiling and the 60 MiB total-site budget, catch dead/unreferenced media, and keep video encoding web-friendly.
- Location: `scripts/check-assets.mjs` (post-build guard, wired into `npm run check`), `scripts/check-assets.exceptions.json` (waiver list, currently empty), `scripts/inventory-assets.mjs` (manual audit, not wired into any npm script).
- Depends on: `dist/client` build output (`check-assets.mjs` errors out if missing), optional `ffprobe` on `PATH` for the `pix_fmt` rule.
- Used by: `npm run check` (`tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run`) and `npm run deploy`.

**Media pipeline layer:**
- Purpose: Produce every first-party image and video asset under `public/media/` and `public/animate/videos/`, plus the typed `src/data/media.generated.ts` module the app code reads — entirely offline, outside the Vite build graph.
- Location: `scripts/media.mjs` (orchestrator: manifest validation, caching, staged writes, codegen), `scripts/media/util.mjs` (shared helpers), `scripts/media/images.mjs` (sharp encoders), `scripts/media/video.mjs` (ffmpeg encoders), `scripts/media/pdf.mjs` (Ghostscript rasterizer), `scripts/verify-media.mjs` (read-only post-hoc verifier).
- Depends on: Gitignored `media-src/manifest.json` (hand-written) and `media-src/**` source masters; native binaries `sharp` (npm devDependency), `ffmpeg`/`ffprobe`, and `gs` (only if the manifest has PDF entries) on `PATH`.
- Used by: Nobody automatically — `npm run media` and `npm run verify-media` are hand-run only, never invoked from `check`, `build`, or `deploy`. Their committed output (`public/media/**`, `public/animate/videos/*.mp4`, `src/data/media.generated.ts`) is what the app and the asset guard actually consume.
- Determinism: Same source masters + same `manifest.json` = byte-identical output, enforced via a cache key hashing the source SHA-256, per-entry options, a `PIPELINE_VERSION` constant, and an encoder fingerprint (exported `*_SIGNATURE` constants plus `ffmpeg`/`x264`/`sharp`(libvips)/`gs` versions) — any argument or tool-version change forces a re-encode of the affected entries only.

**Deployment layer:**
- Purpose: Serve the SSR build on Cloudflare Workers — this is now the **only** deployment target.
- Location: `wrangler.jsonc` (`compatibility_date: 2025-09-24`, `nodejs_compat` flag, `main: "src/server.ts"`, `assets.binding: "ASSETS"`, `assets.run_worker_first: ["/media/video/*", "/animate/videos/*"]`, `workers_dev: false`).
- Depends on: Built output produced by `vite build` (delegated to `@lovable.dev/vite-tanstack-config`, which bundles the `@cloudflare/vite-plugin`), and `src/server.ts` itself (no longer a bare pointer at the framework's default server-entry — see Edge/Worker layer above).
- Note: The standalone Node `server.js` HTTP server and `vercel.json` described in older documentation **no longer exist in this repository** (verified via `git ls-files` and direct `ls`) — the dual-deployment-target architecture has been retired in favor of Cloudflare-only. `workers_dev: false` means the site is reachable only on its custom domain, never a `*.workers.dev` hostname (that hostname has no zone cache, so video `Range` requests would only ever get the Worker's hand-made `sliceRange()` fallback, never a true edge cache hit).

## Data Flow

### Primary Request Path (Home page)

1. Browser requests `/` → the Cloudflare Worker (`src/server.ts`) matches neither `VIDEO` nor `WORKER_FIRST` for that path, so it calls `handler.fetch(request)`, invoking the TanStack Start server entry, which renders `src/routes/__root.tsx` (`RootShell` + `RootComponent`) around `src/routes/index.tsx`'s `Index` component (`src/routes/index.tsx:421-431`).
2. `Index` renders `Nav`, `Hero`, `About`, `Projects`, `Contact` in sequence, each wrapping its content in `Reveal` (`src/components/Reveal.tsx`) for staggered entrance animation.
3. `Projects` reads the static `projects` array (`src/data/projects.ts:18`), filters by the locally-held `filter` category state, and renders one `ProjectCard` per entry, each of which is a `<Link to="/projects/$projectId">`.
4. Client hydrates; `Hero`'s hero `<video>` is driven by JS rather than a bare `autoplay` attribute, so it respects `prefers-reduced-motion` and pauses on `visibilitychange`; the poster is preloaded via a `<link rel="preload">` in `__root.tsx`.

### Video Asset Request Path (Worker, edge)

1. Browser requests a first-party video, e.g. `GET /media/video/hero.mp4` with a `Range` header (Safari/iOS always sends one for `<video>`). `wrangler.jsonc`'s `assets.run_worker_first: ["/media/video/*", "/animate/videos/*"]` routes this to the Worker instead of straight to Workers Static Assets (which ignores `Range` and always answers 200 + full body).
2. `src/server.ts`'s top-level `fetch` matches the `VIDEO` regex (`^/(?:media/video|animate/videos)/[^/]+\.mp4$`) and calls `serveVideo(request)`.
3. `serveVideo` issues a `HEAD` against the `ASSETS` binding to read the asset's `ETag`, builds a cache key URL of `<asset-url>?etag=<etag>` (query string stripped from the real request URL first, so `?v=1` cannot create duplicate cache entries), and looks it up in `caches.default` using a request that carries the original `Range` header.
4. Cache hit: the cached `Response` (stored with `Cache-Control: public, max-age=86400`) is re-sliced by `cache.match()`'s own Range handling into a 206 if requested, then `forBrowser()` overwrites `Cache-Control` to `public, max-age=0, must-revalidate` before returning — so the edge keeps the bytes for a day, but every browser revalidates (a cheap 304) rather than caching a stale re-encode for 24h.
5. Cache miss: `serveVideo` fetches the full asset from `ASSETS`, sets `Accept-Ranges: bytes` and the 1-day `Cache-Control`, stores it in `caches.default` under the ETag-qualified key (a single `put()`, not a `clone()`, to avoid buffering the whole file in the isolate), then re-reads it via `cache.match()` to get a de-facto 206 answer for the original request.
6. If the Cache API throws or does not persist anything (e.g., a hostname without a zone cache — mitigated in production by `workers_dev: false`), `sliceRange()` answers a single `bytes=a-b`/`bytes=a-`/`bytes=-n` range by hand from a buffered copy of the full response body — a fallback deliberately bounded by the 12,000,000 B per-MP4 ceiling enforced elsewhere (`scripts/check-assets.mjs`, `scripts/verify-media.mjs`).
7. Any non-`GET` method on a video path, or any request under `WORKER_FIRST` that is not an `.mp4` (e.g. `hero-poster.webp` sitting next to `hero.mp4`), is forwarded straight to `ASSETS.fetch(request)` without going through the cache logic at all.

### Project Detail Flow

1. Router matches `/projects/$projectId` → `ProjectPage` (`src/routes/projects/$projectId.tsx:9`) reads `projectId` via `Route.useParams()` and looks up the project with `projects.find(...)` (no `loader`, purely client-side/render-time lookup against in-memory data).
2. If not found, an inline "Projet introuvable" fallback UI renders with a button back to `/` (`src/routes/projects/$projectId.tsx:14-28`) — no router-level `notFound()` is thrown.
3. If found, the page renders the project's video (YouTube `<iframe>` or local `<video>`, the latter served through the Worker's video path per above), then optionally one of four hardcoded `project.id === "..."` content branches (`business-card-mockup`, `clip`, `sae-2`, `sae-1`), then the generic description/tools/`media[]` gallery block that applies to every project — project imagery throughout is rendered via `<Picture id={...} .../>` (`src/components/Picture.tsx`), not raw `<img>` tags.
4. The `sae-2` branch further embeds `public/animate/1_MOHAMED.html` in an `<iframe>` — an out-of-band, vendored Adobe Animate export chain (see Anti-Patterns) — plus a YouTube-embedded ad video and static comms screenshots; its own `videos/*.mp4` clips are re-encoded by the media pipeline and served through the same Worker video path as first-party media.

**State Management:**
- All state is component-local `useState`/`useRef` (category filter, contact form `sent`/`loading`/`error`, `Nav`'s mobile-menu `open`, `Reveal`'s `seen` visibility flag). No Context, no global store, no server cache — `@tanstack/react-query` is not present in `package.json` at all in the current stack. The one piece of state outside the React tree is the edge `caches.default` entry written by `src/server.ts` (see Architectural Constraints).

## Key Abstractions

**Project:**
- Purpose: Represents one portfolio piece (id, title, category, thumbnail, optional `media[]`/`video`/`url`, descriptions, tools, role, `inProgress` flag).
- Examples: type at `src/data/projects.ts:3-16`; data array at `src/data/projects.ts:18-134`.
- Pattern: Flat array of plain objects, looked up by `id`; `thumbnail: MediaId` and `media?: readonly MediaId[]` reference keys of the generated media manifest (`src/data/media.generated.ts`) rather than raw path strings — a typo in a media id is now a TypeScript compile error instead of a silent broken `<img src>`. Two entries (`stop-motion`, `clip`) still use external YouTube embed URLs via the `video` field, unaffected by the manifest.

**Generated media manifest (`MediaId`):**
- Purpose: The single, typed source of truth for every first-party media asset's on-disk locations, responsive srcset rungs, intrinsic dimensions, and (for images) alt text — bridges the offline media pipeline and the React app.
- Examples: `src/data/media.generated.ts` (generated); consumed by `src/components/Picture.tsx` (`images`, `ImageEntry`, `MediaId`) and `src/data/projects.ts` (`galleries`, `MediaId`).
- Pattern: `export const images = { "<project>/<name>": { preset, width, height, avif: [[w,url],...], webp?, fallback, alt? }, ... } as const satisfies Record<string, ImageEntry>` and an analogous `videos` record; `MediaId = keyof typeof images`. Regenerated wholesale by `scripts/media.mjs` on every successful `npm run media` run — never hand-edited (marked `/* eslint-disable */` with a "DO NOT EDIT" header comment).

**Picture:**
- Purpose: Render one manifest entry as a responsive `<picture>` — AVIF always, WebP additionally for `photo`-preset (real photographs; `graphic`-preset images skip WebP by design, see `scripts/verify-media.mjs`), one fallback `<img>` with real `width`/`height` to avoid layout shift.
- Examples: `src/components/Picture.tsx`; used 45 times in `src/routes/projects/$projectId.tsx` for project imagery.
- Pattern: No hooks — a pure function of its `id`/`alt`/`sizes`/`className` props, so its SSR output is final at hydration; always `loading="lazy" decoding="async"` (the one deliberate exception, the hero poster, is loaded eagerly elsewhere and does not go through this component).

**Reveal:**
- Purpose: Declarative scroll-triggered entrance animation.
- Examples: `src/components/Reveal.tsx`; used pervasively by wrapping section content, e.g. `src/routes/index.tsx:105,110,115,132,147,167,266,277,297,350,366`, `src/routes/projects/$projectId.tsx:35,44,55,82,174,294,513,583,629`.
- Pattern: `IntersectionObserver`-backed component that toggles a CSS class (`in`) once visible (`threshold: 0.12`, one-shot via `io.unobserve`); consumers pass a numeric `delay` prop for staggered effect via inline `transitionDelay` style.

**CSS-class design system ("quest"/ornamental theme):**
- Purpose: Consistent themed styling (buttons, tags, cards, corners) without a component abstraction layer.
- Examples: `.quest-btn`, `.hud-tag`, `.ornament-card`, `.chapter-title`, `.corner`, `.grain` in `src/styles.css`, used directly as `className` strings throughout both route files.
- Pattern: CSS-class-driven design system rather than React component variants — there is no `class-variance-authority` usage anywhere in the current `src/` tree (the dependency and the `ui/button.tsx`-style pattern have both been removed).

## Entry Points

**Router factory:**
- Location: `src/router.tsx`
- Triggers: Invoked by the TanStack Start Vite plugin (configured via `@lovable.dev/vite-tanstack-config` in `vite.config.ts`) to construct the router for both SSR and client hydration.
- Responsibilities: Registers `routeTree`, sets `scrollRestoration: true`, `defaultPreloadStaleTime: 0`, and a `defaultErrorComponent`.

**Root route:**
- Location: `src/routes/__root.tsx`
- Triggers: Rendered once per request as the outermost route.
- Responsibilities: `<head>` metadata (SEO/OG/Twitter tags, Google Fonts preconnect + stylesheet, favicon links, a preload `<link>` for the hero poster), global stylesheet injection (`appCss`), a runtime cache-busted favicon re-assignment (`RootComponent`'s `useEffect`), 404 fallback, mounts `<Scripts/>` for hydration.

**Cloudflare Workers entry:**
- Location: `src/server.ts` (`wrangler.jsonc` → `main: "src/server.ts"`).
- Triggers: `npm run deploy` (`wrangler deploy`) or CI/manual `wrangler deploy`; every request to the deployed Worker passes through this file first.
- Responsibilities: For `GET` requests on `/media/video/*.mp4` or `/animate/videos/*.mp4`, answer from the edge Cache API with Range/206 support (see Video Asset Request Path above); for any other request under those two prefixes (non-GET, or a non-`.mp4` file such as the hero poster), forward straight to the `ASSETS` binding; for every other path, delegate to `handler.fetch(request)` — the TanStack Start SSR fetch handler imported from `@tanstack/react-start/server-entry`. The `nodejs_compat` compatibility flag remains enabled for any Node built-ins the TanStack Start runtime needs.

## Architectural Constraints

- **Threading:** Standard single-threaded V8 isolate execution model on Cloudflare Workers for the production entry point; standard single-threaded Node/V8 event loop for `vite dev`. No worker threads used anywhere in `src/`.
- **Global state:** No module-level singletons in `src/routes`/`src/components`/`src/data`. `emailjs.init(...)` is called inside a `useEffect` in `Contact` (`src/routes/index.tsx:313-315`), re-initializing the EmailJS client on every mount of that component rather than once globally. `src/server.ts` writes to the shared, edge-scoped `caches.default` Cache API on every miss — this is process-external state (survives across requests/isolates at a given edge location, up to a day per `EDGE_CACHE`'s `max-age=86400`) rather than in-process module state, and is invalidated implicitly whenever the underlying asset's `ETag` changes (a re-encode under the same filename gets a new cache key on the next deploy, never serving stale bytes for up to a day).
- **Circular imports:** None detected between `src/routes`, `src/components`, `src/data`, `src/server.ts` — the import graph is a strict DAG (`routes/*` → `components/Reveal` + `components/Picture` + `data/projects`; `components/Picture` → `data/media.generated`; `data/projects` → `data/media.generated`; nothing imports back from `data/` or `components/`; `server.ts` imports only the framework's `server-entry` module, not app route code directly).
- **Static-only data:** There is no server-side `loader` defined on either route — both routes read the in-memory `projects` array directly at render time, so there is no network/database dependency at runtime for content.
- **Single deployment target:** Only Cloudflare Workers is supported (`wrangler.jsonc`); the Node `server.js` / Vercel dual-target setup referenced in older docs has been removed from the repo entirely.
- **Route-tree stability invariant:** For this milestone, no file is added, removed, or renamed under `src/routes/` — `src/routeTree.gen.ts` (generated, do-not-edit) must not need regeneration mid-milestone.
- **Hardcoded credentials in client code:** EmailJS public key, service ID, and template ID are string literals in `src/routes/index.tsx:314,332` (`vH9gSi4D3ru6ad63Z`, `service_mkurl73`, `template_b9lcxkl`). These are EmailJS "public" keys by design but remain visible in bundled client JS. No `.env`/`VITE_*` variables are used anywhere in `src/`.
- **Vendored third-party export:** `public/animate/` is a compiled Adobe Animate (CreateJS) export embedded via `<iframe src="/animate/1_MOHAMED.html">` in the `sae-2` project branch. Its HTML/JS/images/components remain a self-contained, opaque scene chain (`1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN`) navigated via `window.open`, excluded from `scripts/inventory-assets.mjs`'s reference-scan — but its eight `videos/*.mp4` process clips are now first-class media-pipeline outputs (re-encoded 1280×720/25fps/AAC, cache-served through `src/server.ts` exactly like `media/video/*.mp4`), so only the HTML/JS/image sub-tree remains genuinely out-of-band.
- **Dev/prod parity gap on the Worker:** `src/server.ts`'s video-caching logic only runs against a deployed Worker (`wrangler deploy`) — `vite dev` never imports `cloudflare:workers` (the import is lazy specifically to avoid crashing the Node dev server) and instead serves `public/` files directly through Vite's own static middleware, which does support `Range`. This means the Cache-API read-through path, the ETag-keyed cache invalidation, and the `sliceRange()` fallback are only exercised in a real Cloudflare deploy, not in local dev — a change to `serveVideo()` can only be fully verified post-deploy (`wrangler deploy --dry-run` in `npm run check` validates config/bundling, not the Cache API runtime behavior).
- **Fallback buffers the whole file:** `sliceRange()` reads the entire response body into memory (`await full.arrayBuffer()`) before slicing a Range out of it. This is bounded and intentional — every video the fallback can be asked to serve is already capped at 12,000,000 B by `scripts/check-assets.mjs`/`scripts/verify-media.mjs` — but it means the fallback path (Cache API unavailable/miss-then-throw) is not a true streaming Range implementation.

## Anti-Patterns

### Per-project hardcoded content branches instead of data-driven content

**What happens:** `src/routes/projects/$projectId.tsx` contains four `{project.id === "some-id" && (...)}` JSX blocks (lines 81, 173, 293, 512) with fully bespoke markup, copy, and image lists per project, rather than expressing that content as structured data on the `Project` type.
**Why it's wrong:** Adding or editing a project's detail-page content requires editing this 647-line route file directly and searching for the matching `id` string; the `Project` type in `src/data/projects.ts` does not model this richer content at all, so the two files can silently drift (e.g., a new project added to `projects.ts` gets none of this treatment unless a matching branch is hand-written).
**Do this instead:** When extending project detail content, keep new structured fields on the `Project` type in `src/data/projects.ts` and render them generically in `$projectId.tsx`, rather than adding a fifth `project.id === "..."` branch — but do not restructure the existing four branches during this milestone unless a phase explicitly scopes that refactor (it is a known, accepted debt, see CONCERNS.md).

### Third-party vendored export embedded via iframe, invisible to the build's asset checks

**What happens:** `public/animate/` (~20 MiB, a compiled Adobe Animate/CreateJS export) is embedded via `<iframe src="/animate/1_MOHAMED.html">` in `src/routes/projects/$projectId.tsx:443`. Its HTML/JS/image sub-tree is explicitly excluded from `scripts/inventory-assets.mjs`'s reference-scanning (per that script's own header comment).
**Why it's wrong:** The HTML/JS/image portion is not guarded by the project's own asset-size/encoding rules the same way first-party `public/media` files are, and remains heavy relative to total site weight — a core concern for this "lite" milestone's page-weight goal. (Its `videos/*.mp4` no longer share this problem: they are produced and size-checked by the same media pipeline and `check-assets.mjs` rules as everything else.)
**Do this instead:** Treat `public/animate/`'s HTML/JS/images/components as a distinct, out-of-band asset category with its own review pass (per the milestone scope note) rather than assuming the existing `check-assets`/`inventory-assets` scripts cover it — do not modify its internals; only add tooling or exceptions around it if a phase explicitly targets it.

### Hardcoded third-party credentials in client bundle

**What happens:** EmailJS's public key, service ID, and template ID are inlined as string literals directly in `src/routes/index.tsx` (`emailjs.init("vH9gSi4D3ru6ad63Z")` at line 314; `emailjs.send("service_mkurl73", "template_b9lcxkl", ...)` at line 332) instead of being read from environment/config.
**Why it's wrong:** While EmailJS's public key is designed to be exposed client-side, hardcoding all three identifiers directly in a component makes them harder to rotate/audit and couples the contact feature to one specific EmailJS account with no environment-based override.
**Do this instead:** If contact-form work is scoped in a future phase, consider extracting these three literals to named constants at the top of the file (matching the existing `SCREAMING_SNAKE_CASE` module-constant convention, e.g. `HERO_VIDEO`) even without introducing `.env` — this documents intent without requiring new tooling.

## Error Handling

**Strategy:** Two-tier — router-level global fallbacks for unmatched routes/uncaught render errors, plus local component-level try/catch for the one network operation in the app (the contact form). The Worker entry (`src/server.ts`) adds a third, narrower tier: a `try/catch` around the Cache API read-through in `serveVideo()` that falls through to the hand-made `sliceRange()` response rather than surfacing a 500.

**Patterns:**
- `DefaultErrorComponent` (`src/router.tsx:4-55`) renders a generic "Something went wrong" screen, shows `error.message` only when `import.meta.env.DEV` is true, and offers "Try again" (`router.invalidate()` + `reset()`) and "Go home" actions.
- `NotFoundComponent` (`src/routes/__root.tsx:6-26`) handles unmatched routes with a styled 404 and a link home.
- `ProjectPage` handles a missing/unknown `projectId` locally with an inline "Projet introuvable" state (`src/routes/projects/$projectId.tsx:14-28`) rather than throwing a router-level not-found.
- `Contact`'s EmailJS submission wraps `emailjs.send(...)` in try/catch/finally, sets a local French-language `error` string on failure, and logs to `console.error` (`src/routes/index.tsx:331-341`).
- Fire-and-forget promises use `.catch()` inline rather than a full try/catch when the failure is expected/ignorable — the hero `<video>` autoplay-block rejection is swallowed with a comment explaining why (`src/routes/index.tsx:70-75`).
- `serveVideo()`'s `try { ... cache API ... } catch { /* fall through */ }` (`src/server.ts:71-89`) treats any Cache API failure (unavailable, throws, or a silent no-op `put`) as expected and non-fatal, always falling back to `sliceRange(request, await origin())` rather than propagating the error to the client.

## Cross-Cutting Concerns

**Logging:** `console.error(err)` is the only logging call in `src/routes`/`src/components`, used solely in the `Contact` form's catch block (`src/routes/index.tsx:338`). `src/server.ts` has no logging at all (Workers `console.log` output only reaches `wrangler tail`/the dashboard, not used here). No `console.log` debugging statements exist in committed source.

**Validation:** No schema validation library (`zod` and `react-hook-form` are not present in the current `package.json` dependency list — the contact form uses plain uncontrolled `<input required>`/`<textarea required>` HTML5 validation and manual `FormData` extraction, `src/routes/index.tsx:317-329`). `scripts/media.mjs`'s manifest loader (`loadManifest()`) performs its own hand-written structural validation of `media-src/manifest.json` (ids, output-path canonicalization/collision checks, preset/class enums, numeric ranges) and exits with code 2 on any violation — this is the only schema-like validation in the codebase, and it runs offline, never in the request path.

**Caching:** `src/server.ts` is the only place in the app that sets HTTP caching headers deliberately: a 1-day edge `Cache-Control` (`public, max-age=86400`) for what `caches.default` stores, rewritten to a revalidating `public, max-age=0, must-revalidate` for what the browser actually receives, keyed to the asset's `ETag` so a re-encoded file under the same name gets a fresh cache entry rather than serving stale bytes. No other caching layer (HTTP cache headers on non-video assets, service worker, `Cache-Control` on the SSR HTML response) is configured anywhere else in the codebase.

**Authentication:** Not applicable — the site has no auth, no user accounts, no protected routes.

---

*Architecture analysis: 2026-09-28*

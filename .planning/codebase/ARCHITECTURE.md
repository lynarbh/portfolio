---
last_mapped_commit: 163c48737bad29b01210096abf6fb8eeec45c5a0
---
<!-- refreshed: 2026-09-27 -->
# Architecture

**Analysis Date:** 2026-09-27

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                   Root Shell / Document                     │
│         `src/routes/__root.tsx`, `src/router.tsx`            │
│   <head> meta/fonts, global stylesheet, 404 + error boundary │
└──────────────────────────────┬───────────────────────────────┘
                                │ <Outlet/>
                 ┌──────────────┴───────────────┐
                 ▼                              ▼
┌──────────────────────────────┐   ┌──────────────────────────────┐
│   Home route  "/"             │   │  Project detail  "/projects  │
│  `src/routes/index.tsx`       │   │      /$projectId"            │
│  Nav, Hero, About, Projects,  │   │ `src/routes/projects/        │
│  Contact — all inline in      │   │  $projectId.tsx`             │
│  one file (431 lines)         │   │ per-project hardcoded         │
│                                │   │ branches (647 lines)          │
└───────────────┬───────────────┘   └───────────────┬───────────────┘
                │                                    │
                └───────────────┬────────────────────┘
                                ▼
              ┌───────────────────────────────────┐
              │   Shared building blocks           │
              │  `src/components/Reveal.tsx`       │
              │  `src/data/projects.ts` (Project[])│
              └───────────────┬────────────────────┘
                                ▼
              ┌───────────────────────────────────┐
              │  Static media (public/)            │
              │  /assets (images), /videos (mp4),  │
              │  /media (portrait), /animate        │
              │  (iframed Adobe Animate export)     │
              └───────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Root route | HTML shell, `<head>` meta/fonts/favicon, global 404, mounts `<Outlet/>` | `src/routes/__root.tsx` |
| Router factory | Creates the TanStack Router instance, wires the generated route tree, defines the default error boundary UI | `src/router.tsx` |
| Generated route tree | Auto-generated route registration/type map; do not hand-edit | `src/routeTree.gen.ts` |
| Home page | Single-page site: `Nav`, `Hero`, `About`, `Projects` (filterable grid), `Contact` (EmailJS form) — all defined inline in one file | `src/routes/index.tsx` |
| Project detail page | Renders one project looked up by `$projectId`; large per-project conditional content blocks (`project.id === "..."`) | `src/routes/projects/$projectId.tsx` |
| Project data | Canonical `Project` type + the full array of portfolio entries (single source of truth for project content) | `src/data/projects.ts` |
| Reveal | Scroll-triggered fade/slide-in wrapper using `IntersectionObserver`; the only shared component left in `src/components/` | `src/components/Reveal.tsx` |
| Design tokens / theme | Tailwind v4 CSS-first theme, OKLCH color variables, custom component classes (`.quest-btn`, `.hud-tag`, `.ornament-card`, `.reveal`, `.chapter-title`) | `src/styles.css` |
| Asset guard | Post-build script enforcing Cloudflare's 25 MiB/asset ceiling, forbidden source-file extensions, and video encoding rules (`yuv420p`, faststart) against `dist/client` | `scripts/check-assets.mjs` |
| Asset exceptions | Waiver list for legacy oversized/non-faststart media, tied to a "phase 2 re-encode" TODO | `scripts/check-assets.exceptions.json` |
| Asset inventory | Manual/CI audit script: classifies every file under `public/` (excluding `public/animate/`) as referenced, name-only-referenced, or unreferenced, and reverse-scans `src/` for dangling media URLs | `scripts/inventory-assets.mjs` |

## Pattern Overview

**Overall:** Single-page marketing site built on TanStack Start/Router, statically rendered with no server-side data loading. Everything is a client-rendered React tree hydrated from SSR HTML.

**Key Characteristics:**
- No client-side data-fetching layer: `@tanstack/react-query` is **not** a dependency in `package.json` (removed since the previous map) — there was never any active usage in `src/`.
- No global state management (no Context providers, no store). All state is local `useState`/`useRef` inside route components (category filter, contact form status, nav open/close, `Reveal`'s visibility flag).
- Heavy use of inline component definitions co-located inside route files rather than extracted into `src/components/` — `Nav`, `Hero`, `About`, `ProjectCard`, `Projects`, `Contact` are all defined directly in `src/routes/index.tsx`.
- `src/components/` now contains a single file (`Reveal.tsx`). The previously-scaffolded shadcn/Radix `src/components/ui/` kit, `src/lib/`, `src/hooks/`, and `src/assets/` directories have been removed entirely as dead code during the phase-1 cleanup — confirmed absent via `find src -type f`.
- All page markup uses hand-rolled Tailwind utility classes plus custom CSS classes defined in `src/styles.css` (`quest-btn`, `hud-tag`, `ornament-card`, `chapter-title`, `reveal`, `corner`, `portrait-wrapper`, `grain`). There is no component-variant system (no `cva`/shadcn primitives left in the tree).
- Per-project rich content on the detail page is implemented as literal `project.id === "..."` conditional branches inside `src/routes/projects/$projectId.tsx` (four branches: `business-card-mockup`, `clip`, `sae-2`, `sae-1`) rather than as structured data — this couples page logic to specific project IDs and makes the route file the largest in the codebase (647 lines).
- The `sae-2` branch embeds a third-party interactive export (Adobe Animate, `public/animate/1_MOHAMED.html`) via `<iframe>`, which itself chains to five further HTML/JS scenes (`1_LYNA`, `2_IMAD`, `2_CLEMENT`, `2_SOPHIA`, `3_ALBERTIN`) navigated through `window.open` inside that compiled export — this sub-tree is opaque, vendored, non-source-controlled-in-spirit content, not authored React code.

## Layers

**Router/shell layer:**
- Purpose: Registers routes, renders the HTML document shell, provides global error/404 handling.
- Location: `src/router.tsx`, `src/routes/__root.tsx`, `src/routeTree.gen.ts`
- Contains: Router configuration (`scrollRestoration: true`, `defaultPreloadStaleTime: 0`), `<html>/<head>/<body>` shell, meta tags/fonts (`Cormorant Garamond`, `DM Sans` via Google Fonts `<link>`), favicon handling, default error and not-found components.
- Depends on: `@tanstack/react-router`, `@tanstack/react-start` (via the Vite plugin bundled in `@lovable.dev/vite-tanstack-config`), the generated route tree.
- Used by: The Vite/TanStack Start server entry in production (Cloudflare Workers, per `wrangler.jsonc`) and the dev server (`vite dev`).

**Page/route layer:**
- Purpose: Page-level composition — hero, sections, forms, project listing/detail.
- Location: `src/routes/index.tsx`, `src/routes/projects/$projectId.tsx`
- Contains: Page-specific sub-components (defined inline), section markup, local UI state (filters, form state, cursor/scroll wiring — none of the previous cursor animation code was found in the current `index.tsx`).
- Depends on: `src/data/projects.ts`, `src/components/Reveal.tsx`, static paths under `/assets`, `/videos`, `/media`, `/animate`.
- Used by: `src/routeTree.gen.ts` route registration only.
- Invariant for this milestone: no file under `src/routes/` is created, deleted, or renamed, so `routeTree.gen.ts` stays stable — new route-level work must reuse the two existing route files.

**Component layer:**
- Purpose: Reusable, presentational, cross-page building block(s).
- Location: `src/components/Reveal.tsx` (the only file in this directory)
- Contains: `Reveal`, a scroll-triggered entrance-animation wrapper.
- Depends on: React (`useEffect`, `useRef`, `useState`), browser `IntersectionObserver`.
- Used by: Both route components, wrapping nearly every section/block for staggered fade-in.

**Data layer:**
- Purpose: Single source of truth for portfolio project content.
- Location: `src/data/projects.ts`
- Contains: `Project` TypeScript type and a hardcoded `projects: Project[]` array (9 entries across categories `Site Web`, `Branding`, `Photo`, `Illustration`, `Vidéo`, `Projet universitaire`); image/video paths reference `public/assets` and `public/videos` as absolute `/...` URLs, or external YouTube embed URLs for two video entries.
- Depends on: Nothing (pure static data, no I/O).
- Used by: `src/routes/index.tsx` (grid + category filtering), `src/routes/projects/$projectId.tsx` (detail lookup by `id`, and per-`id` branch dispatch).

**Styling/theme layer:**
- Purpose: Design tokens (OKLCH color variables), Tailwind v4 theme wiring, and custom component classes for the site's visual language.
- Location: `src/styles.css` (236 lines; imported via `src/routes/__root.tsx` as `appCss`, injected as a `<link rel="stylesheet">` using Vite's `?url` import).
- Contains: `@theme inline` token mappings, `:root` CSS custom properties (`--cream`, `--sakura`, `--rose-dust`, `--mint-sage`, `--plum`, `--gold`, plus shadow tokens), custom classes (`.quest-btn`, `.hud-tag`, `.ornament-card`, `.reveal`, `.chapter-title`, `.corner`, `.grain`, `.portrait-wrapper`).
- Depends on: Tailwind CSS v4 (`@tailwindcss/vite`), `@source "../src"` directive (no separate `tailwind.config.*`).
- Used by: All route/component markup via Tailwind utility classes and the custom class names above.

**Build/tooling layer:**
- Purpose: Quality gates for the "lite" milestone — enforce the Cloudflare 25 MiB asset ceiling, catch dead/unreferenced media, and keep video encoding web-friendly.
- Location: `scripts/check-assets.mjs` (post-build guard, wired into `npm run check`), `scripts/check-assets.exceptions.json` (waiver list), `scripts/inventory-assets.mjs` (manual audit, not wired into any npm script).
- Depends on: `dist/client` build output (`check-assets.mjs` errors out if missing), optional `ffprobe` on `PATH` for the `pix_fmt` rule.
- Used by: `npm run check` (`tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run`) and `npm run deploy`.

**Deployment layer:**
- Purpose: Serve the SSR build on Cloudflare Workers — this is now the **only** deployment target.
- Location: `wrangler.jsonc` (`compatibility_date: 2025-09-24`, `nodejs_compat` flag, `main: "@tanstack/react-start/server-entry"`).
- Depends on: Built output produced by `vite build` (delegated to `@lovable.dev/vite-tanstack-config`, which bundles the `@cloudflare/vite-plugin`).
- Note: The standalone Node `server.js` HTTP server and `vercel.json` described in older documentation **no longer exist in this repository** (verified via `git ls-files` and direct `ls`) — the dual-deployment-target architecture has been retired in favor of Cloudflare-only.

## Data Flow

### Primary Request Path (Home page)

1. Browser requests `/` → Cloudflare Worker invokes the TanStack Start server entry, which renders `src/routes/__root.tsx` (`RootShell` + `RootComponent`) around `src/routes/index.tsx`'s `Index` component (`src/routes/index.tsx:421-431`).
2. `Index` renders `Nav`, `Hero`, `About`, `Projects`, `Contact` in sequence, each wrapping its content in `Reveal` (`src/components/Reveal.tsx`) for staggered entrance animation.
3. `Projects` reads the static `projects` array (`src/data/projects.ts:16`), filters by the locally-held `filter` category state (`src/routes/index.tsx:257-261`), and renders one `ProjectCard` per entry, each of which is a `<Link to="/projects/$projectId">` (`src/routes/index.tsx:207-253`).
4. Client hydrates; `Hero`'s `useEffect` attempts `video.play()` on the muted hero `<video>` element, silently swallowing autoplay-block rejections (`src/routes/index.tsx:67-77`).

### Project Detail Flow

1. Router matches `/projects/$projectId` → `ProjectPage` (`src/routes/projects/$projectId.tsx:9`) reads `projectId` via `Route.useParams()` and looks up the project with `projects.find(...)` (no `loader`, purely client-side/render-time lookup against in-memory data).
2. If not found, an inline "Projet introuvable" fallback UI renders with a button back to `/` (`src/routes/projects/$projectId.tsx:14-28`) — no router-level `notFound()` is thrown.
3. If found, the page renders the project's video (YouTube `<iframe>` or local `<video>`), then optionally one of four hardcoded `project.id === "..."` content branches (`business-card-mockup`, `clip`, `sae-2`, `sae-1`), then the generic description/tools/`media[]` gallery block that applies to every project.
4. The `sae-2` branch further embeds `public/animate/1_MOHAMED.html` in an `<iframe>` — an out-of-band, vendored Adobe Animate export chain (see Anti-Patterns) — plus a YouTube-embedded ad video and static comms screenshots.

**State Management:**
- All state is component-local `useState`/`useRef` (category filter, contact form `sent`/`loading`/`error`, `Nav`'s mobile-menu `open`, `Reveal`'s `seen` visibility flag). No Context, no global store, no server cache — `@tanstack/react-query` is not present in `package.json` at all in the current stack.

## Key Abstractions

**Project:**
- Purpose: Represents one portfolio piece (id, title, category, thumbnail, optional `media[]`/`video`/`url`, descriptions, tools, role, `inProgress` flag).
- Examples: type at `src/data/projects.ts:1-14`; data array at `src/data/projects.ts:16-133`.
- Pattern: Flat array of plain objects, looked up by `id`; asset paths are absolute `/assets/...` or `/videos/...` URL strings (no imported/bundled modules — `src/assets/` no longer exists), or external YouTube embed URLs for two entries (`stop-motion`, `clip`).

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
- Responsibilities: `<head>` metadata (SEO/OG/Twitter tags, Google Fonts preconnect + stylesheet, favicon links), global stylesheet injection (`appCss`), a runtime cache-busted favicon re-assignment (`RootComponent`'s `useEffect`, `src/routes/__root.tsx:72-77`), 404 fallback, mounts `<Scripts/>` for hydration.

**Cloudflare Workers entry:**
- Location: `wrangler.jsonc` → `main: "@tanstack/react-start/server-entry"` (no custom `server.js` — that file does not exist in this repository).
- Triggers: `npm run deploy` (`wrangler deploy`) or CI/manual `wrangler deploy`.
- Responsibilities: Serves the built SSR/edge fetch handler directly from the Workers runtime; the `nodejs_compat` compatibility flag is enabled for any Node built-ins the TanStack Start runtime needs.

## Architectural Constraints

- **Threading:** Standard single-threaded V8 isolate execution model on Cloudflare Workers for the production entry point; standard single-threaded Node/V8 event loop for `vite dev`. No worker threads used anywhere in `src/`.
- **Global state:** No module-level singletons in `src/`. `emailjs.init(...)` is called inside a `useEffect` in `Contact` (`src/routes/index.tsx:313-315`), re-initializing the EmailJS client on every mount of that component rather than once globally.
- **Circular imports:** None detected between `src/routes`, `src/components`, `src/data` — the import graph is a strict DAG (`routes/*` → `components/Reveal` + `data/projects`; nothing imports back from `data/` or `components/`).
- **Static-only data:** There is no server-side `loader` defined on either route — both routes read the in-memory `projects` array directly at render time, so there is no network/database dependency at runtime for content.
- **Single deployment target:** Only Cloudflare Workers is supported (`wrangler.jsonc`); the Node `server.js` / Vercel dual-target setup referenced in older docs has been removed from the repo entirely.
- **Route-tree stability invariant:** For this milestone, no file is added, removed, or renamed under `src/routes/` — `src/routeTree.gen.ts` (generated, do-not-edit) must not need regeneration mid-milestone.
- **Hardcoded credentials in client code:** EmailJS public key, service ID, and template ID are string literals in `src/routes/index.tsx:314,332` (`vH9gSi4D3ru6ad63Z`, `service_mkurl73`, `template_b9lcxkl`). These are EmailJS "public" keys by design but remain visible in bundled client JS. No `.env`/`VITE_*` variables are used anywhere in `src/`.
- **Vendored third-party export:** `public/animate/` is a compiled Adobe Animate (CreateJS) export embedded via `<iframe src="/animate/1_MOHAMED.html">` in the `sae-2` project branch. It is a self-contained scene chain (`1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN`) that navigates via `window.open` inside its own bundled `.js` files, depending on sibling `images/`, `imagesImad/`, `imagesframe2/`, `components/`, `videos/` directories — none of this is authored/maintained React/TypeScript source and it is excluded from the asset-reference inventory script (`scripts/inventory-assets.mjs` explicitly skips `public/animate/`).

## Anti-Patterns

### Per-project hardcoded content branches instead of data-driven content

**What happens:** `src/routes/projects/$projectId.tsx` contains four `{project.id === "some-id" && (...)}` JSX blocks (lines 81, 173, 293, 512) with fully bespoke markup, copy, and image lists per project, rather than expressing that content as structured data on the `Project` type.
**Why it's wrong:** Adding or editing a project's detail-page content requires editing this 647-line route file directly and searching for the matching `id` string; the `Project` type in `src/data/projects.ts` does not model this richer content at all, so the two files can silently drift (e.g., a new project added to `projects.ts` gets none of this treatment unless a matching branch is hand-written).
**Do this instead:** When extending project detail content, keep new structured fields on the `Project` type in `src/data/projects.ts` and render them generically in `$projectId.tsx`, rather than adding a fifth `project.id === "..."` branch — but do not restructure the existing four branches during this milestone unless a phase explicitly scopes that refactor (it is a known, accepted debt, see CONCERNS.md).

### Third-party vendored export embedded via iframe, invisible to the build's asset checks

**What happens:** `public/animate/` (90 MiB, a compiled Adobe Animate/CreateJS export) is embedded via `<iframe src="/animate/1_MOHAMED.html">` in `src/routes/projects/$projectId.tsx:443`. It is explicitly excluded from `scripts/inventory-assets.mjs`'s reference-scanning (per that script's own header comment) and is not scanned by `scripts/check-assets.mjs`'s per-file size/encoding rules the same way first-party `public/videos`/`public/assets` files are.
**Why it's wrong:** Its videos (`public/animate/videos/*.mp4`, up to several MB each) and images are not guarded by the project's own asset-size/encoding rules, and the whole directory is heavy relative to total site weight — a core concern for this "lite" milestone's page-weight goal.
**Do this instead:** Treat `public/animate/` as a distinct, out-of-band asset category with its own review pass (per the milestone scope note) rather than assuming the existing `check-assets`/`inventory-assets` scripts cover it — do not modify its internals; only add tooling or exceptions around it if a phase explicitly targets it.

### Hardcoded third-party credentials in client bundle

**What happens:** EmailJS's public key, service ID, and template ID are inlined as string literals directly in `src/routes/index.tsx` (`emailjs.init("vH9gSi4D3ru6ad63Z")` at line 314; `emailjs.send("service_mkurl73", "template_b9lcxkl", ...)` at line 332) instead of being read from environment/config.
**Why it's wrong:** While EmailJS's public key is designed to be exposed client-side, hardcoding all three identifiers directly in a component makes them harder to rotate/audit and couples the contact feature to one specific EmailJS account with no environment-based override.
**Do this instead:** If contact-form work is scoped in a future phase, consider extracting these three literals to named constants at the top of the file (matching the existing `SCREAMING_SNAKE_CASE` module-constant convention, e.g. `HERO_VIDEO`) even without introducing `.env` — this documents intent without requiring new tooling.

## Error Handling

**Strategy:** Two-tier — router-level global fallbacks for unmatched routes/uncaught render errors, plus local component-level try/catch for the one network operation in the app (the contact form).

**Patterns:**
- `DefaultErrorComponent` (`src/router.tsx:4-55`) renders a generic "Something went wrong" screen, shows `error.message` only when `import.meta.env.DEV` is true, and offers "Try again" (`router.invalidate()` + `reset()`) and "Go home" actions.
- `NotFoundComponent` (`src/routes/__root.tsx:6-26`) handles unmatched routes with a styled 404 and a link home.
- `ProjectPage` handles a missing/unknown `projectId` locally with an inline "Projet introuvable" state (`src/routes/projects/$projectId.tsx:14-28`) rather than throwing a router-level not-found.
- `Contact`'s EmailJS submission wraps `emailjs.send(...)` in try/catch/finally, sets a local French-language `error` string on failure, and logs to `console.error` (`src/routes/index.tsx:331-341`).
- Fire-and-forget promises use `.catch()` inline rather than a full try/catch when the failure is expected/ignorable — the hero `<video>` autoplay-block rejection is swallowed with a comment explaining why (`src/routes/index.tsx:70-75`).

## Cross-Cutting Concerns

**Logging:** `console.error(err)` is the only logging call in `src/`, used solely in the `Contact` form's catch block (`src/routes/index.tsx:338`). No `console.log` debugging statements exist in committed source.

**Validation:** No schema validation library (`zod` and `react-hook-form` are not present in the current `package.json` dependency list — the contact form uses plain uncontrolled `<input required>`/`<textarea required>` HTML5 validation and manual `FormData` extraction, `src/routes/index.tsx:317-329`).

**Authentication:** Not applicable — the site has no auth, no user accounts, no protected routes.

---

*Architecture analysis: 2026-09-27*

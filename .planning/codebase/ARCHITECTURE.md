<!-- refreshed: 2026-09-21 -->
# Architecture

**Analysis Date:** 2026-09-21

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                     TanStack Start (SSR)                     │
│         entry: `src/router.tsx` + `src/routeTree.gen.ts`     │
├──────────────────────────┬────────────────────────────────────┤
│      Root Shell/Layout   │        File-based Routes           │
│   `src/routes/__root.tsx`│  `src/routes/index.tsx`             │
│   (html/head/Scripts,    │  `src/routes/projects/$projectId.tsx│
│    404 page)             │                                     │
└──────────────┬───────────┴──────────────┬──────────────────────┘
               │                          │
               ▼                          ▼
┌─────────────────────────────┐  ┌────────────────────────────────┐
│   Presentational Components  │  │   Static Project Data           │
│  `src/components/*.tsx`      │  │  `src/data/projects.ts`         │
│  `src/components/ui/*.tsx`   │  │  (in-memory array, no fetch/DB) │
│  (shadcn/Radix primitives)   │  │                                 │
└──────────────┬───────────────┘  └──────────────┬──────────────────┘
               │                                  │
               ▼                                  ▼
┌─────────────────────────────────────────────────────────────┐
│         Static Assets (public/) + Bundled Assets (src/assets)│
│  `public/videos`, `public/assets`, `public/animate`,          │
│  `src/assets/*.png|jpg` (imported by routes/components)       │
└─────────────────────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────┐
│    Production Node Server (SSR request handler)               │
│  `server.js` → wraps built `dist/server/index.js` fetch handler│
│  (used for `npm start`; Cloudflare/Vercel use their own entry) │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Root route | HTML shell, `<head>` meta/fonts/favicon, global 404 component, mounts `<Outlet/>` | `src/routes/__root.tsx` |
| Router factory | Creates the TanStack Router instance, wires the generated route tree, defines the default error boundary UI | `src/router.tsx` |
| Generated route tree | Auto-generated route registration/type map; do not hand-edit | `src/routeTree.gen.ts` |
| Home page | Single-page marketing site: hero, about, filterable project grid, contact form, custom cursor, petal animation | `src/routes/index.tsx` |
| Project detail page | Renders one project from `projects` by `$projectId`; contains large per-project hardcoded content blocks | `src/routes/projects/$projectId.tsx` |
| Project data | Canonical `Project` type and the full list of portfolio project entries (single source of truth for project content) | `src/data/projects.ts` |
| Reveal | Scroll-triggered fade/slide-in wrapper using `IntersectionObserver` | `src/components/Reveal.tsx` |
| Petals | Decorative floating-petal background animation (pure CSS-driven, randomized per petal via array index) | `src/components/Petals.tsx` |
| CornerOrnament | Decorative SVG corner flourishes used inside "ornament-card" panels | `src/components/CornerOrnament.tsx` |
| ProjectModal | Modal dialog for displaying a project (video/image, description, tools) — **imported in `src/routes/index.tsx` but never rendered; dead code** | `src/components/ProjectModal.tsx` |
| UI primitives | shadcn-style wrappers around Radix UI primitives (accordion, dialog, form, sidebar, chart, etc.) — largely unused by the current single-page site except via `cn()` conventions | `src/components/ui/*.tsx` |
| `cn()` utility | `clsx` + `tailwind-merge` class-name combinator used across `components/ui` | `src/lib/utils.ts` |
| `useIsMobile` | Media-query hook (768px breakpoint) for responsive behavior; used by `sidebar.tsx` primitive | `src/hooks/use-mobile.tsx` |
| Production server | Minimal Node `http` server that forwards requests to the built SSR fetch handler | `server.js` |

## Pattern Overview

**Overall:** Single-page marketing/portfolio site built on TanStack Start (file-based SSR routing on top of Vite/React 19), with one secondary detail route (`/projects/:projectId`). Content is not fetched from any API or database — it lives in a single static TypeScript data module (`src/data/projects.ts`) imported directly by both routes.

**Key Characteristics:**
- No client-side data-fetching layer despite `@tanstack/react-query` being a dependency — it is installed but not used anywhere in `src/`.
- No global state management (no Context providers, no store). All state is local `useState`/`useRef` inside route components.
- Heavy use of inline component definitions co-located inside route files rather than extracted into `src/components/` (e.g., `Nav`, `Hero`, `About`, `Projects`, `Contact`, `CustomCursor`, `ProjectCard` are all defined directly in `src/routes/index.tsx`).
- The shadcn/Radix `src/components/ui/` library is fully scaffolded (30+ primitives) but the actual page markup uses hand-rolled Tailwind classes and custom CSS classes (`quest-btn`, `hud-tag`, `ornament-card`, `chapter-title`, `reveal`, `petal`, `corner`) defined in `src/styles.css` rather than the shadcn components — the `ui/` folder is largely unused scaffolding, not wired into the live pages.
- Per-project rich content on the detail page is implemented as literal `project.id === "..."` conditional branches inside `src/routes/projects/$projectId.tsx` rather than as structured data — this couples page logic to specific project IDs and makes the route file very large (665 lines).

## Layers

**Routing/Shell layer:**
- Purpose: Registers routes, renders the HTML document shell, provides global error/404 handling.
- Location: `src/router.tsx`, `src/routes/__root.tsx`, `src/routeTree.gen.ts`
- Contains: Router configuration, `<html>/<head>/<body>` shell, meta tags/fonts, default error and not-found components.
- Depends on: `@tanstack/react-router`, `@tanstack/react-start` (via Vite plugin), generated route tree.
- Used by: Vite/TanStack Start server entry (via the `@lovable.dev/vite-tanstack-config` preset) and `server.js` in production.

**Route/page layer:**
- Purpose: Page-level composition — hero, sections, forms, project listing/detail.
- Location: `src/routes/index.tsx`, `src/routes/projects/$projectId.tsx`
- Contains: Page-specific sub-components (defined inline), section markup, local UI state (filters, form state, animation refs).
- Depends on: `src/data/projects.ts`, `src/components/*`, `src/assets/*`, public assets under `/videos`, `/assets`.
- Used by: `routeTree.gen.ts` route registration only.

**Shared components layer:**
- Purpose: Reusable, presentational, cross-page building blocks.
- Location: `src/components/*.tsx` (top-level) and `src/components/ui/*.tsx` (shadcn/Radix primitives).
- Contains: `Reveal`, `Petals`, `CornerOrnament`, `ProjectModal`, and the full shadcn UI kit.
- Depends on: Radix UI packages, `class-variance-authority`, `src/lib/utils.ts` (`cn`).
- Used by: Route components (top-level components actively used; `ui/` kit currently unused by live pages).

**Data layer:**
- Purpose: Single source of truth for portfolio project content.
- Location: `src/data/projects.ts`
- Contains: `Project` TypeScript type and a hardcoded `projects: Project[]` array (image/video paths reference `public/assets` and `public/videos`).
- Depends on: Nothing (pure static data, no I/O).
- Used by: `src/routes/index.tsx` (grid + filtering), `src/routes/projects/$projectId.tsx` (detail lookup by `id`).

**Styling layer:**
- Purpose: Design tokens (OKLCH color variables), Tailwind v4 theme wiring, and custom component classes for the site's visual language ("quest"/ornamental theme).
- Location: `src/styles.css` (imported via `src/routes/__root.tsx` as `appCss`).
- Contains: `@theme inline` token mappings, `:root` CSS custom properties, custom classes (`.quest-btn`, `.hud-tag`, `.ornament-card`, `.reveal`, `.petal`, `.corner`, cursor styling).
- Depends on: Tailwind CSS v4 (`@tailwindcss/vite`), `tw-animate-css`.
- Used by: All route/component markup via Tailwind utility classes and custom class names.

**Server/deployment layer:**
- Purpose: Serve the SSR build in different target environments.
- Location: `server.js` (plain Node `http` server for generic hosting/`npm start`), `wrangler.jsonc` (Cloudflare Workers deployment via `@tanstack/react-start/server-entry`), `vercel.json` (Vercel build/output config pointing at `dist/server`).
- Depends on: Built output in `dist/server/` (from `vite build`).
- Used by: Deployment targets only — not used in `dev` mode (`vite dev` runs its own dev server).

## Data Flow

### Primary Request Path (Home page)

1. Request hits TanStack Start SSR handler → resolved to root route (`src/routes/__root.tsx`), which renders the HTML shell and meta/fonts.
2. Root's `<Outlet/>` renders the matched child route; for `/` this is `Index` in `src/routes/index.tsx:629`.
3. `Index` composes `Petals`, `CustomCursor`, `Nav`, `Hero`, `About`, `Projects`, `Skills` (a no-op, `src/routes/index.tsx:495-497`), and `Contact`.
4. `Projects` (`src/routes/index.tsx:444`) reads the static `projects` array from `src/data/projects.ts`, filters by the locally-held `filter` category state, and renders a `ProjectCard` per project.
5. Each `ProjectCard` (`src/routes/index.tsx:395`) is a `<Link to="/projects/$projectId">` — navigation, not modal — to the detail route.
6. `Contact` (`src/routes/index.tsx:499`) submits form data directly to EmailJS (`@emailjs/browser`) client-side; no backend endpoint involved.

### Project Detail Flow

1. Route matched at `/projects/$projectId` (`src/routes/projects/$projectId.tsx:6`).
2. `Route.useParams()` extracts `projectId`; `projects.find(p => p.id === projectId)` looks up the project in the static array (`src/routes/projects/$projectId.tsx:13`).
3. If not found, renders a "Projet introuvable" fallback with a button back to `/`.
4. If found, renders generic sections (video/iframe, description, tools, external `url` link) plus **project-id-specific hardcoded JSX blocks** for four project IDs (`business-card-mockup`, `clip`, `sae-2`, `sae-1`) that are not derived from `Project` fields (`src/routes/projects/$projectId.tsx:83-599`).

**State Management:**
- All state is component-local React `useState`/`useRef` (category filter, contact form status, cursor position, nav mobile-menu open/close, reveal-on-scroll visibility). No Context, no global store, no server cache despite `@tanstack/react-query` being installed.

## Key Abstractions

**`Project` type / `projects` array:**
- Purpose: Represents one portfolio piece (id, title, category, thumbnail, media, optional video/url, descriptions, tools, role, `inProgress` flag).
- Examples: `src/data/projects.ts:1-14` (type), `src/data/projects.ts:16-133` (data).
- Pattern: Flat array of plain objects, looked up by `id`; asset paths point into `public/assets` / `public/videos` (absolute `/assets/...` URLs) or imported modules from `src/assets`.

**Reveal-on-scroll wrapper:**
- Purpose: Declarative scroll-triggered entrance animation.
- Examples: `src/components/Reveal.tsx`; used pervasively by wrapping section content, e.g. `src/routes/index.tsx:281`, `src/routes/projects/$projectId.tsx:37`.
- Pattern: `IntersectionObserver`-backed component that toggles a CSS class (`in`) once visible; consumers pass `delay` for staggered effect via `transitionDelay`.

**Ornamental design-system classes:**
- Purpose: Consistent themed styling (buttons, tags, cards, corners) without a component abstraction.
- Examples: `.quest-btn`, `.hud-tag`, `.ornament-card`, `.chapter-title` in `src/styles.css`, used directly as `className` strings throughout route files.
- Pattern: CSS-class-driven design system rather than React component variants (contrasts with the unused `class-variance-authority`-based `ui/button.tsx` pattern).

## Entry Points

**Client/SSR route entry:**
- Location: `src/router.tsx`
- Triggers: Invoked by the TanStack Start Vite plugin (configured via `@lovable.dev/vite-tanstack-config` in `vite.config.ts`) to construct the router for both SSR and client hydration.
- Responsibilities: Registers `routeTree`, sets `scrollRestoration: true`, `defaultPreloadStaleTime: 0`, and a default error component.

**Root document shell:**
- Location: `src/routes/__root.tsx`
- Triggers: Rendered once per request as the outermost route.
- Responsibilities: `<head>` metadata (SEO/OG tags, Google Fonts preconnect, favicon), global stylesheet injection (`appCss`), 404 fallback, mounts `<Scripts/>` for hydration.

**Production Node server:**
- Location: `server.js`
- Triggers: `npm start` (`node server.js`).
- Responsibilities: Wraps the built `dist/server/index.js` fetch handler in a plain Node `http.createServer`, translating Node req/res to/from the Fetch API `Request`/`Response`.

**Alternate deploy entries (not exercised in `src/`):**
- Cloudflare Workers: `wrangler.jsonc` points `main` at `@tanstack/react-start/server-entry`.
- Vercel: `vercel.json` runs `npm run build` and serves `dist/server` directly (no custom `server.js` involved).

## Architectural Constraints

- **Threading:** Standard single-threaded Node/V8 event loop for both `vite dev` and the production `server.js`; no worker threads used.
- **Global state:** No module-level singletons in `src/`. `emailjs.init(...)` is called inside a `useEffect` in `Contact` (`src/routes/index.tsx:506`), re-initializing the EmailJS client on every mount of that component rather than once globally.
- **Circular imports:** None detected between `src/routes`, `src/components`, `src/data`, `src/lib`.
- **Static-only data:** There is no server-side data loading (`loader`) defined on either route — both routes read the in-memory `projects` array directly at render time, so no network/database dependency exists at runtime for content.
- **Hardcoded credentials in client code:** EmailJS public key, service ID, and template ID are hardcoded string literals in `src/routes/index.tsx:506,524` (`vH9gSi4D3ru6ad63Z`, `service_mkurl73`, `template_b9lcxkl`). These are EmailJS "public" keys by design but are still visible in the bundled client JS.

## Anti-Patterns

### Per-project hardcoded content branches instead of data-driven content

**What happens:** `src/routes/projects/$projectId.tsx` contains large literal `{project.id === "sae-2" && (...)}`-style JSX blocks (four of them, spanning roughly 200+ lines combined) hardcoding image lists, captions, and copy for specific project IDs, in addition to the generic fields already defined on `Project`.
**Why it's wrong:** Adding or editing a project's detailed content requires editing route/page code instead of the data file, makes the route component very large (665 lines) and hard to navigate, and creates an inconsistent authoring model (`Project.media`/`description` fields exist but are bypassed for these four projects).
**Do this instead:** Extend the `Project` type (`src/data/projects.ts:1-14`) with structured fields (e.g., `sections: { heading: string; images: {src, alt}[]; body: string }[]`) and render them generically in `$projectId.tsx`, removing the `project.id === "..."` branches.

### Unused/dead component still imported

**What happens:** `ProjectModal` (`src/components/ProjectModal.tsx`) is imported in `src/routes/index.tsx:7` but never instantiated/rendered anywhere; project navigation instead uses `<Link>` to the `/projects/$projectId` route.
**Why it's wrong:** Dead code adds confusion about the intended navigation pattern (modal vs. dedicated page) and increases bundle/maintenance surface for no benefit.
**Do this instead:** Remove the unused import and `ProjectModal.tsx`, or intentionally wire it up if modal-based project preview is still desired for certain contexts.

### Large shadcn/Radix UI kit scaffolded but unused by live pages

**What happens:** `src/components/ui/` contains 30+ shadcn-generated primitives (`dialog.tsx`, `form.tsx`, `sidebar.tsx`, `chart.tsx`, etc.) and `components.json` configures the shadcn CLI, but the actual site markup in `src/routes/index.tsx` and `$projectId.tsx` uses raw HTML elements with hand-written Tailwind/custom classes instead.
**Why it's wrong:** Two parallel styling systems exist in the repo (shadcn primitives vs. hand-rolled `.quest-btn`/`.hud-tag`/`.ornament-card` classes), increasing bundle size and making it unclear which pattern new code should follow.
**Do this instead:** When adding new UI, prefer the existing hand-rolled custom-class pattern already used across `src/routes/index.tsx` and `src/styles.css` unless a specific shadcn primitive (e.g., `dialog`, `form`) is deliberately adopted project-wide.

## Error Handling

**Strategy:** Route-level error boundary via TanStack Router's `defaultErrorComponent`; no try/catch data-fetching layer since there is no data fetching.

**Patterns:**
- `DefaultErrorComponent` (`src/router.tsx:4-55`) renders a generic "Something went wrong" screen, shows `error.message` only in `import.meta.env.DEV`, and offers "Try again" (`router.invalidate()` + `reset()`) and "Go home" actions.
- `NotFoundComponent` (`src/routes/__root.tsx:6-26`) handles unmatched routes with a styled 404 and a link home.
- `ProjectPage` handles a missing/unknown `projectId` locally with an inline "Projet introuvable" state (`src/routes/projects/$projectId.tsx:15-29`) rather than throwing a router-level not-found.
- `Contact`'s EmailJS submission wraps `emailjs.send(...)` in try/catch, sets a local `error` string on failure, and logs to `console.error` (`src/routes/index.tsx:523-533`).

## Cross-Cutting Concerns

**Logging:** No logging framework; only ad-hoc `console.error` calls (`src/routes/index.tsx:530`, `server.js:16`).
**Validation:** No schema validation is applied to the contact form (`zod` is a dependency but not imported/used anywhere in `src/`); relies solely on native HTML `required`/`type="email"` input attributes (`src/routes/index.tsx:565-576`).
**Authentication:** None — the site has no auth, no protected routes, no user accounts.

---

*Architecture analysis: 2026-09-21*

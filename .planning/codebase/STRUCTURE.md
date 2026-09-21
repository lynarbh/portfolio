# Codebase Structure

**Analysis Date:** 2026-09-21

## Directory Layout

```
portfolio/
├── public/                       # Static files served as-is at the site root (not processed by Vite bundler)
│   ├── favicon.ico
│   ├── logo.png
│   ├── videos/                   # Hero video + CV video (large MP4 files)
│   ├── assets/                   # Project images/PDFs referenced by absolute "/assets/..." paths in src/data/projects.ts
│   └── animate/                  # Embedded interactive HTML/JS mini-app (iframe'd into the "sae-2" project page)
│       ├── components/{sdk,video/src}/
│       ├── illustrations/, images/, imagesImad/, imagesframe2/, videos/
├── src/
│   ├── assets/                   # Image assets imported directly by TS/TSX (bundled, hashed by Vite), e.g. portrait.jpg
│   ├── components/                # Shared, reusable React components (top-level = hand-written, ui/ = shadcn/Radix kit)
│   │   └── ui/                   # shadcn-style Radix UI primitive wrappers (accordion, dialog, form, sidebar, etc.)
│   ├── data/
│   │   └── projects.ts           # Single source of truth: `Project` type + `projects` array (all portfolio content)
│   ├── hooks/
│   │   └── use-mobile.tsx        # `useIsMobile()` media-query hook (used by ui/sidebar.tsx)
│   ├── lib/
│   │   └── utils.ts              # `cn()` class-name helper (clsx + tailwind-merge)
│   ├── routes/                    # TanStack Start file-based routes (one file = one route)
│   │   ├── __root.tsx            # Root route: HTML shell, <head> meta/fonts, 404 component
│   │   ├── index.tsx              # "/" — the entire one-page site (hero/about/projects/contact)
│   │   └── projects/
│   │       └── $projectId.tsx    # "/projects/:projectId" — project detail page
│   ├── router.tsx                 # `getRouter()` factory; default error component
│   ├── routeTree.gen.ts          # AUTO-GENERATED route registration — do not hand-edit
│   └── styles.css                 # Tailwind v4 theme tokens + custom design-system classes (imported by __root.tsx)
├── server.js                      # Minimal Node http server wrapping the built SSR fetch handler (used by `npm start`)
├── vite.config.ts                 # Wraps `@lovable.dev/vite-tanstack-config` (bundles TanStack Start/React/Tailwind/Cloudflare plugins)
├── tsconfig.json                  # `@/*` → `./src/*` path alias, strict mode, bundler resolution
├── components.json                # shadcn CLI config (new-york style, `@/components/ui` alias, lucide icons)
├── eslint.config.js                # Flat ESLint config (typescript-eslint + react-hooks + react-refresh + prettier)
├── .prettierrc                    # Prettier formatting rules (100 col width, double quotes off/false → double quotes, trailing commas)
├── wrangler.jsonc                 # Cloudflare Workers deploy config (nodejs_compat, entry = @tanstack/react-start/server-entry)
├── vercel.json                    # Vercel deploy config (build + outputDirectory = dist/server)
├── package.json                   # Scripts: dev, build, build:dev, preview, start, lint, format
├── bun.lockb / package-lock.json  # Dual lockfiles present (Bun and npm) — see naming/tooling note below
└── bunfig.toml                    # Bun config (repo uses Bun as the primary package manager per lockfile + bunfig)
```

## Directory Purposes

**`public/`:**
- Purpose: Files served verbatim at the site root by the SSR/static host; referenced in code via absolute URL strings (e.g. `"/videos/hero.mp4"`, `"/assets/hero.png"`), not via JS `import`.
- Contains: Large media (`videos/`), all portfolio project images and one PDF (`assets/`), and a self-contained interactive HTML/CSS/JS sub-app (`animate/`) that is embedded via `<iframe src="/animate/1_MOHAMED.html">` inside the SkøllRub ("sae-2") project detail page (`src/routes/projects/$projectId.tsx:445`).
- Key files: `public/videos/hero.mp4`, `public/videos/56_Lyna_REBAHI_CVvideo.mp4`, `public/assets/*.png|jpg|pdf`, `public/animate/1_MOHAMED.html` (implied entry for the iframe).

**`src/assets/`:**
- Purpose: Images imported directly in TS/TSX via `import x from "@/assets/..."` so Vite bundles, hashes, and optimizes them (distinct from `public/assets`, which is unprocessed).
- Contains: Portrait, mockups, logos, and various project reference images — many of these filenames overlap conceptually with `public/assets` but the two are separate, non-deduplicated collections.
- Key files: `src/assets/portrait.jpg` (imported in `src/routes/index.tsx:8`).

**`src/components/`:**
- Purpose: Hand-written, reusable, presentational components used directly by routes.
- Contains: `Reveal.tsx` (scroll animation), `Petals.tsx` (decorative background), `CornerOrnament.tsx` (decorative SVG), `ProjectModal.tsx` (currently unused/dead — see `ARCHITECTURE.md` Anti-Patterns).
- Key files: `src/components/Reveal.tsx`, `src/components/Petals.tsx`.

**`src/components/ui/`:**
- Purpose: shadcn-generated wrappers around Radix UI primitives, scaffolded via `components.json` but not currently wired into the live pages.
- Contains: `accordion.tsx`, `alert-dialog.tsx`, `button.tsx`, `card.tsx`, `dialog.tsx`, `form.tsx`, `sidebar.tsx`, `chart.tsx`, and ~25 more.
- Key files: `src/components/ui/button.tsx` (variant pattern via `class-variance-authority`, unused elsewhere in `src/routes`).

**`src/data/`:**
- Purpose: Static content module — the only "data layer" in the app.
- Contains: `projects.ts` — `Project` TypeScript type + `projects: Project[]` array with all portfolio entries.
- Key files: `src/data/projects.ts`.

**`src/hooks/`:**
- Purpose: Shared React hooks.
- Contains: `use-mobile.tsx` (`useIsMobile()`), currently only consumed by `src/components/ui/sidebar.tsx`.

**`src/lib/`:**
- Purpose: Small framework-agnostic utilities.
- Contains: `utils.ts` (`cn()` helper used throughout `src/components/ui/*`).

**`src/routes/`:**
- Purpose: TanStack Start file-based routing — each file/folder maps to a URL path and is registered into `src/routeTree.gen.ts` by the TanStack Router Vite plugin.
- Contains: `__root.tsx` (layout/shell), `index.tsx` (`/`), `projects/$projectId.tsx` (`/projects/:projectId`).
- Key files: `src/routes/index.tsx` (642 lines — largest file in the codebase), `src/routes/projects/$projectId.tsx` (665 lines).

## Key File Locations

**Entry Points:**
- `src/router.tsx`: Router factory (`getRouter()`), consumed by the TanStack Start Vite plugin for SSR/hydration.
- `src/routes/__root.tsx`: Document shell (`<html>/<head>/<body>`), global meta tags, stylesheet injection.
- `server.js`: Standalone Node production server entry (`npm start`), wraps `dist/server/index.js`.

**Configuration:**
- `vite.config.ts`: Delegates to `@lovable.dev/vite-tanstack-config` preset (bundles TanStack Start, React, Tailwind v4, tsconfig-paths, Cloudflare build plugin — do not manually add these plugins, per the inline comment).
- `tsconfig.json`: `@/*` path alias → `src/*`, `strict: true`, `noUnusedLocals`/`noUnusedParameters` disabled.
- `components.json`: shadcn CLI settings (style `new-york`, base color `slate`, CSS variables enabled, aliases for `components`/`utils`/`ui`/`lib`/`hooks`).
- `eslint.config.js`: Flat config combining `typescript-eslint` recommended, `react-hooks`, `react-refresh`, and `eslint-plugin-prettier` (formatting enforced as lint errors); `@typescript-eslint/no-unused-vars` explicitly turned off.
- `.prettierrc` / `.prettierignore`: 100-char line width, double quotes, trailing commas everywhere, semicolons on.
- `wrangler.jsonc`, `vercel.json`: Deployment targets for Cloudflare Workers and Vercel respectively.

**Core Logic:**
- `src/routes/index.tsx`: Entire single-page site UI (Nav, Hero, About, Projects grid + filter, Contact form with EmailJS, custom cursor).
- `src/routes/projects/$projectId.tsx`: Project detail page, including project-specific hardcoded content blocks.
- `src/data/projects.ts`: All portfolio project content and the `Project` type contract.

**Testing:**
- Not applicable — no test framework, test files, or test scripts are present anywhere in the repository (`package.json` has no `test` script).

## Naming Conventions

**Files:**
- React components: `PascalCase.tsx` (e.g., `Reveal.tsx`, `CornerOrnament.tsx`, `ProjectModal.tsx`).
- shadcn/ui primitives: `kebab-case.tsx` matching the shadcn CLI convention (e.g., `alert-dialog.tsx`, `hover-card.tsx`, `use-mobile.tsx`).
- Route files: TanStack Start file-based routing conventions — `index.tsx` for a directory's index route, `__root.tsx` for the root layout, `$paramName.tsx` for dynamic segments (e.g., `$projectId.tsx`).
- Data/lib/utils: lowercase, descriptive (`projects.ts`, `utils.ts`).

**Directories:**
- Lowercase, single-word or hyphenated where needed (`components`, `routes`, `ui`, `use-mobile.tsx` lives directly in `hooks/` without further nesting).
- Route directories mirror URL structure (`routes/projects/$projectId.tsx` → `/projects/:projectId`).

## Where to Add New Code

**New page/route:**
- Add a new file under `src/routes/` (e.g., `src/routes/about.tsx` for `/about`, or `src/routes/blog/$slug.tsx` for `/blog/:slug`). The TanStack Router Vite plugin regenerates `src/routeTree.gen.ts` automatically — never hand-edit that file.

**New portfolio project:**
- Add an entry to the `projects` array in `src/data/projects.ts`, following the existing `Project` shape. Place new images in `public/assets/` and reference them with an absolute `/assets/...` path (matches the existing convention for all current project media), or import from `src/assets/` if the image should be bundled/optimized by Vite.
- Avoid adding a new `project.id === "..."` branch in `src/routes/projects/$projectId.tsx` for rich per-project content — see `ARCHITECTURE.md` Anti-Patterns for the recommended data-driven alternative (extend `Project` with structured `sections`).

**New shared component:**
- Hand-written presentational components: `src/components/*.tsx` (PascalCase), following the pattern in `Reveal.tsx`/`Petals.tsx` (typed props inline, no separate `.types.ts` files).
- If deliberately adopting a shadcn primitive that already exists under `src/components/ui/`, wire it in directly; if a new shadcn primitive is needed, use the shadcn CLI (`components.json` is already configured) rather than hand-writing a new file in `ui/`.

**Utilities:**
- Shared, framework-agnostic helpers: `src/lib/utils.ts` (extend with additional small helpers, following the `cn()` pattern) or a new file in `src/lib/` for larger concerns.
- Shared React hooks: `src/hooks/` (kebab-case filename, `use-` prefix, matching `use-mobile.tsx`).

**Styling:**
- New design tokens (colors, radii): add to the `:root` block and `@theme inline` mapping in `src/styles.css`.
- New reusable visual patterns: add a custom CSS class to `src/styles.css` (following `.quest-btn`/`.hud-tag`/`.ornament-card` naming) rather than introducing a new shadcn component variant, to stay consistent with the styling approach actually used by the live pages.

## Special Directories

**`public/animate/`:**
- Purpose: A separate, self-contained interactive HTML/CSS/JS mini-project (with its own `components/sdk`, `components/video/src`, `images*`, `videos` subfolders) embedded via iframe into one specific project detail page.
- Generated: Not part of the Vite/React build pipeline — served as static files, untouched by the bundler.
- Committed: Yes.

**`src/routeTree.gen.ts`:**
- Purpose: Auto-generated route registration and type definitions produced by the TanStack Router Vite plugin from the contents of `src/routes/`.
- Generated: Yes — regenerated automatically on dev/build whenever files under `src/routes/` change. The file itself carries `/* eslint-disable */` and `// @ts-nocheck` headers and explicit instructions not to hand-edit it.
- Committed: Yes (present in the working tree; typical for TanStack Start projects so the type-safe route map is available without a build step).

**`dist/` (build output, not present in a fresh checkout):**
- Purpose: Vite build output (`dist/server/index.js` is the SSR handler referenced by `server.js` and by `vercel.json`'s `outputDirectory`).
- Generated: Yes, via `npm run build`.
- Committed: No (not observed in the working tree; standard build-artifact directory).

---

*Structure analysis: 2026-09-21*

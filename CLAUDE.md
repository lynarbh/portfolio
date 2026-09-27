<!-- GSD:project-start source:PROJECT.md -->
## Project

**Portfolio — Lyna Rebahi**

Portfolio personnel de Lyna Rebahi, 20 ans, étudiante en BUT MMI. Objectif immédiat : décrocher une alternance de chargée de communication (la polyvalence MMI est l'atout vendu), tout en affichant clairement une spécialisation audiovisuelle — réalisation, montage — avec un master cinéma en ligne de mire. Site mono-page (TanStack Start / React / Tailwind v4) avec pages projet détaillées, déployé sur Cloudflare Workers.

Ce milestone est une refonte « version lite » : audit complet, suppression du code mort et des assets inutiles, allègement massif du poids sans dégrader les médias, et une nouvelle mise en scène hybride (palette actuelle + codes cinéma) qui fait comprendre en 3 secondes que la vidéo est son terrain.

**Core Value:** Un recruteur qui ouvre le site comprend en 3 secondes que Lyna vit l'audiovisuel — la vidéo domine, les médias sont mis en scène comme dans un portfolio d'assistante audiovisuelle — et le site se charge vite malgré des visuels de qualité.

### Constraints

- **Timeline** : présentable à un recruteur cette semaine — prioriser nettoyage + poids + hero/qui suis-je/projets, le reste après
- **Hébergement** : Cloudflare Workers, 25 Mio max par asset — toute vidéo doit rester sous cette limite avec marge
- **Médias** : rien n'est supprimé ni visiblement dégradé ; réencodage visuellement sans perte uniquement
- **Textes** : fournis par Lyna — le code livre des emplacements et des consignes, pas de copy générée définitive
- **Logos** : marques Adobe indisponibles librement — placeholders nommés, Lyna fournit les images
- **Stack** : TanStack Start + Tailwind v4 + config Lovable conservés, bun comme gestionnaire de paquets
- **Identité** : palette et typos existantes conservées (direction hybride)
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- TypeScript 5.8.3 - Application code (`src/**/*.ts`, `src/**/*.tsx`), strict mode enabled (`tsconfig.json`)
- JavaScript (ESM) - `server.js` (standalone Node HTTP server for non-edge hosting), `eslint.config.js`
## Runtime
- Node.js (version unpinned — no `.nvmrc`/`.node-version` file present; `@types/node` targets Node 22 typings)
- Dual deployment targets: Cloudflare Workers (via `@cloudflare/vite-plugin`, `nodejs_compat` flag) and a plain Node HTTP server (`server.js`) for Vercel/other Node hosts
- Bun is the primary manager: `bun.lockb` present, `bunfig.toml` present (`saveTextLockfile = false`)
- `package-lock.json` also present (npm), so the repo is dual-tracked — `vercel.json` build command uses `npm run build`, implying Vercel builds use npm while local/Cloudflare dev likely uses Bun
- No `pnpm-lock.yaml` or `yarn.lock`
## Frameworks
- React 19.2.0 - UI library (`react`, `react-dom`)
- TanStack Start 1.167.14 (`@tanstack/react-start`) - Full-stack React meta-framework (SSR, file-based routing, server entry)
- TanStack Router 1.168.0 (`@tanstack/react-router`) - Routing, code-gen'd route tree at `src/routeTree.gen.ts`, router setup in `src/router.tsx`
- TanStack Router Plugin 1.167.10 (`@tanstack/router-plugin`) - Vite plugin for route-tree generation (wired via `@lovable.dev/vite-tanstack-config`)
- TanStack Query 5.83.0 (`@tanstack/react-query`) - present in dependencies; no active `useQuery`/`QueryClient` usage found in `src/routes` during exploration (data is static, see `src/data/projects.ts`)
- Tailwind CSS 4.2.1 (`tailwindcss`, `@tailwindcss/vite`) - CSS-first config (no `tailwind.config.*` file; theme defined in `src/styles.css` via `@theme inline`)
- Radix UI (`@radix-ui/react-*`, ~25 packages) - Headless UI primitives underlying the shadcn/ui component set in `src/components/ui/`
- Not detected — no test runner (Jest/Vitest/Playwright), no `*.test.*`/`*.spec.*` files, no test script in `package.json`
- Vite 7.3.1 - Bundler/dev server, config at `vite.config.ts`
- `@lovable.dev/vite-tanstack-config` 1.4.0 (devDependency, resolved 1.5.0) - Shared Vite config wrapper (Lovable.dev platform) that bundles: `tanstackStart`, `viteReact`, `tailwindcss`, `tsConfigPaths`, Cloudflare plugin (build-only), a dev-only component tagger, `VITE_*` env injection, the `@` path alias, React/TanStack dedupe, error-logger plugins, and sandbox port/host detection. Per the comment in `vite.config.ts`, these must NOT be re-added manually.
- `@cloudflare/vite-plugin` 1.25.5 - Cloudflare Workers build integration (invoked by the Lovable config, build-only)
- `vite-tsconfig-paths` 6.0.2 - Resolves the `@/*` → `./src/*` path alias from `tsconfig.json`
- ESLint 9.32.0 flat config (`eslint.config.js`) - `@eslint/js`, `typescript-eslint` 8.56.1, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-prettier` (Prettier errors surfaced as ESLint issues)
- Prettier 3.7.3 - Formatting, config at `.prettierrc` (100 print width, double quotes, semicolons, trailing commas), ignore list at `.prettierignore`
## Key Dependencies
- `@emailjs/browser` 4.4.1 - Client-side email delivery for the contact form (see INTEGRATIONS.md), used in `src/routes/index.tsx`
- `react-hook-form` 7.71.2 + `@hookform/resolvers` 5.2.2 + `zod` 3.24.2 - Form state management and schema validation (used by shadcn `form.tsx` component at `src/components/ui/form.tsx`)
- `zod` 3.24.2 - Runtime schema validation
- `class-variance-authority` 0.7.1, `clsx` 2.1.1, `tailwind-merge` 3.5.0 - Class-name composition utilities used throughout `src/components/ui/` (see `src/lib/utils.ts` `cn()` helper)
- `lucide-react` 0.575.0 - Icon set (icon library declared in `components.json`)
- `sonner` 2.0.7 - Toast notifications (`src/components/ui/sonner.tsx`)
- `embla-carousel-react` 8.6.0 - Carousel component (`src/components/ui/carousel.tsx`)
- `recharts` 2.15.4 - Charting (`src/components/ui/chart.tsx`)
- `cmdk` 1.1.1, `vaul` 1.1.2, `input-otp` 1.4.2, `react-day-picker` 9.14.0, `react-resizable-panels` 4.6.5, `date-fns` 4.1.0 - Supporting shadcn/ui component dependencies (command palette, drawer, OTP input, calendar, resizable panes, date utilities)
## Configuration
- No `.env`/`.env.*` files present in the repo (confirmed via directory listing — none found)
- No `VITE_*` environment variables referenced in `src/` (only `import.meta.env.DEV` is used, in `src/router.tsx`, a Vite built-in)
- EmailJS credentials (public key, service ID, template ID) are hardcoded directly in `src/routes/index.tsx` rather than sourced from environment variables — see INTEGRATIONS.md for details and security note
- `vite.config.ts` - Thin wrapper delegating to `@lovable.dev/vite-tanstack-config`'s `defineConfig()`; additional Vite options would go under `defineConfig({ vite: { ... } })`
- `tsconfig.json` - Target ES2022, bundler module resolution, strict mode, `@/*` path alias to `./src/*`, includes `src/**/*.ts(x)`, `vite.config.ts`, `eslint.config.js`
- `components.json` - shadcn/ui config: "new-york" style, slate base color, CSS variables enabled, no prefix, aliases mapped to `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`
- `wrangler.jsonc` - Cloudflare Workers config: app name `tanstack-start-app`, `compatibility_date: 2025-09-24`, `nodejs_compat` flag, entry `@tanstack/react-start/server-entry`
- `vercel.json` - Vercel config: `buildCommand: "npm run build"`, `outputDirectory: "dist/server"`
## Platform Requirements
- `bun install` (or `npm install`) then `vite dev` (`npm run dev` / `bun run dev`)
- No documented minimum Node version
- Two supported deployment paths, both built from the same `vite build` output:
- `npm run start` runs `node server.js` for the Node deployment path
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- React components: `PascalCase.tsx` — `src/components/ProjectModal.tsx`, `src/components/Reveal.tsx`, `src/components/CornerOrnament.tsx`, `src/components/Petals.tsx`
- shadcn/ui primitives: `kebab-case.tsx` inside `src/components/ui/` — `src/components/ui/alert-dialog.tsx`, `src/components/ui/dropdown-menu.tsx`, `src/components/ui/input-otp.tsx` (this directory is generated/vendored by shadcn and should not be hand-edited beyond what the CLI produces)
- Hooks: `use-kebab-case.tsx` — `src/hooks/use-mobile.tsx` (exports `useIsMobile`, camelCase function name inside a kebab-case file, matching shadcn convention)
- Route files: TanStack Router file-based routing, lower-case / `$param` dynamic segments — `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/projects/$projectId.tsx`
- Data modules: `camelCase.ts` — `src/lib/utils.ts`, `src/data/projects.ts`
- Generated files are not hand-edited: `src/routeTree.gen.ts` (TanStack Router codegen, excluded from prettier via `.prettierignore`)
- camelCase for functions and hooks — `useIsMobile`, `handleSubmit`, `getRouter`
- PascalCase for React components, including inline private components co-located in route files — `NotFoundComponent`, `RootShell`, `RootComponent`, `Contact`, `Skills` in `src/routes/index.tsx`
- camelCase for local variables and function params — `formRef`, `templateParams`, `projectId`
- SCREAMING_SNAKE_CASE for module-level constants — `HERO_VIDEO`, `HERO_FALLBACK`, `CATEGORIES`, `SKILL_TAGS`, `MOBILE_BREAKPOINT` (`src/routes/index.tsx`, `src/hooks/use-mobile.tsx`)
- `as const` used on literal arrays to derive union types — `const CATEGORIES = [...] as const; type Category = (typeof CATEGORIES)[number];` in `src/routes/index.tsx:18-19`
- PascalCase for types/interfaces — `Project` (`src/data/projects.ts`), `ButtonProps` (`src/components/ui/button.tsx`)
- Domain types defined alongside their data — `src/data/projects.ts` exports both the `Project` type and the `projects` array from the same file
- Prop types are inlined directly in the function signature for simple components rather than declared as a separate named type — see `src/components/ProjectModal.tsx:4-10` and `src/components/Reveal.tsx:3-11`
- `interface X extends Y` used only for components wrapping a native HTML element that need variant props merged in — `ButtonProps` in `src/components/ui/button.tsx:32-35`
## Code Style
- Prettier, config in `.prettierrc`: `printWidth: 100`, `semi: true`, `singleQuote: false` (double quotes), `trailingComma: "all"`
- `.prettierignore` excludes `node_modules`, `dist`, `.output`, `.vinxi`, `pnpm-lock.yaml`, `package-lock.json`, `routeTree.gen.ts`
- Run via `npm run format` / `bun run format` → `prettier --write .`
- ESLint flat config at `eslint.config.js`, built on `typescript-eslint` recommended + `@eslint/js` recommended
- `eslint-plugin-react-hooks` recommended rules enabled (enforces hooks rules — deps arrays, no conditional hooks)
- `eslint-plugin-react-refresh`: `"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]` — warns if a file exports both a component and non-component values, unless the extra export is a constant
- `eslint-plugin-prettier` (via `eslintPluginPrettier` recommended config) runs Prettier as an ESLint rule — formatting issues surface as lint errors
- **Notably disabled:** `"@typescript-eslint/no-unused-vars": "off"` — unused variables are NOT flagged by lint. Do not rely on lint to catch dead code/unused imports.
- Ignored paths: `dist`, `.output`, `.vinxi`
- Run via `npm run lint` / `bun run lint` → `eslint .`
- `"strict": true` is enabled
- BUT `"noUnusedLocals": false` and `"noUnusedParameters": false` — unused locals/params are allowed by the compiler too. Combined with the disabled ESLint rule above, unused code is not caught anywhere in this project. Be deliberate about removing dead code manually.
- Path alias `@/*` → `./src/*` (also mirrored in `components.json` aliases: `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`)
- `target: ES2022`, `moduleResolution: "Bundler"`, `jsx: "react-jsx"`, `noEmit: true` (Vite handles transpilation)
## Import Organization
- `@/*` maps to `src/*` (defined in `tsconfig.json` and consumed via `vite-tsconfig-paths`, wired through `@lovable.dev/vite-tanstack-config`)
- Always prefer `@/...` imports over deep relative paths (`../../../`) for anything under `src/`
## Error Handling
- Async operations that can fail (network calls) use `try/catch/finally` with local component state for `loading`/`error`/`success` flags — see `Contact` component, `src/routes/index.tsx:509-534`:
- User-facing error messages are French, plain strings held in `useState<string | null>` — no error object/toast library used for form errors despite `sonner` (`src/components/ui/sonner.tsx`) being available in the dependency tree.
- Fire-and-forget promises use `.catch()` inline rather than a full try/catch when the failure is expected/ignorable — `playPromise.catch(() => {})` in `src/routes/index.tsx:248` (video autoplay rejection).
- Programmer errors (invariant violations, not expected at runtime) throw `Error` synchronously — e.g. `if (!context) throw new Error("Canvas context unavailable")` in `src/routes/index.tsx:170`, and every shadcn context hook throws if used outside its provider (`src/components/ui/chart.tsx:29`, `src/components/ui/sidebar.tsx:43`, `src/components/ui/form.tsx:46,50`, `src/components/ui/carousel.tsx:35`) — pattern: `if (!context) throw new Error("useX must be used within a <XProvider />")`.
- Route-level "not found" states are handled by returning a fallback UI directly from the component rather than throwing — `src/routes/projects/$projectId.tsx:15-27` checks `if (!project) return <...>` with a "back to portfolio" button.
- Global fallback for uncaught render errors is `DefaultErrorComponent` in `src/router.tsx`, wired via `createRouter({ defaultErrorComponent: DefaultErrorComponent })`. It shows a generic "Something went wrong" message, exposes `error.message` only when `import.meta.env.DEV` is true, and offers "Try again" (`router.invalidate() + reset()`) and "Go home" actions.
- 404s are handled by TanStack Router's `notFoundComponent` on the root route — `NotFoundComponent` in `src/routes/__root.tsx:6-26`.
## Logging
- `console.error(err)` used only in the one catch block that surfaces a user-facing error (`src/routes/index.tsx:530`). Do not scatter `console.log` for debugging into committed code; none currently exists in `src/`.
## Comments
- Sparse. Most files have no comments at all.
- Section-divider comments are used in the flat data array `src/data/projects.ts` to group entries by category, e.g. `// --- SITE WEB ---`, `// --- BRANDING ---`, `// --- VIDÉO ---` (`src/data/projects.ts:17,35,48,62,86,110`). Follow this pattern when adding new project entries — add new items under (or create) the matching category comment block.
- One inline maintenance note left in code: `import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici` (`src/routes/index.tsx:1`) — an artifact from prior editing, not a documentation comment. Do not use this as a model; prefer no comment or a clear English/French explanation.
- `vite.config.ts` has a block comment at the top explaining which plugins are already bundled by `@lovable.dev/vite-tanstack-config` and must not be re-added — read this before touching Vite config.
- Not used anywhere in the codebase. Types are expressed via inline TypeScript annotations, not doc comments.
## Function Design
- Small components destructure a single inline object type as props: `function ProjectModal({ project, onClose }: { project: Project; onClose: () => void })` (`src/components/ProjectModal.tsx:4-10`)
- Optional props get default values in the destructure: `function Reveal({ children, delay = 0, className = "" }: {...})` (`src/components/Reveal.tsx:3-11`)
- Components return JSX directly; early-return guards are used for empty/error/loading states (e.g., `if (!project) return (...)` in `src/routes/projects/$projectId.tsx:15`)
- A component can deliberately return `null` as a placeholder/stub — `function Skills() { return null; }` (`src/routes/index.tsx:495-497`) — treat this as an intentionally unfinished section, not a bug, unless asked to implement it.
## Module Design
- Named exports throughout for components, hooks, and utils — `export function ComponentName(...)`, `export function useIsMobile()`, `export function cn(...)`
- Route modules export a single `Route` const created via `createFileRoute(...)` / `createRootRoute(...)` — `export const Route = createFileRoute("/")({ component: Index })` (`src/routes/index.tsx:11-13`)
- shadcn/ui components often export both the component and its variant function together — `export { Button, buttonVariants };` (`src/components/ui/button.tsx:47`)
- `React.forwardRef` + `displayName` assignment is the standard pattern for `ui/` primitives that need to forward a DOM ref: `const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((...) => {...}); Button.displayName = "Button";` (`src/components/ui/button.tsx:36-46`)
- Not used. There is no `index.ts` re-export file in `src/components/` or `src/components/ui/`; every consumer imports directly from the specific file (`@/components/ui/button`, `@/components/Reveal`, etc.).
## Styling Conventions (Tailwind)
- Tailwind v4 via `@tailwindcss/vite`, config-free (CSS-based theme in `src/styles.css`, referenced through `components.json` → `"css": "src/styles.css"`, `"cssVariables": true`, `"baseColor": "slate"`, `"style": "new-york"`, `"prefix": ""`)
- `cn(...)` helper (`src/lib/utils.ts`, wraps `clsx` + `tailwind-merge`) is the standard way to merge/conditionally apply class names in every component that accepts a `className` prop — always use `cn()` rather than manual string concatenation when a component needs to merge an incoming `className` with its own defaults.
- Custom CSS variables (theme tokens defined outside standard Tailwind palette) are referenced with `var(--plum)`, `var(--cream)`, `var(--sakura)`, `var(--gold)`, `var(--border)`, `var(--muted-foreground)` inside arbitrary-value Tailwind classes, e.g. `bg-[var(--cream)]`, `text-[var(--plum)]`, and via `color-mix()` for opacity blending: `style={{ background: "color-mix(in oklab, var(--plum) 70%, transparent)" }}` (`src/components/ProjectModal.tsx:24`). When adding new UI, reuse these existing tokens instead of introducing new raw hex colors.
- `class-variance-authority` (`cva`) is the pattern for components with style variants (`variant`, `size`, etc.) — see `buttonVariants` in `src/components/ui/button.tsx:7-30`.
## Language / Content Conventions
- UI copy and content data (`src/data/projects.ts`, contact form, page metadata in `src/routes/__root.tsx`) is written in **French** — this is a French-language personal portfolio. New user-facing strings should stay in French unless told otherwise.
- Code identifiers (variables, functions, types) are in English as usual; only rendered copy/content is French.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## System Overview
```text
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
- No client-side data-fetching layer despite `@tanstack/react-query` being a dependency — it is installed but not used anywhere in `src/`.
- No global state management (no Context providers, no store). All state is local `useState`/`useRef` inside route components.
- Heavy use of inline component definitions co-located inside route files rather than extracted into `src/components/` (e.g., `Nav`, `Hero`, `About`, `Projects`, `Contact`, `CustomCursor`, `ProjectCard` are all defined directly in `src/routes/index.tsx`).
- The shadcn/Radix `src/components/ui/` library is fully scaffolded (30+ primitives) but the actual page markup uses hand-rolled Tailwind classes and custom CSS classes (`quest-btn`, `hud-tag`, `ornament-card`, `chapter-title`, `reveal`, `petal`, `corner`) defined in `src/styles.css` rather than the shadcn components — the `ui/` folder is largely unused scaffolding, not wired into the live pages.
- Per-project rich content on the detail page is implemented as literal `project.id === "..."` conditional branches inside `src/routes/projects/$projectId.tsx` rather than as structured data — this couples page logic to specific project IDs and makes the route file very large (665 lines).
## Layers
- Purpose: Registers routes, renders the HTML document shell, provides global error/404 handling.
- Location: `src/router.tsx`, `src/routes/__root.tsx`, `src/routeTree.gen.ts`
- Contains: Router configuration, `<html>/<head>/<body>` shell, meta tags/fonts, default error and not-found components.
- Depends on: `@tanstack/react-router`, `@tanstack/react-start` (via Vite plugin), generated route tree.
- Used by: Vite/TanStack Start server entry (via the `@lovable.dev/vite-tanstack-config` preset) and `server.js` in production.
- Purpose: Page-level composition — hero, sections, forms, project listing/detail.
- Location: `src/routes/index.tsx`, `src/routes/projects/$projectId.tsx`
- Contains: Page-specific sub-components (defined inline), section markup, local UI state (filters, form state, animation refs).
- Depends on: `src/data/projects.ts`, `src/components/*`, `src/assets/*`, public assets under `/videos`, `/assets`.
- Used by: `routeTree.gen.ts` route registration only.
- Purpose: Reusable, presentational, cross-page building blocks.
- Location: `src/components/*.tsx` (top-level) and `src/components/ui/*.tsx` (shadcn/Radix primitives).
- Contains: `Reveal`, `Petals`, `CornerOrnament`, `ProjectModal`, and the full shadcn UI kit.
- Depends on: Radix UI packages, `class-variance-authority`, `src/lib/utils.ts` (`cn`).
- Used by: Route components (top-level components actively used; `ui/` kit currently unused by live pages).
- Purpose: Single source of truth for portfolio project content.
- Location: `src/data/projects.ts`
- Contains: `Project` TypeScript type and a hardcoded `projects: Project[]` array (image/video paths reference `public/assets` and `public/videos`).
- Depends on: Nothing (pure static data, no I/O).
- Used by: `src/routes/index.tsx` (grid + filtering), `src/routes/projects/$projectId.tsx` (detail lookup by `id`).
- Purpose: Design tokens (OKLCH color variables), Tailwind v4 theme wiring, and custom component classes for the site's visual language ("quest"/ornamental theme).
- Location: `src/styles.css` (imported via `src/routes/__root.tsx` as `appCss`).
- Contains: `@theme inline` token mappings, `:root` CSS custom properties, custom classes (`.quest-btn`, `.hud-tag`, `.ornament-card`, `.reveal`, `.petal`, `.corner`, cursor styling).
- Depends on: Tailwind CSS v4 (`@tailwindcss/vite`), `tw-animate-css`.
- Used by: All route/component markup via Tailwind utility classes and custom class names.
- Purpose: Serve the SSR build in different target environments.
- Location: `server.js` (plain Node `http` server for generic hosting/`npm start`), `wrangler.jsonc` (Cloudflare Workers deployment via `@tanstack/react-start/server-entry`), `vercel.json` (Vercel build/output config pointing at `dist/server`).
- Depends on: Built output in `dist/server/` (from `vite build`).
- Used by: Deployment targets only — not used in `dev` mode (`vite dev` runs its own dev server).
## Data Flow
### Primary Request Path (Home page)
### Project Detail Flow
- All state is component-local React `useState`/`useRef` (category filter, contact form status, cursor position, nav mobile-menu open/close, reveal-on-scroll visibility). No Context, no global store, no server cache despite `@tanstack/react-query` being installed.
## Key Abstractions
- Purpose: Represents one portfolio piece (id, title, category, thumbnail, media, optional video/url, descriptions, tools, role, `inProgress` flag).
- Examples: `src/data/projects.ts:1-14` (type), `src/data/projects.ts:16-133` (data).
- Pattern: Flat array of plain objects, looked up by `id`; asset paths point into `public/assets` / `public/videos` (absolute `/assets/...` URLs) or imported modules from `src/assets`.
- Purpose: Declarative scroll-triggered entrance animation.
- Examples: `src/components/Reveal.tsx`; used pervasively by wrapping section content, e.g. `src/routes/index.tsx:281`, `src/routes/projects/$projectId.tsx:37`.
- Pattern: `IntersectionObserver`-backed component that toggles a CSS class (`in`) once visible; consumers pass `delay` for staggered effect via `transitionDelay`.
- Purpose: Consistent themed styling (buttons, tags, cards, corners) without a component abstraction.
- Examples: `.quest-btn`, `.hud-tag`, `.ornament-card`, `.chapter-title` in `src/styles.css`, used directly as `className` strings throughout route files.
- Pattern: CSS-class-driven design system rather than React component variants (contrasts with the unused `class-variance-authority`-based `ui/button.tsx` pattern).
## Entry Points
- Location: `src/router.tsx`
- Triggers: Invoked by the TanStack Start Vite plugin (configured via `@lovable.dev/vite-tanstack-config` in `vite.config.ts`) to construct the router for both SSR and client hydration.
- Responsibilities: Registers `routeTree`, sets `scrollRestoration: true`, `defaultPreloadStaleTime: 0`, and a default error component.
- Location: `src/routes/__root.tsx`
- Triggers: Rendered once per request as the outermost route.
- Responsibilities: `<head>` metadata (SEO/OG tags, Google Fonts preconnect, favicon), global stylesheet injection (`appCss`), 404 fallback, mounts `<Scripts/>` for hydration.
- Location: `server.js`
- Triggers: `npm start` (`node server.js`).
- Responsibilities: Wraps the built `dist/server/index.js` fetch handler in a plain Node `http.createServer`, translating Node req/res to/from the Fetch API `Request`/`Response`.
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
### Unused/dead component still imported
### Large shadcn/Radix UI kit scaffolded but unused by live pages
## Error Handling
- `DefaultErrorComponent` (`src/router.tsx:4-55`) renders a generic "Something went wrong" screen, shows `error.message` only in `import.meta.env.DEV`, and offers "Try again" (`router.invalidate()` + `reset()`) and "Go home" actions.
- `NotFoundComponent` (`src/routes/__root.tsx:6-26`) handles unmatched routes with a styled 404 and a link home.
- `ProjectPage` handles a missing/unknown `projectId` locally with an inline "Projet introuvable" state (`src/routes/projects/$projectId.tsx:15-29`) rather than throwing a router-level not-found.
- `Contact`'s EmailJS submission wraps `emailjs.send(...)` in try/catch, sets a local `error` string on failure, and logs to `console.error` (`src/routes/index.tsx:523-533`).
## Cross-Cutting Concerns
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->

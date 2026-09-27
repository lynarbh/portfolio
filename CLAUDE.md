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
- **Stack** : TanStack Start + Tailwind v4 + config Lovable conservés, npm comme gestionnaire de paquets (bun non installé)
- **Identité** : palette et typos existantes conservées (direction hybride)
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- TypeScript 5.8.3 - Application code (`src/**/*.ts`, `src/**/*.tsx`), strict mode enabled (`tsconfig.json`)
- JavaScript (ESM) - `eslint.config.js`, `vite.config.ts` (`.ts` but plain config), two build/CI scripts under `scripts/` (`scripts/check-assets.mjs`, `scripts/inventory-assets.mjs`)
- Minified/compiled JS - `public/animate/*.js` (Adobe Animate CreateJS export; not hand-written source, not TypeScript, do not deep-edit)
## Runtime
- Node.js — pinned via `.nvmrc` = `24`; `package.json` `engines.node` requires `>=20.11`
- No standalone Node HTTP server in this codebase (previously `server.js` existed; it has been removed). The only production runtime is Cloudflare Workers.
- npm only. `package-lock.json` present (`lockfileVersion: 3`).
- No `bun.lockb`, no `bunfig.toml`, no `pnpm-lock.yaml`, no `yarn.lock` — the repo is npm-only, not dual-tracked.
## Frameworks
- React 19.2.0 (`react`, `react-dom`) - UI library
- TanStack Start 1.167.14 (`@tanstack/react-start`) - Full-stack React meta-framework (SSR, file-based routing, server entry consumed by Cloudflare Workers)
- TanStack Router 1.168.0 (`@tanstack/react-router`) - Routing; generated route tree at `src/routeTree.gen.ts` (do not hand-edit); router setup in `src/router.tsx`
- TanStack Router Plugin 1.167.10 (`@tanstack/router-plugin`) - Vite plugin for route-tree codegen, wired via `@lovable.dev/vite-tanstack-config`
- Tailwind CSS 4.2.1 (`tailwindcss`, `@tailwindcss/vite`) - CSS-first config, no `tailwind.config.*` file; theme defined in `src/styles.css` via `@theme inline`
- Not detected — no test runner (Jest/Vitest/Playwright), no `*.test.*`/`*.spec.*` files, no test script in `package.json`. Verification instead relies on `tsc --noEmit`, `vite build`, and the custom asset-guard scripts described below.
- Vite 7.3.1 - Bundler/dev server, config at `vite.config.ts`
- `@lovable.dev/vite-tanstack-config` 1.4.0 (devDependency) - Shared Vite config wrapper (Lovable.dev platform) bundling: `tanstackStart`, `viteReact`, `tailwindcss`, `tsConfigPaths`, the Cloudflare plugin (build-only), a dev-only component tagger, `VITE_*` env injection, the `@` path alias, React/TanStack dedupe, error-logger plugins, and sandbox port/host detection. Per the comment in `vite.config.ts`, these must NOT be re-added manually.
- `@cloudflare/vite-plugin` 1.25.5 - Cloudflare Workers build integration (invoked by the Lovable config, build-only)
- `vite-tsconfig-paths` 6.0.2 - Resolves the `@/*` → `./src/*` path alias from `tsconfig.json`
- ESLint 9.32.0 flat config (`eslint.config.js`) - `@eslint/js`, `typescript-eslint` 8.56.1, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-prettier` (+ `eslint-config-prettier`)
- Prettier 3.7.3 - Formatting, config at `.prettierrc` (100 print width, double quotes, semicolons, trailing commas), ignore list at `.prettierignore`
- `wrangler` (via `devDependencies`, resolved through `@cloudflare/vite-plugin`) - Cloudflare Workers CLI, used by `npm run check` (`wrangler deploy --dry-run`) and `npm run deploy`
- `knip` config present at `knip.json` (dependency/dead-code checker), ignoring `public/**`, `media-src/**`, `src/routeTree.gen.ts`, and treating `tailwindcss`/`@tanstack/router-plugin` as used even without a direct import
## Key Dependencies
- `@emailjs/browser` 4.4.1 - Client-side email delivery for the contact form (see INTEGRATIONS.md), used in `src/routes/index.tsx`
- `@tanstack/react-router` 1.168.0, `@tanstack/react-start` 1.167.14, `@tanstack/router-plugin` 1.167.10 - Routing/SSR framework
- `react` 19.2.0, `react-dom` 19.2.0 - UI runtime
- `tailwindcss` 4.2.1, `@tailwindcss/vite` 4.2.1 - Styling
- `vite-tsconfig-paths` 6.0.2 - Path alias resolution
- `@cloudflare/vite-plugin` 1.25.5 - Cloudflare build integration
- The entire shadcn/ui component kit at `src/components/ui/` and its supporting Radix UI packages (~25 `@radix-ui/react-*`), `zod`, `react-hook-form`, `@hookform/resolvers`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `sonner`, `embla-carousel-react`, `recharts`, `cmdk`, `vaul`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `date-fns`, `tw-animate-css`, `@tanstack/react-query` — none of these appear in the current `package.json` dependency list. `components.json` (shadcn CLI config) and `src/hooks/use-mobile.tsx`/`src/lib/utils.ts` are gone along with them — verify before assuming any shadcn/Radix pattern still applies.
- `bun.lockb`, `bunfig.toml`, `server.js`, `vercel.json` — all absent; the repo previously supported bun + a plain Node server + Vercel, none of that remains.
- `@types/node` 22.16.5, `@types/react` 19.2.0, `@types/react-dom` 19.2.0 - Type definitions
- `@vitejs/plugin-react` 5.2.0 - React Fast Refresh support for Vite (transitively required by the Lovable config)
- `globals` 15.15.0 - ESLint global variable definitions
## Custom Build/CI Scripts
- Any file over 25 MiB (Cloudflare's hard per-asset limit — never waivable)
- Any file over 20 MiB (`"size"` rule — waivable via exceptions file)
- Forbidden source-file extensions leaking into the deploy (`.fla`, `.ai`, `.tmp`, `.pdf`, `.psd`, `.xd`, `.aep`, `.prproj` — never waivable)
- Non-faststart MP4s (`moov` atom after `mdat`) — waivable via `"faststart"` rule
- Non-`yuv420p` pixel format video, detected via `ffprobe` if present on `PATH` — waivable via `"pix_fmt"` rule; if `ffprobe` is missing the check WARNs (not FAILs) unless run with `--strict` / `CHECK_ASSETS_STRICT=1`
- Also warns (10 MiB threshold), respects Cloudflare's `.assetsignore` glob syntax in `dist/client`, and reads waivers from `scripts/check-assets.exceptions.json`
## Configuration
- No `.env`/`.env.*` files present in the repo
- No `VITE_*` environment variables referenced in `src/` (only `import.meta.env.DEV` is used, a Vite built-in, in `src/router.tsx`)
- EmailJS credentials (public key, service ID, template ID) are hardcoded directly in `src/routes/index.tsx` rather than sourced from environment variables — see INTEGRATIONS.md for details and the security note
- `vite.config.ts` - Thin wrapper delegating to `@lovable.dev/vite-tanstack-config`'s `defineConfig()`; additional Vite options would go under `defineConfig({ vite: { ... } })`
- `tsconfig.json` - Target ES2022, bundler module resolution, strict mode, `@/*` path alias to `./src/*`, includes `src/**/*.ts(x)`, `vite.config.ts`, `eslint.config.js`. `noUnusedLocals`/`noUnusedParameters` are both `false` — dead code is not caught by the compiler.
- `components.json` — **removed**. The shadcn/ui scaffolding config no longer exists in the repo; do not assume shadcn conventions apply to new components.
- `wrangler.jsonc` - Cloudflare Workers config: app name `tanstack-start-app`, `compatibility_date: 2025-09-24`, `nodejs_compat` flag, entry `@tanstack/react-start/server-entry`. No `vercel.json` exists.
- `knip.json` - Dead-code/unused-dependency checker config (ignores `public/**`, `media-src/**`, `src/routeTree.gen.ts`)
## Platform Requirements
- Node `>=20.11` (`.nvmrc` pins `24`)
- `npm install` then `npm run dev`
- Cloudflare Workers only (`wrangler.jsonc`), built from the same `vite build` output (`dist/client` for static assets, `dist/server` for the SSR entry)
- Per-asset hard limit of 25 MiB enforced by Cloudflare and by `scripts/check-assets.mjs`
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- React components: `PascalCase.tsx` — `src/components/Reveal.tsx` (the only remaining top-level component; `Petals.tsx`, `CornerOrnament.tsx`, and `ProjectModal.tsx` were removed in the phase-1 cleanup).
- Route files: TanStack Router file-based routing, lower-case / `$param` dynamic segments — `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/projects/$projectId.tsx`.
- Data modules: `camelCase.ts` — `src/data/projects.ts`.
- Generated files are not hand-edited: `src/routeTree.gen.ts` (TanStack Router codegen, excluded from Prettier via `.prettierignore`).
- Node ESM scripts under `scripts/` use `kebab-case.mjs` — `scripts/check-assets.mjs`, `scripts/inventory-assets.mjs`. They are run with `node`, and are formatted/linted like the rest of the repo (not excluded in `.prettierignore` or `eslint.config.js`).
- **No `src/lib/`, `src/hooks/`, or `src/components/ui/` directories exist anymore** — the shadcn/Radix UI kit, the `cn()` class-merge helper, and the `useIsMobile` hook were all removed in the phase-1 cleanup along with their dependencies (`class-variance-authority`, `clsx`, `tailwind-merge`, `@radix-ui/*`, etc.). `components.json` (shadcn config) still exists in the repo root as a leftover — do not use it to justify re-adding the `ui/` kit without an explicit decision to do so.
- camelCase for functions — `handleSubmit` (`src/routes/index.tsx:317`), `getRouter` (`src/router.tsx:57`).
- PascalCase for React components, including private components co-located inside route files — `Nav`, `Hero`, `About`, `ProjectCard`, `Projects`, `Contact`, `Index` (all in `src/routes/index.tsx`), `NotFoundComponent`/`RootShell`/`RootComponent` (`src/routes/__root.tsx`), `DefaultErrorComponent` (`src/router.tsx`), `ProjectPage` (`src/routes/projects/$projectId.tsx`).
- **Inline sub-components living inside route files is the dominant pattern**, not a shortcut for a couple of cases — there is currently no other place components live except `src/components/Reveal.tsx`. When adding new page-level UI, prefer adding another inline function component to the relevant route file unless the piece is reused across routes, in which case extract it to `src/components/PascalCase.tsx`.
- camelCase for local variables and function params — `formRef`, `templateParams`, `projectId`, `videoRef` (`src/routes/index.tsx`).
- `SCREAMING_SNAKE_CASE` for module-level constants — `HERO_VIDEO`, `HERO_FALLBACK`, `PORTRAIT`, `CATEGORIES`, `SKILL_TAGS` (`src/routes/index.tsx:11-21`).
- `as const` on literal arrays to derive a union type — `const CATEGORIES = [...] as const; type Category = (typeof CATEGORIES)[number];` (`src/routes/index.tsx:15-16`).
- PascalCase for types/interfaces — `Project` (`src/data/projects.ts:1-14`), `Category` (`src/routes/index.tsx:16`).
- Domain types are defined alongside their data — `src/data/projects.ts` exports both the `Project` type and the `projects` array from the same file.
- Prop types are inlined directly in the function signature for components rather than declared as a separate named type — `function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string })` (`src/components/Reveal.tsx:3-11`), `function ProjectCard({ p }: { p: Project })` (`src/routes/index.tsx:207`).
## Code Style
- Prettier, config in `.prettierrc`: `printWidth: 100`, `semi: true`, `singleQuote: false` (double quotes), `trailingComma: "all"`.
- `.prettierignore` excludes `node_modules`, `dist`, `.output`, `.vinxi`, `pnpm-lock.yaml`, `package-lock.json`, `routeTree.gen.ts`, `public`, `media-src`.
- Run via `npm run format` → `prettier --write .`.
- **`npm run lint` is currently RED**: `npx eslint .` reports 609 errors + 1 warning, virtually all `prettier/prettier` formatting violations accumulated in `.tsx`/`.ts` files (largely in `src/routes/projects/$projectId.tsx`, the largest/most-edited file). This is a known, tracked issue (review finding IN-10) — **do not treat a red `npm run lint` as a regression you introduced**; treat it as pre-existing debt. `npm run check` deliberately does **not** run `lint` (see Testing/verification story in `TESTING.md`), so lint redness does not block `npm run check` / `npm run deploy`.
- When touching a file with pre-existing Prettier violations, prefer running `prettier --write <file>` (or the whole repo via `npm run format`) rather than hand-formatting to match the 100-column/double-quote/trailing-comma rules exactly.
- ESLint flat config at `eslint.config.js`, built on `@eslint/js` recommended + `typescript-eslint` recommended.
- `{ ignores: ["dist", ".output", ".vinxi", "public", "media-src", ".wrangler"] }` — note `public/animate/` (compiled Adobe Animate export) is excluded via the broader `public` ignore, so it is never linted or formatted.
- `eslint-plugin-react-hooks` recommended rules enabled (hooks rules of hooks — deps arrays, no conditional hooks).
- `eslint-plugin-react-refresh`: `"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]` — warns if a file exports both a component and non-component values, unless the extra export is a constant.
- `eslint-plugin-prettier` (via `eslintPluginPrettier` recommended config, last in the `tseslint.config(...)` array) runs Prettier as an ESLint rule — formatting issues surface as lint errors, which is the source of the 609 pre-existing errors above.
- **Notably disabled: `"@typescript-eslint/no-unused-vars": "off"`** — unused variables/imports are NOT flagged by lint. Do not rely on lint to catch dead code or unused imports; check manually, or use `npx knip` (see below).
- `knip.json` exists at the repo root (`ignore: ["public/**", "media-src/**", "src/routeTree.gen.ts"]`, `ignoreDependencies: ["tailwindcss", "@tanstack/router-plugin"]`) for finding unused files/exports/dependencies. Knip is **not** an installed devDependency — run it via `npx knip` (no local `node_modules/.bin/knip`), and treat any run as a manual audit step, not part of `npm run check`.
- `tsconfig.json`: `"strict": true` is enabled, **but** `"noUnusedLocals": false` and `"noUnusedParameters": false` — unused locals/params are allowed by the compiler too. Combined with the disabled ESLint rule above, unused code is caught by neither tool automatically — be deliberate about removing dead code manually (or run `npx knip`).
- `target: ES2022`, `moduleResolution: "Bundler"`, `jsx: "react-jsx"`, `noEmit: true` (Vite handles transpilation).
- Path alias `@/*` → `./src/*` (defined in `tsconfig.json`, consumed via `vite-tsconfig-paths` wired through `@lovable.dev/vite-tanstack-config`). It is also declared in `components.json` (`@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`) — those specific subpaths no longer exist in `src/`, since `components.json` is an unused leftover from before the shadcn/ui kit was removed.
## Import Organization
- No enforced import-sorting rule/plugin is configured. Observed convention in `src/routes/index.tsx:1-5`: external packages first (`@tanstack/react-router`, `react`), then `@/` aliased internal modules (`@/data/projects`, `@/components/Reveal`), then other third-party packages used only by that file (`@emailjs/browser`). Follow this loose grouping (external → `@/` internal → other externals) for new files rather than introducing a stricter sort order.
- `@/*` maps to `src/*`. Always prefer `@/...` imports over deep relative paths (`../../../`) for anything under `src/` — e.g. `import { projects, type Project } from "@/data/projects";` and `import { Reveal } from "@/components/Reveal";` (`src/routes/index.tsx:3-4`, `src/routes/projects/$projectId.tsx:2-3`).
## Error Handling
- Async operations that can fail (network calls) use `try/catch/finally` with local component state for `loading`/`error`/`success` flags — `Contact`'s EmailJS submission, `src/routes/index.tsx:317-342`: sets `loading`/`error`/`sent` via `useState`, calls `emailjs.send(...)` inside `try`, sets a French error string in `catch`, and resets `loading` in `finally`.
- User-facing error messages are French, plain strings held in `useState<string | null>` — no error object, no toast library used for form errors (`sonner` is not a dependency in this codebase; it was removed with the shadcn `ui/` kit).
- Fire-and-forget promises use `.catch()` inline rather than a full try/catch when the failure is expected/ignorable — the autoplay rejection in `Hero`, `src/routes/index.tsx:70-76`: `video.play()` → `playPromise.catch(() => { /* Autoplay blocked - that's OK, poster image displays */ })`.
- Route-level "not found" states are handled by returning a fallback UI directly from the component rather than throwing — `ProjectPage` in `src/routes/projects/$projectId.tsx:14-28` checks `if (!project) return (...)` with a "Retour au portfolio" button that calls `navigate({ to: "/" })`.
- Global fallback for uncaught render errors is `DefaultErrorComponent` in `src/router.tsx:4-55`, wired via `createRouter({ defaultErrorComponent: DefaultErrorComponent })`. It shows a generic English "Something went wrong" message, exposes `error.message` only when `import.meta.env.DEV` is true, and offers "Try again" (`router.invalidate()` + `reset()`) and "Go home" actions.
- 404s are handled by TanStack Router's `notFoundComponent` on the root route — `NotFoundComponent` in `src/routes/__root.tsx:6-26`, also English copy ("Page not found").
- Note the language inconsistency: `Contact`'s error string is French ("Erreur lors de l'envoi. Veuillez réessayer.") while the router-level `DefaultErrorComponent`/`NotFoundComponent` are English. Match whichever layer you are editing rather than introducing a third style.
- Programmer errors (invariant violations) are not currently present in `src/` (the `Canvas context unavailable` throw and shadcn context-hook throws documented in older maps belonged to code removed in the phase-1 cleanup). If you add a new invariant, prefer `throw new Error("...")` synchronously, matching the style used elsewhere in the TanStack ecosystem code this project depends on.
## Logging
- `console.error(err)` is used only in the one catch block that surfaces a user-facing error — `src/routes/index.tsx:338` inside `Contact`'s `handleSubmit`.
- Do not scatter `console.log` for debugging into committed code; none currently exists in `src/`.
## Comments
- Sparse overall. Most files have no comments at all.
- Section-divider comments group the flat data array in `src/data/projects.ts` by category, e.g. `// --- SITE WEB ---`, `// --- BRANDING ---`, `// --- VIDÉO ---`, `// --- SAE ---` (`src/data/projects.ts:17,35,48,62,86,110`). Follow this pattern when adding new project entries — add new items under (or create) the matching category divider comment; category dividers are French, in caps.
- `scripts/*.mjs` use a short block comment at the top of the file explaining purpose, side effects, and any non-obvious flag (`--strict` / `CHECK_ASSETS_STRICT=1` in `scripts/check-assets.mjs:1-8`; the NFC/percent-decoding rationale in `scripts/inventory-assets.mjs:1-4`). Follow this convention for new scripts under `scripts/`.
- One leftover maintenance-artifact comment remains: `import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici` (`src/routes/index.tsx:1`) — this is a stray editing note, not documentation. Do not use it as a model; prefer no comment, or a clear French/English explanation if genuinely needed.
- `vite.config.ts` carries a block comment explaining which plugins are already bundled by `@lovable.dev/vite-tanstack-config` and must not be re-added — read it before touching Vite config.
- JSDoc/TSDoc is not used anywhere. Types are expressed via inline TypeScript annotations only.
## Function Design
- Small components destructure a single inline object type as props — `function ProjectCard({ p }: { p: Project })` (`src/routes/index.tsx:207`), `function Reveal({ children, delay = 0, className = "" }: {...})` (`src/components/Reveal.tsx:3-11`).
- Optional props get default values in the destructure — `delay = 0`, `className = ""` in `Reveal` (`src/components/Reveal.tsx:5-6`).
- Components return JSX directly; early-return guards are used for empty/error/loading states — `if (!project) return (...)` in `src/routes/projects/$projectId.tsx:14`.
- No component currently returns `null` as a deliberate stub (the previous `function Skills() { return null; }` placeholder no longer exists — the `Skills` section was folded into `About`'s `SKILL_TAGS` list, `src/routes/index.tsx:18-21,158-162`).
## Module Design
- Named exports throughout for components, hooks, and data — `export function Reveal(...)`, `export const projects: Project[]`, `export type Project`.
- Route modules export a single `Route` const created via `createFileRoute(...)` / `createRootRoute(...)` — `export const Route = createFileRoute("/")({ component: Index })` (`src/routes/index.tsx:7-9`).
- No barrel/`index.ts` re-export files anywhere in `src/`. Every consumer imports directly from the specific file (`@/components/Reveal`, `@/data/projects`).
## Styling Conventions (Tailwind + custom CSS)
- Tailwind v4 via `@tailwindcss/vite`, config-free (CSS-based theme in `src/styles.css`, referenced through `components.json` → `"css": "src/styles.css"`; this `components.json` entry is now the only live link between that leftover config file and the real stylesheet).
- **No `cn()` helper exists anymore** — it was deleted along with `src/lib/utils.ts` in the phase-1 cleanup, together with its `clsx`/`tailwind-merge` dependencies. Do not import `@/lib/utils` or reintroduce `cn()` without first re-adding the dependency and file; conditional class strings are currently composed with plain template literals, e.g. `` `hud-tag transition ${filter === c ? "!bg-[var(--plum)] ..." : "hover:!bg-[var(--sakura)]/40"}` `` (`src/routes/index.tsx:283-287`).
- Custom CSS classes carrying the site's "quest"/ornamental visual language are defined in `src/styles.css` and used directly as class names in JSX: `.quest-btn`, `.quest-card`, `.hud-tag`, `.chapter-title`, `.ornament-card`, `.reveal`/`.reveal.in`, `.grain`, `.portrait-wrapper`/`.portrait-image`. When adding new UI, reuse these existing classes rather than inventing new one-off custom classes, unless the new element is genuinely a new visual pattern.
- Custom CSS variables (theme tokens outside the standard Tailwind palette) are referenced with `var(--plum)`, `var(--cream)`, `var(--sakura)`, `var(--gold)`, `var(--muted-foreground)` inside arbitrary-value Tailwind classes, e.g. `bg-[var(--cream)]`, `text-[var(--plum)]`, and via `color-mix()` for opacity blending: `background: color-mix(in oklab, var(--plum) 70%, transparent)` (`src/styles.css:124`). All tokens are declared as OKLCH values in `:root` and re-mapped in `@theme inline` (`src/styles.css:6-75`). Reuse these existing tokens instead of introducing new raw hex colors.
- `class-variance-authority` (`cva`) is **no longer a dependency** — the previous `buttonVariants` pattern it powered lived only in the removed `src/components/ui/button.tsx`. There is currently no variant-based styling abstraction in the codebase; style variants are expressed with inline ternaries in template-literal class strings (see the filter-button example above).
## Language / Content Conventions
- UI copy and content data (`src/data/projects.ts`, the contact form, most of `src/routes/index.tsx` and `src/routes/projects/$projectId.tsx`) is written in **French** — this is a French-language personal portfolio. New user-facing strings should stay in French unless told otherwise.
- The router-level chrome (`src/router.tsx`'s `DefaultErrorComponent`, `src/routes/__root.tsx`'s `NotFoundComponent` and `<head>` `og:`/`twitter:` meta) is in **English** — an inconsistency inherited from the original scaffold. Match the existing language of whichever component you are editing rather than unifying it unprompted.
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
- No client-side data-fetching layer: `@tanstack/react-query` is **not** a dependency in `package.json` (removed since the previous map) — there was never any active usage in `src/`.
- No global state management (no Context providers, no store). All state is local `useState`/`useRef` inside route components (category filter, contact form status, nav open/close, `Reveal`'s visibility flag).
- Heavy use of inline component definitions co-located inside route files rather than extracted into `src/components/` — `Nav`, `Hero`, `About`, `ProjectCard`, `Projects`, `Contact` are all defined directly in `src/routes/index.tsx`.
- `src/components/` now contains a single file (`Reveal.tsx`). The previously-scaffolded shadcn/Radix `src/components/ui/` kit, `src/lib/`, `src/hooks/`, and `src/assets/` directories have been removed entirely as dead code during the phase-1 cleanup — confirmed absent via `find src -type f`.
- All page markup uses hand-rolled Tailwind utility classes plus custom CSS classes defined in `src/styles.css` (`quest-btn`, `hud-tag`, `ornament-card`, `chapter-title`, `reveal`, `corner`, `portrait-wrapper`, `grain`). There is no component-variant system (no `cva`/shadcn primitives left in the tree).
- Per-project rich content on the detail page is implemented as literal `project.id === "..."` conditional branches inside `src/routes/projects/$projectId.tsx` (four branches: `business-card-mockup`, `clip`, `sae-2`, `sae-1`) rather than as structured data — this couples page logic to specific project IDs and makes the route file the largest in the codebase (647 lines).
- The `sae-2` branch embeds a third-party interactive export (Adobe Animate, `public/animate/1_MOHAMED.html`) via `<iframe>`, which itself chains to five further HTML/JS scenes (`1_LYNA`, `2_IMAD`, `2_CLEMENT`, `2_SOPHIA`, `3_ALBERTIN`) navigated through `window.open` inside that compiled export — this sub-tree is opaque, vendored, non-source-controlled-in-spirit content, not authored React code.
## Layers
- Purpose: Registers routes, renders the HTML document shell, provides global error/404 handling.
- Location: `src/router.tsx`, `src/routes/__root.tsx`, `src/routeTree.gen.ts`
- Contains: Router configuration (`scrollRestoration: true`, `defaultPreloadStaleTime: 0`), `<html>/<head>/<body>` shell, meta tags/fonts (`Cormorant Garamond`, `DM Sans` via Google Fonts `<link>`), favicon handling, default error and not-found components.
- Depends on: `@tanstack/react-router`, `@tanstack/react-start` (via the Vite plugin bundled in `@lovable.dev/vite-tanstack-config`), the generated route tree.
- Used by: The Vite/TanStack Start server entry in production (Cloudflare Workers, per `wrangler.jsonc`) and the dev server (`vite dev`).
- Purpose: Page-level composition — hero, sections, forms, project listing/detail.
- Location: `src/routes/index.tsx`, `src/routes/projects/$projectId.tsx`
- Contains: Page-specific sub-components (defined inline), section markup, local UI state (filters, form state, cursor/scroll wiring — none of the previous cursor animation code was found in the current `index.tsx`).
- Depends on: `src/data/projects.ts`, `src/components/Reveal.tsx`, static paths under `/assets`, `/videos`, `/media`, `/animate`.
- Used by: `src/routeTree.gen.ts` route registration only.
- Invariant for this milestone: no file under `src/routes/` is created, deleted, or renamed, so `routeTree.gen.ts` stays stable — new route-level work must reuse the two existing route files.
- Purpose: Reusable, presentational, cross-page building block(s).
- Location: `src/components/Reveal.tsx` (the only file in this directory)
- Contains: `Reveal`, a scroll-triggered entrance-animation wrapper.
- Depends on: React (`useEffect`, `useRef`, `useState`), browser `IntersectionObserver`.
- Used by: Both route components, wrapping nearly every section/block for staggered fade-in.
- Purpose: Single source of truth for portfolio project content.
- Location: `src/data/projects.ts`
- Contains: `Project` TypeScript type and a hardcoded `projects: Project[]` array (9 entries across categories `Site Web`, `Branding`, `Photo`, `Illustration`, `Vidéo`, `Projet universitaire`); image/video paths reference `public/assets` and `public/videos` as absolute `/...` URLs, or external YouTube embed URLs for two video entries.
- Depends on: Nothing (pure static data, no I/O).
- Used by: `src/routes/index.tsx` (grid + category filtering), `src/routes/projects/$projectId.tsx` (detail lookup by `id`, and per-`id` branch dispatch).
- Purpose: Design tokens (OKLCH color variables), Tailwind v4 theme wiring, and custom component classes for the site's visual language.
- Location: `src/styles.css` (236 lines; imported via `src/routes/__root.tsx` as `appCss`, injected as a `<link rel="stylesheet">` using Vite's `?url` import).
- Contains: `@theme inline` token mappings, `:root` CSS custom properties (`--cream`, `--sakura`, `--rose-dust`, `--mint-sage`, `--plum`, `--gold`, plus shadow tokens), custom classes (`.quest-btn`, `.hud-tag`, `.ornament-card`, `.reveal`, `.chapter-title`, `.corner`, `.grain`, `.portrait-wrapper`).
- Depends on: Tailwind CSS v4 (`@tailwindcss/vite`), `@source "../src"` directive (no separate `tailwind.config.*`).
- Used by: All route/component markup via Tailwind utility classes and the custom class names above.
- Purpose: Quality gates for the "lite" milestone — enforce the Cloudflare 25 MiB asset ceiling, catch dead/unreferenced media, and keep video encoding web-friendly.
- Location: `scripts/check-assets.mjs` (post-build guard, wired into `npm run check`), `scripts/check-assets.exceptions.json` (waiver list), `scripts/inventory-assets.mjs` (manual audit, not wired into any npm script).
- Depends on: `dist/client` build output (`check-assets.mjs` errors out if missing), optional `ffprobe` on `PATH` for the `pix_fmt` rule.
- Used by: `npm run check` (`tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run`) and `npm run deploy`.
- Purpose: Serve the SSR build on Cloudflare Workers — this is now the **only** deployment target.
- Location: `wrangler.jsonc` (`compatibility_date: 2025-09-24`, `nodejs_compat` flag, `main: "@tanstack/react-start/server-entry"`).
- Depends on: Built output produced by `vite build` (delegated to `@lovable.dev/vite-tanstack-config`, which bundles the `@cloudflare/vite-plugin`).
- Note: The standalone Node `server.js` HTTP server and `vercel.json` described in older documentation **no longer exist in this repository** (verified via `git ls-files` and direct `ls`) — the dual-deployment-target architecture has been retired in favor of Cloudflare-only.
## Data Flow
### Primary Request Path (Home page)
### Project Detail Flow
- All state is component-local `useState`/`useRef` (category filter, contact form `sent`/`loading`/`error`, `Nav`'s mobile-menu `open`, `Reveal`'s `seen` visibility flag). No Context, no global store, no server cache — `@tanstack/react-query` is not present in `package.json` at all in the current stack.
## Key Abstractions
- Purpose: Represents one portfolio piece (id, title, category, thumbnail, optional `media[]`/`video`/`url`, descriptions, tools, role, `inProgress` flag).
- Examples: type at `src/data/projects.ts:1-14`; data array at `src/data/projects.ts:16-133`.
- Pattern: Flat array of plain objects, looked up by `id`; asset paths are absolute `/assets/...` or `/videos/...` URL strings (no imported/bundled modules — `src/assets/` no longer exists), or external YouTube embed URLs for two entries (`stop-motion`, `clip`).
- Purpose: Declarative scroll-triggered entrance animation.
- Examples: `src/components/Reveal.tsx`; used pervasively by wrapping section content, e.g. `src/routes/index.tsx:105,110,115,132,147,167,266,277,297,350,366`, `src/routes/projects/$projectId.tsx:35,44,55,82,174,294,513,583,629`.
- Pattern: `IntersectionObserver`-backed component that toggles a CSS class (`in`) once visible (`threshold: 0.12`, one-shot via `io.unobserve`); consumers pass a numeric `delay` prop for staggered effect via inline `transitionDelay` style.
- Purpose: Consistent themed styling (buttons, tags, cards, corners) without a component abstraction layer.
- Examples: `.quest-btn`, `.hud-tag`, `.ornament-card`, `.chapter-title`, `.corner`, `.grain` in `src/styles.css`, used directly as `className` strings throughout both route files.
- Pattern: CSS-class-driven design system rather than React component variants — there is no `class-variance-authority` usage anywhere in the current `src/` tree (the dependency and the `ui/button.tsx`-style pattern have both been removed).
## Entry Points
- Location: `src/router.tsx`
- Triggers: Invoked by the TanStack Start Vite plugin (configured via `@lovable.dev/vite-tanstack-config` in `vite.config.ts`) to construct the router for both SSR and client hydration.
- Responsibilities: Registers `routeTree`, sets `scrollRestoration: true`, `defaultPreloadStaleTime: 0`, and a `defaultErrorComponent`.
- Location: `src/routes/__root.tsx`
- Triggers: Rendered once per request as the outermost route.
- Responsibilities: `<head>` metadata (SEO/OG/Twitter tags, Google Fonts preconnect + stylesheet, favicon links), global stylesheet injection (`appCss`), a runtime cache-busted favicon re-assignment (`RootComponent`'s `useEffect`, `src/routes/__root.tsx:72-77`), 404 fallback, mounts `<Scripts/>` for hydration.
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
### Third-party vendored export embedded via iframe, invisible to the build's asset checks
### Hardcoded third-party credentials in client bundle
## Error Handling
- `DefaultErrorComponent` (`src/router.tsx:4-55`) renders a generic "Something went wrong" screen, shows `error.message` only when `import.meta.env.DEV` is true, and offers "Try again" (`router.invalidate()` + `reset()`) and "Go home" actions.
- `NotFoundComponent` (`src/routes/__root.tsx:6-26`) handles unmatched routes with a styled 404 and a link home.
- `ProjectPage` handles a missing/unknown `projectId` locally with an inline "Projet introuvable" state (`src/routes/projects/$projectId.tsx:14-28`) rather than throwing a router-level not-found.
- `Contact`'s EmailJS submission wraps `emailjs.send(...)` in try/catch/finally, sets a local French-language `error` string on failure, and logs to `console.error` (`src/routes/index.tsx:331-341`).
- Fire-and-forget promises use `.catch()` inline rather than a full try/catch when the failure is expected/ignorable — the hero `<video>` autoplay-block rejection is swallowed with a comment explaining why (`src/routes/index.tsx:70-75`).
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

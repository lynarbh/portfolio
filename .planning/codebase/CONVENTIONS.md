---
last_mapped_commit: 163c48737bad29b01210096abf6fb8eeec45c5a0
---

# Coding Conventions

**Analysis Date:** 2026-09-27

## Naming Patterns

**Files:**
- React components: `PascalCase.tsx` — `src/components/Reveal.tsx` (the only remaining top-level component; `Petals.tsx`, `CornerOrnament.tsx`, and `ProjectModal.tsx` were removed in the phase-1 cleanup).
- Route files: TanStack Router file-based routing, lower-case / `$param` dynamic segments — `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/projects/$projectId.tsx`.
- Data modules: `camelCase.ts` — `src/data/projects.ts`.
- Generated files are not hand-edited: `src/routeTree.gen.ts` (TanStack Router codegen, excluded from Prettier via `.prettierignore`).
- Node ESM scripts under `scripts/` use `kebab-case.mjs` — `scripts/check-assets.mjs`, `scripts/inventory-assets.mjs`. They are run with `node`, and are formatted/linted like the rest of the repo (not excluded in `.prettierignore` or `eslint.config.js`).
- **No `src/lib/`, `src/hooks/`, or `src/components/ui/` directories exist anymore** — the shadcn/Radix UI kit, the `cn()` class-merge helper, and the `useIsMobile` hook were all removed in the phase-1 cleanup along with their dependencies (`class-variance-authority`, `clsx`, `tailwind-merge`, `@radix-ui/*`, etc.). `components.json` (shadcn config) still exists in the repo root as a leftover — do not use it to justify re-adding the `ui/` kit without an explicit decision to do so.

**Functions / hooks:**
- camelCase for functions — `handleSubmit` (`src/routes/index.tsx:317`), `getRouter` (`src/router.tsx:57`).

**Components:**
- PascalCase for React components, including private components co-located inside route files — `Nav`, `Hero`, `About`, `ProjectCard`, `Projects`, `Contact`, `Index` (all in `src/routes/index.tsx`), `NotFoundComponent`/`RootShell`/`RootComponent` (`src/routes/__root.tsx`), `DefaultErrorComponent` (`src/router.tsx`), `ProjectPage` (`src/routes/projects/$projectId.tsx`).
- **Inline sub-components living inside route files is the dominant pattern**, not a shortcut for a couple of cases — there is currently no other place components live except `src/components/Reveal.tsx`. When adding new page-level UI, prefer adding another inline function component to the relevant route file unless the piece is reused across routes, in which case extract it to `src/components/PascalCase.tsx`.

**Variables:**
- camelCase for local variables and function params — `formRef`, `templateParams`, `projectId`, `videoRef` (`src/routes/index.tsx`).
- `SCREAMING_SNAKE_CASE` for module-level constants — `HERO_VIDEO`, `HERO_FALLBACK`, `PORTRAIT`, `CATEGORIES`, `SKILL_TAGS` (`src/routes/index.tsx:11-21`).
- `as const` on literal arrays to derive a union type — `const CATEGORIES = [...] as const; type Category = (typeof CATEGORIES)[number];` (`src/routes/index.tsx:15-16`).

**Types:**
- PascalCase for types/interfaces — `Project` (`src/data/projects.ts:1-14`), `Category` (`src/routes/index.tsx:16`).
- Domain types are defined alongside their data — `src/data/projects.ts` exports both the `Project` type and the `projects` array from the same file.
- Prop types are inlined directly in the function signature for components rather than declared as a separate named type — `function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string })` (`src/components/Reveal.tsx:3-11`), `function ProjectCard({ p }: { p: Project })` (`src/routes/index.tsx:207`).

## Code Style

**Formatting:**
- Prettier, config in `.prettierrc`: `printWidth: 100`, `semi: true`, `singleQuote: false` (double quotes), `trailingComma: "all"`.
- `.prettierignore` excludes `node_modules`, `dist`, `.output`, `.vinxi`, `pnpm-lock.yaml`, `package-lock.json`, `routeTree.gen.ts`, `public`, `media-src`.
- Run via `npm run format` → `prettier --write .`.
- **`npm run lint` is currently RED**: `npx eslint .` reports 609 errors + 1 warning, virtually all `prettier/prettier` formatting violations accumulated in `.tsx`/`.ts` files (largely in `src/routes/projects/$projectId.tsx`, the largest/most-edited file). This is a known, tracked issue (review finding IN-10) — **do not treat a red `npm run lint` as a regression you introduced**; treat it as pre-existing debt. `npm run check` deliberately does **not** run `lint` (see Testing/verification story in `TESTING.md`), so lint redness does not block `npm run check` / `npm run deploy`.
- When touching a file with pre-existing Prettier violations, prefer running `prettier --write <file>` (or the whole repo via `npm run format`) rather than hand-formatting to match the 100-column/double-quote/trailing-comma rules exactly.

**Linting:**
- ESLint flat config at `eslint.config.js`, built on `@eslint/js` recommended + `typescript-eslint` recommended.
- `{ ignores: ["dist", ".output", ".vinxi", "public", "media-src", ".wrangler"] }` — note `public/animate/` (compiled Adobe Animate export) is excluded via the broader `public` ignore, so it is never linted or formatted.
- `eslint-plugin-react-hooks` recommended rules enabled (hooks rules of hooks — deps arrays, no conditional hooks).
- `eslint-plugin-react-refresh`: `"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]` — warns if a file exports both a component and non-component values, unless the extra export is a constant.
- `eslint-plugin-prettier` (via `eslintPluginPrettier` recommended config, last in the `tseslint.config(...)` array) runs Prettier as an ESLint rule — formatting issues surface as lint errors, which is the source of the 609 pre-existing errors above.
- **Notably disabled: `"@typescript-eslint/no-unused-vars": "off"`** — unused variables/imports are NOT flagged by lint. Do not rely on lint to catch dead code or unused imports; check manually, or use `npx knip` (see below).
- `knip.json` exists at the repo root (`ignore: ["public/**", "media-src/**", "src/routeTree.gen.ts"]`, `ignoreDependencies: ["tailwindcss", "@tanstack/router-plugin"]`) for finding unused files/exports/dependencies. Knip is **not** an installed devDependency — run it via `npx knip` (no local `node_modules/.bin/knip`), and treat any run as a manual audit step, not part of `npm run check`.

**TypeScript:**
- `tsconfig.json`: `"strict": true` is enabled, **but** `"noUnusedLocals": false` and `"noUnusedParameters": false` — unused locals/params are allowed by the compiler too. Combined with the disabled ESLint rule above, unused code is caught by neither tool automatically — be deliberate about removing dead code manually (or run `npx knip`).
- `target: ES2022`, `moduleResolution: "Bundler"`, `jsx: "react-jsx"`, `noEmit: true` (Vite handles transpilation).
- Path alias `@/*` → `./src/*` (defined in `tsconfig.json`, consumed via `vite-tsconfig-paths` wired through `@lovable.dev/vite-tanstack-config`). It is also declared in `components.json` (`@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`) — those specific subpaths no longer exist in `src/`, since `components.json` is an unused leftover from before the shadcn/ui kit was removed.

## Import Organization

**Order:**
- No enforced import-sorting rule/plugin is configured. Observed convention in `src/routes/index.tsx:1-5`: external packages first (`@tanstack/react-router`, `react`), then `@/` aliased internal modules (`@/data/projects`, `@/components/Reveal`), then other third-party packages used only by that file (`@emailjs/browser`). Follow this loose grouping (external → `@/` internal → other externals) for new files rather than introducing a stricter sort order.

**Path Aliases:**
- `@/*` maps to `src/*`. Always prefer `@/...` imports over deep relative paths (`../../../`) for anything under `src/` — e.g. `import { projects, type Project } from "@/data/projects";` and `import { Reveal } from "@/components/Reveal";` (`src/routes/index.tsx:3-4`, `src/routes/projects/$projectId.tsx:2-3`).

## Error Handling

**Patterns:**
- Async operations that can fail (network calls) use `try/catch/finally` with local component state for `loading`/`error`/`success` flags — `Contact`'s EmailJS submission, `src/routes/index.tsx:317-342`: sets `loading`/`error`/`sent` via `useState`, calls `emailjs.send(...)` inside `try`, sets a French error string in `catch`, and resets `loading` in `finally`.
- User-facing error messages are French, plain strings held in `useState<string | null>` — no error object, no toast library used for form errors (`sonner` is not a dependency in this codebase; it was removed with the shadcn `ui/` kit).
- Fire-and-forget promises use `.catch()` inline rather than a full try/catch when the failure is expected/ignorable — the autoplay rejection in `Hero`, `src/routes/index.tsx:70-76`: `video.play()` → `playPromise.catch(() => { /* Autoplay blocked - that's OK, poster image displays */ })`.
- Route-level "not found" states are handled by returning a fallback UI directly from the component rather than throwing — `ProjectPage` in `src/routes/projects/$projectId.tsx:14-28` checks `if (!project) return (...)` with a "Retour au portfolio" button that calls `navigate({ to: "/" })`.
- Global fallback for uncaught render errors is `DefaultErrorComponent` in `src/router.tsx:4-55`, wired via `createRouter({ defaultErrorComponent: DefaultErrorComponent })`. It shows a generic English "Something went wrong" message, exposes `error.message` only when `import.meta.env.DEV` is true, and offers "Try again" (`router.invalidate()` + `reset()`) and "Go home" actions.
- 404s are handled by TanStack Router's `notFoundComponent` on the root route — `NotFoundComponent` in `src/routes/__root.tsx:6-26`, also English copy ("Page not found").
- Note the language inconsistency: `Contact`'s error string is French ("Erreur lors de l'envoi. Veuillez réessayer.") while the router-level `DefaultErrorComponent`/`NotFoundComponent` are English. Match whichever layer you are editing rather than introducing a third style.
- Programmer errors (invariant violations) are not currently present in `src/` (the `Canvas context unavailable` throw and shadcn context-hook throws documented in older maps belonged to code removed in the phase-1 cleanup). If you add a new invariant, prefer `throw new Error("...")` synchronously, matching the style used elsewhere in the TanStack ecosystem code this project depends on.

## Logging

**Framework:** None (plain `console`).

**Patterns:**
- `console.error(err)` is used only in the one catch block that surfaces a user-facing error — `src/routes/index.tsx:338` inside `Contact`'s `handleSubmit`.
- Do not scatter `console.log` for debugging into committed code; none currently exists in `src/`.

## Comments

**When to Comment:**
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

---

*Convention analysis: 2026-09-27*

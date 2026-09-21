# Coding Conventions

**Analysis Date:** 2026-09-21

## Naming Patterns

**Files:**
- React components: `PascalCase.tsx` — `src/components/ProjectModal.tsx`, `src/components/Reveal.tsx`, `src/components/CornerOrnament.tsx`, `src/components/Petals.tsx`
- shadcn/ui primitives: `kebab-case.tsx` inside `src/components/ui/` — `src/components/ui/alert-dialog.tsx`, `src/components/ui/dropdown-menu.tsx`, `src/components/ui/input-otp.tsx` (this directory is generated/vendored by shadcn and should not be hand-edited beyond what the CLI produces)
- Hooks: `use-kebab-case.tsx` — `src/hooks/use-mobile.tsx` (exports `useIsMobile`, camelCase function name inside a kebab-case file, matching shadcn convention)
- Route files: TanStack Router file-based routing, lower-case / `$param` dynamic segments — `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/projects/$projectId.tsx`
- Data modules: `camelCase.ts` — `src/lib/utils.ts`, `src/data/projects.ts`
- Generated files are not hand-edited: `src/routeTree.gen.ts` (TanStack Router codegen, excluded from prettier via `.prettierignore`)

**Functions:**
- camelCase for functions and hooks — `useIsMobile`, `handleSubmit`, `getRouter`
- PascalCase for React components, including inline private components co-located in route files — `NotFoundComponent`, `RootShell`, `RootComponent`, `Contact`, `Skills` in `src/routes/index.tsx`

**Variables:**
- camelCase for local variables and function params — `formRef`, `templateParams`, `projectId`
- SCREAMING_SNAKE_CASE for module-level constants — `HERO_VIDEO`, `HERO_FALLBACK`, `CATEGORIES`, `SKILL_TAGS`, `MOBILE_BREAKPOINT` (`src/routes/index.tsx`, `src/hooks/use-mobile.tsx`)
- `as const` used on literal arrays to derive union types — `const CATEGORIES = [...] as const; type Category = (typeof CATEGORIES)[number];` in `src/routes/index.tsx:18-19`

**Types:**
- PascalCase for types/interfaces — `Project` (`src/data/projects.ts`), `ButtonProps` (`src/components/ui/button.tsx`)
- Domain types defined alongside their data — `src/data/projects.ts` exports both the `Project` type and the `projects` array from the same file
- Prop types are inlined directly in the function signature for simple components rather than declared as a separate named type — see `src/components/ProjectModal.tsx:4-10` and `src/components/Reveal.tsx:3-11`
- `interface X extends Y` used only for components wrapping a native HTML element that need variant props merged in — `ButtonProps` in `src/components/ui/button.tsx:32-35`

## Code Style

**Formatting:**
- Prettier, config in `.prettierrc`: `printWidth: 100`, `semi: true`, `singleQuote: false` (double quotes), `trailingComma: "all"`
- `.prettierignore` excludes `node_modules`, `dist`, `.output`, `.vinxi`, `pnpm-lock.yaml`, `package-lock.json`, `routeTree.gen.ts`
- Run via `npm run format` / `bun run format` → `prettier --write .`

**Linting:**
- ESLint flat config at `eslint.config.js`, built on `typescript-eslint` recommended + `@eslint/js` recommended
- `eslint-plugin-react-hooks` recommended rules enabled (enforces hooks rules — deps arrays, no conditional hooks)
- `eslint-plugin-react-refresh`: `"react-refresh/only-export-components": ["warn", { allowConstantExport: true }]` — warns if a file exports both a component and non-component values, unless the extra export is a constant
- `eslint-plugin-prettier` (via `eslintPluginPrettier` recommended config) runs Prettier as an ESLint rule — formatting issues surface as lint errors
- **Notably disabled:** `"@typescript-eslint/no-unused-vars": "off"` — unused variables are NOT flagged by lint. Do not rely on lint to catch dead code/unused imports.
- Ignored paths: `dist`, `.output`, `.vinxi`
- Run via `npm run lint` / `bun run lint` → `eslint .`

**TypeScript strictness (`tsconfig.json`):**
- `"strict": true` is enabled
- BUT `"noUnusedLocals": false` and `"noUnusedParameters": false` — unused locals/params are allowed by the compiler too. Combined with the disabled ESLint rule above, unused code is not caught anywhere in this project. Be deliberate about removing dead code manually.
- Path alias `@/*` → `./src/*` (also mirrored in `components.json` aliases: `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`)
- `target: ES2022`, `moduleResolution: "Bundler"`, `jsx: "react-jsx"`, `noEmit: true` (Vite handles transpilation)

## Import Organization

**Order (observed, not enforced by a plugin):**
1. External packages — framework/router first (`@tanstack/react-router`), then other libraries (`react`, `@emailjs/browser`)
2. Internal aliased imports — `@/data/projects`, `@/components/...`, `@/lib/utils`, `@/assets/...`
3. Relative imports for same-directory or route-tree files — `../styles.css`, `./routeTree.gen`

Example from `src/routes/index.tsx:1-9`:
```ts
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Petals } from "@/components/Petals";
import { Reveal } from "@/components/Reveal";
import { CornerOrnament } from "@/components/CornerOrnament";
import { ProjectModal } from "@/components/ProjectModal";
import portrait from "@/assets/portrait.jpg";
import emailjs from "@emailjs/browser";
```
No import-order lint rule is configured — ordering is by convention/habit only, not enforced. Type-only imports use inline `type` markers (`import { projects, type Project } from "@/data/projects";`) rather than a separate `import type` statement.

**Path Aliases:**
- `@/*` maps to `src/*` (defined in `tsconfig.json` and consumed via `vite-tsconfig-paths`, wired through `@lovable.dev/vite-tanstack-config`)
- Always prefer `@/...` imports over deep relative paths (`../../../`) for anything under `src/`

## Error Handling

**Patterns:**
- Async operations that can fail (network calls) use `try/catch/finally` with local component state for `loading`/`error`/`success` flags — see `Contact` component, `src/routes/index.tsx:509-534`:
```ts
try {
  await emailjs.send("service_mkurl73", "template_b9lcxkl", templateParams);
  setSent(true);
  formRef.current.reset();
  setTimeout(() => setSent(false), 3000);
} catch (err) {
  setError("Erreur lors de l'envoi. Veuillez réessayer.");
  console.error(err);
} finally {
  setLoading(false);
}
```
- User-facing error messages are French, plain strings held in `useState<string | null>` — no error object/toast library used for form errors despite `sonner` (`src/components/ui/sonner.tsx`) being available in the dependency tree.
- Fire-and-forget promises use `.catch()` inline rather than a full try/catch when the failure is expected/ignorable — `playPromise.catch(() => {})` in `src/routes/index.tsx:248` (video autoplay rejection).
- Programmer errors (invariant violations, not expected at runtime) throw `Error` synchronously — e.g. `if (!context) throw new Error("Canvas context unavailable")` in `src/routes/index.tsx:170`, and every shadcn context hook throws if used outside its provider (`src/components/ui/chart.tsx:29`, `src/components/ui/sidebar.tsx:43`, `src/components/ui/form.tsx:46,50`, `src/components/ui/carousel.tsx:35`) — pattern: `if (!context) throw new Error("useX must be used within a <XProvider />")`.
- Route-level "not found" states are handled by returning a fallback UI directly from the component rather than throwing — `src/routes/projects/$projectId.tsx:15-27` checks `if (!project) return <...>` with a "back to portfolio" button.
- Global fallback for uncaught render errors is `DefaultErrorComponent` in `src/router.tsx`, wired via `createRouter({ defaultErrorComponent: DefaultErrorComponent })`. It shows a generic "Something went wrong" message, exposes `error.message` only when `import.meta.env.DEV` is true, and offers "Try again" (`router.invalidate() + reset()`) and "Go home" actions.
- 404s are handled by TanStack Router's `notFoundComponent` on the root route — `NotFoundComponent` in `src/routes/__root.tsx:6-26`.

## Logging

**Framework:** Plain `console` — no logging library.

**Patterns:**
- `console.error(err)` used only in the one catch block that surfaces a user-facing error (`src/routes/index.tsx:530`). Do not scatter `console.log` for debugging into committed code; none currently exists in `src/`.

## Comments

**When to Comment:**
- Sparse. Most files have no comments at all.
- Section-divider comments are used in the flat data array `src/data/projects.ts` to group entries by category, e.g. `// --- SITE WEB ---`, `// --- BRANDING ---`, `// --- VIDÉO ---` (`src/data/projects.ts:17,35,48,62,86,110`). Follow this pattern when adding new project entries — add new items under (or create) the matching category comment block.
- One inline maintenance note left in code: `import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici` (`src/routes/index.tsx:1`) — an artifact from prior editing, not a documentation comment. Do not use this as a model; prefer no comment or a clear English/French explanation.
- `vite.config.ts` has a block comment at the top explaining which plugins are already bundled by `@lovable.dev/vite-tanstack-config` and must not be re-added — read this before touching Vite config.

**JSDoc/TSDoc:**
- Not used anywhere in the codebase. Types are expressed via inline TypeScript annotations, not doc comments.

## Function Design

**Size:** No enforced limit. Route components are large and monolithic — `src/routes/index.tsx` is 642 lines and contains the full landing page (hero canvas animation, particle system classes, nav, sections, contact form) as one file with several top-level helper components (`Skills`, `Contact`, etc.) rather than being split into separate component files. `src/routes/projects/$projectId.tsx` is 665 lines for a single dynamic route. When adding substantial new sections, prefer extracting a new component into `src/components/` rather than growing these route files further.

**Parameters:**
- Small components destructure a single inline object type as props: `function ProjectModal({ project, onClose }: { project: Project; onClose: () => void })` (`src/components/ProjectModal.tsx:4-10`)
- Optional props get default values in the destructure: `function Reveal({ children, delay = 0, className = "" }: {...})` (`src/components/Reveal.tsx:3-11`)

**Return Values:**
- Components return JSX directly; early-return guards are used for empty/error/loading states (e.g., `if (!project) return (...)` in `src/routes/projects/$projectId.tsx:15`)
- A component can deliberately return `null` as a placeholder/stub — `function Skills() { return null; }` (`src/routes/index.tsx:495-497`) — treat this as an intentionally unfinished section, not a bug, unless asked to implement it.

## Module Design

**Exports:**
- Named exports throughout for components, hooks, and utils — `export function ComponentName(...)`, `export function useIsMobile()`, `export function cn(...)`
- Route modules export a single `Route` const created via `createFileRoute(...)` / `createRootRoute(...)` — `export const Route = createFileRoute("/")({ component: Index })` (`src/routes/index.tsx:11-13`)
- shadcn/ui components often export both the component and its variant function together — `export { Button, buttonVariants };` (`src/components/ui/button.tsx:47`)
- `React.forwardRef` + `displayName` assignment is the standard pattern for `ui/` primitives that need to forward a DOM ref: `const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((...) => {...}); Button.displayName = "Button";` (`src/components/ui/button.tsx:36-46`)

**Barrel Files:**
- Not used. There is no `index.ts` re-export file in `src/components/` or `src/components/ui/`; every consumer imports directly from the specific file (`@/components/ui/button`, `@/components/Reveal`, etc.).

## Styling Conventions (Tailwind)

- Tailwind v4 via `@tailwindcss/vite`, config-free (CSS-based theme in `src/styles.css`, referenced through `components.json` → `"css": "src/styles.css"`, `"cssVariables": true`, `"baseColor": "slate"`, `"style": "new-york"`, `"prefix": ""`)
- `cn(...)` helper (`src/lib/utils.ts`, wraps `clsx` + `tailwind-merge`) is the standard way to merge/conditionally apply class names in every component that accepts a `className` prop — always use `cn()` rather than manual string concatenation when a component needs to merge an incoming `className` with its own defaults.
- Custom CSS variables (theme tokens defined outside standard Tailwind palette) are referenced with `var(--plum)`, `var(--cream)`, `var(--sakura)`, `var(--gold)`, `var(--border)`, `var(--muted-foreground)` inside arbitrary-value Tailwind classes, e.g. `bg-[var(--cream)]`, `text-[var(--plum)]`, and via `color-mix()` for opacity blending: `style={{ background: "color-mix(in oklab, var(--plum) 70%, transparent)" }}` (`src/components/ProjectModal.tsx:24`). When adding new UI, reuse these existing tokens instead of introducing new raw hex colors.
- `class-variance-authority` (`cva`) is the pattern for components with style variants (`variant`, `size`, etc.) — see `buttonVariants` in `src/components/ui/button.tsx:7-30`.

## Language / Content Conventions

- UI copy and content data (`src/data/projects.ts`, contact form, page metadata in `src/routes/__root.tsx`) is written in **French** — this is a French-language personal portfolio. New user-facing strings should stay in French unless told otherwise.
- Code identifiers (variables, functions, types) are in English as usual; only rendered copy/content is French.

---

*Convention analysis: 2026-09-21*

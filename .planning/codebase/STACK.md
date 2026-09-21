# Technology Stack

**Analysis Date:** 2026-09-21

## Languages

**Primary:**
- TypeScript 5.8.3 - Application code (`src/**/*.ts`, `src/**/*.tsx`), strict mode enabled (`tsconfig.json`)

**Secondary:**
- JavaScript (ESM) - `server.js` (standalone Node HTTP server for non-edge hosting), `eslint.config.js`

## Runtime

**Environment:**
- Node.js (version unpinned — no `.nvmrc`/`.node-version` file present; `@types/node` targets Node 22 typings)
- Dual deployment targets: Cloudflare Workers (via `@cloudflare/vite-plugin`, `nodejs_compat` flag) and a plain Node HTTP server (`server.js`) for Vercel/other Node hosts

**Package Manager:**
- Bun is the primary manager: `bun.lockb` present, `bunfig.toml` present (`saveTextLockfile = false`)
- `package-lock.json` also present (npm), so the repo is dual-tracked — `vercel.json` build command uses `npm run build`, implying Vercel builds use npm while local/Cloudflare dev likely uses Bun
- No `pnpm-lock.yaml` or `yarn.lock`

## Frameworks

**Core:**
- React 19.2.0 - UI library (`react`, `react-dom`)
- TanStack Start 1.167.14 (`@tanstack/react-start`) - Full-stack React meta-framework (SSR, file-based routing, server entry)
- TanStack Router 1.168.0 (`@tanstack/react-router`) - Routing, code-gen'd route tree at `src/routeTree.gen.ts`, router setup in `src/router.tsx`
- TanStack Router Plugin 1.167.10 (`@tanstack/router-plugin`) - Vite plugin for route-tree generation (wired via `@lovable.dev/vite-tanstack-config`)
- TanStack Query 5.83.0 (`@tanstack/react-query`) - present in dependencies; no active `useQuery`/`QueryClient` usage found in `src/routes` during exploration (data is static, see `src/data/projects.ts`)
- Tailwind CSS 4.2.1 (`tailwindcss`, `@tailwindcss/vite`) - CSS-first config (no `tailwind.config.*` file; theme defined in `src/styles.css` via `@theme inline`)
- Radix UI (`@radix-ui/react-*`, ~25 packages) - Headless UI primitives underlying the shadcn/ui component set in `src/components/ui/`

**Testing:**
- Not detected — no test runner (Jest/Vitest/Playwright), no `*.test.*`/`*.spec.*` files, no test script in `package.json`

**Build/Dev:**
- Vite 7.3.1 - Bundler/dev server, config at `vite.config.ts`
- `@lovable.dev/vite-tanstack-config` 1.4.0 (devDependency, resolved 1.5.0) - Shared Vite config wrapper (Lovable.dev platform) that bundles: `tanstackStart`, `viteReact`, `tailwindcss`, `tsConfigPaths`, Cloudflare plugin (build-only), a dev-only component tagger, `VITE_*` env injection, the `@` path alias, React/TanStack dedupe, error-logger plugins, and sandbox port/host detection. Per the comment in `vite.config.ts`, these must NOT be re-added manually.
- `@cloudflare/vite-plugin` 1.25.5 - Cloudflare Workers build integration (invoked by the Lovable config, build-only)
- `vite-tsconfig-paths` 6.0.2 - Resolves the `@/*` → `./src/*` path alias from `tsconfig.json`
- ESLint 9.32.0 flat config (`eslint.config.js`) - `@eslint/js`, `typescript-eslint` 8.56.1, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-prettier` (Prettier errors surfaced as ESLint issues)
- Prettier 3.7.3 - Formatting, config at `.prettierrc` (100 print width, double quotes, semicolons, trailing commas), ignore list at `.prettierignore`

## Key Dependencies

**Critical:**
- `@emailjs/browser` 4.4.1 - Client-side email delivery for the contact form (see INTEGRATIONS.md), used in `src/routes/index.tsx`
- `react-hook-form` 7.71.2 + `@hookform/resolvers` 5.2.2 + `zod` 3.24.2 - Form state management and schema validation (used by shadcn `form.tsx` component at `src/components/ui/form.tsx`)
- `zod` 3.24.2 - Runtime schema validation

**Infrastructure:**
- `class-variance-authority` 0.7.1, `clsx` 2.1.1, `tailwind-merge` 3.5.0 - Class-name composition utilities used throughout `src/components/ui/` (see `src/lib/utils.ts` `cn()` helper)
- `lucide-react` 0.575.0 - Icon set (icon library declared in `components.json`)
- `sonner` 2.0.7 - Toast notifications (`src/components/ui/sonner.tsx`)
- `embla-carousel-react` 8.6.0 - Carousel component (`src/components/ui/carousel.tsx`)
- `recharts` 2.15.4 - Charting (`src/components/ui/chart.tsx`)
- `cmdk` 1.1.1, `vaul` 1.1.2, `input-otp` 1.4.2, `react-day-picker` 9.14.0, `react-resizable-panels` 4.6.5, `date-fns` 4.1.0 - Supporting shadcn/ui component dependencies (command palette, drawer, OTP input, calendar, resizable panes, date utilities)

## Configuration

**Environment:**
- No `.env`/`.env.*` files present in the repo (confirmed via directory listing — none found)
- No `VITE_*` environment variables referenced in `src/` (only `import.meta.env.DEV` is used, in `src/router.tsx`, a Vite built-in)
- EmailJS credentials (public key, service ID, template ID) are hardcoded directly in `src/routes/index.tsx` rather than sourced from environment variables — see INTEGRATIONS.md for details and security note

**Build:**
- `vite.config.ts` - Thin wrapper delegating to `@lovable.dev/vite-tanstack-config`'s `defineConfig()`; additional Vite options would go under `defineConfig({ vite: { ... } })`
- `tsconfig.json` - Target ES2022, bundler module resolution, strict mode, `@/*` path alias to `./src/*`, includes `src/**/*.ts(x)`, `vite.config.ts`, `eslint.config.js`
- `components.json` - shadcn/ui config: "new-york" style, slate base color, CSS variables enabled, no prefix, aliases mapped to `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`
- `wrangler.jsonc` - Cloudflare Workers config: app name `tanstack-start-app`, `compatibility_date: 2025-09-24`, `nodejs_compat` flag, entry `@tanstack/react-start/server-entry`
- `vercel.json` - Vercel config: `buildCommand: "npm run build"`, `outputDirectory: "dist/server"`

## Platform Requirements

**Development:**
- `bun install` (or `npm install`) then `vite dev` (`npm run dev` / `bun run dev`)
- No documented minimum Node version

**Production:**
- Two supported deployment paths, both built from the same `vite build` output:
  1. **Cloudflare Workers** - via `wrangler.jsonc`, using `@cloudflare/vite-plugin`'s Worker build output and `nodejs_compat`
  2. **Node server / Vercel** - `server.js` wraps `dist/server/index.js` (the TanStack Start server entry) in a plain `http.createServer`, listening on `process.env.PORT` (default 3000); `vercel.json` points Vercel's build at `dist/server` with `npm run build`
- `npm run start` runs `node server.js` for the Node deployment path

---
last_mapped_commit: 163c48737bad29b01210096abf6fb8eeec45c5a0
---
# Codebase Structure

**Analysis Date:** 2026-09-27

## Directory Layout

```
portfolio/
├── .planning/              # GSD workflow artifacts (PROJECT.md, ROADMAP.md, phases/, codebase/) — not app code
├── .nvmrc                   # Pins Node 24 for local dev
├── CLAUDE.md                # Project-level instructions for Claude Code
├── components.json          # shadcn/ui config (legacy — the ui/ kit it configures no longer exists in src/)
├── eslint.config.js         # ESLint 9 flat config
├── knip.json                # Unused-code/dead-file detector config (new since last map)
├── package.json / package-lock.json   # npm-only now (no bun.lockb/bunfig.toml present)
├── tsconfig.json            # TS strict mode, @/* → ./src/* alias
├── vite.config.ts           # Thin wrapper delegating to @lovable.dev/vite-tanstack-config
├── wrangler.jsonc           # Cloudflare Workers deploy config — the only deployment target
├── .prettierrc / .prettierignore
├── .gitignore                # ignores public/videos/extraitpubSAE1.mp4, public/assets/charte_graphique.pdf, media-src/
├── scripts/
│   ├── check-assets.mjs               # post-build asset guard (size/encoding rules), run by `npm run check`
│   ├── check-assets.exceptions.json   # waiver list for legacy oversized/non-faststart media
│   └── inventory-assets.mjs           # manual reference-audit script (not wired into any npm script)
├── src/
│   ├── components/
│   │   └── Reveal.tsx                # only shared component; scroll-triggered fade-in wrapper
│   ├── data/
│   │   └── projects.ts                # Project type + the full projects[] array (single content source)
│   ├── routes/
│   │   ├── __root.tsx                 # HTML shell, <head> meta, global 404
│   │   ├── index.tsx                  # home page: Nav, Hero, About, Projects, Contact (all inline)
│   │   └── projects/
│   │       └── $projectId.tsx         # project detail page, per-id hardcoded content branches
│   ├── router.tsx                     # router factory + default error component
│   ├── routeTree.gen.ts               # GENERATED — do not hand-edit
│   └── styles.css                     # Tailwind v4 CSS-first theme + custom "quest" design-system classes
├── public/                  # static assets served as-is
│   ├── assets/               # (~82M) project images/screenshots referenced from src/data/projects.ts
│   ├── videos/                # (~40M) hero.mp4, CV video
│   ├── media/                  # (~2.5M) portrait.jpg
│   ├── animate/                # (~90M) vendored Adobe Animate/CreateJS export — DO NOT deep-edit, iframed in
│   │                            #   $projectId.tsx's "sae-2" branch; scene chain 1_MOHAMED → 1_LYNA →
│   │                            #   2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN, navigated via window.open
│   ├── favicon.ico
│   └── logo.png
├── media-src/                # gitignored working-media backups/quarantine (never committed, never deployed)
├── dist/                     # build output (gitignored)
└── node_modules/             # gitignored
```

**Directories that no longer exist** (present in older documentation, absent from the current tree — verified via `find src -type f`): `src/components/ui/`, `src/lib/`, `src/hooks/`, `src/assets/`. Do not recreate them speculatively; if new shared logic is needed, place it directly under `src/` following the flat structure above (e.g. a new top-level `src/lib/utils.ts` only if a genuine cross-file utility need arises).

**Files that no longer exist**: `server.js` (standalone Node HTTP server), `vercel.json`, `bun.lockb`, `bunfig.toml`. The project is npm-only (`package-lock.json` present) and Cloudflare-Workers-only.

## Directory Purposes

**`src/routes/`:**
- Purpose: TanStack Router file-based route definitions — the entire page-level composition of the site.
- Contains: `__root.tsx` (root shell/404), `index.tsx` (single-page home, 431 lines), `projects/$projectId.tsx` (project detail, 647 lines — the largest source file in the repo).
- Key files: `src/routes/index.tsx`, `src/routes/projects/$projectId.tsx`.
- Invariant for this milestone: no route file is added, removed, or renamed, so `src/routeTree.gen.ts` never needs regeneration mid-milestone.

**`src/components/`:**
- Purpose: Reusable, presentational, cross-page building blocks.
- Contains: exactly one file, `Reveal.tsx` (40 lines) — a scroll-triggered `IntersectionObserver` fade-in wrapper used throughout both routes.
- Key files: `src/components/Reveal.tsx`.

**`src/data/`:**
- Purpose: Single source of truth for portfolio project content (pure static data, no I/O).
- Contains: `projects.ts` — `Project` TypeScript type (id, title, category, thumbnail, optional `media[]`/`video`/`url`, descriptions, tools, role, `inProgress`) plus the `projects` array (9 entries, grouped by `// --- CATEGORY ---` comment dividers).
- Key files: `src/data/projects.ts`.

**`scripts/`:**
- Purpose: Node/ESM tooling that runs outside the Vite build — asset-weight and asset-reference enforcement for the "lite" milestone.
- Contains: `check-assets.mjs` (post-build guard: 25 MiB hard Cloudflare ceiling, 20 MiB fail threshold, 10 MiB warn threshold, forbidden source extensions `.fla/.ai/.tmp/.pdf/.psd/.xd/.aep/.prproj`, video `pix_fmt`/faststart checks via `ffprobe`), `check-assets.exceptions.json` (waiver list, tied to a "phase 2 re-encode" TODO for `videos/hero.mp4`, `videos/56_Lyna_REBAHI_CVvideo.mp4`, `animate/videos/empattage.mp4`), `inventory-assets.mjs` (classifies every `public/` file — excluding `public/animate/` — as REF/NAME-ONLY/UNREF and reverse-scans `src/` for dangling media URLs; not wired into any npm script, run manually).
- Key files: `scripts/check-assets.mjs`, `scripts/inventory-assets.mjs`.

**`public/`:**
- Purpose: Static media served verbatim by the Cloudflare Worker/Vite dev server.
- Contains (sizes via `du -sh public/*`): `animate/` (90M, vendored Adobe Animate export — treat as opaque, do not deep-edit or deep-map), `assets/` (82M, project images/screenshots), `videos/` (40M, `hero.mp4` 17M + `56_Lyna_REBAHI_CVvideo.mp4` 23M), `media/` (2.5M, `portrait.jpg`), plus root-level `favicon.ico` (248K) and `logo.png` (60K).
- Largest individual files in `public/assets/`: `affiche_sensibilisation_Lyna_Rebahi.png` (9.6M), `hero.png` (4.2M), `chartegraphique_SkollRub.png` (3.0M), several `clip*.png`/`flyer*.png`/`SAE*.png`/`logo*.png` in the 1.7–2.8M range — these are the primary targets for any future "lighten without visible quality loss" re-encode pass.
- Generated: No (all hand-placed/exported media, none Vite-generated).
- Committed: Yes, except the two files/patterns explicitly gitignored (`public/videos/extraitpubSAE1.mp4`, `public/assets/charte_graphique.pdf`).

**`media-src/`:**
- Purpose: Working originals/backups/quarantine for media re-encoding work.
- Generated: No — manually populated.
- Committed: No (gitignored via `media-src/`).

**`.planning/`:**
- Purpose: GSD workflow artifacts (milestone/phase plans, research, this `codebase/` reference set). Not application code; not read by the Vite build.
- Key files: `.planning/PROJECT.md`, `.planning/ROADMAP.md`, `.planning/phases/`, `.planning/codebase/*.md` (this document set).

## Key File Locations

**Entry Points:**
- `src/router.tsx`: Router factory (`getRouter`), default error component.
- `src/routes/__root.tsx`: Root route — HTML shell, `<head>` metadata, global 404.
- `wrangler.jsonc`: Cloudflare Workers entry (`main: "@tanstack/react-start/server-entry"`) — the sole production entry point; no `server.js` exists.

**Configuration:**
- `vite.config.ts`: Delegates entirely to `@lovable.dev/vite-tanstack-config`'s `defineConfig()` — do not manually re-add plugins it already bundles (see comment block at the top of the file).
- `tsconfig.json`: ES2022 target, Bundler resolution, strict mode, `@/*` → `./src/*`.
- `components.json`: shadcn/ui config — kept for reference/history but the `ui/` component kit it targets (`@/components/ui`) no longer exists in `src/`; do not treat this file as evidence that shadcn primitives are in use.
- `wrangler.jsonc`: Cloudflare deployment config (`compatibility_date: 2025-09-24`, `nodejs_compat`).
- `knip.json`: Configuration for the `knip` dead-code/unused-dependency detector (new tooling addition since the previous map — check this file before assuming any file/export is dead code).

**Core Logic:**
- `src/routes/index.tsx`: Entire home page (hero, about, filterable project grid, contact form).
- `src/routes/projects/$projectId.tsx`: Project detail page and all per-project bespoke content.
- `src/data/projects.ts`: All project content/metadata.

**Testing:**
- Not applicable — no test runner, no `*.test.*`/`*.spec.*` files, no test script in `package.json` (confirmed via `find` for test file patterns and `package.json` script list: `dev`, `build`, `build:dev`, `preview`, `lint`, `format`, `check`, `deploy`).

## Naming Conventions

**Files:**
- React components: `PascalCase.tsx` — `src/components/Reveal.tsx`.
- Route files: TanStack Router file-based routing, lower-case / `$param` dynamic segments — `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/projects/$projectId.tsx`.
- Data modules: `camelCase.ts` — `src/data/projects.ts`.
- Generated files are not hand-edited: `src/routeTree.gen.ts` (excluded from Prettier via `.prettierignore`).
- Tooling scripts: `kebab-case.mjs` — `scripts/check-assets.mjs`, `scripts/inventory-assets.mjs`.

**Directories:**
- Lower-case, singular-purpose nouns — `components/`, `data/`, `routes/`, `scripts/`, `public/`.
- Route sub-directories mirror URL segments — `routes/projects/` for the `/projects/*` path family.

## Where to Add New Code

**New project entry (most common addition):**
- Add to `src/data/projects.ts`, under (or creating) the matching `// --- CATEGORY ---` comment block.
- If it needs bespoke detail-page content beyond the generic description/tools/media block, add a new `{project.id === "new-id" && (...)}` branch in `src/routes/projects/$projectId.tsx` — consistent with the existing (if debt-laden) pattern; do not introduce a different content mechanism without an explicit phase for that refactor.
- Do not create a new route file for it — the dynamic `$projectId` route already handles all project detail pages, and this milestone's invariant forbids adding/removing/renaming files under `src/routes/`.

**New shared UI behavior:**
- Add alongside `src/components/Reveal.tsx` in `src/components/` — this is the only place for reusable presentational components in the current tree.

**New section on the home page:**
- Add as a new inline component function inside `src/routes/index.tsx`, following the existing pattern (`Nav`, `Hero`, `About`, `Projects`, `Contact`), and render it from `Index` (`src/routes/index.tsx:421-431`).

**Asset/tooling changes:**
- Size/encoding rule changes: `scripts/check-assets.mjs` (`RULES`, `HARD`/`FAIL`/`WARN` thresholds, `FORBIDDEN` extensions).
- New waivers for known-oversized legacy media: `scripts/check-assets.exceptions.json` (each entry needs `path`, `waive: [...]`, `reason`).
- Reference-audit changes: `scripts/inventory-assets.mjs` (note it explicitly excludes `public/animate/` from its scan by design).

**Styling/theme tokens:**
- Add new CSS custom properties or component classes to `src/styles.css`, reusing existing tokens (`var(--plum)`, `var(--cream)`, `var(--sakura)`, `var(--gold)`) rather than introducing new raw hex colors.

## Special Directories

**`src/routeTree.gen.ts`:**
- Purpose: TanStack Router's auto-generated route registration/type map.
- Generated: Yes (by the `@tanstack/router-plugin` Vite plugin, part of `@lovable.dev/vite-tanstack-config`).
- Committed: Yes (tracked in git, but excluded from Prettier via `.prettierignore` and marked `/* eslint-disable */`/`// @ts-nocheck` at the top of the file).

**`public/animate/`:**
- Purpose: Vendored Adobe Animate (CreateJS) interactive export, embedded via `<iframe>` in the `sae-2` project's detail-page branch.
- Generated: Yes, but by an external Adobe Animate export process, not by this repo's build — treat as a black box.
- Committed: Yes (90M total), but excluded from `scripts/inventory-assets.mjs`'s reference scan and out of scope for deep exploration per this milestone's directives.

**`dist/`:**
- Purpose: Vite build output (`dist/client`, `dist/server`), consumed by `wrangler deploy` and `scripts/check-assets.mjs`.
- Generated: Yes (`vite build`).
- Committed: No (gitignored).

**`media-src/`:**
- Purpose: Pre-optimization working copies / backups / quarantine for media assets.
- Generated: No.
- Committed: No (gitignored, explicitly called out with a comment in `.gitignore`: "Working originals, backups and quarantine — never committed, never deployed").

**`.wrangler/`:**
- Purpose: Cloudflare Wrangler's local dev/build cache.
- Generated: Yes.
- Committed: No (gitignored).

---

*Structure analysis: 2026-09-27*

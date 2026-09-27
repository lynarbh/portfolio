---
phase: 01-nettoyage-filet-de-s-curit
plan: 03
subsystem: dependencies / tooling / deploy
tags: [cleanup, knip, dependencies, eslint, cloudflare, npm]
requires:
  - "01-02: version lite (no remaining imports of src/components/ui, @/lib/utils, @/hooks/use-mobile)"
  - "01-01: npm run check (tsc + vite build + check-assets + wrangler deploy --dry-run)"
provides:
  - "src/components/ui/ (46 files), src/lib/utils.ts, src/hooks/use-mobile.tsx removed"
  - "43 unused dependencies uninstalled (42 knip-flagged + @tanstack/react-query); 11 runtime dependencies left"
  - "knip.json config; knip --include files,dependencies reports nothing"
  - "eslint . finishes in ~1 s with 0 errors (public/, media-src/, .wrangler/ ignored)"
  - "Cloudflare Workers is the only deploy target; npm (package-lock.json) is the only lockfile"
affects: [package.json, package-lock.json, eslint.config.js, .prettierignore, knip.json]
tech-stack:
  added: []
  removed: ["shadcn/Radix UI kit (26 @radix-ui packages)", "react-hook-form, @hookform/resolvers, zod", "@tanstack/react-query", "clsx, tailwind-merge, class-variance-authority", "lucide-react, sonner, vaul, cmdk, recharts, embla-carousel-react, input-otp, react-day-picker, react-resizable-panels, date-fns", "bun lockfiles, vercel.json, server.js"]
  patterns: ["knip@6.38.0 run via npx (never added to package.json)", "dependency removal only via npm uninstall (lockfile never hand-edited)"]
key-files:
  created:
    - knip.json
  modified:
    - package.json
    - package-lock.json
    - eslint.config.js
    - .prettierignore
  deleted:
    - src/components/ui/ (46 files)
    - src/lib/utils.ts
    - src/hooks/use-mobile.tsx
    - vercel.json
    - server.js
    - bun.lockb
    - bunfig.toml
decisions:
  - "@tanstack/react-query removed although listed in the Lovable wrapper resolve.dedupe: build and wrangler dry-run stay green (assumption A1 refuted, no reinstall needed)"
  - "knip.json keeps @tanstack/router-plugin, tailwindcss and tw-animate-css in ignoreDependencies even though knip hints two of them are redundant (keep the plan's conservative config)"
  - "knip 'Unlisted binaries' (wrangler via @cloudflare/vite-plugin, ffprobe as a system binary) are left as is: outside the files/dependencies scope"
metrics:
  duration: "~5 min (continuation after the knip legitimacy checkpoint)"
  completed: 2026-09-27
  tasks: 3
  files: 60
---

# Phase 1 Plan 03: Élagage kit ui, dépendances et cibles mortes Summary

Removed the unused shadcn/Radix kit and 43 dependencies (validated by knip 6.38.0). Removed the Vercel/Node/bun deploy leftovers so Cloudflare Workers is the only target and npm the only package manager. ESLint now runs across the whole repo. `npm run check` is green after each step.

## Checkpoint and resolution

Task 1 was a blocking `checkpoint:human-verify` (package legitimacy) before running `npx knip@6.38.0`. **Resolution: approved.** The orchestrator checked the npm registry: `knip` 6.38.0 is the `latest` dist-tag, the repository is `github.com/webpro-nl/knip`, the only maintainer is `webpro <lars@webpro.nl>`, and the package has no preinstall/install/postinstall hook. knip was then run via npx and never added to package.json.

## Tasks

| Task | Name | Commit |
|------|------|--------|
| 1 | knip legitimacy check + baseline report | (no files changed) |
| 2a | Remove the ui kit, utils and use-mobile | 3d41d94 |
| 2b | knip.json + uninstall 43 packages | e8462b6 |
| 3a | Extend ESLint/Prettier ignores | e4cf5d7 |
| 3b | Cloudflare as the only target (remove vercel.json, server.js, bun.lockb, bunfig.toml, start script) | 850012c |

## knip before / after

- **Before** (no config): 56 unused files and 43 unused dependencies.
  - The 56 files are 46 `src/components/ui/*.tsx`, `src/lib/utils.ts`, `src/hooks/use-mobile.tsx` and 8 false positives under `public/animate/**/*.js` (the plan expected 9).
  - The 43 dependencies match RESEARCH exactly, including `@tanstack/router-plugin`, which is kept.
  - knip also reported 2 unlisted binaries: wrangler and ffprobe.
- **After** (with knip.json): `npx knip@6.38.0 --include files,dependencies` reports 0 problems (exit 0).
  - A full `knip` run still lists the 2 unlisted binaries.
  - It also gives 4 configuration hints: `media-src/**`, `src/routeTree.gen.ts`, `tailwindcss` and `tw-animate-css` are redundant in the ignore lists. These are hints only.

## Verification

- `rm -rf dist && npm run check` exited 0 after each of the 3 code steps (ui removal, uninstall, removal of the dead targets).
- The contact form still uses native validation: `required` ×3 and `type="email"` ×1 in `src/routes/index.tsx`. No validation library is used.
- `npx eslint . --rule "prettier/prettier: off"` exits 0 in ~1 s with 0 errors. The only output is the tolerated react-refresh warning in `src/router.tsx`.
- `npx prettier --check scripts` passes.
- `vite.config.ts` and `src/routeTree.gen.ts` are unchanged since 0226355.
- `npm audit --omit=dev` shows 20 vulnerabilities both before and after (2 low, 8 moderate, 9 high, 1 critical).
  - All come from the framework/tooling chain: @tanstack/react-start*, @cloudflare/vite-plugin, vite, wrangler, miniflare, esbuild, undici, sharp, etc.
  - None came from the removed packages, so the count did not change. The attack surface is still smaller: 43 direct dependencies are gone and package-lock.json lost 2,511 lines.
- `npm ls --depth=0` shows no `missing` entries. Two pre-existing optional wasm dependencies (`@emnapi/runtime`, `tslib`) show up as `extraneous`. Both were already in the lockfile before this plan, so this is not blocking.

## Deviations from Plan

None. The plan was executed as written.
- Assumption A1 (the build might need `@tanstack/react-query` because of `resolve.dedupe`) turned out to be wrong. The build passed without the package, so it did not need to be reinstalled.
- Minor: knip found 8 `public/animate` false positives, not the 9 the plan expected. It has no impact because `public/**` is ignored.

## Known Stubs

None.

## Notes

`CLAUDE.md` (a generated GSD document) still describes server.js, vercel.json, bun and the ui kit. It should be regenerated on the next codebase map. It is not edited here: it is outside the plan's files.

## Self-Check: PASSED

# Testing Patterns

**Analysis Date:** 2026-09-21

## Current State: No Test Suite

This codebase has **no automated tests** and **no test framework configured**.

Verified by:
- `package.json` has no test-related dependency (no `vitest`, `jest`, `@testing-library/*`, `playwright`, `cypress`, `msw`, etc.) and no `"test"` script — only `dev`, `build`, `build:dev`, `preview`, `start`, `lint`, `format` (`package.json`)
- No test config files exist: no `vitest.config.ts`, `jest.config.*`, `playwright.config.ts`, or `cypress.config.*` anywhere in the repo
- No test files exist: a repo-wide search for `*.test.*` / `*.spec.*` returns zero results
- No `__tests__/` directories anywhere in `src/`

**CI:** No CI pipeline was found in this repo (no `.github/workflows/`), so there is currently no automated gate that would run tests even if they existed. `npm run lint` is the only automated check available today (`package.json` scripts).

**What this means for contributors:**
- Do not assume any test command exists — running `npm test` / `bun test` will fail (no script defined)
- Verification today is manual: `npm run lint` (ESLint) and `npm run build` (TypeScript type-check via Vite build, since `tsconfig.json` has `"noEmit": true` and no separate `tsc --noEmit` step is wired up) are the only automated correctness signals
- When adding a new feature or fixing a bug, there is no existing test pattern to follow — any tests introduced will be the first in the project and should establish the convention documented below

## Recommended Setup (not yet implemented)

Given the stack (Vite + React 19 + TypeScript + TanStack Router/Start), a sensible, low-friction setup would be:

**Unit / component tests — Vitest + React Testing Library**
```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```
- Vitest integrates directly with the existing `vite.config.ts` (via `@lovable.dev/vite-tanstack-config`'s underlying Vite config) — no separate bundler config needed
- Use `jsdom` environment for component tests (canvas-based components like the hero particle animation in `src/routes/index.tsx` will need `HTMLCanvasElement.prototype.getContext` mocked, since `jsdom` does not implement Canvas 2D)
- Suggested `package.json` scripts to add: `"test": "vitest run"`, `"test:watch": "vitest"`, `"test:coverage": "vitest run --coverage"`

**Suggested file organization (co-located, matching this repo's flat component style):**
```
src/components/Reveal.tsx
src/components/Reveal.test.tsx
src/lib/utils.ts
src/lib/utils.test.ts
```
Co-location (test next to source) fits this project better than a separate `__tests__/` tree, since the codebase already keeps related concerns close together (e.g., `Project` type and `projects` data live in the same file, `src/data/projects.ts`).

**What to prioritize testing first (highest value, currently zero coverage):**
- `src/lib/utils.ts` — `cn()` helper, trivial to unit test, high reuse across every styled component
- `src/data/projects.ts` — the `Project` type shape and data integrity (e.g., every project has a valid `thumbnail` path, `category` is one of the allowed union values) — a simple data-validation test would catch content-entry mistakes
- `src/components/Reveal.tsx` — `IntersectionObserver`-based reveal-on-scroll; needs `IntersectionObserver` mocked in test setup
- `src/components/ProjectModal.tsx` — keyboard `Escape` handling, `onClose` callback firing, `aria-modal`/`role="dialog"` attributes present
- `src/routes/projects/$projectId.tsx` — "project not found" fallback branch (`if (!project) return ...`, `src/routes/projects/$projectId.tsx:15-27`)
- Contact form in `src/routes/index.tsx` (`Contact` component, lines 499-534) — success/error/loading state transitions around `emailjs.send`, requires mocking `@emailjs/browser`

**Mocking approach once introduced:**
- Mock `@emailjs/browser`'s `send`/`init` via `vi.mock("@emailjs/browser")` to test the `Contact` component's `try/catch/finally` state transitions without making real network calls
- Mock browser APIs not implemented in `jsdom`: `IntersectionObserver` (used by `Reveal`), `HTMLCanvasElement.prototype.getContext` and `matchMedia` (used by `useIsMobile`, `src/hooks/use-mobile.tsx`) — typically stubbed once in a shared `vitest.setup.ts` referenced via `test.setupFiles` in `vitest.config.ts`
- Prefer React Testing Library's `render` + `screen` queries (`getByRole`, `getByText`) over snapshot tests, to match the accessibility-conscious patterns already present in the code (`role="dialog"`, `aria-modal`, `aria-label` in `src/components/ProjectModal.tsx:26-28`)
- For routes, TanStack Router provides test utilities (`createMemoryHistory`, `createRouter`) to render a route in isolation without a full browser navigation — needed because route components call `Route.useParams()` / `useNavigate()` directly (see `src/routes/projects/$projectId.tsx:11-12`)

**E2E (optional, lower priority given project size):**
- Playwright would be the natural choice if end-to-end coverage of the deployed site (Cloudflare Workers, per `wrangler.jsonc`) is ever desired, but is not necessary for a portfolio site of this scope until forms/navigation grow in complexity

## Coverage

**Requirements:** None — no coverage tool configured, no threshold enforced.

---

*Testing analysis: 2026-09-21*

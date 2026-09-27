---
last_mapped_commit: 163c48737bad29b01210096abf6fb8eeec45c5a0
---

# External Integrations

**Analysis Date:** 2026-09-27

## APIs & External Services

**Email delivery:**
- EmailJS - Sends contact-form submissions directly from the browser, no backend involved
  - SDK/Client: `@emailjs/browser` 4.4.1, imported in `src/routes/index.tsx:5`
  - Initialization: `emailjs.init("vH9gSi4D3ru6ad63Z")` inside a `useEffect` in the `Contact` component (`src/routes/index.tsx:314`) — re-initializes on every mount of that component rather than once globally (no module-level singleton)
  - Send call: `emailjs.send("service_mkurl73", "template_b9lcxkl", templateParams)` (`src/routes/index.tsx:332`), where `templateParams` is `{ name, email, message }` read from the form's `FormData`
  - Auth: no environment variable — the EmailJS public key, service ID, and template ID are hardcoded string literals in `src/routes/index.tsx`. These are EmailJS "public" identifiers by design (meant to be exposed client-side) but are nonetheless visible verbatim in the bundled client JS; there is no server-side proxy.

**Video embeds:**
- YouTube (iframe embed, no SDK/API key) - Two portfolio project videos are embedded via `youtube.com/embed/...` iframes
  - Data source: `video: "https://www.youtube.com/embed/hKmZZ7tPWEY"` and `video: "https://www.youtube.com/embed/Z2ge0r9_vfU"` in `src/data/projects.ts:92,103`
  - Render: `src/routes/projects/$projectId.tsx:57-65` checks `project.video.includes("youtube.com/embed")` and renders an `<iframe>` when true
  - A third, page-specific YouTube embed is hardcoded directly in the route (not sourced from `projects.ts`): `src="https://www.youtube.com/embed/jYkGO5j1BM4"` (`src/routes/projects/$projectId.tsx:458`)

**Third-party script (via static asset export, not npm):**
- CreateJS (`code.createjs.com/1.0.0/createjs.min.js`) - Loaded by `<script>` tags inside the Adobe Animate HTML export at `public/animate/*.html` (e.g. `public/animate/1_LYNA.html`). This is a compiled/vendored asset, not a project dependency — it is fetched from Adobe's CDN by the exported HTML/JS itself when one of those pages is loaded (embedded via `<iframe src="/animate/1_MOHAMED.html">` in `src/routes/projects/$projectId.tsx:443`). Do not edit the minified `.js` files under `public/animate/`; treat the whole directory as an opaque static asset (6 scene HTML/JS files + `images/`, `imagesImad/`, `imagesframe2/`, `components/`, `videos/`).

**Fonts:**
- Google Fonts - `fonts.googleapis.com` / `fonts.gstatic.com`, loaded via `<link rel="preconnect">` + `<link rel="stylesheet">` tags in `src/routes/__root.tsx:46-48` (families: Cormorant Garamond, DM Sans). Not an npm package — pure external `<link>` reference resolved at request time.

## Data Storage

**Databases:**
- None. No database client, ORM, or connection string anywhere in the codebase.

**File Storage:**
- Local filesystem only, via Vite's static asset pipeline — all media (`public/assets/`, `public/videos/`, `public/media/`, `public/animate/`) is served as static files from the built `dist/client` output on Cloudflare Workers. No cloud storage (S3, R2, Cloudinary, etc.) integration.

**Caching:**
- None detected. No Redis/KV client, no `@tanstack/react-query` usage (the package is not present in current dependencies — it was removed in the cleanup).

## Authentication & Identity

**Auth Provider:**
- None. This is a static/public-facing portfolio site with no login, no user accounts, and no auth middleware.

## Monitoring & Observability

**Error Tracking:**
- None. No Sentry/Bugsnag/similar SDK. Errors are handled locally in-app: `DefaultErrorComponent` (`src/router.tsx`) and `NotFoundComponent` (`src/routes/__root.tsx`) render fallback UI; the contact form logs failures with `console.error(err)` (`src/routes/index.tsx:338`).

**Logs:**
- No structured logging or log-shipping integration. `console.error` is the only logging call in `src/`.

## CI/CD & Deployment

**Hosting:**
- Cloudflare Workers only — `wrangler.jsonc` (app name `tanstack-start-app`, `nodejs_compat` flag, entry `@tanstack/react-start/server-entry`). There is no Vercel config (`vercel.json` removed) and no standalone Node server (`server.js` removed); Cloudflare Workers is the sole deploy target.

**CI Pipeline:**
- No CI config files detected (no `.github/workflows/`, no other CI provider config found in the repo root). Verification is manual, via `npm run check` (typecheck + build + asset guard + `wrangler deploy --dry-run`) and `npm run deploy` (adds the real `wrangler deploy`).

## Environment Configuration

**Required env vars:**
- None. No `.env`/`.env.*` files exist, and no `VITE_*` variables are consumed by `src/` (only the Vite built-in `import.meta.env.DEV` is read, in `src/router.tsx`).

**Secrets location:**
- No secrets-management integration. The one credential-shaped values in the codebase (EmailJS public key/service ID/template ID) are inline string literals in `src/routes/index.tsx`, not pulled from any secret store — see the Email delivery entry above for the security caveat.

## Webhooks & Callbacks

**Incoming:**
- None. No webhook endpoints exist; the app has no server-side route handlers beyond the SSR page render (both `/` and `/projects/$projectId` read static in-memory data, no `loader`).

**Outgoing:**
- None beyond the EmailJS `send()` call described above (a direct client-to-EmailJS-API request, not a webhook in the traditional sense).

---

*Integration audit: 2026-09-27*

# External Integrations

**Analysis Date:** 2026-09-21

## APIs & External Services

**Email / Contact Form:**
- EmailJS - Sends the site's contact-form submissions directly from the browser (no backend involved)
  - SDK/Client: `@emailjs/browser` 4.4.1, imported in `src/routes/index.tsx:9`
  - Init call: `emailjs.init("vH9gSi4D3ru6ad63Z")` — `src/routes/index.tsx:506` (inside `Contact()` component's `useEffect`)
  - Send call: `emailjs.send("service_mkurl73", "template_b9lcxkl", templateParams)` — `src/routes/index.tsx:524`
  - Payload: `{ name, email, message }` built from a native `<form>` via `FormData` — `src/routes/index.tsx:509-540` onward
  - Auth: **Public key, service ID, and template ID are hardcoded as string literals in source**, not read from environment variables. There is no `.env`/`VITE_EMAILJS_*` indirection.
    - Public key: `vH9gSi4D3ru6ad63Z`
    - Service ID: `service_mkurl73`
    - Template ID: `template_b9lcxkl`
  - Note: EmailJS public keys are designed to be exposed client-side (that's the intended usage model for this SDK), so this is not a leaked secret in the traditional sense, but the service/template IDs being inline in `src/routes/index.tsx` means rotating them requires a code change and redeploy rather than an env var update.

**Fonts:**
- Google Fonts - Loaded via `<link>` tags (not self-hosted, not npm package)
  - Declared in `src/routes/__root.tsx` `head()` links array
  - Preconnects to `fonts.googleapis.com` and `fonts.gstatic.com`
  - Stylesheet: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap`

## Data Storage

**Databases:**
- None. No ORM, database client, or connection string found anywhere in `package.json` or `src/`.

**File Storage:**
- Local filesystem only — all portfolio media (images, videos, PDFs) are static assets checked into the repo:
  - `public/assets/` - images, `charte_graphique.pdf`
  - `public/videos/` - `hero.mp4`, `56_Lyna_REBAHI_CVvideo.mp4`
  - `public/animate/` - Adobe Animate exports (`.fla`, `.html`, `.js`) and brewing-process videos
  - `src/assets/` - additional imported images (bundled by Vite)
  - Project content/metadata itself is a static TypeScript array in `src/data/projects.ts` (no CMS, no API-backed content)

**Caching:**
- None detected (no Redis, no CDN cache config beyond whatever Cloudflare/Vercel apply by default at the platform level)

## Authentication & Identity

**Auth Provider:**
- None. This is a public, unauthenticated static/SSR portfolio site — no login, sessions, or user accounts.

## Monitoring & Observability

**Error Tracking:**
- None (no Sentry, Bugsnag, etc.). The only error surfacing is client-side: a `DefaultErrorComponent` in `src/router.tsx` that displays `error.message` when `import.meta.env.DEV` is true, and a try/catch around the EmailJS send call in `src/routes/index.tsx` that sets a French-language error message in UI state.

**Logs:**
- `console.error` calls only, e.g. `src/routes/index.tsx` (EmailJS send failure) and `server.js` (unhandled request errors in the Node HTTP wrapper)

## CI/CD & Deployment

**Hosting:**
- Dual target, both driven from the same TanStack Start build:
  - **Cloudflare Workers** - `wrangler.jsonc` (app name `tanstack-start-app`, `nodejs_compat`, entry `@tanstack/react-start/server-entry`); build integration via `@cloudflare/vite-plugin` (bundled into `@lovable.dev/vite-tanstack-config`)
  - **Vercel / generic Node** - `vercel.json` (`buildCommand: "npm run build"`, `outputDirectory: "dist/server"`); `server.js` provides a plain Node `http.createServer` wrapper around the built `dist/server/index.js` handler for non-edge Node hosting

**CI Pipeline:**
- None detected — no `.github/workflows/`, no other CI config files found in the repo root.

**Platform note:**
- The project scaffold originates from Lovable.dev: devDependency `@lovable.dev/vite-tanstack-config` (installed version 1.5.0) wraps Vite config and injects a dev-only "component tagger" plugin and sandbox environment detection. This implies the project may also be edited/deployed through the Lovable.dev platform in addition to Cloudflare/Vercel.

## Environment Configuration

**Required env vars:**
- None required for the app to build or run — no `.env*` files exist in the repo, and no `VITE_*`/`process.env` variables are referenced in `src/` (only the Vite built-in `import.meta.env.DEV` is used, in `src/router.tsx`).
- `.gitignore` proactively excludes `.dev.vars` and `.wrangler/` (Cloudflare local dev secrets directory), even though none are currently present.

**Secrets location:**
- None present in the repo. All third-party credentials currently in use (EmailJS public key/service ID/template ID) are inlined directly in `src/routes/index.tsx` rather than stored as secrets — see the "Email / Contact Form" note above.

## Webhooks & Callbacks

**Incoming:**
- None — no server-side API routes, no webhook handlers found under `src/routes/`.

**Outgoing:**
- None beyond the EmailJS SDK call described above (which is a direct API call, not a webhook).

---

*Integration audit: 2026-09-21*

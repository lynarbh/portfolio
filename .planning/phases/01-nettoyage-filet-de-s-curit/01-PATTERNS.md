# Phase 1: Nettoyage & filet de sécurité - Pattern Map

**Mapped:** 2026-09-27
**Files analyzed:** 14 (7 modified, 6 created, plus a batch of deletions)
**Analogs found:** 11 / 14 (the rest are config files that follow a documented recipe, with no analog in the repo)

> **Overrides of RESEARCH.md (decided after research, these win):**
> - Package manager = **npm**. `bun.lockb` and `bunfig.toml` are **deleted**; `package-lock.json` **stays**. Every `bun …` / `bunx …` in RESEARCH.md becomes `npm …` / `npx …`. Wave 0 does NOT install bun or reinstall node_modules.
> - Guard script = **`scripts/check-assets.mjs`** (plain ESM JavaScript, run by `node`), not `.ts` run by bun. Later: `scripts/media.mjs` (phase 2).
> - **No real `wrangler deploy`** this phase. `wrangler deploy --dry-run` only (inside `npm run check`).
> - Consequences: CLEAN-08 test becomes `test ! -e vercel.json && test ! -e server.js && test ! -e bun.lockb && test ! -e bunfig.toml && test -e package-lock.json`. `package.json` `check` = `tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run`. `npm uninstall <list>` replaces `bun remove <list>`. knip runs as `npx knip@6.38.0`.

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `src/routes/index.tsx` (edit: remove decorations, portrait URL) | route/component | request-response (SSR render) | itself: `HERO_VIDEO`/`HERO_FALLBACK` constants (lines 15-16) for absolute-URL media | exact (self) |
| `src/routes/projects/$projectId.tsx` (edit: drop `Petals`, drop lines 581-595) | route/component | request-response | itself: `/assets/palette%20de%20couleurs.png` (line 142), iframe (line 445) | exact (self) |
| `src/styles.css` (edit: remove dead rules) | config (theme/CSS) | transform | itself (layout below) | exact (self) |
| `src/data/projects.ts` (edit: line 54 `media: []`) | model (static data) | CRUD (read-only data) | itself: `business-card-mockup` entry uses `media: []` (line 41) | exact |
| `package.json` (edit: scripts + `npm uninstall`) | config | batch | its own `scripts` block (lines 6-14) | exact |
| `eslint.config.js` (edit: ignores) | config | — | its own `ignores` entry (line 9) | exact |
| `.gitignore` (edit: `+ media-src/`) | config | — | its own `charte_graphique.pdf` block (last 2 lines) | exact |
| `.prettierignore` (edit: `+ public`, `+ media-src`; **keep** `package-lock.json` line) | config | — | itself (one path per line) | exact |
| `scripts/check-assets.mjs` (new) | utility (CLI build guard) | file-I/O + batch | `server.js` (only ESM Node script in repo, **to be deleted**) for ESM/`node:` import style; RESEARCH.md §Code Examples for logic | partial (no CLI script exists) |
| `scripts/check-assets.exceptions.json` (new) | config (data) | — | none. Use RESEARCH.md JSON verbatim | no analog |
| `knip.json` (new, optional per research) | config | — | none. RESEARCH.md recipe | no analog |
| `media-src/` layout (new, gitignored, not committed) | file store | file-I/O | none. RESEARCH.md Pattern 1/2 (backup + quarantine) | no analog |
| `public/media/portrait.jpg` (new via `git mv public/assets/portrait.jpg`) | static asset | file-I/O | `public/videos/hero.mp4` + `HERO_VIDEO` constant | role-match |
| Deletions: `src/components/{Petals,CornerOrnament,ProjectModal}.tsx`, `src/components/ui/`, `src/lib/utils.ts`, `src/hooks/use-mobile.tsx`, `src/assets/`, `vercel.json`, `server.js`, `bun.lockb`, `bunfig.toml`, animate orphans, quarantined `public/assets/*` | — | — | n/a | n/a |

## Pattern Assignments

### `src/routes/index.tsx` (route, request-response)

**Analog:** itself. Public media are referenced by absolute URL through module-level constants.

**Absolute-URL media pattern** (lines 15-16), which the portrait must follow:
```tsx
const HERO_VIDEO = "/videos/hero.mp4";
const HERO_FALLBACK = "/assets/hero.png";
```
Apply this to the portrait. Either add `const PORTRAIT = "/media/portrait.jpg";` next to them, or inline `src="/media/portrait.jpg"`. The CLEAN-04 grep expects the literal `"/media/portrait.jpg"` in the file, so both forms pass. Then delete the import at line 8, `import portrait from "@/assets/portrait.jpg";`.

**Import block today** (lines 1-9). Remove lines 4, 6, 7, 8. Keep line 2 unchanged, because `useEffect/useMemo/useRef/useState` are still used by Hero/Nav/Projects/Contact:
```tsx
import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Petals } from "@/components/Petals";          // remove
import { Reveal } from "@/components/Reveal";
import { CornerOrnament } from "@/components/CornerOrnament"; // remove
import { ProjectModal } from "@/components/ProjectModal";     // remove
import portrait from "@/assets/portrait.jpg";                  // remove -> "/media/portrait.jpg"
import emailjs from "@emailjs/browser";
```

**About block to simplify** (lines 309-336). Keep `portrait-wrapper` and `portrait-image`. Remove line 311 (`portrait-gradient-border`), lines 324-330 (`floating-badge`) and line 336 (`<CornerOrnament />`). **Keep** the `ornament-card` class on line 335:
```tsx
<div className="portrait-wrapper mx-auto">
  <div className="portrait-gradient-border" />          {/* remove */}
  <div className="portrait-image">
    <img src={portrait} ... />                          {/* -> src="/media/portrait.jpg" */}
  </div>
  <div className="floating-badge">…20 ans…</div>        {/* remove */}
</div>
...
<div className="ornament-card relative bg-[var(--card)] p-8 sm:p-10">
  <CornerOrnament />                                     {/* remove */}
```

**Dead blocks to delete:** lines 26-197 (particle system, never instantiated), 495-497 (`function Skills() { return null; }`), 613-627 (`CustomCursor`, which holds the only `mousemove` listener at line 620, the PERF-02 target).

**Composition root after the edit** (currently lines 629-642). Drop `<Petals />`, `<CustomCursor />`, `<Skills />`:
```tsx
function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
```
Invariant: do not create, rename or delete any file under `src/routes/` (`routeTree.gen.ts` is generated).

---

### `src/routes/projects/$projectId.tsx` (route, request-response)

**Analog:** itself.

**Imports** (lines 1-4). Remove line 4:
```tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { Petals } from "@/components/Petals";   // remove
```

**Fragment wrapper** (lines 31-34). Remove `<Petals />` at line 33. The `<>…</>` can stay, which keeps the diff minimal:
```tsx
return (
  <>
    <Petals />                                   {/* remove */}
    <main className="min-h-screen bg-[var(--cream)] px-6 py-24">
```

**Broken reference to delete (CLEAN-07)**: remove the whole `<div className="mt-8">` at lines 581-595, including the `<video>` with `/videos/extraitpubSAE1.mp4` at line 589 and its caption `<p>`. The closing `</section>` at line 596 stays. The paragraph above it (lines 577-579) already links to foodfighters.fr, so no content is lost.

**URL-encoding reference pattern to keep untouched** (line 142) and iframe entry (line 445). The asset inventory has to honour both:
```tsx
src="/assets/palette%20de%20couleurs.png"
...
src="/animate/1_MOHAMED.html"
```

---

### `src/data/projects.ts` (model, static data)

**Analog:** `business-card-mockup` entry, line 41: `media: [],`.

Change line 54 (project `festival-identite`, `inProgress: true`):
```ts
media: ["/assets/festival-flyer.jpg", "/assets/festival-goodies.jpg"],
// ->
media: [],
```
`media?: string[]` is optional in the `Project` type (line 6), so removing the key would also typecheck. Keep `media: []` to mirror line 41. Lyna's uncommitted diff (−23 lines, drops `page-web-perso` and `mashup`) must go into the phase's first commit as is. Make the line-54 edit in a separate, later commit.

---

### `src/styles.css` (theme config, transform)

**Analog:** itself. File organisation to preserve:
- lines 1-3: `@import "tailwindcss" source(none); @source "../src"; @import "tw-animate-css";` **keep** (tw-animate-css is ignored in knip on purpose)
- line 5: `@custom-variant dark` (optional removal)
- lines 7-45: `@theme inline { … }` tokens (`--color-*`, `--font-*`, `--shadow-*`). **Keep**. `--shadow-glow` at line 43 can optionally go.
- lines 52-81: `:root` palette. **Keep**.
- lines 83-105: `@layer base`. **Keep**.
- after that: flat component classes, each preceded by a `/* Title */` comment. Remove each block together with its comment.

**Removal list (line-exact, current file of 406 lines):**
| Lines | Block | Action |
|------|------|--------|
| 47-50 | `/* Curseur personnalisé */ * { cursor: url(svg) }` | delete (second pink cursor, CLEAN-02) |
| 160-173 | `petal-fall` + `.petal` | delete |
| 175-193 | `float-y` + `.float` | delete |
| 195-206 | `portrait-float` keyframes | delete |
| 208-219 | `gradient-shift` keyframes | delete |
| 227-242 | `.portrait-gradient-border` | delete |
| 256 | `animation: portrait-float 4s ease-in-out infinite;` inside `.portrait-image` | delete this one line only |
| 267-297 | `.floating-badge`, `.badge-title`, `.badge-icon` | delete |
| 305-307, 309-319 | inside `@media (max-width: 640px)` | delete; **keep** `.portrait-image { max-width: 280px; }` (301-303) |
| 326-330 | `fill-bar` + `.skill-fill` | delete |
| 356-361 | `modal-in` | delete |
| 369-375 | `.ornament-card .corner*` | delete; **keep 363-368 `.ornament-card`** |
| 391-406 | `.sakura-cursor`, `.cursor-dot` media block | delete |

**Keep:** `.grain`, `.quest-btn`, `.chapter-title`, `.portrait-wrapper`, `.portrait-image` (+ img), `.reveal`, `.quest-card`, `.ornament-card`, `.hud-tag`.

Shape of `.portrait-image` after the edit (from lines 245-258, minus line 256):
```css
.portrait-image {
  position: relative;
  z-index: 1;
  width: auto;
  height: auto;
  aspect-ratio: 16 / 20;
  max-width: 350px;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 3px solid var(--cream);
  display: block;
  box-shadow: 0 8px 32px color-mix(in oklab, var(--plum) 18%, transparent);
}
```
Tip: edit from the bottom of the file upwards so that the line numbers above stay valid.

---

### `package.json` (config, batch)

**Analog:** its own `scripts` block (lines 6-14):
```json
"scripts": {
  "dev": "vite dev",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "preview": "vite preview",
  "start": "node server.js",
  "lint": "eslint .",
  "format": "prettier --write ."
},
```
Target (remove `start`, add `check`; `"type": "module"` at line 5 already makes `.mjs`/`.js` ESM):
```json
"scripts": {
  "dev": "vite dev",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "preview": "vite preview",
  "lint": "eslint .",
  "format": "prettier --write .",
  "check": "tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run"
},
```
- `wrangler` resolves from `node_modules/.bin` (transitive via `@cloudflare/vite-plugin`, npm-hoisted, verified present). RESEARCH Pitfall 4 no longer applies because npm stays.
- Dependency pruning: use `npm uninstall` with the RESEARCH.md list (43 packages, `@tanstack/react-query` included, `@tanstack/router-plugin` **kept**). It rewrites `package.json` and `package-lock.json` together. Never hand-edit the lockfile.
- Leave `"preview"` alone. It is broken under the Lovable wrapper (use `wrangler dev`), but it is out of scope.

---

### `eslint.config.js` (config)

**Analog:** its own global-ignores object (line 9):
```js
export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
```
Target:
```js
  { ignores: ["dist", ".output", ".vinxi", "public", "media-src", ".wrangler"] },
```
Note: the TS rules block is scoped to `files: ["**/*.{ts,tsx}"]` (line 12), but `eslintPluginPrettier` (line 26) applies to **all** files, `.mjs` included. So `scripts/check-assets.mjs` gets prettier-linted. Write it in `.prettierrc` style (double quotes, semicolons, trailing commas, 100 cols), or add `"scripts"` to ignores (research allows either). Leave `@typescript-eslint/no-unused-vars: "off"` as is (deferred).

---

### `.gitignore` / `.prettierignore` (config)

**`.gitignore` analog:** its last block, a comment line followed by a path:
```gitignore
# Brand guide source PDF (22.5 MiB) — pages are extracted to images, never commit the PDF
public/assets/charte_graphique.pdf
```
Append in the same style (keep the PDF line and the `extraitpubSAE1.mp4` line as defence):
```gitignore

# Working originals, backups and quarantine — never committed, never deployed
media-src/
```
This must land **before** any backup copy is made. Verify with `git check-ignore -q media-src/x`.

**`.prettierignore` analog:** current content, one bare path per line:
```
node_modules
dist
.output
.vinxi
pnpm-lock.yaml
package-lock.json
routeTree.gen.ts
```
Append `public` and `media-src`. **Keep `package-lock.json`** (npm stays).

---

### `scripts/check-assets.mjs` (utility / CLI guard, file-I/O + batch)

**Analog for module style:** `server.js`, the only ESM Node script in the repo. It is deleted in this phase, so copy its conventions before removing it:
```js
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
...
  } catch (error) {
    console.error('Error:', error);
```
Adapt it: use `node:`-prefixed specifiers and double quotes (per `.prettierrc`). Node is 24.15.0, so `import.meta.dirname` is available and the `fileURLToPath` dance is optional. It is still the safest pattern.

**Logic source:** RESEARCH.md §Code Examples `scripts/check-assets.ts`. It already uses only `node:` APIs. The port to `.mjs` means:
- Drop the TS-only syntax: `type Rule`, `type Exc`, the `: string[]` / `: string | null` annotations, the `(p: string, r: Rule)` params. Replace them with JSDoc if wanted.
- `const ROOT = join(import.meta.dirname, "..");` (or `process.cwd()`, since `npm run` executes from the package root).
- **Guard `.assetsignore`:** `dist/` is absent today, and the research sketch does `readFileSync(join(DIST, ".assetsignore"))` unguarded. Wrap it in `existsSync(...) ? … : new Set()`.
- Keep: `HARD=25 MiB` (never waivable), `FAIL=20 MiB` (waivable per file via `"size"`), `WARN=10 MiB`, the forbidden extensions `.fla .ai .tmp .pdf .psd .xd .aep .prproj`, the top-level MP4 box walk for faststart, `spawnSync("ffprobe", …)` with `r.error` leading to a graceful skip plus WARN, the stale-exception warning, printing every EXCEPTION on each run, and `process.exit(errors.length ? 1 : 0)` (exit 2 when `dist/client` is missing).
- Path comparison: `relative(DIST, abs).normalize("NFC")` against `e.path.normalize("NFC")`.
- It lives outside `tsconfig.json` `include` (`src/**`, `vite.config.ts`, `eslint.config.js`), so `tsc --noEmit` ignores it. No types are needed.

**Proof fixtures** (from RESEARCH, with `bun run check` replaced by `npm run check`): `mkfile -n 21m public/zz-dummy.bin`, the 10-bit ffmpeg clip and the non-faststart ffmpeg clip. Run one at a time and expect exit ≠ 0 with a `FAIL` line naming the file. Then `rm public/zz-*`, and exit is 0. Never `git add` fixtures.

---

### `scripts/check-assets.exceptions.json` (config data)

**No analog.** Use RESEARCH.md's JSON verbatim (3 entries: `videos/hero.mp4` waive `pix_fmt`; `videos/56_Lyna_REBAHI_CVvideo.mp4` waive `faststart`,`size`; `animate/videos/empattage.mp4` waive `size`). Paths are relative to `dist/client`, which is also the public URL path. Format per `.prettierrc` (2-space, double quotes).

---

### `knip.json` (optional config)

**No analog.** RESEARCH.md recipe. `ignore: ["public/**", "media-src/**", "src/routeTree.gen.ts"]`, `ignoreDependencies: ["tailwindcss", "tw-animate-css", "@tanstack/router-plugin"]`. Run with `npx knip@6.38.0` (not installed).

---

### `media-src/` layout (gitignored file store)

**No analog.** Mirror the repo-relative path under `media-src/`:
```
media-src/
├── public/…              # rsync -a public/ media-src/public/ ; diff -rq
├── src/assets/…          # rsync -a src/assets/ media-src/src/assets/ ; diff -rq  (affichepromo.png, prévention.png live only here)
├── charte_graphique.pdf  # moved out of public/assets
├── videos/extraitpubSAE1.mp4   # copied from ~/Desktop/site-backup/lynarebahi.fr/videos/
├── prod-mirror-2026-09-01/     # optional copy of ~/Desktop/site-backup/lynarebahi.fr
└── quarantine/public/assets/…  # mockup.jpg, site.jpg, Capture d’écran….png, logo.png, prototype.png (+ animate/fond.jpeg if chosen)
```
Use the RESEARCH Pattern 1 `backup()` shell function (sha256 compare before `rm`) and Pattern 2 (quarantine = `mv`, keeping the relative path).

---

### `public/media/portrait.jpg` (static asset)

Use `git mv public/assets/portrait.jpg public/media/portrait.jpg`. It is the same blob, so git history does not grow. It is served at `/media/portrait.jpg` the same way `/videos/hero.mp4` is (`public/` is copied verbatim to `dist/client`). New media belong in `public/media/`, not `public/assets/` (which collides with Vite's hashed `assets/` output dir).

## Shared Patterns

### Absolute-URL public media (no Vite imports of media)
**Source:** `src/routes/index.tsx:15-16`, `src/routes/projects/$projectId.tsx:142,445`, `src/data/projects.ts` (`thumbnail`/`media` strings), `src/routes/__root.tsx` (`href: "/logo.png"`)
**Apply to:** portrait migration, and every future media reference.
```tsx
const HERO_VIDEO = "/videos/hero.mp4";
thumbnail: "/assets/portfolio-thumbnail-03-web.png",
{ rel: "icon", type: "image/png", href: "/logo.png" },
```
Spaces are percent-encoded in source (`palette%20de%20couleurs.png`). Inventory and reverse scans must `decodeURIComponent(...).normalize("NFC")`.

### Formatting (applies to every edited/created text file)
**Source:** `.prettierrc`
```json
{ "printWidth": 100, "semi": true, "singleQuote": false, "trailingComma": "all" }
```
Do not run a repo-wide `prettier --write src` inside a logic commit (631 pre-existing prettier errors). If done at all, it goes in a final isolated commit.

### Verification gate per commit
```bash
npx tsc --noEmit && npx vite build            # per commit
node scripts/check-assets.mjs                 # once it exists
npm run check                                 # per wave / phase gate (includes wrangler deploy --dry-run)
```
Never edit `vite.config.ts` in reaction to a build error (Lovable wrapper). Revert the offending removal instead.

### Backup-before-delete (every binary removal)
**Source:** RESEARCH.md Pattern 1. `cp -p` / `rsync -a` into `media-src/<same path>`, compare with `shasum -a 256` / `diff -rq`, then `git rm` / `mv`. Never add a new blob > 1 MiB to git (check with RESEARCH §Git hygiene one-liner).

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| `scripts/check-assets.mjs` (logic) | utility | file-I/O batch | No CLI/build script exists; `server.js` supplies only the ESM style. Use RESEARCH §Code Examples, ported from TS to JS |
| `scripts/check-assets.exceptions.json` | config | — | New concept; use the RESEARCH JSON |
| `knip.json` | config | — | New; use the RESEARCH recipe |
| `media-src/` | file store | file-I/O | New gitignored tree; use RESEARCH Patterns 1-2 |

## Metadata

**Analog search scope:** repo root configs (`package.json`, `eslint.config.js`, `.gitignore`, `.prettierignore`, `.prettierrc`, `tsconfig.json`, `wrangler.jsonc`, `bunfig.toml`, `vercel.json`, `server.js`), `src/routes/*`, `src/data/projects.ts`, `src/styles.css`, `src/components/`, `public/` top level
**Files scanned:** 16
**Environment facts re-verified:** node v24.15.0; `dist/` currently absent (so `.assetsignore` must be read defensively); `scripts/` and `public/media/` do not exist yet; `tsconfig.json` include excludes `scripts/`
**Pattern extraction date:** 2026-09-27

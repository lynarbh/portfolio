# Phase 2: Médias légers & hero qui joue partout - Pattern Map

**Mapped:** 2026-09-28
**Files analyzed:** 17 (9 new, 8 modified), plus the bulk deletion of `public/assets/**` and `public/videos/**`
**Analogs found:** 15 / 17. The other 2 have no analog; use the prototype or RESEARCH instead.

Sources read: 02-CONTEXT.md (the « Décisions ajoutées après recherche » section is authoritative), 02-RESEARCH.md (all of it), 02-UI-SPEC.md, `.planning/codebase/CONVENTIONS.md` / `STRUCTURE.md`, every analog listed below, and the validated prototype in `scratchpad/phase2-research/repo-copy/`.

---

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `scripts/media.mjs` (NEW) | utility (offline CLI) | batch, file-I/O, transform | `scripts/check-assets.mjs` | exact on style: Node ESM, `spawnSync`, walk, report, exit codes |
| `scripts/media/{images,video,pdf,report}.mjs` (NEW, optional split if > ~300 lines) | utility module | transform | `scripts/check-assets.mjs` (`pixFmt()`, `topLevelBoxes()`) | role-match |
| `scripts/verify-media.mjs` (NEW, Wave 0 in RESEARCH §Validation) | test / guard | batch, read-only | `scripts/inventory-assets.mjs` + `scripts/check-assets.mjs` | exact |
| `media-src/manifest.json` (NEW, gitignored, hand-written) | config | static data | `scripts/check-assets.exceptions.json` (hand-written JSON, `$comment`, validated on load) | role-match |
| `media-src/.cache.json` (NEW, generated, gitignored) | config (generated) | file-I/O | none. Already covered by the `media-src/` line in `.gitignore` | n/a |
| `src/data/media.generated.ts` (NEW, generated) | model (static data) | transform output | `src/routeTree.gen.ts` (header) + `src/data/projects.ts` (typed data module) | exact on the header convention, role-match on shape |
| `src/components/Picture.tsx` (NEW) | component | request-response (SSR markup) | `src/components/Reveal.tsx` | exact on props/export style (Picture has no hooks) |
| `src/server.ts` (NEW) | middleware / server entry | request-response (edge) | none in the repo. Validated prototype `scratchpad/phase2-research/repo-copy/src/server.ts` | no analog, prototype |
| `src/cloudflare-workers.d.ts` (NEW) | config (types) | n/a | none in the repo. Prototype `repo-copy/src/cloudflare-workers.d.ts` | no analog, prototype |
| `src/routes/index.tsx` (MOD): `Hero` state machine and toggle, `head()` preload, portrait, CV video, `ProjectCard` | route / component | event-driven (media events) + SSR | itself: `Hero` lines 64-126, `About` CV play button 170-199, `Nav` 43-59, `__root.tsx` `head()` 28-50 | exact (in-place edit) |
| `src/routes/projects/$projectId.tsx` (MOD): 50 `<img>` → `<Picture>` | route | SSR render | itself, lines 81-640 | exact (in-place edit) |
| `src/data/projects.ts` (MOD): `thumbnail: MediaId`, `media?: readonly MediaId[]`, Tafsut gallery, drop `inProgress` | model | static data | itself, lines 1-14 and 48-60 | exact |
| `wrangler.jsonc` (MOD) | config | n/a | itself + prototype `repo-copy/wrangler.jsonc` | exact |
| `package.json` (MOD): `"media"` script, `sharp` pinned devDependency | config | n/a | itself, `scripts` block | exact |
| `scripts/check-assets.exceptions.json` (MOD → empty list) | config | n/a | itself | exact |
| `scripts/check-assets.mjs` (MOD): total budget rule ≤ 60 MiB, not waivable | utility / guard | batch | itself, lines 25-28, 200-215, 240-249 | exact |
| `knip.json` / `.prettierignore` / `eslint.config.js` (MOD, maybe) | config | n/a | themselves (`routeTree.gen.ts` entries) | exact |

Deleted after migration: all of `public/assets/**` (56 files), `public/videos/**` (2 files) and `public/media/portrait.jpg`. The process videos under `public/animate/videos/*.mp4` are overwritten in place under the same names.

---

## Pattern Assignments

### `scripts/media.mjs` (utility, batch / file-I/O / transform)

**Analog:** `scripts/check-assets.mjs` (249 lines). The secondary analog is `scripts/inventory-assets.mjs` (119 lines).

**Header comment convention** (check-assets.mjs lines 1-8; CONVENTIONS.md:92 makes it mandatory for new scripts). The header states the purpose, the side effects and any non-obvious flag:
```js
// Asset guard: run after `vite build`. Fails on oversize files, forbidden source files,
// non-yuv420p videos and non-faststart MP4s in dist/client (what Cloudflare will serve).
//
// Requires ffprobe (FFmpeg) on PATH for the pix_fmt rule. Without it, the rule is skipped
// with a WARN by default. Strict mode turns "ffprobe not found" into a failure; use it on
// CI or any machine where the pix_fmt check must be enforced:
//   node scripts/check-assets.mjs --strict      (or CHECK_ASSETS_STRICT=1)
// Strict mode is deliberately not wired into `npm run check`.
```
For `media.mjs`, the header should say:
- it runs manually (`npm run media`), never in check, build or deploy;
- it reads `media-src/manifest.json`;
- it writes `public/media/**`, `public/animate/videos/*.mp4`, `src/data/media.generated.ts` and `media-src/.cache.json`;
- it needs sharp, ffmpeg, ffprobe and gs;
- its output is deterministic.

**Imports and root constants** (check-assets.mjs lines 9-29). Use named `node:` imports, `ROOT` from `import.meta.dirname`, and SCREAMING_SNAKE constants:
```js
import {
  readdirSync,
  statSync,
  readFileSync,
  existsSync,
  ...
} from "node:fs";
import { join, relative, extname } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = join(import.meta.dirname, "..");
const DIST = join(ROOT, "dist/client");
const EXCEPTIONS_FILE = join(ROOT, "scripts/check-assets.exceptions.json");
const MiB = 1024 * 1024;
const HARD = 25 * MiB; // Cloudflare per-asset limit, never waivable
```
Mirror it with `MEDIA_SRC = join(ROOT, "media-src")`, `MANIFEST = join(MEDIA_SRC, "manifest.json")`, `CACHE_FILE = join(MEDIA_SRC, ".cache.json")`, `PUBLIC = join(ROOT, "public")`, `GENERATED = join(ROOT, "src/data/media.generated.ts")` and `LADDER = [640, 1200, 2400]`. Add `import sharp from "sharp"` (a devDependency, only ever imported from `scripts/`) and `createHash` from `node:crypto` for the cache.

**Precondition / exit 2 pattern** (check-assets.mjs lines 31-34):
```js
if (!existsSync(DIST)) {
  console.error("dist/client missing: run vite build first");
  process.exit(2);
}
```
Apply the same check to a missing `media-src/manifest.json` and to missing binaries (`ffmpeg`, `ffprobe`, `gs`), detected with `spawnSync(...).error`. Exit code convention: 2 = environment or config error, 1 = rule failures, 0 = OK.

**Manifest loader and validator.** Copy `loadExceptions()` (check-assets.mjs lines 43-78). It parses JSON inside try/catch, uses an `invalid()` helper that prints the file path and message and exits 2, and checks each entry with a `where` string:
```js
  const invalid = (msg) => {
    console.error(`check-assets: invalid ${relative(ROOT, EXCEPTIONS_FILE)}: ${msg}`);
    process.exit(2);
  };
  let parsed;
  try {
    parsed = JSON.parse(readFileSync(EXCEPTIONS_FILE, "utf8"));
  } catch (err) {
    invalid(err.message);
  }
  const list = parsed?.exceptions ?? [];
  if (!Array.isArray(list)) invalid('"exceptions" must be an array');
  for (const [i, e] of list.entries()) {
    const where = `exception #${i} ${JSON.stringify(e)}`;
    if (typeof e?.path !== "string" || e.path === "") invalid(`${where}: "path" must be a string`);
```
The manifest checks are:
- ids are unique (a `Set`);
- ids match `/^[a-z0-9-]+\/[a-z0-9-]+$/`;
- every `src` exists under `media-src/`;
- `preset` ∈ {photo, graphic}, default `graphic`;
- every gallery member is a known id;
- PDF pages are integers.

**Subprocess wrapper.** Copy `pixFmt()` (check-assets.mjs lines 169-193). `spawnSync` takes an args array (never a shell string, because file names contain spaces and `ø`), uses `encoding: "utf8"`, returns `null` when the binary is missing and `{ error }` on a non-zero exit, and keeps the first stderr line:
```js
function pixFmt(file) {
  const r = spawnSync(
    "ffprobe",
    ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=pix_fmt", "-of", "csv=p=0", file],
    { encoding: "utf8" },
  );
  if (r.error) return null;
  if (r.status !== 0) {
    const firstLine = (r.stderr || "").trim().split("\n")[0].trim();
    return { error: firstLine || `exit ${r.status}` };
  }
  const value = r.stdout.trim().split(/[\n,]/)[0].trim();
  return value ? { pixFmt: value } : { error: "no video stream" };
}
```
Build the `ffmpeg` and `gs` calls the same way, with args arrays. The exact flags are in RESEARCH §Code Examples (hero lines 562-567, CV 577-580, process 584-588, PDF 593-594). Render the Tafsut PDF with one `gs` call per page (`-dFirstPage=N -dLastPage=N`), never `-sPageList`.

**Recursive walk** (check-assets.mjs lines 132-135, the same code as inventory-assets.mjs lines 19-22):
```js
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
```

**Faststart verification.** Import nothing from `check-assets.mjs`, because it runs top-level code and exits. Copy `topLevelBoxes()` (lines 137-164) into `scripts/media/video.mjs` or `scripts/verify-media.mjs`. Do not import it.

**NFC and path normalisation** (inventory-assets.mjs lines 16-17 and check-assets.mjs line 204). macOS stores names in NFD, so normalise them:
```js
const nfc = (s) => s.normalize("NFC");
const toUrl = (abs) => "/" + relative(PUBLIC, abs).split(sep).join("/");
```
The kebab rule is in RESEARCH line 198: NFKD, then an explicit `ø`/`Ø` map, strip the combining marks, lowercase, then `[^a-z0-9]+` → `-`. Decode `%20` first by reusing `decodePercent` from inventory-assets.mjs lines 26-33.

**Report and exit** (check-assets.mjs lines 195-198 and 240-249). Collect `errors[]` / `warns[]`, print one summary line, then prefixed `WARN` / `FAIL` lines, then exit:
```js
console.log(
  `check-assets: ${(total / MiB).toFixed(1)} MiB in dist/client, ${exceptions.length} exception(s):`,
);
for (const w of warns) console.warn(`  WARN  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(errors.length ? `check-assets: ${errors.length} failure(s)` : "check-assets: OK");
process.exit(errors.length ? 1 : 0);
```
Use the same format for `media:`. Print a per-file line (`id`, sizes, SSIM, `cached`/`encoded`), print `WARN` below the SSIM thresholds (graphic < 0.96, photo < 0.93), and print total MiB against the 60 MiB budget.

**Determinism rules to encode (no analog; see RESEARCH):**
- sort keys with `(a, b) => (a < b ? -1 : a > b ? 1 : 0)`, never `localeCompare`;
- no timestamps and no absolute paths in any output;
- call `sharp.cache(false)`;
- x264 runs single-pass CRF with `-map_metadata -1 -fflags +bitexact -flags:v +bitexact`;
- the cache key = sha1(source bytes + JSON of the effective options).

---

### `scripts/verify-media.mjs` (test / guard, read-only batch)

**Analog:** `scripts/inventory-assets.mjs`. Copy its header comment, which says the script is read-only and states when it exits 1 (lines 1-5):
```js
// Asset inventory: classifies every file served from public/ (outside public/animate/) as
// REF (full URL path found in the corpus), NAME-ONLY (only the file name found) or UNREF,
// and reverse-scans src/ for /assets|videos|animate|media/ URLs that point to missing files.
// URLs are percent-decoded and everything is compared in NFC (macOS may store NFD names).
// Read-only: this script never moves or deletes anything. Exit 1 if any MISSING.
```
Copy the `print(label, list)` helper and the final `KEY=n` summary line from lines 109-119:
```js
const print = (label, list) => {
  console.log(`\n${label} (${list.length})`);
  for (const item of list) console.log(`  ${item}`);
};
...
process.exit(missing.size > 0 ? 1 : 0);
```
The checks are listed in RESEARCH line 713:
- `max(w,h) ≤ 2400`;
- no ICC profile;
- names match `^[a-z0-9-]+$`;
- every URL in `images[id]` exists on disk.

It can read the generated module's URLs with the same `QUOTED_RE` scan as inventory-assets.mjs lines 80-100, or by importing the `.ts` file. Node 24 can strip types, but the scan is safer. Note that `inventory-assets.mjs` already scans `src/**` for `/media/…` literals and so validates `media.generated.ts` for free. It excludes only `routeTree.gen.ts` (line 36). Leave that exclusion list as it is, so the generated manifest stays covered.

---

### `media-src/manifest.json` (config, hand-written, gitignored)

**Analog:** `scripts/check-assets.exceptions.json`. It is a hand-written JSON file with a `$comment` key and a top-level array that its script validates on load:
```json
{
  "$comment": "Legacy media tolerated until phase 2 re-encode. Empty this list in phase 2. 25 MiB hard limit and forbidden extensions are never waivable.",
  "exceptions": [
    { "path": "videos/hero.mp4", "waive": ["pix_fmt"], "reason": "…" }
  ]
}
```
Use the schema from RESEARCH Pattern 1 (lines 310-338): `defaults`, `images[]`, `pdf[]` with `pages[]` in gallery order, `galleries`, and `videos[]` with `class` ∈ hero | cv | process. The Tafsut pages, in order, are **1, 9, 16, 21, 24, 23, 25, 27, 28, 32** (CONTEXT line 51). Each carries `alt: "Charte graphique Tafsut — {{planche}}"` (UI-SPEC line 197). Because the file is gitignored, the plan must say that it lives only on Lyna's machine. The committed record of its effect is `media.generated.ts`.

---

### `src/data/media.generated.ts` (model, generated, never hand-edited)

**Header analog:** `src/routeTree.gen.ts` lines 1-9:
```ts
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.
```
Emit a similar header: `/* eslint-disable */` plus `// AUTO-GENERATED by scripts/media.mjs from media-src/manifest.json — DO NOT EDIT. Run \`npm run media\`.` Do **not** emit `// @ts-nocheck`. The file must be type-checked, because `MediaId` and `satisfies` are its whole point.

**Data-module analog:** `src/data/projects.ts` lines 1-16. The type and the data live in the same file, with named exports:
```ts
export type Project = {
  id: string;
  ...
};

export const projects: Project[] = [
```
The shape to generate is RESEARCH Pattern 2 (lines 340-367): `MediaPreset`, `Rung`, `ImageEntry`, `images = {…} as const satisfies Record<string, ImageEntry>`, `type MediaId = keyof typeof images`, `galleries`, `videos`. `width`/`height` and each rung's `w` come from sharp's `info`, never from the ladder constant.

**Formatter and lint exclusions (config follow-up).** `routeTree.gen.ts` is listed in `.prettierignore` and in `knip.json` `ignore`. For `media.generated.ts`, do one of the following:
- (a) emit Prettier-clean output (100 cols, double quotes, trailing commas) so that `npx prettier --check` passes; or
- (b) add `src/data/media.generated.ts` to `.prettierignore` (line 7 lists `routeTree.gen.ts`) and to `knip.json` `"ignore"`.

(b) is the analogous convention and the safer choice. `eslint.config.js` needs nothing, because the `/* eslint-disable */` header covers it.

---

### `src/components/Picture.tsx` (component, SSR markup, no state)

**Analog:** `src/components/Reveal.tsx` (40 lines). Copy the named `export function`, the inline destructured prop type, the default for the optional `className`, and the template-literal class merge (there is no `cn()` any more):
```tsx
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  ...
    <div
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`}
```
Differences for Picture:
- no hooks and no `useEffect`, so it stays SSR-identical;
- the import is `import { images, type MediaId } from "@/data/media.generated";`, using the `@/` alias as in `index.tsx:3-4`.

The full body is in RESEARCH Pattern 4 (lines 378-398):
- `<picture className="contents">`;
- an AVIF `<source>`, then a WebP `<source>` only when `m.webp` exists;
- `<img src={m.fallback} width height alt loading="lazy" decoding="async">`;
- classes merged as `["h-auto", className].filter(Boolean).join(" ")`.

Props are `id`, `alt`, `sizes` (all required) and `className?`. There is no `priority` prop (UI-SPEC line 166).

---

### `src/server.ts` (edge server entry, request-response)

**No analog in the repo.** The current entry is the package default (`wrangler.jsonc` `"main": "@tanstack/react-start/server-entry"`), whose implementation is `node_modules/@tanstack/react-start/dist/default-entry/esm/server.js`:
```js
var fetch = createStartHandler(defaultStreamHandler);
function createServerEntry(entry) {
	return { async fetch(...args) { return await entry.fetch(...args); } };
}
var server_default = createServerEntry({ fetch });
export { createServerEntry, server_default as default };
```
**Copy the validated prototype:** `scratchpad/phase2-research/repo-copy/src/server.ts`. It is 32 lines and has passed tsc, build, dry-run and the curl 206 test. Adapt one line: the prototype regex still includes the legacy `/videos/` path:
```ts
const VIDEO = /^\/(?:media\/video|animate\/videos|videos)\/[^/]+\.mp4$/;   // prototype
const VIDEO = /^\/(?:media\/video|animate\/videos)\/[^/]+\.mp4$/;          // final (RESEARCH line 413), /videos/** deleted
```
The rest of the prototype is copied verbatim:
- the cache key is `origin + pathname`;
- `cache.match(request)` answers first;
- on a miss it does `env.ASSETS.fetch(key)`, forces `Cache-Control: public, max-age=86400`, sets `Accept-Ranges: bytes`, calls `cache.put`, then re-runs `match`, with `?? res` as the fallback;
- `export default createServerEntry({ fetch(request) { … return handler.fetch(request); } })`.

The comment style follows CONVENTIONS: a short "why" block above the regex, in English.

### `src/cloudflare-workers.d.ts` (types)

**No analog.** Copy the prototype `repo-copy/src/cloudflare-workers.d.ts` verbatim. It is 4 lines, `declare module "cloudflare:workers" { export const env: { ASSETS: { fetch(request: Request): Promise<Response> } }; }`. `tsconfig.json` `include` already covers `src/**/*.ts`, so no tsconfig change is needed. Do not add `@cloudflare/workers-types`.

---

### `src/routes/index.tsx` (route, MODIFIED)

**Analog: the file itself.**

**Imports** (lines 1-5). Add `import { Picture } from "@/components/Picture";` and `import { videos } from "@/data/media.generated";` next to the existing `@/` imports:
```tsx
import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
```

**Route + `head()` preload.** Today the route has only `component` (lines 7-9). The `head()` / `links` object style to copy is in `src/routes/__root.tsx` lines 28-50:
```tsx
export const Route = createRootRoute({
  head: () => ({
    meta: [ ... ],
    links: [
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
```
The target is RESEARCH Pattern 6: `head: () => ({ links: [{ rel: "preload", as: "image", type: "image/webp", href: videos.hero.poster, fetchPriority: "high" }] })`. The `href` must equal the `<video poster>` string byte for byte, which is guaranteed by using `videos.hero.poster` in both places.

**Constants to replace** (lines 11-13). Remove `HERO_VIDEO`, `HERO_FALLBACK` and `PORTRAIT`, and read from `videos.hero.src` / `videos.hero.poster` / the `"home/portrait"` id:
```tsx
const HERO_VIDEO = "/videos/hero.mp4";
const HERO_FALLBACK = "/assets/hero.png";
const PORTRAIT = "/media/portrait.jpg";
```

**Hero: the current effect to replace** (lines 64-77) and the `<video>` markup (lines 81-94):
```tsx
function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked - that's OK, poster image displays
        });
      }
    }
  }, []);
...
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={HERO_FALLBACK}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
```
The replacement effect is RESEARCH lines 617-642:
- `useState<"playing" | "paused">("paused")`, `failed`, `userPaused` ref;
- `matchMedia` reduced motion;
- `play`/`pause`/`error` listeners;
- `visibilitychange`.

It keeps the same `.catch(() => {})` idiom (CONVENTIONS: fire-and-forget promises).

Markup deltas:
- `autoPlay` removed;
- `preload="metadata"`;
- `aria-hidden="true"`;
- `src={videos.hero.src}` placed directly on `<video>` (a single source, so the `error` event fires on the video);
- the fallback text kept verbatim;
- the gradient div (lines 95-101) left untouched.

**Toggle button: copy from the existing buttons in this file:**
- `Nav` menu button (lines 43-49): `aria-label`, `onClick={() => setOpen((v) => !v)}`. Use it as the toggle-state idiom only. The new button needs `type="button"`, `aria-pressed`, and an `sr-only` constant label « Mettre en pause la vidéo » instead of `aria-label`.
- The CV play glyph (lines 192-198) is the exact play icon the UI-SPEC requires:
```tsx
              <svg
                className="w-20 h-20 text-[var(--sakura)] drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
```
  The new icon uses `h-5 w-5 aria-hidden="true"`. The pause path is `M7 5h3.5v14H7zM13.5 5H17v14h-3.5z`.
- The `color-mix` arbitrary-value class idiom comes from line 52: `bg-[color-mix(in_oklab,var(--plum)_92%,transparent)] backdrop-blur`. The toggle uses `bg-[color-mix(in_oklab,var(--plum)_70%,transparent)]`, `border-[color-mix(in_oklab,var(--gold)_70%,transparent)]`, `backdrop-blur-[6px]`, `fixed z-30 bottom-4 right-4 sm:bottom-6 sm:right-6 h-11 w-11 rounded-[2px]`, focus-visible sakura outline, and `transition-colors duration-300 motion-reduce:transition-none`. The full contract is UI-SPEC lines 130-144.
- Placement: inside `Hero`, right after the `fixed inset-0 -z-10` wrapper div (after line 102). Render it with `hidden` when `failed`.

**Portrait** (lines 135-143) becomes `<Picture id="home/portrait" alt="Portrait de Lyna Rebahi" sizes="(min-width: 640px) 350px, 280px" />`. The hardcoded `width={300} height={300}` go away, because the dimensions come from the manifest:
```tsx
            <div className="portrait-image">
              <img
                src={PORTRAIT}
                alt="Portrait de Lyna Rebahi"
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
```

**CV video** (line 178): `<source src="/videos/56_Lyna_REBAHI_CVvideo.mp4" type="video/mp4" />` becomes `videos.cv.src` (`/media/video/cv-lyna-rebahi.mp4`). Everything else in lines 170-199 stays unchanged, including `preload="metadata"`.

**ProjectCard thumbnail** (lines 216-221). Keep the classes and add `sizes` from UI-SPEC line 172:
```tsx
        <img
          src={p.thumbnail}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
```
becomes `<Picture id={p.thumbnail} alt={p.title} sizes="(min-width: 1280px) 395px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, calc(100vw - 48px)" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />`. Note that `Picture` prepends `h-auto` and the caller passes `h-full`. Both classes land on the element, and Tailwind v4 orders them by specificity and source order, not by class order. Either verify that `h-full` wins inside the `aspect-[4/5]` box, or leave `h-auto` out when `className` contains an `h-` class. Flag this for the executor's visual check.

---

### `src/routes/projects/$projectId.tsx` (route, MODIFIED: 50 `<img>` → `<Picture>`)

**Analog: the file itself.**

Imports (lines 1-3). Add `import { Picture } from "@/components/Picture";`:
```tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
```

**The multi-line call-site shape used in every branch** (e.g. lines 87-91, 2-col grid):
```tsx
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/assets/mockupcarterose.png"
                    alt="Mock-up carte de visite — variante rose"
                    className="w-full rounded-md object-cover shadow"
                  />
```
becomes `<Picture id="business-card-mockup/mockupcarterose" alt="…verbatim…" sizes={SIZES_2COL} className="w-full rounded-md object-cover shadow" />`. The alt and the classes stay identical, and the order and headings stay the same (PROJ-07).

**Single-line call sites** (sae-2 Instagram grid lines 427-434 and site grid lines 476-479):
```tsx
                  <img src="/assets/original1.png" alt="Original - Post 1" className="w-full rounded-md object-cover shadow" />
```
They follow the same substitution.

**Percent-encoded and non-ASCII sources map to kebab ids:**
- line 140 `"/assets/palette%20de%20couleurs.png"` → `business-card-mockup/palette-de-couleurs`;
- line 311 `"/assets/skøllrub_logo_final.png"` → `sae-2/skollrub-logo-final`;
- lines 347+ `Etiquettes_SkøllRub_*-1.png` → `sae-2/etiquettes-skollrub-*-1`.

**`sizes` per container.** Declare these as module-level SCREAMING_SNAKE constants at the top of the file, following the `CATEGORIES` / `SKILL_TAGS` convention in index.tsx:15-21:

| Lines | Container | sizes |
|---|---|---|
| 86, 105, 145, 192, 235, 254, 273, 340, 426, 475, 517, 536, 630 | `grid gap-4 sm:grid-cols-2` (or `gap-6`) | `(min-width: 944px) 440px, (min-width: 640px) calc(50vw - 32px), calc(100vw - 48px)` |
| 124-128 (logoen8variantes), 324-330 (chartegraphique), single full-width images in `clip` (179, 222) | full width `max-w-4xl` | `(min-width: 944px) 896px, calc(100vw - 48px)` |
| 310-314 `max-w-xs` logo | fixed cap | `320px` |
| 139-143 `max-w-md` palette | fixed cap | `448px` |
| 411-415 `max-w-lg` moodboard | fixed cap | `512px` (RESEARCH line 402) |
| 555-570 `sm:grid-cols-3` maquettes | 3-col | `(min-width: 944px) 288px, (min-width: 640px) calc(33vw - 32px), calc(100vw - 48px)` |

**The generic gallery** (lines 628-640) is what renders the Tafsut planches:
```tsx
        {project.media && project.media.length > 0 && (
          <Reveal delay={400}>
            <div className={`mt-12 grid gap-4 ${project.media.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {project.media.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} — vue ${i + 1}`}
                  className="w-full rounded-md object-cover shadow"
                />
              ))}
            </div>
          </Reveal>
        )}
```
It becomes `project.media.map((id, i) => <Picture key={id} id={id} alt={images[id].alt ?? \`${project.title} — vue ${i + 1}\`} sizes={project.media.length > 1 ? SIZES_2COL : SIZES_FULL} className="w-full rounded-md object-cover shadow" />)`. The manifest `alt` (Tafsut) takes priority, and the generic pattern is kept as the fallback (UI-SPEC line 198). This needs `images` imported from `@/data/media.generated`.

Untouched: the `project.id === "…"` guards (lines 81, 173, 293, 512, which must still count 4), the YouTube iframes (lines 59, 442, 457), and the `/animate/1_MOHAMED.html` iframe.

---

### `src/data/projects.ts` (model, MODIFIED)

**Analog: the file itself.** The type block (lines 1-14):
```ts
export type Project = {
  id: string;
  title: string;
  category: ...;
  thumbnail: string;
  media?: string[];
  ...
  inProgress?: boolean;
};
```
The changes are `thumbnail: MediaId;` and `media?: readonly MediaId[];`. Add `import { galleries, type MediaId } from "@/data/media.generated";` at the top. This is the first import in this file; follow the `@/` style.

Entries use `// --- CATÉGORIE ---` separators (lines 17, 35, 48, 62, 86, 110). Keep them. The `festival-identite` entry (lines 49-60) is the one to edit:
```ts
    thumbnail: "/assets/portfolio-thumbnail-01-branding.png",
    media: [],
    ...
    inProgress: true,
```
It becomes `thumbnail: "thumbnails/portfolio-thumbnail-01-branding"` and `media: galleries["festival-identite"]`, and the `inProgress: true` line is deleted. Afterwards `grep -c inProgress` must equal 1, the type field only.

The other thumbnail and media string replacements are at lines 25, 26, 40, 53, 67, 68, 78, 79, 91, 102, 115 and 126, using the id map in RESEARCH lines 183-196. Leave the `media: []` entries (business-card-mockup, sae-1, sae-2) as `[]`, because their content is in the branches.

---

### `wrangler.jsonc` (config, MODIFIED)

**Analog: the file itself.** It uses JSONC with a trailing comma and one key per line:
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "tanstack-start-app",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "@tanstack/react-start/server-entry",
}
```
The target comes from the prototype `repo-copy/wrangler.jsonc`, without the legacy `/videos/*`:
```jsonc
  "main": "src/server.ts",
  "assets": { "binding": "ASSETS", "run_worker_first": ["/media/video/*", "/animate/videos/*"] },
```
`vite.config.ts` stays untouched (CONTEXT line 44). Its header comment forbids re-adding plugins.

### `package.json` (config, MODIFIED)

**Analog: the `scripts` block of the file itself:**
```json
    "check": "tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run",
    "deploy": "npm run check && wrangler deploy"
```
- Add `"media": "node scripts/media.mjs"`. Never chain it into `check`, `build` or `deploy`; RESEARCH line 712 gives a static test for this.
- Optionally add `"verify-media": "node scripts/verify-media.mjs"`.
- Install with `npm install --save-dev --save-exact sharp@0.35.4`. The result is an exact pin, unlike the `^` ranges elsewhere; that is intentional for determinism.

### `scripts/check-assets.exceptions.json` (config, MODIFIED)

**Analog: itself.** Keep the object shape and update the `$comment`, e.g. `{ "$comment": "Waivers for legacy media. Empty since phase 2 re-encode. 25 MiB hard limit, forbidden extensions and the 60 MiB total budget are never waivable.", "exceptions": [] }`. `loadExceptions()` already accepts an empty array (lines 58-59), and the stale-exception warning (lines 231-233) disappears.

### `scripts/check-assets.mjs` (guard, MODIFIED: total budget rule)

**Analog: itself.** The thresholds block (lines 24-28) and the running `total` (lines 200-207) already exist:
```js
const MiB = 1024 * 1024;
const HARD = 25 * MiB; // Cloudflare per-asset limit, never waivable
const FAIL = 20 * MiB; // waivable with rule "size"
const WARN = 10 * MiB;
...
let total = 0;
...
  total += size;
```
Add `const BUDGET = 60 * MiB; // whole dist/client, never waivable`. After the loop, before the summary on line 240, add `if (total > BUDGET) errors.push(\`dist/client ${(total / MiB).toFixed(1)} MiB > 60 MiB total budget (not waivable)\`)`. Do **not** add `"budget"` to `RULES` (line 41). Update the header comment (lines 1-2) to mention the budget.

### `knip.json` / `.prettierignore` (config, MODIFIED if needed)

`knip.json` currently reads:
```json
  "ignore": ["public/**", "media-src/**", "src/routeTree.gen.ts"],
  "ignoreDependencies": ["tailwindcss", "@tanstack/router-plugin"]
```
- Add `"src/data/media.generated.ts"` to `ignore` if knip reports unused generated exports (for example `ImageEntry` or `Rung`).
- knip might flag `sharp` as an unused dependency, because it is imported only from `scripts/*.mjs`. Check `npx knip` after the install. If it does, either add `scripts/*.mjs` as an entry or add `sharp` to `ignoreDependencies`.
- `.prettierignore`: see the note in the `media.generated.ts` section.

### `.gitignore` (no change expected)

`media-src/` (line 42) already covers `manifest.json` and `.cache.json`. The lines `public/videos/extraitpubSAE1.mp4` and `public/assets/charte_graphique.pdf` become obsolete once those directories are deleted. Removing them is optional cleanup and harmless to keep.

---

## Shared Patterns

### Node script conventions (all of `scripts/*.mjs`)
**Source:** `scripts/check-assets.mjs` lines 1-35 and 195-249
- kebab-case `.mjs`, ESM, `node:`-prefixed named imports, `ROOT = join(import.meta.dirname, "..")`
- a top-of-file block comment covering the purpose, side effects and flags (CONVENTIONS.md:92)
- `spawnSync(bin, argsArray, { encoding: "utf8" })`, never a shell string (names contain spaces, `%20` and `ø`)
- `errors[]` / `warns[]`, output prefixed with `  WARN  ` / `  FAIL  `, a final `name: OK` or `name: N failure(s)` line, exit 0 / 1 / 2
- NFC normalisation for every path comparison (inventory-assets.mjs:16)
- Prettier style: double quotes, trailing commas, 100 columns. Scripts are **not** excluded from Prettier. Check with `npx prettier --check <file>`, not `npm run lint`.

### React component and route conventions
**Source:** `src/components/Reveal.tsx`, `src/routes/index.tsx`
- named `export function`, inline destructured prop types, defaults in the destructure
- `@/` imports only, and no barrel files
- class merging by template literal or `[…].filter(Boolean).join(" ")`. **`cn()` / `clsx` / `tailwind-merge` no longer exist.** Do not reinstall them, even though UI-SPEC line 153 mentions `cn()`.
- tokens are referenced as `var(--plum|cream|sakura|gold)` inside arbitrary values, with `color-mix(in_oklab,…)` for alpha (index.tsx:52, 264, 347). No new colours.
- French UI copy and English identifiers. Comments are sparse.
- SSR safety: no `window` or `matchMedia` at render time, only in `useEffect` (Reveal.tsx:20-36 is the model).

### Generated-file convention
**Source:** `src/routeTree.gen.ts` lines 1-9, `.prettierignore` line 7, `knip.json` `ignore`, `inventory-assets.mjs` line 36
- The header states that the file is auto-generated, names its generator and says do not edit.
- Exclude the file from the formatter and knip (see above). Do **not** exclude it from `inventory-assets.mjs`, because that scan is a free consistency check on the manifest URLs.

### Media URL consistency
**Source:** `scripts/inventory-assets.mjs` (reverse scan, lines 65-107)
- Every `/media/…` literal in `src/**` must exist under `public/`. Run `node scripts/inventory-assets.mjs` after every commit that touches the manifest or references. It must show `MISSING=0` and exit 0.
- After the deletion step, expect `UNREF` to list nothing under `/assets` or `/videos`, because those directories are gone.

### Verification gate (no test runner)
**Source:** `package.json` `check` script and CONVENTIONS.md:42
- Per commit: `npx tsc --noEmit && node scripts/inventory-assets.mjs`
- Per wave: `npm run check`
- `npm run lint` is red for pre-existing reasons and is **not** a gate.

---

## No Analog Found

| File | Role | Data Flow | Reason / what to use instead |
|---|---|---|---|
| `src/server.ts` | edge server entry | request-response | This is the first custom Worker entry. Copy `scratchpad/phase2-research/repo-copy/src/server.ts`, which has been validated, and drop `videos` from the regex. |
| `src/cloudflare-workers.d.ts` | ambient types | n/a | This is the first `.d.ts` in `src/`. Copy `repo-copy/src/cloudflare-workers.d.ts` verbatim. |
| `media-src/.cache.json` | generated cache | file-I/O | Its shape is up to Claude's discretion: `{ [id]: { hash, outputs[] } }`, keys sorted. It is gitignored. |
| sharp / ffmpeg / gs encode logic inside `scripts/media*.mjs` | transform | batch | The repo has no encoder code. Use RESEARCH §Code Examples (lines 558-642) for the exact flags, presets and determinism rules. |

## Metadata

**Analog search scope:** `scripts/`, `src/` (components, data, routes, `routeTree.gen.ts`, `router.tsx`), root configs (`package.json`, `wrangler.jsonc`, `knip.json`, `.gitignore`, `.prettierignore`, `eslint.config.js`, `tsconfig.json`, `vite.config.ts`), `node_modules/@tanstack/react-start/dist/default-entry/esm/server.js`, `scratchpad/phase2-research/repo-copy/`
**Files scanned:** 20
**Pattern extraction date:** 2026-09-28

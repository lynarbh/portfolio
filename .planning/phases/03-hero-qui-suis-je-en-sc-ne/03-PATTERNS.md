# Phase 3: Hero & Qui suis-je en scène - Pattern Map

**Mapped:** 2026-09-28
**Files analyzed:** 27 (13 new source/script files, 11 modified, 1 regenerated, 2 pattern-only/asset groups)
**Analogs found:** 24 / 27 (the 3 without an analog use the RESEARCH.md patterns)

State read: `src/routes/index.tsx` as committed in `ee1dd84` (Lyna's About text edit, « ↓ Scroll vers le bas »; 510 lines, line numbers below are current). CONTEXT as of `768205b` (« Décisions ajoutées après recherche »). `src/hooks/` and `src/lib/` do not exist yet (removed in phase 1). They are created again only for the files listed here.

> **Working-tree alert (found during mapping, 2026-09-28):** `src/routes/index.tsx` has a new **uncommitted** edit by Lyna on line 34: `const SKILL_TAGS = ["Illustrator", "Photoshop", "Premiere Pro", "AfterEffect", "InDesign", "Davinci resolve", "Capcut", "Figma", "Canva", "HTML / CSS / JS / PHP"];`. Line numbers are unchanged. The first plan touching `index.tsx` must commit it as-is first (same rule as `ee1dd84`). It is also a signal about the tool registry: she lists « HTML / CSS / JS / PHP » (not « HTML / CSS ») and does not list Lightroom, Animate or VS Code, which the locked 13-tool registry contains. The planner should keep the locked registry but surface this to Lyna (checkpoint or SUMMARY), e.g. whether `html-css` should be named « HTML / CSS / JS / PHP ».

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `src/content/copy.ts` (NEW) | model (static content) | transform (static data read at render) | `src/data/projects.ts` (typed data module) | role-match |
| `src/data/tools.ts` (NEW) | model (registry) | static data | `src/data/projects.ts` | exact |
| `src/hooks/use-reduced-motion.ts` (NEW) | hook | event-driven (matchMedia) | Hero effect `src/routes/index.tsx:90-113` (logic to extract) | partial (no hook file exists) |
| `src/lib/fill.ts` (NEW, optional: `{name}` template helper) | utility | transform | `srcSet` helper `src/components/Picture.tsx:3` | partial |
| `src/components/cinema/ScreenFrame.tsx` (NEW) | component (decorative) | props-only | `src/components/Picture.tsx` (hook-free, props only) | role-match |
| `src/components/cinema/Viewfinder.tsx` (NEW) | component (decorative wrapper) | props/children | `src/components/Reveal.tsx` (children wrapper) + `Picture.tsx` | role-match |
| `src/components/CvVideoCard.tsx` (NEW) | component (interactive media) | event-driven (click → play) | Hero toggle `index.tsx:115-163` + legacy CV block `index.tsx:235-272` | role-match |
| `src/components/ToolLogo.tsx` (NEW) | component | request-response (img + onError) | `src/components/Picture.tsx` | role-match |
| `src/components/SkillsGrid.tsx` (NEW) | component (section block) | static data → list | About `SKILL_TAGS` map `index.tsx:224-230` + Projects grid `index.tsx:368-374` | role-match |
| `scripts/media/logos.mjs` (NEW) | utility (pipeline step) | file-I/O (generate, never overwrite) | `scripts/media/pdf.mjs` (small encoder module) | role-match |
| `scripts/media/stills.mjs` (NEW) | utility (pipeline encoder) | file-I/O / batch | `scripts/media/video.mjs:112-123,212-227` (hero poster frame) + `images.mjs` | exact |
| `scripts/copy-todo.mjs` (NEW) | utility (CLI report) | batch (read-only report) | `scripts/check-assets.mjs` (header, flags, report tail) | role-match |
| `scripts/media.mjs` (MOD) | config/orchestrator | batch / file-I/O | itself: `images`/`pdf` validation + `processEntry` + `renderGenerated` | exact |
| `scripts/verify-media.mjs` (MOD) | test (verifier) | batch (read-only) | itself: hero poster checks `:124-133` | exact |
| `src/data/media.generated.ts` (REGEN) | generated model | — | itself (header + `as const satisfies` shape) | exact (never hand-edit) |
| `src/routes/index.tsx` (MOD) | route/page | request-response (SSR) | itself | exact |
| `src/routes/__root.tsx` (MOD) | route (shell/head) | request-response (SSR) | itself `head()` `:28-51` | exact |
| `src/routes/projects/$projectId.tsx` (MOD, strings only) | route/page | SSR | itself | exact |
| `src/router.tsx` (MOD, strings only) | config (error UI) | — | itself `:26-50` | exact |
| `src/data/projects.ts` (MOD, typos) | model | static | itself | exact |
| `src/components/Reveal.tsx` (API unchanged; CSS change only) | component | event-driven (IO) | itself | exact |
| `src/styles.css` (MOD) | config (design system) | — | itself (`.reveal` `:189-191`, `.ornament-card`, `@layer base`) | exact |
| `package.json` (MOD) | config | — | itself `scripts` `:9-20`, `engines` `:6-8` | exact |
| `media-src/manifest.json` (gitignored, pattern only) | config (pipeline input) | — | its `videos[]` hero entry | exact |
| `public/media/{og.jpg,cinema/grain.webp,video/cv-poster.webp,logos/*.svg}` (generated assets) | asset | — | `public/media/video/hero-poster.webp` | exact |
| `scripts/verify-browser.mjs` (OPTIONAL, planner's call) | test (CDP) | request-response | none in repo (scratch `rm/cdp.mjs`) | none |
| grain generator (inside `stills.mjs`) | utility | transform | none (mulberry32 recipe in RESEARCH Pattern 10) | none |

---

## Pattern Assignments

### `src/content/copy.ts` (model, static content)

**Analog:** `src/data/projects.ts` (typed data next to its type, named exports, French content, English identifiers).

**Type + export shape** (`src/data/projects.ts:3-18`):
```ts
export type Project = {
  id: string;
  title: string;
  ...
};

export const projects: Project[] = [
  // --- SITE WEB ---
```
**Divergences required by RESEARCH Pattern 1 / Pitfall 8:**
- **No imports at all** (projects.ts imports `@/data/media.generated` on line 1; copy.ts must not, Node imports it natively for `copy:todo`). Only erasable TS: `type`, `as const`, `satisfies`. No `enum`, no `namespace`.
- One `export const <section> = { … } as const satisfies CopyTree;` per section (`meta`, `nav`, `hero`, `about`, `skills`, `projects`, `contact`, `footer`, `notFound`, `error`, `projectPages`) plus `export const BANNED`. Consumers: `import * as copy from "@/content/copy";` → `copy.hero.tagline.text`.
- Helpers `label(text)` (todo false) / `draft(text, brief)` (todo true): exact code in RESEARCH lines 216-257.
- Use the `// --- SECTION ---` French caps divider style from `projects.ts:19,37,87,111` to group slots inside `projectPages`.

**Source strings to migrate (current text, line numbers in the committed `index.tsx`):**
| Lines | Current | Slot |
|---|---|---|
| 24-31 | `CATEGORIES` labels | `projects.filters.*` (labels only; filter values stay in code as `{ key, category }`) |
| 34 | `SKILL_TAGS` | delete (replaced by SkillsGrid) |
| 39-41, 51, 64 | nav labels, « PORTFOLIO », `aria-label="Menu"` | `nav.links.*`, `nav.brand`, `nav.menuLabel` |
| 141, 159 | video fallback, « Mettre en pause la vidéo » | `hero.videoFallback`, `hero.pauseLabel` |
| 168 | « Lyna » / « Rebahi » | `hero.firstName` / `hero.lastName` |
| 173 | subtitle « Designer Multimédia & Créatrice de Contenu » | delete |
| 178 | « Voir mes projets » | `hero.cta` |
| — | (new) | `hero.availability` = « Disponible à partir de septembre 2026 » (draft, prefilled per CONTEXT `768205b`: the line is visible at deploy) |
| 182 | « ↓ Scroll vers le bas » (Lyna's text) | `hero.scrollCue` (draft, default = her text) |
| 199 | « Portrait de Lyna Rebahi » | `about.portraitAlt` |
| 209 | « Qui » / « suis-je ? » | `about.titleLead` / `about.titleEm` |
| 213-222 | Lyna's whole paragraph « Faites connaissance avec Lyna REBAHI, … RA.CON.TE.Pas mal, non ? » (95 words, two `<br>`) | `about.intro` = her text **verbatim and complete** (CONTEXT `768205b` supersedes RESEARCH OQ7 and the earlier addendum: no split, no removal of « 20 ans », no typo fix). Only mechanical change: the `<br></br><br></br>` pair becomes `\n\n` in the string, rendered with `whitespace-pre-line`; JSX whitespace/line-wrap collapses to single spaces. `todo: true`; `copy:todo` flags length and « J'ai 20 ans » (advisory). `about.goal` / `about.specialty` / `about.range` get the short scaffolds from UI-SPEC (todo). |
| 283 | `` `Voir le projet ${p.title}` `` | `projects.cardAriaLabel` = « Voir le projet {title} » |
| 304-306 | « En cours / de dev » | `projects.inProgress` = « En cours\nde dev » |
| 313, 342 | « Voir le projet → », « Mes Créations » | `projects.cardCta`, `projects.title` |
| 410, 426, 434, 444/451/458, 467, 474, 481/488, 494 | contact + footer strings | `contact.*`, `footer.text` = « Lyna Rebahi Portfolio {year} » |

`__root.tsx:10-20` (404 English), `:33-40` (meta), `router.tsx:26-28,43,49` (error English) → `notFound.*`, `meta.*`, `error.*` with the French wording in RESEARCH §Inventory. `$projectId.tsx`: 106 literals, keys `projectPages.<projectId>.<blockKey>`; common ones at `:25,30,47,624,628,644,676`.

---

### `src/data/tools.ts` (model, registry)

**Analog:** `src/data/projects.ts:3-18` (type + array in one file) and the `as const` union trick from `index.tsx:24-32`:
```ts
const CATEGORIES = [
  "Tout",
  ...
] as const;
type Category = (typeof CATEGORIES)[number];
```
Apply as (RESEARCH lines 587-595):
```ts
export type ToolGroup = "video" | "design" | "web";
export type Tool = { readonly id: string; readonly name: string; readonly group: ToolGroup; readonly initials: string };
export const tools = [
  { id: "premiere-pro", name: "Premiere Pro", group: "video", initials: "Pr" },
  // … 13 entries in UI-SPEC order (§4 table)
] as const satisfies readonly Tool[];
export type ToolId = (typeof tools)[number]["id"];
```
**Constraint:** no imports (imported natively by `scripts/media/logos.mjs`). Unlike `projects.ts` (which imports `media.generated`), keep it dependency-free.

---

### `src/hooks/use-reduced-motion.ts` (hook, event-driven)

**Analog to extract from:** `src/routes/index.tsx:90-113` (Hero mount effect):
```tsx
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onPlay = () => setState("playing");
    const onPause = () => setState("paused");
    const onError = () => setFailed(true);
    const onVisibility = () => {
      if (document.hidden) v.pause();
      else if (!userPaused.current && !reduce) v.play().catch(() => { });
    };
    v.addEventListener("play", onPlay);
    ...
    v.muted = true;
    if (!reduce) v.play().catch(() => { });
    return () => {
      v.removeEventListener("play", onPlay);
      ...
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
```
**Pattern:** subscribe/cleanup pair like the listener add/remove above, wrapped in `useSyncExternalStore` with server snapshot `() => false`. Export both `useReducedMotion()` and the live getter `getReducedMotion()` (RESEARCH Pattern 2, lines 274-295). File name: kebab-case `use-reduced-motion.ts` (UI-SPEC line 33 and 273, historical `use-mobile.tsx` convention), exported function camelCase. Named exports only. No JSX, so `.ts`.

**Consumer rewrite in Hero:** line 93 becomes `const reduceNow = getReducedMotion();` (live read, Pitfall 2) and line 99 reads `getReducedMotion()` inside `onVisibility`; add a second `useEffect(() => { if (reduce) videoRef.current?.pause(); }, [reduce]);`. Gate: `grep -c matchMedia src/routes/index.tsx` = 0.

---

### `src/lib/fill.ts` (utility, optional)

**Analog:** the one-line module-level helper in `src/components/Picture.tsx:3`:
```ts
const srcSet = (rungs: ImageEntry["avif"]) => rungs.map(([w, url]) => `${url} ${w}w`).join(", ");
```
Export `fill(template: string, values: Record<string, string | number>)` replacing `{name}`. Keep it out of `copy.ts` (data-only). If the planner prefers not to recreate `src/lib/`, colocate it as `src/content/fill.ts` (no `@/` import needed either way).

---

### `src/components/cinema/ScreenFrame.tsx` (component, props-only, decorative)

**Analog:** `src/components/Picture.tsx` (hook-free, SSR-final, inline prop type, named export, header comment explaining the rule).

**Header comment + signature pattern** (`Picture.tsx:5-18`):
```tsx
// Content image from the media manifest: AVIF (+ WebP for photos) sources and a single
// fallback <img> with intrinsic dimensions. Always lazy and async (the hero poster is the
// only eager image and does not go through this component). No hooks: SSR output is final.
export function Picture({
  id,
  alt,
  sizes,
  className = "",
}: {
  id: MediaId;
  alt: string;
  sizes: string;
  className?: string;
}) {
```
**Divergence (locked):** `src/components/cinema/*` must **not** import from `src/data/` (Picture imports `@/data/media.generated` on line 1; ScreenFrame receives `grainUrl` as a prop and sets `--cinema-grain-url` via `style`). Body: RESEARCH Pattern 4 (lines 386-398): `className="cinema-screen" data-playing={…} aria-hidden="true"` wrapping `<div className="cinema-grain" />`.

**Placement in Hero** (`index.tsx:128`): `<section id="top" className="relative h-screen w-full overflow-hidden">` → `h-svh`; ScreenFrame rendered inside it, before the content div at `:165` (content keeps `relative z-10`; remove the `grain` class there). `playing={state === "playing"}` from the existing state at `:86`.

---

### `src/components/cinema/Viewfinder.tsx` (component, children wrapper)

**Analog:** `src/components/Reveal.tsx:3-11,31-39` (children wrapper, inline prop type, template-literal class):
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
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
```
**Pattern:** no hooks (unlike Reveal); `{ children, recLabel }` props; 4 `cinema-bracket--{tl,tr,bl,br}` spans + `cinema-rec` span, all `aria-hidden="true"` (RESEARCH Pattern 6, lines 466-478). No data import; the `<Picture id="home/portrait" …>` is passed as children from `About`.

**Portrait call to move in** (`index.tsx:194-202`, to replace):
```tsx
          <div className="portrait-wrapper mx-auto">
            {/* Circular portrait */}
            <div className="portrait-image">
              <Picture
                id="home/portrait"
                alt="Portrait de Lyna Rebahi"
                sizes="(min-width: 640px) 350px, 280px"
              />
```
New: `<Viewfinder recLabel={copy.about.recLabel.text}><Picture id="home/portrait" alt={copy.about.portraitAlt.text} sizes="(min-width: 1024px) 352px, 280px" className="h-full w-full object-cover object-top" /></Viewfinder>`. Note Picture's `className` rule (`Picture.tsx:21-23`): passing an `h-` class suppresses the automatic `h-auto`, which is what the fixed 4/5 box needs.

The sweep reuses Reveal's observer: the Viewfinder must sit inside a `<Reveal>` so `.reveal.in .cinema-viewfinder::after` fires.

---

### `src/components/CvVideoCard.tsx` (component, event-driven)

**Analog 1 — state + ref + handler + accessible button:** Hero, `index.tsx:84-88,115-125,152-163`:
```tsx
function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"playing" | "paused">("paused");
  const [failed, setFailed] = useState(false);
  ...
  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    ...
      v.play().catch(() => { });
  };
  ...
      <button
        type="button"
        aria-pressed={state === "paused"}
        hidden={failed}
        onClick={toggle}
        className="... bg-[rgba(61,31,58,0.85)] ... text-[var(--cream)] hover:bg-[color-mix(in_oklab,var(--sakura)_35%,rgb(61_31_58))] transition-colors duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sakura)]"
      >
        <span className="sr-only">Mettre en pause la vidéo</span>
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d={state === "playing" ? "M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" : "M8 5v14l11-7z"} />
        </svg>
      </button>
```
Copy: the `sr-only` label pattern, the `rgba(61,31,58,0.85)` band, the sakura hover `color-mix`, the focus-visible classes, the play glyph path `M8 5v14l11-7z`, and `.play().catch(() => {})` (fire-and-forget convention).

**Analog 2 — what it replaces** (`index.tsx:235-272`, legacy CV block): `preload="metadata"`, `controls` from the start, DOM query `e.currentTarget.parentElement?.querySelector("video")`, `style.display = "none"`. All of these are anti-patterns now: use a ref, `preload="none"`, no `controls`/`poster` attribute before click, `started` state, lazy `<img>` poster (RESEARCH Pattern 7, lines 503-542). Keep `playsInline controlsList="nodownload"` and `<source src={videos.cv.src} type="video/mp4" />`.

**Imports:** `useRef, useState` from react; `import * as copy from "@/content/copy";` (allowed: not in `cinema/`). Receives `src`, `poster`, `duration` as props from `About` (About reads `videos.cv` from `@/data/media.generated`, as `index.tsx:6` already does).

---

### `src/components/ToolLogo.tsx` (component, img + fallback)

**Analog:** `src/components/Picture.tsx:28-36` (the `<img>` attribute set):
```tsx
      <img
        src={m.fallback}
        width={m.width}
        height={m.height}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={imgClass}
      />
```
Plus the `failed` state idiom from Hero (`index.tsx:87,96`: `const [failed, setFailed] = useState(false); const onError = () => setFailed(true);`). Add a mount check (`img.complete && img.naturalWidth === 0`) because an error before hydration is missed (RESEARCH Pattern 8, lines 564-581). Inline `Monogram` sub-component (private, same file) = `aria-hidden` 32px sakura disc + Cormorant initials in `var(--plum-ink)`. Reads `logos` from `@/data/media.generated` (allowed outside `cinema/`), falls back to `/media/logos/${id}.svg`.

---

### `src/components/SkillsGrid.tsx` (component, list from registry)

**Analog 1 — mapping a constant list to tags** (`index.tsx:224-230`, being removed):
```tsx
            <div className="mt-6 flex flex-wrap gap-2">
              {SKILL_TAGS.map((t) => (
                <span key={t} className="hud-tag">
                  {t}
                </span>
              ))}
            </div>
```
**Analog 2 — card shell** (`index.tsx:207`): `<div className="ornament-card relative bg-[var(--card)] p-8 sm:p-10">` → UI-SPEC: `ornament-card bg-[var(--card)] p-6 sm:p-8`, text `var(--plum-ink)`.

**Pattern:** `const GROUPS = ["video", "design", "web"] as const;` → `tools.filter((t) => t.group === g)`; `h3` from `copy.skills.title`, `h4` from `copy.skills.groups[g]`, `<ul className="mt-2 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 gap-x-2 gap-y-4">`, tile `.cinema-tile` wrapping `<ToolLogo … alt="" />`, caption `text-xs`. No level/percentage (gate: grep `level|niveau|%` = 0).

---

### `scripts/media/stills.mjs` (pipeline encoder: grain + frame stills)

**Analog:** hero poster path in `scripts/media/video.mjs`.

**Frame args + signature export** (`video.mjs:111-123,129-139`):
```js
// Poster = frame 0 of the SDR output, native width, no resize.
const posterFrameArgs = (video, png) => [
  "-v",
  "error",
  "-y",
  "-i",
  video,
  "-frames:v",
  "1",
  "-update",
  "1",
  png,
];
const POSTER_WEBP = { effort: 6 };

export const VIDEO_SIGNATURE = {
  ...
  posterFrame: posterFrameArgs("<out>", "<png>"),
  posterWebp: POSTER_WEBP,
};
```
**Encode + return `{ outputs, meta }` contract** (`video.mjs:210-227,251-254`):
```js
// outRoot: where the poster path (entry.poster.out, relative to public/) is written. The
// pipeline passes a staging directory and moves the files into public/ only on success.
export async function encodeVideo(entry, srcAbs, outAbs, tmpDir, outRoot = PUBLIC) {
  ...
  const posterPng = join(tmpDir, `${entry.id}-poster.png`);
  run("ffmpeg", posterFrameArgs(outAbs, posterPng));
  const posterAbs = insideDir(outRoot, entry.poster.out);
  mkdirSync(dirname(posterAbs), { recursive: true });
  await sharp(posterPng)
    .webp({ ...POSTER_WEBP, quality: entry.poster.quality })
    .toFile(posterAbs);
  ...
  return {
    outputs: [outAbs, posterAbs],
    meta: { width, height, ssim: score, poster: "/" + entry.poster.out },
  };
}
```
**Module header + `sharp.cache(false)`** (`images.mjs:1-14`): short purpose/determinism comment, `import sharp from "sharp"; import { PUBLIC, run } from "./util.mjs"; sharp.cache(false);`.

**Apply:** export `STILL_SIGNATURE` (frame args with placeholders, `HERO_STILL_FILTER`, `GRAIN` params, output options), `renderGrain()` (mulberry32, lossless WebP, write the buffer as-is: RESEARCH lines 55-76) and `encodeStill(entry, srcAbs, tmpDir, stage)` returning `{ outputs, meta: { url, width, height } }`. Input seek `-ss <at>` before `-i`, `+bitexact` flags (RESEARCH lines 91-101). PNG scratch under `media-src/.tmp/` like `pdf.mjs:37-39` guards (`if (!resolve(outPng).startsWith(TMP_DIR + sep)) throw …`). Never `Math.random`/`Date.now`.

---

### `scripts/media/logos.mjs` (pipeline step, generate-if-missing)

**Analog:** `scripts/media/pdf.mjs` (small single-purpose module, header comment, args as arrays through `run`, path guard):
```js
// Ghostscript rasterizer for PDF masters (RESEARCH §Code Examples, Pitfall 5).
// One page per gs call ... Arguments are an array (no shell). The PNG always lands under
// media-src/.tmp/ and is removed at exit.
import { join, resolve, sep } from "node:path";
import { MEDIA_SRC, run } from "./util.mjs";

const TMP_DIR = join(MEDIA_SRC, ".tmp");
...
export function renderPdfPage(pdfAbs, page, dpi, outPng) {
  if (!Number.isInteger(page) || page < 1) throw new Error(`pdf page must be an integer ≥ 1`);
  ...
  if (!resolve(outPng).startsWith(TMP_DIR + sep)) {
    throw new Error(`pdf output must stay inside media-src/.tmp/: ${outPng}`);
  }
  run("gs", gsArgs(pdfAbs, page, dpi, outPng));
  return outPng;
}
```
**Apply:** `import { tools } from "../../src/data/tools.ts";` (native TS import, needs Node ≥ 22.18); for each tool: `<id>.png` or `<id>.svg` exists → keep, record URL; else FREE slug → `run("npm", ["pack", "simple-icons@16.33.0", "--pack-destination", TMP_DIR, "--silent"])` + `run("tar", ["-xzf", tgz, "-C", TMP_DIR])`, recolour to `#3d1f3a`; else monogram SVG (RESEARCH lines 143-156). Network failure → warn + monogram (not fatal). Return a map `{ id: url }` plus which files were generated. Use `existsSync` before every write (never overwrite). `insideDir(PUBLIC, "media/logos/<id>.svg")` for the out path. Sort with `byKey`, not `localeCompare` (`util.mjs:86-87`).

---

### `scripts/media.mjs` (MODIFIED orchestrator)

**Analog:** itself. Extension points:

1. **Header block** (`:1-21`): add `stills[]` and logos to the « Reads/Writes » lines.
2. **Manifest validation** (`:93-96`): add `"stills"` to the required-array list (or `m.stills ??= []` to stay optional). Validate each still like videos (`:134-173`): id regex `/^[a-z0-9-]+$/`, shared `ids` set (`:106`, `if (ids.has(v.id)) invalid(…duplicate id…)`), `claim(\`${where}.out\`, s.out)` (`:125-133`), `kind ∈ {grain, frame}`, `video` must be a known video id, `at` finite ≥ 0, `format ∈ {jpeg, webp}`, `quality` integer 1..100 (copy `:166-169`).
3. **Do not** touch `videoOptions` (`:326`) — adding `poster` to the cv entry re-encodes the CV (Pitfall 6). Add `const stillOptions = (s) => ({ kind, video, at, out, width, height, format, quality })`.
4. **Encoder load + fingerprint** (`:381-412`):
```js
  const { encodeVideo, VIDEO_SIGNATURE } = await loadEncoders("./media/video.mjs");
  const { encodeImage, IMAGE_SIGNATURE, SHARP_VERSIONS } = await loadEncoders("./media/images.mjs");
  const { renderPdfPage, PDF_SIGNATURE } = await loadEncoders("./media/pdf.mjs");
  ...
  const IMAGE_FP = fingerprint({ IMAGE_SIGNATURE, SHARP_VERSIONS });
  const PAGE_FP = fingerprint({ IMAGE_FP, PDF_SIGNATURE, gsVersion });
```
   → add `loadEncoders("./media/stills.mjs")` and `STILL_FP = fingerprint({ STILL_SIGNATURE, SHARP_VERSIONS, ffmpegVersion })`. Do **not** bump `PIPELINE_VERSION` (`:54`), which would re-key everything.
5. **Per-entry loop** — copy the images loop (`:431-450`): `sha256(sourceHash + JSON.stringify(stillOptions(s)) + PIPELINE_VERSION + STILL_FP)`, `processEntry(s.id, key, (stage) => encodeStill(…, stage))`, push a `lines` entry, `errors.push(\`${id}: ${err.message}\`)` on failure. For the grain, the « source hash » is `sha256(JSON.stringify(GRAIN))`.
6. **Logos:** call the logos step after stills; add every logo path to `produced` (`:375`, `produced.add(rel)`), otherwise the orphan report (`:585-591`) flags 13 files.
7. **Cache pruning** (`:486-490`): add `...manifest.stills` to the `some((e) => e.id === id)` list, or still entries are dropped every run.
8. **`renderGenerated`** (`:495-574`): extend `VideoEntry` type lines `:554-559` with `"  readonly duration?: number;"`; in the video loop `:500-508` push `["duration", String(probeDuration(abs))]` (ffprobe on the committed output, RESEARCH lines 113-119) and, for `cv`, `["poster", str(stills["cv-poster"])]`. Append two new blocks in the exact existing shape:
```js
    "export const videos = {",
    ...videoLines,
    "} as const satisfies Record<string, VideoEntry>;",
```
   → `export const stills = { … } as const satisfies Record<string, string>;` and `export const logos = { … } as const satisfies Record<string, string>;`, keys sorted with `byKey`. The regex in `verify-media.mjs:44` depends on this `export const X = {…} as const satisfies` form.
9. **Exit codes** stay 2/1/0 (`:21`, `:601`).

---

### `scripts/verify-media.mjs` (MODIFIED verifier)

**Analog:** itself — hero poster block (`:124-133`):
```js
      if (!v.poster) fail("hero: no poster in manifest");
      else if (!existsSync(urlToPath(v.poster))) fail(`hero: poster ${v.poster} missing`);
      else {
        const posterFile = urlToPath(v.poster);
        const meta = await sharp(posterFile).metadata();
        const posterSize = statSync(posterFile).size;
        if (meta.format !== "webp") fail(`hero: poster format=${meta.format}`);
        if (posterSize > POSTER_MAX) fail(`hero: poster ${posterSize} B > ${POSTER_MAX} B`);
        if (meta.width !== 1080) fail(`hero: poster width=${meta.width}`);
      }
```
and the reader (`:42-55`): `const stills = readGenerated("stills"); const logos = readGenerated("logos");` (note `readGenerated` exits 2 when the literal is missing; OK once the module is regenerated). Constants at top like `:23-25` (`GRAIN_MAX = 10_000`, `OG_MAX = 200_000`, `CV_POSTER_MAX = 120_000`, `LOGO_MAX = 8_192`). Checks: grain webp 256×256 < 10,000 B; og jpeg 1200×630 ≤ 200,000 B, `meta.icc === undefined` (as `:258`); cv-poster webp 1280×720; `Number.isFinite(videos.cv.duration) && > 0`; every `tools.ts` id has a `logos` entry, each file ≤ 8,192 B, SVG text has no `<script`, `\son\w+=`, `javascript:`, external `href`. Update the header comment (`:1-16`). The final `/media/...` existence sweep (`:299-304`) covers the new URLs automatically. Reading `tools.ts`: native import (`await import("../src/data/tools.ts")`), which contradicts the `vm` rationale comment at `:39-41`; update that comment when adding it (or bump `engines`, see package.json).

---

### `scripts/copy-todo.mjs` (NEW CLI report, advisory)

**Analog:** `scripts/check-assets.mjs` — header comment explaining purpose + flags (`:1-11`), flag parsing (`:34`), and the report tail (`:~238-262`):
```js
// Asset guard: run after `vite build`. Fails on oversize files, ...
//   node scripts/check-assets.mjs --strict      (or CHECK_ASSETS_STRICT=1)
// Strict mode is deliberately not wired into `npm run check`.
...
const STRICT = process.argv.includes("--strict") || process.env.CHECK_ASSETS_STRICT === "1";
...
for (const w of warns) console.warn(`  WARN  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(errors.length ? `check-assets: ${errors.length} failure(s)` : "check-assets: OK");
process.exit(errors.length ? 1 : 0);
```
**Divergence:** advisory → always `process.exit(0)` (a future `--strict` may exit 1). Flags `--audit` (TS-AST scan of `src/routes/**/*.tsx`, `src/router.tsx`, `src/components/**/*.tsx` with the already-installed `typescript` package) and `--advisory` (used in the `check` tail). Walk logic: RESEARCH Pattern 11 (lines 169-186). Output prefix `copy:todo:` with `  TODO` / `  BANNED` / `  LEN` / `  LITERAL` lines in the same two-space-tag style. Import `../src/content/copy.ts` natively.

---

### `src/data/media.generated.ts` (REGENERATED — never hand-edit)

**Analog:** its own header and blocks (`:1-2`, `:18-23`, `:881-893`):
```ts
/* eslint-disable */
// AUTO-GENERATED by scripts/media.mjs from media-src/manifest.json — DO NOT EDIT. Run `npm run media`.
...
export const videos = {
  "cv": {
    src: "/media/video/cv-lyna-rebahi.mp4",
    width: 1920,
    height: 1080,
  },
  "hero": { … },
} as const satisfies Record<string, VideoEntry>;
```
Only change it by editing `renderGenerated` and running `npm run media` (by the executor at the planned step; this mapper did not run it). Expected additions: `cv.poster`, `cv.duration` (84.629), `hero.duration`, `stills`, `logos`.

---

### `src/routes/index.tsx` (MODIFIED page)

**Analog:** itself.

**Imports** (`:1-7`) — keep the order external → `@/` → other externals; drop the stray comment on line 1:
```tsx
import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { Picture } from "@/components/Picture";
import { videos } from "@/data/media.generated";
import emailjs from "@emailjs/browser";
```
Add: `import * as copy from "@/content/copy";`, `import { useReducedMotion, getReducedMotion } from "@/hooks/use-reduced-motion";`, `ScreenFrame`, `Viewfinder`, `CvVideoCard`, `SkillsGrid`, `stills` from media.generated.

**Route head** (`:9-22`) — the single hero-poster preload stays exactly as is (only preloaded resource).

**Hero title block to rebuild** (`:165-184`):
```tsx
      <div className="relative z-10 grain h-full flex flex-col items-center justify-center px-6 text-center text-[var(--cream)]">
        <Reveal delay={150}>
          <h1 className="mt-6 font-display text-6xl sm:text-8xl md:text-9xl leading-[0.95]">
            Lyna <em className="text-[var(--sakura)] not-italic">Rebahi</em>
          </h1>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-5 max-w-xl font-display italic text-xl sm:text-2xl text-[var(--cream)]/85">
            Designer Multimédia & Créatrice de Contenu
          </p>
        </Reveal>
        <Reveal delay={420}>
          <a href="#projects" className="quest-btn mt-10">
```
→ remove `grain`, `px-4 sm:px-6`, h1 `text-5xl sm:text-7xl leading-none`, title-card group (RESEARCH Pattern 5), `quest-btn mt-8`, scroll cue `aria-hidden="true"`. Keep Reveal delays 150/280/420. Do **not** put the fixed pause toggle (`:152-163`) inside a `Reveal` (containing-block pitfall).

**Empty-slot rule:** `const availability = copy.hero.availability.text.trim();` then `{availability ? <span …>{availability}</span> : null}` — same conditional-render idiom as `{error && <p …>{error}</p>}` (`:461`) and `{p.inProgress && (…)}` (`:295`).

**About layout** (`:189-273`): section `py-28 px-4 sm:px-6`; h2 `chapter-title` moved above the grid; `lg:grid lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-12 lg:items-start max-w-6xl`; blocks each in `<Reveal delay={0|120|240|360}>`. Class composition stays template literals (no `cn()`; see filter button `:357-360`).

**Filters** (`:327-332,353-364`): keep values in code, labels from copy:
```tsx
  const [filter, setFilter] = useState<Category>("Tout");
  const filtered = useMemo(
    () => (filter === "Tout" ? projects : projects.filter((p) => p.category === filter)),
```
→ e.g. `const FILTERS = [{ key: "all", category: null }, { key: "video", category: "Vidéo" }, …] as const;` and render `copy.projects.filters[f.key].text`. Filtering behaviour unchanged (phase 4 changes it).

**Footer** (`:494`): `fill(copy.footer.text.text, { year: new Date().getFullYear() })` (Pitfall 11: do not spread this dynamic pattern).

---

### `src/routes/__root.tsx` (MODIFIED head + shell)

**Analog:** itself, `head()` `:28-51` and `RootShell` `:57-69`:
```tsx
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lyna Rebahi - Portfolio" },
      { name: "description", content: "Portfolio créatif d'une étudiante MMI : …" },
      { name: "author", content: "Lyna Rebahi" },
      { property: "og:title", content: "Lyna Rebahi - Portfolio" },
      { property: "og:description", content: "Portfolio créatif d'une étudiante MMI à la recherche d'une alternance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [ … unchanged … ],
  }),
```
Replace the meta array with RESEARCH Pattern 9 (lines 5-26): `copy.meta.*`, `og:url`/`og:image` absolute on `const SITE = "https://lynarebahi.fr"`, `og:image` from `stills.og`, `summary_large_image`, drop `twitter:site`. `<html lang="en">` (`:59`) → `lang="fr"`. `NotFoundComponent` strings (`:10-20`) → `copy.notFound.*`. Leave the favicon `Date.now()` effect (`:71-77`) alone (out of scope, flagged). Imports: `import appCss from "../styles.css?url";` stays relative (Vite `?url`); new imports use `@/`.

---

### `src/router.tsx` (MODIFIED strings)

**Analog:** itself `:26-50`. Replace the 4 English literals (« Something went wrong », « An unexpected error occurred. Please try again. », « Try again », « Go home ») with `copy.error.title/body/retry/home`. Keep the DEV-only `error.message` block (`:30-34`) — `error.message` is not copy.

---

### `src/routes/projects/$projectId.tsx` (MODIFIED strings only)

**Analog:** itself. Imports block (`:1-10`) gains `import * as copy from "@/content/copy";`. Branch markers: `business-card-mockup` `:88`, `clip` `:186`, `sae-2` `:318`, `sae-1` `:544`. Typical block to migrate (`:189-199`):
```tsx
                <h2 className="font-display text-2xl text-[var(--plum)]">Bloc 1 — Présentation du projet</h2>
                <div className="mt-6">
                  <Picture
                    id="clip/clip1"
                    alt="Blue - Présentation du projet"
                    ...
                  <p className="font-body leading-relaxed text-[var(--plum)]/80">
                    Blue est un dossier de production audiovisuelle réalisé dans le cadre du BUT MMI. …
```
→ `{copy.projectPages.clip.block1Heading.text}`, `alt={copy.projectPages.clip.block1Alt.text}`, `{copy.projectPages.clip.block1Body.text}` (body = `draft`, heading/alt = `label`). Palette array (`:160-164`): keep `hex` in code, move `name`/`note` to copy (key by index or by a stable key). The `sae-2` variant inline colours (`:370,387,404,421`) stay in code. Gallery alt fallback (`:676`) `` `${project.title} — vue ${i + 1}` `` → `fill(copy.projectPages.galleryAlt.text, { title, n: i + 1 })`. Markup/layout untouched (phase 4 owns it; PROJ-07 keeps legacy bold). Typos while migrating: `:247` « 3h15 » → « 3:15 », `:564` « son déclinaison » → « sa déclinaison », `:585` « colorielle » → « colorimétrique ».

---

### `src/data/projects.ts` (MODIFIED typos)

**Analog:** itself. Only string edits at `:105-106` (shortDescription « en cours de réalisation » vs « actuellement fini » contradiction; « exploré » → « explorer »), `:119` (« Diagramme de GANTT » → « diagramme de Gantt »). `:82` « ombrestion » is truncated text since the first commit: per CONTEXT `768205b` do **not** invent a repair; leave it and list it for Lyna (project texts stay in `projects.ts`, so it is a SUMMARY item, not a copy slot unless the planner moves it). Do **not** change `tools` strings (`:120` « Visual Studio Code » is phase 4).

---

### `src/components/Reveal.tsx` (API unchanged)

**Analog:** itself (`:1-40`). No TS change required: the shutter is CSS only (`.reveal`/`.reveal.in` move into `@layer cinema`). Optional: Prettier-fix `{ threshold: 0.12 }` trailing comma (`:26`). The class contract `reveal ${seen ? "in" : ""}` (`:34`) is what `.reveal.in .cinema-viewfinder::after` hooks onto, so the class names must not change.

---

### `src/styles.css` (MODIFIED)

**Analog:** itself.

**Line 1-2** (prepend the layer order statement before the import):
```css
@import "tailwindcss" source(none);
@source "../src";
```
→ `@layer theme, base, components, cinema, utilities;` as the new first line (Pitfall 1, measured).

**Token block** (`:46-75`) — add `--plum-ink: rgb(61 31 58);` in `:root`, next to `--plum` (`:53`).

**Existing layered block to imitate** (`:77-99`, `@layer base { … }`) → new `@layer cinema { … }` at the end of the file with `.reveal` shutter, `.cinema-screen`, `.cinema-grain` + `@keyframes`, `.cinema-titlecard` (with `-webkit-box-decoration-break`), `.cinema-viewfinder`, `.cinema-bracket--*`, `.cinema-rec*`, sweep, `.cinema-tile`, and the reduced-motion guard (RESEARCH Pattern 3-6, lines 341-376, 403-433, 453-458, 482-495).

**Delete (dead after this phase):** `.grain::before` (`:101-110`, `feTurbulence` + `mix-blend-mode`), `.portrait-wrapper` / `.portrait-image*` + its media query (`:154-187`), unlayered `.reveal` lines (`:189-191`, moved into cinema). Keep `.quest-btn` (incl. its `backdrop-filter`, outside the layer), `.quest-card`, `.ornament-card`, `.hud-tag`, `.chapter-title` unchanged.

**Hover lift to mirror for `.cinema-tile`** (`.quest-btn:hover` `:139-143`, uses `transform: translateY(-1px)`): tile uses `translateY(-2px)` with `transition: transform 200ms ease`; neutralised in the guard with `!important`.

Gate: `awk '/@layer cinema \{/,0' src/styles.css | grep -cE "mix-blend-mode|backdrop-filter|(^|[^-])filter:|feTurbulence"` → 0.

---

### `package.json` (MODIFIED)

**Analog:** itself `:6-20`:
```json
  "engines": {
    "node": ">=22.12"
  },
  "scripts": {
    ...
    "check": "tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run",
    "deploy": "npm run check && wrangler deploy",
    "media": "node scripts/media.mjs",
    "verify-media": "node scripts/verify-media.mjs"
  },
```
→ add `"copy:todo": "node scripts/copy-todo.mjs"`, append `&& node scripts/copy-todo.mjs --advisory` to `check` (always exits 0), bump `engines.node` to `">=22.18"` (native `.ts` import in `copy-todo.mjs`, `logos.mjs`, possibly `verify-media.mjs`). No dependency added. `.nvmrc` (Node 24) unchanged.

---

### `media-src/manifest.json` (gitignored — pattern only)

**Analog:** its hero entry (current file):
```json
{
  "id": "hero",
  "class": "hero",
  "src": "video/hero.mp4",
  "out": "media/video/hero.mp4",
  "crf": 32,
  "poster": { "out": "media/video/hero-poster.webp", "quality": 60 }
}
```
Add a top-level `"stills"` array (RESEARCH Pattern 10, lines 39-45): `grain` → `media/cinema/grain.webp`; `og` → hero at 16 s, `media/og.jpg`, 1200×630 jpeg q80; `cv-poster` → cv at 75 s, `media/video/cv-poster.webp`, 1280×720 webp q80. Leave the `cv` video entry untouched. All outs start with `media/` (satisfies `OUT_PREFIXES`, `media.mjs:61`). Since the file is not committed, the plan must state the exact JSON to add and the executor edits it locally.

---

## Shared Patterns

### Named exports + inline prop types
**Source:** `src/components/Reveal.tsx:3-11`, `src/components/Picture.tsx:8-18`
**Apply to:** all new components (`ScreenFrame`, `Viewfinder`, `CvVideoCard`, `ToolLogo`, `SkillsGrid`)
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
```
No default exports, no barrels, `React.ReactNode` used without importing React (JSX runtime + global types). Class strings = template literals (no `cn()`).

### Copy access
**Source:** new `src/content/copy.ts`
**Apply to:** `index.tsx`, `__root.tsx`, `router.tsx`, `$projectId.tsx`, `CvVideoCard`, `SkillsGrid`, `ToolLogo` (if any label). **Not** `src/components/cinema/*` (they take `recLabel` etc. as props; the locked rule forbids `src/data/` imports there — keep copy out too for symmetry).
```tsx
import * as copy from "@/content/copy";
<a href="#projects" className="quest-btn mt-8">{copy.hero.cta.text}</a>
```
Never `dangerouslySetInnerHTML`; markup inside a sentence = two slots.

### Browser APIs only in effects / external store
**Source:** `src/components/Reveal.tsx:14-30` (IntersectionObserver in `useEffect`, cleanup `io.disconnect()`), `index.tsx:90-113` (listeners + cleanup)
**Apply to:** `use-reduced-motion.ts`, `ToolLogo` mount check, `CvVideoCard`. No `window`/`document` at module level or during render.

### Fire-and-forget media promises
**Source:** `index.tsx:99,106,123` — `v.play().catch(() => { });`
**Apply to:** `CvVideoCard.play`, Hero. (Prettier form: `.catch(() => {})`.)

### Accessible icon button
**Source:** `index.tsx:152-163` (type="button", `sr-only` label, `aria-hidden` SVG `viewBox="0 0 24 24" fill="currentColor"`, `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sakura)]`, plum band `bg-[rgba(61,31,58,0.85)]`)
**Apply to:** CV play button; any decorative overlay gets `aria-hidden="true"` + `pointer-events: none`.

### Script header + report + exit codes
**Source:** `scripts/check-assets.mjs:1-11` (purpose/flags comment), `scripts/media.mjs:1-21`, tails `check-assets.mjs` / `verify-media.mjs:306-309`
**Apply to:** `copy-todo.mjs`, `media/stills.mjs`, `media/logos.mjs`, edited `media.mjs`/`verify-media.mjs`
```js
for (const w of warns) console.warn(`  WARN  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(errors.length ? `verify-media: ${errors.length} failure(s)` : "verify-media: OK");
process.exit(errors.length ? 1 : 0);
```
Exit codes 2 = environment/config, 1 = failure, 0 = OK (copy-todo: always 0).

### Subprocess + path safety + determinism
**Source:** `scripts/media/util.mjs:16-28` (`run(bin, args)` argument arrays, never a shell), `:71-84` (`insideDir`), `:86-87` (`byKey`, never `localeCompare`)
**Apply to:** every new pipeline code path (`ffmpeg`, `ffprobe`, `npm pack`, `tar`). No `Math.random`, no `Date.now` in generators.

### Staged, cached pipeline entries
**Source:** `scripts/media.mjs:346-373` (`processEntry(id, key, encode)` → `{ outputs, meta }`, moved from stage to `public/` only on success; `produced.add`)
**Apply to:** stills (grain, og, cv-poster). Logos are outside the cache-key system but must still be added to `produced`.

### Generated-module shape
**Source:** `scripts/media.mjs:536-573` / `media.generated.ts:1-2,881-893`
**Apply to:** new `stills`, `logos` exports and `VideoEntry.duration`: `export const X = { … } as const satisfies Record<…>;`, keys JSON-quoted and `byKey`-sorted, header `/* eslint-disable */` + AUTO-GENERATED line.

### Reduced motion
**Source:** new hook + `@layer cinema` guard; existing Tailwind `motion-reduce:transition-none` on the toggle (`index.tsx:157`)
**Apply to:** all motion. CSS owns visuals; the hook is read only in effects (`getReducedMotion()` in `[]` effects, `useReducedMotion()` for `[reduce]` effects). Never branch markup on it.

### Error UI
**Source:** Contact `index.tsx:380-415,461` (`useState<string | null>`, French message, `console.error(err)` only in the one user-facing catch)
**Apply to:** `CvVideoCard` failed state (message from copy; no `console.error` needed for a media error event).

---

## No Analog Found

| File | Role | Data Flow | Reason / Use instead |
|---|---|---|---|
| grain generator (`renderGrain` in `scripts/media/stills.mjs`) | utility | transform | No procedural image generation exists; use RESEARCH Pattern 10 grain recipe (mulberry32, 128→256 nearest, 4 levels, lossless WebP, 4,034 B). |
| `src/hooks/use-reduced-motion.ts` | hook | event-driven | No hook file exists (`src/hooks/` removed in phase 1); logic is extracted from the Hero effect, shape from RESEARCH Pattern 2. |
| `scripts/verify-browser.mjs` (optional) | test | request-response (CDP) | No browser harness in the repo; scratch `rm/cdp.mjs` (RESEARCH §Code Examples). If committed, never wire into `check`/`deploy`. |

## Metadata

**Analog search scope:** `src/routes/`, `src/components/`, `src/data/`, `src/router.tsx`, `src/styles.css`, `scripts/`, `scripts/media/`, `package.json`, `media-src/manifest.json` (read-only, key shape only)
**Files scanned:** 18
**Notes for the planner:**
- Hook filename: UI-SPEC and RESEARCH both say `src/hooks/use-reduced-motion.ts` (the orchestrator's `useReducedMotion.ts` is the function name). Use the kebab file name.
- `src/components/cinema/*` never imports from `src/data/` (locked). `ScreenFrame` gets `grainUrl` from `Hero`; `Viewfinder` gets `recLabel` and children from `About`.
- `copy.ts` and `tools.ts` must have zero imports (Node imports them natively; `@/` would not resolve).
- CONVENTIONS.md still says router chrome is English and « match the existing language »; this phase deliberately overrides that (UI-SPEC: `notFound`/`error` become French). Mention it in the plan so the executor does not stop on the convention.
**Pattern extraction date:** 2026-09-28

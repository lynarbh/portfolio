# Architecture Research

**Domain:** Personal audiovisual/creative portfolio — brownfield redesign on TanStack Start + Cloudflare Workers
**Researched:** 2026-09-21
**Confidence:** HIGH (build/platform constraints verified against Cloudflare docs, TanStack Start docs via Context7, and direct inspection of `node_modules` + `public/`)

> Scope note: this document answers *how the new pieces attach to the existing system*. The existing system is already described in `.planning/codebase/ARCHITECTURE.md` and is not re-described here.

---

## Verified constraints that drive every decision below

| Fact | Value | Source | Confidence |
|------|-------|--------|------------|
| Cloudflare Workers static assets — max file size | **25 MiB per file** (Free *and* Paid) | Cloudflare Platform Limits | HIGH |
| Workers static assets — max files per version | 20,000 (Free) / 100,000 (Paid) | Cloudflare Platform Limits | HIGH |
| Current file count in `public/` | **124 files** — file count is a non-issue | `find public -type f \| wc -l` | HIGH |
| Default `Cache-Control` for Workers static assets | `public, max-age=0, must-revalidate` | Cloudflare static-assets headers docs | HIGH |
| `_headers` file supported from the public dir | Yes; max 100 rules, 2,000 chars/line; applies to **static assets only**, not SSR HTML | Cloudflare static-assets headers docs + Cloudflare Vite plugin docs | HIGH |
| `public/` files **and** imported `src/assets` both land in the client build output and are uploaded as static assets | Yes — `assets.directory` in the generated `wrangler.json` points at the client build output | Cloudflare Vite plugin reference | HIGH |
| Lovable config accepts extra plugins and forwards plugin options | `defineConfig({ plugins?: PluginOption[], vite?: UserConfig, tanstackStart?: {...}, react?: {...}, cloudflare?: {...} })`; internals show `...options.plugins` and `tanstackStart(tanstackStartOptions)` | `node_modules/@lovable.dev/vite-tanstack-config/dist/index.d.ts` + `dist/index.js` | HIGH |
| TanStack Start static prerendering available | Requires `@tanstack/react-start >= 1.138.0`; installed version is **1.167.39** | Cloudflare changelog + `node_modules` | HIGH |
| Route-level `head: () => ({ meta, links })` with `rel: preload`, `as`, `fetchPriority` | Supported; also emitted as HTTP 103 Early Hints. **`imageSrcSet` / `imageSizes` are NOT serialized into Early Hints** | TanStack Start docs (Context7) | HIGH |
| React 19 accepts camelCase `fetchPriority` on `<img>` / `<link>` | Yes (since React 18.3.0) | React PR #25927 / issue #28946 | HIGH |
| `ffmpeg` / `ffprobe` exist on the dev machine, **not** in a Cloudflare build container | `/opt/homebrew/bin/ffmpeg` present locally | direct check | HIGH |
| `sharp` already resolvable in `node_modules` | Yes (transitive) | `ls node_modules \| grep sharp` | MEDIUM (transitive — pin it explicitly as a devDependency) |
| `vite build` does **not** typecheck | Standard Vite/esbuild behaviour — transpile only | Vite behaviour | HIGH |

**Two cleanup facts discovered by tracing the code (both change the build order):**

1. `public/animate/1_MOHAMED.js` references **`videos/concassage.mp4`** and **`videos/empattage.mp4`** — i.e. the `videos/` *subfolder* is the live one and the 8 root-level `public/animate/*.mp4` files (82 MB) are the dead duplicates. The PROJECT.md assumption was inverted; delete the root-level copies, keep `videos/`.
2. `1_MOHAMED.js` only pulls `components/sdk/anwidget`, `components/video/src/video`, `images/`, and those 2 videos. `public/animate/illustrations/` (25 MB), `imagesImad/`, `imagesframe2/`, the other 6 videos in `videos/`, and all non-`1_MOHAMED` exports are unreferenced. `public/animate` can go 223 MB → ~34 MB by deletion alone, → ~8 MB after re-encode.

---

## Standard Architecture

### System Overview (target state)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  OFFLINE (dev machine only — never runs on Cloudflare)                   │
│                                                                          │
│   media-src/**  ──►  scripts/media.ts  ──►  public/media/**             │
│   (gitignored      (sharp + ffmpeg +         (committed derivatives)     │
│    masters)         pdftoppm)         ──►  src/data/media.generated.ts   │
│                                             (manifest: dims + srcsets)   │
└──────────────────────────────────────────────────────────────────────────┘
                                   │ (committed artefacts)
┌──────────────────────────────────▼───────────────────────────────────────┐
│  DATA LAYER  (src/data/, src/content/ — pure, no I/O, no React)          │
│  ┌────────────┐ ┌──────────┐ ┌─────────────────────┐ ┌───────────────┐  │
│  │ projects.ts│ │ tools.ts │ │ media.generated.ts  │ │ content/copy  │  │
│  │ Project[]  │ │ TOOLS    │ │ MEDIA manifest      │ │ COPY slots    │  │
│  │ + blocks   │ │ registry │ │ (GENERATED)         │ │ + guidance    │  │
│  └─────┬──────┘ └────┬─────┘ └──────────┬──────────┘ └───────┬───────┘  │
└────────┼─────────────┼──────────────────┼────────────────────┼──────────┘
         │             │                  │                    │
┌────────▼─────────────▼──────────────────▼────────────────────▼──────────┐
│  PRESENTATION — strictly one-directional: routes → sections → prims      │
│                                                                          │
│  ┌── src/components/media/ ───────┐  ┌── src/components/cinema/ ──────┐ │
│  │ Picture  VideoPlayer           │  │ FilmFrame   Credits            │ │
│  │ YouTubeFacade  IframeEmbed     │  │ Timecode    SectionSlate       │ │
│  │ MediaBlock (ProjectBlock ∪ )   │  │ Reveal (reduced-motion aware)  │ │
│  │  ── knows MEDIA manifest ──    │  │  ── knows NOTHING about data ──│ │
│  └────────────┬───────────────────┘  └───────────┬────────────────────┘ │
│               │                                  │                       │
│  ┌────────────▼──────────────────────────────────▼────────────────────┐ │
│  │ src/components/sections/                                           │ │
│  │  Nav  Hero  About  ToolsGrid  ProjectsSection/ProjectCard  Contact │ │
│  └────────────┬───────────────────────────────────────────────────────┘ │
└───────────────┼──────────────────────────────────────────────────────────┘
                │
┌───────────────▼──────────────────────────────────────────────────────────┐
│  ROUTES  __root.tsx  │  index.tsx (~120 l.)  │  projects/$projectId.tsx  │
│                                                        (~120 l.)          │
│  head: { meta, links: [preload poster, og:image] }                        │
└───────────────┬───────────────────────────────────────────────────────────┘
                │
┌───────────────▼──────────────────────────────────────────────────────────┐
│  STYLING — src/styles.css: tokens + cinema CSS layer + reduced-motion gate│
└───────────────┬───────────────────────────────────────────────────────────┘
                │ vite build
┌───────────────▼──────────────────────────────────────────────────────────┐
│  dist/client/**  (incl. public/media/** and public/_headers)              │
│      ──► Cloudflare Workers static assets (25 MiB/file cap)               │
│  dist/server/**  ──► Worker (SSR, or prerendered HTML if enabled)         │
└──────────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Owns | May import | Must NOT import |
|-----------|------|-----------|-----------------|
| `scripts/media.ts` | Transcoding, resizing, poster extraction, PDF page extraction, manifest emission, logo-placeholder generation | node, sharp, ffmpeg, pdftoppm | anything in `src/` except writing `media.generated.ts` |
| `src/data/media.generated.ts` | Intrinsic dimensions, `srcset` strings per format, LQIP data-URI | nothing | — (GENERATED, never hand-edited) |
| `src/data/tools.ts` | `ToolId` union, label, logo path, `logoStatus`, family | nothing | — |
| `src/data/projects.ts` | `Project[]`, `ProjectBlock` union, all project copy | `tools.ts` types, `media.ts` ref types | React, components |
| `src/content/copy.ts` | Named text slots + authoring guidance for Lyna | nothing | — |
| `src/components/cinema/*` | Pure visual primitives (frame bezel, corner credits, timecode, reveal) | React, `styles.css` classes | `src/data/**`, `src/components/sections/**` |
| `src/components/media/*` | Turning a media ref into correct HTML (picture/video/facade/iframe) | `media.generated.ts`, `cinema/*` | `src/data/projects.ts` values (types only) |
| `src/components/media/MediaBlock.tsx` | **The single switch over `ProjectBlock["kind"]`** | all of `media/*`, `cinema/*` | — |
| `src/components/sections/*` | Page-section composition + local UI state (filter, form) | `data/**`, `media/*`, `cinema/*`, `copy/*` | other sections |
| `src/routes/*` | Route wiring, `head` meta/preload, loader + `notFound()` | `sections/*`, `data/**` | `media/*`, `cinema/*` directly |

**The one rule that keeps this maintainable:** dependencies flow `routes → sections → {media, cinema, copy} → data`, never sideways or upward. `cinema/` importing from `data/` is the failure signal.

---

## Recommended Project Structure

```
media-src/                          # GITIGNORED — original masters (photos, .mov, charte PDF)
  images/<project-slug>/*.png|jpg
  video/<slug>/*.mp4|mov
  docs/charte_graphique.pdf
scripts/
  media.ts                          # the offline pipeline (bun run media)
  check-assets.ts                   # CI-ish guard: fail if any deployed file > 20 MiB
public/
  _headers                          # immutable caching for /media/*
  media/
    images/<slug>/<name>-<w>.avif|.webp|.jpg
    video/<slug>/<name>.mp4
    video/<slug>/<name>.poster.jpg
    logos/<tool-id>.svg             # real logos OR generated placeholders, same path
    docs/charte/<page>-<w>.avif|...
  animate/                          # ONLY 1_MOHAMED.* + components/sdk + images + 2 videos
src/
  content/
    copy.ts                         # every text slot + guidance, one file for Lyna
  data/
    projects.ts                     # Project[] with ordered blocks
    tools.ts                        # TOOLS registry
    media.ts                        # ImageRef / VideoRef ref types (hand-written)
    media.generated.ts              # MEDIA manifest (GENERATED — do not edit)
  components/
    cinema/    FilmFrame.tsx Credits.tsx Timecode.tsx SectionSlate.tsx Reveal.tsx
    media/     Picture.tsx VideoPlayer.tsx YouTubeFacade.tsx IframeEmbed.tsx MediaBlock.tsx
    sections/  Nav.tsx Hero.tsx About.tsx ToolsGrid.tsx ProjectsSection.tsx ProjectCard.tsx Contact.tsx
    copy/      Copy.tsx
  hooks/
    use-reduced-motion.ts           # SSR-safe, useSyncExternalStore
  routes/                           # unchanged file set → routeTree.gen.ts never regenerates
  styles.css                        # tokens + @layer cinema + reduced-motion gate
```

### Structure Rationale

- **`media-src/` gitignored, `public/media/` committed:** the repo ships only the ~50 MB of *derivatives*; the ~500 MB of masters stay on Lyna's disk (and/or a Drive folder). This is what actually hits the < 60 MB target, and it is reversible — re-running `bun run media` regenerates everything.
- **`public/media/` is the single canonical location; `src/assets/` is deleted outright.** Media is addressed by *string* from a data file, not by `import` at a call site, so Vite's import pipeline (and by extension `vite-imagetools`) can never see it without `import.meta.glob` gymnastics. See the anti-pattern section.
- **`cinema/` separate from `media/`:** the cinema look is reusable on non-media surfaces (section headings, the contact block, the 404). Keeping it data-free means it can be styled/iterated without touching the project model.
- **One `MediaBlock` switch:** every new block kind is a two-line change in one file plus one type variant. This is what removes the `project.id === "…"` branches permanently rather than just relocating them.

---

## Architectural Patterns

### Pattern 1: Offline media pipeline with a committed manifest

**What:** A Bun/Node script transcodes masters into web derivatives and emits a typed manifest. Nothing about media runs during `vite build`.

**When to use:** Media set is small, near-static, and requires transforms the deploy host cannot perform (video re-encode, PDF rasterisation).

**Trade-offs:**
- ✅ Cloudflare build stays exactly as fast and as green as today — zero new build-time risk, no native deps on the deploy path (this is the hard requirement: "build green at every step").
- ✅ Handles video + PDF, which a Vite image plugin structurally cannot (no ffmpeg in the build container).
- ✅ Real intrinsic `width`/`height` in the manifest → `<img width height>` → zero CLS.
- ❌ Derivatives are committed binaries; adding a photo means re-running the script.
- ❌ Manifest can drift from disk → mitigate with `scripts/check-assets.ts` in the `check` script.

**Example:**

```ts
// scripts/media.ts (shape, not the full implementation)
const WIDTHS = [480, 960, 1440, 1920] as const;

async function processImage(slug: string, name: string, file: string) {
  const meta = await sharp(file).metadata();
  const variants: Record<"avif" | "webp" | "jpg", string[]> = { avif: [], webp: [], jpg: [] };

  for (const w of WIDTHS) {
    if (w > (meta.width ?? 0)) continue;                 // never upscale
    for (const fmt of ["avif", "webp", "jpg"] as const) {
      const out = `public/media/images/${slug}/${name}-${w}.${fmt}`;
      await sharp(file).resize({ width: w }).toFormat(fmt, QUALITY[fmt]).toFile(out);
      variants[fmt].push(`/media/images/${slug}/${name}-${w}.${fmt} ${w}w`);
    }
  }

  return {
    width: meta.width!, height: meta.height!,
    avif: variants.avif.join(", "),
    webp: variants.webp.join(", "),
    fallback: variants.jpg.at(-1)!.split(" ")[0],
    lqip: await lqipDataUri(file),                        // 20px blurred base64
  };
}

// videos: ffmpeg -crf 23 -preset slow -movflags +faststart  (+ cap to <20 MiB)
// poster: ffmpeg -ss 00:00:01 -vframes 1 → <name>.poster.jpg → also run through processImage
// charte PDF: pdftoppm -r 150 -jpeg → media-src/images/festival-identite/ → processImage
```

```
# public/_headers  — Workers static assets only, max 100 rules
/media/*
  Cache-Control: public, max-age=31536000, immutable

/animate/*
  Cache-Control: public, max-age=604800
```

> Because `public/` filenames are *not* content-hashed by Vite, `immutable` is only safe if the filename changes when the bytes change. Either include a short content hash in the generated name (`portrait-a1b2c3-960.avif`) **or** accept a 1-week TTL. Recommendation: **content hash in the filename** — the pipeline already computes it, and it makes the immutable header correct rather than merely convenient.

### Pattern 2: Discriminated-union media blocks, one renderer

**What:** Detail-page content becomes an ordered `ProjectBlock[]` on each project; `MediaBlock` is the only component that knows the union.

**When to use:** Any time page code contains `if (entity.id === "specific-value")`.

**Trade-offs:** ✅ Adding a project never touches route code; the compiler enumerates every unhandled kind via an exhaustive `switch`. ❌ Slightly more verbose data file; very long prose blocks live in TS strings (acceptable here — no CMS is in scope).

**Concrete types** (these are the deliverable, not pseudocode):

```ts
// ── src/data/media.ts (hand-written ref types) ──────────────────────────────
/** Key into the generated MEDIA manifest, e.g. "clip/analyse-01". */
export type MediaKey = string;

export type ImageRef = {
  key: MediaKey;
  alt: string;              // required — a11y is table stakes on a design portfolio
  caption?: string;
};

export type VideoRef = {
  src: string;              // "/media/video/hero/hero-a1b2c3.mp4"
  posterKey: MediaKey;      // poster goes through the image pipeline too
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;       // ignored when prefers-reduced-motion
};

// ── src/data/media.generated.ts (GENERATED — do not edit) ───────────────────
export type ImageVariants = {
  width: number;            // intrinsic width of the largest variant
  height: number;
  avif: string;             // full srcset string
  webp: string;
  fallback: string;         // single URL, largest jpeg
  lqip?: string;            // data:image/jpeg;base64,…
};
export declare const MEDIA: Record<MediaKey, ImageVariants>;

// ── src/data/tools.ts ───────────────────────────────────────────────────────
export type ToolId =
  | "premiere-pro" | "after-effects" | "davinci-resolve" | "capcut"
  | "photoshop" | "illustrator" | "indesign" | "lightroom"
  | "adobe-animate" | "figma" | "canva" | "html-css" | "vs-code";

export type Tool = {
  id: ToolId;
  label: string;
  logo: `/media/logos/${string}.svg`;
  /** "placeholder" = generated stand-in awaiting Lyna's file at the SAME path. */
  logoStatus: "final" | "placeholder";
  family: "video" | "design" | "web";
};

export const TOOLS: Record<ToolId, Tool> = {
  "premiere-pro": { id: "premiere-pro", label: "Premiere Pro",
    logo: "/media/logos/premiere-pro.svg", logoStatus: "placeholder", family: "video" },
  // …
};

// ── src/content/copy.ts ─────────────────────────────────────────────────────
export type CopySlot = {
  id: string;
  label: string;            // shown in the dev-only placeholder box
  guidance: string;         // "1 phrase, 60–90 signes, dit le poste visé"
  maxChars?: number;
  text: string;             // "" while unwritten
  status: "todo" | "draft" | "final";
};
export const COPY = {
  "hero.tagline": {
    id: "hero.tagline", label: "Accroche hero",
    guidance: "1 phrase, 60–90 signes. Dit le poste visé + la spécialité vidéo.",
    maxChars: 90, text: "", status: "todo",
  },
  // …
} satisfies Record<string, CopySlot>;
export type CopySlotId = keyof typeof COPY;

// ── src/data/projects.ts ────────────────────────────────────────────────────
export type ProjectBlock =
  | { kind: "text";      heading?: string; body: string }
  | { kind: "image";     heading?: string; image: ImageRef;  body?: string; layout?: "full" | "inset" }
  | { kind: "gallery";   heading?: string; images: ImageRef[]; body?: string; columns?: 2 | 3 | 4 }
  | { kind: "video";     heading?: string; video: VideoRef;  body?: string }
  | { kind: "youtube";   heading?: string; youtubeId: string; title: string; posterKey?: MediaKey; body?: string }
  | { kind: "embed";     heading?: string; src: string; title: string; aspect?: number; body?: string }
  | { kind: "pdfPages";  heading?: string; images: ImageRef[]; body?: string; download?: string }
  | { kind: "link";      label: string; href: string };

export type ProjectCategory =
  | "Vidéo" | "Motion" | "Branding" | "Design" | "Photo" | "Web" | "Projet universitaire";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  /** Drives ordering: every "video" project sorts before every "design" project. */
  kind: "video" | "design";
  year?: number;
  order?: number;                 // manual tiebreak inside a kind
  featured?: boolean;
  role: string;
  tools: ToolId[];                // was string[] — now compiler-checked against TOOLS
  cover: ImageRef;                // was thumbnail: string
  teaser?: VideoRef;              // optional muted loop on card hover
  shortDescription: string;
  description: string;
  blocks: ProjectBlock[];         // replaces media[] + video + the 4 hardcoded branches
  url?: string;
  inProgress?: boolean;
};

export const sortProjects = (ps: Project[]) =>
  [...ps].sort((a, b) =>
    (a.kind === b.kind ? 0 : a.kind === "video" ? -1 : 1) ||
    (a.order ?? 99) - (b.order ?? 99));
```

```tsx
// src/components/media/MediaBlock.tsx — the ONLY place that knows the union
export function MediaBlock({ block }: { block: ProjectBlock }) {
  switch (block.kind) {
    case "text":     return <TextBlock {...block} />;
    case "image":    return <ImageBlock {...block} />;
    case "gallery":  return <GalleryBlock {...block} />;
    case "video":    return <VideoBlock {...block} />;
    case "youtube":  return <YouTubeBlock {...block} />;
    case "embed":    return <EmbedBlock {...block} />;
    case "pdfPages": return <PdfPagesBlock {...block} />;
    case "link":     return <LinkBlock {...block} />;
    default: {
      const _exhaustive: never = block;   // compile error if a kind is added and unhandled
      return null;
    }
  }
}
```

```tsx
// src/routes/projects/$projectId.tsx — target: ~120 lines, zero id branches
export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.project.title} — Lyna Rebahi` },
      { property: "og:image", content: MEDIA[loaderData.project.cover.key].fallback },
    ],
    links: [
      { rel: "preload", as: "image", fetchPriority: "high",
        href: MEDIA[loaderData.project.cover.key].fallback },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <ProjectLayout project={project}>
      {project.blocks.map((block, i) => (
        <Reveal key={i} delay={Math.min(i * 60, 300)}>
          <MediaBlock block={block} />
        </Reveal>
      ))}
    </ProjectLayout>
  );
}
```

> Note the `links` caveat: `imageSrcSet`/`imageSizes` are *not* serialised into 103 Early Hints by TanStack Start, so preload the single fallback URL, not the srcset. Confidence HIGH (documented).

### Pattern 3: CSS-first cinema effects, React only where state is needed

**What:** A decision rule for every visual effect in the redesign.

| Effect | Implementation | Why |
|--------|---------------|-----|
| Film grain | CSS `.grain::before` (already exists in `styles.css`) | pure decoration, zero JS, SSR-perfect |
| Curved-screen bezel / vignette | CSS class `.film-frame` (border-radius + inset box-shadow + radial vignette) wrapped by a thin `<FilmFrame>` for markup ergonomics | no measurement needed |
| Letterbox bars, film perforations, scanlines | CSS pseudo-elements | ditto |
| Corner credit metadata | `<Credits>` React component (content varies per section) + CSS positioning | needs props, not state |
| Timecode reveal / counter | `<Timecode>` React component (`requestAnimationFrame`, gated on visibility) | needs state |
| Scroll reveal | `<Reveal>` React component (`IntersectionObserver`) | needs observation |
| Pointer-reactive parallax (if wanted at all) | `ref.current.style.setProperty("--mx", …)` inside rAF — **never** `setState` | current `CustomCursor` re-renders on every `mousemove`; that is the perf bug being removed |

**SSR-safe reduced motion — two layers:**

```css
/* Layer 1: CSS gate — works before any JS, covers 95% of cases */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal { opacity: 1; transform: none; }
  .grain::before { display: none; }
}
```

```ts
// Layer 2: src/hooks/use-reduced-motion.ts — for JS decisions (autoplay, rAF loops)
import { useSyncExternalStore } from "react";
const QUERY = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
export const useReducedMotion = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,                      // server snapshot — matches first client render, no hydration mismatch
  );
```

**`Reveal` SSR hazard + fix:** `Reveal` renders `opacity: 0` in the SSR HTML. If hydration fails or JS is blocked, the whole page is invisible to a recruiter. Add to `__root.tsx`:

```tsx
<noscript><style>{`.reveal{opacity:1!important;transform:none!important}`}</style></noscript>
```

and in the observer effect, mark elements already intersecting on the *first* callback synchronously so above-the-fold content never waits for a scroll event.

---

## Data Flow

### Authoring flow (offline, runs on Lyna's / the dev machine)

```
media-src/**  ──bun run media──►  public/media/**            (committed derivatives)
                              └─►  src/data/media.generated.ts (committed manifest)
                              └─►  public/media/logos/*.svg    (placeholders for missing logos)
```

### Render flow (home page)

```
projects.ts ──sortProjects()──► ProjectsSection (local `filter` state)
                                      │
                                      ├─► ProjectCard ──► Picture ──► MEDIA[cover.key] ──► <picture> srcset
                                      │                └─► ToolBadges ──► TOOLS[toolId].logo
                                      └─► <Link to="/projects/$projectId">

COPY["hero.tagline"] ──► <Copy id> ──► text || (DEV ? dashed guidance box : null)
```

### Render flow (detail page)

```
URL /projects/:id
   ↓ loader: projects.find() || throw notFound()
   ↓ head:   meta + og:image + preload(cover fallback)
ProjectPage
   ↓ project.blocks.map()
Reveal ──► MediaBlock ──switch(kind)──► Picture | VideoPlayer | YouTubeFacade | IframeEmbed | Gallery
                                              │
                                              └──► MEDIA[key] ──► /media/** ──► Workers static assets
                                                                       ▲
                                                                  public/_headers → immutable
```

### Key data flows

1. **Media resolution:** `ImageRef.key` → `MEDIA[key]` → `{avif, webp, fallback, width, height, lqip}` → `<picture>`. The manifest is the *only* coupling between data and disk; a missing key is a TypeScript-visible `undefined` at the lookup site (add a `resolveImage()` helper that throws in DEV and falls back to a grey SVG in PROD).
2. **Tool resolution:** `ToolId` → `TOOLS[id]` → `{label, logo, logoStatus}`. Because the logo path is *identical* whether the file is a placeholder or Lyna's final art, replacing a logo is a pure file drop — no code change.
3. **Copy resolution:** `CopySlotId` → `COPY[id]` → render text, or nothing in production. Recruiters never see a TODO; Lyna sees every gap in `bun run dev`.
4. **No state store, no fetching.** Everything remains module-scope constants; the only React state left is `filter` (projects), the contact-form status, and the nav toggle.

---

## Scaling Considerations

The "scale" axis here is **page weight and asset count**, not users.

| Scale | Adjustment |
|-------|------------|
| Today: ~124 files, ~525 MB | Offline pipeline + deletion → target < 60 MB. No infra change. |
| ~300 media files | Still fine (20,000-file free limit). Add a `--only <slug>` flag to `scripts/media.ts` so re-runs stay fast. |
| Any single video approaching 25 MiB | Hard deploy failure. Cap the pipeline at **20 MiB** with an explicit `ffmpeg` two-pass bitrate target, and fail `bun run check` if any file in `public/` exceeds it. |
| Committed derivatives make the git repo heavy | Move `public/media/` to R2 + a custom domain and swap the manifest's base URL. The manifest indirection makes this a one-line change — that is the main reason to route everything through `MEDIA` rather than raw strings. |

### Scaling priorities

1. **First bottleneck — LCP on the hero.** Fix order: generated poster as LCP element (`fetchPriority="high"`, preloaded via route `head.links`), hero video at `preload="metadata"` (currently `"auto"` — it fights the poster for bandwidth), `autoPlay` suppressed under reduced motion.
2. **Second bottleneck — third-party iframes.** Three YouTube embeds load ~1.5 MB of youtube.com JS each. Use a facade (`<YouTubeFacade>`: generated poster + play button → swaps in a `youtube-nocookie.com` iframe on click). Same for the Adobe Animate iframe: `loading="lazy"` + fixed aspect box.
3. **Third — cache misses.** Without `_headers`, every `/media/*` request revalidates (`max-age=0, must-revalidate` default). The `_headers` rule plus hashed filenames turns repeat visits into zero media requests.

---

## Anti-Patterns

### Anti-Pattern 1: Solving the media problem with a build-time Vite plugin

**What people do:** Add `vite-imagetools` (or similar) to `vite.config.ts` and import images with `?w=480;960&format=avif;webp&as=picture`.

**Why it's wrong here — four independent reasons:**
1. **It cannot touch video.** The single largest wins are `hero.mp4` 17 MB → ~3 MB and the CV video 23 MB → < 10 MB. That needs `ffmpeg`, which does not exist in a Cloudflare build container (verified: ffmpeg is a local Homebrew binary). The PDF extraction has the same problem.
2. **The paths live in a data file as strings**, not as import specifiers. Making Vite see them requires an `import.meta.glob(..., { query, eager: true })` manifest — i.e. you reinvent the manifest anyway, but now it only exists at build time and you still can't inspect it.
3. **It puts `sharp` (a native binary) on the deploy critical path** and adds minutes to every Cloudflare build, directly against the "build stays green at every step" constraint.
4. `vite.config.ts` carries an explicit warning about hand-added plugins. It *is* technically safe to add one (`defineConfig({ plugins: [...] })` is supported and merges via `...options.plugins` — verified in the dist bundle), but spending that risk budget on something that only solves half the problem is a bad trade in a one-week window.

**Do this instead:** offline `scripts/media.ts` + committed derivatives + committed manifest. Zero build-time change, handles images *and* video *and* PDF.

### Anti-Pattern 2: Keeping two asset trees

**What people do:** Leave `src/assets/` (bundled imports) alongside `public/assets/` (absolute URLs) "because some components import directly."

**Why it's wrong:** 63 files are byte-duplicated across the two trees (141 MB + 122 MB). Two conventions means every future asset decision is a coin flip, and it is exactly how the duplication happened. Both trees end up in `dist/client` anyway — there is no serving benefit.

**Do this instead:** `public/media/` only, addressed through `MEDIA`. Only `src/assets/portrait.jpg` is actually imported today (`index.tsx:8`) — one import to rewrite.

### Anti-Pattern 3: Moving `project.id === "…"` branches into a `switch` in the same file

**What people do:** Refactor the four hardcoded branches into `renderSae2()`, `renderClip()` helper functions.

**Why it's wrong:** The coupling is unchanged — route code still names specific projects, and adding a project still means editing a route file. The file gets shorter, not better.

**Do this instead:** `ProjectBlock[]` on the data object. Verified feasible: all four existing branches are already the same shape — `{heading, 1–4 images, body paragraph}` — so they map onto `gallery` / `image` / `text` / `embed` blocks with **no information loss**.

### Anti-Pattern 4: React state driven by `mousemove` / `scroll`

**What people do:** `const [pos, setPos] = useState(); onMouseMove: setPos(...)` — exactly what `CustomCursor` (`index.tsx:613`) does today.

**Why it's wrong:** A full React render tree reconciliation per pointer sample. This is the concrete perf item in PROJECT.md.

**Do this instead:** the effect is being removed entirely. If any pointer-reactive cinema effect returns later: `ref.current.style.setProperty("--mx", x)` inside a rAF-throttled listener, consumed by CSS. Zero renders.

### Anti-Pattern 5: `preload="auto"` on a multi-megabyte hero video

**What people do:** what the current `Hero` does — `preload="auto"` on a 17 MB `hero.mp4` that is also `position: fixed` behind everything.

**Why it's wrong:** The browser races the full video against the poster and the fonts; LCP is whatever wins. Even at 3 MB it should not outrank the poster.

**Do this instead:** `poster` = generated still, `preload="metadata"`, `autoPlay muted loop playsInline`, and preload *the poster* via `head.links` with `fetchPriority: "high"`.

### Anti-Pattern 6: Deleting route files during cleanup

**Why it matters:** `routeTree.gen.ts` is generated from the *file set* under `src/routes/`. Phases 1–2 touch only `src/components/`, `src/hooks/`, `src/lib/`, and root config files — so `routeTree.gen.ts` is provably untouched and the build cannot break on it. If a route file is ever added or removed, run `bun run dev` once to regenerate and commit the result; never hand-edit.

---

## Integration Points

### External Services

| Service | Integration pattern | Gotchas |
|---------|--------------------|---------|
| Cloudflare Workers static assets | `public/**` → `dist/client/**` → `assets.directory` in the generated `wrangler.json` | 25 MiB/file hard cap; default `Cache-Control: max-age=0, must-revalidate`; `_headers` applies to assets only, never to SSR HTML |
| YouTube | `{kind:"youtube"}` block → `<YouTubeFacade>` → `youtube-nocookie.com/embed/<id>` on click | Store the **bare video id** in data, not a full embed URL — the current `video.includes("youtube.com/embed")` string sniffing goes away |
| Adobe Animate (CreateJS) | `{kind:"embed", src:"/animate/1_MOHAMED.html"}` → `<IframeEmbed loading="lazy">` | Keep only `1_MOHAMED.*`, `components/sdk`, `components/video/src`, `images/`, `videos/concassage.mp4`, `videos/empattage.mp4`. Re-encode those two videos in place — the iframe references relative paths, so filenames must not change |
| EmailJS | Unchanged, client-side | Move `emailjs.init(...)` out of the `Contact` `useEffect` (re-runs per mount) into a lazily-initialised module in `src/lib/emailjs.ts`, called from the submit handler — **not** module top level, which would execute during SSR |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| `scripts/media.ts` → `src/data/media.generated.ts` | Code generation (file write) | One-way. Add `media.generated.ts` to `.prettierignore` and mark it `/* eslint-disable */` like `routeTree.gen.ts` |
| `data/projects.ts` → `media/MediaBlock` | Typed discriminated union | The `never` exhaustiveness check is the contract enforcement |
| `data/tools.ts` → `sections/ToolsGrid`, `ProjectCard` | `Record` lookup by `ToolId` | Placeholder and final logos share a path; only `logoStatus` differs, used for a DEV-only dashed outline |
| `content/copy.ts` → `components/copy/Copy` | `Record` lookup by `CopySlotId` | `import.meta.env.DEV` gates the guidance box; production renders nothing for empty slots |
| `sections/*` → `cinema/*` | Props only | `cinema/` must never import `data/` — if it does, the layer split has failed |

---

## Suggested Build Order (one-week sequencing)

Ordering rationale — three hard dependencies:
**(a)** cleanup precedes the media pipeline (don't spend encode time on files you're about to delete);
**(b)** the manifest precedes the data-model migration (`ImageRef.key` must resolve);
**(c)** the data model precedes the detail-page rewrite (but *not* the Hero/About/Tools rewrite, which only needs the manifest — so those two tracks can interleave if time gets tight).

| # | Phase | Est. | Depends on | Green-build gate |
|---|-------|------|-----------|------------------|
| 0 | **Safety net** — add `"check": "tsc --noEmit && vite build"`, `scripts/check-assets.ts` (fail > 20 MiB), gitignore `media-src/`, script listing referenced-vs-present assets | 0.5 d | — | `bun run check` passes on the *current* code (baseline) |
| 1 | **Dead code + single deploy target** — delete `ProjectModal`, `Petals`, `CornerOrnament`, `Skills()`, `CustomCursor`, `src/components/ui/**`, `use-mobile`, `components.json`, `vercel.json`, `server.js`, `package-lock.json`, `"start"` script; drop ~30 unused deps | 0.5 d | 0 | `bun run check` + `wrangler deploy --dry-run`; no `src/routes/` file touched → `routeTree.gen.ts` unchanged |
| 2 | **Asset dedupe + orphan purge** — move masters to `media-src/`, `git rm src/assets/**`, root-level `public/animate/*.mp4`, `*.fla`/`*.ai`/`~ai-*.tmp`/`RECOVER_*`, non-`1_MOHAMED` exports, `illustrations/`, unused `videos/*`, unreferenced `public/assets/*`, `charte_graphique.pdf` | 0.5 d | 1 | `bun run check`; manual smoke of `/projects/sae-2` (the Animate iframe) |
| 3 | **Media pipeline** — `scripts/media.ts` (sharp + ffmpeg + pdftoppm), `public/_headers`, `media.generated.ts`, logo placeholders, charte page extraction, fix the two broken refs (`extraitpubSAE1.mp4`, `festival-*.jpg`); ship `Picture` + `VideoPlayer` | 1.0 d | 2 | `bun run check` + asset-size guard; **< 60 MB target met here** |
| 4 | **Data model** — `tools.ts`, `content/copy.ts`, `ProjectBlock` union; *widen* `Project` (new fields optional alongside old), migrate the 9 entries + port the 4 hardcoded branches into `blocks`, then *narrow* (remove `thumbnail`/`media`/`video`) | 0.5 d | 3 | widen → migrate → narrow, each a separate green commit |
| 5 | **Sections + cinema primitives** — split `index.tsx` into `sections/*`; add `cinema/*` + the `@layer cinema` CSS + the reduced-motion gate + `useReducedMotion` + the `<noscript>` reveal escape hatch; Hero/About/ToolsGrid/Projects rebuilt | 1.5 d | 3 (manifest) — *not* 4 | `bun run check` after each extracted section; visual check at each step |
| 6 | **Detail page rewrite** — `$projectId.tsx` → `loader` + `notFound()` + `head` + `blocks.map(MediaBlock)`; delete all four `project.id ===` branches (665 → ~120 lines) | 0.5 d | 4, 5 | `bun run check`; walk all 9 project URLs |
| 7 | **Polish + verify** — `head.links` preloads, lazy loading audit, YouTube facades, Lighthouse pass, optional `tanstackStart: { prerender: { enabled: true } }` | 0.5 d | 6 | full `bun run check` + real Cloudflare deploy |

**Total ≈ 5.5 days**, leaving slack. If the week compresses, phases **0–3 plus the Hero/About/ToolsGrid part of 5** deliver the PROJECT.md priority ("nettoyage + poids + hero/qui suis-je/projets") and are independently shippable; phases 4 and 6 (the data-model / detail-page work, explicitly "not blocking" in PROJECT.md) are the ones to defer.

**Two invariants that keep the build green:**
- `bun run check` = `tsc --noEmit && vite build`. This matters because **`vite build` alone does not typecheck** — a broken `Project` type would deploy silently and fail at runtime. Adding `tsc --noEmit` is what actually makes "the build is green" a meaningful gate.
- `scripts/check-assets.ts` fails the check if any file destined for `dist/client` exceeds 20 MiB, so the 25 MiB Cloudflare ceiling can never be hit by surprise (as it was once before with the CV video).

**Optional stretch (phase 7, MEDIUM confidence):** `defineConfig({ tanstackStart: { prerender: { enabled: true } } })`. Every route is static, `@tanstack/react-start@1.167.39` ≥ the required 1.138.0, and the Lovable wrapper does forward `tanstackStart` options (verified in the dist bundle). Confidence is MEDIUM only because the *combination* (Lovable wrapper + Cloudflare plugin + prerender) is unverified in practice. Treat as an optimisation, not a requirement, and revert instantly if the build reddens.

---

## Sources

- Cloudflare — Workers static assets: https://developers.cloudflare.com/workers/static-assets/ (HIGH)
- Cloudflare — Static assets headers / `_headers`: https://developers.cloudflare.com/workers/static-assets/headers/ (HIGH)
- Cloudflare — Platform limits (25 MiB/file, 20k files free): https://developers.cloudflare.com/workers/platform/limits/ (HIGH)
- Cloudflare — Vite plugin, static assets reference: https://developers.cloudflare.com/workers/vite-plugin/reference/static-assets/ (HIGH)
- Cloudflare — TanStack Start prerendering changelog: https://developers.cloudflare.com/changelog/2025-12-19-tanstack-start-prerendering (HIGH)
- TanStack Start — SEO / `head` meta + links, Early Hints, static prerendering, selective SSR (Context7 `/websites/tanstack_start`) (HIGH)
- React — camelCase `fetchPriority` support: https://github.com/facebook/react/pull/25927, https://github.com/facebook/react/issues/28946 (HIGH)
- `vite-imagetools` capabilities (images only, Sharp-based): https://www.npmjs.com/package/vite-imagetools (MEDIUM — used only to rule the approach out)
- Direct inspection: `node_modules/@lovable.dev/vite-tanstack-config/dist/index.d.ts` + `dist/index.js`, `public/animate/1_MOHAMED.js`, `src/data/projects.ts`, `src/routes/*` (HIGH)

---
*Architecture research for: audiovisual portfolio redesign on TanStack Start + Cloudflare Workers*
*Researched: 2026-09-21*

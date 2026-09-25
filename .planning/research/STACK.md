# Technology Stack: Lightweight + Cinematic Milestone

**Project:** Portfolio (TanStack Start on Cloudflare Workers)
**Researched:** 2026-09-25
**Status:** complete
**Overall confidence:** HIGH for tools/versions/flags (verified on npm, official docs and by test encodes on the dev machine); MEDIUM for exact quality/CRF values (content-dependent)

## Recommended Stack

### Images

**Tool:** `sharp@0.35.4` (npm latest, published 2026-09-22) as an explicit **devDependency**. It is currently only present transitively at 0.34.5 (via `node_modules`), so pin it: `bun add -d sharp@^0.35.4`. Confidence: HIGH (npm registry).

Runs only inside `scripts/media.ts` on the dev machine (ARCHITECTURE Pattern 1). Never imported from `src/`, never on the Cloudflare build path.

**Verified sharp defaults that change the recipe** (sharp output API docs, HIGH):
- Output **strips all metadata and converts to sRGB by default** -> the "convert to sRGB then strip ICC" rule from PITFALLS is the default; do **not** call `keepMetadata()`, `keepIccProfile()` or `withMetadata()`.
- Stripping metadata also strips **EXIF orientation** -> every pipeline must start with `.rotate()` (no-arg = auto-orient; `autoOrient()` is the explicit alias in 0.34+), otherwise phone portraits come out sideways.
- `avif()` default `chromaSubsampling` is **`'4:4:4'`** (not 4:2:0) and default quality 50. So the *photo* preset must set `'4:2:0'` explicitly to get the size win; the *graphics* preset just keeps the default.
- `webp()` is always 4:2:0 when lossy (`smartSubsample: true` softens it but does not fix red/blue text edges) -> for graphics, WebP must be `lossless`/`nearLossless` or skipped.
- `jpeg()` default `chromaSubsampling` is `'4:2:0'`; `mozjpeg: true` enables trellis + optimised scans + progressive.

#### Preset A -- `photo` (stills, portrait, festival photos, video posters)

```ts
// scripts/media/presets.ts
import sharp from "sharp";

const base = (file: string, w: number) =>
  sharp(file, { failOn: "none" })
    .rotate()                                   // honour EXIF orientation BEFORE metadata is dropped
    .resize({ width: w, height: w, fit: "inside", withoutEnlargement: true, kernel: "lanczos3" }) // ladder applies to the LONG edge, so portrait masters are capped too (PITFALLS 5)
    .toColourspace("srgb");                     // explicit; P3/AdobeRGB masters -> sRGB, ICC then stripped

export const photo = {
  avif: (f: string, w: number) => base(f, w).avif({ quality: 55, effort: 6, chromaSubsampling: "4:2:0" }),
  webp: (f: string, w: number) => base(f, w).webp({ quality: 78, effort: 5, smartSubsample: true }),
  jpg:  (f: string, w: number) => base(f, w).jpeg({ quality: 80, mozjpeg: true }),   // progressive via mozjpeg
};
```
Quality rationale: AVIF q55 / WebP q78 / mozjpeg q80 sit at roughly the same perceptual point (visually lossless at 1x on photographic content; AVIF ~40-50 % smaller than the JPEG). Bump AVIF to q60 only for dark, grainy film stills where banding shows (AVIF at 8-bit bands in near-black gradients -- check the hero poster specifically). Confidence: MEDIUM (quality equivalences are community/Squoosh-derived, not an official table -- eyeball-check 3 images at 100 % zoom before batch-running).

#### Preset B -- `graphic` (posters, affiches, brand boards, charte pages, logos with text)

```ts
export const graphic = {
  avif: (f: string, w: number) => base(f, w).avif({ quality: 70, effort: 6, chromaSubsampling: "4:4:4" }), // 4:4:4 = sharp default, stated explicitly
  // WebP lossy is always 4:2:0 -> use near-lossless for the WebP rung (or omit WebP entirely; AVIF support is ~95 %)
  webp: (f: string, w: number) => base(f, w).webp({ nearLossless: true, quality: 60, effort: 6 }),
  // fallback: 4:4:4 JPEG (not PNG) for photographic posters; palette PNG only for flat logos/typography boards
  jpg:  (f: string, w: number) => base(f, w).jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: "4:4:4" }),
  png:  (f: string, w: number) => base(f, w).png({ palette: true, quality: 90, effort: 10, colours: 256 }),
};
```
Rule for the manifest: each source image is tagged `preset: "photo" | "graphic"` in a small sidecar map (`media-src/presets.json` or filename suffix `*.graphic.png`). Default is `photo`; the charte pages, affiches, logos, typography boards are `graphic`. Confidence: HIGH for the subsampling behaviour (docs), MEDIUM for the exact quality values.

#### Responsive width ladder

Cap every master at **2400 px long edge** (PITFALLS). Never upscale (`withoutEnlargement`). Ladders:

| Role | Widths (px) | `sizes` attribute | Formats |
|------|-------------|-------------------|---------|
| Hero poster / full-bleed stills | 640, 960, 1440, 1920, 2400 | `100vw` | avif, webp, jpg |
| Portrait (about) | 480, 800, 1200 | `(min-width: 1024px) 40vw, 90vw` | avif, webp, jpg |
| Project card thumbnails | 400, 640, 960 | `(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw` | avif, webp, jpg |
| Gallery / detail images | 640, 1024, 1600, 2400 | `(min-width: 1280px) 1200px, 100vw` | avif, webp, jpg |
| Graphic boards (charte pages, posters) | 800, 1600, 2400 | `(min-width: 1280px) 1200px, 100vw` | avif (4:4:4), webp near-lossless, jpg 4:4:4 |
| Logos | SVG as-is (SVGO'd); raster logos 128, 256 | fixed CSS size | png palette / webp lossless |

That is 3-5 widths x 3 formats; for ~60 images this lands in the low tens of MB total, well inside the < 60 MB target (ARCHITECTURE build order step 3). Drop the JPEG rung for thumbnails if you want to shave further (WebP is universally supported in 2026); keep it for hero/portrait for OG/crawler use.

LQIP: `sharp(f).rotate().resize(20).blur(2).webp({ quality: 40 }).toBuffer()` -> base64 data URI in the manifest (~300-600 bytes each). Use for hero poster + gallery only, not thumbnails (manifest bloat).

#### Manifest -> `<picture>`

`src/data/media.generated.ts` (generated, committed, typed) emits per image:

```ts
export type Img = {
  w: number; h: number;              // intrinsic -> <img width height>, zero CLS
  avif: string; webp: string;        // "…-640-a1b2c3.avif 640w, …"
  src: string;                       // largest jpg (or png for flat graphics)
  lqip?: string;
};
```
Rendered by one component:

```tsx
<picture>
  <source type="image/avif" srcSet={img.avif} sizes={sizes} />
  <source type="image/webp" srcSet={img.webp} sizes={sizes} />
  <img src={img.src} width={img.w} height={img.h} sizes={sizes}
       loading={priority ? "eager" : "lazy"} decoding="async"
       fetchPriority={priority ? "high" : "auto"} alt={alt} />
</picture>
```
Because the ladder caps the long edge (`fit: "inside"`), a portrait master's output width is smaller than the ladder number: write the `w` descriptor from sharp's `toFile()` result (`info.width`), never from the ladder constant, or the browser picks the wrong candidate. React 19 accepts `fetchPriority` camelCase. Only the hero poster gets `priority`. Filenames carry a short content hash (ARCHITECTURE) so `public/_headers` can mark `/media/*` immutable.

**Why not the alternatives** (one line each):
- `vite-imagetools@12.0.1` -- runs sharp inside `vite build` on the Cloudflare/Lovable build path (native binary, slower, can't do video/PDF); ARCHITECTURE Anti-Pattern 1.
- `@squoosh/cli@0.7.3` -- abandoned (last publish 2023-01), WASM codecs, much slower, no Node 22+ guarantees.
- `magick` for batch images -- works, but AVIF quality/subsampling knobs are via libheif delegate flags that are less predictable; no typed manifest in the same process; keep it only as a debugging/inspection tool (`magick identify -verbose`).

### Video

**Tool:** the local `ffmpeg 8.1.1` (Homebrew, `/opt/homebrew/bin`), encoders `libx264`, `aac`, `libsvtav1`, `libvpx-vp9` present; build has `libvmaf` + `videotoolbox`, **no `libzimg` (no `zscale`) and no `libplacebo`**. All numbers below come from test encodes run on this machine on 2026-09-25. Confidence: HIGH for the flags, MEDIUM for exact CRF (content-dependent -- measured on the real files).

**New finding that PITFALLS missed: `hero.mp4` is not just 10-bit, it is HDR HLG.** `ffprobe` reports `color_space=bt2020nc, color_transfer=arib-std-b67 (HLG), color_primaries=bt2020`, 1080x574, 60 fps, 16.85 s. Dropping to `yuv420p` alone keeps BT.2020 primaries interpreted as BT.709 -> washed-out, desaturated picture (verified by frame comparison). The encode must also convert colour: without `zscale`, the built-in `colorspace` filter treating HLG as `bt2020-10` gives a correctly saturated SDR result (visually checked). Also note the "1080p" hero is actually **1080 px wide, 574 px tall** -- never upscale it.

#### (a) Hero loop -- muted, 30 fps, target <= 4 MB

```bash
# media-src/video/hero.mp4 -> public/media/video/hero-<hash>.mp4
ffmpeg -y -i media-src/video/hero.mp4 -an \
  -vf "colorspace=all=bt709:iall=bt2020:itrc=bt2020-10:format=yuv420p:dither=fsb:fast=0,fps=30" \
  -c:v libx264 -preset slow -crf 25 -maxrate 1.8M -bufsize 3.6M -tune film \
  -profile:v high -level:v 4.1 -pix_fmt yuv420p \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 -color_range tv \
  -movflags +faststart public/media/video/hero.mp4
```
Measured: **17.2 MB -> 3.76 MB** (CRF 25, maxrate 1.8M). CRF 23 without tone-conversion gave 4.19 MB. `-maxrate/-bufsize` caps sparkle/water frames that otherwise spike bitrate. `-tune film` suits live-action; **never `-tune grain`** (multiplies size to preserve noise -- the grain overlay is added in CSS anyway). If the conversion looks off versus QuickTime's SDR rendering, the fallback is `brew install ffmpeg` from the `homebrew-ffmpeg/ffmpeg` tap with `--with-zimg` and the canonical `zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p` chain, or Apple's `/usr/bin/avconvert` (present) to make an SDR master first. Source-file SDR re-export from the NLE is the best fix if Lyna still has the project.

**Poster frame** (then through the sharp `photo` preset -- PITFALLS 6 says the poster is what iPhone Low Power Mode shows):
```bash
ffmpeg -y -ss 1 -i public/media/video/hero.mp4 -frames:v 1 -update 1 media-src/images/hero-poster.png
```
Extract from the *converted* SDR output, not the HLG master, so poster and first video frame match exactly (no colour jump on play).

HTML: `<video autoplay muted loop playsinline preload="metadata" poster=…>` (ARCHITECTURE Anti-Pattern 5: no `preload="auto"`).

**WebM / AV1 second source -- not worth it this milestone.** Safari decodes AV1 only on hardware with an AV1 decoder (A17 Pro / M3 and newer), so H.264 must remain the universal source anyway; a second `<source>` saves maybe 1-1.5 MB on a 3.8 MB file at the cost of a second pipeline branch and a second file to QA per device. Revisit only if the hero grows past ~20 s. Confidence: MEDIUM (Safari AV1 hardware gating is well documented; savings estimate is from typical SVT-AV1 vs x264 ratios, not measured here).

#### (b) CV video -- 84.6 s, 1920x1080, 23.976 fps, AAC stereo ~98 kb/s, currently 23.1 MB and moov **after** mdat -> target <= 12 MB

12 MB over 84.6 s = ~1.13 Mb/s total -> ~1.0 Mb/s video + audio.

```bash
# default: keep the existing AAC track untouched (no generation loss), constrain video
ffmpeg -y -i media-src/video/cv.mp4 \
  -c:v libx264 -preset slow -crf 24 -maxrate 1.1M -bufsize 2.2M -tune film \
  -profile:v high -level:v 4.1 -pix_fmt yuv420p \
  -c:a copy -movflags +faststart public/media/video/cv.mp4

# optional loudness normalisation (if levels are uneven or quiet): re-encode audio
#   replace "-c:a copy" with:
#   -af "loudnorm=I=-16:TP=-1.5:LRA=11" -c:a aac -b:a 128k -ar 48000
```
If the result exceeds 12 MB, drop to `-crf 26` or scale to 1600 px wide (`-vf scale=1600:-2`) -- talking-head content holds up well. -16 LUFS integrated is the usual web/podcast target (YouTube normalises to ~-14). Confidence: HIGH (flags), MEDIUM (exact CRF -- run once and check `ls -l`).

#### (c) Process / Animate videos -- 1920x1080 **50 fps**, H.264 8-bit, 2.6-22.4 MB each, flat animation

Two traps: (1) 1080p at 50 fps requires **level 4.2**, so either keep 50 fps with `-level:v 4.2` or halve to 25 fps and use 4.1; (2) these are flat-colour Animate exports -> `-tune animation` (higher deblocking + more reference frames suit flat areas).

```bash
ffmpeg -y -i media-src/animate/empattage.mp4 -an \
  -vf "fps=25" -c:v libx264 -preset slow -crf 26 -tune animation \
  -profile:v high -level:v 4.1 -pix_fmt yuv420p -movflags +faststart \
  public/animate/videos/empattage.mp4
```
Measured on `empattage.mp4` (largest, 22.4 MB): CRF 24 -> 11.4 MB; CRF 27 -> 7.9 MB. **CRF 26 at 25 fps** is the recommended starting point (~8.5 MB estimated) -> every process video lands under ~9 MB, comfortably inside the 25 MiB per-asset limit. Keep `-an` only after confirming via `ffprobe -select_streams a` that the audio track is silent/unused (the Animate files *do* contain an AAC stream -- check if the Animate HTML plays it before stripping). Do **not** rename/relocate these without reading PITFALLS 2/3 (6-scene navigation chain, duplicated copies).

#### Verification one-liners (run on every output, wire into `scripts/check-assets.ts`)

```bash
# codec / profile / pix_fmt / level / fps / colour tags -- expect: h264 High yuv420p 41 (or 42) bt709
ffprobe -v error -select_streams v:0 \
  -show_entries stream=codec_name,profile,pix_fmt,level,r_frame_rate,color_primaries,color_transfer \
  -of default=nw=1 out.mp4

# faststart: the FIRST top-level box must be moov, not mdat
ffprobe -v trace out.mp4 2>&1 | grep -oE "type:'(moov|mdat)'" | head -1   # expect type:'moov'
```
Verified: the new hero prints `type:'moov'`; the current CV video prints `type:'mdat'` (confirms PITFALLS 7). Confidence: HIGH (run on this machine).

### PDF rasterisation

**Correction to ARCHITECTURE.md:** the pipeline sketch uses `pdftoppm` (poppler) -- poppler is **not installed**. But **Ghostscript is**: `/opt/homebrew/bin/gs` exists, so `magick` can rasterise PDFs, and more simply `gs` can be called directly. Verified 2026-09-25 with `which gs`. Confidence: HIGH.

**Pick: Ghostscript directly** (one well-understood CLI, scriptable from `scripts/media.ts` via `Bun.spawn`/`execFile`, no Swift compile step):

```bash
# render all pages at 300 dpi into the gitignored masters dir; sharp then downsizes to the 800/1600/2400 ladder
gs -dSAFER -dBATCH -dNOPAUSE -sDEVICE=png16m -r300 \
   -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -dUseCropBox \
   -sOutputFile=media-src/images/charte/charte-p%02d.png media-src/pdf/charte_graphique.pdf
```
DPI reasoning: for 2400 px on the long edge, A4 (11.69 in) needs ~205 dpi, A3 (16.54 in) ~145 dpi. Rendering at **300 dpi** and letting sharp's lanczos3 downscale gives cleaner type edges than rendering exactly at target size, and ~10 pages at 300 dpi is only a few seconds. Every charte page goes through the **`graphic` preset** (AVIF 4:4:4, JPEG 4:4:4) -- it is typography and flat colour, exactly PITFALLS 13. `-dUseCropBox` avoids printer bleed/crop marks showing up. CMYK pages are converted by Ghostscript's default CMYK->sRGB profile; spot-check one page against Preview.app for colour shift. The 22.5 MiB PDF itself stays in gitignored `media-src/` (PITFALLS 10).

**Why not the others:** `magick` just shells out to the same Ghostscript with less control over anti-aliasing/cropbox flags. Swift + PDFKit (`PDFPage.thumbnail(of:for:)` or `CGContext` draw) works and is a good fallback if Ghostscript mis-renders a font or transparency group -- PDFKit uses the same renderer as Preview.app, so it is the "looks exactly like Preview" reference -- but it adds a compiled Swift script to maintain. Confidence: HIGH (tools present), MEDIUM (colour fidelity -- verify one page visually).

### Animation

**Pick: CSS-only (Tailwind v4 + hand-written keyframes) + two tiny hooks. Do not add Motion or GSAP this milestone.** Confidence: HIGH for the recommendation given the scope (grain, vignette, letterbox, reveal-on-scroll, timecode) -- all of it is covered by ARCHITECTURE Pattern 3 without a library.

| Option | Version (npm, 2026-09-25) | Client JS cost (min+gzip) | SSR on TanStack Start | Verdict |
|--------|---------------------------|---------------------------|------------------------|---------|
| CSS + `IntersectionObserver` hook + `usePrefersReducedMotion` | -- | ~0.5 kB | Perfect: markup and styles render server-side, the hook only toggles a class after hydration | **Use** |
| `motion` (`motion/react`) | 13.4.4 | full `motion` component **34 kB**; `LazyMotion` + `m` **4.6 kB** + `domAnimation` **15 kB**; `useAnimate` mini 2.3 kB (motion.dev docs) | Safe (renders initial styles inline on the server; no `window` at import) | Only if a later phase needs exit/layout animations (e.g. route transitions, shared-element project cards). Then use `LazyMotion features={domAnimation}` + `m.*` from `motion/react-m` (~20 kB), and `<MotionConfig reducedMotion="user">` at the root |
| `gsap` | 3.15.0 | core ~25 kB, + ScrollTrigger ~15-20 kB | Must run in `useEffect`/`useGSAP` only; imperative, fights React for DOM ownership | Don't -- ScrollTrigger timelines are overkill for a one-page portfolio and a classic mobile-jank source (PITFALLS 12) |

Already in the tree: `tw-animate-css` (imported in `src/styles.css`) supplies `animate-in`/`fade-in`/`slide-in-*` utility classes -- reuse those instead of adding anything. Motion/GSAP sizes: Motion from official docs (HIGH); GSAP from training data (LOW -- irrelevant since not recommended).

Reduced motion, SSR-safe (complements the CSS gate in ARCHITECTURE Pattern 3):
```ts
// src/hooks/use-prefers-reduced-motion.ts
import { useSyncExternalStore } from "react";
const q = "(prefers-reduced-motion: reduce)";
export const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    (cb) => { const m = matchMedia(q); m.addEventListener("change", cb); return () => m.removeEventListener("change", cb); },
    () => matchMedia(q).matches,
    () => false,               // server snapshot: no hydration mismatch
  );
```
Use it to (a) not autoplay the hero `<video>` (show poster, offer a play button), (b) skip the `<Timecode>` rAF loop. `useSyncExternalStore` with a server snapshot is the React-19-correct way; no `typeof window` checks in render.

#### YouTube facade -- `lite-youtube-embed@0.3.4`

Latest on npm is 0.3.4 (published 2025-11); low churn is expected for a finished web component. Confidence: HIGH (version), MEDIUM (SSR notes below, from how custom elements behave in React 19).
- It is a **custom element** (`<lite-youtube videoid="…" playlabel="…">`). React 19 has full custom-element support (attributes/properties pass through), so SSR can render the tag directly -- the server HTML already contains the element with its `style="background-image:…"` poster slot, and it upgrades when the script defines it. No hydration mismatch because React does not own its shadow/inner DOM.
- Register it **client-only**: `useEffect(() => { import("lite-youtube-embed"); }, [])` inside the `YouTube` component (the module touches `customElements`/`document` at import -> must not be imported at module top level in an SSR route).
- CSS: `import "lite-youtube-embed/src/lite-yt-embed.css"` (small; fine to bundle globally).
- Add a TS declaration: `declare module "react" { namespace JSX { interface IntrinsicElements { "lite-youtube": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { videoid: string; playlabel?: string; params?: string } } } }`.
- Use `params="rel=0&modestbranding=1"`; lite-youtube uses `youtube-nocookie.com` by default.
- Poster: it pulls `hqdefault.jpg` from i.ytimg.com; if the thumbnail is poor, pass a custom poster via the `style` background (or a slotted `<img>` from the sharp pipeline).

### Logos

**Source: `simple-icons@16.32.0`** (npm latest, 2026-09-20; 3,461 icons; licence **CC0-1.0** for the package -- but the *trademarks* remain their owners', and simple-icons' own disclaimer says usage must follow each brand's guidelines). Verified by unpacking the tarball. Confidence: HIGH.

Availability in 16.32.0 (checked by filename in `icons/`):

| Tool | simple-icons slug | Status |
|------|-------------------|--------|
| Adobe Photoshop / Illustrator / Premiere Pro / After Effects / InDesign / Lightroom / Audition / Animate | -- | **Absent.** No `adobe*` files at all (Adobe icons were removed at Adobe's request; none have returned) |
| Figma | `figma` | Present |
| DaVinci Resolve | `davinciresolve` | Present |
| Blender | `blender` | Present |
| Cinema 4D | `cinema4d` | Present |
| Unreal Engine | `unrealengine` | Present |
| OBS Studio | `obsstudio` | Present |
| Notion | `notion` | Present |
| Canva | -- | **Absent** (`canvas.svg` is unrelated) |
| VS Code | -- | **Absent** (no `visualstudiocode`; Microsoft product icons removed) |
| CapCut | -- | **Absent** |

**Convention:** `public/media/logos/<id>.svg`, where `<id>` is the tool id used in `projects.ts` / the logo grid (ASCII kebab-case: `premiere-pro`, `after-effects`, `davinci-resolve`, `capcut`). Copy the simple-icons SVGs you need into that folder at pipeline time (do **not** ship the whole `simple-icons` package or import it at runtime -- 3,461 icons). simple-icons SVGs are single-path, `viewBox="0 0 24 24"`, no fill -> colour them with `fill="currentColor"` so the grid can go monochrome in the cinematic theme (the brand hex is in `simple-icons`' data if wanted).

**For the absent brands (Adobe suite, Canva, VS Code, CapCut):** use each vendor's official press/brand-kit SVG if Lyna wants the real mark (Adobe allows product icons in "works with / skills" contexts only per its brand guidelines -- nominative use on a CV/portfolio is the common, low-risk case, MEDIUM confidence, not legal advice). Otherwise, per FEATURES.md, render the **named monogram placeholder**: a generated SVG (`Pr`, `Ae`, `Ps`, `Ai`, `Id`, `Cv`, `VS`, `Cc`) in a rounded square with the tool name as `<title>` and visible label -- generated by `scripts/media.ts` into the same `public/media/logos/<id>.svg` path, so swapping in a real logo later is a file drop with no code change. The `Logo` component only needs `id` + `name`; if the file 404s it is a pipeline bug, caught by `check-assets`.

### Dependency pruning

**Tool: `knip@6.38.0`** (npm latest, 2026-09-23), run via `bunx knip`. Replaces `depcheck` (1.4.7, effectively unmaintained, only finds unused *deps*, not unused files/exports, and has no plugin model for Vite/TanStack Router). Confidence: HIGH (npm + `knip --help` checked).

Knip auto-enables its Vite, TanStack Router, ESLint, Prettier, TypeScript plugins from `package.json`; bun needs no special setup (it reads `package.json`; `bun.lockb` is irrelevant). Minimal `knip.json`:
```json
{
  "$schema": "https://unpkg.com/knip@6/schema.json",
  "entry": ["src/routes/**/*.tsx", "src/router.tsx", "server.js", "scripts/**/*.ts"],
  "project": ["src/**/*.{ts,tsx}", "scripts/**/*.ts"],
  "ignore": ["src/routeTree.gen.ts", "src/data/media.generated.ts"],
  "ignoreDependencies": ["tw-animate-css", "tailwindcss"]
}
```
`tw-animate-css` and `tailwindcss` are consumed via `@import` in `src/styles.css`, which knip does not trace by default -> would be a false positive. Also note the repo has **both** `bun.lockb` and `package-lock.json` -- delete `package-lock.json` in the cleanup phase (two lockfiles = two sources of truth).

**Measured starting point (grep of `src/`, 2026-09-25):** `@tanstack/react-query`, `zod`, `@hookform/resolvers`, `date-fns` have **zero** imports anywhere. `react-hook-form`, `recharts`, `embla-carousel-react`, `cmdk`, `vaul`, `sonner`, `input-otp`, `react-day-picker`, `react-resizable-panels` are imported **only** from shadcn files in `src/components/ui/` (46 files). Outside `ui/`, only ~9 ui components are used (button, tooltip, toggle, skeleton, sheet, separator, label, input, dialog).

Expected removals: react-query, zod, react-hook-form, @hookform/resolvers, date-fns, recharts, embla-carousel-react, cmdk, vaul, sonner (unless the contact form toasts), input-otp, react-day-picker, react-resizable-panels, and roughly 20 of the 26 `@radix-ui/*` packages (keep: slot, tooltip, toggle, dialog, label, separator -- `sheet` is built on `react-dialog`).

**Safe order (PITFALLS 11: files before packages):**
1. `bunx knip --include files` -> delete unused `src/components/ui/*.tsx` files. `bun run check` (tsc + vite build) must pass.
2. `bunx knip --dependencies` -> `bun remove <list>`. `bun run check` again.
3. `bunx knip --include exports,types` -> tidy leftovers (optional).
4. Confirm: `bun run build && bunx wrangler deploy --dry-run` and a manual smoke test of home, one project page, contact form (EmailJS), Animate chain.
Avoid `knip --fix` for the first pass -- review the list by hand, commit per step so each removal is revertible.

### Size gate

**Two layers; the script is the real gate, wrangler is the confirmation.**

1. **`scripts/check-assets.ts`** (run with `bun scripts/check-assets.ts`, added to `"check"`): walk `dist/client` (the static assets directory produced by `@cloudflare/vite-plugin`; confirm the exact path after the first build) and fail if any file is > **25 MiB** (Cloudflare Workers static-asset per-file limit), warn at > 15 MiB, print the total and the top 10 files, and fail if the total exceeds the milestone budget (60 MB). Also: for every `.mp4` under `public/`, run the two ffprobe checks from the Video section (pix_fmt `yuv420p`, first box `moov`) and verify every path in `media.generated.ts` exists. Zero dependencies -- `node:fs`, `node:child_process`.

   Quick one-liner for ad-hoc use (macOS `find` supports `-size +25M` in MiB):
   ```bash
   find dist -type f -size +25M -print | grep . && echo "FAIL: asset > 25 MiB" && exit 1 || echo "OK: no asset > 25 MiB"
   du -sh dist; find dist -type f -exec ls -l {} + | sort -k5 -nr | head -10
   ```

2. **`wrangler deploy --dry-run`** -- confirmed present in `wrangler@4.140.0` (`--dry-run: Compile a project and run checks without actually uploading the Worker`). Wrangler is not a direct dependency in `package.json` (only `wrangler.jsonc` references its schema), so add it: `bun add -d wrangler@^4.140.0`. After `vite build`, the Cloudflare Vite plugin writes a redirected config, so run it from the repo root after building: `bun run build && bunx wrangler deploy --dry-run`. Whether the dry run enforces the 25 MiB per-asset check is not stated in `--help` -- MEDIUM confidence that it does (asset-manifest validation happens client-side). That's why the script above is the primary gate.

Final scripts:
```json
"check": "tsc --noEmit && vite build && bun scripts/check-assets.ts",
"check:deploy": "bun run check && wrangler deploy --dry-run",
"media": "bun scripts/media.ts"
```

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Image processing | `sharp` in offline script | `vite-imagetools` | Puts native sharp on the deploy build path; can't handle video/PDF |
| Image processing | `sharp` | `@squoosh/cli` | Abandoned since 2023 |
| Image processing | `sharp` | ImageMagick `magick` | Less predictable AVIF knobs; keep for inspection only |
| Photo AVIF chroma | explicit `4:2:0` | sharp default `4:4:4` | ~20-30 % larger with no visible gain on photos |
| Graphics fallback | JPEG 4:4:4 / palette PNG | lossy WebP | Lossy WebP is always 4:2:0 -> red/blue text fringing |
| Video codec | H.264 High 8-bit only | + AV1/VP9 WebM | Safari AV1 is hardware-gated; second source not worth it for a 3.8 MB hero |
| HDR->SDR | `colorspace` filter (built in) | `zscale`+`tonemap` | Not in this Homebrew build; needs a custom ffmpeg |
| PDF raster | Ghostscript `gs` | `pdftoppm` (ARCHITECTURE) | poppler not installed; gs is |
| PDF raster | `gs` | Swift PDFKit | Works; fallback only, extra compiled script |
| Animation | CSS + hooks | `motion` 13.4.4 | 20-34 kB for effects CSS already does |
| Animation | CSS + hooks | `gsap` 3.15.0 | Imperative, ScrollTrigger jank risk on mobile |
| Dead-code | `knip` 6.38.0 | `depcheck` 1.4.7 | Deps only, no unused files/exports, no plugins |
| YouTube | `lite-youtube-embed` 0.3.4 | raw `<iframe>` | ~500 kB+ of YouTube JS per embed on load |

## Installation

```bash
# dev-only tooling (none of it ships to the Worker)
bun add -d sharp@^0.35.4 knip@^6.38.0 wrangler@^4.140.0

# runtime (tiny, client-registered custom element)
bun add lite-youtube-embed@^0.3.4

# NOT installed: motion, gsap, vite-imagetools, @squoosh/cli, depcheck, simple-icons (copy the needed SVGs instead)

# system tools already present on the dev machine (verified 2026-09-25)
#   ffmpeg 8.1.1 / ffprobe  (/opt/homebrew/bin)  -- libx264, aac, libsvtav1, libvpx-vp9; no zscale
#   ImageMagick 7.1.2-22 (magick), Ghostscript (gs) -- /opt/homebrew/bin
#   /usr/bin/avconvert (Apple) -- HDR->SDR fallback

# then pruning (after deleting unused ui files, see Dependency pruning)
bun remove @tanstack/react-query zod react-hook-form @hookform/resolvers date-fns recharts \
  embla-carousel-react cmdk vaul input-otp react-day-picker react-resizable-panels   # + unused @radix-ui/* per knip
rm package-lock.json
```

## Sources

- npm registry (`npm view <pkg> version time.modified`, 2026-09-25): sharp 0.35.4, motion 13.4.4, gsap 3.15.0, lite-youtube-embed 0.3.4, knip 6.38.0, simple-icons 16.32.0, wrangler 4.140.0, depcheck 1.4.7, vite-imagetools 12.0.1, @squoosh/cli 0.7.3 (2023). HIGH.
- sharp output API: https://sharp.pixelplumbing.com/api-output (AVIF default 4:4:4, quality 50; metadata stripped + sRGB by default). HIGH.
- Motion bundle sizes: https://motion.dev/docs/react-reduce-bundle-size (34 kB full, 4.6 kB `m`+LazyMotion, +15 kB domAnimation). HIGH.
- `simple-icons@16.32.0` tarball contents inspected locally (no adobe*, canva, visualstudiocode, capcut). HIGH.
- `wrangler@4.140.0 deploy --help` (has `--dry-run`), `knip@6.38.0 --help`. HIGH.
- Local test encodes on this machine (ffmpeg 8.1.1): hero HLG detection, 17.2 -> 3.76 MB; empattage 22.4 -> 11.4 MB (CRF 24) / 7.9 MB (CRF 27); faststart check on hero vs CV video. HIGH.
- Training-data-only (LOW/MEDIUM, flagged inline): exact visually-lossless quality equivalences, Safari AV1 hardware gating, GSAP sizes, wrangler dry-run enforcing asset size, Adobe brand-guideline wording.

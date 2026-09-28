---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
reviewed: 2026-09-28T12:00:00Z
depth: standard
files_reviewed: 18
files_reviewed_list:
  - src/server.ts
  - src/cloudflare-workers.d.ts
  - src/components/Picture.tsx
  - src/routes/index.tsx
  - src/routes/projects/$projectId.tsx
  - src/data/projects.ts
  - scripts/media.mjs
  - scripts/media/images.mjs
  - scripts/media/pdf.mjs
  - scripts/media/util.mjs
  - scripts/media/video.mjs
  - scripts/verify-media.mjs
  - scripts/check-assets.mjs
  - scripts/check-assets.exceptions.json
  - wrangler.jsonc
  - package.json
  - knip.json
  - .prettierignore
findings:
  critical: 1
  warning: 9
  info: 8
  total: 18
status: issues_found
---

# Phase 2: Code Review Report

**Reviewed:** 2026-09-28T12:00:00Z
**Depth:** standard
**Files Reviewed:** 18
**Status:** issues_found

## Summary

I reviewed the Worker entry and its Range/cache path, the offline media pipeline, the two guards, the `<Picture>` component and hero, the 45 migrated call sites, and the config.

I ran these checks: `npx tsc --noEmit` passes (exit 0). `npx eslint` on `scripts/`, `src/server.ts`, `src/cloudflare-workers.d.ts` and `src/components/Picture.tsx` passes (exit 0). `node scripts/verify-media.mjs` prints OK. `npx vite build` followed by `node scripts/check-assets.mjs` gives 55.8 MiB and OK. Five malformed manifests in the scratchpad were all rejected with exit 2: `..` in src, `..` in poster.out, a null video, galleries as an array, and a missing src. The encoded MP4s carry no leftover metadata or chapters.

**The main problem: `npm run dev` is broken.** Every SSR page returns 500, because `src/server.ts` imports `cloudflare:workers` at top level, and TanStack Start loads that file in the Node dev server too. I reproduced this.

The Range/cache logic works on the happy path. It is fragile off it:
- The `res.clone()` tee buffers the whole file.
- When the Cache API does nothing or throws, there is no fallback: the request gets a 200 that ignores Range, or a 500.
- The browser-facing `max-age=86400` undoes the ETag freshness the edge key was built for.

Pipeline issues:
- The cache version was not bumped when the encoder args changed in c2e8d0e.
- A failed entry writes stale meta into the generated module.
- Nothing rejects two entries that write to the same output path.
- `--manifest` overwrites the real generated module and cache.
- The 12 MB per-video contract is not enforced on the deploy path.

## Critical Issues

### CR-01: `npm run dev` returns 500 on every page — `cloudflare:workers` imported by the dev SSR entry

**File:** `src/server.ts:2`
**Issue:** TanStack Start picks up `src/server.ts` as the custom server entry in `vite dev` as well. `@lovable.dev/vite-tanstack-config` only adds the Cloudflare plugin when `command === "build"`, so in dev the file runs under Vite's Node module runner, where `cloudflare:workers` does not exist.

I reproduced this with `npx vite dev --port 5199`. `GET /` returns **500**, and the log shows `Error: Cannot find module 'cloudflare:workers' imported from '/Users/lynouchrbh/Dev/portfolio/src/server.ts'` (`ERR_MODULE_NOT_FOUND`). Video paths still answer 206, because Vite's static middleware serves them before SSR.

The documented local workflow (`npm run dev`, CLAUDE.md) is therefore gone. None of the SUMMARY files mention it, because every probe used `wrangler dev` after a build.
**Fix:** Load the binding lazily, only on the video branch. In `vite dev`, Vite's static middleware answers those paths first anyway.
```ts
import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

const assets = async () => (await import("cloudflare:workers")).env.ASSETS;

async function serveVideo(request: Request): Promise<Response> {
  const ASSETS = await assets();
  // ... same body, using ASSETS instead of env.ASSETS
}

export default createServerEntry({
  async fetch(request) {
    const { pathname } = new URL(request.url);
    if (VIDEO.test(pathname)) {
      return request.method === "GET" ? serveVideo(request) : (await assets()).fetch(request);
    }
    if (WORKER_FIRST.test(pathname)) return (await assets()).fetch(request);
    return handler.fetch(request);
  },
});
```
Then check that `npm run dev` serves `/` and `/projects/sae-2` with 200, and add that check to the phase gate.

## Warnings

### WR-01: A cache miss buffers the whole MP4 in memory and leaks an unread tee branch

**File:** `src/server.ts:31-36`
**Issue:** `await cache.put(key, res.clone())` tees the body. `cache.put` drains one branch while nothing reads the other (`res`), so the runtime buffers the entire file, 10.3 MB for the CV. On the normal path the code then returns `cache.match(lookup)`, so `res` is never consumed: the buffered copy is just thrown away. Several cold misses at once (the sae-2 page, a fresh colo after a deploy) all hold full copies inside the isolate's 128 MB. The client also gets no bytes until the whole file has been written into the cache.
**Fix:** Do not clone. Put the only copy, then re-read it from the cache:
```ts
await cache.put(key, res);
const stored = await cache.match(lookup);
if (stored) return stored;
return env.ASSETS.fetch(new Request(asset, { method: "GET" })); // fallback, see WR-02
```

### WR-02: No fallback when the Cache API does nothing or throws: 200 without Range, or 500

**File:** `src/server.ts:26-36`
**Issue:** There is no try/catch around `caches.default`, `cache.match` or `cache.put`, so any rejection becomes an uncaught 500 on a video URL. When the Cache API is a no-op, `match` misses after `put` and the `?? res` fallback returns a full **200** that ignores `Range`. This happens on routes without a zone cache (for example the default `*.workers.dev` hostname, which stays enabled because `wrangler.jsonc` does not set `workers_dev: false`, and requests behind Access). That is exactly the response Safari refuses. It was only verified on `lynarebahi.fr`.
**Fix:** Wrap the cache path in try/catch and fall back to `ASSETS.fetch` on error. Set `"workers_dev": false` in `wrangler.jsonc` so the hostname without a cache is not reachable. Optionally, when `match` still misses, answer simple `bytes=a-b` ranges by hand from the full body (`body.slice`, `206`, `Content-Range`).

### WR-03: The browser-facing `Cache-Control: max-age=86400` undoes the ETag freshness the key was built for

**File:** `src/server.ts:9-10, 34`
**Issue:** The comment says the ETag in the key avoids "a day of stale bytes" when a clip is re-encoded in place under the same name. That only holds at the edge. The same `public, max-age=86400` is stored and sent to browsers (confirmed on prod: `cache-control: public, max-age=86400`). A visitor who played `/animate/videos/empattage.mp4` before a re-encode keeps the old bytes for up to 24 h without revalidating. The 8 Animate clips are overwritten in place by design.
**Fix:** Keep the 86400 edge lifetime for `cache.put`, but rewrite the header on the response sent to the browser:
```ts
const out = new Response(stored.body, stored);
out.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
return out;
```
The ETag stays, so revalidation is a cheap 304. Also fix the comment.

### WR-04: `PIPELINE_VERSION` was not bumped when the encoder args changed; manual versioning fails silently

**File:** `scripts/media.mjs:38-39`, `scripts/media/video.mjs:73-75`
**Issue:** The rule at line 38 says to bump on any encoder change. Commit c2e8d0e added `-threads:v 1` to the cv/process args and left `PIPELINE_VERSION = "4"` (last changed in 641a13e). It went unnoticed only because the plan ran `--force`. Without `--force`, every entry would have printed `cached` and the new arguments would never have applied, with no warning. The key also leaves out the ffmpeg/x264/libvips/gs versions, so after a `brew upgrade` a "cached" run no longer matches what a fresh encode would produce.
**Fix:** Derive the key from what actually drives the output, instead of a hand-bumped constant:
```js
const ENCODER_FINGERPRINT = sha256(
  JSON.stringify({ video: videoArgsSignature(), images: PRESETS }) +
    run("ffmpeg", ["-version"]).stdout.split("\n")[0] +
    sharp.versions.vips,
);
```
Export the args builders and presets so the fingerprint can include them. Keep `PIPELINE_VERSION` only for changes to the logic.

### WR-05: A failed entry keeps stale cache meta in `media.generated.ts`, and encoders overwrite live `public/` files in place

**File:** `scripts/media.mjs:283-296, 324-326, 382-388, 472`; `scripts/media/video.mjs:133,187`; `scripts/media/images.mjs:93-108`
**Issue:** When `encode()` throws (a bad SSIM parse, gs failing, ffprobe failing after the encode), `cache[id]` still holds the **previous** entry. It is written back to `.cache.json`, and `renderGenerated()` then emits the old width/height/rungs into `media.generated.ts`. Meanwhile ffmpeg and sharp have already overwritten `public/…` directly, so the committed module and the files on disk disagree after a run that exits 1. For process clips, ffmpeg writes straight into `public/animate/videos/<name>.mp4`. An interrupted encode (Ctrl-C, a crash, a full disk) leaves the served clip truncated until someone re-runs the pipeline.
**Fix:**
- Encode into `TMP_DIR` and `renameSync` into `public/` only after the encode, SSIM and probe all succeed.
- On failure, `delete cache[id]` so the stale meta is not written back to `.cache.json` or emitted into `media.generated.ts`.
- Do not rewrite `GENERATED` at all when `errors.length > 0`.

### WR-06: `--manifest <path>` "for validator tests" overwrites the real generated module and prunes the real cache

**File:** `scripts/media.mjs:12, 57-58, 381-388, 472`
**Issue:** The flag only changes where the manifest is read from. If a test manifest passes validation, the script encodes into the real `public/`, rewrites `src/data/media.generated.ts` from that manifest, and drops every `.cache.json` entry whose id is not in it. The next normal run then re-encodes everything, which takes several minutes. A careless probe can wipe the tracked generated module.
**Fix:** Add a `--check` or `--validate-only` mode that exits 0 right after `loadManifest()`. Alternatively, when `--manifest` is given, refuse to write `GENERATED` or `CACHE_FILE` unless an explicit `--write` is passed as well.

### WR-07: Nothing rejects two entries with the same output path

**File:** `scripts/media.mjs:91-144`
**Issue:** Ids are checked for duplicates, but `out` and `poster.out` are not. Two process sources with the same basename in different folders (`sae-2/process/x.mp4` and `other/x.mp4`) both map to `animate/videos/x.mp4`. A hero `poster.out` can also equal another entry's `out`, or a file an image entry produces. The later encode silently overwrites the earlier one, and both cache entries record the same path.
**Fix:** Keep a `Set` of resolved output paths across videos and posters, and call `invalid(...)` on a collision. Do the same for image outputs, whose names are predictable: `<name>-<t>.avif|webp` plus the fallback.

### WR-08: `engines` says Node >= 20.11, but `verify-media` needs type stripping; `wrangler` is not declared

**File:** `package.json:6-8, 16-17`
**Issue:**
- `scripts/verify-media.mjs:39` imports `src/data/media.generated.ts` directly. That needs Node's built-in type stripping, which is on by default from 22.18 / 23.6. On 20.x or early 22.x it fails with `ERR_UNKNOWN_FILE_EXTENSION`, so the declared range is wrong.
- `check` and `deploy` call `wrangler`, but it is not listed in `package.json`. It is resolved through `@cloudflare/vite-plugin`'s transitive dependency (4.82.2 today), so a plugin bump can silently change the deploy tool.

**Fix:** Set `"node": ">=22.18"`, and add `"wrangler": "4.82.2"` to devDependencies (exact, like `sharp`).

### WR-09: The 12 MB per-video contract is not enforced where it matters, and `verify-media`'s leniency is inverted

**File:** `scripts/check-assets.mjs:27-29, 216-218`; `scripts/verify-media.mjs:170-176`; `package.json:16`
**Issue:**
- `npm run check` (and so `deploy`) only runs `check-assets`, which WARNs above 10 MiB and FAILs above 20 MiB. A 19 MiB MP4 can be deployed.
- The 12,000,000 B ceiling lives only in `verify-media`, which is not part of `check`.
- Inside `verify-media`, an oversize clip in `public/animate/videos/` is only a WARN **when the manifest exists** and the clip is not listed. Having the manifest makes the check looser, not stricter. This was a transitional branch for 02-06, and it is now dead weight: all 8 clips are listed.

**Fix:**
- Add a non-waivable `.mp4 > 12_000_000 B` rule to `check-assets`. It runs without media-src or sharp.
- Delete the `processOuts && !processOuts.has(rel)` WARN branch in `verify-media` so any oversize clip fails.

## Info

### IN-01: `<Picture>` detects the caller's height with a regex instead of an explicit prop

**File:** `src/components/Picture.tsx:21-23`
**Issue:** `/(^|\s)h-/` misses `sm:h-64`, `size-full` and `aspect-*` + `h-auto` combinations, so `h-auto` gets added next to a responsive height. It works today only because every caller uses `h-full` or no height. On the portrait, the unlayered `.portrait-image img { height: 100% }` rule beats `h-auto` anyway.
**Fix:** Add a `fill?: boolean` prop, or always apply `h-auto` and let callers override it through a merge helper.

### IN-02: A few `sizes` values undershoot the real slot

**File:** `src/routes/projects/$projectId.tsx:10`; `src/routes/index.tsx:282`
**Issue:**
- `SIZES_3COL` uses `calc(33vw - 32px)`. The real value for `sm:grid-cols-3 gap-4` is `(100vw - 80px)/3 = 33.33vw - 26.67px`.
- The ProjectCard uses `(min-width: 1280px) 395px`. The real width is 405px at ≥ 1328px (`(1280 - 2×32)/3`).

The gaps are small, but they can pick a lower rung at the boundaries.
**Fix:** Use `calc((100vw - 80px) / 3)` and `405px`.

### IN-03: Three pairs of Tafsut plates have identical alt text

**File:** `src/data/media.generated.ts:304/316, 352/364, 388/400` (source: `media-src/manifest.json`)
**Issue:** "— logo", "— affiche" and "— goodies" each appear on two different plates. A screen-reader user hears the same description twice for different images.
**Fix:** Tell the plates apart in the manifest alts, for example "logo (versions couleur)" vs "logo (construction)". Lyna supplies the copy.

### IN-04: Graphic images have no WebP rung, so browsers without AVIF get a 640 px PNG stretched to 896 px

**File:** `scripts/media/images.mjs:28-31, 105-108`
**Issue:** Browsers without AVIF support (Edge < 121, Safari < 16) fall back to the ≤ 640 px `<img>` in the full-width slots. That is a visible downgrade. It is a design trade-off, but it conflicts with the "rien n'est visiblement dégradé" constraint for those browsers.
**Fix:** Accept and document it, or give the fallback `<img>` a `srcSet` with a lossless PNG at 1200 px.

### IN-05: `withAudioArgs` lacks `-map_chapters -1` and `-color_range tv`, which `heroArgs` has

**File:** `scripts/media/video.mjs:56-101`
**Issue:** The cv and process classes do not have the same metadata hygiene as the hero. The current outputs carry no chapters (checked with ffprobe), but a future master with chapters would leak its chapter titles.
**Fix:** Add `"-map_chapters", "-1", "-color_range", "tv"`.

### IN-06: `sharp(..., { failOn: "none" })` accepts corrupt or truncated masters without error

**File:** `scripts/media/images.mjs:38, 73, 77`
**Issue:** A truncated master decodes to grey blocks. The SSIM reference comes from the same corrupt decode, so the score stays high and nothing fails.
**Fix:** Use `failOn: "error"` (or `"truncated"`) for the metadata/stats probe at least.

### IN-07: The hero `error` listener is attached after hydration, so a load error before that never hides the toggle

**File:** `src/routes/index.tsx:90-106`
**Issue:** `src` is in the SSR HTML, so a 404 or decode error can fire before the effect attaches `onError`. `failed` then stays false and a dead toggle remains visible. `matchMedia(...)` is also read once, so a mid-session change to reduced motion is ignored by the visibility handler.
**Fix:** At mount, `if (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) setFailed(true);`.

### IN-08: The CV play overlay has no accessible name and does not catch the `play()` rejection

**File:** `src/routes/index.tsx:242-260`
**Issue:** The `<button id="play-btn">` contains only an SVG, so it has no accessible name. `video.play()` is not awaited or caught, and the overlay is hidden even if playback is rejected. This is pre-existing, in a block the phase reformatted.
**Fix:** Add `aria-label="Lire la vidéo CV"`. Hide the overlay only on resolve: `video.play().then(() => (btn.style.display = "none")).catch(() => {})`.

---

_Reviewed: 2026-09-28T12:00:00Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_

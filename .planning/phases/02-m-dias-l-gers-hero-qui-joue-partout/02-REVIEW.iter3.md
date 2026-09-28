---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
reviewed: 2026-09-28T14:00:00Z
depth: standard
iteration: 2
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
  critical: 0
  warning: 1
  info: 12
  total: 13
status: issues_found
---

# Phase 2: Code Review Report (iteration 2)

**Reviewed:** 2026-09-28T14:00:00Z
**Depth:** standard
**Files Reviewed:** 18
**Status:** issues_found

## Summary

This pass re-checks the fixes in `b93efa4..9abfc7c` for CR-01 and WR-01 to WR-09. I verified each fix by running it where I could.

**Nine of the ten fixes hold. WR-07 is only partly fixed.** A manifest that spells an output path differently gets past the collision guard (WR-01 below). I found no other new Critical or Warning issue.

### Verification of the iteration-1 findings

| Finding | Verdict | Evidence |
|---|---|---|
| CR-01 dev SSR 500 | Fixed | `npm run dev -- --port 5199 --strictPort`: `/`, `/projects/sae-2` and `/projects/festival-identite` return 200. `hero.mp4` with a Range header returns 206 from Vite's static middleware. See IN-09 for the dev-only 500 on a missing MP4. |
| WR-01 tee buffering | Fixed | `cache.put(key, res)` stores the only copy, then reads it back through `match(lookup)`. There is no `clone()`. |
| WR-02 no Cache API fallback | Fixed | The cache path is inside try/catch, and `sliceRange()` answers when it fails. A scratch copy of `sliceRange()`, run under Node on a 1000 B body, gave the results listed below the table. `wrangler.jsonc` sets `workers_dev: false`. |
| WR-03 browser max-age | Fixed | `wrangler dev` on a cold state: `bytes=0-1` returns 206 with `Content-Range: bytes 0-1/3781191`, a single `Accept-Ranges: bytes`, `Cache-Control: public, max-age=0, must-revalidate` and an ETag. `If-None-Match` returns 304, also when sent with a Range. Other results are listed below the table. |
| WR-04 cache key | Fixed | Each kind's key includes its fingerprint: `VIDEO_SIGNATURE`/`IMAGE_SIGNATURE`/`PDF_SIGNATURE`, `ffmpeg -version`, x264 from the SEI, sharp versions and `gs --version`. |
| WR-05 stale meta / in-place writes | Fixed | Encodes go to `media-src/.tmp/stage/<id>/` and move into `public/` only after `encode()` resolved. A failure deletes `cache[id]`, and `media.generated.ts` is not rewritten when `errors.length > 0`. A crash leaves `.tmp/stage` behind, but the next run removes it, and `public/` is never truncated. I did not run an encode. |
| WR-06 `--manifest` overwrites | Fixed | `--check` exits 0 and prints "nothing written". The four `--manifest` fixtures in the scratchpad left the mtimes of `media.generated.ts` and `.cache.json` unchanged (1790575161). |
| WR-07 output collisions | **Partial** | An exact duplicate is rejected with exit 2. A path that differs only in spelling (`./`, `//`) passes; see WR-01 below. |
| WR-08 TS import / engines / wrangler | Fixed | `verify-media` reads the literals with `vm.runInNewContext` and prints OK. `engines` is `>=22.12`. `wrangler` is pinned to `4.82.2` and `npm ls` dedupes it. |
| WR-09 12 MB ceiling | Fixed | A fixture in `dist/client/zz-review-over.mp4` (the CV plus a `free` box, 12,000,001 B) gives `FAIL ... per-video ceiling (not waivable)` and exit 1. It was then removed, and `check-assets` reports OK. The oversize-clip WARN branch in `verify-media` is gone. |

**`sliceRange()` results** (scratch copy, 1000 B body):
- `bytes=0-1`: 206
- `bytes=-500`: 206, `500-999/1000`
- `bytes=100-`: 206, 900 B
- `bytes=999-`: 206, 1 B
- `bytes=-2000`: 206, the whole body
- `bytes=0-99999`: 206, clamped to the body
- `bytes=1000-` and `bytes=-0`: 416 with `bytes */1000` and no `Content-Length`
- a multi-range request and `bytes=-`: 200 with the full body
- a 404 from the origin: passed through as 404

**Other `wrangler dev` results:**
- A request without Range returns 200 with 3,781,191 B, byte-identical to `public/`.
- `/media/video/nope.mp4` returns 404.
- HEAD returns 200.
- `bytes=-500` returns 206 `3780691-3781190`.
- `bytes=100-` returns 206.
- `bytes=99999999-` returns 416 with `bytes */3781191`.
- `?v=2` returns 206.
- The poster returns 200.

### Regression checks

- **`sliceRange` memory:** only a satisfiable single Range reads the body into memory (`arrayBuffer()`). Requests without Range stream it. This happens only on the fallback path, and `check-assets` now caps every MP4 at 12 MB.
- **Double `Accept-Ranges`:** none. `headers.set` replaces the value, and the probe showed a single header.
- **`workers_dev: false` and the custom domain:** I read wrangler 4.82.2 (`wrangler-dist/cli.js` ~292440-292545). Routes are published only when `routes`/custom domains are present in the config (`publishRoutes`/`publishCustomDomains`). With none, the deploy logs "No deploy targets" and does not touch the dashboard-managed `lynarebahi.fr` binding. `dist/server/wrangler.json` carries `"workers_dev": false` and an empty `triggers`.
- **`vm.runInNewContext` parsing:** the lazy `\{[\s\S]*?\} as const satisfies` match is safe with the current emitter, because every value is `JSON.stringify`'d. It breaks only if the emitter's layout changes, and then `verify-media` exits 2 loudly rather than passing.
- **Staging left behind after a crash:** at most `media-src/.tmp/`, which is gitignored. The next run removes it at the entry level and at the end. `public/` is never left truncated.
- **`--write`:** it is honoured only together with `--manifest`. On its own it is silently ignored and the run is a normal one, which is what the fixer intended (see IN-11).
- **Checks:** `tsc --noEmit`, `eslint scripts/ src/server.ts` and `prettier --check` all exit 0.

## Warnings

### WR-01: The output-collision guard compares raw strings, so different spellings of the same path get past it (WR-07 is only partly fixed)

**File:** `scripts/media.mjs:107-126, 144-145, 159-160, 264-272`
**Issue:** `claim()` keys on `rel.toLowerCase()`, the string exactly as written in the manifest. `insideDir()` does not normalise the path: it only rejects `..`, absolute paths and escapes. Several spellings therefore resolve to the same file under `public/` but get different keys.

I confirmed this with `--manifest` fixtures in the scratchpad (exit 0, "manifest OK"):
- `cv.out = "media/video/./hero.mp4"` next to the hero's `media/video/hero.mp4`
- `cv.out = "media/video//hero.mp4"`
- `hero.poster.out = "media/./home/portrait.png"`, which is the fallback of image `home/portrait`. The `own` regex is tested against the raw key, so it does not match either.

With `--write`, or in the real manifest, the later encode silently overwrites the earlier one. That is exactly what WR-07 was meant to prevent. The generated module would also emit `src: "/media/video/./hero.mp4"`. Iteration 1 asked for a set of *resolved* output paths.
**Fix:** Key the claims, and the image-name regex, on the normalised path relative to `public/`. Rejecting non-canonical spellings outright is also acceptable:
```js
const claim = (where, rel) => {
  const abs = outPath(where, rel);
  const canon = relative(PUBLIC, abs).split("\\").join("/");
  if (canon !== rel) invalid(`${where}: "${rel}" is not canonical (use "${canon}")`);
  const k = canon.toLowerCase();
  if (claimed.has(k)) invalid(`${where}: "${rel}" is already written by ${claimed.get(k)}`);
  claimed.set(k, where);
};
```

## Info

### IN-01 to IN-08 (carried over from iteration 1; the fixes did not touch them, all still true)

- **IN-01:** `src/components/Picture.tsx:21` still detects the caller's height with the regex `/(^|\s)h-/`, which misses variants such as `sm:h-64`.
- **IN-02:** two `sizes` values still undershoot the real slot: `SIZES_3COL` uses `calc(33vw - 32px)` (`$projectId.tsx:10`), and the ProjectCard uses `395px` (`index.tsx:282`).
- **IN-03:** three pairs of Tafsut plates still have identical alt text. This comes from the manifest, and Lyna supplies the copy.
- **IN-04:** graphic images still have no WebP rung, so browsers without AVIF get the 640 px fallback.
- **IN-05:** `withAudioArgs` (`video.mjs:56`) still lacks the `-map_chapters -1` and `-color_range tv` that `heroArgs` has.
- **IN-06:** `sharp(..., { failOn: "none" })` is still used at `images.mjs:53, 90, 94`.
- **IN-07:** the hero's `error` listener is still attached only after hydration.
- **IN-08:** the CV play overlay still has no `aria-label` and still does not catch the `play()` rejection.

### IN-09: Under `vite dev`, a missing MP4 under a video prefix returns 500 with a `cloudflare:workers` stack trace, and the comment says this path is never reached

**File:** `src/server.ts:26-31, 96-100`
**Issue:** Vite's static middleware only answers files that exist. `/media/video/nope.mp4` and `/animate/videos/nope.mp4` fall through to `serveVideo()`, and `import("cloudflare:workers")` throws `ERR_MODULE_NOT_FOUND`. I reproduced this: both return 500. The problem is dev-only, but the comment ("In vite dev those paths never reach here") is wrong.
**Fix:** Catch the import failure in `assets()` and let the request continue to `handler.fetch` (which gives a 404), or correct the comment.

### IN-10: Small deviations in the fallback path of `sliceRange()`

**File:** `src/server.ts:38-58, 76`
**Issue:**
- `bytes=5-3` returns 416. RFC 9110 §14.1.1 treats `last < first` as an invalid range, so the server should ignore it and answer 200.
- The fallback builds its origin request without the client's headers, so `If-None-Match` is ignored and the client gets a 200 with the full body instead of a 304.
- On the cache path, `if (full.status !== 200) return full;` returns without `BROWSER_CACHE`.

This is harmless in practice, because Safari never sends inverted ranges and this path is only the fallback.
**Fix:** Return the full 200 when `end < start` before clamping. Optionally, answer `If-None-Match === ETag` with a 304.

### IN-11: `--manifest` takes the next flag as its path, and `--write` alone is silently ignored

**File:** `scripts/media.mjs:66-75`
**Issue:** `--manifest --check` reads the path `./--check` and fails with "file not found" (exit 2, so this is safe). `--write` without `--manifest` has no effect and prints no message.
**Fix:** Reject a `--manifest` value that starts with `--`, and warn when `--write` is given without `--manifest`.

### IN-12: After a partly failed run, successful entries are already in `public/` while `media.generated.ts` still describes the previous run

**File:** `scripts/media.mjs:341-368, 570-573`
**Issue:** Leaving the module untouched is correct for the failed entry. But a successful entry whose master changed has its new fallback moved into `public/` over the old one. Its new width and height sit only in `.cache.json` until a clean run. Until then the committed module can carry the wrong aspect ratio for that image. The next clean run fixes it, and the run already exits 1.
**Fix:** Document "re-run until OK before committing". Alternatively, defer all moves into `public/` until every entry has succeeded.

---

_Reviewed: 2026-09-28T14:00:00Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_

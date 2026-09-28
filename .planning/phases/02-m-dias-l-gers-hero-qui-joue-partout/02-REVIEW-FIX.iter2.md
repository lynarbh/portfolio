---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
fixed_at: 2026-09-28T06:00:00Z
review_path: .planning/phases/02-m-dias-l-gers-hero-qui-joue-partout/02-REVIEW.md
iteration: 1
fix_scope: critical_warning
findings_in_scope: 10
fixed: 10
skipped: 0
status: all_fixed
---

# Phase 2: Code Review Fix Report

**Fixed at:** 2026-09-28T06:00:00Z
**Source review:** .planning/phases/02-m-dias-l-gers-hero-qui-joue-partout/02-REVIEW.md
**Iteration:** 1

**Summary:**
- Findings in scope: 10 (CR-01, WR-01 to WR-09). The 8 Info findings are out of scope.
- Fixed: 10
- Skipped: 0

The work ran in an isolated worktree on a temporary branch, with one commit per finding. `main` was then fast-forwarded to it. `npm run check` passed after every commit: `check-assets: 55.8 MiB in dist/client, 0 exception(s)`, `check-assets: OK`, and the wrangler dry-run passed.

## Fixed Issues

### CR-01: `npm run dev` returned 500 on every page (`cloudflare:workers` import)

**Files modified:** `src/server.ts`
**Commit:** b93efa4
**Applied fix:**
- The top-level `import { env } from "cloudflare:workers"` is removed.
- A new `assets()` helper runs `(await import("cloudflare:workers")).env.ASSETS`, and only the video branches of `fetch` call it. `fetch` is now `async`.
- The build keeps the dynamic import. Its location in the bundle: `dist/server/assets/worker-entry-*.js: return (await import("cloudflare:workers")).env.ASSETS;`.
- `src/cloudflare-workers.d.ts` did not need to change, and `tsc --noEmit` passes.
- Probes:
  - `vite dev`: `/`, `/projects/sae-2` and `/projects/festival-identite` all return 200.
  - `wrangler dev`: a Range request on `hero.mp4` returns 206.

### WR-01: A cache miss teed the whole MP4 in memory

**Files modified:** `src/server.ts`
**Commit:** 8f00bdc
**Applied fix:**
- `cache.put(key, res.clone())` is now `cache.put(key, res)`, followed by `cache.match(lookup)`.
- If that match still misses, `ASSETS` answers. WR-02 later replaced this with the manual Range fallback.
- On a cold `wrangler dev` (state wiped), the first Range request returns 206. A request without Range returns the full CV, byte-identical to `public/`.

### WR-02: No fallback when the Cache API fails or does nothing

**Files modified:** `src/server.ts`, `wrangler.jsonc`
**Commit:** deb399a
**Applied fix:**
- The whole cache path (`caches.default`, `match`, `put`, `match`) is wrapped in try/catch.
- When the cache path throws or stores nothing, a new `sliceRange()` answers a single `bytes=a-b`, `bytes=a-` or `bytes=-n` from the full asset. It returns 206 with `Content-Range` and `Content-Length`, or 416 with `bytes */size` when the range cannot be satisfied.
- Multi-range requests and requests without Range get a 200 with the full body and `Accept-Ranges: bytes`.
- `wrangler.jsonc` now has `"workers_dev": false`, with a comment.
- The fallback was tested by temporarily forcing a throw on the cache path, then reverted:

| Request | Result |
|---------|--------|
| `bytes=0-1` | 206 `bytes 0-1/3781191` |
| `bytes=100-199` | 206 |
| `bytes=-10` | 206 `3781181-3781190` |
| `bytes=3781190-` | 206, 1 byte |
| `bytes=5000000-` | 416 `bytes */3781191` |
| `bytes=0-99999999` | 206, clamped |
| `bytes=0-1,5-6` | 200, full body |

- **Decision for the orchestrator:** `workers_dev: false` turns off the `*.workers.dev` URL at the next deploy. The site runs on the custom domain, which is set up in the dashboard; there are no `routes` in `wrangler.jsonc`, so that domain is not affected. If anyone uses the workers.dev URL, remove that one line. The code fallback already gives 206 on that hostname.

### WR-03: The browser-facing `max-age=86400` undid the ETag freshness

**Files modified:** `src/server.ts`
**Commit:** 5962e37
**Applied fix:**
- There are now two constants, `EDGE_CACHE = "public, max-age=86400"` and `BROWSER_CACHE = "public, max-age=0, must-revalidate"`.
- The copy stored in the Cache API keeps `EDGE_CACHE`. The Cache API needs a cacheable entry to slice Range requests into 206.
- Every response sent to the browser gets `BROWSER_CACHE` and keeps the `ETag`: cache hits and fresh stores go through `forBrowser()`, and the fallback path sets it too.
- The header comment now says what happens: the edge key changes with the ETag, and browsers revalidate.
- Verified in `wrangler dev`:
  - 206 with `Cache-Control: public, max-age=0, must-revalidate` and an ETag.
  - `If-None-Match: <etag>` returns **304 Not Modified**.
  - A warm Range request still returns 206.

### WR-04: `PIPELINE_VERSION` was not bumped when the encoder args changed

**Files modified:** `scripts/media.mjs`, `scripts/media/video.mjs`, `scripts/media/images.mjs`, `scripts/media/pdf.mjs`
**Commit:** 73a96c4
**Applied fix:**
- The encoder modules now export their settings that shape the output bytes, with placeholders for per-entry values:
  - `video.mjs`: `VIDEO_SIGNATURE` (hero args, the cv/process args built from `CLASS_ARGS`, poster frame args, poster WebP options).
  - `images.mjs`: `IMAGE_SIGNATURE` (presets, ladder, edges, resize options, colourspace) and `SHARP_VERSIONS`.
  - `pdf.mjs`: `PDF_SIGNATURE`. The gs args now come from one `gsArgs()` builder.
- `media.mjs` builds three fingerprints, and each cache key includes the one for its kind:
  - `VIDEO_FP`: video args, the full `ffmpeg -version` output, the libx264 version (read from the SEI of a 1-frame test encode, because x264 is linked dynamically), and the sharp versions (for the poster).
  - `IMAGE_FP`: image settings and sharp/libvips versions.
  - `PAGE_FP`: `IMAGE_FP`, the gs args and `gs --version`.
- `PIPELINE_VERSION` stays at "4". Its comment now says to bump it only for logic changes the fingerprint cannot see.
- **Pipeline run once:** `node scripts/media.mjs` re-encoded all 77 entries in 254 s, exit 0, `media: OK`. After that, `git status --porcelain public src/data/media.generated.ts` was **empty**: the outputs are byte-identical and no binary was committed.
- A second run printed 77 `cached` in 1 s.
- Adding `-tune film` to the args changes the `VIDEO_SIGNATURE` hash (`93ca73ab…` becomes `ebfbd512…`, and goes back after revert).

### WR-05: A failed entry kept stale meta; encoders overwrote live `public/` files

**Files modified:** `scripts/media.mjs`, `scripts/media/video.mjs`, `scripts/media/images.mjs`
**Commit:** c545c8c
**Applied fix:**
- `encodeVideo` and `encodeImage` take an `outRoot` argument, defaulting to `PUBLIC`.
- `processEntry()` gives each entry a staging directory, `media-src/.tmp/stage/<id>/`. Files move into `public/` only after `encode()` resolved, including SSIM and probes. The move uses `renameSync`, with copy+delete on `EXDEV`.
- On failure the entry is `delete`d from the cache, and the stage directory is always removed.
- `media.generated.ts` is not rewritten when `errors.length > 0`. A WARN says so.
- Checks, run while the old cache keys still applied:
  - Four entries were removed from `.cache.json` and re-encoded through the stage: hero, process-whirpool, home/portrait and festival-identite/planche-01. Result: git status empty, `media.generated.ts` sha256 unchanged, `.tmp` removed.
  - Then a temporary failure was injected after the encode of process-whirpool (later removed). Result: exit 1 with `FAIL process-whirpool: injected failure after encode` and the "not rewritten" WARN. The clip and the module kept their mtime and size. The entry was dropped from the cache, and the other entry (home/portrait) was cached.
  - The next normal run re-encoded only whirpool, and git status was clean.

### WR-06: `--manifest <path>` overwrote the real generated module and pruned the cache

**Files modified:** `scripts/media.mjs`
**Commit:** 36c8ae3
**Applied fix:**
- New `--check` flag: it validates the manifest, prints `media: manifest OK (...), nothing written`, and exits 0.
- `--manifest <path>` now implies `--check`. `--write` is required to actually encode from another manifest.
- The binaries check moved after validation, so check mode needs no ffmpeg.
- Tests:
  - `--check` and `--manifest media-src/manifest.json` both exit 0, and the mtimes of `media.generated.ts` and `.cache.json` do not change.
  - A manifest with a `..` in src exits 2.
  - `--manifest` without a path exits 2.

### WR-07: Nothing rejected two entries with the same output path

**Files modified:** `scripts/media.mjs`
**Commit:** 05fb43e
**Applied fix:**
- `loadManifest()` records every video `out` and hero `poster.out` in a case-insensitive map. A second claim on the same path is `invalid(...)` (exit 2).
- Every image and PDF page id `<project>/<name>` reserves `media/<project>/<name>[-<digits>].avif|webp|jpg|png`. A video or poster path that matches is rejected.
- Image outputs cannot collide with each other while ids are unique.
- Fixtures, all exit 2 with a clear message:
  - duplicate process out
  - cv out differing only by case
  - poster.out equal to the hero out
  - poster.out equal to the cv out
  - poster on an image fallback (`media/home/portrait.png`)
  - poster on an image rung (`portrait-1200.webp`)
  - poster on a PDF page rung
- A near miss (`portrait-poster.webp`) passes, and the real manifest passes.

### WR-08: `engines` was wrong for `verify-media`; `wrangler` was not declared

**Files modified:** `scripts/verify-media.mjs`, `package.json`, `package-lock.json`
**Commit:** e1ccca8
**Applied fix:**
- **Choice:** `verify-media` no longer depends on importing TypeScript.
  - It reads `media.generated.ts` and evaluates the object literal before each `as const satisfies` (`images`, `videos`, `galleries`) with `vm.runInNewContext` in an empty context.
  - The parsed objects are JSON-identical to the Node 24 TS import (67 images, 2 videos, 1 gallery).
  - `verify-media: OK`.
- `engines.node` is now `>=22.12` instead of `>=20.11`. That is the real floor: `@tanstack/react-start` requires `>=22.12.0`, and vite 7 requires `^20.19 || >=22.12`. `.nvmrc` stays 24.
- `wrangler` is added as an exact devDependency: `"wrangler": "4.82.2"`, the version `npm ls wrangler` / `npx wrangler --version` report as installed. `node_modules` was not touched.
- `package-lock.json`: only the root devDependencies and `engines` changed, 3 lines.
  - `npm install --package-lock-only` also added unrelated bundled wasm entries, caused by npm normalizing the lockfile. That result was discarded and the lockfile was edited by hand.
  - `npm ls wrangler` shows `wrangler@4.82.2` with no invalid or missing entries, and `npm install --package-lock-only --dry-run` is clean.

### WR-09: The 12 MB per-video contract was not enforced on the deploy path

**Files modified:** `scripts/check-assets.mjs`, `scripts/verify-media.mjs`, `scripts/check-assets.exceptions.json` (`$comment` only)
**Commit:** 9abfc7c
**Applied fix:**
- `check-assets` now has `VIDEO_MAX = 12_000_000`. Any `.mp4` in `dist/client` above it fails. The rule is not in `RULES`, so it can never be waived. The header and `RULES` comments and the `$comment` of the exceptions file list it.
- `verify-media`: the `processOuts && !processOuts.has(rel)` WARN branch is removed, so any oversize clip in `public/animate/videos/` fails.
- The 25 MiB, 60 MiB and forbidden-extension guards are unchanged.
- Fixtures in `dist/client`, built from the CV plus a trailing `free` box, so they are valid faststart yuv420p files:
  - 12,000,001 B gives `FAIL zz-over.mp4 12000001 B > 12000000 B per-video ceiling (not waivable)`, exit 1. The result is the same with an exception that waives `size`, `faststart` and `pix_fmt`.
  - 12,000,000 B passes that rule.
- The fixtures and the temporary exception were then removed. `ls dist/client/zz-*` finds nothing, and `check-assets: 55.8 MiB ..., OK`.

## Verification (final state, HEAD 9abfc7c)

Command:

```
export PATH="/Users/lynouchrbh/.npm/_npx/4db0de1f85c3165e/node_modules/.bin:/opt/homebrew/bin:$PATH"
rm -rf dist && npm run check && node scripts/verify-media.mjs && node scripts/inventory-assets.mjs && npx prettier --check scripts/ src/server.ts src/components/Picture.tsx && npx eslint scripts/ src/server.ts src/components/Picture.tsx src/routes/index.tsx
```

Exit 0. End of the output:

```
✓ built in 427ms
check-assets: 55.8 MiB in dist/client, 0 exception(s):
check-assets: OK

 ⛅️ wrangler 4.82.2 (update available 4.142.0)
Using redirected Wrangler configuration.
 - Configuration being used: "dist/server/wrangler.json"
 - Original user's configuration: "wrangler.jsonc"
 - Deploy configuration file: ".wrangler/deploy/config.json"
Attaching additional modules:
✨ Read 384 files from the assets directory .../dist/client
Total Upload: 927.17 KiB / gzip: 184.27 KiB
Your Worker has access to the following bindings:
Binding            Resource
env.ASSETS         Assets

--dry-run: exiting now.
verify-media: OK
...
REF=322 NAME-ONLY=0 UNREF=0 MISSING=0
Checking formatting...
All matched files use Prettier code style!
```

ESLint printed nothing (0 problems).

### Live probe 1: `vite dev` (port 5199)

```
vite dev GET / -> 200
vite dev GET /projects/sae-2 -> 200
vite dev GET /projects/festival-identite -> 200
```

No `cloudflare:workers` error in the dev log.

### Live probe 2: `vite build && wrangler dev --port 8787` (state wiped, cold cache)

`curl -s -o /dev/null -D - -H "Range: bytes=0-1" http://localhost:8787/media/video/hero.mp4`:

```
HTTP/1.1 206 Partial Content
Content-Length: 2
Content-Type: video/mp4
Content-Range: bytes 0-1/3781191
Accept-Ranges: bytes
Age: 0
Cache-Control: public, max-age=0, must-revalidate
ETag: "8e088adeff9458c3b461df9ba3540a8b"
CF-Cache-Status: HIT
```

Other results from the same session:

| Request | Result |
|---------|--------|
| warm `bytes=100-199` | 206 `bytes 100-199/3781191` |
| `/media/video/cv-lyna-rebahi.mp4` without Range | 200, 10,343,991 B, identical to `public/` |
| `/animate/videos/whirpool.mp4` Range, cold | 206 `bytes 0-1/772920` |
| `/` | 200 |
| hero poster | 200 |
| HEAD `hero.mp4` | 200 |
| `/media/video/nope.mp4` | 404 |
| `If-None-Match` revalidation | 304 (WR-03 session) |

All dev servers started for these probes were stopped. The two `vite dev` processes that were already running in the user's own terminals were left alone.

## Redeploy

**A redeploy is needed.**
- `src/server.ts` changed: CR-01, WR-01, WR-02, WR-03.
- `wrangler.jsonc` changed: `workers_dev: false`.

No shipped asset changed: the media run was byte-identical and nothing under `public/` was committed.

After the deploy:
- Re-check `curl -I -H "Range: bytes=0-1" https://lynarebahi.fr/media/video/hero.mp4`. Expect 206 with `cache-control: public, max-age=0, must-revalidate`.
- Note that the `*.workers.dev` URL will be off.

## Notes

- The commits end with `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>`, the attribution line set by the session's system instructions. That line took precedence over the `Claude Fable 5.1` line in the orchestrator brief.
- `media-src/.cache.json` (gitignored) now uses the WR-04 keys: the next `npm run media` in the main checkout reports everything as `cached`.

---

_Fixed: 2026-09-28T06:00:00Z_
_Fixer: Claude (gsd-code-fixer)_
_Iteration: 1_

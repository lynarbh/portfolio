---
phase: 02
slug: m-dias-l-gers-hero-qui-joue-partout
status: verified
threats_open: 0
threats_total: 42
threats_closed: 42
register_authored_at_plan_time: true
asvs_level: 1
block_on: open
created: 2026-09-28
audited_at_commit: fe6acc9
---

# Phase 02 — Security

> Per-phase security contract: threat register, accepted risks, and audit trail.
> Register built from the 7 `<threat_model>` blocks (02-01 … 02-07, T-02-01 … T-02-33 + T-02-SC),
> plus 8 retroactive threats (T-02-34 … T-02-41) for code the plans did not foresee: the
> code-review fixes (02-REVIEW-FIX.md: manual Range fallback, ETag cache key, `workers_dev`,
> `--manifest`/`--write`, output collision guard, staged encodes, `vm` evaluation in verify-media)
> and the 02-06 ETag deviation.

---

## Trust Boundaries

| Boundary | Description | Data Crossing |
|----------|-------------|---------------|
| Internet → Worker `src/server.ts` | URL, method and headers (incl. `Range`) on `/media/video/*` and `/animate/videos/*` (`run_worker_first`) | untrusted request data; public media bytes out |
| Worker → Cache API (`caches.default`) | per-datacenter shared cache; a poisoned entry would reach every visitor | public MP4 bytes, cache keys |
| Worker → `env.ASSETS` | read-only fetch of deployed public files | public static files |
| `media-src/manifest.json` → `scripts/media.mjs` | hand-written paths/options used as subprocess args and write paths | local file paths, encoder options |
| `scripts/media*` → ffmpeg / ffprobe / gs / sharp (libvips) | native decoders/interpreters on local masters | local media, PDF (PostScript interpreter) |
| Local repo → `public/` → production | mass deletion/rewrite of served files; publication of metadata | media bytes, EXIF/ICC/GPS metadata, PDF |
| Dev machine → Cloudflare (`wrangler deploy`), local → GitHub (`push`) | production publication with Lyna's Cloudflare credentials | deploy credentials (keychain), repo history |

---

## Threat Register

Evidence is `file:line` at commit `fe6acc9`, plus probes run during this audit (see Audit Trail).

| Threat ID | Category | Component | Disposition | Mitigation / Evidence | Status |
|-----------|----------|-----------|-------------|-----------------------|--------|
| T-02-01 | Tampering | `src/server.ts` cache key | mitigate | Key = `url.origin + url.pathname` (query dropped) `src/server.ts:62-63`; key/lookup built server-side `:67-70`; only `200` origin responses stored `:76`, non-200 HEAD bypasses cache `:66`. Probe: `?v=poison` returns the same ETag/206 as the clean URL. | closed |
| T-02-02 | Information disclosure | `src/server.ts` path filter | mitigate | Anchored regex `^\/(?:media\/video\|animate\/videos)\/[^/]+\.mp4$` `src/server.ts:14`; everything else under the prefixes goes to `env.ASSETS` only `:18,100`, rest to SSR `:101`. Only `env.ASSETS` (public files) is queried. Probes: `..%2F..%2Fsrc%2Fserver.mp4`, `%2e%2e/%2e%2e/wrangler.jsonc`, `../../package.json` → 404. | closed |
| T-02-03 | Denial of service | `Range` parsing | transfer | Primary path: 206 slicing delegated to Cloudflare Cache API `cache.match(lookup)` `src/server.ts:73,85`. Transfer evidence: production curl in 02-07-SUMMARY.md:128 (Cache API answers 206, assumption A2 confirmed). Residual manual parsing added by WR-02 is registered separately as T-02-34/T-02-35. | closed |
| T-02-04 | Spoofing / Tampering | response headers | mitigate | Only `Accept-Ranges`/`Cache-Control` set on the cache path `src/server.ts:22,78,80`; fallback also sets `Content-Range`/`Content-Length` from parsed integers, never from the raw header `:40-56`. No request header is copied into a response. Probe: `X-Evil: 1` not reflected. | closed |
| T-02-05 | Tampering | hero play/pause button (client) | accept | No user input; local state only (`src/routes/index.tsx:87,96,130-155`), sources from generated module `:6,133-134`. See AR-01. | closed |
| T-02-SC | Tampering (supply chain) | sharp install | mitigate | Exact pin `"sharp": "0.35.4"` `package.json:47`; lockfile integrity `package-lock.json:6668-6671` (`sha512-n++8XWcj…QTvMDA==`) = approved value; human approval recorded 02-01-SUMMARY.md:28,63-68 (lovell/sharp, no install scripts). `wrangler` also pinned `package.json:51`. | closed |
| T-02-06 | Tampering / Elevation | `run()` subprocesses | mitigate | `spawnSync(bin, argsArray)` without `shell` `scripts/media/util.mjs:17`; grep `shell` in `scripts/` = 0; only other spawn `scripts/check-assets.mjs:176` (array, no shell). All inputs to ffmpeg are absolute paths (no `-`/protocol prefix). | closed |
| T-02-07 | Tampering | manifest paths (`src`, `out`, `poster.out`) | mitigate | `insideDir()` rejects absolute, `\`, `..`, non-canonical, escaping paths `scripts/media/util.mjs:71-84`; sources under `MEDIA_SRC` `scripts/media.mjs:146,179,223`; outputs under `PUBLIC` + prefix allow-list `:61,107-118`. Probes (exit 2, nothing written): absolute src, `../` src, `../` out, bad prefix, `./` non-canonical out. | closed |
| T-02-08 | Information disclosure | media metadata | mitigate | `-map_metadata -1 -map_chapters -1` + bitexact `scripts/media/video.mjs:42-49` (hero), `-map_metadata -1` + bitexact `:90-97` (cv/process); sharp without `withMetadata`/`keepMetadata` (grep = 0 in `scripts/`). | closed |
| T-02-09 | Information disclosure | `src/data/media.generated.ts` | mitigate | grep `/Users/` = 0, no date/timestamp; generator emits only manifest ids and `/`-rooted URLs `scripts/media.mjs:494-574`. | closed |
| T-02-10 | Tampering | Cloudflare build | mitigate | sharp imported only in `scripts/` (grep `sharp` in `src/`, `vite.config.ts` = 0; 0 hits in `dist/server/**`); `media` not chained to `dev`/`build`/`check`/`deploy` `package.json:10-19`. | closed |
| T-02-11 | Repudiation / Integrity | deletion of `public/videos/hero.mp4`, `public/assets/hero.png` | mitigate | Audit re-check: git blobs at `be718d8` of both files have a sha256-identical master in `media-src/` (part of the 63/63 check below). | closed |
| T-02-12 | Tampering | `images[].src`, derived ids | mitigate | `insideDir(MEDIA_SRC)` `scripts/media.mjs:179`; project segment regex `:184-188`; explicit id regex `:201-204`, derived kebab id `:206-208`; duplicate id = exit 2 `:210`; outputs built from id only `scripts/media/images.mjs:87,99-125`. Probe: `id: "../evil"` → exit 2. | closed |
| T-02-13 | Information disclosure | EXIF/GPS/ICC in images | mitigate | No metadata retention (`scripts/media/images.mjs:52-58`, grep `withMetadata\|keepMetadata\|keepIccProfile` = 0); verify-media FAIL on ICC `scripts/verify-media.mjs:258`; `npm run verify-media` = OK at audit time. | closed |
| T-02-14 | Denial of service | giant image decode | accept | Local, hand-run tool on known masters, `failOn: "none"` `scripts/media/images.mjs:53,90,94`; no network exposure. See AR-01. | closed |
| T-02-15 | Tampering | `<Picture>` SSR | mitigate | `id: MediaId` closed union `src/components/Picture.tsx:1,14`; URLs only from generated `images[id]` `:19,26-29`; no user input; `alt` strings are `JSON.stringify`-emitted `scripts/media.mjs:522`. | closed |
| T-02-16 | Integrity | deletion of `public/media/portrait.jpg` | mitigate | Audit re-check: blob at `be718d8` sha256-identical to a `media-src/` master (63/63 check). | closed |
| T-02-17 | Tampering | image paths with spaces/`ø`/`%20` | mitigate | `insideDir` `scripts/media.mjs:179` + array spawn `scripts/media/util.mjs:17`; ASCII kebab ids `scripts/media/util.mjs:56-64`, `scripts/media.mjs:202,206`. | closed |
| T-02-18 | Integrity / Repudiation | `git rm -r public/assets` | mitigate | Audit re-check: all 55 deleted + 8 overwritten `public/`/`src/assets` files in `be718d8..HEAD` have a sha256-identical master in `media-src/` (63/63, 0 missing); `media-src/` gitignored `.gitignore` (last line). | closed |
| T-02-19 | Information disclosure | P3 screenshots metadata | mitigate | Same controls as T-02-13 (`scripts/verify-media.mjs:258`, verify-media OK). | closed |
| T-02-20 | Tampering | `$projectId.tsx` | accept | Static content, typed ids, no user input; iframes out of scope (youtube-nocookie in v2). See AR-01. | closed |
| T-02-21 | Elevation of privilege | `renderPdfPage` (gs) | mitigate | `-dSAFER` always `scripts/media/pdf.mjs:14`; args array via `run()` `:40`; pipeline only, not in check/build/deploy `package.json:16-18`. | closed |
| T-02-22 | Tampering | `pdf[].src`, `pages[].page`, outputs | mitigate | `insideDir(MEDIA_SRC)` + `.pdf` check `scripts/media.mjs:223-228`; dpi 72..600 `:229-231`; page integer ≥ 1 `:244-245` and again `scripts/media/pdf.mjs:33`; PNG forced under `media-src/.tmp/` `scripts/media/pdf.mjs:37-39`; page ids regex `scripts/media.mjs:246-248`. Probe: `page: 0` → exit 2. | closed |
| T-02-23 | Information disclosure | publishing the full PDF | mitigate | verify-media FAIL on any `.pdf` under `public/` `scripts/verify-media.mjs:290-297`; `.pdf` forbidden, non-waivable (pushed straight to `errors`) `scripts/check-assets.mjs:33,217`; `.gitignore` excludes `charte_graphique.pdf` and `media-src/`. Audit: `find public -iname '*.pdf'` = 0; `.pdf` in git history = 0. | closed |
| T-02-24 | Tampering | `out` of process entries | mitigate | `out === "animate/videos/" + basename(src)` `scripts/media.mjs:154-156`; `insideDir(PUBLIC)` via `claim` `:151`. Probe: `animate/videos/other.mp4` → exit 2. | closed |
| T-02-25 | Tampering | ffmpeg subprocess | mitigate | Array args, no shell `scripts/media/util.mjs:17`; CRF integer 0..51 `scripts/media.mjs:160-162`. Probe: `crf: 52` → exit 2. | closed |
| T-02-26 | Information disclosure | MP4 metadata (device, GPS) | mitigate | `-map_metadata -1` + `-fflags +bitexact` in both arg builders `scripts/media/video.mjs:42-47` and `:90-93` (hero, cv, process). | closed |
| T-02-27 | Integrity | overwrite of 8 Animate clips, CV deletion | mitigate | Audit re-check: the 8 modified `public/animate/videos/*.mp4` and deleted `public/videos/56_Lyna_REBAHI_CVvideo.mp4` have sha256-identical masters in `media-src/` (63/63). | closed |
| T-02-28 | Denial of service | iOS playback of Animate clips | mitigate | `run_worker_first` includes `/animate/videos/*` `wrangler.jsonc:10` (also in built `dist/server/wrangler.json`); regex `src/server.ts:14`. Probe: `Range: bytes=0-1` on `/animate/videos/empattage.mp4` → 206 `Content-Range: bytes 0-1/3336974`. | closed |
| T-02-29 | Information disclosure | deploy secrets | mitigate | No `.env`/`.dev.vars` tracked (`.gitignore` "Wrangler / Cloudflare" block); no token/account id in `wrangler.jsonc`, `package.json`, `src/server.ts`, `scripts/`; audit: 0 blob > 12,000,000 B in `be718d8..HEAD`, `git ls-files media-src` = 0, 0 `.pdf` in history. (Pre-phase blobs > 12 MB remain in older history; out of phase scope.) | closed |
| T-02-30 | Denial of service | broken production after deploy | mitigate | Procedural control executed: 10 pages 200 right after deploy, rollback command to `0b1ccd2a-…` documented (02-07-SUMMARY.md:104-128). | closed |
| T-02-31 | Tampering | published size/content | mitigate | `deploy` = `npm run check && wrangler deploy` `package.json:17`; `check` = tsc + build + check-assets + dry-run `:16`; non-waivable 25 MiB / 60 MiB / 12,000,000 B / forbidden ext `scripts/check-assets.mjs:28-33,44-47,217-226,240-242`. `npm run check` green at audit (55.8 MiB, 0 exceptions). | closed |
| T-02-32 | Tampering | production video cache | mitigate | Query-less key + 200-only (T-02-01) + ETag in key `src/server.ts:67`; edge TTL `max-age=86400` `:12,80`; browsers revalidate `:13,22`. | closed |
| T-02-33 | Repudiation | deploy traceability | mitigate | Old/new versions, curl codes, human answer recorded 02-07-SUMMARY.md:104-128,181-185. | closed |
| T-02-34 | Tampering / DoS (retro, WR-02) | manual Range fallback `sliceRange()` | mitigate | Single-range strict regex `^bytes=(\d*)-(\d*)$` `src/server.ts:42`; multi/invalid ranges fall back to the full 200 `:43-45`; bounds clamped `:48-49`; unsatisfiable → 416 `bytes */size` `:50-54`. Probe on a copy of the function: `0-9`/`-1000`/`90-`/`99-200` → correct 206; `-0`/`5-3`/`100-` → 416; `0-1,5-6`/`abc`/`-` → 200. | closed |
| T-02-35 | Denial of service (retro, WR-02) | `sliceRange()` buffers the whole file (`arrayBuffer`) | accept | Reached only when the Cache API throws or stores nothing `src/server.ts:71-90`; file ≤ 12,000,000 B enforced non-waivable `scripts/check-assets.mjs:32,224-226`; `workers_dev: false` removes the zone-less hostname that would force this path `wrangler.jsonc:9`. See AR-02. | closed |
| T-02-36 | Tampering (retro, 02-06 deviation 1) | ETag-keyed cache | mitigate | ETag taken from the server-side `ASSETS` HEAD response, URI-encoded into a key built server-side; client query never part of the key `src/server.ts:63-68`; `cache.put(key, …)` with header-less key `:68,84`. | closed |
| T-02-37 | Information disclosure / availability (retro, WR-02) | `*.workers.dev` hostname | mitigate | `"workers_dev": false` `wrangler.jsonc:9`, present in built `dist/server/wrangler.json`. Effective in production only after the next deploy (see Notes). | closed |
| T-02-38 | Tampering (retro, WR-06) | `--manifest` test manifests rewriting `public/` | mitigate | `--manifest` implies check-only unless `--write` `scripts/media.mjs:75`; exits before any binary/write `:295-298`. Probe: `--manifest media-src/manifest.json` and `--check` → "nothing written", mtimes of `.cache.json`/`media.generated.ts` unchanged, `git status` clean. | closed |
| T-02-39 | Tampering / Integrity (retro, WR-05, WR-07) | output collisions, truncated outputs served | mitigate | Canonical, NFC + case-folded output claims `scripts/media.mjs:124-133`; video/poster vs image-name collision `:269-277`; staged encodes moved only on success, cache entry dropped on failure `:346-373`; generated module not rewritten after a failure `:577-578`. Probes: duplicate out and case-variant duplicate out → exit 2. | closed |
| T-02-40 | Tampering (retro, WR-08) | verify-media evaluates generated literals with `vm.runInNewContext` | accept | `scripts/verify-media.mjs:42-52` evaluates the object literals of the committed, repo-controlled `src/data/media.generated.ts` (same trust as importing it); values are `JSON.stringify`-emitted `scripts/media.mjs:494-523`. `vm` is not a sandbox. See AR-03. | closed |
| T-02-41 | Tampering (retro) | client headers forwarded to `cache.match(lookup)` | mitigate | Client headers only reach the lookup Request `src/server.ts:70`; stored key `:68` and origin requests `:64-65` carry no client header. Probe: `X-Evil` header → same 206/ETag, not reflected. | closed |

*Status: open · closed*
*Disposition: mitigate (implementation required) · accept (documented risk) · transfer (third-party)*

---

## Accepted Risks Log

| Risk ID | Threat Ref | Rationale | Accepted By | Date |
|---------|------------|-----------|-------------|------|
| AR-01 | T-02-05, T-02-14, T-02-20 | Declared `accept` at plan time: hero button and project pages carry no user input (static, typed content); giant-image decode is a local, hand-run tool on known masters with no network exposure. | Plan-time threat model (02-01, 02-03, 02-04), confirmed by gsd-security-auditor | 2026-09-28 |
| AR-02 | T-02-35 | The manual Range fallback buffers up to 12,000,000 B per request, but only when the Cache API throws or stores nothing (not the normal path on the custom domain, where production proved 206 from the Cache API). Size ceiling is non-waivable in `check-assets`; `workers_dev: false` removes the known trigger. Worst case: isolate memory pressure under many concurrent fallback requests, i.e. degraded video playback, no data exposure. | gsd-security-auditor (retro) — to be confirmed by Lyna | 2026-09-28 |
| AR-03 | T-02-40 | `vm.runInNewContext` in `verify-media` evaluates a committed, generated file under the developer's own control; a tampered file would already be executed by the site build. Local, read-only dev tool, never run in build/deploy. | gsd-security-auditor (retro) — to be confirmed by Lyna | 2026-09-28 |

---

## Unregistered Flags

None. `## Threat Flags` of 02-01, 02-02, 02-03, 02-04, 02-07 = "None" (mapped to their threat ids); 02-05 and 02-06 have no Threat Flags section. The 02-06 deviation (ETag cache key) and the post-plan code-review fixes introduced new surface that the auditor registered as T-02-34 … T-02-41.

---

## Notes

- **Production drift (informational, not a code gap):** production version `30a0c129-…` was deployed at ~03:03 (+0200) from pre-review code; the review fixes (`b93efa4` … `0fddc33`, 07:43–08:07) are not live. Until the next `npm run deploy`: the `*.workers.dev` hostname may still be enabled (T-02-37), browsers receive the 24 h `Cache-Control` instead of the revalidating one, the cache path still tees the MP4 (`clone()`), and there is no try/catch/manual Range fallback. T-02-01/02/04/32/36 were already present in the deployed code (`74e3020` precedes the deploy). Recommend a redeploy through `npm run deploy`.
- No implementation file was modified by this audit; no fix commit was needed (0 open threats).

---

## Security Audit Trail

| Audit Date | Threats Total | Closed | Open | Run By |
|------------|---------------|--------|------|--------|
| 2026-09-28 | 42 (34 plan-time + 8 retro) | 42 | 0 | gsd-security-auditor (Claude) |

Probes run for this audit (scratchpad only, nothing committed):
- `npm run check` → tsc, vite build, `check-assets: OK` (55.8 MiB, 0 exceptions), `wrangler deploy --dry-run` OK; built `dist/server/wrangler.json`: `workers_dev: false`, `run_worker_first` both prefixes.
- `npm run verify-media` → OK (no ICC, no PDF, sizes).
- `wrangler dev --port 8787 -c dist/server/wrangler.json` (stopped afterwards): Range 206 on hero and empattage; `?v=poison` same entry; `bytes=-10` 206; out-of-range 416; multi-range handled by the Cache API; HEAD 200; POST 405; three traversal spellings 404; poster 200 `image/webp`; unknown MP4 404; `X-Evil` not reflected.
- `sliceRange()` copied verbatim into a Node probe: 11 Range cases, all correct.
- 11 malformed manifests via `--manifest` (check-only): all exit 2; valid manifest via `--manifest`/`--check` writes nothing.
- sha256 of every file deleted or overwritten under `public/`/`src/assets` in `be718d8..HEAD` (at `be718d8`) vs all `media-src/` files: 63/63 matched.
- Git audit: 0 blob > 12,000,000 B in `be718d8..HEAD`; 0 `.pdf` in history; `media-src/` untracked.

---

## Sign-Off

- [x] All threats have a disposition (mitigate / accept / transfer)
- [x] Accepted risks documented in Accepted Risks Log
- [x] `threats_open: 0` confirmed
- [x] `status: verified` set in frontmatter

**Approval:** verified 2026-09-28 (AR-02 and AR-03 await Lyna's confirmation as retroactive accepted risks)

---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
reviewed: 2026-09-28T16:00:00Z
depth: standard
iteration: 3
files_reviewed: 18
files_reviewed_list:
  - scripts/media.mjs
  - scripts/media/util.mjs
  - scripts/media/images.mjs
  - scripts/media/pdf.mjs
  - scripts/media/video.mjs
  - scripts/verify-media.mjs
  - scripts/check-assets.mjs
  - src/server.ts
  - src/cloudflare-workers.d.ts
  - src/components/Picture.tsx
  - src/routes/index.tsx
  - src/routes/projects/$projectId.tsx
  - src/data/projects.ts
  - wrangler.jsonc
  - package.json
  - knip.json
  - .prettierignore
  - scripts/check-assets.exceptions.json
findings:
  critical: 0
  warning: 0
  info: 13
  total: 13
status: clean
---

# Phase 2: Code Review Report (iteration 3)

**Reviewed:** 2026-09-28T16:00:00Z
**Depth:** standard
**Files Reviewed:** 18
**Status:** clean (0 critical, 0 warning, 13 info)

## Summary

Only one commit landed after iteration 2: `0fddc33`. It touches `scripts/media.mjs` and `scripts/media/util.mjs`.

- `insideDir()` now rejects backslashes, empty segments, `.` segments, trailing slashes, and anything that `posix.normalize` would change. It still rejects absolute paths, `..` segments and paths that escape their base.
- `claim()` resolves each output through `outPath()` and rebuilds the path relative to `public/`. It rejects any spelling that differs from that canonical form, and keys the claim on `NFC + toLowerCase`.
- The image-name regex (`own`) now runs on those canonical keys.

**Verdict: iteration-2 WR-01 is fixed, with no regression.** The verdicts for CR-01 and WR-01 to WR-09 of iteration 1 were settled in iteration 2 and carry over unchanged (all fixed; WR-07 is now complete through this commit). No new Critical or Warning issue was found. One new Info item (IN-13) records the remaining gaps in manifest validation. You cannot hit them with ASCII file names.

### Verification of `0fddc33`

**Iteration-2 fixtures** (`scratchpad/wr01iter2/run.sh`): every collision and non-canonical fixture now exits 2 with a precise message.
- Non-canonical spellings: `./`, `//`, `media/./home/portrait.png`, a leading `/`, a backslash, `..`, a trailing `/`, a leading `./`, and a `./` in `src`.
- Collisions: an exact duplicate, a case-only difference, the poster landing on the hero or the CV, and a poster landing on an image's fallback or AVIF/WebP rung (including a PDF page rung).
- `ok-near-miss.json` and `t.json` still exit 0.

**New edge cases** (`scratchpad/iter3r/gen.mjs`, run with `--manifest <f> --check`):

| Case | Result |
|---|---|
| NFC `résumé.webp` (poster) vs NFD `résumé.webp` (cv) | exit 2 "already written by videos[0].poster.out" |
| NFD spelling alone | exit 0 (one file, no collision; acceptable) |
| `media/video/Hero-Poster.webp` vs the hero poster (case only) | exit 2 |
| `src` with a literal `%20` | exit 2 "not found" (taken literally, not decoded; correct) |
| Poster `out` = `animate/videos/poster.webp` | exit 0 (the prefix is allowed; see IN-13) |
| `animate/videos/../1_LYNA.html` | exit 2 `..` |
| cv `out` under `animate/videos/` | exit 2 "cv output must start with media/video/" |
| `C:/media/video/cv.mp4` | exit 2 prefix check. `C:\video\x.mp4` as `src`: exit 2 backslash |
| Empty `out`, empty `src`, empty `poster.out`, non-string `out` | exit 2 "path must be a non-empty string" |
| `../media-src/.tmp/stage` | exit 2 `..`. The staging dir cannot be reached from `public/` |
| `media/`, `media/video/.` | exit 2 not canonical |
| `./home/portrait.jpg` (image src), `festival-identite//charte_graphique.pdf` (pdf src) | exit 2 not canonical |
| Process `out` with case changed (`Empattage.mp4`) | exit 2 "process output must be ..." |
| Poster `media/video/hero.mp4/x.webp` (an output used as a directory) | exit 0 (see IN-13) |
| `ς`/`σ`, `ß`/`ss`, `ﬀ`/`ff` pairs | exit 0, but APFS maps each pair to the same file (see IN-13) |
| NUL byte in `out` | exit 0 in `--check` (see IN-13) |

**Real manifest:**
- `node scripts/media.mjs --check` exits 0 and prints "manifest OK ..., nothing written".
- `npm run check` exits 0: `tsc`, `vite build`, `check-assets`, and `wrangler deploy --dry-run` with 384 assets.
- `media.generated.ts` and `.cache.json` mtimes are unchanged (1790575161), and the working tree is clean outside `.planning/`.

### Call sites of the stricter `insideDir()`

I read each call site. None can be broken by the stricter rule:
- **Video encode** (`media.mjs:419`): `insideDir(stage, v.out)`. `stage = join(STAGE_DIR, id)` is absolute and `v.out` has already passed the canonical check against `PUBLIC`, so the call cannot throw on a path that validated.
- **Poster** (`video.mjs:223`): `insideDir(outRoot, entry.poster.out)`. Same reasoning; `poster.out` was validated by `claim()`.
- **Images** (`images.mjs:99`): `join(outRoot, "media", project)`. Built from ids that match `/^[a-z0-9-]+\/[a-z0-9-]+$/`, and it does not go through `insideDir`.
- **PDF pages** (`media.mjs:460`, `pdf.mjs:37`): `join(TMP_DIR, "page-NN.png")` has its own `startsWith(TMP_DIR + sep)` guard and does not use `insideDir`.
- **Staging move** (`media.mjs:354`): `join(PUBLIC, relative(stage, abs))`. This is unaffected, and `moveFile` / `toRootRel` are unchanged.
- **Sources:** `insideDir(MEDIA_SRC, ...)` for videos, images and PDFs. Every `src` in the real manifest is already canonical, as `--check` shows.
- **No other call sites:** `verify-media.mjs` and `check-assets.mjs` do not call `insideDir`.

**Dead check:** the `canon !== rel` check in `claim()` (`media.mjs:128`) is now unreachable, because `insideDir` already enforces the canonical form. It is harmless as a second line of defence.

## Info

### IN-01 to IN-12 (carried over; `0fddc33` did not touch any of these and all are still true)

- **IN-01:** `Picture.tsx:21` detects the caller's height with the regex `/(^|\s)h-/`, which misses variants such as `sm:h-64`.
- **IN-02:** `SIZES_3COL` (`$projectId.tsx:10`) and the ProjectCard `sizes` value of `395px` (`index.tsx:282`) are smaller than the real slot.
- **IN-03:** three pairs of Tafsut plates have identical alt text. The copy comes from the manifest and Lyna supplies it.
- **IN-04:** graphic images have no WebP rung, so browsers without AVIF get the 640 px fallback.
- **IN-05:** `withAudioArgs` (`video.mjs:56`) lacks the `-map_chapters -1` and `-color_range tv` that `heroArgs` has.
- **IN-06:** `sharp(..., { failOn: "none" })` is used at `images.mjs:53, 90, 94`.
- **IN-07:** the hero's `error` listener is attached only after hydration.
- **IN-08:** the CV play overlay has no `aria-label`, and the `play()` rejection is not caught.
- **IN-09:** under `vite dev`, a missing MP4 under a video prefix returns 500 (`cloudflare:workers` import fails). The comment at `server.ts:26-31` says this path is never reached.
- **IN-10:** fallback path of `sliceRange()` (`server.ts:38-58, 76`):
  - `bytes=5-3` returns 416 instead of being ignored with a 200.
  - The origin request drops `If-None-Match`.
  - The early `return full` on the cache path skips `BROWSER_CACHE`.
- **IN-11:** `--manifest --check` takes `--check` as the manifest path (exit 2, so this is safe). `--write` without `--manifest` is silently ignored (`media.mjs:66-75`).
- **IN-12:** after a partly failed run, the successful entries are already in `public/`, while `media.generated.ts` still describes the previous run (`media.mjs:341-368, 570-573`).

### IN-13: Output-path validation still has three narrow gaps that `--check` does not catch

**File:** `scripts/media.mjs:124-133`, `scripts/media/util.mjs:71-84`
**Issue:**
1. **Unicode case folding.** The claim key uses `NFC + toLowerCase()`. APFS applies full Unicode case folding, and I confirmed on this disk that it maps each of these pairs to one file: `ς`/`σ`, `ß`/`ss` and `ﬀ`/`ff`. `toLowerCase` does not map them together. Two entries named `straße.webp` and `strasse.webp` therefore pass `--check`, and the later encode would overwrite the earlier one. The comment's claim that two spellings "can never get two keys" is therefore true only for ASCII. Every real output is lower-case ASCII, so this cannot happen in practice.
2. **An output used as a directory.** One output can use another output as a parent directory, for example poster `media/video/hero.mp4/x.webp`. This passes `--check`. At encode time, `mkdirSync` or `renameSync` fails with `ENOTDIR`/`EISDIR`, so the failure is loud (exit 1) and nothing is silently overwritten.
3. **Unrestricted characters.** A NUL or other control character in `out` passes `--check` and only fails at encode time. The poster `out` may also sit under `animate/videos/`, because only the `OUT_PREFIXES` check applies to it.

**Fix:** Limit output paths to a lower-case ASCII alphabet in `outPath()`. This removes cases 1 and 3 at once and makes the NFC/lower-case key exact. You can optionally reject a claim that is a path prefix of another claim, and pin `poster.out` to `media/video/`:
```js
if (!/^[a-z0-9][a-z0-9._-]*(?:\/[a-z0-9][a-z0-9._-]*)*$/.test(rel)) {
  invalid(`${where}: "${rel}" must use lower-case ASCII [a-z0-9._-] segments`);
}
```

---

_Reviewed: 2026-09-28T16:00:00Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
_Iteration: 3_

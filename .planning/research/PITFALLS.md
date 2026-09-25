# Pitfalls Research

**Domain:** Creative/audiovisual portfolio — asset cleanup, bulk media optimization, cinematic redesign (TanStack Start + Cloudflare Workers)
**Researched:** 2026-09-21
**Confidence:** HIGH for repo-specific findings (verified locally with `ffprobe`/`magick`/`grep`), MEDIUM-HIGH for ecosystem findings (official docs + multiple sources)

> This document **extends** `.planning/codebase/CONCERNS.md`. It does not repeat the known issues; it documents what goes *wrong while fixing them*. Several findings below **contradict assumptions written into `PROJECT.md`** — those are marked ⚠️ **CORRECTS PROJECT.md**.

---

## Critical Pitfalls

### Pitfall 1: Re-encoding `hero.mp4` "smaller" while preserving the reason it doesn't play on iPhone

**What goes wrong:**
`public/videos/hero.mp4` is **H.264 High 10 profile, `pix_fmt=yuv420p10le`** — 10-bit video. Verified locally:

```
codec_name=h264  profile=High 10  pix_fmt=yuv420p10le  1080x574  60fps  8.58 Mbit/s
```

H.264's only pixel format supported across Chrome, Safari, Firefox, Edge and iOS is 8-bit 4:2:0 (`yuv420p`). 10-bit H.264 is "either not played, played with visual glitches, or played perfectly, depending on the platform" (Mozilla bug 1743824). **The hero background video — the element carrying the entire "recruiter understands in 3 seconds" value proposition — most likely does not play at all on iPhone today.**

The trap: the milestone goal is phrased as a *size* goal ("17 Mo → ~3 Mo"). A naive `ffmpeg -i hero.mp4 -crf 30 out.mp4` **inherits the source pixel format** and produces a 3 MB file that is *still* 10-bit and *still* broken — now with the bug hidden behind a "done, 3 MB ✓" checkbox.

**Why it happens:**
The source was exported from Premiere/DaVinci in a 10-bit delivery preset (normal for a video student — 10-bit is correct for mastering, wrong for web delivery). `ffmpeg` silently preserves `pix_fmt` from input unless told otherwise. Nothing in the build, the browser console, or the Cloudflare deploy warns about it; Safari just shows the poster frame.

**How to avoid:**
Force 8-bit explicitly on **every** video re-encode, and verify after:

```bash
ffmpeg -i in.mp4 -c:v libx264 -profile:v high -level 4.0 -pix_fmt yuv420p \
       -crf 23 -preset slow -movflags +faststart -an out.mp4

# Verify — must print exactly "high" and "yuv420p"
ffprobe -v error -select_streams v:0 \
  -show_entries stream=profile,pix_fmt -of csv=p=0 out.mp4
```

**Warning signs:**
- `ffprobe` prints `High 10`, `High 4:2:2`, `yuv420p10le`, `yuv422p`, or `yuv444p`
- The site shows the poster image and never the video on a real iPhone (desktop Chrome on an M-series Mac may play it fine — **this is why it was never noticed**)
- `video.readyState` stays 0 and no `error` event fires in some browsers

**Phase to address:** Media (must be an explicit acceptance criterion, not implied by "smaller")

---

### Pitfall 2: Deleting the "unused" Animate exports — it is a 6-scene navigation chain, not one page

⚠️ **CORRECTS PROJECT.md** — `PROJECT.md:33` says *"exports Animate non référencés (seul `1_MOHAMED.html` + ses dépendances est utilisé)"*. `CONCERNS.md` repeats this. **This is false.**

**What goes wrong:**
`1_MOHAMED.html` is only the **entry point**. Each scene's JS calls `window.open('<next>.html', '_self')` to navigate the iframe to the next scene. Verified by grepping every `.js` in `public/animate/`:

```
1_MOHAMED.js  -> 1_LYNA.html
1_LYNA.js     -> 2_IMAD.html
2_IMAD.js     -> 2_CLEMENT.html
2_CLEMENT.js  -> 2_SOPHIA.html
2_SOPHIA.js   -> 3_ALBERTIN.html
3_ALBERTIN.js -> (end of chain)
3_CLEMENT.js  -> 2_SOPHIA.html   # orphan: nothing navigates INTO 3_CLEMENT
```

So **6 HTML + 6 JS files are live**, not one. Only `3_CLEMENT.html` / `3_CLEMENT.js` are genuinely orphaned. Deleting "everything except `1_MOHAMED`" leaves a brewing animation that plays scene 1 and then dead-ends on a blank iframe — and **the homepage looks perfectly fine**, so the breakage survives a normal visual QA pass.

**Why it happens:**
The only reference from React is `<iframe src="/animate/1_MOHAMED.html">` (`$projectId.tsx:445`). A grep from `src/` finds exactly one Animate file, so the dependency graph looks like a single node. The real graph lives inside minified CreateJS output, reachable only by grepping `public/animate/*.js` — which nobody does, because `public/` is "just assets".

**How to avoid:**
Resolve the closure from inside `public/animate/`, not from `src/`:

```bash
cd public/animate
for f in *.js; do
  echo "$f -> $(grep -oE "window\.open\('[^']+'" "$f" | sed "s/window.open('//;s/'//" | sort -u | tr '\n' ' ')"
done
```
Keep the transitive closure from `1_MOHAMED.html`. Delete only `3_CLEMENT.*`.

**Warning signs:**
- Any deletion plan that names a single Animate HTML file
- Clicking through the SkøllRub animation ends on a white iframe or a 404 (must be tested **inside the iframe**, by clicking to the end, not by loading the page)

**Phase to address:** Cleanup — and QA must include "click the SkøllRub animation through all 6 scenes"

---

### Pitfall 3: Deleting the wrong copy of the duplicated process videos

⚠️ **CORRECTS/RESOLVES CONCERNS.md** — which says *"Determine which copy is actually referenced"* and leaves it open. Determined:

**What goes wrong:**
There are two byte-identical copies of 8 videos (~100 MB duplicated). Verified with `shasum` — all 8 pairs match exactly. The live copy is **`public/animate/videos/`**, because the Animate JS references relative paths `videos/<name>.mp4`:

```
1_MOHAMED.js : videos/concassage.mp4  videos/empattage.mp4
1_LYNA.js    : videos/ebullition.mp4  videos/filtration.mp4
2_IMAD.js    : videos/whirpool.mp4
2_CLEMENT.js : videos/refroidissement.mp4
2_SOPHIA.js  : videos/fermentation.mp4  videos/miseenbouteile.mp4
```

The **root-level `public/animate/*.mp4` copies are the dead ones.** A coin-flip here (and the `videos/` subfolder *looks* like the redundant nested one) silently kills every video inside the brewing animation.

**Why it happens:**
`public/animate/videos/` reads as "the extra nested copy" to a human tidying a directory. The correct answer is only visible inside minified JS.

**How to avoid:**
Delete `public/animate/*.mp4` (root level). Keep `public/animate/videos/*.mp4`. Then prove it:

```bash
cd public/animate
for v in videos/*.mp4; do
  grep -ql "$v" *.js || echo "ORPHAN: $v"
done
```

**Warning signs:**
- Animation scenes render but video panels are black/empty
- Network tab shows 404s for `/animate/videos/*.mp4`

**Phase to address:** Cleanup (do this *before* media re-encoding, so you only re-encode 8 files instead of 16)

---

### Pitfall 4: `bun run build` does not enforce the 25 MiB limit — the deploy does

**What goes wrong:**
`PROJECT.md:55` sets the success criterion: *"Le build Cloudflare passe (`bun run build`) et aucun asset ne dépasse 25 Mio."* These are two **unrelated** checks. `vite build` copies `public/` verbatim and reports success regardless of file sizes. The 25 MiB per-asset limit ([Cloudflare Workers platform limits](https://developers.cloudflare.com/workers/platform/limits/)) is enforced at **upload time**. Worse: `wrangler.jsonc` contains **no `assets` block at all** (only `main`) — the binding is synthesized by `@cloudflare/vite-plugin` at build time, so there is nothing to inspect statically either.

On a one-week deadline, this is the classic "everything's green, then Friday's deploy fails" failure. Current headroom is razor-thin — measured exactly:

| File | Size | Headroom |
|---|---|---|
| `public/videos/56_Lyna_REBAHI_CVvideo.mp4` | **23.10 MiB** | 1.90 MiB |
| `public/assets/charte_graphique.pdf` | **22.53 MiB** | 2.47 MiB |
| `public/animate/videos/empattage.mp4` | **22.37 MiB** | 2.63 MiB |
| `public/animate/empattage.mp4` (dup) | 22.37 MiB | 2.63 MiB |
| `public/videos/hero.mp4` | 17.25 MiB | — |
| `public/animate/videos/miseenbouteile.mp4` | 15.63 MiB | 2.6 MiB over 13 |

Note `empattage.mp4` at 22.37 MiB was never flagged — it is a **second near-limit asset** nobody has been watching.

**How to avoid:**
Add a guard that runs against the **built output**, not the source tree, and run it from day 1 — not at the end:

```bash
# Hard gate — fail loudly. Run after every build.
find dist -type f -size +20M -exec ls -l {} \; | \
  awk '{printf "%.2f MiB  %s\n", $5/1048576, $9}' | sort -rn
# And a true dry-run upload:
bunx wrangler deploy --dry-run --outdir=/tmp/wr-dryrun
```

Set the internal budget at **20 MiB, not 25** — you need margin for a future re-export.

**Warning signs:**
- Any asset above 20 MiB at any point in the week
- "We'll check the size at the end"
- The build passing being treated as evidence the deploy will pass

**Phase to address:** Verification — but the check must be introduced in **Phase 1** and run continuously

---

### Pitfall 5: Optimizing for file size when decoded pixel memory is what breaks mobile

**What goes wrong:**
`PROJECT.md:40` sets the target *"aucune image > 500 Ko"*. File size is the wrong metric, and this specific gate **passes images that are the actual mobile problem**. Measured locally:

| File | Dimensions | Megapixels | File size | **Decoded RAM** |
|---|---|---|---|---|
| `mockup.jpg` | 10035×6221 | 62 MP | 9.8 MB | **~238 MiB** |
| `chartegraphique_SkollRub.png` | 9047×5032 | 45 MP | **3.0 MB** | **~173 MiB** |
| `Joseph.jpg` | 2578×3520 | 9 MP | **640 KB** | ~34 MiB |
| `Lyna.jpg` | 2486×3511 | 8 MP | **516 KB** | ~33 MiB |
| `affiche_sensibilisation…png` | 2480×3508 | 8 MP | 9.6 MB | ~33 MiB |

`chartegraphique_SkollRub.png` is **already under 3.1 MB** and would look "nearly fine" to a size-based audit, yet a browser must allocate ~173 MiB to decode it. `Lyna.jpg` and `Joseph.jpg` **already pass a 500 KB gate** while each costing ~34 MiB of decoded RAM. A project gallery rendering several of these at once will blow past iOS Safari's decoded-image budget: images blank out, scroll stutters, and the tab reloads.

**Why it happens:**
Compression ratio hides pixel count. Flat-colour brand charts and posters compress extremely well in PNG, so "3 MB" feels acceptable — but decode cost is `width × height × 4 bytes`, entirely independent of file size.

**How to avoid:**
Gate on **dimensions first, bytes second**. Resize to actual display size × 2 (DPR cap), then compress:

```bash
# Audit: anything a phone shouldn't be asked to decode
for f in public/assets/*.{png,jpg}; do
  read -r w h <<< "$(magick identify -format '%w %h' "$f")"
  mp=$((w*h/1000000)); [ "$mp" -ge 4 ] && \
    echo "$(basename $f): ${w}x${h} ${mp}MP  decoded~$((w*h*4/1048576))MiB"
done
```
Target: **≤ 2400 px on the long edge** for full-bleed art, ≤ 1200 px for gallery tiles. Ship `srcset` so phones fetch the small one.

**Warning signs:**
- Any source image > 3000 px wide surviving the media phase
- "It's only 500 KB, it's fine"
- Gallery images going blank/grey after scrolling on a real iPhone

**Phase to address:** Media — replace the "< 500 Ko" criterion with a **dimension** criterion plus a size criterion

---

### Pitfall 6: The hero poster is a 4.37 MB PNG — and on iPhone it's the only thing shown

**What goes wrong:**
`src/routes/index.tsx:16` sets `HERO_FALLBACK = "/assets/hero.png"`, used as `poster={HERO_FALLBACK}` on the hero video. That file is **1920×1080, 4.37 MB, PNG**. It is:
- the **LCP element** of the site,
- fetched **eagerly and unconditionally** (posters are not lazy),
- combined with `preload="auto"` on a 17 MB video — so first paint competes with ~21 MB of downloads,
- and because of Pitfall 1, **it is what iPhone visitors actually see instead of the video**, permanently.

This compounds with Pitfall 1 into the single worst defect on the site: the "3 second" promise is currently delivered as a multi-megabyte still image on mobile data.

**Why it happens:**
A poster feels like a decorative fallback, so nobody audits it. PNG was chosen because the frame was exported from the editing timeline, where PNG is the natural still-export format.

**How to avoid:**
- Poster → WebP/AVIF, ~1600 px wide, **target < 80 KB** (a poster is shown for ~200 ms; visually-lossless is not required).
- Change `preload="auto"` → `preload="metadata"` (or `none` + play on `canplay`), so the poster wins the bandwidth race.
- Explicitly test with the video removed, to see what mobile actually gets.

**Warning signs:**
- `poster` pointing at a `.png`
- LCP > 2.5 s on a throttled mobile profile
- `preload="auto"` on anything but a video that is definitely playing

**Phase to address:** Media + Redesign (hero staging)

---

### Pitfall 7: CV video has no `faststart` — 23.1 MiB must fully download before the first frame

**What goes wrong:**
Verified by scanning the first 200 KB of each file for the `moov`/`mdat` box order:

```
hero.mp4                     boxorder=[moov mdat]  ✓ faststart
empattage.mp4                boxorder=[moov mdat]  ✓ faststart
56_Lyna_REBAHI_CVvideo.mp4   boxorder=[mdat ...]   ✗ moov at END
```

The `moov` atom holds the index required to start playback. With it at the end, the browser must download the **entire 23.1 MiB** before rendering frame one. Safari is especially unforgiving about moov-at-end. On a recruiter's phone, the CV video — the most persuasive artifact on the site — appears broken.

Compounding: the file is **1920×1080 @ 24 fps, 2.29 Mbit/s, 85 seconds**. Nothing about it is unreasonable *except* that it is served as a progressive download with no index.

**Why it happens:**
Adobe Media Encoder / Premiere do not expose a "fast start" / "moov atom at front" toggle in common presets ([long-standing Adobe feature request](https://community.adobe.com/t5/adobe-media-encoder-discussions/how-to-add-moov-atom/td-p/4609449)). Every export is moov-at-end unless post-processed.

**How to avoid:**
Always pass `-movflags +faststart`. To fix without re-encoding (lossless, seconds):

```bash
ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4
```
Then verify the box order rather than trusting the flag:
```bash
xxd -l 200000 -p out.mp4 | tr -d '\n' | grep -obaoE '6d6f6f76|6d646174' | head -2
# first hit must be 6d6f6f76 (moov)
```

**Warning signs:**
- Long black gap before a video starts, that scales with file size
- Video works instantly on localhost (no latency) but not in production — **this is why it was never caught**
- Any video that went through Media Encoder and wasn't touched by ffmpeg

**Phase to address:** Media (cheap win — `-c copy`, no quality risk, do it first)

---

### Pitfall 8: Grep-based "unreferenced asset" audits produce false positives on URL-encoded and non-ASCII filenames

**What goes wrong:**
The plan is to *"supprimer les fichiers de `public/assets/` non référencés … après vérification"* (`PROJECT.md:34`). A naive verification script deletes live files. **Reproduced in this repo:**

- `src/data/projects.ts` references `/assets/palette%20de%20couleurs.png`
- The file on disk is `public/assets/palette de couleurs.png` (literal spaces)
- A literal path check reports `MISSING` → looks like a broken reference to fix **and** an unreferenced file to delete. It is neither: it works fine in a browser.

Other landmines in this repo:
- `skøllrub_logo_final.png`, `Etiquettes_SkøllRub_{Angerboda,Cerisicide,Freya,Original}-1.png` — non-ASCII `ø`, all **live references**
- `Capture d’écran 2026-05-09 à 23.00.19.png` — contains U+2019 (curly apostrophe), spaces, and `à`
- `public/animate/illustrations/de␣cor.ai` — filename is **already mojibake** on disk (bytes `65 e295a0 c3bc`, not a valid `é`)

Additionally: macOS stores filenames in **NFD**, Linux and Cloudflare's asset store treat them as opaque bytes. A file that resolves locally on APFS can 404 in production if the source string uses **NFC** while the file on disk is NFD. (This repo's `prévention.png` is NFC-encoded on disk — fine — but the risk is live for any newly added accented filename.)

**How to avoid:**
1. URL-**decode** before checking existence, and check both normalization forms.
2. Better: sidestep it entirely — **rename every asset to ASCII kebab-case** during the media phase. You're re-encoding all of them anyway, so renaming is free. `skollrub-logo-final.webp`, `palette-couleurs.webp`.
3. Never delete on the first pass. `git mv` to `_quarantine/`, run the site, *then* delete.

```bash
# Decode-aware reference check
grep -roh '/assets/[^"]*' src | sort -u | while read -r p; do
  d=$(printf '%b' "${p//%/\\x}")
  [ -f "public$d" ] && echo "OK      $p" || echo "MISSING $p"
done
```

**Warning signs:**
- An audit script reporting "missing" files that visibly render in the browser
- Any asset path containing `%`, a space, or a byte > 0x7F
- "Works locally, 404 in production" for one specific accented file

**Phase to address:** Cleanup (the quarantine step is the real safeguard)

---

### Pitfall 9: `rm -rf src/assets` — it is 97% duplicate, not 100%

**What goes wrong:**
`PROJECT.md:32` describes `src/assets/` as duplicating `public/assets/` (63 files, 141 MB). Measured: **63 of 65 files are byte-identical duplicates**. The remaining facts change the safe action:

1. **`src/assets/portrait.jpg` is a live Vite import** — `src/routes/index.tsx:8`: `import portrait from "@/assets/portrait.jpg";`. Deleting the directory **breaks the build**, not just an image. (It is *also* duplicated to `public/assets/portrait.jpg` and referenced by URL — so the portrait ships twice, via two different mechanisms.)
2. **Two files exist ONLY in `src/assets/` and are referenced NOWHERE:**
   - `src/assets/affichepromo.png` — **23 MB**, 5213×3475
   - `src/assets/prévention.png` — **19 MB**

⚠️ **CORRECTS PROJECT.md** — `PROJECT.md:40` explicitly lists *"`affichepromo.png` 23 Mo, `prévention.png` 19 Mo"* as **images to re-encode**. They are orphans: not in `public/`, not imported, not referenced by any URL string. Re-encoding them is **42 MB of careful work that ships nothing**, on a one-week deadline. They should be moved to an off-repo archive, or — if Lyna wants them displayed — that is a *content* decision to make deliberately, not a compression task.

**How to avoid:**
Decide the mechanism first (`public/` URL strings vs `src/` Vite imports), migrate `portrait.jpg` to whichever you keep, *then* delete. Verify with a build, not a grep:

```bash
grep -rn 'from "@/assets\|from "\.\./assets\|/assets/' src --include='*.ts*' --include='*.css'
bun run build   # a missing Vite import fails the build; a missing public/ URL does not
```

**Warning signs:**
- A cleanup ticket phrased as "delete the duplicate directory"
- Build error `Failed to resolve import "@/assets/..."`
- Time being spent compressing a file you cannot find on the live site

**Phase to address:** Cleanup — and **remove the two orphans from the media phase's work list**

---

### Pitfall 10: Committing `charte_graphique.pdf` — 22.5 MiB into git history, permanently

**What goes wrong:**
`git status` shows `public/assets/charte_graphique.pdf` as **untracked (`??`)**. It is **22.53 MiB**. The plan (`PROJECT.md:43`) is to extract pages from it and then *"retirer le PDF de 23 Mo du dossier public"*.

There is a narrow, time-sensitive window here: **if it is committed even once, `git rm` later does not reclaim the space.** The blob lives in history forever, and `.git` is *already* 333 MB. Removing it afterwards requires `git filter-repo`/BFG and a force-push that rewrites every commit hash.

The same applies to every re-encode: committing `hero.mp4` at 17 MB, then again at 8 MB, then again at 3 MB leaves **28 MB** in history, not 3 MB.

**How to avoid:**
1. **Right now, before any commit:** `echo 'public/assets/charte_graphique.pdf' >> .gitignore`, or move it to an untracked `design-sources/` outside `public/`. Extract the pages, then delete it. **It must never enter a commit.**
2. Re-encode media **on a branch, in one squashed commit** — do not commit intermediate encodes. Iterate in `/tmp`, commit only the final artifact.
3. Do **not** reach for Git LFS as the solution here. It adds a bandwidth-quota dependency and a checkout-time fetch step to a project whose deploy already works, for a repo that will be < 60 MB after cleanup. Not worth the complexity on a one-week deadline.
4. History rewriting (`git filter-repo`) is a **separate, optional, post-milestone task** — sequencing it inside this week risks losing work for a cosmetic `.git` size win.

**Warning signs:**
- `git status` showing a multi-MB untracked binary
- `du -sh .git` growing during the media phase (it should stay flat if you're iterating in `/tmp`)
- Several commits named "compress X", "compress X again", "compress X final"

**Phase to address:** Cleanup — **day 1, before the first commit of the milestone**

---

### Pitfall 11: Removing dead code in the wrong order — deleting packages before the files that import them

**What goes wrong:**
The cleanup list removes `src/components/ui/`, Radix packages, `@tanstack/react-query`, and `zod`. Done in the wrong order this breaks the build in a way that is annoying to unwind mid-week.

Specific traps in this repo:
- `package.json` carries **26 `@radix-ui/*` packages** plus `cmdk`, `vaul`, `embla-carousel-react`, `recharts`, `react-day-picker`, `input-otp`, `sonner`, `react-resizable-panels`, `date-fns`. These are a **shadcn/ui kit**: each `src/components/ui/*.tsx` file maps to one or more of them. Remove a package while one leftover `ui/` file still imports it → build fails at the import, not at install time.
- `zod` + `react-hook-form` + `@hookform/resolvers`: `CONCERNS.md` *recommends adopting them* for contact-form validation while `PROJECT.md:30` lists `zod` for **deletion**. These two plans are in direct conflict — pick one, explicitly.
- `@typescript-eslint/no-unused-vars` is **off** (`eslint.config.js:24`) and `noUnusedLocals`/`noUnusedParameters` are `false`. So the tooling that would normally catch orphaned imports after deletion is **disabled**. Turning it on is itself a cleanup deliverable, and it will surface a wave of pre-existing violations — budget for that, or scope it out.
- `routeTree.gen.ts` is generated. Deleting or moving a route file requires regenerating it (`bun run dev` / `bun run build` regenerate it); hand-editing produces a file that gets silently overwritten.
- `vite.config.ts` delegates everything to `@lovable.dev/vite-tanstack-config` with an explicit "do NOT add these manually" warning. Reacting to a build error by adding `react()` or `tailwindcss()` back into the config **duplicates plugins and breaks the app** — which is exactly the instinct a build failure triggers.

**How to avoid:**
Strict order, verifying between each step:
1. Delete component/route **files**
2. `bun run build` → fix resulting import errors
3. **Then** remove packages from `package.json`, `bun install`
4. `bun run build` again
5. Only then re-enable the lint rules

Use `bunx knip` or `bunx depcheck` to propose the dependency list, but treat the output as a hypothesis — both tools miss dynamic imports and CSS-referenced packages.

**Warning signs:**
- A single commit that deletes files *and* edits `package.json`
- Any edit to `vite.config.ts` made in response to a build error
- `routeTree.gen.ts` appearing in a diff you wrote by hand

**Phase to address:** Cleanup

---

### Pitfall 12: Cinematic effects that look great on a MacBook and destroy mobile scroll

**What goes wrong:**
The redesign calls for film grain, curved-screen framing, blend modes and pellicule/timecode transitions. The standard implementations are performance traps:

- **Full-viewport SVG `feTurbulence` grain.** SVG filters are **repainted on the CPU**, not composited on the GPU. A full-viewport turbulence filter re-rasterises per frame; on a high-DPI phone that is millions of pixels of per-pixel noise every frame. This is the single most common way a "cinematic" redesign becomes unscrollable on mobile.
- **`mix-blend-mode` on a full-screen overlay.** It forces a stacking context and can disable GPU rasterisation of everything beneath it in Safari — so the grain layer degrades the *video's* compositing too.
- **Fixed overlays without `pointer-events: none`.** A `position: fixed; inset: 0` grain/vignette/frame layer intercepts every click and scroll gesture. Symptom: nothing on the page is clickable, and it's invisible in a screenshot.
- **Zero `prefers-reduced-motion` handling.** Verified: **`grep -rn "prefers-reduced-motion" src/` returns nothing.** The site currently has animated reveals, a portrait particle system and a custom cursor with no motion guard at all — and the redesign adds more.
- **`will-change` sprayed everywhere** to "fix" the jank, which promotes dozens of layers and exhausts GPU memory on mobile — making it worse.

**How to avoid:**
- Grain: use a **pre-rendered 256×256 tiled PNG/WebP** with `background-repeat`, not a live SVG filter. Animate it by stepping `background-position` on a single promoted layer. Trades one tiny request for a categorical performance win.
- Every decorative overlay gets `pointer-events: none`. No exceptions.
- Prefer `opacity` over `mix-blend-mode` where the look permits; if blend mode is required, scope it to a section, never the viewport.
- Ship the reduced-motion guard **in the same commit** as the first animation:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- Budget `will-change` to ≤ 2 elements.

**Warning signs:**
- Scroll FPS below 50 in Chrome DevTools "Performance" with 4× CPU throttling
- A purple "Paint" band dominating the flame chart (CPU repaint = SVG filter)
- Something on the page is not clickable and you can't see why
- Testing only in a desktop browser's responsive mode — **that uses desktop compositing and will not reproduce this**

**Phase to address:** Redesign — with an explicit "test on a real phone" gate, not device emulation

---

### Pitfall 13: Bulk-converting posters and brand boards with photo settings (4:2:0 chroma)

**What goes wrong:**
Most of this portfolio's images are **not photographs**. They are posters, flyers, logos, beer labels, brand charters and Figma mockups — i.e. **saturated flat colour, hard edges and typography**, in a sakura/prune/menthe palette. Applying a single photo-oriented encode across the whole folder produces:

- **Colour fringing / fuzzy text** from 4:2:0 chroma subsampling on hard-edged coloured type. Photo guidance is quality 70-80 @ 4:2:0; **graphics with text need quality 80-85 @ 4:4:4.** The saturated reds/pinks in this palette are exactly where 4:2:0 shows most.
- **Banding** on the gradient backgrounds in the brand work. Lower chroma ratios lead to visible banding in smooth transitions.
- **Lossy WebP is always 4:2:0** — there is no 4:4:4 lossy WebP. For the logo/label artwork, lossy WebP is the wrong container; use AVIF 4:4:4, or lossless WebP for flat-colour logos (often *smaller* than lossy for that content).
- **Silently dropping alpha.** Converting a transparent PNG logo to JPEG composites it onto black or white. Measured: most large PNGs here are fully opaque (`clip*.png`, `SAE*.png`, `angerboda*.png`, `chartegraphique_SkollRub.png` → safe to go lossy), **but the logos are not** — check per file, don't assume per folder.

**Also: ICC profile damage.** Measured — `public/assets/logoprincipal.png` carries an embedded ICC profile named **`"Color LCD"`**. That is a *monitor* profile accidentally embedded by a macOS export, **not sRGB**. Both outcomes are wrong: strip it and the colours shift; keep it and browsers apply a laptop's display profile to everyone. Most other files carry no profile at all (untagged → assumed sRGB). So "preserve ICC profiles" is *not* the right blanket rule here.

**How to avoid:**
- **Convert to sRGB explicitly, then strip**, rather than preserving whatever is embedded:
  ```bash
  magick in.png -profile /System/Library/ColorSync/Profiles/sRGB\ Profile.icc \
                -strip -resize 2400x2400\> out.png
  ```
  This normalises `logoprincipal.png`'s bogus profile instead of propagating it.
- Two presets, chosen per image type:
  - **Photos** (`portrait.jpg`, `Lyna.jpg`, `Joseph.jpg`, video stills): AVIF/WebP q70-78, 4:2:0
  - **Posters / logos / brand boards / UI mockups**: AVIF q80-85 **4:4:4**, or lossless WebP for flat-colour logos
- **A/B check before committing** — never trust the file-size drop alone:
  ```bash
  magick compare -metric SSIM original.png new.webp null: 2>&1
  # < 0.98 → look at it side by side at 100%
  ```
- Keep a **complete untouched backup off-repo** (external drive / cloud) before the first batch runs. `PROJECT.md:84` promises "rien n'est supprimé ni visiblement dégradé" — without originals that promise is unrecoverable.

**Warning signs:**
- One ffmpeg/magick loop applied to `public/assets/*`
- Coloured halos around text when zoomed to 100%
- Pink/prune areas looking duller after conversion
- Logos gaining a white or black box

**Phase to address:** Media — split the work list into "photo" and "graphic" buckets **before** encoding starts

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Re-encode media in place, commit each iteration | Simple, no branch juggling | Every intermediate encode is permanent in `.git` (already 333 MB); needs `filter-repo` + force-push to undo | **Never** — iterate in `/tmp`, commit once |
| Delete assets directly instead of quarantining | Faster, fewer steps | Restoring a wrongly-deleted asset from a rewritten/squashed history is painful; URL-encoded and `ø`-named files *will* be misjudged | Only for files proven unreferenced by a **decode-aware** check |
| Keep `no-unused-vars` disabled | Avoids a wave of lint errors mid-week | The tooling that prevents dead-code regrowth stays off; this milestone's cleanup silently undoes itself | Acceptable **this week**; re-enable as the first task of the next milestone |
| Ship the redesign without `prefers-reduced-motion` | Saves ~20 minutes | Accessibility regression on an **MMI/communication** portfolio — the one domain where a recruiter may actually check | **Never** — it is a 6-line CSS block |
| Leave `zod`/`react-hook-form`/`@hookform/resolvers` installed but unused | Avoids re-installing if the contact form is hardened later | ~3 unused deps; conflicts with the "remove unused deps" goal and leaves the plan ambiguous | Acceptable **if** contact-form hardening is explicitly deferred and written down |
| Hardcode Adobe logo placeholder paths with no fallback render | Fast to scaffold | Missing logos render as broken images on a recruiter's screen — worse than no logo grid | **Never** — render a styled text chip when the image 404s |
| Fixed-height (`h-96`) iframe for the Animate stage | Works on desktop | Animate exports are fixed-size canvases; a 384 px-tall iframe clips or double-scrolls on mobile | Only with a responsive aspect-ratio wrapper |
| Git LFS for media | "Proper" large-file handling | Adds bandwidth quota, checkout-time fetch, and a CI failure mode, to fix a problem that disappears once assets are < 60 MB | **Not on this timeline** |

---

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| **Cloudflare Workers static assets** | Treating a green `vite build` as proof the deploy will succeed; `wrangler.jsonc` has no `assets` block to inspect | Gate on built output: `find dist -type f -size +20M`; confirm with `wrangler deploy --dry-run`. Budget 20 MiB, not 25 |
| **Cloudflare Workers static assets** | Assuming the 25 MiB cap is the only limit | Free plan also caps **20,000 files** per version (100,000 on paid, Wrangler ≥ 4.34.0). `public/` is currently 124 files — fine, but AVIF+WebP+JPEG × 3 `srcset` widths multiplies file count fast |
| **Cloudflare Workers + video** | Assuming byte-range requests for `<video>` seeking behave like a normal origin | Range-request behaviour for Workers static assets is **not documented** and has a history of iOS playback issues ([kv-asset-handler#63](https://github.com/cloudflare/kv-asset-handler/issues/63)). Keep videos small, always `+faststart`, and **verify seeking on a real iPhone against the deployed URL** — not localhost |
| **YouTube embeds** | Using `www.youtube.com/embed` (3 occurrences: `projects.ts:92,103`, `$projectId.tsx:460`); no `loading="lazy"` | Switch to `www.youtube-nocookie.com/embed`, add `loading="lazy"` and `referrerpolicy="strict-origin-when-cross-origin"`. Note nocookie still writes `yt-remote-device-id` to localStorage on load — a click-to-load poster façade is the CNIL-aligned pattern and also removes 3 heavy iframes from initial load |
| **Adobe Animate / CreateJS** | Not noticing CreateJS loads from `https://code.createjs.com/1.0.0/createjs.min.js` — a third-party CDN with no SRI and no fallback | Vendor `createjs.min.js` into `public/animate/` and point the 6 HTML files at the local copy. Otherwise a CDN outage renders a blank iframe on the flagship project |
| **Adobe Animate / CreateJS** | Consolidating atlas images into one `images/` folder | Atlas paths **differ per scene**: `images/` (1_LYNA, 1_MOHAMED), `imagesImad/` (2_IMAD), `imagesframe2/` (2_CLEMENT, 2_SOPHIA). Keep all three folders exactly as exported |
| **Adobe Animate / CreateJS** | Grepping for `1_MOHAMED.js` and missing it | The script tag is `src="1_MOHAMED.js?1781042292873"` — cache-busted. Filename-exact matchers miss query-stringed URLs |
| **EmailJS** | Treating the exposed public key as the only issue | Public key exposure is by design; the real risk is that `service_mkurl73` / `template_b9lcxkl` can be invoked from any origin. Enable **domain allowlisting + rate limiting in the EmailJS dashboard** — a code change alone cannot fix this. Add a honeypot field (free, no dependency) |
| **Vite `public/` directory** | Assuming Vite reports missing `public/` assets at build time | `public/` is copied verbatim; a broken `/assets/x.png` URL string **never fails the build** (proven: `festival-flyer.jpg`, `festival-goodies.jpg`, `extraitpubSAE1.mp4` have shipped broken). Only `@/assets/*` Vite imports fail loudly. Add a script that validates every media path in `projects.ts` against the filesystem |
| **TanStack Start SSR** | Reading `window`/`document`/`matchMedia` during render for cinematic effects | Guard with `useEffect`, `typeof window !== 'undefined'`, or TanStack Start's `<ClientOnly>` / Selective SSR. Scroll-progress, timecode overlays, and viewport-sized grain layers are the usual offenders |

---

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Full-viewport SVG `feTurbulence` grain | Scroll jank; DevTools flame chart dominated by Paint | Pre-rendered 256×256 tiled noise image | Immediately on any mid-range phone; invisible on an M-series Mac |
| Oversized source images (dimension, not bytes) | Gallery images blank out / grey on iOS; tab reloads | Cap long edge at 2400 px (art) / 1200 px (tiles); ship `srcset` | 3-4 large images on screen at once on a 4 GB iPhone |
| `preload="auto"` on the hero video + 4.37 MB PNG poster | LCP > 4 s on 4G; poster arrives after the fold is painted | `preload="metadata"`; poster → WebP < 80 KB | Every mobile visit on cellular data — i.e. most recruiters |
| `mix-blend-mode` on a viewport-sized overlay | Video compositing degrades; Safari scroll stutter | Scope blend modes to sections; prefer `opacity` | iOS Safari specifically |
| React state update per `mousemove` (`index.tsx:613-627`) | CPU pegged on desktop while moving the mouse | Mutate `style.transform` via ref, or `requestAnimationFrame` | Already happening — slated for removal with the custom cursor |
| 3 eager YouTube iframes + 1 CreateJS iframe on one project page | Project page loads several MB of third-party JS before content | `loading="lazy"` on all iframes; click-to-load façade for YouTube | The SkøllRub page, today |
| `will-change` applied broadly to fix jank | Jank gets *worse*; memory pressure on mobile | Cap at ≤ 2 promoted elements | ~10+ promoted layers on mobile |
| 8 process videos at 1080p50 inside a 384 px-tall iframe | ~100 MB of video for a panel a few hundred px tall | Re-encode the animate videos to the **iframe's actual display size**, not 1920×1080 | Already: `empattage.mp4` is 22.37 MiB, second-closest asset to the 25 MiB cap |

---

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Leaving EmailJS unrestricted at the dashboard level | Anyone can call `emailjs.send("service_mkurl73", "template_b9lcxkl", …)` from a console and burn the free-tier quota; the contact form then **silently fails** for real recruiters during the job hunt | Domain allowlist + rate limit **in the EmailJS dashboard**. Moving IDs to `VITE_*` env vars does not mitigate this (they still ship to the client) |
| No spam protection on the form | Inbox flooded; quota exhausted | Honeypot input + submit throttle. Both are ~10 lines, no dependency |
| Shipping `.fla` / `.ai` / `~ai-*.tmp` / `RECOVER_*` from `public/` | Editable source files for a **graded university group project** are publicly downloadable — a plagiarism/academic-integrity exposure, plus it exposes group members' names | Move to an untracked `design-sources/` outside `public/`. Note the `.fla` files carry other students' names (`2_SOPHIA.fla`, `2_CLEMENT.fla`) |
| Personal data in shipped assets | `Capture d’écran … .png` and `mockup.jpg` are unreferenced but **publicly fetchable** at their URL — nothing "hides" an unlinked file in `public/` | Delete rather than unlink. Unreferenced ≠ private |
| Using Adobe / software logos in the skills grid | Trademark misuse; Adobe's brand guidelines forbid third-party use of product logos | Use **named, styled text chips** as the default (they also cannot 404). If Lyna supplies logos, keep them monochrome and un-modified, and be ready to swap back |
| Third-party CDN script with no SRI (`code.createjs.com`) | Supply-chain risk and a single point of failure for the flagship project | Vendor it locally |

---

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Hero video that doesn't play on iPhone (Pitfall 1) | The "3 seconds to understand she does video" promise fails for **most** recruiters, who open links on a phone | 8-bit H.264 + a genuinely good poster; detect the rejected `play()` promise and show a tasteful "▶" affordance rather than a frozen still |
| Assuming muted autoplay always works | iOS **Low Power Mode blocks autoplay even when muted**, and Safari injects its own play button — you cannot guarantee autoplay on iPhone | Handle the rejected promise (already partially done at `index.tsx:249`) and make the poster state look intentional, not broken |
| Broken media shipped to a recruiter | `festival-flyer.jpg`, `festival-goodies.jpg`, `extraitpubSAE1.mp4` render as broken elements **right now**. On a portfolio, a broken image reads as "doesn't finish things" — the opposite of the hiring signal | Fix or remove before anything else. Add `onError` fallbacks so a future 404 degrades gracefully |
| Marking the festival project "terminé" while its images are missing | Claiming a finished project that visibly isn't undercuts credibility more than an honest "en cours" | Extract the charte pages **first**, flip the status **second** |
| AI-generic copy and stock-feeling visuals | An MMI communication candidate is judged precisely on voice; generic copy is the fastest way to look interchangeable | Already handled correctly: `PROJECT.md` reserves all copy for Lyna. **Keep placeholder text obviously fake** (`[TITRE — 6-9 mots, annonce la spécialité vidéo]`) so a placeholder can never ship as real text |
| Unnamed logo placeholders | Broken image icons in the skills grid | Render a styled text chip by default; upgrade to an image only when the file exists |
| Cinematic overlay swallowing clicks | Recruiter cannot click projects or the contact form; they leave | `pointer-events: none` on every decorative layer; click-test every section on a touch device |
| Font-swap layout shift with expressive serif display type | Title reflows during the "opening credits" moment — exactly the 3 seconds that matter | `font-display: optional` or `swap` + preload the display face; reserve space with `size-adjust` |
| Skipping mobile QA under deadline pressure | Most of these pitfalls are **mobile-only and invisible on the dev machine** | One mandatory pass on a real iPhone against the **deployed** URL before declaring done |

---

## "Looks Done But Isn't" Checklist

- [ ] **Video re-encode:** often missing 8-bit output — verify `ffprobe … -show_entries stream=profile,pix_fmt` prints `high` / `yuv420p`, **not** `High 10` / `yuv420p10le`
- [ ] **Video re-encode:** often missing faststart — verify `moov` precedes `mdat` in the first 200 KB, don't just trust the flag
- [ ] **Video re-encode:** hero is muted — verify the audio track was actually dropped (`-an`); `hero.mp4` currently ships a 44.1 kHz stereo AAC track nobody hears
- [ ] **Video re-encode:** CV video keeps its audio — verify the track survived **and** that loudness wasn't changed (`ffmpeg -af loudnorm=print_format=summary` before/after)
- [ ] **Asset deletion:** verify with a **URL-decoding, NFC/NFD-aware** check, not plain grep — `/assets/palette%20de%20couleurs.png` is a live file a naive script calls dead
- [ ] **Asset deletion:** verify the SkøllRub animation still plays **through all 6 scenes** by clicking inside the iframe, not by loading the page
- [ ] **Asset deletion:** verify `bun run build` still passes — `@/assets/portrait.jpg` is a real Vite import inside the "duplicate" directory
- [ ] **Dependency removal:** verify `bun run build` **after** `bun install`, not just after editing `package.json`
- [ ] **Size goal:** verify against **`dist/`**, not `public/` — and confirm with `wrangler deploy --dry-run`; a green `bun run build` proves nothing about the 25 MiB cap
- [ ] **Image optimization:** verify **dimensions**, not just bytes — `chartegraphique_SkollRub.png` is 3 MB *and* 45 MP
- [ ] **Image optimization:** verify logos/labels kept their alpha and didn't gain a white box
- [ ] **Image optimization:** verify `logoprincipal.png`'s bogus `"Color LCD"` ICC profile was converted to sRGB, not blindly preserved
- [ ] **Hero:** verify the **poster** is small and modern-format — it is the LCP, and on iOS it may be all anyone sees
- [ ] **Cinematic effects:** verify every fixed overlay has `pointer-events: none` by clicking through every section on a touch device
- [ ] **Cinematic effects:** verify `prefers-reduced-motion` actually stops the motion (macOS: System Settings → Accessibility → Display → Reduce motion)
- [ ] **Cinematic effects:** verify scroll FPS on a real phone, not in responsive mode
- [ ] **Project data:** verify every `thumbnail` / `media` / `video` path in `projects.ts` resolves to a real file
- [ ] **Contact form:** verify a test email actually **arrives**, after any EmailJS dashboard change
- [ ] **Skills grid:** verify missing logos degrade to text chips rather than broken-image icons
- [ ] **Git:** verify `du -sh .git` did not grow during the media phase

---

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| 10-bit video shipped | **LOW** | Re-encode from the original with `-pix_fmt yuv420p`, redeploy. Cheap **if originals were backed up** — otherwise you re-encode an already-compressed file and lose a generation |
| Missing faststart | **LOW** | `ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4` — lossless, seconds |
| Deleted a needed Animate file | **LOW** (if committed) / **HIGH** (if never committed) | `git checkout HEAD~1 -- public/animate/…`. Untracked files are gone — hence the quarantine rule |
| Over-compressed / colour-shifted media, originals gone | **HIGH** | Unrecoverable without the source exports. Mitigation must be **preventive**: off-repo backup before the first batch |
| 22.5 MiB PDF committed to history | **HIGH** | `git filter-repo --path public/assets/charte_graphique.pdf --invert-paths` + force-push; rewrites every hash. **Avoid by never committing it** |
| Deploy rejected for exceeding 25 MiB | **MEDIUM** under deadline | Re-encode the offender, rebuild, redeploy. Costly only because it surfaces at the last moment — which is exactly why the check must run from day 1 |
| Cinematic redesign tanks mobile performance | **MEDIUM** | Effects must be **feature-flagged from a single CSS layer / root class** so the whole look can be disabled in one edit. Without that seam, recovery means unpicking effects from every component |
| Redesign half-finished at the deadline | **HIGH** | Prevent by sequencing: cleanup + media land and deploy **first** (a faster site with working media is already shippable). Redesign proceeds section by section on a branch, each section independently mergeable |
| CreateJS CDN down | **LOW** | Vendor `createjs.min.js` locally — 5 minutes, removes the failure mode entirely |

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| PDF / intermediate encodes entering git history | **Cleanup (day 1, first task)** | `git log --stat` shows no multi-MB binary added; `du -sh .git` flat |
| Animate 6-scene chain broken by deletion | **Cleanup** | Click through all 6 scenes in the iframe; no 404s in Network tab |
| Wrong duplicate video copy deleted | **Cleanup** | `public/animate/videos/*.mp4` present; root `public/animate/*.mp4` gone; videos play in-animation |
| Per-scene atlas folders consolidated | **Cleanup** | `images/`, `imagesImad/`, `imagesframe2/` all still present; no missing-atlas errors |
| Live assets deleted by naive grep audit | **Cleanup** | Decode-aware audit script committed; `_quarantine/` step used before deletion |
| `src/assets` deleted wholesale | **Cleanup** | `bun run build` passes; portrait renders |
| 42 MB spent re-encoding two orphan files | **Cleanup (before Media)** | `affichepromo.png` / `prévention.png` confirmed unreferenced and removed from the media work list |
| Dependency/file removal order breaking the build | **Cleanup** | `bun run build` green after each of the two removal steps |
| Broken media references shipped | **Cleanup → Data model** | Asset-integrity script validates every path in `projects.ts`; 0 failures |
| 10-bit hero video | **Media** | `ffprobe` prints `high` + `yuv420p` for every shipped video |
| Missing faststart | **Media** | `moov` before `mdat` for every shipped video |
| Originals lost | **Media (pre-flight)** | Off-repo backup exists and is verified readable **before** the first encode |
| Chroma/ICC/alpha damage on posters and logos | **Media** | Photo vs graphic buckets defined; SSIM ≥ 0.98 or manual 100 % A/B; sRGB normalised |
| Dimension-driven mobile memory blowups | **Media** | No shipped image > 2400 px long edge; dimension audit script passes |
| 4.37 MB PNG hero poster | **Media + Redesign** | Poster < 80 KB, WebP/AVIF; LCP < 2.5 s throttled |
| Grain / blend-mode performance collapse | **Redesign** | ≥ 50 FPS scroll on a real phone with 4× CPU throttle |
| Overlays swallowing clicks | **Redesign** | Every section click-tested on a touch device |
| No `prefers-reduced-motion` | **Redesign** | Motion actually stops with the OS setting enabled |
| SSR hydration mismatch from cinematic effects | **Redesign** | Clean console on a production build; no hydration warnings |
| Logo placeholders rendering as broken images | **Redesign** | Every missing logo shows a styled text chip |
| YouTube privacy / eager iframes | **Redesign** | `youtube-nocookie` + `loading="lazy"` on all 3 embeds |
| CreateJS CDN single point of failure | **Cleanup or Redesign** | No external `<script src>` in `public/animate/*.html` |
| EmailJS abuse / spam | **Redesign (contact section)** | Dashboard allowlist + rate limit configured; honeypot present; test email received |
| 25 MiB deploy rejection | **Verification (check introduced in Phase 1)** | `find dist -type f -size +20M` empty; `wrangler deploy --dry-run` clean |
| Scope creep / unshippable at deadline | **All phases** | Cleanup + media deployed to production **before** redesign work begins; each redesign section independently mergeable |

---

## Sources

**Verified locally in this repository (HIGH confidence — directly observed, 2026-09-21):**
- `ffprobe` on `public/videos/*.mp4` and `public/animate/videos/*.mp4` — codec profiles, pixel formats, bitrates, audio tracks
- Byte-level `moov`/`mdat` box-order scan — faststart status per file
- `magick identify` on `public/assets/*` and `src/assets/*` — dimensions, colorspace, ICC profiles, opacity
- `grep` of `public/animate/*.js` — `window.open()` navigation graph, `videos/*.mp4` and atlas path references
- `shasum` comparison of the 16 duplicated animate videos and of `src/assets` vs `public/assets` (63/65 identical)
- Decode-aware reference audit of every `/assets/` and `/videos/` URL string in `src/`
- `git status` (untracked 22.53 MiB `charte_graphique.pdf`), `du -sh .git` (333 MB)

**Official documentation (HIGH confidence):**
- [Cloudflare Workers platform limits](https://developers.cloudflare.com/workers/platform/limits/) — 25 MiB/file; 20,000 files free / 100,000 paid
- [Increased static asset limits for Workers (changelog)](https://developers.cloudflare.com/changelog/post/2025-09-02-increased-static-asset-limits/) — requires Wrangler ≥ 4.34.0
- [Cloudflare Workers static assets — billing and limitations](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)
- [TanStack Start — Hydration Errors](https://tanstack.com/start/latest/docs/framework/react/guide/hydration-errors) — `<ClientOnly>`, Selective SSR, `useEffect` guards
- [Mozilla bug 1743824](https://bugzilla.mozilla.org/show_bug.cgi?id=1743824) — `yuv420p10le` H.264 playback inconsistency across platforms
- [WebKit bug 219889](https://bugs.webkit.org/show_bug.cgi?id=219889) — iOS Low Power Mode and autoplay controls
- [cloudflare/kv-asset-handler#63](https://github.com/cloudflare/kv-asset-handler/issues/63) — iOS video / range-request issues on Workers-served assets
- [lovell/sharp#4008](https://github.com/lovell/sharp/issues/4008) — P3 → AVIF ICC handling

**Secondary / community (MEDIUM confidence, cross-checked across ≥ 2 sources):**
- [MP4 not playing in browser: four encoder flags](https://www.ffmpeg-micro.com/blog/mp4-not-playing-in-browser-four-encoder-flags-fix-it) — `yuv420p`, profile/level, moov position, audio codec
- [FFmpeg faststart — video that won't start until fully downloaded](https://ffmpeg-cookbook.com/en/articles/ffmpeg-faststart-web-playback/)
- [Adobe Media Encoder — moov atom feature request](https://community.adobe.com/t5/adobe-media-encoder-discussions/how-to-add-moov-atom/td-p/4609449) — why Adobe exports are moov-at-end
- [CSS-Tricks — Grainy Gradients](https://css-tricks.com/grainy-gradients/) and [CSS noise textures guide](https://ultimatedesigntools.com/blog/css-noise-textures-guide/) — `feTurbulence` CPU repaint cost, `mix-blend-mode` and Safari rasterisation
- [Best settings for AVIF encoding](https://openaviffile.com/best-settings-for-avif-encoding/) and [chroma subsampling support for AVIF](https://avifstudio.com/blogs/faq/chroma-sub-sampling-support-for-avif/) — q70-80 @ 4:2:0 photos, q80-85 @ 4:4:4 graphics/text
- [ICC profile: the metadata you should not strip](https://exifviewer.com/blog/icc-profile-what-it-is-why-keep-it) and [washed-out thumbnails: it's the ICC profile](https://dev.to/iterandum/your-thumbnails-look-washed-out-its-the-icc-profile-not-jpeg-quality-4mh7)
- [youtube-nocookie explained](https://swarmify.com/blog/what-is-youtube-nocookie/), [CNIL-aligned YouTube embedding](https://www.flowconsent.com/en/blog/youtube-nocookie-embed-videos-without-cookies-gdpr) — nocookie still writes `yt-remote-device-id`; click-to-load is the reference pattern
- [HTML autoplay video and iOS Low Power Mode](https://milkmidi.medium.com/html-autoplay-video-and-ios-low-power-mode-818dbdc982a0)
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) / git-filter-repo — history rewriting cost and hash-invalidation consequences

---
*Pitfalls research for: creative/audiovisual portfolio cleanup + media optimization + cinematic redesign on TanStack Start / Cloudflare Workers*
*Researched: 2026-09-21*

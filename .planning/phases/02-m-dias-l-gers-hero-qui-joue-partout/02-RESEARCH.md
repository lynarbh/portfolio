# Phase 2: Médias légers & hero qui joue partout - Research

**Researched:** 2026-09-28
**Domain:** Offline media pipeline (sharp + ffmpeg + Ghostscript), responsive images in React 19 / TanStack Start, HTML5 video on iOS, Cloudflare Workers static assets
**Confidence:** HIGH on the measured facts (every size, SSIM and hash below was produced on this machine from the real masters). MEDIUM on the final quality values, which still need Lyna's visual A/B.

## Summary

Everything below was measured on the real files. The raw notes and test encodes are in `/private/tmp/claude-501/-Users-lynouchrbh-Dev-portfolio/c2e1b255-1370-4ae6-91cd-bbfdabee7496/scratchpad/phase2-research/`.

Three findings change the plan:

1. **Range requests are the real iPhone blocker.** Cloudflare Workers Static Assets ignore the `Range` header. They always answer `200` with the full body. This was verified three ways: production `lynarebahi.fr/videos/hero.mp4` with `Range: bytes=0-1023` returns `HTTP/2 200` and 10,795,806 bytes; local `wrangler dev` does the same; and the bundled asset worker (`node_modules/miniflare/dist/src/workers/assets/assets.worker.js`) has no range code. Safari and iOS will not play a `<video>` without `206 Partial Content`. So re-encoding the hero alone will **not** make it play on iPhone. The CV video and the 8 SkøllRub videos inside the Animate iframe have the same problem. The fix was prototyped and verified locally:
   - a 25-line custom server entry `src/server.ts`;
   - `assets.run_worker_first` for video paths;
   - the Cache API, whose `match()` returns 206 slices.

   `tsc` passes, `vite build` passes, `wrangler deploy --dry-run` passes, and curl gets `206` + `Content-Range`.
2. **The < 60 MB budget does not fit with one locked decision.** Keeping the 8 SkøllRub videos at "même résolution" (1920×1080) means ~70 MB for those videos alone at CRF 24, or ~35 MB even at 1080p CRF 28. At 1280×720, 25 fps, CRF 30 they take 12.3 MiB, and the whole of `public/` lands at about 57 MiB. They are shown at about 555 CSS px (≤ 1110 device px) inside the Animate stage. At that size 720p @ 450–800 kb/s scores SSIM 0.965–0.976, versus 0.947 for 1080p at the same bitrate. **The planner must get Lyna's OK on 720p for the process videos**, or SIZE-08 cannot be met.
3. **Two master facts contradict CONTEXT.** First, `hero.mp4`'s only master is **1080×574** (Dolby Vision 8.4 / HLG, 60 fps), not 1920×1080. There is no better source anywhere in `media-src/`, so the output stays at native 1080×574 and is never upscaled. Second, a poster at "≈ 1600 px, < 80 KB" is impossible for the same reason. Frame 0 (waterfall + foliage) at native 1080 px is 104 KB as WebP q60. Either accept ≤ 110 KB or drop to 800 px (69 KB).

Measured, recommended values:
- **Hero:** 1080×574, 30 fps, `colorspace` HLG → bt709, CRF 32, preset slow → 3,781,191 bytes (≤ 4 MB). SSIM 0.915 against the converted lossless reference. The content is a worst case (moving water) and sits under a 55–85 % plum gradient.
- **CV video:** CRF 29 + AAC 128k + faststart → 10.6 MB, SSIM 0.9926 against the source.
- **Images:** 57 existing images + 14 Tafsut pages ≈ 22 MiB with AVIF effort 4 and one 640 px fallback. A 1200 px fallback would add +7 MiB.
- **Determinism:** CRF single-pass is byte-deterministic; two-pass is **not**. Ghostscript and sharp are byte-deterministic.

**Primary recommendation:** Build `scripts/media.mjs` around a hand-written `media-src/manifest.json`, with single-pass CRF video and sharp AVIF effort 4 + one 640 px fallback. Add the Range-capable `src/server.ts` before the first deploy. Get Lyna's sign-off on process videos at 720p, the hero at native 1080×574, and a poster of about 100 KB before the batch run.

## User Constraints (from CONTEXT.md)

### Locked Decisions

**Pipeline média & manifeste**
- Sources dans `media-src/<projet>/…` (masters, gitignoré) → dérivés dans `public/media/<projet>/<nom-kebab>.{avif,webp,jpg|png}` et `public/media/video/…` — miroir par projet, lisible dans le repo
- `src/data/media.generated.ts` = objet typé par identifiant : largeur/hauteur intrinsèques, `srcset` par format (640/1200/2400), image de repli, preset, poster pour les vidéos ; généré, jamais édité à la main (même statut que `routeTree.gen.ts`) ; consommé par un seul composant `<Picture>`
- Classification photo vs graphique dans un `media-src/manifest.json` écrit à la main : projet, preset, pages PDF à extraire, ordre de galerie ; preset par défaut `graphic` (4:4:4, le plus sûr)
- Sortie déterministe (métadonnées retirées, options d'encodage figées, pas de timestamp) + cache par hash de source dans `media-src/.cache.json` pour ne pas réencoder l'inchangé ; `npm run media` manuel, jamais dans `check`/`build`/Cloudflare ; deux exécutions successives → fichiers identiques

**Hero vidéo & lecture mobile**
- Sortie 1920×1080, 30 fps, H.264 High 8 bits `-pix_fmt yuv420p`, filtre `colorspace=all=bt709:iall=bt2020:itrc=bt2020-10` (HLG bt2020 → SDR bt709), muet (`-an`), `-movflags +faststart` ; CRF choisi par A/B visuel (≈ 24–26, preset slow) pour tenir ≤ 4 Mo
- Poster = première image de la sortie SDR convertie → WebP ≈ 1600 px, < 80 Ko, `fetchpriority="high"` ; vidéo en `preload="metadata"` ; le PNG de 4,4 Mo disparaît
- Autoplay refusé (iOS mode éco, `prefers-reduced-motion`) : poster affiché + bouton lecture/pause toujours visible en coin (icône + libellé lisible par lecteur d'écran, `aria-pressed`, focus clavier) ; avec `prefers-reduced-motion` on n'autoplay pas et on laisse le poster
- `muted playsInline loop`, mise en pause quand l'onglet est caché (`visibilitychange`), aucune piste audio dans le fichier

**Images — presets et rendu**
- Largeurs `srcset` : 640 / 1200 / 2400 px de grand côté, jamais agrandi au-delà de la source ; les tuiles de grille reçoivent ≤ 1200
- Photos : AVIF 4:2:0 + WebP + JPEG de repli ; graphiques (affiches, logos, planches, mockups) : AVIF 4:4:4 + PNG quantifié de repli, jamais de WebP lossy ; le script imprime un score SSIM (ffmpeg `ssim`) par fichier et alerte sous un seuil ; sRGB puis ICC retiré ; `.rotate()` en tête (EXIF)
- Renommage automatique en kebab-case ASCII (`skøllrub_logo_final.png` → `skollrub-logo-final`) ; `projects.ts` et les branches de `$projectId.tsx` référencent les identifiants du manifeste, plus de chemins en dur vers `public/assets/`
- `loading="lazy"` + `decoding="async"` partout sauf le hero ; `width`/`height` intrinsèques pour éviter les sauts de mise en page ; seul le hero est préchargé

**Charte Tafsut, vidéos process & mise en ligne**
- ~10 pages du PDF (logo, palette, typos, affiche, billets, goodies, signalétique) listées dans `manifest.json`, rendues par Ghostscript `gs` à 300 dpi puis preset graphique ≤ 2400 px ; galerie sur la page « Identité d'un festival », `inProgress` retiré ; le PDF quitte `public/` (reste dans `media-src/`, jamais commité)
- Vidéo CV : résolution d'origine, CRF ≈ 23, AAC 128 kbit/s, `yuv420p`, `+faststart`, ≤ 12 Mo, vérifié par ffprobe
- 8 vidéos process SkøllRub : même nom, même dossier `public/animate/videos/`, même résolution, 25 fps, CRF ≈ 24, ≤ 12 Mo chacune ; chaîne des 6 scènes rejouée en local ensuite (`wrangler dev`)
- Premier déploiement réel en fin de phase, après `npm run check` vert et liste d'exceptions vide : `npm run deploy`, puis contrôle curl de `lynarebahi.fr` (accueil + 9 pages projet, hero, poster) ; rollback documenté (`wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4`) ; test iPhone réel par Lyna quand elle peut (UAT)

### Claude's Discretion
- Structure interne de `scripts/media.mjs` (modules, format du rapport, seuil SSIM) et du composant `<Picture>`
- Valeurs finales de qualité (CRF, quality AVIF/WebP) validées par A/B sur les vrais fichiers
- Choix exact des ~10 pages Tafsut (numéros) et ordre de galerie
- Suppression du reliquat `components.json` (config shadcn sans consommateur) si elle tombe sous la main
- Ordre des commits (un commit par sous-objectif, `npm run check` vert entre chaque) ; les itérations d'encodage se font hors repo (scratchpad / `media-src/`), seuls les dérivés finaux sont commités

### Deferred Ideas (OUT OF SCOPE)
- Cadre écran / générique / positionnement du hero, showreel, métadonnées de coins → phase 3
- Logos par projet, process strip, `affichepromo.png` / `prévention.png` (projet d'accueil à choisir par Lyna, SIZE-09) → phase 4
- `_headers` (cache immutable pour `public/media/**`, CSP), SRI sur CreateJS, `youtube-nocookie` + `loading="lazy"` sur les iframes YouTube → phase 5 / v2
- Nettoyage Prettier global (609 erreurs préexistantes), `@types/node` 22 vs Node 24, `wrangler`/`knip` en devDependencies → hors milestone, tâche quick
- Sous-titres de la vidéo CV → v2

### Locked decisions that the evidence contradicts (need Lyna's confirmation, do not silently override)

| Locked value | Measured reality | Recommendation |
|---|---|---|
| Hero "Sortie 1920×1080" | Only master = 1080×574 (`media-src/public/videos/hero.mp4`, hash-identical to `public/videos/hero.mp4`) [VERIFIED: ffprobe + sha1] | Output at native 1080×574. Upscaling adds bytes and no detail. |
| Hero CRF "≈ 24–26" for ≤ 4 Mo | CRF 24 → 11.83 MiB, CRF 26 → 9.32 MiB, CRF 32 → 3.61 MiB (3,781,191 B) [VERIFIED: test encodes] | CRF 32, preset slow. This is the only single-pass value that fits 4 MB. A/B under the real overlay. |
| Poster "≈ 1600 px, < 80 Ko" | Source is 1080 px wide. WebP 1080w q60 = 104 KB, q50 = 96 KB, 800w q70 = 69 KB. AVIF 1080w q50 = 74 KB, but a `poster` takes one URL and AVIF there is not universally safe [VERIFIED: sharp test] | 1080w WebP q60 (≈ 100 KB). Raise the budget to ≤ 110 KB. The alternative is 800w q70 (69 KB, softer on desktop). |
| CV "CRF ≈ 23" for ≤ 12 Mo | CRF 23 extrapolates to ~21–28 MB from a 20 s sample (no smaller than the 24.2 MB source). CRF 29 → 10,608,352 B, SSIM 0.9926 [VERIFIED] | CRF 29 (or 28 if it still measures ≤ 12 MB). |
| Process videos "même résolution, CRF ≈ 24, ≤ 12 Mo chacune" | 1080p25 CRF 24 on `empattage` = 15.3 MB (fails ≤ 12 MB on its own), whole set ≈ 70 MB, so `public/` ≈ 115 MB [VERIFIED] | **1280×720, 25 fps, CRF 30, AAC 64k → 12.3 MiB for all 8** (max 3.53 MB). This is the only way to satisfy SIZE-08. Needs Lyna's OK. |

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SIZE-01 | `scripts/media.mjs` (sharp + ffmpeg + Ghostscript) régénère reproductiblement `public/media/**` + `src/data/media.generated.ts` depuis `media-src/` | Manifest schema, generated TS shape and cache design (§Architecture). Determinism is verified for sharp (all 4 formats), CRF x264 (+bitexact) and gs. Two-pass is **not** deterministic, so do not use it. |
| SIZE-02 | ≤ 2400 px, sRGB then ICC stripped, two presets, kebab-case, `<picture>` + `srcset` | Presets measured on all 57 images (§Standard Stack). The P3 → sRGB conversion was verified against `sips`. Found: alpha images, PNG-in-`.jpg`, 18 images over 2400 px. |
| SIZE-03 | Hero HLG → SDR bt709, 8-bit, 30 fps, muet, faststart, ≤ 4 Mo, poster | Exact ffmpeg command, CRF 32 = 3.78 MB, colour tags verified. The `colorspace` filter has no HLG trc (approximation, see Pitfall 3). |
| SIZE-04 | CV ≤ 12 Mo, yuv420p, faststart, AAC | CRF 29 → 10.6 MB, SSIM 0.9926 |
| SIZE-05 | Process videos 25 fps, yuv420p, faststart, ≤ 12 Mo each, relative `videos/*.mp4` kept | 720p CRF 30 → 12.3 MiB total. The Animate scenes load `videos/<name>.mp4` (5 scenes, 8 files), `muted:false`, so the audio is kept. |
| SIZE-06 | ~10 Tafsut pages via `gs` 300 dpi, graphic preset, PDF out of `public/` | 32-page A4-landscape PDF catalogued (page map below). gs command verified and deterministic. The PDF is **already** absent from `public/` (gitignored). 14 candidate pages ≈ 4.1 MiB. |
| SIZE-08 | `public/` < 60 Mo, lazy off-screen, only the hero preloaded | Budget table ≈ 57 MiB (§Budget). `head()` preload link verified in TanStack source. Guard extension proposed. |
| HERO-01 | Hero plays on iPhone / Android / desktop, muted, playsInline, light poster, accessible pause | **Range fix required** (Pitfall 1). Playback state machine code (§Code Examples). React 19 SSR renders `muted=""` [VERIFIED]. |
| PROJ-06 | « Identité d'un festival » shows the Tafsut gallery, `inProgress` removed | Page selection + order; the generic `project.media` gallery renders it (UI-SPEC). |
| PROJ-07 | `project.id === "…"` branches kept, pointing at `public/media/**` | Full line inventory of the 55 `<img>` / URL references (§Migration map). |

## Project Constraints (from CLAUDE.md)

- npm only (bun not installed). Stack is TanStack Start + Tailwind v4 + the Lovable Vite config. **Do not re-add plugins** that `@lovable.dev/vite-tanstack-config` already bundles.
- Cloudflare Workers: 25 MiB per asset (hard). Every video must stay under it with margin.
- Médias: nothing deleted, nothing visibly degraded. Only visually lossless re-encodes.
- Copy is written by Lyna. The code ships slots and French functional labels only.
- Palette and fonts are kept. No new colour, font or token.
- Generated files are never hand-edited (`routeTree.gen.ts`, and now `media.generated.ts`).
- `@/*` imports, named exports, PascalCase components, SCREAMING_SNAKE module constants, French UI copy, English identifiers.
- Unused code is not caught by `tsc` or ESLint (`noUnusedLocals: false`, rule off). Dead references must be removed deliberately.
- **`cn()` no longer exists.** `src/lib/utils.ts`, `clsx` and `tailwind-merge` were removed in phase 1. UI-SPEC says "className via `cn()`". Implement it with `[base, className].filter(Boolean).join(" ")` instead. Do **not** reinstall clsx or tailwind-merge.
- GSD workflow: repo edits only via `/gsd-execute-phase`.
- `npm run lint` is red from 609 pre-existing Prettier errors (out of scope). Do not use lint as a gate. Use `npx prettier --check <changed files>`.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|---|---|---|---|
| Media encoding (sharp / ffmpeg / gs) | Dev machine (offline script) | — | Native binaries, minutes of CPU. Never on the Cloudflare build path (locked). |
| Media manifest (`media.generated.ts`) | Build-time static data (bundled TS) | Browser (consumed by `<Picture>`) | Pure data: dims, srcsets, fallback. No runtime I/O. |
| `<picture>` / `srcset` selection | Browser | SSR (renders markup) | The browser picks the candidate from `sizes` × DPR. SSR must emit identical markup (no client-only branches). |
| Hero play / pause / reduced motion | Browser (effects after hydration) | SSR (renders the paused state) | `matchMedia`, `play()` and `visibilitychange` exist only client-side. SSR renders `paused` to avoid a hydration mismatch. |
| Poster preload | Frontend server (SSR `<head>` via route `head()`) | — | Must be in the initial HTML so it works as the LCP hint. |
| Byte-range (206) for videos | Edge Worker (`src/server.ts`) + Cache API | CDN / static assets | Static assets cannot do Range. The Worker must intercept video paths (`run_worker_first`). |
| Static file serving (images, JS) | CDN / static assets | — | Unchanged. |
| Size / format guard | Dev machine (`npm run check`) | — | `check-assets.mjs` on `dist/client`. |

## Standard Stack

### Core
| Tool | Version | Purpose | Why |
|---|---|---|---|
| `sharp` (devDependency, exact pin) | **0.35.4** (published 2026-08-26). 0.35.5 came out 2026-09-27, one day before this research. | Resize, sRGB conversion, AVIF / WebP / JPEG / PNG-palette encode, metadata | [VERIFIED: npm registry, installed in scratchpad, libvips 8.18.6, aom 3.15.0, mozjpeg, imagequant]. No install/postinstall scripts (prebuilt `@img/*` optional deps). Footprint on macOS arm64: 17 MB libvips + 0.3 MB binding (+8.8 MB `@img/sharp-wasm32` that npm also pulled in the scratchpad). Already present transitively at 0.34.5 via miniflare, so the explicit pin is needed. |
| ffmpeg / ffprobe | 8.1.1 (`/opt/homebrew/bin`) | H.264 encode, `colorspace` HDR → SDR, poster frame, SSIM | [VERIFIED: local]. `libx264`, `aac`, `colorspace`, `ssim` present. `zscale`, `libplacebo` and a usable `tonemap` chain are absent. |
| Ghostscript `gs` | 10.07.1 | PDF page → PNG at 300 dpi | [VERIFIED: local]. Output is byte-deterministic for identical flags. |
| Node | v24.15.0 | Runs `scripts/media.mjs` (ESM, `import.meta.dirname`) | Matches the existing scripts' style. |

### Supporting (already present, no install)
| Tool | Purpose |
|---|---|
| `wrangler` 4.82.2 (transitive via `@cloudflare/vite-plugin`, in `node_modules/.bin`) | `wrangler dev --port 8787`, `deploy --dry-run`, `deploy`, `rollback`, `deployments list` |
| `magick` / `sips` | Inspection only (contact sheets, ICC names). Not in the pipeline. |
| `avconvert` (macOS) | Not usable: `PresetHighestQuality` kept HDR (High 10, HLG). Do not use. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|---|---|---|
| x264 CRF single-pass | Two-pass ABR (exact size) | Two-pass is **not byte-deterministic** here (same flags, same passlog name, different sha1), which breaks "deux exécutions → mêmes fichiers". CRF is deterministic. |
| AVIF effort 6 | effort 4 | effort 4 is 3–4× faster for +0–2 % bytes (measured on 5 images). A full run at effort 6 took 5 min 22 s for 57 images. Use 4. |
| Fallback at 1200 px | Fallback at 640 px | Fallbacks only reach non-AVIF browsers, but every byte counts in `public/`: 1200 px fallbacks = 11.1 MiB, 640 px = 3.9 MiB. |
| `colorspace` filter | `zscale` + `tonemap` / `libplacebo` | Not in this ffmpeg build (locked: use `colorspace`). |

**Installation (one command, exact pin):**
```bash
npm install --save-dev --save-exact sharp@0.35.4
```
Then add `"media": "node scripts/media.mjs"` to `package.json` scripts. Never add it to `check`, `build` or `deploy`.

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---|---|---|---|---|---|---|
| sharp@0.35.4 | npm | created 2013-08-20; 0.35.4 published 2026-08-26 | very high (not queried) | github.com/lovell/sharp (npm `repository.url`) | unavailable (`pip install slopcheck` failed) | Approved, tagged [ASSUMED] per protocol. Strong evidence: official docs cited in milestone STACK.md, already in the tree transitively (0.34.5), no install scripts. |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** none
*slopcheck was unavailable, so per protocol sharp is [ASSUMED]. The planner may add a `checkpoint:human-verify` before the install. Risk is very low.*

## Media Inventory (empirical)

### Masters
- Every file served from `public/` today has a **byte-identical** copy in `media-src/public/...` (and most also in `media-src/src/assets/`) [VERIFIED: sha1 map of all 70 files]. So the files currently in `public/` *are* the best masters. No higher-resolution originals exist.
- `media-src/` is a backup mirror (`public/`, `src/`, `quarantine/`, `prod-mirror-2026-09-01/`, `videos/`, `charte_graphique.pdf`). It is **not** yet organised as `media-src/<projet>/`.
- **Recommendation:** leave the backup untouched and add `media-src/<projet>/` folders filled by APFS clones (`cp -c`, zero extra disk). Alternatively, let `manifest.json` `src` fields point at `public/assets/<file>` under `media-src/`. The locked layout is `media-src/<projet>/…`, so clone into it.

### Images: 57 referenced (56 in `public/assets/` + `public/media/portrait.jpg`), plus 14 Tafsut page candidates

Facts that bite:
- **4 ".jpg" files are PNGs with alpha**: `Lyna.jpg`, `Joseph.jpg`, `Imad.jpg`, `media/portrait.jpg` (sharp `format=png`). Detect the format with `metadata().format`, never from the extension.
- **Alpha:** truly transparent (`stats().isOpaque === false`): `Lyna`, `Joseph`, `Imad`, `designcarterose`, `designcartechocolat`, `logoen8variantes`, `palette de couleurs`, `mockupcarterose`, `mockupcartechocolat` (and `logo.png`, which stays as is). All other alpha channels are fully opaque. Call `.removeAlpha()` on those to save bytes. Transparent images must fall back to **PNG** even under the photo preset, because JPEG has no alpha.
- **Display P3:** 30 files are macOS screenshots or exports tagged "Display P3" (`clip*`, `site*`, `maquette*`, `prototype*`, `logoprincipal/secondaire`, `SAE1/2`). sharp's default output converts P3 → sRGB correctly. Mean RGB of `logoprincipal` is 219.23/213.55/200.14 with sharp and 219.24/213.54/200.13 with `sips --matchTo sRGB`, versus 222.34/214.72/202.49 unconverted [VERIFIED].
- **Over 2400 px long edge (18):** `chartegraphique_SkollRub` 9047×5032, `site1-4` 2940 px, `logoprincipal/secondaire` 2704–2712, `designcarte*` 2873–2876, `Joseph` 3520, `Lyna` 3511, `affiche_sensibilisation` 3508, `Imad` 3094, `clip1-5` 2412–2468.
- No EXIF orientation anywhere except `flyer1/2` (orientation 1). `.rotate()` stays in front regardless.

### Master → project → derived id map (57)

| Project key (`public/media/<key>/`) | Masters (current `public/` URL) | Preset |
|---|---|---|
| `home` | `/media/portrait.jpg` → `portrait` | photo |
| `thumbnails` (shared; PROJ-01 splits them in phase 4) | `portfolio-thumbnail-01-branding`, `-02-flyers`, `-03-web`, `-04-video`, `SAE1` → `sae1`, `SAE2` → `sae2` | photo for the 4 portfolio thumbs (smooth 3D renders), graphic for SAE1/2 |
| `prototype-site-accessible` | `prototype1`, `prototype2` | graphic |
| `business-card-mockup` | `mockupcarterose`, `mockupcartechocolat` (photo, **alpha**, so PNG fallback), `designcarterose`, `designcartechocolat`, `logoen8variantes`, `palette de couleurs` → `palette-de-couleurs` (graphic, alpha) | mixed |
| `illustration-photoshop` | `affiche_sensibilisation_Lyna_Rebahi` → `affiche-sensibilisation-lyna-rebahi` | graphic |
| `portraits-illustration` | `Lyna.jpg` → `lyna`, `Joseph.jpg` → `joseph`, `Imad.jpg` → `imad` (vector art, alpha) | graphic |
| `clip` | `clip1` … `clip12` (film stills, P3) | photo |
| `sae-2` | `skøllrub_logo_final` → `skollrub-logo-final`, `chartegraphique_SkollRub` → `chartegraphique-skollrub`, `Etiquettes_SkøllRub_{Original,Angerboda,Cerisicide,Freya}-1` → `etiquettes-skollrub-*-1`, `moodboard_lyna` (photo collage, photo), `original1/2`, `angerboda1/2`, `cerisicide1/2`, `freya1/2` (posts with text on photo, graphic), `site1-4` (graphic) | graphic except moodboard |
| `sae-1` | `logoprincipal`, `logosecondaire`, `flyer1`, `flyer2`, `maquette1`, `maquette3`, `maquette4` | graphic |
| `festival-identite` | Tafsut PDF pages (below) | graphic |
| `video` | `hero.mp4`, `hero-poster.webp`, `56_Lyna_REBAHI_CVvideo.mp4` → e.g. `cv-lyna-rebahi.mp4` | — |
| (in place) `public/animate/videos/` | the 8 process videos, same names | — |

Kebab rule: `ø`/`Ø` do **not** decompose under NFKD, so map them explicitly. The rule is `name.normalize("NFKD").replace(/ø/g,"o").replace(/Ø/g,"O").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")`. Decode `%20` before this, and fail on duplicate ids. It was run on all 57 names with no collisions.

### Tafsut PDF (`media-src/charte_graphique.pdf`, 23,622,528 B, 32 pages, all 842×595 pt = A4 landscape → 3508×2480 px at 300 dpi)

| Page | Content | Page | Content |
|---|---|---|---|
| 1 | Couverture: logo Tafsut + "Racines & Renouveau" | 17 | Intercalaire 05 Typographies |
| 2 | Intercalaire 01 Direction | 18 | Cinzel Decorative (typo principale) |
| 3 | Concept (texte + photo) | 19 | DM Sans (typo secondaire) |
| 4 | Planning (tableau) | 20 | Cormorant Garamond (typo tertiaire) |
| 5 | Moodboard (collage photo) | 21 | Utilisation des typos (logo + hiérarchie) |
| 6 | Intercalaire 02 Logotype | 22 | Intercalaire 06 Supports communication |
| 7 | Pictogramme | 23 | Affiche + billet à plat |
| 8 | Zone de réserve du pictogramme | 24 | Affiche en situation (mockup escalier) |
| 9 | Logotype complet | 25 | Billets (mockup) |
| 10 | Zone de réserve du logotype | 26 | Intercalaire 07 Goodies |
| 11 | Intercalaire 03 Déclinaisons | 27 | Gobelets |
| 12 | Versions positive / négative | 28 | Tote bag |
| 13 | Variantes par pôle (5 couleurs) | 29 | Flacons (mockup) |
| 14 | Éléments graphiques / textures | 30 | Intercalaire 08 Signalétiques |
| 15 | Intercalaire 04 Couleurs | 31 | Food truck |
| 16 | Palette (principales + secondaires, CMJN / RVB) | 32 | Enseigne (drapeau mural) |

**Recommended 10 (in gallery order logo → palette → typos → affiche → billets → goodies → signalétique):** 1, 9, 16, 21, 24, 23, 25, 27, 28, 32.
**Optional extras (inserted next to their theme):** 12 or 13 (after 9), 31 (before 32). All 14 measured cost 3.13 MiB AVIF + 0.96 MiB PNG-640 fallbacks. Pages 24, 25, 27–29, 31 and 32 are photographic mockups, where the graphic preset costs more (page 24: 658 KB across 3 rungs).

## Size Budget (measured, MiB = 1,048,576 B)

| Item | Setting | Size |
|---|---|---|
| `public/animate/**` excluding videos (JS, images, components) | untouched | 8.40 |
| `favicon.ico` + `logo.png` | untouched | 0.30 |
| Hero MP4 | 1080×574, 30 fps, CRF 32, `-an` | 3.61 |
| Hero poster | WebP 1080w q60 | 0.10 |
| CV video | CRF 29, AAC 128k | 10.12 |
| 57 images | AVIF (640/1200/≤2400; photo q55 4:2:0, graphic q70 4:4:4), WebP for photos, one fallback at ≤ 640 px | ≈ 18.1 (AVIF 9.86 + WebP 4.18 + fallback 3.88, measured at effort 6; effort 4 is +0–2 %) |
| Tafsut, 14 pages | graphic preset + PNG-640 fallback | 4.09 (≈ 3.0 for 10 pages) |
| 8 process videos | 1280×720, 25 fps, CRF 30, AAC 64k | 12.30 |
| **Total `public/`** | | **≈ 57.0 MiB** (< 60 ✓, about 3 MiB margin) |

Budget levers (to free room if the A/B pushes a quality value up):
- process CRF 32 → 10.18 MiB (−2.1)
- drop the photo WebP 2400 rung
- graphic AVIF q65

Anything that keeps process videos at 1080p puts `public/` at roughly 75–115 MiB.

## Architecture Patterns

### System Architecture Diagram

```
 OFFLINE (dev machine, `npm run media`)                               REPO (committed)
 ┌──────────────────────────┐
 │ media-src/manifest.json  │── entries ─┐
 └──────────────────────────┘            ▼
 media-src/<projet>/*.png|jpg ──► [hash src + options] ──► cache hit? ──yes──► skip (output kept)
 media-src/charte_graphique.pdf         │ no
 media-src/.../videos/*.mp4             ▼
                                ┌──── kind? ────────────────────────────────┐
                           image│                pdf-page│             video│
                                ▼                        ▼                  ▼
            sharp: rotate → resize(inside, ≤2400,   gs -r300 page N      ffmpeg: [colorspace]
            no upscale) → srgb → [removeAlpha]      → tmp PNG → image    → fps → [scale] → x264 CRF
            → AVIF rungs (+WebP if photo)           branch (graphic)     → +faststart, bitexact
            → one fallback ≤640 (jpg | png)                               → hero: frame0 → sharp WebP
                                │                        │                  │
                                ▼                        ▼                  ▼
                        SSIM report (ffmpeg ssim, decoded AVIF vs resized ref) + warn < threshold
                                │
                                ▼
            public/media/<projet>/<id>-<w>.avif|webp, <id>.jpg|png   ───────►  public/media/**
            public/media/video/hero.mp4, hero-poster.webp, cv-….mp4             public/animate/videos/*.mp4
            public/animate/videos/<same name>.mp4
                                │
                                ▼
            src/data/media.generated.ts (sorted keys, no timestamp)  ───────►  bundled by Vite
            media-src/.cache.json (gitignored)

 RUNTIME
 Browser ──GET /──► Cloudflare Worker (src/server.ts)
                     ├─ path matches /media/video/*.mp4 | /animate/videos/*.mp4 (run_worker_first)
                     │     └─► caches.default.match(req) ──hit──► 206 slice
                     │            └─miss─► env.ASSETS.fetch(full 200) → cache.put → match → 206
                     └─ everything else ─► TanStack Start handler (SSR HTML with <head> preload of poster)
 Static assets (images, JS, CSS) served directly by Workers Static Assets (no Worker hop)
 Browser: <picture> picks the AVIF/WebP rung from sizes×DPR; Hero effect → play() | stay on poster
```

### Recommended Project Structure
```
scripts/
├── media.mjs                 # entry: load manifest, walk entries, cache, write outputs, write TS, report
├── media/                    # optional split if media.mjs > ~300 lines
│   ├── images.mjs            # sharp presets + ladder
│   ├── video.mjs             # ffmpeg argument builders per class (hero | cv | process)
│   ├── pdf.mjs               # gs page render → tmp PNG
│   └── report.mjs            # SSIM + size table + budget
├── check-assets.mjs          # + total budget rule (≤ 60 MiB), exceptions list emptied
└── inventory-assets.mjs      # unchanged (already validates /media/... literals in media.generated.ts)
media-src/                    # gitignored
├── manifest.json             # hand-written
├── .cache.json               # generated
└── <projet>/…                # APFS clones of the masters
src/
├── server.ts                 # NEW: Range-capable entry wrapping TanStack's default handler
├── cloudflare-workers.d.ts   # NEW: minimal `declare module "cloudflare:workers"`
├── components/Picture.tsx    # NEW: the only content-image component
└── data/media.generated.ts   # NEW: generated, never hand-edited
public/media/<projet>/…, public/media/video/…
```

### Pattern 1: `media-src/manifest.json` (hand-written schema)
```jsonc
{
  "$schema-version": 1,
  "defaults": { "preset": "graphic" },
  "images": [
    { "id": "clip/clip1", "src": "clip/clip1.png", "preset": "photo" },
    { "id": "sae-2/skollrub-logo-final", "src": "sae-2/skøllrub_logo_final.png" },
    { "id": "home/portrait", "src": "home/portrait.jpg", "preset": "photo" }
  ],
  "pdf": [
    { "src": "charte_graphique.pdf", "project": "festival-identite", "dpi": 300,
      "pages": [
        { "page": 1,  "id": "festival-identite/couverture",   "alt": "Charte graphique Tafsut — logo" },
        { "page": 16, "id": "festival-identite/palette",      "alt": "Charte graphique Tafsut — palette de couleurs" }
      ] }
  ],
  "galleries": { "festival-identite": ["festival-identite/couverture", "festival-identite/logotype", "…"] },
  "videos": [
    { "id": "hero", "class": "hero", "src": "public/videos/hero.mp4", "out": "media/video/hero.mp4",
      "crf": 32, "poster": { "out": "media/video/hero-poster.webp", "quality": 60 } },
    { "id": "cv", "class": "cv", "src": "public/videos/56_Lyna_REBAHI_CVvideo.mp4", "out": "media/video/cv-lyna-rebahi.mp4", "crf": 29 },
    { "id": "process-empattage", "class": "process", "src": "public/animate/videos/empattage.mp4", "out": "animate/videos/empattage.mp4", "crf": 30 }
  ]
}
```
- `id` = `<projet>/<kebab>` is the `MediaId`. Output files are `public/media/<id>-<w>.<ext>` and `public/media/<id>.<jpg|png>`.
- The script validates on load: unique ids, kebab-only ASCII in ids, every `src` exists, `preset` ∈ {photo, graphic}, and a defined order for pages and galleries.
- `alt` is optional. The Tafsut planches carry theirs (UI-SPEC copywriting).

### Pattern 2: generated `src/data/media.generated.ts`
```ts
// AUTO-GENERATED by scripts/media.mjs from media-src/manifest.json — DO NOT EDIT.
export type MediaPreset = "photo" | "graphic";
export type Rung = readonly [width: number, url: string];
export type ImageEntry = {
  readonly preset: MediaPreset;
  readonly width: number; // intrinsic, of the largest emitted rung
  readonly height: number;
  readonly avif: readonly Rung[];
  readonly webp?: readonly Rung[]; // photo only
  readonly fallback: string; // .jpg (opaque photo) | .png (graphic or alpha), ≤ 640 px
  readonly alt?: string;
};
export const images = {
  "clip/clip1": { preset: "photo", width: 2400, height: 1352, avif: [[640, "/media/clip/clip1-640.avif"], [1200, "/media/clip/clip1-1200.avif"], [2400, "/media/clip/clip1-2400.avif"]], webp: [/* … */], fallback: "/media/clip/clip1.jpg" },
  // … keys sorted with a fixed comparator (a < b ? -1 : 1), never localeCompare
} as const satisfies Record<string, ImageEntry>;
export type MediaId = keyof typeof images;
export const galleries = { "festival-identite": ["festival-identite/couverture" /* … */] } as const satisfies Record<string, readonly MediaId[]>;
export const videos = {
  hero: { src: "/media/video/hero.mp4", poster: "/media/video/hero-poster.webp", width: 1080, height: 574 },
  cv: { src: "/media/video/cv-lyna-rebahi.mp4", width: 1920, height: 1080 },
} as const;
```
- `width`/`height` and each rung's `w` descriptor come from sharp's `toFile()` `info.width` / `info.height`, **never from the ladder constant**, because portrait masters are capped on the long edge.
- Serialise with a fixed indent and `JSON.stringify` of sorted entries. No timestamps and no absolute paths. Byte-identical across runs is what makes `git diff` quiet.
- `inventory-assets.mjs` scans `src/**` (except `routeTree.gen.ts`) for `/media/…` literals. It will therefore flag any path in the generated file that is missing from `public/`, which is a free consistency check.

### Pattern 3: `projects.ts` typing
```ts
import type { MediaId } from "@/data/media.generated";
import { galleries } from "@/data/media.generated";
export type Project = { /* … */ thumbnail: MediaId; media?: readonly MediaId[]; /* … */ };
// festival-identite:
media: galleries["festival-identite"],   // inProgress removed
```

### Pattern 4: `<Picture>` (SSR-safe, no hooks, no client branching)
```tsx
// src/components/Picture.tsx
import { images, type MediaId } from "@/data/media.generated";

const srcSet = (rungs: readonly (readonly [number, string])[]) =>
  rungs.map(([w, url]) => `${url} ${w}w`).join(", ");

export function Picture({ id, alt, sizes, className = "" }: {
  id: MediaId; alt: string; sizes: string; className?: string;
}) {
  const m = images[id];
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet(m.avif)} sizes={sizes} />
      {"webp" in m && m.webp ? <source type="image/webp" srcSet={srcSet(m.webp)} sizes={sizes} /> : null}
      <img src={m.fallback} width={m.width} height={m.height} alt={alt}
        loading="lazy" decoding="async" className={["h-auto", className].filter(Boolean).join(" ")} />
    </picture>
  );
}
```
- React 19 SSR emits `srcset`/`sizes` correctly, and `fetchPriority` becomes `fetchpriority` [VERIFIED: renderToString]. The `<source>` elements must come before `<img>`.
- `width`/`height` on `<img>` plus `h-auto` preserve the aspect ratio. Classes such as `object-cover`/`aspect-[4/5]` still land on `<img>`.
- **Missing `sizes` in UI-SPEC** (add them): `max-w-lg` (moodboard, `$projectId.tsx:414`) → `"512px"`; `sm:grid-cols-3` maquettes (`:555`) → `"(min-width: 944px) 288px, (min-width: 640px) calc(33vw - 32px), calc(100vw - 48px)"`; `gap-6` 2-col grids (`:340`, `:426`) → reuse the 2-col value.

### Pattern 5: Range-capable server entry (verified locally, 206 on `bytes=0-1`, `0-`, `100-199`)
```ts
// src/server.ts
import handler, { createServerEntry } from "@tanstack/react-start/server-entry";
import { env } from "cloudflare:workers";

// Workers Static Assets ignore Range (always 200 + full body). Safari/iOS will not play a <video>
// without 206, so video paths run through this Worker first and are answered from the Cache API,
// whose match() slices Range requests into 206 responses.
const VIDEO = /^\/(?:media\/video|animate\/videos)\/[^/]+\.mp4$/;

async function serveVideo(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const key = new Request(url.origin + url.pathname, { method: "GET" });
  const cache = (caches as unknown as { default: Cache }).default;
  const hit = await cache.match(request);
  if (hit) return hit;
  const full = await env.ASSETS.fetch(key);
  if (full.status !== 200) return full;
  const res = new Response(full.body, full);
  res.headers.set("Accept-Ranges", "bytes");
  // Assets default to "public, max-age=0, must-revalidate": the Cache API would treat that as stale.
  res.headers.set("Cache-Control", "public, max-age=86400");
  await cache.put(key, res.clone());
  return (await cache.match(request)) ?? res;
}

export default createServerEntry({
  fetch(request) {
    const { pathname } = new URL(request.url);
    if (request.method === "GET" && VIDEO.test(pathname)) return serveVideo(request);
    return handler.fetch(request);
  },
});
```
```ts
// src/cloudflare-workers.d.ts: avoids adding @cloudflare/workers-types
declare module "cloudflare:workers" {
  export const env: { ASSETS: { fetch(request: Request): Promise<Response> } };
}
```
```jsonc
// wrangler.jsonc: change "main" and add "assets"
"main": "src/server.ts",
"assets": { "binding": "ASSETS", "run_worker_first": ["/media/video/*", "/animate/videos/*"] }
```
The Cloudflare Vite plugin merged this into `dist/server/wrangler.json` as `"assets":{"binding":"ASSETS","run_worker_first":[…],"directory":"../client"}`. `tsc --noEmit` passes, and `wrangler deploy --dry-run` lists `env.ASSETS` [VERIFIED in a scratch copy of the repo].
- The Cache API returns 206 for Range "if a matching response with a Content-Length header is found" [CITED: developers.cloudflare.com/workers/runtime-apis/cache/].
- The Cache API is per-datacenter, so the first viewer in a colo pays one full `ASSETS.fetch`.
- On a host where `cache.put` is a no-op, the code falls back to `res` (200, today's behaviour).

### Pattern 6: poster preload in the index route
```ts
// src/routes/index.tsx
import { videos } from "@/data/media.generated";
export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", type: "image/webp", href: videos.hero.poster, fetchPriority: "high" }],
  }),
  component: Index,
});
```
TanStack spreads each `links[]` object as attributes of `<link>` (`headContentUtils.js`: `{ tag: "link", attrs: { ...link, nonce } }` → `jsx("link", {...attrs})`) [VERIFIED: node_modules source, @tanstack/react-router 1.168.21]. The `href` must equal the `<video poster>` URL byte for byte, or the preload is wasted.

### Anti-Patterns to Avoid
- **Two-pass x264 in the pipeline:** it is not deterministic, so it breaks SC-4.
- **Reading the format from the extension:** 4 `.jpg` files are PNG + alpha.
- **Upscaling (`1920×1080` hero, `1600 px` poster):** adds bytes, adds no detail.
- **Multi-rung fallbacks:** they cost repo bytes for < 5 % of visitors.
- **Keeping `autoPlay` in JSX:** the browser starts before React can honour `prefers-reduced-motion`.
- **Importing sharp from `src/`:** it would put a native module on the Workers build path.
- **Reinstalling `clsx` / `tailwind-merge` for `cn()`.**
- **Running `media.mjs` against `public/` as a source:** `public/` is output only once the migration is done.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| Range / 206 slicing | Manual `Content-Range` parsing + ArrayBuffer slicing (CPU on the free plan, multi-range edge cases) | `caches.default.match(request)` | Cloudflare slices ranges itself. Verified locally. |
| P3 → sRGB, ICC strip | lcms calls, manual matrices | sharp defaults (+ explicit `.toColourspace("srgb")`) | Verified to match `sips`. |
| Palette PNG quantisation | custom median-cut | sharp `png({ palette: true })` (libimagequant) | Built in. |
| SSIM | JS SSIM implementation | `ffmpeg -lavfi ssim` on decoded PNGs | Already installed. |
| faststart check | new parser | existing `topLevelBoxes()` in `check-assets.mjs` | Already there. |
| PDF raster | `pdftoppm` (absent), pdf.js | `gs -sDEVICE=png16m -r300` | Installed, deterministic. |
| Kebab-case + collision detection | ad hoc regexes per file | one `toKebab()` + a `Set` check in the manifest loader | `ø` needs an explicit map. |

## Runtime State Inventory (migration: `/assets`, `/videos` → `/media`)

| Category | Items Found | Action Required |
|---|---|---|
| Stored data | None. No DB or KV. Content is static TS. | none |
| Live service config | Cloudflare: production = version `0b1ccd2a-db8e-4136-b65c-55615d6787b4` (2026-09-01), which serves *older* media: prod `hero.mp4` = 10,795,806 B, CV = 15,518,552 B, versus the repo's 18,082,812 / 24,224,597 [VERIFIED: curl]. Cloudflare's edge/asset cache holds the old `/videos/*`. | After deploy, old URLs 404 (no redirect needed, since nothing external links to them). Changing `wrangler.jsonc` `main` and `assets` is part of the same deploy. |
| OS-registered state | None | none |
| Secrets / env vars | None (EmailJS keys are inline and untouched) | none |
| Build artifacts | `dist/` holds the old `videos/hero.mp4` etc. (gitignored). `node_modules/sharp` 0.34.5 is transitive. | `vite build` rewrites `dist/`. The explicit pin installs 0.35.4 alongside it (npm nests or dedupes; it does not affect miniflare). |

**References to remove or migrate** (a grep inventory; `inventory-assets.mjs` re-validates):
- `src/routes/index.tsx`:
  - `:11` `HERO_VIDEO = "/videos/hero.mp4"`, `:12` `HERO_FALLBACK = "/assets/hero.png"`, `:13` `PORTRAIT = "/media/portrait.jpg"`;
  - `:82-93` hero `<video>` (`autoPlay`, `preload="auto"`);
  - `:136-142` portrait `<img>`;
  - `:178` CV `<source src="/videos/56_Lyna_REBAHI_CVvideo.mp4">`;
  - `:216` card `<img src={p.thumbnail}>`.
- `src/routes/projects/$projectId.tsx`: 50 `<img>` / `src="/assets/…"` in the branches:
  - `business-card-mockup` `:81-170` (6);
  - `clip` `:173-290` (12);
  - `sae-2` `:293-510` (19 + the `/animate/1_MOHAMED.html` iframe, untouched);
  - `sae-1` `:512-570` (7, including the `sm:grid-cols-3` at `:555`);
  - the generic gallery `:630-640`.
- `src/data/projects.ts`:
  - thumbnails `:25,40,53,67,78,91,102,115,126`;
  - media `:26,68,79`;
  - `inProgress` `:59`.
- Files deleted from the repo once the migration is done: all of `public/assets/**` (56), `public/videos/**` (2) and `public/media/portrait.jpg`. Nothing else references them: `public/animate/*.js` only uses relative `videos/*.mp4`, and `__root.tsx` only uses `/logo.png` and `/favicon.ico`.
- The **process videos are overwritten in place** under the same names.
- `scripts/check-assets.exceptions.json` → `{ "exceptions": [] }` (keep the `$comment`, updated).

## Common Pitfalls

### Pitfall 1: Hero re-encoded, still black on iPhone (no 206)
**What goes wrong:** Safari sends `Range: bytes=0-1`, gets `200` + the whole file, and refuses to play the source. The poster stays forever, and the CV and Animate videos fail too.
**Why it happens:** the Workers Static Assets asset worker has no Range handling [VERIFIED: prod curl, local wrangler dev, miniflare source]. Safari/iOS require byte-range support [CITED: Apple Safari Web Content Guide via developer.apple.com "Creating Video"; community reports and kv-asset-handler#63].
**How to avoid:** Pattern 5 (`src/server.ts` + `run_worker_first`).
**Warning signs:** `curl -sS -o /dev/null -D - -H "Range: bytes=0-1" <url>` shows `200` instead of `206` + `Content-Range`.

### Pitfall 2: SSIM misleadingly low (0.91 at CRF 22)
**What goes wrong:** `ffmpeg -lavfi ssim` pairs frames by timestamp. MKV and MP4 timebases round differently, so frames desynchronise.
**How to avoid:** always use `[0:v]setpts=N/<fps>/TB[a];[1:v]setpts=N/<fps>/TB[b];[a][b]ssim`. That took CRF 22 from 0.9145 (wrong) to 0.9810 (right).

### Pitfall 3: `colorspace` does not know HLG
**What goes wrong:** the filter's `itrc` has no `arib-std-b67`. `itrc=bt2020-10` treats HLG as an SDR gamma curve, so the primaries are corrected (saturation rose from 0.236 to 0.288 on frame 0) but highlights are not tone-mapped.
**How to avoid:** accept it (locked) and add a human check of the brightest waterfall frames against the iPhone original. The source also carries Dolby Vision 8.4 side data, which is dropped by re-encoding (correct).

### Pitfall 4: two-pass encodes differ run to run
Measured: `-pass 1/2`, same flags, same passlog name → different sha1. Single-pass CRF with `-map_metadata -1 -fflags +bitexact -flags:v +bitexact` → identical sha1 (`e37861a4…` twice). If exact size targeting is ever needed, use CRF + `-maxrate/-bufsize`, never two-pass.

### Pitfall 5: Ghostscript `-sPageList` numbering
`-o page-%02d.png -sPageList=1,16,21` names the outputs 01, 02, 03 (output index), **not** 01, 16, 21. Render one page per invocation with `-dFirstPage=N -dLastPage=N -o page-NN.png`.

### Pitfall 6: alpha lost on "photo" mockups
`mockupcarte*` are photographic but transparent. A JPEG fallback would paint black or white corners. Rule: `!stats().isOpaque` → PNG fallback and no `removeAlpha()`. AVIF and WebP keep alpha.

### Pitfall 7: `max-age=0` on assets breaks the Cache API path
The Cache API treats `must-revalidate, max-age=0` as immediately stale, so `match()` returns `undefined` and the response is `200` again. It was observed exactly like this in the first prototype. Override `Cache-Control` before `cache.put`.

### Pitfall 8: budget measured in the wrong unit
`du -sm public` reports MiB, and so does `check-assets` (`MiB` constant). "< 60 Mo" = < 60 MiB via `du -sm`. The hero "≤ 4 Mo" check should be ≤ 4,000,000 bytes, the strictest reading. CRF 32 gives 3,781,191 ✓.

### Pitfall 9: sharp's `withoutEnlargement` and ladder widths
Portrait sources hit the long-edge cap, so `resize({ width: w, height: w, fit: "inside" })` produces a width smaller than `w`. Write the descriptor from `info.width`. When the source's long edge is ≤ 2400 and > 1200, emit the native size as the top rung (for example `1575`), not `2400`.

### Pitfall 10: iOS Low Power Mode / data saver
`play()` rejects (`NotAllowedError`) even when muted. The UI must stay on the poster with the toggle showing "paused" (UI-SPEC state machine). This cannot be simulated on desktop, so Lyna has to check it on a real iPhone.

## Code Examples

### Hero encode (the exact command that produced 3,781,191 B, byte-deterministic)
```bash
ffmpeg -v error -y -i media-src/<…>/hero.mp4 \
  -vf "colorspace=all=bt709:iall=bt2020:itrc=bt2020-10:format=yuv420p,fps=30" \
  -c:v libx264 -preset slow -crf 32 -profile:v high -pix_fmt yuv420p \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 -color_range tv \
  -an -map_metadata -1 -map_chapters -1 -fflags +bitexact -flags:v +bitexact \
  -movflags +faststart public/media/video/hero.mp4
# ffprobe → profile=High level=31 pix_fmt=yuv420p bt709/bt709/bt709 30/1
```
### Poster (frame 0 of the SDR output)
```bash
ffmpeg -v error -y -i public/media/video/hero.mp4 -frames:v 1 -update 1 "$TMP/poster.png"
# then: sharp(poster.png).webp({ quality: 60, effort: 6 }) → public/media/video/hero-poster.webp (~104 KB at 1080w)
```
### CV (10,608,352 B, SSIM 0.9926)
```bash
ffmpeg -v error -y -i <cv master> -c:v libx264 -preset slow -crf 29 -maxrate 3000k -bufsize 6000k \
  -profile:v high -pix_fmt yuv420p -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
  -c:a aac -b:a 128k -map_metadata -1 -fflags +bitexact -flags:v +bitexact -flags:a +bitexact \
  -movflags +faststart public/media/video/cv-lyna-rebahi.mp4
```
### Process video (all 8: 12.30 MiB, max 3.53 MB)
```bash
ffmpeg -v error -y -i <master>.mp4 -vf "fps=25,scale=1280:720:flags=lanczos" \
  -c:v libx264 -preset slow -crf 30 -maxrate 1500k -bufsize 3000k -profile:v high -pix_fmt yuv420p \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 -c:a aac -b:a 64k \
  -map_metadata -1 -fflags +bitexact -flags:v +bitexact -flags:a +bitexact \
  -movflags +faststart public/animate/videos/<same name>.mp4
```
(`concassage` is essentially silent (−61.6 dB mean), but keep the track: the Animate component sets `muted:false` + `controls`.)
### PDF page
```bash
gs -q -dSAFER -dBATCH -dNOPAUSE -sDEVICE=png16m -r300 -dTextAlphaBits=4 -dGraphicsAlphaBits=4 \
   -dUseCropBox -dFirstPage=16 -dLastPage=16 -o "$TMP/page-16.png" media-src/charte_graphique.pdf
# 3508×2480, ~0.2–3.3 MB PNG in $TMP, then the graphic preset → ≤ 2400
```
### sharp presets (effort 4; verified deterministic across runs for AVIF / WebP / JPEG / PNG-palette)
```js
import sharp from "sharp";
sharp.cache(false);
const base = (file, w, keepAlpha) => {
  let p = sharp(file, { failOn: "none" }).rotate()
    .resize({ width: w, height: w, fit: "inside", withoutEnlargement: true, kernel: "lanczos3" })
    .toColourspace("srgb");                        // output strips ICC/EXIF by default
  return keepAlpha ? p : p.removeAlpha();
};
const PRESETS = {
  photo:   { avif: { quality: 55, effort: 4, chromaSubsampling: "4:2:0" }, webp: { quality: 78, effort: 5, smartSubsample: true },
             jpg: { quality: 80, mozjpeg: true } },
  graphic: { avif: { quality: 70, effort: 4, chromaSubsampling: "4:4:4" },
             png: { palette: true, quality: 90, effort: 10, compressionLevel: 9 } },
};
// fallback: one file at min(640, native) — jpg for opaque photo, png otherwise
```
Measured SSIM at 1200 px (decoded AVIF vs resized reference): graphic q70 4:4:4 = 0.970–0.990; photo q55 4:2:0 = 0.942–0.980. The same image at 4:2:0 loses 0.01–0.03 on red or text-heavy content (affiche, freya1, clip4). **Suggested alert thresholds:** graphic < 0.96, photo < 0.93. Tune them after Lyna's A/B.

### Hero playback effect (inside `Hero`, UI-SPEC state machine)
```tsx
const [state, setState] = useState<"playing" | "paused">("paused"); // SSR renders paused
const [failed, setFailed] = useState(false);
const userPaused = useRef(false);
useEffect(() => {
  const v = videoRef.current;
  if (!v) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const onPlay = () => setState("playing");
  const onPause = () => setState("paused");
  const onError = () => setFailed(true);
  const onVis = () => {
    if (document.hidden) v.pause();
    else if (!userPaused.current && !reduce) v.play().catch(() => {});
  };
  v.addEventListener("play", onPlay); v.addEventListener("pause", onPause); v.addEventListener("error", onError);
  document.addEventListener("visibilitychange", onVis);
  v.muted = true;                         // belt and braces; React 19 SSR already emits muted=""
  if (!reduce) v.play().catch(() => {});  // Low Power Mode → rejection → stays paused on poster
  return () => { v.removeEventListener("play", onPlay); v.removeEventListener("pause", onPause);
    v.removeEventListener("error", onError); document.removeEventListener("visibilitychange", onVis); };
}, []);
// The <source> error fires on the <source> element, not the <video>: put the src directly on <video src=…>
// (single source) so the video "error" event is reliable, or listen on the <source>.
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|---|---|---|---|
| `<video autoPlay>` | JS `play()` after hydration + `matchMedia` | — | Reduced motion is honoured before any frame moves |
| sharp < 0.33 needed `withMetadata()` gymnastics | 0.33+ strips metadata and outputs sRGB by default | 2023 | Do **not** call `withMetadata` / `keepIccProfile` |
| Workers Sites (`kv-asset-handler`) | Workers Static Assets (asset worker) | 2024 | Still no Range support, so the Worker plus Cache API is needed |
| `@cloudflare/workers-types` for `env` | `import { env } from "cloudflare:workers"` | 2025 | Minimal `.d.ts` is enough here |

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|---|---|---|
| A1 | Safari/iOS refuse playback on a 200-to-Range response (from Apple docs and community sources, not tested on a device here) | Pitfall 1 | If Safari tolerates a 200, `src/server.ts` is unnecessary but harmless. Keep it, since seeking also needs 206. |
| A2 | Production Cache API behaves like miniflare (206 from `match`) on the custom domain `lynarebahi.fr` | Pattern 5 | If not, the fallback returns 200 (status quo). The post-deploy curl detects it. |
| A3 | sharp@0.35.4 is legitimate (slopcheck unavailable) | Package audit | Negligible (12-year-old, official repo, already transitive) |
| A4 | Lyna accepts 720p process videos, a native 1080×574 hero and a ~100 KB poster | Locked-decision conflicts | If refused, SIZE-08 (< 60 MB) cannot be met. Re-scope the budget with her. |
| A5 | SSIM thresholds 0.96 (graphic) and 0.93 (photo) are reasonable alert levels | Code Examples | Only affects warnings. Tune after A/B. |
| A6 | AVIF support is high enough that a 640 px fallback is acceptable for the rest | Budget | Non-AVIF browsers see softer images. Visible only on very old Safari/Edge. |

## Open Questions

1. **Process videos at 720p (deviation from "même résolution").**
   - Known: 1080p cannot fit the budget. 720p is visually equivalent at the Animate display size (SSIM evidence plus an A/B crop).
   - Recommendation: a planner checkpoint (`checkpoint:human-verify`) that shows Lyna one 720p process clip inside the Animate scene on `wrangler dev` before the batch run.
2. **Hero CRF 32 acceptable?**
   - Moving water is the worst case for H.264.
   - Recommendation: A/B of CRF 30 (5.06 MiB, over budget), 31 (4.28 MiB, over) and 32 (3.61 MiB) under the real gradient overlay. Only 32 fits ≤ 4 MB at 30 fps. If rejected, the alternatives are 25 fps CRF 30 (4.65 MiB, still over) or relaxing the 4 MB budget.
3. **Poster budget: 100 KB at 1080 px or 69 KB at 800 px?** Recommend 1080w q60 and amend the UI-SPEC budget.
4. **Where do shared thumbnails live?** Recommend the `thumbnails/` project key until PROJ-01 (phase 4) gives each project its own.
5. **CV output name:** `/media/video/cv-lyna-rebahi.mp4` (recommended, kebab) versus keeping `56_Lyna_REBAHI_CVvideo`.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|---|---|---|---|---|
| ffmpeg / ffprobe (libx264, aac, colorspace, ssim) | videos, SSIM, guard | ✓ | 8.1.1 | — |
| zscale / libplacebo | better HDR tonemap | ✗ | — | `colorspace` (locked) |
| Ghostscript | Tafsut pages | ✓ | 10.07.1 | — |
| pdftoppm | — | ✗ | — | gs |
| sharp | images | ✓ after `npm i -D -E sharp@0.35.4` (tested in scratchpad) | 0.35.4 | — |
| wrangler | dev / dry-run / deploy / rollback | ✓ (transitive `node_modules/.bin`) | 4.82.2 | — |
| magick, sips | inspection only | ✓ | — | — |
| `timeout` (GNU) | — | ✗ | — | not needed |
| Network (npm registry, curl to prod) | install, smoke test | ✓ at research time (was flaky earlier) | — | retry |

Pipeline runtime on this Mac:
- images at effort 6: 5 min 22 s for 57 images. Effort 4 is about 3–4× faster.
- hero: 6 s.
- CV: about 30 s.
- 8 process videos: about 70 s.
- 14 PDF pages: about 45 s.
- The source-hash cache makes re-runs near-instant.

## Validation Architecture

### Test Framework
| Property | Value |
|---|---|
| Framework | None (no test runner in the project). Validation is scripted with Node, ffprobe, shasum and curl. |
| Config file | none. Wave 0 adds `scripts/verify-media.mjs` (sharp-based, dev-only). |
| Quick run command | `npx tsc --noEmit && node scripts/inventory-assets.mjs` |
| Full suite command | `npm run check && node scripts/verify-media.mjs && du -sm public` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|---|---|---|---|---|
| SIZE-01 | Pipeline regenerates outputs reproducibly | integration | `npm run media && find public/media public/animate/videos src/data/media.generated.ts -type f -print0 \| sort -z \| xargs -0 shasum > /tmp/a && rm -f media-src/.cache.json && npm run media && find … \| xargs -0 shasum > /tmp/b && diff /tmp/a /tmp/b` (a cold second run must be identical) | ❌ Wave 0 (script) |
| SIZE-01 | Never in build | static | `node -e 'const s=require("./package.json").scripts;process.exit(/media\.mjs/.test(s.build+s.check+s.deploy)?1:0)'` | ✅ |
| SIZE-02 | ≤ 2400 px, no ICC, AVIF chroma per preset, kebab names | unit | `node scripts/verify-media.mjs` (sharp `metadata()` on every `public/media/**` image: `max(w,h) ≤ 2400`, `!icc`, `/^[a-z0-9-]+$/` names, and every `images[id]` URL exists) | ❌ Wave 0 |
| SIZE-02 | `<picture>` + srcset rendered, lazy, intrinsic dims | smoke | `npx vite build && (npx wrangler dev --port 8787 &) ; curl -s localhost:8787/projects/clip \| grep -c 'type="image/avif"'` (≥ 12) and `grep -c 'loading="lazy"'` | ✅ |
| SIZE-03 | Hero format / size / colour | unit | `ffprobe -v error -select_streams v:0 -show_entries stream=profile,pix_fmt,color_primaries,color_transfer,color_space,r_frame_rate -of csv=p=0 public/media/video/hero.mp4` → `High,yuv420p,bt709,bt709,bt709,30/1`; `ffprobe -show_entries stream=codec_type` shows no audio; `stat -f %z` ≤ 4000000; poster `stat -f %z` ≤ 110000 | ✅ tools |
| SIZE-03 / 04 / 05 | faststart + yuv420p, no exceptions | integration | `node scripts/check-assets.mjs` with `jq '.exceptions\|length' scripts/check-assets.exceptions.json` = 0 | ✅ |
| SIZE-04 | CV ≤ 12 MB with AAC | unit | `ffprobe … stream=codec_name` includes `aac`; `stat -f %z` ≤ 12000000 | ✅ |
| SIZE-05 | Each process video ≤ 12 MB, 25 fps, same names | unit | `for f in public/animate/videos/*.mp4; do ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate,pix_fmt -of csv=p=0 "$f"; stat -f %z "$f"; done` and `ls public/animate/videos` = the 8 original names | ✅ |
| SIZE-05 | Animate chain plays videos | manual | `npx wrangler dev --port 8787` → `/animate/1_MOHAMED.html` → walk 6 scenes | human |
| SIZE-06 | PDF absent, pages present | unit | `! find public -name '*.pdf' \| grep .` and `node -e` asserting `galleries["festival-identite"].length >= 10` | ✅ |
| SIZE-08 | `public/` < 60 MiB, only one preload | integration | `test $(du -sm public \| cut -f1) -lt 60`; `curl -s localhost:8787/ \| grep -o '<link[^>]*rel="preload"[^>]*as="image"' \| wc -l` = 1; added check-assets rule: total `dist/client` ≤ 60 MiB → FAIL | ❌ Wave 0 (budget rule) |
| HERO-01 | Range 206 on video paths | smoke | `curl -sS -o /dev/null -D - -H "Range: bytes=0-1" localhost:8787/media/video/hero.mp4 \| grep -E '^HTTP/1.1 206\|Content-Range: bytes 0-1/'` (then the same against `https://lynarebahi.fr` after deploy) | ✅ tools |
| HERO-01 | Toggle a11y markup | smoke | SSR HTML contains `aria-pressed="true"` and `sr-only">Mettre en pause la vidéo` | ✅ |
| HERO-01 | Plays on iPhone / Android, colours not washed out, Low Power Mode → poster + toggle | manual | Lyna on a real iPhone (Safari, normal + Low Power Mode) and an Android phone, against the deployed URL | human (UAT) |
| PROJ-06 | Tafsut gallery, no sticker | smoke | `curl -s …/projects/festival-identite \| grep -c 'festival-identite/'` ≥ 10; `grep -c 'inProgress' src/data/projects.ts` stays at 1 (the type field only) | ✅ |
| PROJ-07 | Branches intact, no `/assets/` left | static | `grep -c 'project.id === "' 'src/routes/projects/$projectId.tsx'` = 4; `! grep -rn '"/assets/\|/videos/' src/`; `node scripts/inventory-assets.mjs` exit 0 | ✅ |
| all | A/B at 100 %, no chroma bleed on type | manual | Side-by-side of the source and the decoded AVIF for 3 graphics (affiche, freya1, a Tafsut palette page) + 2 photos + hero CRF under the overlay | human |
| deploy | Production up, rollback known | smoke | `for p in / /projects/{prototype-site-accessible,business-card-mockup,festival-identite,illustration-photoshop,portraits-illustration,stop-motion,clip,sae-1,sae-2}; do curl -s -o /dev/null -w "%{http_code} $p\n" https://lynarebahi.fr$p; done`; poster and hero 200/206; rollback `npx wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4` (note the new version id from `npx wrangler deployments list` first) | ✅ |

### Sampling Rate
- **Per task commit:** `npx tsc --noEmit && node scripts/inventory-assets.mjs`
- **Per wave merge:** `npm run check` (tsc + build + check-assets + dry-run)
- **Phase gate:** full suite + `verify-media` + `du -sm public` + local `wrangler dev` Range curl, all green before `/gsd:verify-work`. Human UAT (iPhone, A/B) is recorded separately.

### Wave 0 Gaps
- [ ] `scripts/verify-media.mjs`: dims ≤ 2400, no ICC, names, manifest ↔ file consistency, SSIM summary (dev-only, uses sharp)
- [ ] `scripts/check-assets.mjs`: add a total-budget rule (`dist/client` > 60 MiB → FAIL, not waivable) and empty `check-assets.exceptions.json`
- [ ] `npm i -D -E sharp@0.35.4` + `"media"` script
- [ ] `media-src/manifest.json` + `media-src/<projet>/` clones (not committed)

## Security Domain

| ASVS Category | Applies | Standard Control |
|---|---|---|
| V2 Authentication | no | — |
| V3 Session Management | no | — |
| V4 Access Control | no | — |
| V5 Input Validation | limited | `src/server.ts` only handles GET on a strict regex path (`^/(media/video\|animate/videos)/[^/]+\.mp4$`). Everything else is passed through untouched. Range parsing is left to Cloudflare. |
| V6 Cryptography | no | — |
| V12 Files / Resources | yes | The offline script reads only manifest-listed paths under `media-src/`. It runs `gs` with `-dSAFER` and never on untrusted PDFs. Metadata (EXIF/GPS) is stripped by sharp and `-map_metadata -1`. |

| Pattern | STRIDE | Mitigation |
|---|---|---|
| Path traversal via the Worker video route | Tampering / Info disclosure | Regex allows no `/` in the file part, and only `env.ASSETS` (public files) is fetched |
| Cache poisoning via query strings | Tampering | Cache key = `origin + pathname` (query dropped) |
| EXIF/GPS leak in photos | Info disclosure | sharp strips metadata by default; ffmpeg `-map_metadata -1` |
| Ghostscript PostScript execution | Elevation | `-dSAFER`, trusted local PDF only, never in CI or build |

## Sources

### Primary (HIGH confidence)
- Local measurements, all reproducible from the scratchpad:
  - ffprobe of the 10 videos;
  - sharp 0.35.4 metadata and stats for 57 images;
  - 20+ test encodes with sizes, SSIM and sha1;
  - gs renders of the 32 PDF pages;
  - curl on production and wrangler dev;
  - miniflare asset-worker source grep;
  - TanStack `headContentUtils.js` / `Asset.js` / `default-entry/esm/server.js`;
  - React 19.2.5 `renderToString` output;
  - scratch-copy build + `wrangler deploy --dry-run` of the Range entry.
- npm registry: `npm view sharp` (0.35.4 = 2026-08-26, 0.35.5 = 2026-09-27, no install scripts, repo lovell/sharp).
- [Cloudflare Cache API docs](https://developers.cloudflare.com/workers/runtime-apis/cache/): `match()` with Range → 206; `put()` rejects 206.
- [Cloudflare static assets headers](https://developers.cloudflare.com/workers/static-assets/headers/): default `Cache-Control: public, max-age=0, must-revalidate`; Range mentioned only in the cache-control condition.

### Secondary (MEDIUM confidence)
- [Apple: Creating Video (Safari Web Content Guide)](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/CreatingVideoforSafarioniPhone/CreatingVideoforSafarioniPhone.html): servers must support byte-range requests for iOS.
- [Cloudflare: MP4 issues on iOS and Safari](https://developers.cloudflare.com/cache/troubleshooting/mp4-videos-on-ios-and-safari/)
- [kv-asset-handler#63: videos on worker sites not playing on iOS](https://github.com/cloudflare/kv-asset-handler/issues/63)
- [LogRocket: Streaming video in Safari](https://blog.logrocket.com/streaming-video-in-safari/), [philna.sh: Safari range requests](https://philna.sh/blog/2018/10/23/service-workers-beware-safaris-range-request/)
- Milestone research `.planning/research/STACK.md` / `PITFALLS.md` (2026-09-25): sharp API defaults and pitfalls 1, 5, 6, 12, 13, built upon here.

### Tertiary (LOW confidence)
- [workers-sdk#3861: feature request for 206](https://github.com/cloudflare/workers-sdk/issues/3861) (only a signal that Range is not native)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH (installed and exercised)
- Architecture: HIGH for the pipeline and `<Picture>`; MEDIUM-HIGH for the Range Worker (verified locally, production Cache API behaviour assumed per docs)
- Quality values: MEDIUM (SSIM measured; visual A/B pending with Lyna)
- Budget: HIGH (measured on real files, ±2 %)

**Research date:** 2026-09-28
**Valid until:** 2026-10-28 (sharp 0.35.x and wrangler move fast; re-check `npm view sharp version` at execution)

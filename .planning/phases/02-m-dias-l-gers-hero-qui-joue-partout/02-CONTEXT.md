# Phase 2: Médias légers & hero qui joue partout - Context

**Gathered:** 2026-09-28
**Status:** Ready for planning
**Mode:** Smart discuss (autonome) — 4 zones grises, 16 réponses recommandées toutes acceptées par Lyna

<domain>
## Phase Boundary

Livrer un pipeline média hors-ligne reproductible (`scripts/media.mjs` : sharp + ffmpeg + Ghostscript) qui régénère `public/media/**` et le manifeste `src/data/media.generated.ts` depuis `media-src/`, réencoder tous les médias existants sans en supprimer ni en dégrader visiblement (images ≤ 2400 px en `<picture>` + `srcset`, hero SDR 8 bits ≤ 4 Mo qui joue sur iPhone, vidéo CV et vidéos process ≤ 12 Mo), faire passer `public/` sous 60 Mo, vider la liste d'exceptions du garde-fou, brancher la galerie Tafsut sur la page « Identité d'un festival », et effectuer le premier déploiement réel Cloudflare du milestone.

Hors périmètre ici : mise en scène du hero (cadre, générique, positionnement — phase 3), grille de logos et portrait animé (phase 3), fiches projet enrichies / logos par projet / process strip (phase 4), contact et QA mobile (phase 5), rédaction des textes (Lyna).

</domain>

<decisions>
## Implementation Decisions

### Pipeline média & manifeste
- Sources dans `media-src/<projet>/…` (masters, gitignoré) → dérivés dans `public/media/<projet>/<nom-kebab>.{avif,webp,jpg|png}` et `public/media/video/…` — miroir par projet, lisible dans le repo
- `src/data/media.generated.ts` = objet typé par identifiant : largeur/hauteur intrinsèques, `srcset` par format (640/1200/2400), image de repli, preset, poster pour les vidéos ; généré, jamais édité à la main (même statut que `routeTree.gen.ts`) ; consommé par un seul composant `<Picture>`
- Classification photo vs graphique dans un `media-src/manifest.json` écrit à la main : projet, preset, pages PDF à extraire, ordre de galerie ; preset par défaut `graphic` (4:4:4, le plus sûr)
- Sortie déterministe (métadonnées retirées, options d'encodage figées, pas de timestamp) + cache par hash de source dans `media-src/.cache.json` pour ne pas réencoder l'inchangé ; `npm run media` manuel, jamais dans `check`/`build`/Cloudflare ; deux exécutions successives → fichiers identiques

### Hero vidéo & lecture mobile
- Sortie 1920×1080, 30 fps, H.264 High 8 bits `-pix_fmt yuv420p`, filtre `colorspace=all=bt709:iall=bt2020:itrc=bt2020-10` (HLG bt2020 → SDR bt709), muet (`-an`), `-movflags +faststart` ; CRF choisi par A/B visuel (≈ 24–26, preset slow) pour tenir ≤ 4 Mo
- Poster = première image de la sortie SDR convertie → WebP ≈ 1600 px, < 80 Ko, `fetchpriority="high"` ; vidéo en `preload="metadata"` ; le PNG de 4,4 Mo disparaît
- Autoplay refusé (iOS mode éco, `prefers-reduced-motion`) : poster affiché + bouton lecture/pause toujours visible en coin (icône + libellé lisible par lecteur d'écran, `aria-pressed`, focus clavier) ; avec `prefers-reduced-motion` on n'autoplay pas et on laisse le poster
- `muted playsInline loop`, mise en pause quand l'onglet est caché (`visibilitychange`), aucune piste audio dans le fichier

### Images — presets et rendu
- Largeurs `srcset` : 640 / 1200 / 2400 px de grand côté, jamais agrandi au-delà de la source ; les tuiles de grille reçoivent ≤ 1200
- Photos : AVIF 4:2:0 + WebP + JPEG de repli ; graphiques (affiches, logos, planches, mockups) : AVIF 4:4:4 + PNG quantifié de repli, jamais de WebP lossy ; le script imprime un score SSIM (ffmpeg `ssim`) par fichier et alerte sous un seuil ; sRGB puis ICC retiré ; `.rotate()` en tête (EXIF)
- Renommage automatique en kebab-case ASCII (`skøllrub_logo_final.png` → `skollrub-logo-final`) ; `projects.ts` et les branches de `$projectId.tsx` référencent les identifiants du manifeste, plus de chemins en dur vers `public/assets/`
- `loading="lazy"` + `decoding="async"` partout sauf le hero ; `width`/`height` intrinsèques pour éviter les sauts de mise en page ; seul le hero est préchargé

### Charte Tafsut, vidéos process & mise en ligne
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

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/Reveal.tsx` (seul composant partagé) ; classes CSS `quest-btn`, `hud-tag`, `ornament-card`, `chapter-title` et tokens `--plum/--cream/--sakura/--gold` dans `src/styles.css`
- `src/data/projects.ts` : type `Project` + tableau, séparateurs `// --- CATÉGORIE ---` ; `festival-identite` a `media: []` en attente des planches
- `scripts/check-assets.mjs` (garde 20 Mio / ffprobe pix_fmt / faststart JS pur / extensions interdites, exceptions par fichier et par règle dans `scripts/check-assets.exceptions.json` — 3 entrées à vider) ; `scripts/inventory-assets.mjs` (référencé vs présent, décodage URL + NFC)
- `media-src/` (gitignoré, ≈ 636 Mo) contient déjà tous les masters : `src/assets/` complet (dont `affichepromo.png`, `prévention.png`), `charte_graphique.pdf`, `extraitpubSAE1.mp4`, `quarantine/…`, miroir prod 2026-09-01

### Established Patterns
- Hero dans `src/routes/index.tsx` : constantes `HERO_VIDEO` / `HERO_FALLBACK`, `<video>` avec `playPromise.catch(() => {})` ; poster actuel `/assets/hero.png` (PNG 4,37 Mo, 1920×1080)
- Médias référencés par URL absolues `/assets/…`, `/videos/…`, `/media/…`, `/animate/…` ; branches `project.id === "business-card-mockup" | "clip" | "sae-2" | "sae-1"` dans `$projectId.tsx` (conservées, PROJ-07)
- Aucun test runner ; `npm run check` = `tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run` ; `npm run lint` rouge (609 erreurs Prettier préexistantes, hors périmètre)
- Fichiers générés jamais édités à la main (`src/routeTree.gen.ts`) → même convention pour `media.generated.ts`

### Integration Points
- `src/routes/index.tsx` (hero, grille projets avec `thumbnail`), `src/routes/projects/$projectId.tsx` (galeries, iframe `/animate/1_MOHAMED.html`, 3 iframes YouTube), `src/data/projects.ts` (chemins → identifiants du manifeste)
- `public/animate/videos/*.mp4` lus par `1_MOHAMED.js` via chemins relatifs `videos/<nom>.mp4` — noms et emplacement intouchables
- `package.json` : ajouter `media` (script) et `sharp` épinglé en devDependency ; `knip.json` à ajuster si besoin ; `.gitignore` couvre déjà `media-src/` et le PDF

### Environment facts
- ffmpeg 8.1.1 / ffprobe : `/opt/homebrew/bin` (`libx264`, `aac`, filtre `colorspace` ; pas de `zscale`) ; Ghostscript `gs` présent ; `pdftoppm` absent ; Node v24.15.0, npm seul ; macOS sans `timeout` ; `vite preview` cassé → `npx wrangler dev --port 8787` ; grep wrapper → `/usr/bin/grep -a`
- Cloudflare : 25 Mio par asset (non dérogeable), `wrangler deploy --dry-run` n'est valide qu'après `vite build` ; production actuelle = version `0b1ccd2a-db8e-4136-b65c-55615d6787b4` du 2026-09-01

</code_context>

<specifics>
## Specific Ideas

- `hero.mp4` actuel : H.264 High 10 `yuv420p10le`, HDR HLG bt2020 (`arib-std-b67`), 60 fps, 17 s, 17 Mo — ne joue pas sur iPhone ; conversion couleur obligatoire sinon image délavée
- Poids actuels : `public/` 215 Mo (animate 90, assets 82, videos 40, media 2,5) ; cible < 60 Mo
- Pièges de recherche à respecter : dimensions (pas octets) comme critère (`chartegraphique_SkollRub.png` 9047×5032 ≈ 173 Mio décodés) ; faststart vérifié par ordre des atomes ; presets graphiques en 4:4:4 (bavure de chroma sur typo) ; poster léger car sur iPhone il est parfois tout ce qu'on voit ; iOS mode éco bloque l'autoplay même muet
- Tafsut Festival : PDF de 22,5 Mio dans `media-src/` ; pages clés attendues : logo, palette, typos, affiche, billets, goodies, signalétique

</specifics>

<deferred>
## Deferred Ideas

- Cadre écran / générique / positionnement du hero, showreel, métadonnées de coins → phase 3
- Logos par projet, process strip, `affichepromo.png` / `prévention.png` (projet d'accueil à choisir par Lyna, SIZE-09) → phase 4
- `_headers` (cache immutable pour `public/media/**`, CSP), SRI sur CreateJS, `youtube-nocookie` + `loading="lazy"` sur les iframes YouTube → phase 5 / v2
- Nettoyage Prettier global (609 erreurs préexistantes), `@types/node` 22 vs Node 24, `wrangler`/`knip` en devDependencies → hors milestone, tâche quick
- Sous-titres de la vidéo CV → v2

</deferred>

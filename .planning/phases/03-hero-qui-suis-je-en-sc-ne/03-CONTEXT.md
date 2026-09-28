# Phase 3: Hero & Qui suis-je en scène - Context

**Gathered:** 2026-09-28
**Status:** Ready for planning
**Mode:** Smart discuss (autonome) — 4 zones grises, 16 réponses recommandées toutes acceptées par Lyna

<domain>
## Phase Boundary

Mettre en scène l'accueil pour qu'un recruteur comprenne en 3 secondes que Lyna fait de la vidéo, cherche une alternance de chargée de communication et maîtrise les logiciels du métier : hero dans un cadre écran avec grain tuilé pré-rendu et ligne de positionnement + disponibilité, image Open Graph extraite du hero ; section « Qui suis-je » avec portrait animé en CSS pur (viseur), positionnement explicite en slots, vidéo CV libellée avec durée et poster sans préchargement, grille de logos groupée par métier avec monogrammes de repli ; tous les textes centralisés dans `src/content/copy.ts` ; `prefers-reduced-motion` respecté globalement (hook SSR-safe + CSS). Direction hybride : palette sakura/crème/prune/gold et typos Cormorant Garamond + DM Sans conservées, codes cinéma légers, zéro coût mobile, aucun overlay bloquant, aucune lib d'animation.

Hors périmètre : fiches projet (logos par projet, crédits, process strip — phase 4), contact/candidature et QA mobile (phase 5), métadonnées de coins, showreel, sous-titres CV (v2), rédaction des textes définitifs (Lyna).

</domain>

<decisions>
## Implementation Decisions

### Hero — cadre, grain, positionnement, Open Graph
- Cadre écran : cadre fin plein largeur autour de la vidéo, coins arrondis, bord `--plum` 1 px, vignette légère en `box-shadow` inset, bombé simulé par un dégradé radial ; aucun `filter`, aucun canvas ; la vidéo et le bouton pause restent cliquables, aucun overlay n'intercepte clics ni scroll tactile
- Grain : tuile 256×256 pré-rendue par le pipeline média (WebP < 10 Ko, entrée `grain` du manifeste), posée en `background-image` sur un calque `pointer-events: none`, opacité 6–8 %, animée par `background-position` en `steps()` sur une couche promue (`will-change: transform` ou `translateZ(0)`), retirée sous `prefers-reduced-motion`
- Positionnement + disponibilité sous le titre : slots `hero.tagline` (≤ 12 mots, ex. « Alternance chargée de communication · réalisation & montage ») et `hero.availability` (« Disponible à partir de … » ; slot vide → ligne masquée), DM Sans, style « carton de générique » (petites capitales espacées)
- Open Graph : `og.jpg` 1200×630 ≤ 200 Ko extrait d'une frame du hero par le pipeline, référencé dans `__root.tsx` avec le slot `meta.description` (140–160 caractères, valeur actuelle par défaut marquée TODO) ; `og:title`, `og:url`, `twitter:card` cohérents

### Qui suis-je — portrait, positionnement, vidéo CV
- Portrait « viseur » en CSS pur : 4 équerres de coins `--gold`, point REC sakura pulsant lentement, balayage projecteur unique à l'entrée dans le viewport (`IntersectionObserver` + classe), rendu statique (équerres seules) sous `prefers-reduced-motion` ; image via `<Picture id="home/portrait">`
- 4 slots dans `copy.ts` : `about.intro` (40–70 mots), `about.goal` (objectif alternance, 1 phrase), `about.specialty` (spécialité vidéo, 1 phrase), `about.range` (polyvalence MMI, 1 phrase) ; textes actuels par défaut marqués TODO ; consignes « à bannir » : « J'ai 20 ans », « passionnée », « créative », « polyvalente » sans preuve
- Vidéo CV : carte à côté du portrait, poster extrait par le pipeline (entrée `cv` : poster + durée lue par ffprobe et écrite dans le manifeste généré), libellé « CV vidéo — m:ss » calculé depuis la durée, bouton play accessible (nom explicite), `preload="none"`, lecture au clic avec son, lecteur natif (pas de lecteur custom)
- Composition : deux colonnes ≥ 1024 px (portrait + carte CV / textes + grille de logos), une colonne en dessous ; rythme d'espacement existant ; classes `ornament-card` / `chapter-title` conservées

### Grille de compétences — logos par métier
- Registre `src/data/tools.ts` : 13 outils `{ id, name, group: "video" | "design" | "web", initials }` — Vidéo : premiere-pro, after-effects, davinci-resolve, capcut · Design : photoshop, illustrator, indesign, lightroom, animate, canva · Web : figma, html-css, vs-code ; réutilisé tel quel par la phase 4 (PROJ-03)
- Composant `<ToolLogo>` : `<img src="/media/logos/<id>.svg" alt={name} width height loading="lazy">` avec repli `onError` vers un monogramme inline (cercle sakura, initiales Cormorant) ; jamais d'image cassée ; 3 groupes titrés Vidéo · Design · Web, sans niveau, barre ni pourcentage
- Placeholders : `npm run media` génère les monogrammes SVG `public/media/logos/<id>.svg` manquants et n'écrase JAMAIS un fichier présent ; Lyna remplace en déposant son fichier du même nom (`<id>.png` prioritaire sur `<id>.svg` si présent — le composant tente le PNG puis le SVG puis le monogramme, ou le manifeste enregistre le format présent)
- Icônes libres : Figma, HTML/CSS (HTML5 ou CSS3) et DaVinci Resolve copiées depuis `simple-icons` (CC0) dans `public/media/logos/` lors du même run (via `npx`/téléchargement ponctuel, fichier commité, aucune dépendance runtime ni devDependency permanente) ; Adobe ×7, Canva, CapCut, VS Code restent en monogramme jusqu'à réception des images
- Style : vignettes 44×44 px sur fond crème, bord 1 px `--border`, légende DM Sans 12 px, grille responsive (4 par ligne mobile, 6–7 desktop), survol = léger relèvement seulement

### Textes (`copy.ts`) et mouvement
- `src/content/copy.ts` : objet typé par section (`meta`, `hero`, `about`, `skills`, `projects` (intitulés de section), `contact`, `footer`, `projectPages` pour les branches en dur) ; chaque slot = `{ text, todo, brief: { length, angle, avoid } }` ; les composants lisent `copy.x.y.text` ; `todo: true` n'a aucun rendu visible en production ; script `npm run copy:todo` (Node ESM) liste les slots à écrire
- Migration : tous les textes en dur de `index.tsx`, `__root.tsx` et des 4 branches de `$projectId.tsx` passent dans `copy.ts` avec leur valeur actuelle (marquée `todo` là où Lyna réécrit) ; les fautes de frappe évidentes de `projects.ts` sont corrigées (liste dans le SUMMARY) ; aucune chaîne utilisateur en dur ne subsiste dans les composants (les libellés fonctionnels des contrôles, ex. « Mettre en pause la vidéo », vivent aussi dans `copy.ts`)
- `prefers-reduced-motion` : hook `useReducedMotion()` via `useSyncExternalStore` (`getServerSnapshot` → `false` ; aucun branchement de rendu au premier passage → pas d'écart d'hydratation) + règle CSS globale `@media (prefers-reduced-motion: reduce)` neutralisant `.reveal`, le grain, le balayage du portrait, le REC et les transitions ; le hero garde son comportement de la phase 2 (poster statique + bouton)
- Transitions : `Reveal` conservé avec un volet vertical très court en plus du fondu ; aucune animation pilotée par le scroll ; couche `@layer cinema` dans `styles.css` regroupant grain, cadre, viseur, transitions ; `src/components/cinema/*` n'importe jamais depuis `src/data/`

### Claude's Discretion
- Valeurs exactes (rayon du cadre, opacité du grain 6–8 %, durée du balayage, tailles) dans les bornes ci-dessus ; nommage des classes dans `@layer cinema`
- Choix de la frame du hero pour `og.jpg` et le poster CV (frame nette, non noire)
- Forme exacte du monogramme SVG (généré par un petit module `scripts/media/logos.mjs`)
- Découpage des slots `projectPages.*` pour les 4 branches en dur (un slot par bloc de texte)
- Emplacement du bouton pause du hero par rapport au cadre (reste fixe, hors cadre, comme en phase 2)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/Picture.tsx` (AVIF/WebP/repli depuis `src/data/media.generated.ts`), `src/components/Reveal.tsx` (IntersectionObserver), pipeline `scripts/media.mjs` (+ `scripts/media/{util,images,video,pdf}.mjs`, manifeste `media-src/manifest.json`, cache par empreinte, sorties déterministes) à étendre avec : tuile de grain, `og.jpg`, poster + durée CV, monogrammes SVG + copie d'icônes libres
- Hero (`src/routes/index.tsx`) : vidéo pilotée en JS, bouton pause fixe accessible (`aria-pressed`, libellé constant), poster préchargé, `prefers-reduced-motion` déjà respecté localement → généraliser via le hook
- Tokens et classes : `--plum/--cream/--sakura/--gold/--border`, `quest-btn`, `hud-tag`, `ornament-card`, `chapter-title`, `reveal` dans `src/styles.css` (Tailwind v4 CSS-first, `@theme inline`)
- Contenu projets : `src/data/projects.ts` (type `Project`, `media: readonly MediaId[]`, `thumbnail: MediaId`, `tools: string[]` texte)

### Established Patterns
- Composants nommés, props inline, classes par template literal (pas de `cn()`), imports `@/` ; APIs navigateur uniquement dans `useEffect`/`useSyncExternalStore` ; fichiers générés jamais édités à la main (`routeTree.gen.ts`, `media.generated.ts`)
- Scripts Node ESM `.mjs` avec `spawnSync` en tableau d'arguments, validation stricte du manifeste (chemins canoniques, collisions), exit codes 0/1/2, Prettier + ESLint sur `scripts/`
- `npm run check` = `tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run` (règles non dérogeables 25 Mio / 12 Mo par vidéo / 60 Mio total / extensions) ; `npm run media` manuel, jamais dans le build ; `npm run deploy` = `check && wrangler deploy`

### Integration Points
- `src/routes/__root.tsx` (head : OG, description, preload), `src/routes/index.tsx` (hero, Qui suis-je, grille de compétences, contact), `src/routes/projects/$projectId.tsx` (textes des 4 branches → `copy.ts`), `src/styles.css` (`@layer cinema`, règle reduced-motion), `media-src/manifest.json` (grain, og, cv poster/durée, logos), `package.json` (`copy:todo`)
- Invariant routeTree : aucun fichier créé/supprimé/renommé dans `src/routes/` ; nouveaux fichiers dans `src/components/cinema/`, `src/components/`, `src/hooks/`, `src/content/`, `src/data/tools.ts`, `scripts/media/logos.mjs`

### Environment facts
- Node v24.15.0, npm seul ; ffmpeg/ffprobe/gs `/opt/homebrew/bin` ; sharp 0.35.4, wrangler 4.82.2 épinglés ; macOS sans `timeout` ; `vite preview` cassé → `wrangler dev --port 8787` ; `npm run dev` fonctionne (import lazy de `cloudflare:workers`)
- Production `lynarebahi.fr` = version `9b787c88…` ; redéploiement en fin de phase autorisé (même règle qu'en phase 2 : `npm run check` vert puis `npm run deploy`, contrôle curl, rollback documenté)

</code_context>

<specifics>
## Specific Ideas

- Inspiration : GIF Behance (serif rouge calligraphiée, grain VHS, cadre écran bombé, métadonnées de coins) — on ne reprend ici que le grain, le cadre et le ton « carton de générique » ; les métadonnées de coins et la serif rouge restent en v2
- Recherche FEATURES : ligne de positionnement lue dans les 7 premières secondes ; grille par métier sans niveau ; pas de scroll-jacking ; copy « passionnée/créative/polyvalente » à bannir ; slot showreel à prévoir sans le simuler (v2)
- Durée réelle de la vidéo CV à lire par ffprobe (≈ 1:25 selon la roadmap) ; poster à extraire sur une frame nette

</specifics>

<deferred>
## Deferred Ideas

- Métadonnées de coins façon générique, serif calligraphique rouge, showreel 60–90 s (slot + bouton « Showreel — m:ss »), sous-titres CV → v2
- Logos par projet (chips), crédits type fin de film, process strip, vignettes animées, façade YouTube, Animate en « bonus » click-to-load, `affichepromo`/`prévention` → phase 4
- Contact (email + LinkedIn + CV PDF), `_headers`, QA mobile réelle → phase 5
- Nettoyage Prettier global des fichiers hérités → tâche quick hors milestone

</deferred>

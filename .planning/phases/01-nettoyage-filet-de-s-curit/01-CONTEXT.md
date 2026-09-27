# Phase 1: Nettoyage & filet de sécurité - Context

**Gathered:** 2026-09-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Le site déployé ne contient plus ni code mort, ni effet décoratif, ni doublon d'assets, ni source de travail — et un garde-fou `bun run check` empêche tout commit de dépasser la limite Cloudflare de 25 Mio. Périmètre : CLEAN-01..09, SIZE-07, PERF-02. Aucun réencodage de média (phase 2), aucune nouvelle interface (phases 3-5). Le dernier geste de la phase est un déploiement Cloudflare réel du site nettoyé.

</domain>

<decisions>
## Implementation Decisions

### Inventaire & quarantaine des assets
- Un fichier jugé non référencé est déplacé dans `media-src/quarantine/` (gitignoré), jamais supprimé en phase 1 — réversible ; la phase 4 pourra y repêcher les étiquettes SkøllRub, `palette de couleurs.png`, etc.
- « Référencé » = trouvé par un scan de `src/**` + `public/animate/*.{html,js}` avec décodage des URL (`%20`) et comparaison sur des noms normalisés NFC/NFD ; tout doute = on garde
- `public/logo.png` et `public/favicon.ico` (référencés dans `__root.tsx`) sont conservés tels quels, réencodage en phase 2
- Le portrait (seul import Vite de `src/assets`, `index.tsx:8`) est copié brut vers `public/media/portrait.jpg` et référencé par URL absolue ; réencodage en phase 2 ; `src/assets/` est ensuite supprimé
- `public/animate/` : suppression de `.fla`, `.ai`, `~ai-*.tmp`, `RECOVER_*`, `illustrations/`, `3_CLEMENT.*` et des 8 vidéos à la racine ; `images/`, `imagesImad/`, `imagesframe2/`, `components/`, `videos/` intacts ; la chaîne des 6 scènes est parcourue à la main après nettoyage
- Tous les originaux (dont `affichepromo.png`, `prévention.png`, `charte_graphique.pdf`) sont copiés dans `media-src/` gitignoré AVANT toute suppression ; vérification de la copie (taille/hash) avant `rm`

### Garde-fou `bun run check`
- `scripts/check-assets.ts` exécuté par bun (TypeScript natif, aucune dépendance ajoutée)
- Échec dur au-delà de 20 Mio par fichier destiné à `dist/` ; avertissement dès 10 Mio
- Contrôle ffprobe (pix_fmt `yuv420p`, `moov` avant `mdat`) sur chaque `.mp4` ; les vidéos héritées non conformes (hero 10 bits/HDR, CV sans faststart) sont listées dans `scripts/check-assets.exceptions.json`, affichées à chaque run, à vider en phase 2 ; si ffprobe est absent, avertissement sans échec
- `package.json` : `"check": "tsc --noEmit && vite build && bun scripts/check-assets.ts && wrangler deploy --dry-run"`
- Le script doit être prouvé : un fichier factice > 20 Mio dans `public/` doit faire échouer `check`, puis être retiré

### Déploiement & dépôt
- Déploiement Cloudflare réel via `wrangler deploy` en fin de phase après `check` vert (compte connecté : lyna.rebahi@gmail.com)
- Push de `main` vers `origin` (github.com/lynarbh/portfolio) après chaque phase vérifiée
- Élagage : `bunx knip` (sans installer) avec `tailwindcss` et `tw-animate-css` ignorés ; ordre imposé : fichiers `src/components/ui/*` → paquets → lint ; build vert entre chaque étape ; ne jamais éditer `vite.config.ts` en réaction à une erreur (wrapper Lovable)
- La modification non commitée de `src/data/projects.ts` (travail en cours de Lyna) est laissée telle quelle et incluse dans le premier commit de la phase
- `vercel.json`, `server.js`, `package-lock.json` supprimés ; bun reste le gestionnaire
- Branching : aucun (commits sur `main`, config `branching_strategy: none`)

### Claude's Discretion
- Structure exacte de `scripts/check-assets.ts` et format de sortie
- Ordre des commits (un commit par sous-objectif, atomique, build vert)
- Détails de la config knip

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/components/Reveal.tsx` — utilisé par les routes, à conserver
- `src/lib/utils.ts` (`cn`) — vérifier l'usage réel avant suppression (knip)
- wrangler 4.82 déjà installé et authentifié ; `tsc` disponible ; `sharp` 0.34.5 présent en transitif (phase 2)

### Established Patterns
- Routes TanStack Start dans `src/routes/` (`__root.tsx`, `index.tsx`, `projects/$projectId.tsx`) ; `routeTree.gen.ts` généré — invariant : aucun fichier de `src/routes/` créé/supprimé/renommé
- Assets publics référencés par URL absolue (`/assets/...`, `/videos/...`), sauf le portrait (import Vite)
- Tailwind v4 CSS-first, thème dans `src/styles.css` ; classes déco (`.petal`, `.hud-tag`, `.ornament-card`, `.floating-badge`, `.portrait-gradient-border`, curseur) à retirer avec leurs composants

### Integration Points
- `src/routes/index.tsx` : imports `Petals`, `ProjectModal`, `CornerOrnament`, `CustomCursor()`, `PORTRAIT_EFFECT_SETTINGS`/classe `Point`, `Skills()` vide — à retirer
- `src/routes/projects/$projectId.tsx` : import `Petals` ; référence `/videos/extraitpubSAE1.mp4` (gitignoré, absent) ligne ~589 ; iframe `/animate/1_MOHAMED.html`
- `src/data/projects.ts` : `festival-flyer.jpg` / `festival-goodies.jpg` manquants (projet `festival-identite`)
- Aucun import externe de `src/components/ui/*` → suppression intégrale du dossier possible
- `public/animate/1_MOHAMED.js` référence `videos/*.mp4`, `images/`, `components/` ; scènes suivantes via `window.open('<next>.html','_self')`

</code_context>

<specifics>
## Specific Ideas

- Version « lite » : tout effet décoratif retiré sans remplacement dans cette phase (Lyna réintègre plus tard si besoin)
- Le PDF `public/assets/charte_graphique.pdf` est déjà dans `.gitignore` ; le déplacer hors de `public/` vers `media-src/` fait partie de la phase (SIZE-06 l'exploitera en phase 2)
- Aucun binaire de plusieurs Mo ne doit être ajouté à l'historique git pendant la phase

</specifics>

<deferred>
## Deferred Ideas

- Réencodage des médias, `public/_headers`, manifeste — phase 2
- Remplacement de `logo.png` par un SVG — phase 2 ou plus tard
- Activation de `no-unused-vars` dans ESLint — hors périmètre du milestone

</deferred>

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
- `scripts/check-assets.mjs` en JavaScript ESM exécuté par node (aucune dépendance ajoutée ; bun n'est pas installé)
- Échec dur au-delà de 20 Mio par fichier destiné à `dist/` ; avertissement dès 10 Mio
- Contrôle ffprobe (pix_fmt `yuv420p`, `moov` avant `mdat`) sur chaque `.mp4` ; les vidéos héritées non conformes (hero 10 bits/HDR, CV sans faststart) sont listées dans `scripts/check-assets.exceptions.json`, affichées à chaque run, à vider en phase 2 ; si ffprobe est absent, avertissement sans échec
- `package.json` : `"check": "tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run"`
- Le script doit être prouvé : un fichier factice > 20 Mio dans `public/` doit faire échouer `check`, puis être retiré

### Déploiement & dépôt
- ~~Déploiement Cloudflare réel en fin de phase~~ → REMPLACÉ (voir « Décisions ajoutées après recherche ») : dry-run seulement en phase 1
- Push de `main` vers `origin` (github.com/lynarbh/portfolio) après chaque phase vérifiée
- Élagage : `npx knip` (sans installer) avec `tailwindcss` et `tw-animate-css` ignorés ; ordre imposé : fichiers `src/components/ui/*` → paquets → lint ; build vert entre chaque étape ; ne jamais éditer `vite.config.ts` en réaction à une erreur (wrapper Lovable)
- La modification non commitée de `src/data/projects.ts` (travail en cours de Lyna) est laissée telle quelle et incluse dans le premier commit de la phase
- `vercel.json`, `server.js`, `bun.lockb`, `bunfig.toml` supprimés ; npm reste le gestionnaire (`package-lock.json` conservé)
- Branching : aucun (commits sur `main`, config `branching_strategy: none`)

### Décisions ajoutées après recherche (2026-09-27, validées par Lyna)
- Gestionnaire de paquets : **npm** (bun n'est pas installé ; `node_modules` vient de `package-lock.json`). Supprimer `bun.lockb` et `bunfig.toml`. Tous les scripts du milestone sont en `.mjs` exécutés par node, jamais en TS via bun.
- **Aucun déploiement réel en phase 1** : `wrangler deploy --dry-run` seulement. La production `lynarebahi.fr` (version `0b1ccd2a-db8e-4136-b65c-55615d6787b4`, déployée hors git le 2026-09-01, images WebP + hero 10,8 Mo, mais PDF et `.fla` servis publiquement) reste en ligne jusqu'à la phase 2. Rollback possible : `wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4`.
- `wrangler deploy --dry-run` applique bien le plafond de 25 Mio (vérifié : fichier factice de 26 Mio refusé, exit 1) mais ne fonctionne qu'après `vite build` (config redirigée `.wrangler/deploy/config.json` → `dist/server/wrangler.json`, assets dans `dist/client`).
- Fichier d'exceptions `scripts/check-assets.exceptions.json` : dérogations **par fichier et par règle** (`size`, `pix_fmt`, `faststart`). Jamais dérogeables : plafond 25 Mio, extensions interdites (`.fla`, `.ai`, `.pdf`, `.tmp`, `.psd`). Entrées initiales : `videos/hero.mp4` (pix_fmt), `videos/56_Lyna_REBAHI_CVvideo.mp4` (size 23,10 Mio + faststart), `animate/videos/empattage.mp4` (size 22,37 Mio). La phase 2 vide la liste.
- Vérification faststart par lecture de la structure MP4 (atomes de premier niveau, `moov` avant `mdat`) en JS pur — pas de dépendance à ffprobe ; ffprobe utilisé seulement pour `pix_fmt` avec repli « avertissement » s'il est absent.
- `extraitpubSAE1.mp4` existe dans `~/Desktop/site-backup/` (15,65 Mio) : copier dans `media-src/`, supprimer le bloc `$projectId.tsx:581-595`. Projet festival : `media: []` en attendant la phase 2.
- `public/animate/fond.jpeg` (orphelin) → quarantaine ; les 4 atlas non référencés de `images/` sont conservés (décision « on garde `images/` »).
- `public/assets/site.jpg` devient non référencé à cause du diff non commité de Lyna → quarantaine.
- Portrait : `git mv public/assets/portrait.jpg public/media/portrait.jpg` (même blob, historique inchangé) ; halo dégradé (`.portrait-gradient-border`) et animation flottante retirés.
- `index.tsx:26-197` (`PORTRAIT_EFFECT_SETTINGS`, classe `Point`) est du code mort jamais instancié ; seul `mousemove` : `index.tsx:620` dans `CustomCursor` ; second curseur rose en CSS pur `styles.css:47-50` à retirer aussi.
- knip : signale les 46 `ui/*.tsx`, `lib/utils.ts`, `hooks/use-mobile.tsx` et 43 paquets ; `@tanstack/react-query` n'est pas détecté → retrait manuel ; `@tanstack/router-plugin` conservé (dépendance transitive du framework).
- ESLint ne termine pas à cause du JS Animate : ajouter `public/`, `media-src/`, `dist/` aux ignores ESLint et créer `.prettierignore`. Ne pas lancer `prettier --write` global (631 erreurs de format préexistantes, hors périmètre).
- `tsc --noEmit` passe déjà ; `vite build` ≈ 4 s ; `vite preview` est cassé → smoke test via `wrangler dev` ; les URL `.html` répondent 307 vers l'URL sans extension, la chaîne Animate fonctionne à travers la redirection.
- `media-src/` n'est pas encore gitignoré : premier commit de la phase = `.gitignore` (`media-src/`, PDF déjà présent).

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

# Project Research Summary

**Project:** Portfolio — Lyna Rebahi (refonte "hybride cinéma")
**Domain:** Portfolio personnel audiovisuel/créatif, brownfield, sur TanStack Start + Cloudflare Workers
**Researched:** 2026-09-21 / 2026-09-25
**Confidence:** HIGH sur les contraintes plateforme et les outils/flags vérifiés localement ; MEDIUM sur les recommandations éditoriales (features, valeurs de qualité) ; voir Confidence Assessment

## Executive Summary

Ce milestone n'est pas une création de site mais un **sauvetage + mise en scène** d'un portfolio existant dont le poids (~525 Mo) et plusieurs défauts silencieux (vidéo hero en H.264 10-bit HDR qui ne joue pas sur iPhone, poster PNG de 4,37 Mo, vidéo CV sans faststart, doublons de 100 Mo+) annulent aujourd'hui la promesse "un recruteur comprend en 3 secondes que Lyna fait de la vidéo". La recherche converge sur un enchaînement strict en trois temps — **nettoyer avant de mesurer, mesurer avant d'encoder, encoder avant de mettre en scène** — parce que chaque étape suivante devient plus rapide et moins risquée si la précédente est faite correctement (on n'encode pas des fichiers qu'on va supprimer ; on ne construit pas d'effets cinéma sur un budget de poids non stabilisé).

L'approche recommandée est délibérément low-tech côté outillage : un script offline (`scripts/media.ts`) qui tourne uniquement sur la machine de dev — jamais sur le chemin de build Cloudflare — avec `sharp` pour les images, `ffmpeg` pour la vidéo et **Ghostscript (`gs`, déjà installé)** pour rasteriser le PDF de charte graphique (la piste `pdftoppm` envisagée initialement est écartée : poppler n'est pas installé). Côté animation, aucune librairie n'est ajoutée : CSS + deux hooks React minces (SSR-safe via `useSyncExternalStore`) couvrent tout le vocabulaire "cinéma" (grain, cadre, générique, timecode, reveal). Le principal risque n'est pas technique mais **temporel et de séquençage** : trois pièges (le PDF de 22,5 Mo qui ne doit jamais être commité, la chaîne Animate à 6 scènes qui semble n'avoir qu'une seule page utilisée, et l'ordre de suppression code/dépendances) peuvent silencieusement casser des choses qui "ont l'air bonnes" en QA visuelle rapide.

Le risque business principal est le respect de l'échéance d'une semaine : les quatre docs de recherche s'accordent pour dire que **nettoyage + poids + hero/qui-suis-je/projets sont indépendamment livrables** et doivent être déployés avant que la refonte visuelle avancée (crédits type générique, bande process, modèle de données `ProjectBlock[]`, refonte complète de la fiche projet) ne soit entamée. Un site plus léger et sans régression, même sans la totalité des ornements cinéma, est un résultat recruteur-ready ; une refonte à moitié terminée au vendredi ne l'est pas.

## Key Findings

### Recommended Stack

Le pipeline média tourne entièrement offline, jamais dans le build Cloudflare (pas de binaire natif sur le chemin de déploiement). Images : `sharp@0.35.4` (à épingler en devDependency, actuellement seulement transitif) avec deux presets — **`photo`** (AVIF/WebP 4:2:0, JPEG mozjpeg, pour portraits et photos) et **`graphic`** (AVIF/JPEG **4:4:4 explicite**, PNG palette, pour affiches/logos/planches de charte) — parce que le défaut AVIF de sharp est **4:4:4** (pas 4:2:0 comme on pourrait le supposer) : le preset photo doit donc forcer `chromaSubsampling: "4:2:0"`, et le preset graphic garde simplement le défaut. `sharp` strip les métadonnées et convertit en sRGB par défaut — c'est la bonne règle pour ce repo (un PNG porte un profil moniteur "Color LCD" erroné) à condition d'appeler `.rotate()` en tête de pipeline pour ne pas perdre l'orientation EXIF avant le strip.

Vidéo : `ffmpeg 8.1.1` (Homebrew, déjà installé, `libx264`/`aac`). Le point le plus important, découvert en dernier et corrigeant les analyses précédentes : `hero.mp4` n'est pas seulement 10-bit (`yuv420p10le`) mais **HDR HLG bt2020** (`color_transfer=arib-std-b67`). Un simple `-pix_fmt yuv420p` sans conversion de colorimétrie produit un fichier 8-bit qui *joue* mais reste interprété en BT.2020 par les navigateurs → image délavée/désaturée. Il faut chaîner un filtre `colorspace` (bt2020→bt709) **en plus** du `-pix_fmt yuv420p`, et extraire le poster **depuis la sortie SDR convertie**, pas depuis le master HLG, pour que poster et première frame vidéo correspondent. Toute vidéo re-encodée doit vérifier `ffprobe` : profil `High`, `pix_fmt=yuv420p`, premier box `moov` (faststart), et rester sous ~20 Mio (marge sur le plafond Cloudflare de 25 Mio).

PDF : **Ghostscript (`gs`)**, déjà présent sur la machine — pas `pdftoppm`/poppler, qui n'est pas installé (correction de la première passe d'architecture). Rendu à 300 dpi puis downscale par `sharp` (lanczos3) donne des bords de typo plus propres qu'un rendu à la taille cible.

Animation : **aucune librairie n'est ajoutée** (ni Motion/`framer-motion`, ni GSAP). CSS + Tailwind v4 (classes déjà présentes via `tw-animate-css`) + deux hooks (`useReducedMotion` via `useSyncExternalStore`, `IntersectionObserver` pour le reveal) couvrent tout le vocabulaire cinéma prévu (grain, cadre écran bombé, générique, timecode, reveal au scroll). GSAP est explicitement écarté (imprévisible sur mobile, ScrollTrigger = risque de jank documenté) ; Motion resterait une option v2+ uniquement si des animations de layout/exit apparaissent plus tard.

Nettoyage : `knip@6.38.0` remplace `depcheck` (plus maintenu, ne détecte pas les fichiers/exports inutilisés). Confirmé par grep direct : `@tanstack/react-query`, `zod`, `@hookform/resolvers`, `date-fns` ont **zéro** import dans `src/` — leur suppression est actée (decision PROJECT.md : validation HTML native, pas de zod/react-hook-form — ne pas revenir sur ce point malgré une suggestion contraire trouvée ailleurs dans le codebase).

### Expected Features

**Must have (table stakes) :**
- Ligne de positionnement + objectif alternance visibles sans scroll (coût quasi nul, valeur très haute)
- Vidéo hero fonctionnelle sur mobile (poster + pause accessible, WCAG 2.2.2), poids et lisibilité maîtrisés
- Rôle explicite par projet ("Réalisation & montage", pas "Membre du groupe") et contexte/brief courts
- Vraies vignettes par projet (pas de vignette générique partagée), projets vidéo en tête
- Contact complet : email en clair + LinkedIn + formulaire + CV PDF téléchargeable et nommé correctement
- Aucun média/lien cassé, aucune faute d'orthographe, chargement rapide, métadonnées OG correctes

**Should have (différenciateurs) :**
- Mise en scène "générique de film" — mais seulement si chaque ornement porte une information réelle (année, rôle, durée), jamais du pur décor
- Bloc crédits type fin de film par projet (Réalisation · Cadre · Montage · Étalonnage · Son)
- Bande "process" (storyboard → BTS → montage → final) sur les projets vidéo phares
- Grille de logos groupée par métier (Vidéo / Design / Web), **sans indicateur de niveau** (barres/% perçues négativement)
- Planches de charte Tafsut extraites du PDF en galerie légendée

**Defer (v1.x / v2+) :**
- Showreel dédié 60–90 s (prévoir le slot, ne pas le simuler tant que Lyna n'a pas le montage)
- Vignettes projet animées au survol (uniquement après stabilisation du budget de poids)
- Façade YouTube click-to-load (utile dès ≥ 3 embeds sur une page)
- Refactor complet data-driven de `$projectId.tsx` (665 lignes) — gain de maintenance réel mais risqué sur une semaine
- Version EN, dark mode, CMS, blog, mini-book PDF — hors périmètre confirmé

**Anti-features à ne surtout pas construire :** barres de compétence/pourcentages, mur de 13+ badges d'outils, copy "passionnée/créative/polyvalente", métriques inventées, écran de chargement avant le reel, scroll-jacking/transitions pellicule lourdes, carrousel multi-vidéos dans le hero, dépôt exhaustif de tous les projets de formation.

### Architecture Approach

Le système cible sépare strictement un **pipeline offline** (masters gitignorés dans `media-src/`, jamais commités → dérivés committés dans `public/media/` + manifeste typé `src/data/media.generated.ts`) d'une **couche de données pure** (`projects.ts`, `tools.ts`, `content/copy.ts`) et d'une **présentation en flux unique** `routes → sections → {media, cinema, copy} → data`, jamais latéral ni ascendant. La règle qui garde tout maintenable : `cinema/` ne doit jamais importer depuis `data/` ; le jour où c'est le cas, la séparation a échoué.

**Composants majeurs :**
1. `scripts/media.ts` — transcodage/redimensionnement/extraction de poster/rasterisation PDF, tourne uniquement en local, jamais sur le chemin de build Cloudflare
2. `src/data/media.generated.ts` — manifeste des dimensions intrinsèques + srcsets, généré, jamais édité à la main (comme `routeTree.gen.ts`)
3. `MediaBlock` (`src/components/media/`) — unique switch exhaustif sur l'union discriminée `ProjectBlock`, ce qui supprime définitivement les branches `project.id === "…"` dans `$projectId.tsx` plutôt que de les déplacer
4. `src/components/cinema/*` — primitives visuelles pures (cadre, générique, timecode, reveal), sans aucune connaissance des données
5. `public/_headers` + noms de fichiers avec hash de contenu — cache immutable correct pour `/media/*`

### Critical Pitfalls

1. **Vidéo hero 10-bit ET HDR HLG** — un simple `-pix_fmt yuv420p` fait jouer la vidéo mais la laisse désaturée ; il faut le filtre `colorspace` bt2020→bt709 en plus, et extraire le poster depuis la sortie convertie
2. **La chaîne Animate SkøllRub compte 6 scènes actives** (`1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN`), pas une seule page : seuls `3_CLEMENT.*` et `illustrations/` sont réellement orphelins ; toute affirmation antérieure limitant l'usage à `1_MOHAMED` est fausse et un nettoyage naïf casse l'animation à mi-parcours sans que ça se voie en QA de surface
3. **Le PDF de charte (22,5 Mio) ne doit jamais être commité**, même une fois — `git rm` ne récupère pas l'espace après coup ; `.git` pèse déjà 333 Mo. Même règle pour chaque itération d'encodage média : itérer en `/tmp`, ne commiter que le résultat final
4. **`bun run build` ne vérifie rien sur la taille** — `vite build` copie `public/` tel quel ; le plafond de 25 Mio Cloudflare est appliqué à l'upload, pas au build. Un garde-fou (`find dist -size +20M`, `wrangler deploy --dry-run`) doit exister dès la phase 1, pas à la fin
5. **Taille disque ≠ poids mémoire décodé** — `chartegraphique_SkollRub.png` ne pèse que 3 Mo mais décode à ~173 Mio de RAM (9047×5032 px) ; le critère doit porter sur les **dimensions** (plafond 2400 px grand côté), pas sur les octets
6. **Ordre de suppression code mort** — supprimer les fichiers `src/components/ui/*` avant les paquets, puis les paquets, puis seulement réactiver le lint ; ne jamais éditer `vite.config.ts` en réaction à une erreur de build (le wrapper Lovable avertit explicitement de ne pas réajouter les plugins à la main)

## Implications for Roadmap

Les quatre documents convergent sur un même enchaînement causal : le nettoyage réduit le volume à traiter, le pipeline média stabilise le poids, et seulement alors la mise en scène cinéma peut être construite sans devoir être défaite. Structure de phases suggérée :

### Phase 1 : Nettoyage & filet de sécurité
**Rationale :** aucune autre phase n'est fiable sans un état de référence propre ; PITFALLS impose que le garde-fou de taille et le `.gitignore` du PDF existent *avant* le premier commit du milestone, et que la chaîne Animate à 6 scènes soit comprise avant toute suppression.
**Delivers :** `"check": "tsc --noEmit && vite build"` + `scripts/check-assets.ts` ; suppression du code mort (`ProjectModal`, `Petals`, `Skills()`, curseur custom, badge, ornements, kit `ui/` non utilisé) dans l'ordre fichiers→paquets ; une seule cible de déploiement (retrait `vercel.json`/`server.js`/`package-lock.json`) ; dédup `src/assets` vs `public/assets` (avec migration de l'import Vite de `portrait.jpg`) ; retrait des sources de travail (`.fla`, `.ai`, `RECOVER_*`, `illustrations/`, `3_CLEMENT.*`) ; correction des références cassées ; `charte_graphique.pdf` gitignoré avant tout commit.
**Addresses :** "Aucun lien / média cassé", "Chargement rapide" (partiellement), toutes les anti-features de décor listées dans FEATURES.md.
**Avoids :** Pitfalls 2, 3, 8, 9, 10, 11 (chaîne Animate, doublons vidéo, faux positifs de grep sur noms accentués/encodés, `src/assets` à 97% dupliqué seulement, PDF en historique git, ordre de suppression dépendances).

### Phase 2 : Pipeline média & réduction de poids
**Rationale :** ne pas encoder ce qui va être supprimé (dépend de la Phase 1) ; c'est ici que l'objectif < 60 Mo et le plafond 25 Mio/asset sont réellement atteints — le cœur du milestone en termes d'effort (HIGH complexity dans FEATURES.md).
**Delivers :** `scripts/media.ts` (sharp presets `photo`/`graphic` + ffmpeg avec conversion colorimétrique HDR→SDR + Ghostscript pour le PDF), manifeste `media.generated.ts`, `public/_headers` avec noms hashés, extraction des planches Tafsut, correction hero/CV video (pix_fmt, faststart, poster < 80 Ko).
**Uses :** `sharp@0.35.4`, `ffmpeg 8.1.1` (`libx264`, filtre `colorspace`), `gs` (Ghostscript), `knip` pour la passe de dépendances finale.
**Implements :** Pattern 1 (pipeline offline + manifeste committé) de ARCHITECTURE.md.
**Avoids :** Pitfalls 1, 4, 5, 6, 7, 13 (HDR/10-bit, garde-fou de taille absent, poids mémoire décodé, poster PNG énorme, faststart manquant, chroma/ICC sur les graphiques).

### Phase 3 : Hero, Qui suis-je, Projets — mise en scène hybride (priorité recruteur-ready)
**Rationale :** c'est le sous-ensemble explicitement priorisé par PROJECT.md pour l'échéance de la semaine ; ne dépend que du manifeste média (Phase 2), pas du refactor complet du modèle de données — peut donc s'enchaîner sans attendre la Phase 4.
**Delivers :** Hero (vidéo en scène, cadre, générique, positionnement + disponibilité), section Qui suis-je (portrait animé lié à l'audiovisuel, vidéo CV cadrée/légendée, positionnement explicite), grille de projets (vraies vignettes, vidéo en tête, logos d'outils par projet), section Compétences (grille groupée par métier, logos `simple-icons` ou placeholders nommés `/media/logos/<id>.svg`), text slots nommés avec consignes pour Lyna.
**Addresses :** l'essentiel des "Launch With" de FEATURES.md (positionnement, poster/pause, vraies vignettes, rôle explicite, contact complet, text slots, lazy-load, OG).
**Implements :** CSS-first cinema primitives (Pattern 3) + hooks reduced-motion SSR-safe.

### Phase 4 : Modèle de données & fiche projet détaillée (peut être différée)
**Rationale :** refactor le plus risqué à budgétiser en fin de semaine (665 lignes à démonter dans `$projectId.tsx`) ; ARCHITECTURE.md le marque explicitement "not blocking" si le temps manque — alternative de repli : ajouter les champs en plus des branches existantes plutôt que de tout migrer.
**Delivers :** `ProjectBlock[]` union discriminée, `MediaBlock` switch exhaustif, `tools.ts` registry, bloc crédits type générique, bande process, slot "ce que j'ai appris".
**Addresses :** les différenciateurs P2 de FEATURES.md (crédits, process, planches de charte en blocs structurés).

### Phase 5 : Vérification & QA mobile réelle
**Rationale :** plusieurs pitfalls (grain SVG, overlays sans `pointer-events: none`, reduced-motion, autoplay iOS) sont invisibles en émulation desktop et n'apparaissent que sur un vrai téléphone.
**Delivers :** garde-fou de taille exécuté contre `dist/` + `wrangler deploy --dry-run`, passe Lighthouse, test tactile de chaque section, vérification `prefers-reduced-motion` réel, clic complet des 6 scènes Animate, test d'envoi du formulaire de contact.
**Avoids :** Pitfall 12 (effets cinéma qui détruisent le scroll mobile) et la checklist "Looks Done But Isn't" complète de PITFALLS.md.

### Phase Ordering Rationale

- **Nettoyage avant poids avant mise en scène** : dépendance causale directe (ne pas encoder ce qui sera supprimé ; ne pas construire d'effets sur un budget de poids instable) — confirmée indépendamment par ARCHITECTURE.md et PITFALLS.md.
- **Hero/Qui-suis-je/Projets avant le refactor du modèle de données** : les deux ne partagent qu'une dépendance commune (le manifeste média de la Phase 2), pas de dépendance directe entre elles — elles peuvent donc être interverties ou menées en parallèle si le temps se resserre, contrairement à Phase 4 qui dépend de Phase 3 techniquement mais est reportable sans casser la valeur livrée.
- **Le garde-fou de taille et le `.gitignore` du PDF sont introduits en Phase 1, pas en Phase 5** : c'est un pitfall explicite (Pitfall 4, Pitfall 10) — vérifier "à la fin" est justement le pattern d'échec documenté.

### Research Flags

Needs research (probable `--research-phase`) :
- **Phase 2 (pipeline média) :** les valeurs exactes de qualité (CRF, quality AVIF/WebP) sont MEDIUM confidence — content-dependent, à valider par A/B visuel sur les fichiers réels avant de lancer le traitement par lot ; la conversion HDR→SDR avec le filtre `colorspace` intégré n'a pas de solution de repli testée si le rendu paraît décalé (fallback `zscale`/`tonemap` nécessite une build ffmpeg non standard)
- **Phase 4 (modèle de données) :** migration de `Project` à risque élevé en fin de semaine ; nécessite un plan de repli explicite (widen → migrate → narrow, un commit vert par étape)

Phases with standard patterns (skip research-phase) :
- **Phase 1 (nettoyage) :** patterns bien documentés (knip, ordre fichiers→paquets), essentiellement de l'exécution outillée
- **Phase 3 (hero/à propos/projets) :** CSS + hooks SSR-safe est un pattern standard React 19 / TanStack Start, pas de dépendance externe nouvelle
- **Phase 5 (vérification) :** checklist déjà exhaustive dans PITFALLS.md, pas de recherche supplémentaire nécessaire

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Versions/flags vérifiés sur npm et docs officielles, encodages testés localement le 2026-09-25 (ffmpeg, sharp) ; MEDIUM sur les valeurs exactes de qualité/CRF (dépendantes du contenu) |
| Features | MEDIUM-HIGH | Convergence de plusieurs sources métier motion/vidéo indépendantes ; LOW sur les chiffres précis d'attention recruteur (7s/30s), HIGH sur la direction |
| Architecture | HIGH | Contraintes plateforme vérifiées contre la doc Cloudflare et TanStack Start (Context7), inspection directe de `node_modules` et `public/` |
| Pitfalls | HIGH (constats locaux) / MEDIUM-HIGH (écosystème) | Constats vérifiés localement avec `ffprobe`/`magick`/`grep`/`shasum` ; sources secondaires cross-vérifiées sur ≥ 2 sources |

**Overall confidence:** HIGH

### Gaps to Address

- **Longueur optimale du showreel pour un profil étudiant** (vs professionnel) — 60–90 s est une transposition depuis des sources pro, non validée pour un contexte junior ; à arbitrer avec Lyna, non bloquant pour v1 (le slot suffit)
- **Rendu réel de l'export Adobe Animate sur mobile iOS** — non vérifié sur appareil ; à tester avant de le promouvoir en "bonus interactif" plutôt que de le limiter à une capture vidéo de repli
- **Fidélité colorimétrique de la conversion HDR→SDR sans `zscale`** — le filtre `colorspace` intégré est la solution recommandée (pas de `libzimg` dans ce build ffmpeg) mais n'a été validée que par comparaison visuelle, pas par mesure objective (VMAF/SSIM colorimétrique) ; prévoir une vérification visuelle systématique à chaque nouvel encodage de vidéo HDR
- **`wrangler deploy --dry-run` applique-t-il réellement le plafond de 25 Mio/fichier ?** — non confirmé dans la doc/`--help` ; c'est pourquoi `scripts/check-assets.ts` reste le garde-fou principal, le dry-run n'étant qu'une confirmation secondaire
- **Retour recruteur français de première main** — aucun n'a pu être collecté pendant la recherche ; idéalement, faire tester le site à 1-2 professionnels du réseau IUT/CFA avant l'envoi massif de candidatures, en dehors du périmètre de ce milestone

## Sources

### Primary (HIGH confidence)
- Cloudflare Workers — Static assets, platform limits (25 MiB/fichier), headers `_headers` : https://developers.cloudflare.com/workers/static-assets/ , https://developers.cloudflare.com/workers/platform/limits/
- TanStack Start docs (via Context7 `/websites/tanstack_start`) — `head` meta/links, Early Hints, prerendering, hydration
- npm registry (vérifié 2026-09-25) : sharp 0.35.4, knip 6.38.0, wrangler 4.140.0, lite-youtube-embed 0.3.4, simple-icons 16.32.0
- Encodages de test locaux (ffmpeg 8.1.1, `ffprobe`, `magick identify`, `shasum`) sur les fichiers réels du repo — HDR HLG détecté sur `hero.mp4`, box order faststart, dimensions/ICC des images

### Secondary (MEDIUM confidence)
- School of Motion, OlafMotion, Vimeo Blog, Modulify, Fast.io — pratiques de portfolio motion/vidéo (reel au-dessus de la ligne de flottaison, bloc crédits, process visible)
- CESACOM, Narratiiv, Studi, France Travail, Indeed FR — attentes portfolio/CV alternance en France
- Mozilla bug 1743824, WebKit bug 219889, Adobe Media Encoder feature request — comportements 10-bit H.264 et autoplay iOS

### Tertiary (LOW confidence, à valider)
- Estimations de temps d'attention recruteur ("7 secondes", "30 secondes") — blogs/LinkedIn, aucune étude arbitrée
- Fourchette de durée du showreel pour un profil étudiant — transposition depuis des sources professionnelles
- Tailles de bundle GSAP — training data, non vérifiées (non pertinent puisque GSAP est écarté)

---
*Research completed: 2026-09-25*
*Ready for roadmap: yes*

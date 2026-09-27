# Requirements: Portfolio — Lyna Rebahi

**Defined:** 2026-09-27
**Core Value:** Un recruteur qui ouvre le site comprend en 3 secondes que Lyna vit l'audiovisuel — la vidéo domine, les médias sont mis en scène — et le site se charge vite malgré des visuels de qualité.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Nettoyage (CLEAN)

- [ ] **CLEAN-01**: Le code mort est supprimé (`ProjectModal.tsx`, `Skills()` vide, `Petals.tsx`, kit `src/components/ui/` non utilisé par les pages) et `tsc --noEmit && vite build` passe
- [ ] **CLEAN-02**: Tous les effets déco sont retirés pour la version lite : pétales, curseur rose personnalisé, badge flottant « 20 ans », ornements de coins, particules sur le portrait (`PORTRAIT_EFFECT_SETTINGS` / classe `Point`)
- [ ] **CLEAN-03**: Les dépendances inutilisées sont retirées après passage de `knip` (`@tanstack/react-query`, `zod`, `react-hook-form`, `@hookform/resolvers`, `date-fns`, paquets `@radix-ui/*` orphelins) ; la validation du formulaire reste en HTML natif
- [ ] **CLEAN-04**: `src/assets/` est supprimé après migration de `portrait.jpg` (import Vite vivant dans `index.tsx:8`) ; un seul emplacement canonique pour les médias : `public/media/**`
- [ ] **CLEAN-05**: `public/animate/` est nettoyé (`.fla`, `.ai`, `~ai-*.tmp`, `RECOVER_*`, `illustrations/`, `3_CLEMENT.*`, les 8 vidéos à la racine) et la chaîne complète des 6 scènes (`1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN`) se parcourt jusqu'au bout
- [ ] **CLEAN-06**: Les fichiers de `public/assets/` non référencés sont retirés après un inventaire qui décode les URL (`%20`, `ø`, `é`, normalisation NFD/NFC) et une étape de quarantaine avant suppression
- [ ] **CLEAN-07**: Les références cassées sont corrigées (`extraitpubSAE1.mp4` gitignoré/absent dans `$projectId.tsx`, `festival-flyer.jpg` / `festival-goodies.jpg` dans `projects.ts`)
- [ ] **CLEAN-08**: Cloudflare est la seule cible de déploiement : `vercel.json`, `server.js`, `bun.lockb` et `bunfig.toml` sont supprimés ; npm (déjà utilisé pour `node_modules`) reste le gestionnaire de paquets avec `package-lock.json`
- [ ] **CLEAN-09**: `charte_graphique.pdf` (22,5 Mio) n'est jamais commité (`.gitignore`) et tous les originaux sont sauvegardés hors repo dans `media-src/` (gitignoré) avant tout réencodage

### Poids & pipeline média (SIZE)

- [ ] **SIZE-01**: Un script hors-ligne `scripts/media.mjs` (sharp + ffmpeg + Ghostscript) régénère de façon reproductible `public/media/**` et le manifeste `src/data/media.generated.ts` depuis `media-src/`
- [ ] **SIZE-02**: Chaque image est redimensionnée d'abord (≤ 2400 px grand côté), convertie en sRGB puis débarrassée de son ICC, encodée selon deux presets — photos : AVIF/WebP 4:2:0 + JPEG de repli ; affiches, logos, typo : AVIF 4:4:4 ou PNG quantifié — renommée en kebab-case ASCII et servie via `<picture>` + `srcset`
- [ ] **SIZE-03**: `hero.mp4` est converti HDR HLG bt2020 → SDR bt709 (filtre `colorspace`), H.264 8 bits `yuv420p`, 30 fps, muet, `+faststart`, ≤ 4 Mo, avec un poster léger extrait de la sortie convertie
- [ ] **SIZE-04**: La vidéo CV est réencodée ≤ 12 Mo, `yuv420p`, `+faststart`, audio AAC, sans dégradation visible
- [ ] **SIZE-05**: Les vidéos du process SkøllRub sont réencodées à 25 fps, `yuv420p`, `+faststart`, ≤ 12 Mo chacune, en conservant les chemins relatifs `videos/*.mp4` attendus par `1_MOHAMED.js`
- [ ] **SIZE-06**: ~10 pages clés de la charte Tafsut (logo, palette, typos, affiche, billets, goodies, signalétique) sont extraites via `gs` à 300 dpi puis passées au preset graphic ; le PDF sort de `public/`
- [ ] **SIZE-07**: Un garde-fou `npm run check` (`tsc --noEmit && vite build && scripts/check-assets.mjs`) échoue si un fichier destiné à `dist/` dépasse 20 Mio ou si une vidéo n'est pas `yuv420p` / faststart ; `wrangler deploy --dry-run` passe ; le garde-fou existe dès la première phase
- [ ] **SIZE-08**: `public/` pèse moins de 60 Mo au total ; les médias hors écran sont chargés en lazy ; seul le hero est préchargé
- [ ] **SIZE-09**: `affichepromo.png` et `prévention.png` sont réencodées et intégrées à un projet existant choisi par Lyna (projet à préciser)

### Hero (HERO)

- [ ] **HERO-01**: La vidéo de fond joue réellement sur iPhone, Android et desktop (`muted`, `playsInline`, poster léger) avec un bouton pause accessible
- [ ] **HERO-02**: Une ligne de positionnement + disponibilité apparaît sous le titre (slot texte : alternance chargée de communication, spécialité réalisation/montage, disponible à partir de…)
- [ ] **HERO-03**: La mise en scène hybride conserve la palette et les typos actuelles et ajoute des codes cinéma légers (cadre écran, grain tuilé pré-rendu, transitions pellicule) sans coût mobile ni overlay bloquant, désactivés sous `prefers-reduced-motion`
- [ ] **HERO-04**: Les métadonnées Open Graph utilisent une frame de la vidéo hero comme image et un slot de description (140-160 caractères)

### Qui suis-je & compétences (ABOUT)

- [ ] **ABOUT-01**: Le portrait est animé avec un effet lié à l'audiovisuel en CSS pur (ex. révélation projecteur, cadre viseur, défilement pellicule), avec un rendu statique sous `prefers-reduced-motion`
- [ ] **ABOUT-02**: Le positionnement est explicite via des slots texte (intro 40-70 mots, objectif alternance, spécialité vidéo, polyvalence MMI)
- [ ] **ABOUT-03**: Une grille de logos groupée par métier (Vidéo : Premiere Pro, After Effects, DaVinci Resolve, CapCut · Design : Photoshop, Illustrator, InDesign, Lightroom, Animate, Canva · Web : Figma, HTML/CSS, VS Code) est affichée sans indicateur de niveau ; chaque logo manquant a un placeholder monogramme nommé `public/media/logos/<id>.svg` que Lyna remplace sans toucher au code
- [ ] **ABOUT-04**: La vidéo CV est libellée avec sa durée (« CV vidéo — 1:25 »), a un poster et ne se précharge pas

### Projets (PROJ)

- [ ] **PROJ-01**: Chaque projet a sa propre vignette extraite de ses médias (plus de vignette partagée entre 4 projets)
- [ ] **PROJ-02**: Les projets vidéo apparaissent en premier dans la grille, sans filtre actif par défaut
- [ ] **PROJ-03**: Les logos des logiciels remplacent les tags texte sur les cartes et les fiches projet, via un registre d'outils partagé (`src/data/tools.ts`)
- [ ] **PROJ-04**: Chaque fiche affiche un bloc crédits type générique de film (rôle, année, format, durée, contexte/commanditaire) alimenté par des champs optionnels du type `Project` et rendu par un composant partagé au-dessus du contenu existant
- [ ] **PROJ-05**: Les deux projets vidéo (stop motion, clip Blue) ont une bande process (storyboard → coulisses → final) alimentée par un champ optionnel `process[]`, avec placeholders nommés tant que Lyna n'a pas fourni les médias
- [ ] **PROJ-06**: Le projet « Identité d'un festival » affiche la galerie des pages Tafsut extraites et passe en terminé (`inProgress` retiré)
- [ ] **PROJ-07**: Les branches `project.id === "…"` de `$projectId.tsx` sont conservées ; seuls les médias cassés y sont corrigés et les chemins pointés vers `public/media/**`
- [ ] **PROJ-08**: Les embeds YouTube passent en `youtube-nocookie.com` avec `loading="lazy"`
- [ ] **PROJ-09**: L'iframe Adobe Animate est chargée en lazy et la chaîne des 6 scènes fonctionne sur l'URL déployée
- [ ] **PROJ-10**: Le rôle de chaque projet est un slot texte explicite (plus de « Membre du groupe ») que Lyna renseigne

### Contact & candidature (CONTACT)

- [ ] **CONTACT-01**: L'email est affiché en clair (lien `mailto:`) et un lien LinkedIn est présent, en plus du formulaire
- [ ] **CONTACT-02**: Un CV PDF nommé (`CV_Lyna_Rebahi_Alternance_Communication.pdf`) est téléchargeable ; placeholder tant que Lyna ne l'a pas fourni
- [ ] **CONTACT-03**: Le formulaire EmailJS reste fonctionnel avec validation HTML native et un champ honeypot anti-spam

### Textes (TEXT)

- [ ] **TEXT-01**: Tous les textes du site vivent dans un fichier de contenu unique (`src/content/copy.ts`) sous forme de slots nommés avec une consigne courte (longueur, angle, à bannir) ; aucun texte n'est écrit en dur dans les composants
- [ ] **TEXT-02**: Les textes actuels sont conservés comme valeurs par défaut et marqués `TODO` là où Lyna doit réécrire ; les fautes de frappe évidentes de `projects.ts` sont corrigées

### Performance & accessibilité (PERF)

- [ ] **PERF-01**: `prefers-reduced-motion` est respecté globalement via un hook SSR-safe et une règle CSS
- [ ] **PERF-02**: Aucun listener `mousemove` global ni re-render React lié au curseur ne subsiste
- [ ] **PERF-03**: Une QA mobile réelle (iOS Safari + Android) sur l'URL Cloudflare déployée valide : hero qui joue, scroll fluide, Animate navigable, aucune image > 2400 px décodée

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Hero & mise en scène

- **HERO-V2-01**: Emplacement showreel 60-90 s libellé sous le hero (dès que le reel existe)
- **HERO-V2-02**: Mise en scène « générique » avec métadonnées porteuses d'info aux coins (nom, rôle, année, contact)

### Médias

- **SIZE-V2-01**: Façade `lite-youtube-embed` click-to-load (≈ 100 Ko au lieu de 1,3 Mo par embed)
- **SIZE-V2-02**: Sous-titres `.vtt` sur la vidéo CV
- **SIZE-V2-03**: Vignettes animées au survol (une fois le budget médias stabilisé)
- **SIZE-V2-04**: Animate en click-to-load avec capture vidéo de repli (après test iOS réel)

### Projets & candidature

- **PROJ-V2-01**: Refactor complet data-driven de `$projectId.tsx` (`ProjectBlock[]`, 665 → ~120 lignes)
- **PROJ-V2-02**: Slot « ce que j'ai appris » par projet
- **CONTACT-V2-01**: Mini-book PDF 6-10 pages généré depuis les mêmes contenus
- **PERF-V2-01**: Prerender TanStack Start (`prerender.enabled`) si compatible avec le wrapper Lovable

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Rédaction des textes définitifs par l'IA | Lyna veut une écriture qui lui ressemble ; le code livre slots + consignes |
| CMS / backend / base de données | Contenu statique dans `projects.ts` suffisant |
| Nouveaux projets | Hors périmètre du milestone ; structure prête à en accueillir |
| Version anglaise | Cible recruteurs francophones |
| Suite de tests complète | `npm run check` + QA visuelle suffisent sur ce délai |
| Changement de palette / typos | Direction hybride retenue, identité conservée |
| Effets déco (curseur, badge, ornements, pétales, particules) | Retirés pour la version lite ; réintégrés plus tard si Lyna le souhaite |
| Barres de niveau de compétences | Signal négatif confirmé côté recruteurs |
| Lib d'animation (Motion, GSAP) | CSS + hook reduced-motion suffisent ; évite 20-34 Ko et les pièges SSR |
| Git LFS / réécriture d'historique | Hors délai ; on empêche seulement les nouveaux gros fichiers d'entrer |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| CLEAN-01 | Phase 1 | Pending |
| CLEAN-02 | Phase 1 | Pending |
| CLEAN-03 | Phase 1 | Pending |
| CLEAN-04 | Phase 1 | Pending |
| CLEAN-05 | Phase 1 | Pending |
| CLEAN-06 | Phase 1 | Pending |
| CLEAN-07 | Phase 1 | Pending |
| CLEAN-08 | Phase 1 | Pending |
| CLEAN-09 | Phase 1 | Pending |
| SIZE-01 | Phase 2 | Pending |
| SIZE-02 | Phase 2 | Pending |
| SIZE-03 | Phase 2 | Pending |
| SIZE-04 | Phase 2 | Pending |
| SIZE-05 | Phase 2 | Pending |
| SIZE-06 | Phase 2 | Pending |
| SIZE-07 | Phase 1 | Pending |
| SIZE-08 | Phase 2 | Pending |
| SIZE-09 | Phase 4 | Pending |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 3 | Pending |
| HERO-03 | Phase 3 | Pending |
| HERO-04 | Phase 3 | Pending |
| ABOUT-01 | Phase 3 | Pending |
| ABOUT-02 | Phase 3 | Pending |
| ABOUT-03 | Phase 3 | Pending |
| ABOUT-04 | Phase 3 | Pending |
| PROJ-01 | Phase 4 | Pending |
| PROJ-02 | Phase 4 | Pending |
| PROJ-03 | Phase 4 | Pending |
| PROJ-04 | Phase 4 | Pending |
| PROJ-05 | Phase 4 | Pending |
| PROJ-06 | Phase 2 | Pending |
| PROJ-07 | Phase 2 | Pending |
| PROJ-08 | Phase 4 | Pending |
| PROJ-09 | Phase 4 | Pending |
| PROJ-10 | Phase 4 | Pending |
| CONTACT-01 | Phase 5 | Pending |
| CONTACT-02 | Phase 5 | Pending |
| CONTACT-03 | Phase 5 | Pending |
| TEXT-01 | Phase 3 | Pending |
| TEXT-02 | Phase 3 | Pending |
| PERF-01 | Phase 3 | Pending |
| PERF-02 | Phase 1 | Pending |
| PERF-03 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 44 total
- Mapped to phases: 44
- Unmapped: 0 ✓

---
*Requirements defined: 2026-09-27*
*Last updated: 2026-09-27 after roadmap creation (traceability)*

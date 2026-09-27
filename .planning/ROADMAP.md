# Roadmap: Portfolio — Lyna Rebahi (refonte « version lite » hybride cinéma)

## Overview

Ce milestone sauve un portfolio existant (~525 Mo, vidéo hero illisible sur iPhone, doublons, code mort) puis le met en scène pour qu'un recruteur comprenne en 3 secondes que Lyna vit l'audiovisuel. L'enchaînement suit la règle de la recherche : **nettoyer avant de mesurer, mesurer avant d'encoder, encoder avant de mettre en scène**. Chaque phase est une tranche MVP verticale : elle se déploie seule sur Cloudflare Workers et laisse le site visiblement meilleur. Les phases 1 et 2 (nettoyage + poids) sont déployées en production avant que la moindre mise en scène ne commence ; à la fin de la phase 3, le site est déjà présentable à un recruteur. Le garde-fou de taille (`npm run check`) naît en phase 1 et tourne à chaque commit jusqu'à la fin.

## Phases

**Phase Numbering:**

- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Nettoyage & filet de sécurité** - Code mort, décor, doublons et sources de travail retirés ; garde-fou de taille actif ; site redéployé plus léger (completed 2026-09-27)
- [ ] **Phase 2: Médias légers & hero qui joue partout** - Pipeline média offline, `public/` < 60 Mo, vidéos conformes iPhone, charte Tafsut extraite
- [ ] **Phase 3: Hero & Qui suis-je en scène** - Mise en scène hybride cinéma, positionnement explicite, compétences en logos, textes en slots nommés
- [ ] **Phase 4: Projets mis en scène** - Vraies vignettes, vidéo en tête, logos d'outils, crédits type générique, bande process, embeds allégés
- [ ] **Phase 5: Contact, candidature & QA mobile réelle** - Contact complet avec CV téléchargeable, formulaire protégé, validation sur vrais téléphones

## Phase Details

### Phase 1: Nettoyage & filet de sécurité

**Goal**: Le site déployé ne contient plus ni code mort, ni effet décoratif, ni doublon, ni source de travail — et aucun commit ne peut plus faire dépasser la limite Cloudflare de 25 Mio sans que `npm run check` échoue.
**Mode:** mvp
**Depends on**: Nothing (first phase)
**Requirements**: CLEAN-01, CLEAN-02, CLEAN-03, CLEAN-04, CLEAN-05, CLEAN-06, CLEAN-07, CLEAN-08, CLEAN-09, SIZE-07, PERF-02
**Success Criteria** (what must be TRUE):

  1. `npm run check` (`tsc --noEmit && vite build && scripts/check-assets.mjs`) passe sur le code nettoyé et échoue réellement sur un fichier factice de plus de 20 Mio ou une vidéo non `yuv420p` / sans faststart ; les vidéos héritées non conformes (hero 10 bits, CV sans faststart) figurent dans une liste d'exceptions explicite que la phase 2 doit vider ; `wrangler deploy --dry-run` passe — le déploiement réel est reporté à la phase 2 (la production actuelle, déployée hors git le 2026-09-01, est plus légère que le build de phase 1)
  2. Un visiteur sur la page d'accueil et sur les 9 pages projet ne voit plus ni pétales, ni curseur rose, ni badge « 20 ans », ni ornements de coins, ni particules sur le portrait ; aucun listener `mousemove` global ne subsiste ; l'onglet Réseau ne montre aucun 404 (références `extraitpubSAE1.mp4`, `festival-flyer.jpg`, `festival-goodies.jpg` corrigées)
  3. Dans l'iframe SkøllRub, la chaîne complète des 6 scènes (`1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN`) se parcourt jusqu'au bout après le nettoyage de `public/animate/` (`.fla`, `.ai`, `~ai-*.tmp`, `RECOVER_*`, `illustrations/`, `3_CLEMENT.*`, 8 vidéos racine retirés ; `images/`, `imagesImad/`, `imagesframe2/`, `components/`, `videos/` intacts)
  4. `src/assets/` n'existe plus et le portrait s'affiche depuis `public/media/` ; les fichiers non référencés de `public/assets/` sont passés par une quarantaine après un inventaire qui décode les URL (NFD/NFC, `%20`) ; `vercel.json`, `server.js`, `bun.lockb`, `bunfig.toml` et les dépendances signalées par `knip` ont disparu
  5. Tous les originaux (dont `affichepromo.png`, `prévention.png` et `charte_graphique.pdf`) sont sauvegardés dans `media-src/` gitignoré ; `git log --stat` du milestone ne montre aucun binaire de plusieurs Mo ajouté et le PDF n'a jamais été commité

**Plans**: 4 plans (4 vagues séquentielles)

Plans:
**Wave 1**

- [x] 01-01-PLAN.md — Filet de sécurité : media-src/ gitignoré + sauvegarde vérifiée, PDF et sources Animate hors de public/, garde-fou `npm run check` prouvé par fixtures

**Wave 2** *(blocked on Wave 1 completion)*

- [x] 01-02-PLAN.md — Version lite : décor et mousemove retirés, portrait sur /media, src/assets supprimé, références cassées corrigées (0 × 404)

**Wave 3** *(blocked on Wave 2 completion)*

- [x] 01-03-PLAN.md — Élagage : kit ui, dépendances knip, lint opérationnel, Cloudflare seule cible (vercel.json, server.js, bun.lockb, bunfig.toml)

**Wave 4** *(blocked on Wave 3 completion)*

- [x] 01-04-PLAN.md — Inventaire décodant + quarantaine public/assets, validation humaine (décor, 404, 6 scènes Animate), porte de phase + push sans déploiement

**Notes**:

- Invariant : aucun fichier de `src/routes/` n'est créé, supprimé ou renommé (seul le contenu de `index.tsx` / `$projectId.tsx` est édité) → `routeTree.gen.ts` reste inchangé.
- Ordre de suppression imposé : fichiers `src/components/ui/*` → paquets → lint ; ne jamais éditer `vite.config.ts` en réaction à une erreur de build (wrapper Lovable).
- Premier geste de la phase : `.gitignore` pour `media-src/` et le PDF, sauvegarde hors repo vérifiée, puis garde-fou — avant tout autre commit.

### Phase 2: Médias légers & hero qui joue partout

**Goal**: Le site pèse moins de 60 Mo, se charge vite, et la vidéo hero joue enfin sur iPhone avec des couleurs justes — sans qu'aucun média ne soit supprimé ni visiblement dégradé.
**Mode:** mvp
**Depends on**: Phase 1
**Requirements**: SIZE-01, SIZE-02, SIZE-03, SIZE-04, SIZE-05, SIZE-06, SIZE-08, HERO-01, PROJ-06, PROJ-07
**Success Criteria** (what must be TRUE):

  1. La vidéo hero démarre automatiquement sur iPhone (Safari), Android (Chrome) et desktop, avec des couleurs non délavées (conversion HLG bt2020 → SDR bt709), un poster léger identique à la première image, et un bouton pause accessible au clavier et au lecteur d'écran ; le fichier fait ≤ 4 Mo
  2. `public/` pèse moins de 60 Mo ; chaque vidéo livrée passe `ffprobe` (profil High, `yuv420p`, `moov` avant `mdat`) — vidéo CV ≤ 12 Mo, vidéos process SkøllRub ≤ 12 Mo chacune et toujours lues dans l'animation ; la liste d'exceptions du garde-fou est vide
  3. Aucune image livrée ne dépasse 2400 px de grand côté ; les images sont servies en `<picture>` + `srcset` (AVIF/WebP + repli), chargées en lazy hors écran, seul le hero est préchargé ; une comparaison A/B à 100 % ne montre aucune dégradation visible (affiches et logos sans bavure de chroma)
  4. `node scripts/media.mjs` régénère `public/media/**` et `src/data/media.generated.ts` depuis `media-src/` de façon reproductible (deux exécutions → mêmes fichiers), sans jamais tourner dans le build Cloudflare
  5. La page « Identité d'un festival » affiche la galerie des ~10 planches Tafsut extraites (logo, palette, typos, affiche, billets, goodies, signalétique) et n'est plus marquée « en cours » ; le PDF n'est plus dans `public/` ; les branches `project.id === "…"` de `$projectId.tsx` sont conservées et pointent vers `public/media/**`

**Plans**: TBD
**UI hint**: yes
**Notes**:

- Research flag : valeurs de qualité (CRF, AVIF/WebP) à valider par A/B visuel sur les vrais fichiers avant traitement par lot ; conversion HDR→SDR via le filtre `colorspace` intégré (pas de `zscale` dans ce build ffmpeg) à vérifier visuellement.
- Outils : `sharp` (épinglé en devDependency, `.rotate()` en tête, preset photo forcé en 4:2:0, preset graphic en 4:4:4), `ffmpeg` (`libx264`, `-pix_fmt yuv420p`, `+faststart`), Ghostscript `gs` à 300 dpi (pas `pdftoppm`).
- Itérer les encodages hors repo (scratch / `media-src/`), ne commiter que les dérivés finaux.
- Les chemins relatifs `videos/*.mp4` attendus par `1_MOHAMED.js` doivent être conservés.

### Phase 3: Hero & Qui suis-je en scène

**Goal**: En arrivant sur le site, un recruteur comprend en 3 secondes que Lyna fait de la vidéo, cherche une alternance de chargée de communication, et maîtrise les logiciels du métier — dans une mise en scène hybride (palette actuelle + codes cinéma) qui ne coûte rien sur mobile.
**Mode:** mvp
**Depends on**: Phase 2
**Requirements**: HERO-02, HERO-03, HERO-04, ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, TEXT-01, TEXT-02, PERF-01
**Success Criteria** (what must be TRUE):

  1. Sans scroller, le visiteur lit sous le titre une ligne de positionnement + disponibilité (alternance chargée de communication, spécialité réalisation/montage, disponible à partir de…) et voit la vidéo hero dans un cadre écran avec grain tuilé pré-rendu, en palette sakura/crème/prune et typos Cormorant Garamond + DM Sans ; aucun overlay n'intercepte les clics ou le scroll tactile
  2. Avec `prefers-reduced-motion` activé dans l'OS, le grain, les transitions pellicule et l'animation du portrait s'arrêtent et un rendu statique s'affiche ; la console d'un build de production ne montre aucun avertissement d'hydratation
  3. La section Qui suis-je montre un portrait animé par un effet audiovisuel en CSS pur (projecteur, viseur ou pellicule), un positionnement explicite (intro, objectif alternance, spécialité vidéo, polyvalence MMI) et la vidéo CV libellée « CV vidéo — 1:25 » avec poster, qui ne se télécharge pas avant le clic
  4. La grille de compétences regroupe les logiciels par métier (Vidéo / Design / Web) sans barre ni pourcentage ; chaque logo manquant apparaît comme un monogramme stylé (jamais une image cassée) et Lyna le remplace en déposant `public/media/logos/<id>.svg`, sans toucher au code
  5. Tous les textes du site vivent dans `src/content/copy.ts` sous forme de slots nommés avec consigne (longueur, angle, à bannir), les textes actuels servent de valeurs par défaut marquées `TODO`, les fautes de `projects.ts` sont corrigées ; un lien partagé affiche une frame du hero comme image Open Graph et la description du slot (140-160 caractères)

**Plans**: TBD
**UI hint**: yes
**Notes**:

- Aucune librairie d'animation : CSS (`@layer cinema`) + `useReducedMotion` SSR-safe (`useSyncExternalStore`) + `IntersectionObserver`. Rien de décoratif qui ne porte pas d'information.
- `src/components/cinema/*` n'importe jamais depuis `src/data/`.
- Le registre d'outils `src/data/tools.ts` créé ici pour la grille de compétences est réutilisé tel quel par la phase 4 (PROJ-03).
- TEXT-01 fixe la règle pour la suite : les phases 4 et 5 ajoutent leurs textes dans `copy.ts`, jamais en dur.
- Invariant routeTree : travail limité à `src/components`, `src/hooks`, `src/lib`, `src/content`, `src/data`, `src/styles.css` et au contenu de `src/routes/index.tsx` / `__root.tsx` (pas de création/renommage de route).

### Phase 4: Projets mis en scène

**Goal**: Les projets se présentent comme ceux d'une assistante audiovisuelle : vidéo en tête, chaque projet avec sa propre vignette, ses logiciels, ses crédits de film et son rôle explicite — sans refactor risqué de la fiche projet.
**Mode:** mvp
**Depends on**: Phase 3
**Requirements**: PROJ-01, PROJ-02, PROJ-03, PROJ-04, PROJ-05, PROJ-08, PROJ-09, PROJ-10, SIZE-09
**Success Criteria** (what must be TRUE):

  1. La grille de projets s'ouvre sans filtre actif, les projets vidéo en premier, et chaque carte montre une vignette propre extraite de ses médias (plus aucune vignette partagée entre plusieurs projets)
  2. Les cartes et les fiches projet affichent les logos des logiciels utilisés (registre partagé `src/data/tools.ts`) à la place des tags texte
  3. Chaque fiche projet s'ouvre sur un bloc crédits type générique de film (rôle, année, format, durée, contexte/commanditaire) ; le rôle est un slot texte explicite (plus de « Membre du groupe ») ; le stop motion et le clip Blue affichent une bande process storyboard → coulisses → final, avec placeholders nommés tant que Lyna n'a pas fourni les médias
  4. Les embeds YouTube passent par `youtube-nocookie.com` avec `loading="lazy"` ; l'iframe Adobe Animate se charge en lazy et la chaîne des 6 scènes se parcourt jusqu'au bout sur l'URL Cloudflare déployée
  5. `affichepromo` et `prévention`, réencodées, apparaissent dans le projet existant choisi par Lyna

**Plans**: TBD
**UI hint**: yes
**Notes**:

- Les branches `project.id === "…"` de `$projectId.tsx` restent (PROJ-07, décidé) : crédits, process et chips d'outils sont des champs optionnels du type `Project`, rendus par des composants partagés au-dessus du contenu existant. Le refactor `ProjectBlock[]` est en v2 (PROJ-V2-01).
- Migration du type `Project` en « widen » uniquement (champs optionnels ajoutés) : un commit vert par étape.
- Entrée requise de Lyna : choix du projet qui accueille `affichepromo` / `prévention` (SIZE-09) ; médias process (sinon placeholders).

### Phase 5: Contact, candidature & QA mobile réelle

**Goal**: Un recruteur convaincu peut contacter Lyna ou télécharger son CV en un geste, et le site est validé sur de vrais téléphones, sur l'URL de production.
**Mode:** mvp
**Depends on**: Phase 4
**Requirements**: CONTACT-01, CONTACT-02, CONTACT-03, PERF-03
**Success Criteria** (what must be TRUE):

  1. La section Contact affiche l'email en clair (lien `mailto:` qui ouvre le client mail) et un lien LinkedIn, en plus du formulaire
  2. Un bouton télécharge `CV_Lyna_Rebahi_Alternance_Communication.pdf` (placeholder clairement identifié tant que Lyna ne l'a pas fourni)
  3. Le formulaire EmailJS envoie un message de test effectivement reçu ; la validation HTML native bloque un email invalide ou un champ vide ; un envoi avec le honeypot rempli n'arrive jamais
  4. Sur l'URL Cloudflare déployée, une QA sur un vrai iPhone (Safari) et un vrai Android valide : hero qui joue, scroll fluide, 6 scènes Animate navigables au doigt, aucune image de plus de 2400 px décodée ; `npm run check` et `wrangler deploy --dry-run` sont verts

**Plans**: TBD
**UI hint**: yes
**Notes**:

- La partie Contact (CONTACT-01..03) ne dépend que de la phase 3 (`copy.ts`) : si l'échéance se resserre, elle peut être avancée juste après la phase 3 ; la QA mobile (PERF-03) reste la dernière étape.
- Côté EmailJS, configurer aussi l'allowlist de domaine et la limite d'envoi dans le dashboard.
- Entrées requises de Lyna : URL LinkedIn, CV PDF.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Nettoyage & filet de sécurité | 4/4 | Complete   | 2026-09-27 |
| 2. Médias légers & hero qui joue partout | 0/TBD | Not started | - |
| 3. Hero & Qui suis-je en scène | 0/TBD | Not started | - |
| 4. Projets mis en scène | 0/TBD | Not started | - |
| 5. Contact, candidature & QA mobile réelle | 0/TBD | Not started | - |

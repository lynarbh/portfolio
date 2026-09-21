# Portfolio — Lyna Rebahi

## What This Is

Portfolio personnel de Lyna Rebahi, 20 ans, étudiante en BUT MMI. Objectif immédiat : décrocher une alternance de chargée de communication (la polyvalence MMI est l'atout vendu), tout en affichant clairement une spécialisation audiovisuelle — réalisation, montage — avec un master cinéma en ligne de mire. Site mono-page (TanStack Start / React / Tailwind v4) avec pages projet détaillées, déployé sur Cloudflare Workers.

Ce milestone est une refonte « version lite » : audit complet, suppression du code mort et des assets inutiles, allègement massif du poids sans dégrader les médias, et une nouvelle mise en scène hybride (palette actuelle + codes cinéma) qui fait comprendre en 3 secondes que la vidéo est son terrain.

## Core Value

Un recruteur qui ouvre le site comprend en 3 secondes que Lyna vit l'audiovisuel — la vidéo domine, les médias sont mis en scène comme dans un portfolio d'assistante audiovisuelle — et le site se charge vite malgré des visuels de qualité.

## Requirements

### Validated

<!-- Existant dans le code, inféré depuis .planning/codebase/ -->

- ✓ Page d'accueil en sections : Hero avec vidéo de fond (`/videos/hero.mp4`), Qui suis-je (portrait + vidéo CV), Projets filtrables par catégorie, Contact — existing
- ✓ Pages projet détaillées `/projects/$projectId` avec galeries d'images, embeds YouTube, et animation interactive Adobe Animate (SkøllRub via `/animate/1_MOHAMED.html`) — existing
- ✓ Contenu projets centralisé dans `src/data/projects.ts` (type `Project` : catégorie, médias, outils, rôle) — existing
- ✓ Formulaire de contact fonctionnel via EmailJS — existing
- ✓ Identité visuelle : Cormorant Garamond + DM Sans, palette sakura / crème / prune / menthe (tokens CSS dans `src/styles.css`) — existing
- ✓ Déploiement Cloudflare Workers via `wrangler.jsonc` — existing

### Active

**Audit & nettoyage**

- [ ] Supprimer le code mort : `ProjectModal.tsx` (importé, jamais rendu), `Skills()` (retourne null), `Petals.tsx`, kit `src/components/ui/` non utilisé par les pages, dépendances inutilisées (`@tanstack/react-query`, `zod`, Radix non utilisés)
- [ ] Retirer tous les effets déco pour une version lite : pétales, curseur rose personnalisé, badge flottant « 20 ans », ornements de coins, particules sur le portrait (`PORTRAIT_EFFECT_SETTINGS` / classe `Point`)
- [ ] Dédupliquer les assets : `src/assets/` duplique 63 fichiers de `public/assets/` (141 Mo) ; les 8 vidéos à la racine de `public/animate/` (82 Mo) sont des doublons morts — l'animation `1_MOHAMED.js` référence uniquement `public/animate/videos/`, `images/` et `components/`
- [ ] Retirer du dossier public les sources de travail : `.fla`, `.ai`, `~ai-*.tmp`, `RECOVER_*`, exports Animate non référencés (seul `1_MOHAMED.html` + `1_MOHAMED.js` + `components/` + `images/` + `videos/` est utilisé ; `illustrations/` 25 Mo, `imagesImad/`, `imagesframe2/` sont orphelins)
- [ ] Supprimer les fichiers de `public/assets/` non référencés (capture d'écran, `mockup.jpg` 9,8 Mo, `site.jpg` 3,7 Mo, etc.) après vérification
- [ ] Corriger les références cassées : `public/videos/extraitpubSAE1.mp4` (gitignoré, absent) dans `$projectId.tsx:589`, `festival-flyer.jpg` / `festival-goodies.jpg` dans `projects.ts`
- [ ] Ne garder qu'une cible de déploiement (Cloudflare) : supprimer `vercel.json`, `server.js`, `package-lock.json` (bun est le gestionnaire primaire)

**Poids**

- [ ] Réencoder les images en visuellement sans perte : PNG/JPG géants (`affichepromo.png` 23 Mo, `prévention.png` 19 Mo, `affiche_sensibilisation` 9,6 Mo, `hero.png` 4,2 Mo, `portrait.jpg` 2,5 Mo…) → WebP/AVIF redimensionnés à la taille d'affichage réelle (cible : aucune image > 500 Ko)
- [ ] Réencoder les vidéos à qualité constante : `hero.mp4` (17 Mo, 60 fps, 8,4 Mbit/s pour 17 s) → ~3 Mo ; vidéo CV (23,1 Mo) → confortablement sous les 25 Mio Cloudflare ; vidéos du process SkøllRub (empattage 22 Mo, mise en bouteille 16 Mo, filtration 14 Mo…) allégées
- [ ] Aucun média existant supprimé : tous les visuels de projets, le portrait et la vidéo de fond restent, uniquement réencodés
- [ ] Extraire les pages clés de `charte_graphique.pdf` (Tafsut Festival : logo, palette, typos, affiche, billets, goodies, signalétique) en images légères pour illustrer le projet « Identité d'un festival », et passer le projet en terminé ; retirer le PDF de 23 Mo du dossier public
- [ ] Objectif global : `public/` + `src/assets` passent de ~525 Mo à moins de 60 Mo

**Refonte « hybride cinéma »**

- [ ] Direction visuelle : conserver palette et typos actuelles, y ajouter des codes cinéma inspirés du GIF Behance — grain/texture, cadre écran bombé, petites métadonnées en coins façon générique, typographie serif expressive, transitions type pellicule/timecode
- [ ] Hero : vidéo de fond conservée et mise en scène (cadre, générique d'ouverture, titre qui annonce la spécialité vidéo)
- [ ] Qui suis-je : portrait animé avec un effet lié à l'audiovisuel (pas de badge/particules génériques), vidéo CV intégrée, positionnement explicite « alternance chargée de communication · spécialisation réalisation / montage »
- [ ] Compétences : grille de logos des logiciels maîtrisés — Premiere Pro, After Effects, DaVinci Resolve, CapCut, Photoshop, Illustrator, InDesign, Lightroom, Adobe Animate, Figma, Canva, HTML/CSS, VS Code — avec emplacement placeholder nommé pour chaque logo introuvable (Lyna fournit l'image)
- [ ] Projets : les projets vidéo passent en premier ; chaque fiche projet affiche les logos des logiciels utilisés (à la place des tags texte) ; médias disposés en galerie soignée (vidéo en tête, images en grille/mosaïque)
- [ ] Textes : tous les blocs de texte (hero, qui suis-je, descriptions) reçoivent un emplacement clairement identifié avec une consigne courte (longueur, angle) — Lyna rédige elle-même
- [ ] Performance : plus de re-render React sur `mousemove`, lazy loading des médias hors écran, `poster` sur les vidéos, préchargement limité à la vidéo hero
- [ ] Le build Cloudflare passe (`bun run build`) et aucun asset ne dépasse 25 Mio

### Out of Scope

- Rédaction des textes définitifs par l'IA — Lyna veut une écriture qui lui ressemble, elle fournit les textes
- CMS / backend / base de données — le contenu statique dans `projects.ts` suffit
- Ajout de nouveaux projets — hors périmètre de ce milestone (structure prête à en accueillir)
- Version anglaise — cible recruteurs francophones
- Suite de tests complète — pas prioritaire sur une échéance d'une semaine ; une vérification de build + contrôle visuel suffit
- Changement de palette / typos — direction hybride retenue, on garde l'identité existante
- Effets déco (curseur, badge, ornements, pétales) — retirés pour la version lite ; Lyna réintègre plus tard ce qui lui manque

## Context

- **Brownfield** : cartographie complète dans `.planning/codebase/` (STACK, ARCHITECTURE, STRUCTURE, CONVENTIONS, TESTING, INTEGRATIONS, CONCERNS)
- Scaffold Lovable.dev : `@lovable.dev/vite-tanstack-config` regroupe les plugins Vite — `vite.config.ts` avertit de ne pas les réajouter à la main
- Tailwind v4 en mode CSS-first (thème dans `src/styles.css`, pas de `tailwind.config`)
- `src/routes/projects/$projectId.tsx` (665 lignes) contient des branches `project.id === "…"` codées en dur au lieu de champs data-driven — à réduire si le temps le permet, mais pas bloquant
- `routeTree.gen.ts` est généré, ne pas éditer à la main
- Les logos Adobe (Premiere, After Effects, Photoshop…) ne sont pas disponibles dans les bibliothèques d'icônes libres pour raisons de marque : prévoir des placeholders nommés (`/assets/logos/premiere-pro.svg`, etc.) que Lyna remplira
- Incident passé : dépassement de la limite Cloudflare de 25 Mio sur la vidéo CV (compressée depuis, mais toujours à 23,1 Mio)
- Poids actuel : `public/animate` 223 Mo, `src/assets` 141 Mo, `public/assets` 122 Mo, `public/videos` 40 Mo
- Aucun test, aucune CI, ESLint laxiste sur le code mort (`no-unused-vars` désactivé)
- Inspiration visuelle : GIF Behance (serif rouge calligraphiée, grain VHS, cadre écran bombé, métadonnées de contact en coins)

## Constraints

- **Timeline** : présentable à un recruteur cette semaine — prioriser nettoyage + poids + hero/qui suis-je/projets, le reste après
- **Hébergement** : Cloudflare Workers, 25 Mio max par asset — toute vidéo doit rester sous cette limite avec marge
- **Médias** : rien n'est supprimé ni visiblement dégradé ; réencodage visuellement sans perte uniquement
- **Textes** : fournis par Lyna — le code livre des emplacements et des consignes, pas de copy générée définitive
- **Logos** : marques Adobe indisponibles librement — placeholders nommés, Lyna fournit les images
- **Stack** : TanStack Start + Tailwind v4 + config Lovable conservés, bun comme gestionnaire de paquets
- **Identité** : palette et typos existantes conservées (direction hybride)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Direction « hybride » plutôt que refonte totale cinéma | Garder l'identité déjà construite (sakura/crème/prune) tout en injectant les codes audiovisuels | — Pending |
| Vidéo en tête, polyvalence visible | Cible alternance chargée de com' (MMI polyvalent) mais spécialisation réalisation/montage à afficher | — Pending |
| Réencodage visuellement sans perte | Le poids vient de 3 PNG géants et de doublons, pas de la qualité utile ; ÷10 à ÷40 sans différence visible | — Pending |
| Version lite : tous les effets déco retirés | Lyna préfère repartir propre et réintégrer ce qui manque plutôt que trier maintenant | — Pending |
| Cloudflare seule cible de déploiement | Une seule config à maintenir ; supprime vercel.json / server.js / package-lock | — Pending |
| Textes rédigés par Lyna | Éviter le ton « IA générique » ; le code fournit emplacements + consignes | — Pending |
| Charte Tafsut extraite en images | Illustre le projet festival (2 images manquantes) et sort 23 Mo de PDF du dossier public | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-09-21 after initialization*

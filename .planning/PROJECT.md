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

<!-- Validated in Phase 1: Nettoyage & filet de sécurité (2026-09-27) -->

- ✓ Code mort supprimé : `ProjectModal`, `Skills()`, `Petals`, `CornerOrnament`, kit `src/components/ui/` (46 fichiers), `src/lib/utils.ts`, `use-mobile` ; dépendances 54 → 11 — Phase 1
- ✓ Version lite : pétales, curseur rose, badge « 20 ans », ornements de coins, particules du portrait et listener `mousemove` global retirés (0 occurrence dans `src/` ; contrôle visuel humain encore dû, voir `01-HUMAN-UAT.md`) — Phase 1
- ✓ Doublons et sources de travail hors de `public/` (`.fla`, `.ai`, `~ai-*.tmp`, `RECOVER_*`, `illustrations/`, `3_CLEMENT.*`, 8 vidéos racine) : `public/` 525 → 215 Mo ; chaîne Animate des 6 scènes intacte ; `src/assets/` supprimé, portrait servi depuis `public/media/portrait.jpg` — Phase 1
- ✓ Assets non référencés de `public/assets/` mis en quarantaine dans `media-src/` (gitignoré) après inventaire décodant les URL et normalisant NFC (`scripts/inventory-assets.mjs` : REF=62, MISSING=0) — Phase 1
- ✓ Références cassées corrigées (`extraitpubSAE1.mp4`, `festival-flyer.jpg`, `festival-goodies.jpg`) : 0 × 404 sur les 76 URL sondées de l'accueil et des 9 pages projet — Phase 1
- ✓ Cloudflare seule cible : `vercel.json`, `server.js`, `bun.lockb`, `bunfig.toml` et le script `start` supprimés ; npm seul gestionnaire (`engines.node >= 20.11`, `.nvmrc`) — Phase 1
- ✓ Garde-fou de poids en continu : `npm run check` = `tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run` ; échoue sur un fichier > 20 Mio, une vidéo non `yuv420p` ou sans faststart, une extension interdite ; `npm run deploy` passe par `check` ; 3 exceptions héritées listées dans `scripts/check-assets.exceptions.json` que la phase 2 doit vider — Phase 1

### Active

**Poids**

- [ ] Réencoder les images en visuellement sans perte : redimensionner d'abord (≤ 2400 px grand côté — `chartegraphique_SkollRub.png` fait 9047×5032 soit ~173 Mio décodés pour 3 Mo sur disque, le poids disque n'est pas le bon critère), convertir en sRGB puis retirer l'ICC (certains PNG portent un profil moniteur « Color LCD »), deux presets : photos → AVIF/WebP 4:2:0 ; affiches, logos, typo → AVIF 4:4:4 ou PNG quantifié (jamais WebP lossy) ; renommer en kebab-case ASCII au passage (`ø`, `é`, espaces cassent les audits et la normalisation NFD/NFC)
- [ ] `src/assets/affichepromo.png` (23 Mo) et `src/assets/prévention.png` (19 Mo) n'existent que dans `src/assets/` et ne sont référencés nulle part : décision de contenu à prendre avec Lyna (les afficher dans un projet ou les retirer), pas une tâche de compression
- [ ] Réencoder les vidéos à qualité constante : `hero.mp4` (17 Mo, 60 fps, 8,4 Mbit/s pour 17 s) → ~3 Mo ; vidéo CV (23,1 Mo) → confortablement sous les 25 Mio Cloudflare ; vidéos du process SkøllRub (`empattage.mp4` 22,4 Mio — second asset proche de la limite, mise en bouteille 16 Mo, filtration 14 Mo…) allégées ; sortie obligatoire en H.264 8 bits `-pix_fmt yuv420p` + `-movflags +faststart`, vérifiée par `ffprobe` (le hero actuel est en High 10 / `yuv420p10le` et ne se lit pas sur iPhone ; la vidéo CV n'a pas de faststart et se télécharge entièrement avant la première image)
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
- [ ] Performance : lazy loading des médias hors écran, `poster` sur les vidéos, préchargement limité à la vidéo hero (le re-render sur `mousemove` est déjà supprimé en phase 1)

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
- `public/assets/charte_graphique.pdf` (22,5 Mio) est non suivi par git et ajouté au `.gitignore` : ne jamais le commiter (`.git` pèse déjà 333 Mo) ; sauvegarder les originaux hors repo avant tout réencodage
- Aucun `prefers-reduced-motion` dans le code actuel ; les 3 embeds YouTube utilisent `www.youtube.com` sans `loading="lazy"` ; CreateJS est chargé depuis `code.createjs.com` sans fallback
- Poids actuel : `public/animate` 223 Mo, `src/assets` 141 Mo, `public/assets` 122 Mo, `public/videos` 40 Mo
- Aucun test, aucune CI, ESLint laxiste sur le code mort (`no-unused-vars` désactivé)
- Inspiration visuelle : GIF Behance (serif rouge calligraphiée, grain VHS, cadre écran bombé, métadonnées de contact en coins)

**État courant (2026-09-27)** : Phase 1 terminée (4 plans, 11 findings de code review corrigés en 3 itérations, vérification 5/5 sur preuves reproduites). `public/` pèse 215 Mo (animate 90, assets 82, videos 40) ; la production reste la version du 2026-09-01. Prochaine étape : Phase 2 « Médias légers & hero qui joue partout » (réencodage, hero SDR 8 bits, vider les exceptions du garde-fou, premier déploiement réel). La cartographie `.planning/codebase/` décrit l'état d'avant nettoyage : à rafraîchir avant la planification de la phase 2.

## Constraints

- **Timeline** : présentable à un recruteur cette semaine — prioriser nettoyage + poids + hero/qui suis-je/projets, le reste après
- **Hébergement** : Cloudflare Workers, 25 Mio max par asset — toute vidéo doit rester sous cette limite avec marge
- **Médias** : rien n'est supprimé ni visiblement dégradé ; réencodage visuellement sans perte uniquement
- **Textes** : fournis par Lyna — le code livre des emplacements et des consignes, pas de copy générée définitive
- **Logos** : marques Adobe indisponibles librement — placeholders nommés, Lyna fournit les images
- **Stack** : TanStack Start + Tailwind v4 + config Lovable conservés, npm comme gestionnaire de paquets (bun non installé)
- **Identité** : palette et typos existantes conservées (direction hybride)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Direction « hybride » plutôt que refonte totale cinéma | Garder l'identité déjà construite (sakura/crème/prune) tout en injectant les codes audiovisuels | — Pending |
| Vidéo en tête, polyvalence visible | Cible alternance chargée de com' (MMI polyvalent) mais spécialisation réalisation/montage à afficher | — Pending |
| Réencodage visuellement sans perte | Le poids vient de 3 PNG géants et de doublons, pas de la qualité utile ; ÷10 à ÷40 sans différence visible | — Pending |
| Version lite : tous les effets déco retirés | Lyna préfère repartir propre et réintégrer ce qui manque plutôt que trier maintenant | ✓ Phase 1 (contrôle visuel humain en attente) |
| Cloudflare seule cible de déploiement | Une seule config à maintenir ; supprime vercel.json / server.js / bun.lockb / bunfig.toml | ✓ Phase 1 |
| npm seul gestionnaire de paquets | bun n'est pas installé ; un seul lockfile, scripts en `.mjs` | ✓ Phase 1 |
| Pas de déploiement réel avant la phase 2 | Le build de phase 1 est plus lourd que la prod du 2026-09-01 (déployée hors git, version `0b1ccd2a-…`, rollback possible) ; `wrangler deploy --dry-run` seulement | ✓ Phase 1 (prod inchangée) |
| Garde-fou avec exceptions explicites | Les 3 vidéos héritées non conformes (hero 10 bits HDR, CV sans faststart, empattage > 20 Mio) sont tolérées par une liste nominative que la phase 2 vide ; le plafond 25 Mio et les extensions interdites ne sont jamais dérogeables | ✓ Phase 1 |
| Validation visuelle humaine différée | Lyna ne peut pas tester maintenant ; la phase se clôt sur preuves automatisées, l'UAT partiel (`01-HUMAN-UAT.md`) reste suivi | — Pending |
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
*Last updated: 2026-09-27 after Phase 1 completion*

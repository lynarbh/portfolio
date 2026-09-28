---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
plan: 04
subsystem: media-pipeline, project-pages
tags: [sharp, avif, webp, picture, srcset, lazy-loading, determinism, cleanup]
requires:
  - "02-03 : scripts/media/images.mjs, <Picture>, MediaId, verify-media 4:4:4"
provides:
  - "57 images dans le manifeste (50 nouvelles sur 7 projets), dérivés sous public/media/<projet>/"
  - "$projectId.tsx : 44 images des 4 branches + galerie générique via <Picture>, constantes SIZES_2COL / SIZES_FULL / SIZES_3COL"
  - "Project.media typé readonly MediaId[]"
  - "public/assets/ supprimé (56 fichiers, 78 Mio) après vérification sha256"
affects: [02-05, 02-06]
tech-stack:
  added: []
  patterns:
    - "Galerie générique : map (id, i, all), alt = images[id].alt ?? `${project.title} — vue ${i + 1}`, sizes selon all.length"
key-files:
  created:
    - public/media/business-card-mockup/
    - public/media/prototype-site-accessible/
    - public/media/illustration-photoshop/
    - public/media/portraits-illustration/
    - public/media/clip/
    - public/media/sae-1/
    - public/media/sae-2/
  modified:
    - src/data/media.generated.ts
    - src/routes/projects/$projectId.tsx
    - src/data/projects.ts
  deleted:
    - public/assets/ (56 fichiers)
decisions:
  - "02-04: $projectId.tsx n'est pas passé à prettier (fichier déjà non conforme au HEAD), même choix que projects.ts au plan 03 : diff limité aux lignes migrées, eslint vert hors règle prettier"
  - "02-04: le critère « 0 /assets/ dans le HTML » vaut pour les images ; les seules occurrences restantes sont les bundles Vite (/assets/*.js, *.css), qui répondent 200 et ne peuvent changer sans toucher vite.config.ts"
metrics:
  duration: "9 min"
  completed: 2026-09-28
  tasks: 3
  files: 339
---

# Phase 2 Plan 04: Pages projet légères Summary

Les 50 images restantes passent par le pipeline sharp (57 au total, déterministes). Les 9 pages projet servent tout en `<picture>` AVIF (+ WebP pour les photos), en lazy/async avec dimensions intrinsèques. `public/assets/` (78 Mio) quitte le dépôt après vérification sha256 de chaque fichier contre `media-src/`.

## Tasks

| # | Tâche | Commit | Fichiers |
|---|-------|--------|----------|
| 1 | Clonage + manifeste + encodage des 50 images | c169694 | src/data/media.generated.ts, public/media/{7 projets}/ (246 fichiers) |
| 2 | Migration de `$projectId.tsx` (4 branches + galerie) et de `projects.ts` | 66e5e43 | src/routes/projects/$projectId.tsx, src/data/projects.ts |
| 3 | Porte sha256, `git rm -r public/assets`, recette wrangler dev | 6526321 | public/assets/ (56 suppressions) |

## Sources clonées (media-src/, non commité)

50 fichiers copiés par `cp -c` vers `media-src/<projet>/<nom d'origine>`. Les noms sont comparés en NFC. Chaque clone a un sha256 identique à `public/assets/<nom>`, vérifié après la copie. Aucun manque. `git status --porcelain media-src` est vide.

## Résultats d'encodage

- `npm run media` : 50 `encoded`, 8 `cached` (hero + 7 images du plan 03), 1 min 15.
- WARN SSIM : `sae-1/logoprincipal` 0,9592 (seuil 0,96) et `sae-2/moodboard-lyna` 0,9293 (seuil 0,93). Ce sont des écarts à la marge, sans baisse de qualité ; à revoir à l'œil si Lyna le souhaite.
- Repli PNG confirmé pour les 5 images transparentes : `portraits-illustration/{lyna,joseph,imad}` et `business-card-mockup/{mockupcarterose,mockupcartechocolat}`.
- `du -sk` par projet : business-card-mockup 1 332, clip 6 120, illustration-photoshop 696, portraits-illustration 484, prototype-site-accessible 400, sae-1 1 816, sae-2 8 084 Kio. `du -sm public/media` = 23 Mio (hero compris).
- `npm run verify-media` → `verify-media: OK` (≤ 2400 px, sans ICC, kebab-case, graphic sans WebP, 4:4:4).
- Déterminisme : `--force` ×2, puis `diff det4-a.txt det4-b.txt` (280 lignes : tout `public/media` + module généré) → vide.
- Aucun fichier > 12 Mo sous `public/media`.

## Poids

| Mesure | `du -sm public` |
|---|---|
| Avant le plan | 196 Mio |
| Après la Task 1 (dérivés ajoutés) | 215 Mio |
| Après la Task 3 (`public/assets` supprimé, 78 Mio) | **138 Mio** |

Répartition restante : `public/animate` 90, `public/videos` 24 (CV), `public/media` 24. Le plan annonçait environ 110 Mio. L'écart vient de `public/animate` (vidéos process), traité au plan 06.

## Porte sha256 (Task 3)

- `/usr/bin/grep -a -rn -E '(^|[^a-z])/?assets/' public/animate/*.js public/animate/*.html src/` → aucune sortie (exit 1).
- Boucle shell sur les 56 fichiers de `public/assets/` : chaque sha256 est comparé à l'ensemble des sha256 de `media-src/**`. Résultat : `checked=56 missing=0`.
- `node scripts/inventory-assets.mjs` avant suppression : `MISSING=0`, exit 0. Après suppression : `REF=282 NAME-ONLY=0 UNREF=0 MISSING=0`.
- Puis `git rm -r public/assets` : 56 suppressions dans le commit, toutes voulues. `git ls-files public/assets | wc -l` = 0.

## Verification

Task 2 :
- `project.id === "` = 4, `<img` = 0, `<Picture` = 45 dans `$projectId.tsx`.
- `/assets/` dans `src/` : 0. `readonly MediaId[]` = 1.
- `/animate/1_MOHAMED.html` = 1. `youtube.com/embed` : 2 avant, 2 après. Aucune ligne d'iframe dans le diff.
- Alts : 12 lignes `alt="` retirées, 12 ajoutées (les 32 autres alts sont sur les lignes multi-lignes inchangées).
- `npx tsc --noEmit` OK, eslint OK (règle prettier désactivée, voir décision), `npm run check` vert.

Task 3, sous `wrangler dev --port 8787` (serveur arrêté ensuite, port libre) :

| Page | HTTP | `image/avif` | `<img>` lazy | URL /media | non-200 |
|---|---|---|---|---|---|
| / | 200 | 10 | 10/10 | 35 | 0 |
| prototype-site-accessible | 200 | 2 | 2/2 | 8 | 0 |
| business-card-mockup | 200 | 6 | 6/6 | 30 | 0 |
| festival-identite | 200 | 0 | 0 | 0 | 0 |
| illustration-photoshop | 200 | 1 | 1/1 | 4 | 0 |
| portraits-illustration | 200 | 3 | 3/3 | 12 | 0 |
| stop-motion | 200 | 0 | 0 | 0 | 0 |
| clip | 200 | 12 | 12/12 | 84 | 0 |
| sae-1 | 200 | 7 | 7/7 | 28 | 0 |
| sae-2 | 200 | 19 | 19/19 | 78 | 0 |

- Total : 279 URL `/media/…`, 0 non-200.
- Aucune image `"/assets/…(png|jpg|…)"` dans le HTML.
- `/animate/1_MOHAMED.html` → 307.
- Les 19 `<img>` de sae-2 portent `width`/`height`.
- `npm run check` → exit 0.

## Deviations from Plan

### Auto-fixed Issues

None. Le plan a été exécuté tel qu'écrit, avec deux précisions d'interprétation :

**1. [Interprétation] Critère « 0 `/assets/` dans le HTML »**
- **Found during:** Task 3
- **Issue:** le HTML rendu contient `/assets/*.js` et `/assets/*.css`. Ce sont les bundles Vite (`dist/client/assets`), pas `public/assets`. Un `grep -c '/assets/'` littéral ne peut donc pas valoir 0 sans modifier `vite.config.ts`, ce qui est interdit.
- **Resolution:** le contrôle porte sur les références d'images vers `/assets/` → 0 sur les 10 pages. Les bundles répondent 200.

**2. [Note] Nombre de fichiers dans `public/assets`**
- Le plan en attendait 55 ; il y en avait 56 (les 50 images de ce plan et les 6 anciennes vignettes). Les 56 sont tous passés par la porte sha256.

## Known Stubs

None. Les `media: []` de business-card-mockup, festival-identite, sae-1 et sae-2 étaient déjà vides ; festival-identite est traité au plan 05.

## Threat Flags

None. T-02-17 : les chemins sont validés par `insideDir` et les ids en kebab ASCII. T-02-18 : suppression conditionnée à la porte sha256, les masters restent dans `media-src/`. T-02-19 : verify-media OK, sans ICC.

## Self-Check: PASSED

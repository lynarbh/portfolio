---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
plan: 06
subsystem: media-pipeline, video-serving
tags: [ffmpeg, h264, aac, animate, cache-api, checkpoint]
status: complete
requires:
  - "02-02 : classe hero, PIPELINE_VERSION, ssim() dans util.mjs"
  - "02-01 : src/server.ts sert /media/video/* et /animate/videos/* en 206 (run_worker_first)"
provides:
  - "scripts/media/video.mjs : classes cv (CRF 29, AAC 128k, résolution d'origine) et process (fps=25, scale=1280:720 lanczos, CRF 30, AAC 64k), mono-passe bitexact, SSIM par classe"
  - "scripts/media.mjs : PIPELINE_VERSION 4, out process = animate/videos/<basename exact de src>, cv/hero sous media/video/"
  - "verify-media : CV (High, AAC) + tout public/animate/videos/*.mp4 (faststart, yuv420p, ≤ 12 Mo ; 1280×720, 25/1, AAC pour les entrées process)"
  - "videos.cv = { src: /media/video/cv-lyna-rebahi.mp4, 1920×1080 } branché dans About"
  - "Les 8 vidéos process SkøllRub en 720p/25 fps aux mêmes noms (12,30 Mio au total contre 81,5 Mio)"
  - "Liste d'exceptions du garde-fou vide ; public/ à 55,9 Mio"
affects: [02-07]
tech-stack:
  added: []
  patterns:
    - "Clé Cache API des vidéos = URL + ETag Static Assets (fichiers réécrits sous le même nom)"
key-files:
  created:
    - public/media/video/cv-lyna-rebahi.mp4
  modified:
    - scripts/media.mjs
    - scripts/media/video.mjs
    - scripts/verify-media.mjs
    - src/data/media.generated.ts
    - src/routes/index.tsx
    - src/server.ts
    - scripts/check-assets.exceptions.json
    - public/animate/videos/concassage.mp4
    - public/animate/videos/ebullition.mp4
    - public/animate/videos/empattage.mp4
    - public/animate/videos/fermentation.mp4
    - public/animate/videos/filtration.mp4
    - public/animate/videos/miseenbouteile.mp4
    - public/animate/videos/refroidissement.mp4
    - public/animate/videos/whirpool.mp4
  deleted:
    - public/videos/56_Lyna_REBAHI_CVvideo.mp4
decisions:
  - "02-06: la clé du cache vidéo du Worker inclut l'ETag de l'asset, sinon un MP4 réécrit sous le même nom reste servi périmé jusqu'à 24 h"
  - "02-06: Lyna a validé le 720p CRF 30 sur empattage (approved) ; les 8 clips process sont au même réglage"
  - "02-06: le budget de 60 Mio se mesure en octets (media, check-assets, du -A) ; du -sm sans -A compte la préallocation APFS des fichiers fraîchement écrits"
metrics:
  completed: 2026-09-28
  tasks: 3
  files: 17
---

# Phase 2 Plan 06: Vidéos CV et process Summary

Le CV est réencodé en H.264 High / AAC 128k (10 599 167 o, SSIM 0,9926) et servi depuis `/media/video/cv-lyna-rebahi.mp4`. Les 8 vidéos process SkøllRub passent en 1280×720, 25 fps, CRF 30, AAC 64k, aux mêmes noms : 12 895 176 o au total contre 85 465 438 o, et aucune ne dépasse 3,53 Mo. La liste d'exceptions est vide et `public/` pèse 55,9 Mio (budget 60).

**PLAN_BASE** = `fb0e8c47b4105673facf846d8a2c14ef4a7d01d4`

## Tâches

| Tâche | Nom | Commit | Statut |
|-------|-----|--------|--------|
| 1 | Classes cv/process, CV rebranché, empattage 720p, exceptions vidées | 641a13e | fait |
| 1b | Cache vidéo du Worker indexé par ETag (déviation, Rule 1) | 74e3020 | fait |
| 2 | Lyna regarde empattage en 720p dans la scène Animate | — | **approved** (2026-09-28) |
| 3 | Lot des 7 autres vidéos process au réglage validé | 49b89df | fait |

## Point de contrôle (Task 2)

- Réponse de Lyna, relayée par l'orchestrateur le 2026-09-28 : **« approved »**.
- Au moment de la réponse, empattage faisait 3 528 510 o (contre 23 460 806), en 1280×720, 25/1, avec un SSIM de 0,9735.
- Le lot a donc été traité au CRF 30, sans changement de réglage.

## Preuves

### Tailles et SSIM

| Vidéo | Avant (o) | Après (o) | SSIM | ffprobe (w,h,pix_fmt,fps) / audio |
|-------|-----------|-----------|------|-----------------------------------|
| CV (`/media/video/cv-lyna-rebahi.mp4`) | 24 224 597 | 10 599 167 | 0,9926 | 1920×1080, High, yuv420p / aac |
| concassage | 9 366 706 | 1 483 691 | 0,9761 | 1280,720,yuv420p,25/1 / aac |
| ebullition | 2 778 691 | 374 432 | 0,9818 | 1280,720,yuv420p,25/1 / aac |
| empattage | 23 460 806 | 3 528 510 | 0,9735 | 1280,720,yuv420p,25/1 / aac |
| fermentation | 4 546 564 | 776 979 | 0,9791 | 1280,720,yuv420p,25/1 / aac |
| filtration | 14 227 689 | 2 166 176 | 0,9710 | 1280,720,yuv420p,25/1 / aac |
| miseenbouteile | 16 386 013 | 2 377 106 | 0,9756 | 1280,720,yuv420p,25/1 / aac |
| refroidissement | 9 024 477 | 1 413 486 | 0,9753 | 1280,720,yuv420p,25/1 / aac |
| whirpool | 5 674 492 | 774 796 | 0,9654 | 1280,720,yuv420p,25/1 / aac |
| **Total process** | **85 465 438** | **12 895 176** | | |

Le SSIM des process est mesuré contre la source passée par fps=25 et scale lanczos, sans perte. Tous les clips sont au-dessus du seuil de WARN de 0,95.

### Masters et invariants

- Les 7 masters `media-src/public/animate/videos/<nom>.mp4` ont les mêmes sha256 que les fichiers servis avant le lot. Ils ont été clonés par `cp -c` vers `media-src/sae-2/process/`, et chaque clone a été revérifié.
- Préfixes sha256 : concassage `e94fb212`, ebullition `463cbc42`, fermentation `31a9feb6`, filtration `deef2825`, miseenbouteile `e8e11800`, refroidissement `3c9d3e29`, whirpool `3d7872ab`.
- `ls public/animate/videos` affiche exactement les 8 noms d'origine.
- `git diff --name-only $PLAN_BASE HEAD -- public/animate | grep -v '^public/animate/videos/'` et `git status --porcelain public/animate` hors `videos/` n'affichent rien.

### Garde-fous

- `npm run media` : OK, `public/ total 55.9 MiB (budget 60 MiB)`. Un deuxième lancement indique `cached` partout, sans aucun diff.
- `npm run verify-media` : `verify-media: OK`. Le contrôle est désormais strict : les 8 clips sont listés au manifeste.
- `npx vite build` puis `node scripts/check-assets.mjs` : `56.4 MiB in dist/client, 0 exception(s)`, OK. Il reste un seul WARN souple, sur le CV (10,11 Mio > 10 Mio).
- `npm run check` : sortie 0, `0 exception(s)`, aucune ligne EXCEPTION.
- `scripts/check-assets.exceptions.json` : `exceptions.length` = 0.
- `du -sm public` = 58 et `du -Asm public` = 57, soit 58 662 405 octets = 55,94 Mio. Voir la déviation 3.

### Sous `wrangler dev` (port 8787, arrêté ensuite, port libre)

- `/projects/sae-2` répond 200.
- `/animate/{1_MOHAMED,1_LYNA,2_IMAD,2_CLEMENT,2_SOPHIA,3_ALBERTIN}.html` répondent 307, la redirection normale vers l'URL sans extension.
- Range 0-1 sur les 8 `/animate/videos/*.mp4` : 206 partout, et le total de `Content-Range` est égal à `stat -f%z` pour chaque fichier.
- Le CV répond 206 sur `/media/video/cv-lyna-rebahi.mp4`. `/videos/56_Lyna_REBAHI_CVvideo.mp4` répondait 404 en Task 1.

## Deviations from Plan

**1. [Rule 1 - Bug] Clip réécrit servi périmé par le cache du Worker**
- **Trouvé pendant :** préparation du point de contrôle
- **Problème :** `serveVideo` indexait le Cache API sur l'URL seule avec `max-age=86400`. Sous wrangler dev, empattage renvoyait encore les 23 460 806 o de l'ancien fichier (cache local persistant). En production, un clip réécrit sous le même nom serait resté périmé jusqu'à 24 h par datacenter.
- **Correctif :** une requête HEAD sur ASSETS, puis une clé = URL + `?etag=<ETag>` construite côté serveur. La query string du client reste ignorée, donc pas d'empoisonnement du cache. Les réponses non 200 repartent vers ASSETS.
- **Fichier :** `src/server.ts` ; **Commit :** 74e3020

**2. [Rule 3 - Blocking] verify-media pendant un lot partiel**
- Le plan veut ≤ 12 Mo sur chaque `public/animate/videos/*.mp4`, mais filtration et miseenbouteile n'étaient traités qu'en Task 3.
- Tant qu'un clip n'était pas listé comme process au manifeste, un dépassement de taille ne produisait qu'un WARN. C'est un FAIL sans manifeste, ou dès que le clip est listé.
- Depuis la Task 3, les 8 clips sont listés et le contrôle est strict.

**3. [Rule 3 - Blocking] `du -sm public` gonflé par la préallocation APFS**
- **Trouvé pendant :** Task 3
- **Problème :** juste après l'encodage, `du -sm public` affichait 63, alors que le contenu réel était de 58 662 405 o (55,9 Mio, `du -Asm` = 57). Sur APFS, les MP4 fraîchement écrits par ffmpeg (réécriture faststart) gardaient jusqu'à ~1 Mo de blocs préalloués chacun. Le critère `du -sm public < 60` échouait alors que le budget réel, en octets, était respecté.
- **Correctif :** chaque MP4 de `public/animate/videos/` et `public/media/video/` a été recopié octet par octet (`cat f > f.compact`, sha256 comparé, puis `mv`). Aucun changement de contenu ni de git diff ; le cache du pipeline, indexé par sha256, reste valide. `du -sm public` passe à 58.
- **Note :** un futur `npm run media --force` peut recréer cette préallocation. La mesure de référence est celle du pipeline et de check-assets (octets), ou `du -A`.

## Notes

- Images comparatives de la Task 2 (hors dépôt) : `$SP/process-ab/empattage-1080p-orig.png` et `empattage-720p.png`, prises à la seconde 5.
- `public/animate` pèse 21,2 Mio (apparent), dont 12,3 Mio de vidéos ; `public/media` pèse 35 Mio.
- SIZE-08 (public < 60 Mo, confirmé en production) reste à confirmer par le plan 07.

## Self-Check: PASSED

- FOUND : public/media/video/cv-lyna-rebahi.mp4 et les 8 `public/animate/videos/*.mp4`
- FOUND : les commits 641a13e, 74e3020, 8263055, b6ea9da et 49b89df

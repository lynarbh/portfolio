---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
plan: 06
subsystem: media-pipeline, video-serving
tags: [ffmpeg, h264, aac, animate, cache-api, checkpoint]
status: checkpoint-pending
requires:
  - "02-02 : classe hero, PIPELINE_VERSION, ssim() dans util.mjs"
  - "02-01 : src/server.ts sert /media/video/* et /animate/videos/* en 206 (run_worker_first)"
provides:
  - "scripts/media/video.mjs : classes cv (CRF 29, AAC 128k, résolution d'origine) et process (fps=25, scale=1280:720 lanczos, CRF 30, AAC 64k), mono-passe bitexact, SSIM par classe"
  - "scripts/media.mjs : PIPELINE_VERSION 4, out process = animate/videos/<basename exact de src>, cv/hero sous media/video/"
  - "verify-media : CV (High, AAC) + tout public/animate/videos/*.mp4 (faststart, yuv420p, ≤ 12 Mo ; 1280×720, 25/1, AAC pour les entrées process)"
  - "videos.cv = { src: /media/video/cv-lyna-rebahi.mp4, 1920×1080 } branché dans About"
  - "Liste d'exceptions du garde-fou vide"
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
    - public/animate/videos/empattage.mp4
  deleted:
    - public/videos/56_Lyna_REBAHI_CVvideo.mp4
decisions:
  - "02-06: la clé du cache vidéo du Worker inclut l'ETag de l'asset, sinon un MP4 réécrit sous le même nom reste servi périmé jusqu'à 24 h"
  - "02-06: tant que le lot process est partiel, verify-media ne fait qu'avertir sur la taille des clips 1080p pas encore listés au manifeste"
metrics:
  completed: 2026-09-28
  tasks: "1/3 (checkpoint Task 2 en attente)"
---

# Phase 2 Plan 06: Vidéos CV et process Summary (intermédiaire, point de contrôle en attente)

Le CV est réencodé en H.264 High / AAC 128k (10 599 167 o, SSIM 0,9926) et servi depuis `/media/video/cv-lyna-rebahi.mp4`. Empattage passe en 1280×720 25 fps CRF 30 au même chemin (3 528 510 o contre 23 460 806, SSIM 0,9735). La liste d'exceptions est vide. On attend que Lyna valide le 720p avant le lot des 7 autres clips.

**PLAN_BASE** = `fb0e8c47b4105673facf846d8a2c14ef4a7d01d4`

## Tâches

| Tâche | Nom | Commit | Statut |
|-------|-----|--------|--------|
| 1 | Classes cv/process, CV rebranché, empattage 720p, exceptions vidées | 641a13e | fait |
| 1b | Cache vidéo du Worker indexé par ETag (déviation, Rule 1) | 74e3020 | fait |
| 2 | Lyna regarde empattage en 720p dans la scène Animate | — | **en attente** |
| 3 | Lot des 7 autres vidéos process | — | à faire |

## Preuves (Task 1)

- CV : `High,yuv420p`, audio `aac`, 1920×1080, faststart, 10 599 167 o (≤ 12 000 000), SSIM 0,992627 contre la source
- Empattage : `1280,720,yuv420p,25/1`, audio `aac`, faststart, 3 528 510 o, SSIM 0,973533 (référence = source passée par fps=25/scale lanczos, sans perte)
- Les masters ont été clonés par `cp -c`, sha256 identiques aux fichiers servis : CV `cc1190a7…`, empattage `fcab97b6…`
- Sous `wrangler dev` : Range 0-1 → 206, `Content-Range: bytes 0-1/10599167` (CV) et `0-1/3528510` (empattage) ; `/videos/56_Lyna_REBAHI_CVvideo.mp4` → 404 ; `/projects/sae-2` → 200
- `npm run check` vert, `0 exception(s)` ; `npm run verify-media` OK (2 WARN de taille sur filtration/miseenbouteile, en attente du lot)
- Hors `public/animate/videos/`, aucun fichier `public/animate` modifié depuis PLAN_BASE
- Images : le passage à PIPELINE_VERSION 4 a réencodé les 57 images et 10 planches, octets identiques (aucun diff git)
- `du -sm public` = 110 (dont 72 pour `public/animate`), ce qui reste au-dessus de 60 jusqu'au lot

## Deviations from Plan

**1. [Rule 1 - Bug] Clip réécrit servi périmé par le cache du Worker**
- **Trouvé pendant :** préparation du point de contrôle
- **Problème :** `serveVideo` indexait le Cache API sur l'URL seule avec `max-age=86400`. Sous wrangler dev, empattage renvoyait encore les 23 460 806 o de l'ancien fichier (cache local persistant). En production, un clip réécrit sous le même nom resterait périmé jusqu'à 24 h par datacenter.
- **Correctif :** requête HEAD sur ASSETS, puis clé = URL + `?etag=<ETag>` construite côté serveur. La query string du client reste ignorée, donc pas d'empoisonnement. Les réponses non 200 repartent vers ASSETS.
- **Fichier :** `src/server.ts` ; **Commit :** 74e3020

**2. [Rule 3 - Blocking] verify-media pendant un lot partiel**
- Le plan veut ≤ 12 Mo sur chaque `public/animate/videos/*.mp4`, mais filtration (14,2 Mo) et miseenbouteile (16,4 Mo) ne seront traités qu'en Task 3. Tant qu'un clip n'est pas listé comme process au manifeste, le dépassement de taille reste un WARN. Sans manifeste, ou une fois le clip listé, c'est un FAIL. En fin de plan, les 8 sont listés et le contrôle est strict.

## Notes

- `check-assets` avertit (souple, 10 Mio) sur le CV à 10,11 Mio. La limite dure de 12 Mo est respectée.
- Images comparatives (hors dépôt) : `$SP/process-ab/empattage-1080p-orig.png` et `empattage-720p.png`, seconde 5.

## Point de contrôle (Task 2)

En attente de la réponse de Lyna : approved / defer / crf N / 1080p.

## Self-Check: PASSED

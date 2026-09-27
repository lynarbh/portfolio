---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
plan: 03
subsystem: media-pipeline, home
tags: [sharp, avif, webp, picture, srcset, lazy-loading, determinism]
requires:
  - "02-02 : scripts/media.mjs (manifeste, cache, module généré), scripts/verify-media.mjs, media.generated.ts"
provides:
  - "scripts/media/images.mjs : presets sharp photo/graphic, échelle 640/1200/2400 sans agrandissement, repli unique ≤ 640, alpha → PNG, SSIM"
  - "src/components/Picture.tsx : seul composant d'image de contenu (<picture> AVIF + WebP photo + repli lazy/async)"
  - "images{} du module généré : home/portrait + 6 vignettes thumbnails/*, MediaId = union fermée de ces 7 ids"
  - "Project.thumbnail typé MediaId"
affects: [02-04, 02-05, 02-06]
tech-stack:
  added: []
  patterns:
    - "Id image = <projet>/<toKebab(nom)>, dossier de sortie public/media/<projet>/, noms construits depuis l'id uniquement"
    - "Espace d'ids partagé images/vidéos, collision = exit 2"
    - "Picture : h-auto sauf si className contient déjà un token h-…"
key-files:
  created:
    - scripts/media/images.mjs
    - src/components/Picture.tsx
    - public/media/home/ (7 fichiers)
    - public/media/thumbnails/ (26 fichiers)
  modified:
    - scripts/media.mjs
    - scripts/verify-media.mjs
    - src/data/media.generated.ts
    - src/routes/index.tsx
    - src/data/projects.ts
    - src/server.ts
  deleted:
    - public/media/portrait.jpg
decisions:
  - "02-03: le 4:4:4 des AVIF graphic est vérifié par ffprobe (pix_fmt yuv444p) : sharp 0.35.4 n'expose pas chromaSubsampling pour HEIF ; WARN « chroma non vérifiable » seulement si ffprobe ne répond pas"
  - "02-03: projects.ts n'est pas passé à prettier (fichier déjà non conforme au HEAD) pour garder un diff minimal"
metrics:
  duration: "8 min"
  completed: 2026-09-28
  tasks: 2
  files: 44
---

# Phase 2 Plan 03: Images de l'accueil (pipeline images + `<Picture>`) Summary

Branche images du pipeline (presets sharp photo 4:2:0 + WebP + JPEG / graphic 4:4:4 + PNG quantifié, échelle 640/1200/2400 plafonnée et jamais agrandie, sans ICC, SSIM par image) et composant `<Picture>` : le portrait et les 9 cartes projet de l'accueil passent en `<picture>` AVIF/WebP lazy, soit 1,05 Mio de dérivés au lieu de 11,2 Mo de PNG/JPEG servis.

## Tasks

| # | Tâche | Commit | Fichiers |
|---|-------|--------|----------|
| 1 | Branche images du pipeline + portrait et vignettes encodés + contrôles verify-media | 6b7fb9f | scripts/media.mjs, scripts/media/images.mjs, scripts/verify-media.mjs, src/data/media.generated.ts, public/media/home/**, public/media/thumbnails/** |
| 2 | `<Picture>` + migration de l'accueil + vignettes typées `MediaId` + retrait de l'ancien portrait | ee85b20 | src/components/Picture.tsx, src/routes/index.tsx, src/data/projects.ts, src/server.ts, public/media/portrait.jpg (supprimé) |

## Sources clonées (media-src/, non commité)

`cp -c` depuis `media-src/public/assets/<nom>`, sha256 identique au fichier servi vérifié avant copie pour les 7 :
`home/portrait.jpg` (PNG 1139×1512, alpha présent mais opaque → JPEG en repli), `thumbnails/portfolio-thumbnail-0{1..4}-*.png` (896×1200, 1024×1024 ×3, opaques), `thumbnails/SAE1.png` / `SAE2.png` (1076×1358 / 1074×1360, ICC d'origine retiré à l'encodage).

## Résultats d'encodage

| id | preset | rungs AVIF (w) | repli | total | SSIM |
|---|---|---|---|---|---|
| home/portrait | photo | 482, 904, 1139 | portrait.jpg | 258,2 Kio | 0,9545 |
| thumbnails/portfolio-thumbnail-01-branding | photo | 478, 896 | .jpg | 46,0 Kio | 0,9541 |
| thumbnails/portfolio-thumbnail-02-flyers | photo | 640, 1024 | .jpg | 90,9 Kio | 0,9562 |
| thumbnails/portfolio-thumbnail-03-web | photo | 640, 1024 | .jpg | 88,1 Kio | 0,9813 |
| thumbnails/portfolio-thumbnail-04-video | photo | 640, 1024 | .jpg | 82,2 Kio | 0,9826 |
| thumbnails/sae1 | graphic | 507, 951 | .png | 175,5 Kio | 0,9811 |
| thumbnails/sae2 | graphic | 506, 948 | .png | 199,2 Kio | 0,9764 |

Aucun WARN SSIM. `du -sk` : `public/media/home` 272 Kio, `public/media/thumbnails` 808 Kio.

## Verification

Task 1 :
- `npm run media` → 7 lignes image `encoded … SSIM …` (hero ré-encodé une fois à cause de `PIPELINE_VERSION` 2, octets identiques au commit précédent), `media: OK`
- Import du module généré : `7 home/portrait thumbnails/portfolio-thumbnail-01-branding … thumbnails/sae1 thumbnails/sae2` ; aucune entrée graphic avec webp, aucun rung de vignette > 1200
- `npm run verify-media` → `verify-media: OK` ; `npx tsc --noEmit` OK
- `find public/media/home public/media/thumbnails` : tous les noms en `[a-z0-9-]+\.(avif|webp|jpg|png)`
- Déterminisme : `--force` ×2 → `diff det3-a.txt det3-b.txt` vide (tout `public/media` + module généré) ; exécution suivante → 8 entrées `cached`
- Manifestes invalides (scratchpad) : id dupliqué, `max: 3000`, `src: ../package.json`, `id: "Home/Portrait"` → exit 2 avec message explicite
- `git status --porcelain media-src` vide ; eslint OK sur les trois scripts ; `npm run check` vert

Task 2 :
- Greps d'acceptation : `export function Picture` = 1 ; hooks/window = 0 ; `cn(`/clsx/tailwind-merge = 0 ; `thumbnail: MediaId` = 1 ; `thumbnail: "/assets/` = 0 ; `thumbnail: "thumbnails/` = 9 ; `PORTRAIT|/media/portrait.jpg|<img` dans index.tsx = 0 ; `public/media/portrait.jpg` absent (sha256 `53562e0a…` identique au clone avant `git rm`)
- `node scripts/inventory-assets.mjs` → `REF=88 NAME-ONLY=0 UNREF=6 MISSING=0`, exit 0 (les 6 UNREF sont les anciennes vignettes de `public/assets/`, supprimées au plan 04)
- `npm run check` → exit 0
- Sous `wrangler dev --port 8787` (arrêté ensuite, port libre) : 10 `type="image/avif"` ; 10 `<img>`, tous `loading="lazy"` + `decoding="async"` + `width`/`height` ; 0 `/assets/portfolio-thumbnail|/assets/SAE` ; 1 seul preload `as="image"` (poster hero) ; les 34 URL `/media/…` du HTML répondent 200 avec le bon type MIME ; `/media/portrait.jpg` → 404
- Rendu : portrait `class="h-auto"` 1139×1512 ; cartes `class="h-full w-full object-cover …"` sans `h-auto`

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] `inventory-assets` en échec au HEAD (MISSING `/media/video/`)**
- **Found during:** Task 1 (`npm run check` puis inventaire)
- **Issue:** un commentaire de `src/server.ts` (plan 02) contenait `(… in /media/video/)` ; le scan en texte nu de `inventory-assets.mjs` le lisait comme une URL manquante → exit 1, alors que le critère de la Task 2 exige exit 0.
- **Fix:** commentaire reformulé sans chemin littéral (aucun changement de code).
- **Files modified:** src/server.ts
- **Commit:** ee85b20

**2. [Rule 2 - Correctness] 4:4:4 vérifié par ffprobe plutôt que WARN**
- **Found during:** Task 1
- **Issue:** sharp 0.35.4 renvoie `chromaSubsampling: undefined` pour l'AVIF ; la règle du plan aurait réduit le contrôle à un WARN permanent.
- **Fix:** `verify-media` lit `pix_fmt` via ffprobe (`yuv444p` attendu → FAIL sinon) ; WARN « chroma non vérifiable » conservé si ffprobe échoue.
- **Files modified:** scripts/verify-media.mjs
- **Commit:** 6b7fb9f

## Known Stubs

None.

## Threat Flags

None (aucune nouvelle surface réseau ; T-02-12, T-02-13, T-02-15, T-02-16 mitigés comme prévu : validation `insideDir`/regex/collisions, ICC contrôlé par verify-media, `MediaId` fermé, `git rm` conditionné au sha256).

## Self-Check: PASSED

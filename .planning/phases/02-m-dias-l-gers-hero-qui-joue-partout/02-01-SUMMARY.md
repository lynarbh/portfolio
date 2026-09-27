---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
plan: 01
subsystem: worker-entry, hero
tags: [cloudflare-workers, range-requests, cache-api, video, a11y, hero]
requires: []
provides:
  - "src/server.ts : entrée Worker, MP4 sous /media/video/ et /animate/videos/ servis en 206 via caches.default"
  - "Hero : machine d'état lecture/pause + bouton fixe accessible (aria-pressed)"
  - "Approbation humaine de sharp@0.35.4 (débloque le plan 02)"
affects: [02-02, 02-03, "déploiement fin de phase 2"]
tech-stack:
  added: []
  patterns:
    - "Entrée Worker personnalisée enveloppant createServerEntry de TanStack Start"
    - "Cache API (caches.default) pour découper les Range en 206, clé sans query string"
    - "Lecture vidéo pilotée par JS (SSR en pause), reduced-motion et visibilitychange"
key-files:
  created:
    - src/server.ts
    - src/cloudflare-workers.d.ts
  modified:
    - wrangler.jsonc
    - src/routes/index.tsx
decisions:
  - "02-01: src/server.ts sert les MP4 de /media/video/ et /animate/videos/ en 206 via caches.default ; clé et lookup sans query string, HEAD transmis à env.ASSETS, préfixe hérité /videos/ non routé"
  - "02-01: scrim du bouton hero = rgba(61,31,58,0.85) (8,62:1) au lieu de color-mix(plum 70%) (1,95:1), aucun nouveau token"
  - "02-01: sharp@0.35.4 approuvé par Lyna le 2026-09-28, dist.integrity inchangée — le plan 02 peut l'installer en --save-dev --save-exact"
metrics:
  duration: "4 min"
  completed: 2026-09-28
  tasks: 3
  files: 4
---

# Phase 2 Plan 01: Worker Range 206 + hero lecture/pause Summary

Entrée Worker `src/server.ts` qui répond 206 + `Content-Range` aux requêtes Range sur les MP4 via le Cache API (le vrai bloqueur Safari/iOS), et hero réécrit en machine d'état lecture/pause pilotée par JS avec un bouton fixe accessible de 44×44 ; approbation de sharp@0.35.4 consignée.

## Tasks

| # | Tâche | Commit | Fichiers |
|---|-------|--------|----------|
| 1 | Entrée Worker compatible Range (206) | 028eb3f | src/server.ts, src/cloudflare-workers.d.ts, wrangler.jsonc |
| 2 | Machine d'état lecture/pause du hero + bouton | 19f0a52 | src/routes/index.tsx |
| 3 | Légitimité sharp@0.35.4 (pré-approuvée) | — (aucun fichier) | — |

## Verification

Task 1, sous `wrangler dev --port 8787` :
- `Range: bytes=0-1` sur `/animate/videos/empattage.mp4` → `206 Partial Content`, `Content-Range: bytes 0-1/23460806`, `Accept-Ranges: bytes`
- même requête avec `?v=1` → 206, même Content-Range
- `Range: bytes=100-199` sur `concassage.mp4` → 100 octets
- GET sans Range sur `whirpool.mp4` → 200 + `Accept-Ranges: bytes` ; HEAD → 200
- `nope.mp4` → 404 ; `/`, `/projects/sae-2`, `/projects/clip` → 200
- `dist/server/wrangler.json` contient `run_worker_first` ; `npm run check` vert (`env.ASSETS` listé, `--dry-run: exiting now.`)

Task 2, HTML SSR de `/` :
- `<video class="h-full w-full object-cover" src="/videos/hero.mp4" poster="/assets/hero.png" muted="" loop="" playsInline="" preload="metadata" aria-hidden="true">` (pas d'autoplay)
- `aria-pressed="true"` ×1, `sr-only">Mettre en pause la vidéo` ×1, texte de repli ×1 (compté avec `LC_ALL=C` : sous la locale `C.UTF-8` du shell, `/usr/bin/grep -c` renvoie 0 sur les motifs accentués du HTML)
- `npm run check` vert ; `vite.config.ts` et `src/routeTree.gen.ts` inchangés

Task 3 : `npm view sharp@0.35.4 repository.url dist.integrity`
```
repository.url = 'git+https://github.com/lovell/sharp.git'
dist.integrity = 'sha512-n++8XWcj+jCOr2IOl7h8LbKnGBDY4aPbmprMONBNFdn0ImXqpGVv5zliDs0V9HbmbCQLpbuo2ej9rAoOQTvMDA=='
```
Intégrité identique à la valeur du plan. **Approbation humaine : « approved », Lyna, 2026-09-28**, obtenue par l'orchestrateur sur présentation des preuves (dépôt lovell/sharp, paquet créé en 2013, 0.35.4 publiée le 2026-08-26, mainteneur unique lovell, aucun script install/postinstall/preinstall). sharp n'est pas déclaré dans `package.json` à la fin de ce plan (contrôle node → exit 0).

## Deviations from Plan

### Écarts assumés (prévus par le plan)

**1. Scrim du bouton hero : `rgba(61,31,58,0.85)` au lieu de `color-mix(in oklab, var(--plum) 70%, transparent)` (UI-SPEC)**
- `--plum` contient déjà une alpha (`oklch(… / 0.618)`) : au-dessus de la section Projets, plum 70 % donne 1,95:1 pour l'icône crème, plum 92 % donne 2,47:1, les deux sous le seuil de 3:1.
- `rgba(61,31,58,0.85)` (arrêt bas du dégradé hero, déjà listé en « Secondary » dans l'UI-SPEC) donne 8,62:1 sur la section Projets et 8,40:1 sur blanc pur. Aucun nouveau token.

**2. Trois écarts voulus par rapport au prototype `src/server.ts`** : pas de préfixe hérité `/videos/` (regex et `run_worker_first`), clé et lookup du cache sans query string, HEAD sur un chemin vidéo transmis à `env.ASSETS`.

### Auto-fixed Issues

None.

### Notes

- `npx prettier --write src/routes/index.tsx` a aussi reformaté le reste du fichier (≈ 110 lignes de diff hors Hero, formatage seul), comme demandé pour les fichiers modifiés ; inclus dans le commit 19f0a52.
- Tant que le plan 02 n'a pas déplacé le hero sous `/media/video/`, `/videos/hero.mp4` reste servi par Static Assets (200 sans Range) : sur iPhone, seul le poster s'affiche jusqu'au plan 02. Voulu (le préfixe hérité sera supprimé).
- Le bouton utilise l'attribut `hidden` avec la classe `flex` : le preflight Tailwind v4 applique `display: none !important` à `[hidden]`, donc le bouton disparaît bien en cas d'erreur vidéo.

## Threat Flags

None — la surface ajoutée (entrée Worker sur les chemins vidéo, Cache API) est celle du threat model (T-02-01 à T-02-04 mitigés comme prévu).

## Known Stubs

None. (`HERO_VIDEO` / `HERO_FALLBACK` gardent les chemins actuels, remplacés par le manifeste au plan 02, comme prévu.)

## Self-Check: PASSED

- FOUND: src/server.ts, src/cloudflare-workers.d.ts, wrangler.jsonc, src/routes/index.tsx
- FOUND: commits 028eb3f, 19f0a52

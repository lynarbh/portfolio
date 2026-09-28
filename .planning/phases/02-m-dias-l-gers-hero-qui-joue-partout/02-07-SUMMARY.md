---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
plan: 07
subsystem: asset-guard, media-pipeline, deploy
tags: [budget, determinism, x264, cloudflare, deploy, range, checkpoint]
status: checkpoint (Task 3 UAT sur appareils réels en attente)
requires:
  - "02-06 : liste d'exceptions vide, public/ 55,9 Mio, clé Cache API avec ETag"
  - "02-01 : src/server.ts, run_worker_first sur /media/video/* et /animate/videos/*"
provides:
  - "scripts/check-assets.mjs : budget total 60 Mio sur dist/client, en octets réels, non dérogeable (BUDGET = 60 * MiB)"
  - "scripts/media/video.mjs : classes cv et process encodées avec -threads:v 1, octets identiques d'une exécution à l'autre"
  - "Production lynarebahi.fr sur la version 30a0c129-7de4-448d-b814-4bf98c03b5b4 (phase 2), vidéos en 206"
affects: [phase-2-verification, HUMAN-UAT]
tech-stack:
  added: []
  patterns:
    - "Encodages x264 plafonnés par VBV (-maxrate/-bufsize) en un seul thread pour rester déterministes"
key-files:
  created: []
  modified:
    - scripts/check-assets.mjs
    - scripts/media/video.mjs
    - public/media/video/cv-lyna-rebahi.mp4
    - public/animate/videos/concassage.mp4
    - public/animate/videos/ebullition.mp4
    - public/animate/videos/empattage.mp4
    - public/animate/videos/fermentation.mp4
    - public/animate/videos/filtration.mp4
    - public/animate/videos/miseenbouteile.mp4
    - public/animate/videos/refroidissement.mp4
    - public/animate/videos/whirpool.mp4
  deleted:
    - components.json
decisions:
  - "02-07: le budget total de 60 Mio de dist/client est une règle de check-assets non dérogeable (absente de RULES)"
  - "02-07: x264 avec VBV et threads de trame n'est pas déterministe ; les classes cv et process encodent avec -threads:v 1 (hero, sans VBV, inchangé)"
  - "02-07: premier déploiement réel de la phase 2 : version 30a0c129-7de4-448d-b814-4bf98c03b5b4, rollback vers 0b1ccd2a-db8e-4136-b65c-55615d6787b4"
  - "02-07: l'assomption A2 est confirmée en production : le Cache API renvoie 206 + Content-Range aux requêtes Range"
metrics:
  started: 2026-09-28T00:40:54Z
  completed: 2026-09-28T01:06Z
  duration: ~25 min
  tasks: "2/3 (Task 3 = checkpoint humain)"
  files: 12
---

# Phase 2 Plan 07: Budget, porte de fin de phase et mise en ligne Summary

`npm run check` refuse désormais tout `dist/client` au-dessus de 60 Mio (règle non dérogeable, prouvée par un test factice). La porte de fin de phase est verte depuis zéro, après correction d'un défaut de déterminisme des encodages vidéo VBV. La phase 2 est en production sur `lynarebahi.fr` (version `30a0c129-7de4-448d-b814-4bf98c03b5b4`) : 10 pages en 200, poster WebP en 200 et vidéos en **206** avec `Content-Range`. `main` est poussée. Reste le test sur appareils réels par Lyna (Task 3).

## Tâches

| # | Tâche | Commit | Statut |
|---|-------|--------|--------|
| 1 | Règle de budget 60 Mio, suppression de `components.json`, porte de fin de phase | `b3b035b`, `c2e8d0e` (fix déterminisme) | fait |
| 2 | Déploiement réel, contrôles curl, rollback documenté, push | — (aucun fichier source) | fait |
| 3 | Test sur appareils réels et A/B par Lyna | — | **en attente** (checkpoint) |

## Task 1 : budget et porte de fin de phase

### Règle de budget

- `const BUDGET = 60 * MiB; // whole dist/client, never waivable` à côté des seuils ; `if (total > BUDGET) errors.push(... "> 60 MiB total budget (not waivable)")` après la boucle. `total` somme les `statSync().size` réels des fichiers servis (hors `.assetsignore`).
- `RULES` reste `["size", "faststart", "pix_fmt"]` : le budget n'est pas dérogeable. Les commentaires d'en-tête et de `RULES` le disent.
- Compteurs : `BUDGET = 60 \* MiB` = 1, `total > BUDGET` = 1.

**Test factice** (dans `dist/client`, jamais dans `public/`) :

```
mkfile -n 15m dist/client/zz-budget-{1,2,3}.bin
check-assets: 101.4 MiB in dist/client, 0 exception(s):
  WARN  zz-budget-1.bin 15.00 MiB > 10 MiB   (idem 2 et 3)
  FAIL  dist/client 101.4 MiB > 60 MiB total budget (not waivable)
check-assets: 1 failure(s)        -> exit 1
rm ...; check-assets: 56.4 MiB, OK -> exit 0 ; ls dist/client/zz-budget-* | wc -l = 0
```

### components.json

La recherche `grep -rn 'components.json'` (json, ts, tsx, mjs, js, jsonc ; hors node_modules, dist, media-src, .planning) ne renvoie rien. Le fichier est supprimé (`git rm`, commit `b3b035b`). `knip.json` ne le référence pas.

### Porte de fin de phase (état final, après le fix)

| Contrôle | Résultat |
|----------|----------|
| `rm -rf dist && npm run check` | exit 0 ; `check-assets: 55.8 MiB in dist/client, 0 exception(s)` ; `check-assets: OK` ; aucune ligne `EXCEPTION` ni `FAIL` ; dry-run wrangler OK |
| Déterminisme : 2 × `npm run media -- --force` | 286 s puis 288 s ; 329 empreintes (328 sorties + `media.generated.ts`) ; `diff final-a.txt final-b.txt` vide ; `git status --porcelain public src` vide après commit du fix |
| `npm run verify-media` | `verify-media: OK` |
| `node scripts/inventory-assets.mjs` | exit 0 ; `REF=322 NAME-ONLY=0 UNREF=0 MISSING=0` |
| Poids `public/` | 58 046 663 o (55,4 Mio) ; `du -Asm` = 56 ; `du -sm` = 62 juste après `--force` (préallocation APFS), **58** après réécriture à l'identique des MP4 (sha256 vérifié, aucun diff git) |
| Fichiers > 12 Mo dans `public/` | 0 |
| `media.mjs` absent de build/check/deploy | exit 0 |
| `"/assets/` ou `"/videos/` dans `src/` | aucun ; `public/assets` et `public/videos` absents ; 0 PDF dans `public/` |
| Prettier | `npx prettier --check scripts/ src/server.ts src/components/Picture.tsx` : `All matched files use Prettier code style!`. `src/data/media.generated.ts` est dans `.prettierignore` (ligne 10) : retiré de la commande, prettier l'ignore de toute façon |
| ESLint | `npx eslint scripts/ src/server.ts src/components/Picture.tsx` : 0 erreur |
| Invariants | `git diff --quiet be718d8 -- vite.config.ts src/routeTree.gen.ts` exit 0 ; aucune création, suppression ni renommage dans `src/routes` depuis `be718d8` |
| Audit git | aucun blob > 12 Mo dans `be718d8..HEAD` ; `git ls-files media-src` = 0 ; 0 `.pdf` dans tout l'historique |

## Task 2 : mise en ligne

### Versions

- Version active avant déploiement (`npx wrangler deployments list`) : `0b1ccd2a-db8e-4136-b65c-55615d6787b4` (2026-09-01), comme attendu. `wrangler whoami` : lyna.rebahi@gmail.com.
- `npm run deploy` lancé **une seule fois**, après la porte verte : check complet puis `wrangler deploy`. 333 fichiers envoyés (28 déjà présents), Worker 925,79 KiB (gzip 183,87 KiB), démarrage 14 ms.
- **Nouvelle version : `30a0c129-7de4-448d-b814-4bf98c03b5b4`** (2026-09-28 ~01:03 UTC).

### Rollback

- Revenir à la production précédente : `npx wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4 --message "phase 2 rollback"`
- Revenir ensuite à la version phase 2 : `npx wrangler rollback 30a0c129-7de4-448d-b814-4bf98c03b5b4`
- Aucun rollback n'a été nécessaire.

### Contrôles curl sur https://lynarebahi.fr (juste après le déploiement)

| URL | Résultat |
|-----|----------|
| `/` + 9 pages projet (prototype-site-accessible, business-card-mockup, festival-identite, illustration-photoshop, portraits-illustration, stop-motion, clip, sae-1, sae-2) | 10 × **200** |
| HTML de `/` | contient `/media/video/hero.mp4` (1) ; 1 seul `<link rel="preload" as="image" type="image/webp" href="/media/video/hero-poster.webp" fetchPriority="high"/>` |
| `/media/video/hero.mp4`, `Range: bytes=0-1` | `HTTP/2 206`, `content-range: bytes 0-1/3781191`, `content-length: 2`, `cf-cache-status: HIT`, `cache-control: public, max-age=86400` |
| `/media/video/cv-lyna-rebahi.mp4`, Range | `HTTP/2 206`, `content-range: bytes 0-1/10343991` (taille du nouvel encodage, donc pas de contenu périmé) |
| `/animate/videos/empattage.mp4`, Range | `HTTP/2 206`, `content-range: bytes 0-1/3336974` (nouvel encodage) |
| `/animate/videos/whirpool.mp4`, Range **sans requête préalable** | `HTTP/2 206`, `content-range: bytes 0-1/772920` |
| `/media/video/hero-poster.webp` | 200, `content-type: image/webp` |
| `/media/festival-identite/planche-01-1200.avif`, `/media/clip/clip1-1200.webp`, `/media/sae-2/angerboda1-1200.avif`, `/media/sae-2/angerboda1.png` | 200, types `image/avif`, `image/webp`, `image/avif`, `image/png` |
| `/videos/hero.mp4`, `/assets/hero.png`, `/charte_graphique.pdf`, `/assets/charte_graphique.pdf`, `/pdf/charte_graphique.pdf` | 5 × **404** |

Sans Range, chaque vidéo répond 200 avec le corps complet (octets égaux aux fichiers locaux). **L'assomption A2 est confirmée** : le Cache API de production découpe les requêtes Range en 206. Aucun blocage HERO-01 côté serveur. Aucune réponse n'a paru périmée : pas besoin de requête `?v=`.

### Push

`git push origin main` : `2d46da2..c2e8d0e main -> main`. `git status -sb` : `## main...origin/main`, ni ahead ni behind. Le push ne déclenche aucun build Cloudflare.

## Task 3 : test sur appareils réels (checkpoint, en attente)

Contrôles humains reportés des plans précédents :

- **02-02**, CRF 32 du hero : **validé** par Lyna (« approved », 2026-09-28). Ne reste que l'iPhone réel (point 1 ci-dessous).
- **02-06**, 720p CRF 30 sur empattage : **validé** (« approved », 2026-09-28). Les 8 clips et le CV ont été réencodés ici en un seul thread : même CRF, SSIM 0,9655 à 0,9928, fichiers un peu plus petits. Le rendu est à revoir au point 6.
- **Phase 1** (01-04 Task 2), validation visuelle de la version lite et chaîne Animate 1_MOHAMED → 3_ALBERTIN : **en attente** dans STATE.md. Elle est reprise aux points 6 et 7.

| # | Contrôle | Statut |
|---|----------|--------|
| 1 | iPhone Safari : hero autoplay, couleurs, poster = première image, bouton pause | en attente |
| 2 | iPhone en mode économie d'énergie : poster + bouton « lecture », un appui lance la vidéo | en attente |
| 3 | Android Chrome et desktop : autoplay, Tab → anneau rose, Espace met en pause | en attente |
| 4 | VoiceOver / TalkBack : « Mettre en pause la vidéo », bouton bascule, état pressé | en attente |
| 5 | Vidéo CV : lecture et avance rapide sur iPhone | en attente |
| 6 | /projects/sae-2 : chaîne complète, 8 vidéos avec le son (+ contrôle phase 1) | en attente |
| 7 | /projects/festival-identite : 10 planches, logo → signalétique | en attente |
| 8 | A/B à 100 % contre `media-src/` (affiche, freya1, planche 16, clip4, moodboard) | en attente |

La réponse de Lyna (« approved », « defer » ou un problème décrit) sera consignée point par point par l'orchestrateur. Sur « defer », les 8 points passent au fichier HUMAN-UAT de la vérification de phase.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Encodages cv et process non déterministes**
- **Trouvé pendant :** Task 1, porte de déterminisme.
- **Problème :** deux `npm run media -- --force` successifs donnaient des octets différents pour `animate/videos/empattage.mp4` et `media/video/cv-lyna-rebahi.mp4`, tous deux différents aussi des fichiers commités. En isolant le problème sur empattage : sans `-maxrate/-bufsize`, 4 exécutions identiques ; avec VBV et les threads par défaut, les empreintes changent d'une exécution à l'autre (y compris avec `-an`) ; avec VBV et `-threads:v 1`, 3 exécutions identiques. Le contrôle de débit VBV de x264 sous threads de trame dépend du minutage des threads. Le hero, sans VBV, était déjà stable.
- **Correction :** `-threads:v 1` dans `withAudioArgs` (classes cv et process), avec un commentaire. Les 9 vidéos concernées sont réencodées. Mêmes CRF et VBV ; SSIM : cv 0,9928, process de 0,9655 à 0,9818. Tailles : cv 10 343 991 o (9,86 Mio, contre 10 599 167 o), empattage 3 336 974 o. `public/` passe de 55,9 à 55,4 Mio. Chaque exécution de `--force` passe d'environ 160 s à 287 s. `-x264-params sliced-threads=1`, déterministe aussi, a été écarté : fichier 7 % plus gros.
- **Fichiers :** `scripts/media/video.mjs` et les 9 MP4 (tous < 12 Mo).
- **Commit :** `c2e8d0e`

**2. [Environnement] `du -sm public` à 62 juste après `--force`**
- Préallocation APFS déjà notée en 02-06. Les MP4 ont été réécrits à l'identique (`cat > .cp && mv`, sha256 avant = après, aucun diff git) : `du -sm` = 58. La mesure en octets (58 046 663 o) et `du -Asm` (56) sont restées sous 60 dans tous les cas.

## Known Stubs

Aucun introduit par ce plan.

## Threat Flags

Aucune nouvelle surface. Le déploiement suit T-02-29 à T-02-33 : pas de secret ajouté, contrôle des 10 pages juste après le déploiement, `npm run check` rejoué par `deploy`, clé de cache vidéo avec ETag (vérifiée ici : les tailles servies correspondent aux nouveaux encodages).

## Self-Check: PASSED

- `scripts/check-assets.mjs` contient `BUDGET = 60 * MiB` ; `components.json` est absent ; `scripts/media/video.mjs` contient `-threads:v`.
- Les commits `b3b035b` et `c2e8d0e` sont présents dans `git log` et poussés sur `origin/main`.
- Production : nouvelle version `30a0c129-7de4-448d-b814-4bf98c03b5b4`, relevée dans la sortie de `wrangler deploy`.

## Checkpoint Task 3 — résolu : « defer »

**Réponse de Lyna (2026-09-28, via l'orchestrateur) : « defer ».** Les 8 points de test sur appareil réel (hero iPhone Safari + mode économie d'énergie, Android/desktop, VoiceOver, vidéo CV, chaîne SkøllRub 6 scènes, 10 planches Tafsut, comparaison à 100 %) passent en UAT humaine en attente (`02-HUMAN-UAT.md`). HERO-01 reste « Pending » jusqu'au test iPhone. Production : version `30a0c129-7de4-448d-b814-4bf98c03b5b4`, rollback `npx wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4`.

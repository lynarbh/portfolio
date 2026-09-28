---
phase: 02-m-dias-l-gers-hero-qui-joue-partout
plan: 05
subsystem: media-pipeline, project-pages
tags: [ghostscript, pdf, avif, gallery, determinism]
requires:
  - "02-04 : encodeImage, manifeste 57 images, galerie générique alt = images[id].alt ?? « vue N », Project.media readonly MediaId[]"
provides:
  - "scripts/media/pdf.mjs : renderPdfPage(pdfAbs, page, dpi, outPng), gs -dSAFER, une page par appel, sortie forcée sous media-src/.tmp/"
  - "Manifeste : pdf[] (src, dpi, preset, pages[{page, id, alt}]) et galleries validés ; module généré avec galleries dans l'ordre du manifeste"
  - "10 planches Tafsut sous public/media/festival-identite/ (30 AVIF + 10 PNG, 3,3 Mio)"
  - "festival-identite : media = galleries[\"festival-identite\"], inProgress retiré"
affects: [02-06]
tech-stack:
  added: [ghostscript (outil local, hors check/build)]
  patterns:
    - "Page PDF = entrée image (même espace d'ids), clé de cache = sha256 PDF + options de page (id, preset, alt, page, dpi) + PIPELINE_VERSION"
    - "galleries : clés triées par byKey, membres dans l'ordre éditorial du manifeste"
key-files:
  created:
    - scripts/media/pdf.mjs
    - public/media/festival-identite/
  modified:
    - scripts/media.mjs
    - scripts/verify-media.mjs
    - src/data/media.generated.ts
    - src/data/projects.ts
decisions:
  - "02-05: PIPELINE_VERSION passé à 3 ; le ré-encodage complet des 57 images existantes a redonné des octets identiques (aucun diff git hors festival-identite)"
  - "02-05: les membres d'une galerie sans méta en cache (encodage échoué) sont filtrés du module généré ; verify-media (≥ 10 planches) attrape alors le trou"
  - "02-05: projects.ts non passé à prettier (non conforme au HEAD) ; diff limité à 3 lignes"
metrics:
  duration: "12 min"
  completed: 2026-09-28
  tasks: 2
  files: 45
---

# Phase 2 Plan 05: Charte Tafsut Summary

Branche PDF du pipeline média : Ghostscript rend 10 pages de la charte Tafsut à 300 dpi (un appel `gs -dSAFER` par page), le preset graphic les encode (AVIF 4:4:4 640/1200/2400 + PNG 640), et « Identité d'un festival » les affiche dans l'ordre logo → palette → typographies → affiche → billets → goodies → signalétique. Le projet n'est plus « en cours ».

## Tasks

| Task | Nom | Commit | Fichiers |
|------|-----|--------|----------|
| 1 | Branche PDF du pipeline et extraction des 10 planches | ccadab8 | scripts/media/pdf.mjs, scripts/media.mjs, scripts/verify-media.mjs, src/data/media.generated.ts, public/media/festival-identite/ (40 fichiers) |
| 2 | Galerie sur « Identité d'un festival », inProgress retiré | 760db09 | src/data/projects.ts |

## Résultats

- Galerie générée : `planche-01, 09, 16, 21, 24, 23, 25, 27, 28, 32` (ordre exact du manifeste), alts « Charte graphique Tafsut — logo / palette de couleurs / typographies / affiche / billets / goodies / signalétique ».
- Poids : 3,3 Mio pour les 40 fichiers ; plus gros fichier `planche-24-2400.avif` à 443 Kio.
- SSIM (rung 1200, seuil graphic 0,96) : p.1 0,9795 · p.9 0,9977 · p.16 0,9988 · p.21 0,9983 · p.23 0,9874 · p.24 0,9639 · p.25 0,9894 · p.27 0,9946 · p.28 0,9827 · p.32 0,9689. Aucune sous le seuil.
- Déterminisme : `npm run media` complet (cache invalidé par la v3) puis `npm run media -- --force` : sha256 identiques pour `public/media/festival-identite/*` et `media.generated.ts`.
- Validateur : galerie avec un id inconnu, `page: 0`, `dpi: 1200`, `src: "../…"`, id en double → tous en exit 2 avec message explicite.
- `find public -iname '*.pdf'` = 0, `git ls-files | grep -ci '\.pdf$'` = 0. La copie `media-src/festival-identite/charte_graphique.pdf` est gitignorée (`media-src/`).
- wrangler dev : 10 alts Tafsut sur `/projects/festival-identite`, 10 planches distinctes, les 40 URL `/media/festival-identite/…` en 200, 0 « En cours de dev » sur l'accueil (la carte pointe vers `/projects/festival-identite`), `/charte_graphique.pdf` et `/assets/charte_graphique.pdf` en 404.
- `npm run verify-media` : OK ; `npm run check` : vert après chaque tâche.

## Deviations from Plan

None - plan executed exactly as written.

Notes :
- Les avertissements existants de `npm run media` restent inchangés et hors périmètre : SSIM de `sae-1/logoprincipal` (0,9592) et de `sae-2/moodboard-lyna` (0,9293), et `public/` à 138 Mio pour un budget de 60 Mio (dont 90 Mio sous `public/animate/`, qui relève du plan 06).
- Le PDF a été copié avec `cp -c` (clone APFS) dans `media-src/festival-identite/`. L'original `media-src/charte_graphique.pdf` est conservé.

## Known Stubs

Aucun. Les alts Tafsut sont des textes fonctionnels provisoires (UI-SPEC), que Lyna peut reformuler dans `media-src/manifest.json` avant de relancer `npm run media`.

## Self-Check: PASSED

- FOUND: scripts/media/pdf.mjs, public/media/festival-identite/ (30 .avif + 10 .png)
- FOUND: ccadab8, 760db09

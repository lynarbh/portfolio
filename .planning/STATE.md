---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: planning
stopped_at: Phase 3 UI-SPEC approved
last_updated: "2026-09-28T07:22:27.260Z"
last_activity: 2026-09-28
progress:
  total_phases: 5
  completed_phases: 2
  total_plans: 11
  completed_plans: 11
  percent: 40
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-09-21)

**Core value:** Un recruteur qui ouvre le site comprend en 3 secondes que Lyna vit l'audiovisuel — la vidéo domine, les médias sont mis en scène — et le site se charge vite malgré des visuels de qualité.
**Current focus:** Phase 3 — hero & qui suis je en scène

## Current Position

Phase: 3
Plan: Not started
Status: Ready to plan
Last activity: 2026-09-28

Progress: [██████████] 100%

## Performance Metrics

**Velocity:**

- Total plans completed: 11
- Average duration: -
- Total execution time: 0 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 4 | - | - |
| 2 | 7 | - | - |

**Recent Trend:**

- Last 5 plans: -
- Trend: -

*Updated after each plan completion*
| Phase 01 P01 | 5 min | 3 tasks | 27 files |
| Phase 01 P02 | 12 min | 2 tasks | 72 files |
| Phase 01 P03 | 5 min | 3 tasks | 60 files |
| Phase 01 P04 | 12 min | 3 tasks | 6 files |
| Phase 02 P01 | 4 min | 3 tasks | 4 files |
| Phase 02 P02 | 10 min | 2 tasks | 18 files |
| Phase 02 P03 | 8 min | 2 tasks | 44 files |
| Phase 02 P04 | 9 min | 3 tasks | 339 files |
| Phase 02 P05 | 12 min | 2 tasks | 45 files |
| Phase 2 P06 | session | 3 tasks | 17 files |
| Phase 02 P07 | 25 min | 2 tasks | 12 files |

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- [Roadmap]: Structure MVP verticale en 5 phases ; nettoyage (1) et poids (2) déployés en production avant toute mise en scène (3-5)
- [Roadmap]: Garde-fou `npm run check` introduit en phase 1 avec une liste d'exceptions explicite pour les vidéos héritées non conformes (hero 10 bits HDR, CV sans faststart), vidée en phase 2
- [Roadmap]: HERO-01 (hero qui joue sur iPhone + pause) livré en phase 2 avec le réencodage, pour un gain visible immédiat
- [Roadmap]: PROJ-06 / PROJ-07 livrés en phase 2 (consommateurs directs du pipeline média) ; les branches `project.id === "…"` restent, refactor `ProjectBlock[]` en v2
- [Roadmap]: `src/data/tools.ts` créé en phase 3 (grille de compétences) et réutilisé en phase 4 (logos par projet)
- [Roadmap]: Ghostscript `gs` pour la charte Tafsut (pas `pdftoppm`, poppler absent)
- [01-01]: check-assets.mjs garde seulement le 1er champ CSV de ffprobe (sortie 'yuv420p10le,')
- [01-01]: plafond 25 Mio et extensions interdites non dérogeables ; dérogations par fichier et par règle (size, pix_fmt, faststart)
- [Phase 01]: 01-02: portrait servi par URL absolue /media/portrait.jpg (constante PORTRAIT), src/assets supprimé
- [Phase 01]: 01-03: @tanstack/react-query retiré malgré resolve.dedupe du wrapper Lovable — build vert (A1 réfutée)
- [Phase 01]: 01-03: knip.json garde @tanstack/router-plugin, tailwindcss, tw-animate-css en ignoreDependencies ; knip lancé via npx knip@6.38.0, jamais installé
- [Phase 01]: 01-04: push de main ne déclenche aucun build Cloudflare (0b1ccd2a toujours dernière 154 s après push)
- [Phase 01]: 01-04: 5 assets non référencés de public/assets en quarantaine media-src/quarantine/ (inventaire REF=62 UNREF=0 MISSING=0)
- [Phase 02]: 02-01: src/server.ts sert les MP4 de /media/video/ et /animate/videos/ en 206 via caches.default ; clé et lookup sans query string, HEAD transmis à env.ASSETS, préfixe /videos/ non routé
- [Phase 02]: 02-01: scrim du bouton hero = rgba(61,31,58,0.85) (8,62:1) au lieu de plum 70 % (1,95:1), aucun nouveau token
- [Phase 02]: 02-01: sharp@0.35.4 approuvé par Lyna le 2026-09-28, dist.integrity inchangée ; plan 02 installe en --save-dev --save-exact
- [Phase 02]: 02-02: SSIM vidéo mesuré avec settb=1/fps,setpts=N (setpts=N/fps/TB décale d'une image sur une référence MKV 1/1000)
- [Phase 02]: 02-02: src/server.ts renvoie à Static Assets les fichiers non-MP4 sous /media/video/ et /animate/videos/ (poster hero en 404 sinon)
- [Phase 02]: 02-03: 4:4:4 des AVIF graphic vérifié par ffprobe pix_fmt (sharp n'expose pas chromaSubsampling pour HEIF)
- [Phase 02]: 02-04: $projectId.tsx non passé à prettier (déjà non conforme au HEAD), diff limité aux lignes migrées
- [Phase 02]: 02-04: « 0 /assets/ dans le HTML » vaut pour les images ; seuls restent les bundles Vite /assets/*.js|css
- [Phase 02]: 02-05: PIPELINE_VERSION 3 ; pages PDF = entrées image (gs -dSAFER 300 dpi, une page par appel), galleries dans l'ordre du manifeste
- [Phase 02]: 02-06: Lyna a validé le 720p CRF 30 sur empattage (approved) ; les 8 clips process sont au même réglage, public/ à 55,9 Mio
- [Phase 02]: 02-06: le budget de 60 Mio se mesure en octets (media, check-assets, du -A) ; du -sm compte la préallocation APFS des MP4 fraîchement écrits
- [Phase 02]: 02-07: le budget total de 60 Mio de dist/client est une règle de check-assets non dérogeable
- [Phase 02]: 02-07: x264 VBV + threads de trame non déterministe ; classes cv et process encodées avec -threads:v 1
- [Phase 02]: 02-07: production phase 2 = version 30a0c129-7de4-448d-b814-4bf98c03b5b4 ; rollback vers 0b1ccd2a-db8e-4136-b65c-55615d6787b4 ; 206 confirmé en prod (A2)

### Pending Todos

None yet.

### Blockers/Concerns

- 2026-09-28 (7e demande, festival suite) — étude de cas : fond vivant rétro (`.cs-bg` : halos rose/bleu/jaune du festival, trame de points, pellicule perforée ≥ 1280 px, grain, vignette), `<ToolChips>` (pictos du registre) dans la fiche Outils et sur toutes les pages projet, curseur « blend » (`data-cursor-fx="blend"`, disque blanc en différence) sur titres de l'étude de cas et de l'accueil, visionneuse (`Lightbox` interne, `data-cursor="Agrandir"`), reflet au survol des carrés. Version prod `70076406-d5c3-46db-9095-ddca9654ffb4` (commit `f13dfae`), 58,2 Mio.
- 2026-09-28 (6e demande, festival) — page `/projects/festival-identite` remplacée par une étude de cas branding (`src/components/FestivalCaseStudy.tsx`, retour anticipé dans `$projectId.tsx` + `head` par projet : titre d'onglet, Cinzel Decorative sur cette page seule) : 7 chapitres (concept, pictogramme, logotype, déclinaisons, couleurs, typographies, supports), textes = charte de Lyna (typos corrigées), 10 recadrages carrés tirés du PDF à 300 dpi (`media-src/festival-identite/crop-*.png`, masters hors git), palette/spécimens en HTML. Planches 09/16/21/23/29 retirées du manifeste (galerie comprise), planche 31 ajoutée. Lyna a changé son Instagram en `lynae.ty` (commit `61f39e4`). Version prod `721b947f-7de1-4736-b24f-4d37c772e6ed`, check 58,2 Mio / 0 exception (marge ≈ 1,8 Mio sous le plafond de 60 Mio : surveiller). La consigne de sa prof (« ne pas mettre toutes les planches, sélectionner et expliquer ») s'applique aux autres pages projet en phase 4.
- 2026-09-28 (5e demande) — cartes projet refaites (`src/components/ProjectCard.tsx`) : miniatures génériques supprimées (`thumbnails/*` retirées du manifeste, de `public/media` et du type `Project`), champ `preview` par projet, mosaïque carrée 1/2/3 tuiles des vraies images, défilement en fondu au survol, images YouTube du stop motion et du clip ajoutées au pipeline (`stop-motion/image-youtube`, `clip/image-youtube`, masters `media-src/`), `Tilt.tsx` supprimé. Version prod `d193fc47-0bbd-4bad-9398-6d08c6b3fa77` (commit `716fb51`), check 57,1 Mio / 0 exception. Couvre par anticipation une partie de la phase 4 (PROJ-01 cartes) ; la page projet garde ses branches en dur.
- 2026-09-28 (4e demande) — nouveau portrait (photo rouge de nuit, master `media-src/home/portrait.png`, id `home/portrait` inchangé, SSIM 0,80 = grain lissé, vérifié visuellement) et contact sur le même écran caméra que le hero (`<ScreenChrome>` partagé : scanlines, grain, cadre, métadonnées de coins ; « SC. 05 · Contact »). Version prod `7a959547-7dc7-4d95-8e57-3f028265bbaa` (commit `fa94898`).
- 2026-09-28 (3e demande de Lyna : « plus vif, moins Claude, curseur, motion design, logos ») — refonte motion design complète livrée hors phase, version prod `6f6debe6-0d4f-4753-ac41-bbcba1038535` (commit `e14cb20`) : palette vive (`--rouge`, `--rose-vif`, `--or-vif`, `--menthe-vive`, `--prune-vive`, `--encre`), police d'affiche `Instrument Serif` (`--font-cine`), hero clair façon Behance (vidéo lavée crème, bezel noir, titre lettre à lettre + swash SVG, tampon, métadonnées de coins), amorce 3-2-1 (`.leader`, CSS pur, une fois par session, `--leader-delay`), curseur personnalisé (`src/components/Cursor.tsx`, libellés `data-cursor`), bandeau défilant (`Marquee.tsx`, mots de Lyna), titres découpés (`SplitText.tsx`), portrait viseur (`Viewfinder.tsx`), cartes 3D (`Tilt.tsx`), boutons magnétiques (`Magnetic.tsx`), registre d'outils `src/data/tools.ts` + `tool-icons.ts` (simple-icons CC0 vendus : figma, davinciresolve, html5, css, javascript, php ; monogrammes pour Adobe/Canva/CapCut/VS Code ; `kind: "file"` prêt pour les fichiers de Lyna), `ToolLogo.tsx` + `Tools.tsx`, nav en `mix-blend-mode: difference`, `lang="fr"`, `og:locale`. Couvre HERO-02/03 et la grille de logos de la phase 3 : restent `copy.ts`, hook reduced-motion, OG image, CV vidéo poster. Validation : captures headless desktop/mobile/reduced-motion, `npm run check` 56,7 Mio / 0 exception.
- 2026-09-28 (suite, demande de Lyna) — DA cinéma livrée hors phase, version prod `bc3e7ba6-5b02-45d5-9727-babb44eaad8f` (commit `99e22e6`) : cadre écran + grain pré-rendu (`scripts/gen-grain.mjs` → `public/media/grain.webp`) + métadonnées de coins (REC + timecode) + cartons de générique remplaçant le sous-titre, View Transitions (`defaultViewTransition: true`), balayage de grille, flash boutons, clap cartes ; frise : objectif à part, engagement associatif anonymisé, `--plum-ink`. Les plans de la phase 3 (HERO-02/03, PERF-01 partiellement) doivent repartir de cet état : copy.ts, viseur portrait, grille de logos, OG image, hook reduced-motion restent à faire.

- 2026-09-28 — Livraison hors roadmap à la demande de Lyna (présentation imminente) : section « Parcours » (frise chronologique animée, 8 étapes, `src/data/timeline.ts` + `src/components/Timeline.tsx`) et CV consultable/téléchargeable (`public/media/cv-lyna-rebahi.pdf`, 430 Ko, aperçu `cv/apercu` via le pipeline). Gardes ajustées : un seul PDF autorisé (cap 3 Mo, non dérogeable). Déployé en production, version `0a1e3a15-9649-4d20-90f1-df56f26ed62d` (commits `a91037c`, `30689dd`). Couvre par anticipation le CV PDF de CONTACT-03 ; la phase 3 doit intégrer la section dans `copy.ts` (textes de la frise) et dans la garde reduced-motion globale.
- Phase 3 : discuss, UI-SPEC, recherche et pattern map faits ; le planificateur a été interrompu par Lyna (7 fichiers `03-0N-PLAN.md` non commités, brouillons à ne pas exécuter) → relancer `/gsd-plan-phase 3` (les plans doivent tenir compte de la nouvelle section Parcours et de la commit `710f219` SKILL_TAGS)

- Entrées attendues de Lyna (non bloquantes, placeholders prévus) : choix du projet pour `affichepromo` / `prévention` (SIZE-09, phase 4), logos Adobe, médias process stop motion / clip Blue, URL LinkedIn, CV PDF, date de disponibilité, textes définitifs
- `affichepromo.png` et `prévention.png` n'existent que dans `src/assets/` : ils doivent être sauvegardés dans `media-src/` avant la suppression du dossier (phase 1)
- `charte_graphique.pdf` (22,5 Mio) ne doit jamais être commité ; `.git` pèse déjà 333 Mo
- Conversion HDR HLG → SDR du hero via le filtre `colorspace` : validation visuelle obligatoire, pas de repli `zscale` dans ce build ffmpeg (research flag phase 2)
- `wrangler deploy --dry-run` applique le plafond de 25 Mio (vérifié en phase 1) mais seulement après `vite build` ; `scripts/check-assets.mjs` reste le garde-fou principal (seuil 20 Mio, pix_fmt, faststart)
- Production `lynarebahi.fr` déployée hors git le 2026-09-01 (version `0b1ccd2a-db8e-4136-b65c-55615d6787b4`, WebP + hero 10,8 Mo, mais PDF et `.fla` publics) : aucun déploiement réel avant la phase 2 ; rollback = `wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4`
- Gestionnaire de paquets : npm (bun non installé) ; scripts en `.mjs`
- Rendu de l'export Adobe Animate sur iOS réel non vérifié (phase 4 / QA phase 5)
- Validation visuelle humaine de la phase 1 EN ATTENTE (Task 2 de 01-04 reportée par l'utilisatrice) : accueil sans pétales/curseur rose/badge/ornements, 0 × 404 sur accueil + 9 pages, chaîne Animate 1_MOHAMED→3_ALBERTIN complète sur /projects/sae-2 — preuves automatiques seulement (curl 67 URL, 0 × 404)
- 02-07 Task 3 : UAT appareils réels (iPhone Safari + économie d'énergie, Android, VoiceOver, CV, sae-2, Tafsut, A/B 100 %) en attente ; HERO-01 reste Pending jusqu'au test iPhone

## Deferred Items

Items acknowledged and carried forward from previous milestone close:

| Category | Item | Status | Deferred At |
|----------|------|--------|-------------|
| human-verify | Phase 1 : validation visuelle de la version lite + chaîne Animate 6 scènes (01-04 Task 2, checklist dans 01-04-SUMMARY.md) | PENDING | 2026-09-27 |

## Session Continuity

Last session: 2026-09-28T07:22:27.254Z
Stopped at: Phase 3 UI-SPEC approved
Resume file: .planning/phases/03-hero-qui-suis-je-en-sc-ne/03-UI-SPEC.md

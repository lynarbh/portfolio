---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: executing
stopped_at: Completed 02-03-PLAN.md
last_updated: "2026-09-27T23:52:19.255Z"
last_activity: 2026-09-28 -- Plan 02-03 complete (home images via <Picture>)
progress:
  total_phases: 5
  completed_phases: 1
  total_plans: 11
  completed_plans: 7
  percent: 64
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-09-21)

**Core value:** Un recruteur qui ouvre le site comprend en 3 secondes que Lyna vit l'audiovisuel — la vidéo domine, les médias sont mis en scène — et le site se charge vite malgré des visuels de qualité.
**Current focus:** Phase 2 — Médias légers & hero qui joue partout

## Current Position

Phase: 2 (Médias légers & hero qui joue partout) — EXECUTING
Plan: 4 of 7
Status: Ready to execute
Last activity: 2026-09-28 -- Plan 02-03 complete (home images via <Picture>)

Progress: [██████░░░░] 64%

## Performance Metrics

**Velocity:**

- Total plans completed: 4
- Average duration: -
- Total execution time: 0 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 4 | - | - |

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

### Pending Todos

None yet.

### Blockers/Concerns

- Entrées attendues de Lyna (non bloquantes, placeholders prévus) : choix du projet pour `affichepromo` / `prévention` (SIZE-09, phase 4), logos Adobe, médias process stop motion / clip Blue, URL LinkedIn, CV PDF, date de disponibilité, textes définitifs
- `affichepromo.png` et `prévention.png` n'existent que dans `src/assets/` : ils doivent être sauvegardés dans `media-src/` avant la suppression du dossier (phase 1)
- `charte_graphique.pdf` (22,5 Mio) ne doit jamais être commité ; `.git` pèse déjà 333 Mo
- Conversion HDR HLG → SDR du hero via le filtre `colorspace` : validation visuelle obligatoire, pas de repli `zscale` dans ce build ffmpeg (research flag phase 2)
- `wrangler deploy --dry-run` applique le plafond de 25 Mio (vérifié en phase 1) mais seulement après `vite build` ; `scripts/check-assets.mjs` reste le garde-fou principal (seuil 20 Mio, pix_fmt, faststart)
- Production `lynarebahi.fr` déployée hors git le 2026-09-01 (version `0b1ccd2a-db8e-4136-b65c-55615d6787b4`, WebP + hero 10,8 Mo, mais PDF et `.fla` publics) : aucun déploiement réel avant la phase 2 ; rollback = `wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4`
- Gestionnaire de paquets : npm (bun non installé) ; scripts en `.mjs`
- Rendu de l'export Adobe Animate sur iOS réel non vérifié (phase 4 / QA phase 5)
- Validation visuelle humaine de la phase 1 EN ATTENTE (Task 2 de 01-04 reportée par l'utilisatrice) : accueil sans pétales/curseur rose/badge/ornements, 0 × 404 sur accueil + 9 pages, chaîne Animate 1_MOHAMED→3_ALBERTIN complète sur /projects/sae-2 — preuves automatiques seulement (curl 67 URL, 0 × 404)

## Deferred Items

Items acknowledged and carried forward from previous milestone close:

| Category | Item | Status | Deferred At |
|----------|------|--------|-------------|
| human-verify | Phase 1 : validation visuelle de la version lite + chaîne Animate 6 scènes (01-04 Task 2, checklist dans 01-04-SUMMARY.md) | PENDING | 2026-09-27 |

## Session Continuity

Last session: 2026-09-27T23:52:06.425Z
Stopped at: Completed 02-03-PLAN.md
Resume file: None

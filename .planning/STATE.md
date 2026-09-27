---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: executing
stopped_at: Roadmap et STATE initialisés, en attente d'approbation
last_updated: "2026-09-27T20:22:06.742Z"
last_activity: 2026-09-27
progress:
  total_phases: 5
  completed_phases: 0
  total_plans: 4
  completed_plans: 2
  percent: 0
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-09-21)

**Core value:** Un recruteur qui ouvre le site comprend en 3 secondes que Lyna vit l'audiovisuel — la vidéo domine, les médias sont mis en scène — et le site se charge vite malgré des visuels de qualité.
**Current focus:** Phase 1 — Nettoyage & filet de sécurité

## Current Position

Phase: 1 (Nettoyage & filet de sécurité) — EXECUTING
Plan: 3 of 4
Status: Ready to execute
Last activity: 2026-09-27

Progress: [█████░░░░░] 50%

## Performance Metrics

**Velocity:**

- Total plans completed: 0
- Average duration: -
- Total execution time: 0 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| - | - | - | - |

**Recent Trend:**

- Last 5 plans: -
- Trend: -

*Updated after each plan completion*
| Phase 01 P01 | 5 min | 3 tasks | 27 files |
| Phase 01 P02 | 12 min | 2 tasks | 72 files |

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

## Deferred Items

Items acknowledged and carried forward from previous milestone close:

| Category | Item | Status | Deferred At |
|----------|------|--------|-------------|
| *(none)* | | | |

## Session Continuity

Last session: 2026-09-27T20:22:01.554Z
Stopped at: Roadmap et STATE initialisés, en attente d'approbation
Resume file: None

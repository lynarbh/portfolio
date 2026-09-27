---
status: partial
phase: 01-nettoyage-filet-de-s-curit
source: [01-VERIFICATION.md]
started: 2026-09-27T21:28:28Z
updated: 2026-09-27T21:28:28Z
---

## Current Test

[awaiting human testing — Lyna a indiqué « Je ne peux pas tester maintenant » ; la phase est clôturée sur preuves automatisées, ces contrôles restent dus]

## Tests

### 1. Absence visuelle des effets décoratifs (accueil + 9 pages projet)
Sous `npx vite build && npx wrangler dev --port 8787`, Chrome DevTools, cache désactivé : ouvrir la page d'accueil et les 9 pages projet.
expected: Aucune pétale tombante, pas de curseur rose personnalisé, pas de badge « 20 ans / Designer Multimédia », pas d'ornements de coin sur « Qui suis-je ? », portrait fixe sans halo ni flottement ; curseur système normal.
result: [pending]

### 2. Zéro 404 dans l'onglet Réseau + chaîne SkøllRub des 6 scènes jusqu'au bout
Onglet Réseau (cache désactivé) sur l'accueil et les 9 pages projet ; puis dans /projects/sae-2, parcourir l'iframe 1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN (vidéos concassage, empattage, ebullition, filtration, whirpool, refroidissement, fermentation, miseenbouteile).
expected: Zéro requête 404 ; l'animation CreateJS avance scène par scène jusqu'à 3_ALBERTIN sans blocage ni asset manquant, chaque vidéo joue.
result: [pending]

## Summary

total: 2
passed: 0
issues: 0
pending: 2
skipped: 0
blocked: 0

## Gaps

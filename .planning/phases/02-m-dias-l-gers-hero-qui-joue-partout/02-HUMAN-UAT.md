---
status: partial
phase: 02-m-dias-l-gers-hero-qui-joue-partout
source: [02-VERIFICATION.md]
started: 2026-09-28T06:28:15Z
updated: 2026-09-28T06:28:15Z
---

## Current Test

[awaiting human testing — Lyna a répondu « defer » au checkpoint du plan 02-07 (2026-09-28) ; la phase est clôturée sur preuves automatisées, ces contrôles restent dus. Production : version `9b787c88-e735-4fc9-84dc-2b83f9b4faa2` ; rollback `npx wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4`.]

## Tests

### 1. Hero sur iPhone Safari (autoplay, couleurs, mode économie d'énergie)
Ouvrir https://lynarebahi.fr ; puis recharger en mode économie d'énergie.
expected: Lecture automatique hors mode éco, couleurs non délavées, poster identique à la première image ; en mode éco, poster + bouton lecture, un tap lance la vidéo.
result: [pending]

### 2. Android Chrome et desktop : autoplay + bouton pause au clavier
Tab jusqu'au bouton en bas à droite, Espace.
expected: Lecture auto ; anneau de focus sakura visible ; pause/lecture au clavier.
result: [pending]

### 3. Lecteur d'écran (VoiceOver / TalkBack)
expected: Bouton annoncé « Mettre en pause la vidéo », bouton bascule avec état pressé/non pressé.
result: [pending]

### 4. Vidéo CV + chaîne SkøllRub des 6 scènes (couvre aussi le contrôle différé de la phase 1)
Section « Qui suis-je ? » (lecture, avance rapide) puis /projects/sae-2 : 1_MOHAMED → 1_LYNA → 2_IMAD → 2_CLEMENT → 2_SOPHIA → 3_ALBERTIN.
expected: Lecture et seek fluides ; les 8 vidéos process (720p) jouent avec le son ; chaîne complète ; onglet Réseau sans 404.
result: [pending]

### 5. Planches Tafsut + comparaison A/B à 100 % (couvre aussi l'absence des effets déco de la phase 1)
/projects/festival-identite ; sur ordinateur, comparer affiche prévention, freya1, planche 16, clip4, moodboard avec les masters de media-src/. Vérifier aussi : aucune pétale, curseur rose, badge « 20 ans », ornement de coin sur l'accueil.
expected: 10 planches nettes dans l'ordre ; aucune bavure de chroma ni dégradation visible ; aucun effet déco.
result: [pending]

## Summary

total: 5
passed: 0
issues: 0
pending: 5
skipped: 0
blocked: 0

## Gaps

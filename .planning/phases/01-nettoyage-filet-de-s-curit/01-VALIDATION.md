---
phase: 1
slug: nettoyage-filet-de-s-curit
status: planned
nyquist_compliant: true
wave_0_complete: false
created: 2026-09-27
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | none — no unit test framework in this repo (out of scope); verification is build/typecheck + `scripts/check-assets.mjs` + wrangler dry-run + smoke via `wrangler dev` |
| **Config file** | `package.json` scripts (`check`) — Wave 0 creates `scripts/check-assets.mjs` + `scripts/check-assets.exceptions.json` |
| **Quick run command** | `npx tsc --noEmit && npx vite build && node scripts/check-assets.mjs` |
| **Full suite command** | `npm run check` (adds `wrangler deploy --dry-run`) |
| **Estimated runtime** | ~10-15 seconds (check complet) |

---

## Sampling Rate

- **After every task commit:** Run `npx tsc --noEmit && npx vite build && node scripts/check-assets.mjs`
- **After every plan wave:** Run `npm run check`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** ~15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | CLEAN-09 | T-1-02, T-1-03 | media-src/ ignoré avant toute copie ; originaux copiés et vérifiés (diff -rq / shasum) avant toute suppression ; PDF hors public/ | fs + git | `git check-ignore -q media-src/x && test -f media-src/charte_graphique.pdf && test ! -e public/assets/charte_graphique.pdf && test -z "$(diff -rq src/assets media-src/src/assets)" && test -z "$(git status --porcelain media-src)"` | ✅ | ⬜ pending |
| 1-01-02 | 01 | 1 | SIZE-07, CLEAN-05 | T-1-01, T-1-05 | .fla/.ai/.tmp/.pdf interdits et non dérogeables ; 25 Mio non dérogeable ; 3 exceptions explicites | script | `rm -rf dist && npm run check` (exit 0, 3 lignes EXCEPTION, 0 FAIL) ; `ls public/animate/*.fla public/animate/*.mp4 public/animate/3_CLEMENT.* 2>/dev/null \| wc -l` = 0 | ❌ W0 (créé par cette tâche) | ⬜ pending |
| 1-01-03 | 01 | 1 | SIZE-07, CLEAN-05 | T-1-04, T-1-05 | le garde-fou échoue sur > 20 Mio, 10 bits, non-faststart, extension interdite ; toutes les URL des 6 scènes → 200 | script + http | fixtures `public/zz-*` une par une → `npm run check` exit ≠ 0 ; puis `rm -f public/zz-* && npm run check` exit 0 ; curl sweep sous `npx wrangler dev --port 8787` | ✅ (après 1-01-02) | ⬜ pending |
| 1-02-01 | 02 | 2 | CLEAN-02, PERF-02, CLEAN-01 | T-1-10, T-1-11 | aucun listener mousemove global ; aucun décor | grep + build | `test -z "$(grep -rnE 'Petals\|CornerOrnament\|CustomCursor\|ProjectModal\|PORTRAIT_EFFECT_SETTINGS\|function Skills\|floating-badge\|sakura-cursor\|cursor-dot\|cursor: url\|mousemove' src)" && rm -rf dist && npm run check` | ✅ | ⬜ pending |
| 1-02-02 | 02 | 2 | CLEAN-04, CLEAN-07 | T-1-07, T-1-08, T-1-09 | src/assets supprimé seulement après re-vérification de la sauvegarde ; 0 × 404 | fs + grep + http | `test ! -d src/assets && grep -q '"/media/portrait.jpg"' src/routes/index.tsx && test -z "$(grep -rnE '@/assets\|extraitpubSAE1\|festival-flyer\|festival-goodies' src)" && rm -rf dist && npm run check` + curl sweep accueil + 9 pages | ✅ | ⬜ pending |
| 1-03-01 | 03 | 3 | CLEAN-03 | T-1-SC | knip vérifié par un humain avant exécution npx | checkpoint (blocking-human) | `npm view knip@6.38.0 version repository.url --json` | n/a | ⬜ pending |
| 1-03-02 | 03 | 3 | CLEAN-01, CLEAN-03 | T-1-12, T-1-13, T-1-15 | dépendances inutilisées retirées ; lockfile modifié par npm seulement | fs + tool | `test ! -d src/components/ui && test -z "$(grep -E '\"(zod\|react-hook-form\|@tanstack/react-query\|date-fns\|@radix-ui/[^\"]+)\"' package.json)" && npx knip@6.38.0 --include files,dependencies && rm -rf dist && npm run check` | ❌ W0 (knip.json créé par cette tâche) | ⬜ pending |
| 1-03-03 | 03 | 3 | CLEAN-08 | T-1-14 | Cloudflare seule cible ; npm seul gestionnaire | fs + lint | `test ! -e vercel.json && test ! -e server.js && test ! -e bun.lockb && test ! -e bunfig.toml && test -e package-lock.json && ! grep -q '"start"' package.json && npx eslint . --rule "prettier/prettier: off" && npm run check` | ✅ | ⬜ pending |
| 1-04-01 | 04 | 4 | CLEAN-06 | T-1-16 | quarantaine réversible après inventaire décodant ; MISSING=0 | script | `node scripts/inventory-assets.mjs` (dernière ligne `UNREF=0 MISSING=0`, exit 0) && `rm -rf dist && npm run check` | ❌ W0 (créé par cette tâche) | ⬜ pending |
| 1-04-02 | 04 | 4 | CLEAN-05, CLEAN-02, CLEAN-07 | T-1-16 | chaîne 6 scènes + décor absent + 0 × 404 validés par un humain | manual (checkpoint) | `curl -s -o /dev/null -w '%{http_code}' localhost:8787/` = 200 (serveur prêt) | n/a | ⬜ pending |
| 1-04-03 | 04 | 4 | CLEAN-09, SIZE-07 | T-1-17, T-1-18 | aucun blob > 1 Mio ajouté ; PDF jamais commité ; pas de déploiement déclenché par le push | git + script | `rm -rf dist && npm run check` (3 EXCEPTION) ; `git log --all --name-only --format= \| grep -c charte_graphique.pdf` = 0 ; `git diff 0226355 HEAD --stat -- src/routeTree.gen.ts vite.config.ts` vide ; `npx wrangler deployments list` → 0b1ccd2a | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `scripts/check-assets.mjs` + `scripts/check-assets.exceptions.json` + script `check` dans `package.json` — créés par 1-01-02 (avant toute tâche qui les utilise)
- [ ] `.gitignore` += `media-src/` — 1-01-01 (premier commit de la phase)
- [ ] `knip.json` — 1-03-02
- [ ] `scripts/inventory-assets.mjs` — 1-04-01

*Aucun framework de test à installer (hors périmètre) : `npm run check` + balayages curl sous `wrangler dev` + checkpoint humain.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Chaîne des 6 scènes Animate jusqu'à 3_ALBERTIN | CLEAN-05 | animation canvas CreateJS + `window.open` minuté, pas de navigateur headless dans le projet | 1-04-02 : `npx wrangler dev --port 8787`, ouvrir /projects/sae-2, suivre l'iframe 1_MOHAMED → … → 3_ALBERTIN ; 307 sur `.html` = normal |
| Absence visuelle du décor (pétales, curseur rose, badge, ornements, halo/flottement du portrait) | CLEAN-02 | rendu visuel (la preuve automatique est le grep sur src/) | 1-04-02 : accueil sous wrangler dev, DevTools ouverts |
| Onglet Réseau sans 404 sur accueil + 9 pages | CLEAN-07 | inclut les requêtes déclenchées au runtime (JS client, iframe) ; le balayage curl ne couvre que le HTML SSR | 1-04-02 : DevTools Réseau, Disable cache, filtre 404 |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [ ] Feedback latency < 1s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** {pending / approved YYYY-MM-DD}

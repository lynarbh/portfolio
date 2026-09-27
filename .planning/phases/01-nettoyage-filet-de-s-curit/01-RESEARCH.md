# Phase 1: Nettoyage & filet de sécurité - Research

**Researched:** 2026-09-27
**Domain:** Dead-code / asset cleanup of a TanStack Start + Cloudflare Workers site, plus a pre-deploy asset guard
**Confidence:** HIGH (almost every claim below was measured on this machine and repo; the exceptions are tagged)

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Inventaire & quarantaine des assets
- Un fichier jugé non référencé est déplacé dans `media-src/quarantine/` (gitignoré), jamais supprimé en phase 1 — réversible ; la phase 4 pourra y repêcher les étiquettes SkøllRub, `palette de couleurs.png`, etc.
- « Référencé » = trouvé par un scan de `src/**` + `public/animate/*.{html,js}` avec décodage des URL (`%20`) et comparaison sur des noms normalisés NFC/NFD ; tout doute = on garde
- `public/logo.png` et `public/favicon.ico` (référencés dans `__root.tsx`) sont conservés tels quels, réencodage en phase 2
- Le portrait (seul import Vite de `src/assets`, `index.tsx:8`) est copié brut vers `public/media/portrait.jpg` et référencé par URL absolue ; réencodage en phase 2 ; `src/assets/` est ensuite supprimé
- `public/animate/` : suppression de `.fla`, `.ai`, `~ai-*.tmp`, `RECOVER_*`, `illustrations/`, `3_CLEMENT.*` et des 8 vidéos à la racine ; `images/`, `imagesImad/`, `imagesframe2/`, `components/`, `videos/` intacts ; la chaîne des 6 scènes est parcourue à la main après nettoyage
- Tous les originaux (dont `affichepromo.png`, `prévention.png`, `charte_graphique.pdf`) sont copiés dans `media-src/` gitignoré AVANT toute suppression ; vérification de la copie (taille/hash) avant `rm`

#### Garde-fou `bun run check`
- `scripts/check-assets.ts` exécuté par bun (TypeScript natif, aucune dépendance ajoutée)
- Échec dur au-delà de 20 Mio par fichier destiné à `dist/` ; avertissement dès 10 Mio
- Contrôle ffprobe (pix_fmt `yuv420p`, `moov` avant `mdat`) sur chaque `.mp4` ; les vidéos héritées non conformes (hero 10 bits/HDR, CV sans faststart) sont listées dans `scripts/check-assets.exceptions.json`, affichées à chaque run, à vider en phase 2 ; si ffprobe est absent, avertissement sans échec
- `package.json` : `"check": "tsc --noEmit && vite build && bun scripts/check-assets.ts && wrangler deploy --dry-run"`
- Le script doit être prouvé : un fichier factice > 20 Mio dans `public/` doit faire échouer `check`, puis être retiré

#### Déploiement & dépôt
- Déploiement Cloudflare réel via `wrangler deploy` en fin de phase après `check` vert (compte connecté : lyna.rebahi@gmail.com)
- Push de `main` vers `origin` (github.com/lynarbh/portfolio) après chaque phase vérifiée
- Élagage : `bunx knip` (sans installer) avec `tailwindcss` et `tw-animate-css` ignorés ; ordre imposé : fichiers `src/components/ui/*` → paquets → lint ; build vert entre chaque étape ; ne jamais éditer `vite.config.ts` en réaction à une erreur (wrapper Lovable)
- La modification non commitée de `src/data/projects.ts` (travail en cours de Lyna) est laissée telle quelle et incluse dans le premier commit de la phase
- `vercel.json`, `server.js`, `package-lock.json` supprimés ; bun reste le gestionnaire
- Branching : aucun (commits sur `main`, config `branching_strategy: none`)

### Claude's Discretion
- Structure exacte de `scripts/check-assets.ts` et format de sortie
- Ordre des commits (un commit par sous-objectif, atomique, build vert)
- Détails de la config knip

### Deferred Ideas (OUT OF SCOPE)
- Réencodage des médias, `public/_headers`, manifeste — phase 2
- Remplacement de `logo.png` par un SVG — phase 2 ou plus tard
- Activation de `no-unused-vars` dans ESLint — hors périmètre du milestone
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CLEAN-01 | Dead code removed (`ProjectModal.tsx`, empty `Skills()`, `Petals.tsx`, unused `src/components/ui/` kit); `tsc --noEmit && vite build` passes | §Dead code map: exact file:line list. knip confirms all 46 `ui/*.tsx` + `src/lib/utils.ts` + `src/hooks/use-mobile.tsx` are unused. `tsc` passes today (exit 0, 1.7 s) |
| CLEAN-02 | Decorative effects removed (petals, pink cursor, "20 ans" badge, corner ornaments, portrait particles) | §Dead code map + §CSS rules that become dead. The particle system (`index.tsx:26-197`) is never instantiated, so removing it is pure dead-code removal with no visual change |
| CLEAN-03 | Unused deps removed after knip; form validation stays native HTML | §knip results: 43 packages flagged; `@tanstack/react-query` is NOT flagged by knip (only listed in Lovable's `resolve.dedupe`) but has zero imports |
| CLEAN-04 | `src/assets/` deleted after moving `portrait.jpg`; one canonical media location `public/media/**` | §src/assets: 63/65 files are byte-identical copies of `public/assets/*`; only `affichepromo.png` and `prévention.png` exist only there. `git mv public/assets/portrait.jpg public/media/portrait.jpg` reuses the existing blob (zero history growth) |
| CLEAN-05 | `public/animate/` cleaned; 6-scene chain still plays | §Animate dependency map: complete per-scene list; keep-list confirmed complete. 4 extra orphans inside `images/` + `fond.jpeg` found (not in CONTEXT delete-list) |
| CLEAN-06 | Unreferenced `public/assets/` files removed after decode-aware inventory + quarantine | §Asset inventory: 7 candidates (38.0 MiB, incl. the PDF). `palette de couleurs.png` IS referenced via `%20` and served (200) by workerd |
| CLEAN-07 | Broken references fixed (`extraitpubSAE1.mp4`, `festival-flyer.jpg`, `festival-goodies.jpg`) | §Broken refs: exactly these 3 URLs are missing (reverse scan). Fix: delete `$projectId.tsx:581-595`; set `media: []` in `projects.ts:54` |
| CLEAN-08 | Cloudflare only: `vercel.json`, `server.js`, `package-lock.json` deleted; bun stays | §Environment: **bun is NOT installed on this machine**, and `node_modules/` was installed by npm from `package-lock.json`. Wave 0 must install bun and reinstall from `bun.lockb` before deleting `package-lock.json` |
| CLEAN-09 | PDF never committed; all originals backed up to gitignored `media-src/` | §Git hygiene: `media-src/` is NOT yet gitignored (verified `git check-ignore`). PDF already ignored. All binaries are already in history (pack = 333 MiB), so the phase only removes from the tree |
| SIZE-07 | `bun run check` fails on >20 MiB file or non-yuv420p/non-faststart video; dry-run passes | §check-assets design. **Three files in the keep-set already exceed 20 MiB or break a rule**: the exceptions file must waive `size` too, not only `pix_fmt`/`faststart`. `wrangler deploy --dry-run` verified to enforce the 25 MiB ceiling itself (exit 1 on a 26 MiB file) |
| PERF-02 | No global `mousemove` listener or cursor re-render | Single listener at `index.tsx:620` inside `CustomCursor()` (`index.tsx:613-627`), mounted at `index.tsx:633`. No other `addEventListener("mousemove")` in `src/` |
</phase_requirements>

## Summary

The repo is in better shape for cleanup than the roadmap assumes: `tsc --noEmit` already passes (exit 0), `vite build` passes in ~4 s, and `wrangler deploy --dry-run` passes in ~1.5 s after a build. Nothing outside `src/components/ui/` imports the ui kit, `src/lib/utils.ts` or `src/hooks/use-mobile.tsx`, so all three can go in one step. The "portrait particles" (`PORTRAIT_EFFECT_SETTINGS`, `Point`, `Particle`, `ParticlePool`, `createParticleImage`, `index.tsx:26-197`) are never instantiated. No canvas is mounted, so deleting them changes nothing visually. The only live `mousemove` listener is in `CustomCursor()`.

Three environment facts change the plan. (1) **Bun is not installed** on this machine (`which bun`, `~/.bun`, Homebrew: all absent), and `node_modules/` was installed by npm from `package-lock.json`. The versions differ from `bun.lockb`: npm has `@cloudflare/vite-plugin` 1.32.2 and wrangler 4.82.2, while bun.lockb pins 1.30.0 and 4.76.0. Wave 0 must `brew install bun`, reinstall from `bun.lockb`, and prove build + dry-run are green before `package-lock.json` is deleted. (2) **The guard would fail on the files we are told to keep**: `videos/56_Lyna_REBAHI_CVvideo.mp4` is 23.10 MiB and has no faststart, `animate/videos/empattage.mp4` is 22.37 MiB, and `videos/hero.mp4` is `yuv420p10le` (HLG). The exceptions file must support waiving the 20 MiB `size` rule per file. The 25 MiB hard ceiling must never be waivable, and `wrangler deploy --dry-run` enforces 25 MiB on its own anyway (verified). (3) **Production is not built from this repo.** The live site `lynarebahi.fr` (deployed 2026-09-01, version `0b1ccd2a-db8e-4136-b65c-55615d6787b4`) serves `.webp` images (`portrait-*.webp`, `hero.webp`, `logo.webp`), a 10.8 MB `hero.mp4`, the old `page-web-perso` project, and publicly serves the 22.5 MiB PDF and every `.fla`. No commit on any branch contains `.webp` (`origin/main` = `d5421f4`, 2026-06-14). A mirror exists only at `~/Desktop/site-backup/lynarebahi.fr/`. Redeploying at the end of Phase 1 will replace a lighter webp build with the PNG build from git until Phase 2 re-encodes. That needs an explicit Lyna checkpoint, plus the rollback version ID written down.

**Primary recommendation:** Start with a Wave 0 that installs bun, reinstalls from `bun.lockb`, gitignores `media-src/` and backs everything up with hash verification. Then clean in small green commits: code → ui/deps → assets → animate → deploy files. Build `check-assets.ts` with per-file, per-rule waivers and a hard 25 MiB ceiling, and prove it with three fixtures (>20 MiB, 10-bit, non-faststart). Deploy only after Lyna confirms that replacing the 2026-09-01 webp production is acceptable.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Dead-code / decorative removal | Browser / Client (React components, `styles.css`) | Frontend Server (SSR renders same components) | All effects are client-side React/CSS; SSR output shrinks too |
| Media location (`public/media`, `public/assets`, `public/animate`) | CDN / Static (Workers static assets, `dist/client`) | — | `public/` is copied verbatim to `dist/client`, uploaded as Workers assets (`assets.directory: "../client"`) |
| Asset guard (`check-assets.ts`) | Build tooling (local, pre-deploy) | CDN / Static (dry-run validates asset manifest) | Runs on `dist/client` after `vite build`; wrangler dry-run is the second line of defence |
| Originals backup / quarantine | Local filesystem (`media-src/`, gitignored) | — | Never enters git or `dist/` |
| Deploy target | Cloudflare Workers (worker `tanstack-start-app`) | — | Vercel/Node paths (`vercel.json`, `server.js`) removed |

## Standard Stack

### Core (already present, nothing new to install in `package.json`)
| Tool | Version (verified) | Purpose | Why Standard |
|------|---------|---------|--------------|
| TypeScript `tsc` | 5.8.x (`node_modules/.bin/tsc`) | `tsc --noEmit` typecheck (Vite does not typecheck) | Already a devDep; passes today |
| Vite | 7.3.2 (resolved) | `vite build` → `dist/client` + `dist/server` | Via Lovable wrapper; do not touch `vite.config.ts` |
| wrangler | 4.82.2 in node_modules (transitive via `@cloudflare/vite-plugin`); bun.lockb pins 4.76.0 | `deploy --dry-run`, `deploy`, `rollback` | Only Cloudflare CLI; dry-run enforces 25 MiB [VERIFIED: local run] |
| ffprobe | 8.1.1 (`/opt/homebrew/bin/ffprobe`) | `pix_fmt` check | Only practical way to read pix_fmt |
| bun | **not installed**; Homebrew stable = 1.4.2 | Package manager + runner for `check-assets.ts` | Locked by project constraints |

### Supporting (ephemeral, not added to package.json)
| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| knip | 6.38.0 (npm latest, modified 2026-09-23) | Unused files/deps report | Run once via `bunx knip` (or `npx knip@6.38.0` before bun exists); no `--fix` |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| ffprobe for faststart | Pure-TS top-level MP4 box walk (`ftyp,moov,…` vs `ftyp,…,mdat,moov`) | **Use the box walk for faststart**: no dependency, works when ffprobe is missing, verified on all 10 repo videos and 3 fixtures. Keep ffprobe only for `pix_fmt` |
| `Bun.spawnSync` | `node:child_process.spawnSync` | node API runs under both bun and node 24 (useful since bun is missing today); `result.error.code === "ENOENT"` → graceful ffprobe skip |

**Installation (Wave 0, machine-level, not a package.json change):**
```bash
brew install bun            # Homebrew formula "bun", stable 1.4.2 [VERIFIED: brew info bun]
```

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| knip (ephemeral, `bunx`) | npm | multi-year, 6.38.0 modified 2026-09-23 | high | github.com/webpro-nl/knip | unavailable | Approved: run only, not installed. No postinstall script (`npm view knip scripts.postinstall` empty) [ASSUMED per protocol] |
| wrangler (only if not linked by bun, see Pitfall 4) | npm | multi-year, latest 4.142.0 | very high | github.com/cloudflare/workers-sdk | unavailable | Approved; no postinstall [ASSUMED per protocol] |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** none
*slopcheck could not be installed (pip install failed silently). Both entries are tagged [ASSUMED] per protocol, even though they are first-party tools the project already uses. This phase adds no new runtime dependency; it only removes 43+ packages.*

## Architecture Patterns

### System Architecture Diagram

```
 edit src/ + public/                     media-src/ (gitignored)
        │                                   ▲  backups + quarantine/
        ▼                                   │  (sha-verified copy BEFORE rm)
  bun run check ─────────────────────────────────────────────────────────┐
   1. tsc --noEmit ──fail──► exit≠0                                       │
   2. vite build ──► dist/client/  (public/* copied verbatim + hashed      │
                     │             bundles in dist/client/assets/)        │
                     └► dist/server/ (worker bundle, wrangler.json →      │
                                      assets.directory "../client")        │
                     └► .wrangler/deploy/config.json (redirect)           │
   3. bun scripts/check-assets.ts                                         │
        walk dist/client ─► per file: size>25MiB? FAIL (never waivable)   │
                         ─► size>20MiB? FAIL unless waived("size")        │
                         ─► size>10MiB? WARN                              │
                         ─► ext in {.fla,.ai,.tmp,.pdf,.psd}? FAIL        │
                         ─► .mp4? box-walk faststart / ffprobe pix_fmt    │
                              (ffprobe missing → WARN, skip pix_fmt)      │
        read scripts/check-assets.exceptions.json ─► print every waiver,  │
                         warn on stale waivers ─► exit 0 / 1              │
   4. wrangler deploy --dry-run ─► reads redirect config ─► validates     │
        143 assets (fails itself on >25 MiB) ─► exit 0 / 1 ◄──────────────┘
        │ green
        ▼
  [checkpoint: Lyna OK to replace 2026-09-01 webp prod]
        ▼
  wrangler deploy ─► worker tanstack-start-app ─► lynarebahi.fr
        (rollback: wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4)
```

### Recommended Project Structure (end of phase)
```
public/
├── animate/          # 6 scene .html/.js + images/ imagesImad/ imagesframe2/ components/ videos/
├── assets/           # referenced images only (57 files after moves)
├── media/portrait.jpg
├── videos/           # hero.mp4, 56_Lyna_REBAHI_CVvideo.mp4
├── favicon.ico
└── logo.png
scripts/
├── check-assets.ts
└── check-assets.exceptions.json
media-src/            # gitignored: originals, PDF, quarantine/, prod mirror copy
src/
├── components/Reveal.tsx
├── data/projects.ts
├── routes/ (__root.tsx, index.tsx, projects/$projectId.tsx)   # no file created/removed/renamed
├── router.tsx, routeTree.gen.ts, styles.css
```

### Pattern 1: Backup-then-remove with hash verification
**What:** Copy to `media-src/<mirror path>`, compare `shasum -a 256` of source and copy, and only then run `git rm` / `mv` to quarantine.
**When:** Every removal of a binary (CLEAN-04/05/06/09).
```bash
# Source: pattern derived from CONTEXT decision; commands verified on macOS
backup() {  # $1 = repo-relative path
  mkdir -p "media-src/$(dirname "$1")"
  cp -p "$1" "media-src/$1"
  [ "$(shasum -a 256 < "$1")" = "$(shasum -a 256 < "media-src/$1")" ] || { echo "HASH MISMATCH $1"; return 1; }
}
```
Use `rsync -a public/animate/ media-src/public/animate/` for whole directories, then `diff -rq`.

### Pattern 2: Quarantine = `mv` into `media-src/quarantine/` keeping the relative path
`mv "public/assets/mockup.jpg" "media-src/quarantine/public/assets/mockup.jpg"`, then `git rm --cached` (or `git add -A public/assets`). The file stays recoverable on disk. Git history keeps it in any case.

### Anti-Patterns to Avoid
- **Deleting `public/animate/videos/`, thinking it is the duplicate.** The JS loads `videos/<name>.mp4`; the root-level `*.mp4` are the dead copies (all 8 pairs byte-identical, verified with `cmp`).
- **Grepping `/assets/portrait.jpg` to decide whether the public copy is used.** It matches `@/assets/portrait.jpg` (the Vite import of `src/assets`). My scan flagged it REF for that reason, which is a false positive.
- **Editing `vite.config.ts`** after a build error from a removed package. Undo the package removal instead (locked decision).
- **Running `eslint .`** It lints the 1 MB minified `public/animate/*.js` through prettier and did not finish in 5 min. Add `public`, `media-src` to the ESLint ignores and to `.prettierignore`.
- **Using `vite preview` for smoke tests.** It fails with `ERR_MODULE_NOT_FOUND dist/server/server.js` (the Cloudflare plugin is build-only in the Lovable wrapper). Use `wrangler dev` (serves the built worker + assets in workerd) or `vite dev`.

## Dead code map (exact removals)

### `src/routes/index.tsx` (642 lines)
| Lines | What | Action |
|------|------|--------|
| 4 | `import { Petals }` | remove |
| 6 | `import { CornerOrnament }` | remove |
| 7 | `import { ProjectModal }` (imported, never rendered) | remove |
| 8 | `import portrait from "@/assets/portrait.jpg"` | replace usage at 316 with `src="/media/portrait.jpg"` |
| 26-34 | `PORTRAIT_EFFECT_SETTINGS` | remove |
| 36-69 | `class Point` | remove |
| 71-103 | `class Particle` | remove |
| 105-158 | `class ParticlePool` | remove |
| 160-165 | `pointOnHeart` | remove |
| 167-197 | `createParticleImage` (never called) | remove |
| 311 | `<div className="portrait-gradient-border" />` (conic gradient halo) | remove (decorative) |
| 324-330 | `floating-badge` "✦ 20 ans / Designer Multimédia" | remove |
| 335-336 | `ornament-card` + `<CornerOrnament />` | remove `<CornerOrnament />`; keep `ornament-card` class (it is also the card border) |
| 495-497 | `function Skills() { return null; }` | remove |
| 613-627 | `CustomCursor()` incl. **the only `mousemove` listener (620)** and `sakura-cursor` class toggle | remove |
| 632, 633, 638 | `<Petals />`, `<CustomCursor />`, `<Skills />` | remove |
Hooks still needed after removal: `useEffect`, `useRef` (Hero, Contact), `useMemo`, `useState` (Projects, Nav, Contact). Keep line 2 as is.

### `src/routes/projects/$projectId.tsx` (665 lines)
| Lines | What | Action |
|------|------|--------|
| 4 | `import { Petals }` | remove |
| 33 | `<Petals />` (inside `<>…</>` opened at 32) | remove (the fragment can stay or collapse) |
| 581-595 | `<div className="mt-8">` holding the `extraitpubSAE1.mp4` video + caption | remove the whole div (CLEAN-07) |

### Files deleted
`src/components/Petals.tsx`, `src/components/CornerOrnament.tsx`, `src/components/ProjectModal.tsx`, `src/components/ui/` (46 files), `src/lib/utils.ts`, `src/hooks/use-mobile.tsx` (knip: all unused, and no import from outside `ui/`), `src/assets/` (after backup), `vercel.json`, `server.js`, `package-lock.json`. Also remove the `"start": "node server.js"` script from `package.json`.
Keep `components.json`: it is shadcn config, harmless, and knip ignores it. Deleting it is optional. Recommend keeping it so that re-adding a shadcn component stays possible.

### `src/styles.css`: rules that become dead
| Lines | Rule | Why |
|------|------|-----|
| 47-50 | `* { cursor: url(svg pink circle) }` | **second pink cursor** (pure CSS, global). Part of CLEAN-02 |
| 160-173 | `@keyframes petal-fall`, `.petal` | Petals removed |
| 175-193 | `@keyframes float-y`, `.float` | already unused |
| 195-206 | `@keyframes portrait-float` | remove together with `animation:` at 256 (decorative bobbing) |
| 208-219 | `@keyframes gradient-shift` | already unused |
| 227-242 | `.portrait-gradient-border` | element removed |
| 256 | `animation: portrait-float …` inside `.portrait-image` | remove that one declaration; keep `.portrait-image` |
| 267-297 | `.floating-badge`, `.badge-title`, `.badge-icon` | badge removed |
| 305-307, 309-319 | media-query blocks for gradient border / badge | remove; keep `.portrait-image` max-width block |
| 326-330 | `fill-bar`, `.skill-fill` | already unused |
| 356-361 | `modal-in` | ProjectModal removed |
| 369-375 | `.ornament-card .corner*` | CornerOrnament removed; **keep 364-368 `.ornament-card`** (used at `index.tsx:335`, `$projectId.tsx:602`) |
| 391-406 | `.sakura-cursor`, `.cursor-dot` | CustomCursor removed |
| 5 | `@custom-variant dark` | only the ui kit used `dark:`; optional removal |
| 43 | `--shadow-glow` | unused; optional |
Keep: `.grain`, `.quest-btn`, `.chapter-title`, `.reveal`, `.quest-card`, `.hud-tag` (filters and tags, not decoration), `.portrait-wrapper`, `.portrait-image`. The `❀` glyph dividers in Projects/Contact are typography. Leave them for phases 3-5.

## knip results (run 2026-09-27, `npx knip@6.38.0 --no-exit-code`, bun absent)

- **Unused files (57):** 46 × `src/components/ui/*.tsx`, `src/hooks/use-mobile.tsx`, `src/lib/utils.ts`, plus 9 × `public/animate/**/*.js`. The last 9 are **false positives**: these are loaded at runtime by the iframe. Ignore `public/**`.
- **Unused dependencies (43):** `@hookform/resolvers`, all 26 `@radix-ui/react-*`, `@tanstack/router-plugin`, `class-variance-authority`, `clsx`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `lucide-react`, `react-day-picker`, `react-hook-form`, `react-resizable-panels`, `recharts`, `sonner`, `tailwind-merge`, `vaul`, `zod`.
- knip did **not** flag `tailwindcss`, `tw-animate-css`, `@tailwindcss/vite`, `vite-tsconfig-paths`, `@cloudflare/vite-plugin`, `@vitejs/plugin-react` (peer deps of the Lovable wrapper) or any devDependency.
- **`@tanstack/react-query` is not flagged**, yet `grep` finds zero imports in `src/`. Its only mention is `resolve.dedupe` inside `@lovable.dev/vite-tanstack-config/dist/index.js:222`. Dedupe of an absent package is harmless [ASSUMED], so remove it (CLEAN-03 names it explicitly) and let the build prove it.
- **`@tanstack/router-plugin`:** flagged, but it is framework plumbing: `@tanstack/start-plugin-core` depends on `@tanstack/router-plugin@1.167.22` transitively. **Recommend keeping it** (add it to `ignoreDependencies`). Removing it gains 0 bytes client-side and risks a Lovable wrapper surprise. "Tout doute = on garde."
- After the ui/ deletion, `tw-animate-css` has no consumer (no `animate-*` / `data-[state]` class left in `src/`). The locked decision says to ignore it in knip, so keep it. It is CSS-only and Tailwind v4 emits only the utilities that are used.

Recommended `knip.json` (commit it, since it is small and useful for later phases):
```json
{
  "$schema": "https://unpkg.com/knip@6/schema.json",
  "ignore": ["public/**", "media-src/**", "src/routeTree.gen.ts"],
  "ignoreDependencies": ["tailwindcss", "tw-animate-css", "@tanstack/router-plugin"]
}
```
`bun remove` list, in one commit after the ui/ deletion is green:
```bash
bun remove @hookform/resolvers @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio \
  @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu \
  @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label \
  @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress \
  @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator \
  @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle \
  @radix-ui/react-toggle-group @radix-ui/react-tooltip @tanstack/react-query class-variance-authority clsx cmdk \
  date-fns embla-carousel-react input-otp lucide-react react-day-picker react-hook-form react-resizable-panels \
  recharts sonner tailwind-merge vaul zod
```

**Lint step (third step of the locked order):** today `eslint src/...` gives **631 `prettier/prettier` errors + 1 react-refresh warning** (`src/router.tsx:4`), and 0 other rule violations. `eslint .` does not finish in 5 min because of `public/animate/*.js`. Recommendation: add `"public"`, `"media-src"`, `"scripts"` (optional) to the ESLint `ignores` and `public`, `media-src` to `.prettierignore`. The lint gate is then "0 errors other than prettier/prettier". An optional, **isolated** `prettier --write src` formatting commit can come last. Do not mix it with logic commits, because it rewrites most of `index.tsx`. Do not add lint to `check` (not in the locked command).

## Asset inventory (decode-aware, NFC-normalised, over `src/**` + `public/animate/*.{html,js}`, with Lyna's uncommitted `projects.ts` diff applied)

Reverse check (every referenced URL exists on disk): **only 3 are missing**: `/assets/festival-flyer.jpg`, `/assets/festival-goodies.jpg`, `/videos/extraitpubSAE1.mp4`. No filename in `public/` is NFD on disk.

`public/assets/`: 64 files. Candidates to move out:
| File | Size | Why unreferenced | Destination |
|------|------|------------------|-------------|
| `charte_graphique.pdf` | 22.53 MiB | never referenced; gitignored but **present on disk, so it gets copied to `dist/client` and is live on production** (`https://lynarebahi.fr/assets/charte_graphique.pdf` → 200 application/pdf) | `media-src/charte_graphique.pdf` (CLEAN-09, SIZE-06 phase 2) |
| `mockup.jpg` | 9.78 MiB | no reference | `media-src/quarantine/public/assets/` |
| `site.jpg` | 3.72 MiB | referenced only by `page-web-perso`, which **Lyna's uncommitted diff removes** | quarantine |
| `portrait.jpg` | 2.46 MiB | only the `src/assets` copy is imported | **`git mv` → `public/media/portrait.jpg`** (same blob `f17cea5…`, zero history growth) |
| `Capture d’écran 2026-05-09 à 23.00.19.png` | 1.31 MiB | no reference (name has U+2019 + NFC é/à) | quarantine |
| `logo.png` | 0.45 MiB | `__root.tsx` uses `/logo.png` (root), and `public/assets/logo.png` **differs** from `public/logo.png` | quarantine |
| `prototype.png` | 0.22 MiB | only `prototype1/2.png` are used | quarantine |
Total leaving `public/assets`: 40.47 MiB. **`palette de couleurs.png` is referenced** (`$projectId.tsx:142`, `%20`) and **served 200 by workerd** (`wrangler dev`, `/assets/palette%20de%20couleurs.png` → `200 image/png`). Keep it. The `ø` names (`skøllrub_logo_final.png`, `Etiquettes_SkøllRub_*`) also serve 200 both raw and percent-encoded.

`src/assets/`: 65 files, 141 MiB. **63 are byte-identical to `public/assets/`** (`cmp`). Only `affichepromo.png` (22.55 MiB) and `prévention.png` (18.57 MiB) exist nowhere else. Back up all of `src/assets/` to `media-src/src/assets/` (rsync + `diff -rq`), then `git rm -r src/assets`.

## Animate dependency map (read from each scene's JS manifest + HTML)

| Scene | Next (`window.open`) | Atlas | Videos (`videos/…`) | Other |
|-------|------|-------|--------|-------|
| 1_MOHAMED (iframe entry, `$projectId.tsx:445`) | 1_LYNA | `images/1_MOHAMED_atlas_1.png` | concassage, empattage | `images/_preloader.gif` |
| 1_LYNA | 2_IMAD | `images/1_LYNA_atlas_1.png` | ebullition, filtration | `images/_preloader.gif` |
| 2_IMAD | 2_CLEMENT | `imagesImad/2_IMAD_atlas_1.png` | whirpool | `imagesImad/_preloader.gif` |
| 2_CLEMENT | 2_SOPHIA | `imagesframe2/2_CLEMENT_atlas_1.png` | refroidissement | `imagesframe2/_preloader.gif` |
| 2_SOPHIA | 3_ALBERTIN | `imagesframe2/2_SOPHIA_atlas_1.png` | fermentation, miseenbouteile | `imagesframe2/_preloader.gif` |
| 3_ALBERTIN (end) | none | none (pure vector) | none | none |
All 5 scenes that have a manifest load `components/sdk/anwidget.js` + `components/video/src/video.js`. Every HTML loads CreateJS from **`https://code.createjs.com/1.0.0/createjs.min.js`**, and the manifests load jQuery from **`https://code.jquery.com/jquery-3.4.1.min.js`** (the `"lib/jquery-3.4.1.min.js"` strings are unused defaults). These are external CDN deps: keep them in mind for a CSP in phase 2.

**Keep-list confirmed complete.** Orphans confirmed: `3_CLEMENT.html/.js` (referenced only by itself), `illustrations/` (4 files, includes the mojibake `de╠ücor.ai`), 7 `.fla` + `RECOVER_1_LYNA.fla` (identical sha to `1_LYNA.fla`), and the 8 root-level `*.mp4` (byte-identical to `videos/*`).
**Orphans NOT in the CONTEXT delete-list** (no reference in any html/js): `fond.jpeg` (71 KB, at the `animate/` root), `images/CachedBmp_5.png`, `images/empattage_atlas_1.png`, `images/frame1_atlas_1.png`, `images/frame1_atlas_2.png` (≈390 KB together). CONTEXT says `images/` stays intact, so **leave the four `images/*`**. Quarantine `fond.jpeg` like any other root orphan, or keep it. It is the planner's call (it is 71 KB, so either is fine).
Removing the listed items takes ≈134 MiB out of `public/animate` (223 → ~89 MiB).

**Cloudflare `.html` handling (verified in workerd):** `/animate/2_SOPHIA.html` → **307 → `/animate/2_SOPHIA`** → 200, and relative `2_SOPHIA.js?…` / `imagesframe2/…png` resolve to 200. The chain works through the redirect (production already behaves this way: `/animate/1_MOHAMED.html` → 307). The manual chain walk must follow the redirects, and "no 404" must not be confused with "no 3xx".

## Broken references (CLEAN-07): least-invasive fixes
1. `/videos/extraitpubSAE1.mp4` (`$projectId.tsx:589`): the file is gitignored and absent from the repo. **It does exist** at `~/Desktop/site-backup/lynarebahi.fr/videos/extraitpubSAE1.mp4` (15.65 MiB, h264 2816×1584 yuv420p, 27.4 s) and on `/Volumes/PortableSSD/Portfolio/dist/client/videos/`. Recommend: **delete `$projectId.tsx:581-595`** in Phase 1, copy the backup into `media-src/videos/` so Phase 2 can re-encode it (~3-5 MB) and restore it as a tracked `public/media/` file. Do not put a gitignored file back into `public/`. That is how production came to depend on a local-only file.
2. `festival-flyer.jpg` / `festival-goodies.jpg` (`projects.ts:54`, project `festival-identite`, `inProgress: true`): no such images anywhere (`mdfind`, site-backup). Fix: `media: []`. The card is `pointer-events-none`, but `/projects/festival-identite` is still reachable by URL and currently renders two broken `<img>`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Unused file/dep detection | grep of import lines | `bunx knip` (+ the build as final proof) | handles re-exports, peer deps, plugins |
| pix_fmt detection | parsing `avcC`/`hvcC` boxes | `ffprobe -v error -select_streams v:0 -show_entries stream=pix_fmt -of csv=p=0` | codec-specific bit depth parsing is error-prone |
| 25 MiB Cloudflare ceiling | a second custom check | `wrangler deploy --dry-run` already fails with "assets with sizes of up to 25 MiB" | verified; the script's 20 MiB is the margin |
| Rollback | redeploying an old checkout | `wrangler rollback 0b1ccd2a-db8e-4136-b65c-55615d6787b4` | production source is not in git |
| URL decoding | ad-hoc `%20` replace | `decodeURIComponent(s).normalize("NFC")` | handles `%C3%B8`, `%E2%80%99`, and NFD |

(The faststart check is the one small thing that *should* be hand-rolled: a 15-line top-level box walk beats `ffprobe -v trace | grep` for speed and has no dependency.)

## Runtime State Inventory

| Category | Items Found | Action Required |
|----------|-------------|------------------|
| Stored data | None. Static site, no DB/KV/R2 (`dist/server/wrangler.json` has no bindings; dry-run: "No bindings found") | none |
| Live service config | **Production worker `tanstack-start-app` on `lynarebahi.fr`** runs version `0b1ccd2a-db8e-4136-b65c-55615d6787b4` (2026-09-01), built from a **webp variant that is not in git**. The custom domain is configured in the Cloudflare dashboard (`wrangler.jsonc` has no `routes`). It publicly serves `charte_graphique.pdf` and every `.fla` | Record the version ID in the plan; copy `~/Desktop/site-backup/lynarebahi.fr` into `media-src/prod-mirror-2026-09-01/`; human checkpoint before `wrangler deploy`; after deploy, verify the PDF and `.fla` URLs return 404 |
| OS-registered state | None (no launchd/cron/pm2; verified: no such files in repo, not relevant to a static deploy) | none |
| Secrets/env vars | None renamed. EmailJS keys are hardcoded in `index.tsx:506,524` (untouched). `.dev.vars` is listed in `.assetsignore` | none |
| Build artifacts | `node_modules/` installed by **npm** from `package-lock.json` (versions ≠ `bun.lockb`); `dist/` (428 MiB now, gitignored); `.wrangler/deploy/config.json` redirect (regenerated each build) | `rm -rf node_modules && bun install --frozen-lockfile` in Wave 0; `rm -rf dist` before the final `check` |

## Common Pitfalls

### Pitfall 1: The guard fails on day one because of kept files
**What goes wrong:** `check-assets` with a hard 20 MiB fail rejects `videos/56_Lyna_REBAHI_CVvideo.mp4` (23.10 MiB) and `animate/videos/empattage.mp4` (22.37 MiB), which Phase 1 must keep.
**How to avoid:** Per-file waivers with explicit rule names (`size`, `pix_fmt`, `faststart`). Hard 25 MiB and forbidden extensions stay non-waivable.
**Warning signs:** `check` red right after the script lands, which tempts someone to raise the threshold globally.

### Pitfall 2: Bun missing, and the lockfiles disagree
**What goes wrong:** `bun run check` → `command not found`. After `brew install bun`, `bun install` follows `bun.lockb` (vite-plugin 1.30.0 / wrangler 4.76.0 / react-start 1.167.16 / lovable-config 1.4.0), not what is installed now (1.32.2 / 4.82.2 / 1.167.39 / 1.5.0).
**How to avoid:** Wave 0 does `rm -rf node_modules && bun install --frozen-lockfile`, then `tsc` + `vite build` + dry-run, and only then deletes `package-lock.json` in the CLEAN-08 commit. If the bun.lockb set fails to build, fall back to `bun install` without `--frozen-lockfile` (re-resolves to latest within ranges) and commit the updated `bun.lockb`.
**Warning signs:** build errors from the Lovable wrapper. Never "fix" them in `vite.config.ts`.

### Pitfall 3: The Phase 1 deploy regresses production weight
**What goes wrong:** Production today is a webp build (hero.mp4 10.8 MB, webp images). The repo build ships PNGs (e.g. `affiche_sensibilisation` 9.6 MiB, `hero.png` 4.2 MiB, hero.mp4 17.25 MiB). Phase 1's "redeploy" makes the live site heavier until Phase 2. It also removes `page-web-perso` (Lyna's own edit).
**How to avoid:** Human checkpoint (Lyna) before `wrangler deploy`, stating this trade-off. The rollback ID is recorded. Alternative for Lyna: keep the Phase 1 deploy local-only (dry-run) and deploy after Phase 2. That would contradict the locked "deploy at end of phase", so she must decide.
**Warning signs:** a recruiter-visible slowdown in the same week.

### Pitfall 4: `wrangler` not on PATH under bun
**What goes wrong:** `wrangler` is not a direct dependency; npm hoisted its bin into `node_modules/.bin`. Whether bun links bins of transitive deps is unverified [ASSUMED].
**How to avoid:** After `bun install`, `test -x node_modules/.bin/wrangler`. If absent, `bun add -d wrangler@<version used by @cloudflare/vite-plugin>` (check `node_modules/@cloudflare/vite-plugin/package.json` → `dependencies.wrangler`) so that only one wrangler is installed.

### Pitfall 5: Dry-run without a fresh build validates a stale `dist/`
**What goes wrong:** `wrangler deploy --dry-run` reads `.wrangler/deploy/config.json` → `dist/server/wrangler.json` → `assets.directory: ../client`. Without a prior `vite build` it validates old output (or errors).
**How to avoid:** Keep the locked order (`vite build` before dry-run). For the final deploy, `rm -rf dist && bun run check && wrangler deploy`.

### Pitfall 6: Deleted public files linger in `dist/client`
**What goes wrong:** Vite empties `outDir` by default, but a stray `dist/` from an earlier build with other settings could still carry `.fla`/PDF [ASSUMED: Vite `emptyOutDir` default true when outDir is inside root].
**How to avoid:** check-assets fails on the forbidden extensions `.fla .ai .tmp .pdf .psd .xd .aep .prproj` anywhere in `dist/client`. That doubles as a CLEAN-05/09 regression test.

### Pitfall 7: Grep false positives and negatives in the inventory
**What goes wrong:** `/assets/portrait.jpg` matches `@/assets/portrait.jpg`. `palette de couleurs.png` is missed without `%20` decoding. `Capture d’écran…` contains U+2019.
**How to avoid:** Use the decode+NFC scan (script in Code Examples) and the reverse check (URL → file exists). Treat `NAME-ONLY` hits as needing a manual look.

### Pitfall 8: Vite's `assets/` output dir collides with `public/assets/`
**What:** Hashed bundles (`index-*.js`, `styles-*.css`, `portrait-*.jpg`) land in `dist/client/assets/` next to the copied `public/assets/*`. That is harmless now. Moving the portrait to `public/media/` stops Vite from emitting the 2.5 MiB `portrait-*.jpg` into **both** `dist/client/assets` and `dist/server/assets`. Future media belongs in `public/media/`, not `public/assets/`.

## Code Examples

### `scripts/check-assets.ts` (recommended shape; node APIs so it runs under bun **and** node 24)
```typescript
// Run: bun scripts/check-assets.ts   (after vite build)
import { readdirSync, statSync, readFileSync, existsSync, openSync, readSync, closeSync } from "node:fs";
import { join, relative, extname } from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = join(import.meta.dirname ?? ".", "..");          // bun + node ≥20.11 support import.meta.dirname
const DIST = join(ROOT, "dist/client");                        // = assets.directory in dist/server/wrangler.json
const MiB = 1024 * 1024;
const HARD = 25 * MiB, FAIL = 20 * MiB, WARN = 10 * MiB;
const FORBIDDEN = new Set([".fla", ".ai", ".tmp", ".pdf", ".psd", ".xd", ".aep", ".prproj"]);
type Rule = "size" | "pix_fmt" | "faststart";
type Exc = { path: string; waive: Rule[]; reason: string };

if (!existsSync(DIST)) { console.error("dist/client missing: run vite build first"); process.exit(2); }
const exc: Exc[] = JSON.parse(readFileSync(join(ROOT, "scripts/check-assets.exceptions.json"), "utf8")).exceptions;
const waived = (p: string, r: Rule) => exc.some(e => e.path.normalize("NFC") === p && e.waive.includes(r));
const ignore = new Set(readFileSync(join(DIST, ".assetsignore"), "utf8").split("\n").map(s => s.trim()).filter(Boolean));

const walk = (d: string): string[] => readdirSync(d, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]);

function topLevelBoxes(file: string): string[] {       // faststart: moov must precede mdat
  const fd = openSync(file, "r"); const size = statSync(file).size; const b = Buffer.alloc(16);
  const out: string[] = []; let o = 0;
  try {
    while (o < size && out.length < 32) {
      readSync(fd, b, 0, 16, o);
      let s = b.readUInt32BE(0); const t = b.toString("latin1", 4, 8);
      if (s === 1) s = Number(b.readBigUInt64BE(8)); else if (s === 0) s = size - o;
      if (s < 8) break; out.push(t); o += s;
    }
  } finally { closeSync(fd); }
  return out;
}
function pixFmt(file: string): string | null {         // null = ffprobe unavailable
  const r = spawnSync("ffprobe", ["-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=pix_fmt", "-of", "csv=p=0", file], { encoding: "utf8" });
  if (r.error) return null;                             // ENOENT → graceful skip
  return r.stdout.trim();
}

const errors: string[] = [], warns: string[] = [];
let total = 0; let ffprobeMissing = false;
for (const abs of walk(DIST)) {
  const rel = relative(DIST, abs).normalize("NFC");
  if (ignore.has(rel) || rel === ".assetsignore") continue;
  const size = statSync(abs).size; total += size;
  const mib = (size / MiB).toFixed(2);
  if (FORBIDDEN.has(extname(rel).toLowerCase())) errors.push(`forbidden source file: ${rel}`);
  if (size > HARD) errors.push(`${rel} ${mib} MiB > 25 MiB (Cloudflare hard limit, not waivable)`);
  else if (size > FAIL) (waived(rel, "size") ? warns : errors).push(`${rel} ${mib} MiB > 20 MiB${waived(rel, "size") ? " [waived]" : ""}`);
  else if (size > WARN) warns.push(`${rel} ${mib} MiB > 10 MiB`);
  if (extname(rel).toLowerCase() === ".mp4") {
    const boxes = topLevelBoxes(abs);
    const fs = boxes.indexOf("moov") !== -1 && (boxes.indexOf("mdat") === -1 || boxes.indexOf("moov") < boxes.indexOf("mdat"));
    if (!fs) (waived(rel, "faststart") ? warns : errors).push(`${rel} not faststart (${boxes.join(",")})${waived(rel, "faststart") ? " [waived]" : ""}`);
    const pf = pixFmt(abs);
    if (pf === null) ffprobeMissing = true;
    else if (pf !== "yuv420p") (waived(rel, "pix_fmt") ? warns : errors).push(`${rel} pix_fmt=${pf}${waived(rel, "pix_fmt") ? " [waived]" : ""}`);
  }
}
for (const e of exc) if (!existsSync(join(DIST, e.path))) warns.push(`stale exception (file gone): ${e.path}`);
if (ffprobeMissing) warns.push("ffprobe not found: pix_fmt NOT checked");
console.log(`check-assets: ${(total / MiB).toFixed(1)} MiB in dist/client, ${exc.length} exception(s):`);
for (const e of exc) console.log(`  EXCEPTION ${e.path} waive=[${e.waive}]: ${e.reason}`);
for (const w of warns) console.warn(`  WARN  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
process.exit(errors.length ? 1 : 0);
```
Notes: `import.meta.dirname` exists in bun and node ≥ 20.11 [ASSUMED for node; bun documents `import.meta.dir`/`dirname`]. If in doubt, use `process.cwd()`, since `bun run` executes from the package root. The script lives outside the `tsconfig.json` `include` (`src/**`, `vite.config.ts`, `eslint.config.js`), so `tsc --noEmit` does not typecheck it and no `@types/bun` is needed.

### `scripts/check-assets.exceptions.json` (paths relative to `dist/client` = public URL path)
```json
{
  "$comment": "Legacy media tolerated until phase 2 re-encode. Empty this list in phase 2. 25 MiB hard limit is never waivable.",
  "exceptions": [
    { "path": "videos/hero.mp4", "waive": ["pix_fmt"], "reason": "yuv420p10le HDR HLG (bt2020/arib-std-b67), re-encode phase 2" },
    { "path": "videos/56_Lyna_REBAHI_CVvideo.mp4", "waive": ["faststart", "size"], "reason": "23.10 MiB, moov after mdat, re-encode phase 2" },
    { "path": "animate/videos/empattage.mp4", "waive": ["size"], "reason": "22.37 MiB, re-encode phase 2" }
  ]
}
```
Measured state of every kept video:
| File | Size | pix_fmt | box order | Needs waiver |
|------|------|---------|-----------|--------------|
| videos/56_Lyna_REBAHI_CVvideo.mp4 | 23.10 MiB | yuv420p | ftyp,free,**mdat,moov** | size, faststart |
| videos/hero.mp4 | 17.25 MiB | **yuv420p10le** (HLG) | ftyp,moov,free,mdat | pix_fmt (+ WARN >10 MiB) |
| animate/videos/empattage.mp4 | 22.37 MiB | yuv420p | moov first | size |
| animate/videos/miseenbouteile.mp4 | 15.63 MiB | yuv420p | moov first | none (WARN) |
| animate/videos/filtration.mp4 | 13.57 MiB | yuv420p | moov first | none (WARN) |
| animate/videos/{concassage,refroidissement,whirpool,fermentation,ebullition}.mp4 | 8.93 / 8.61 / 5.41 / 4.34 / 2.65 MiB | yuv420p | moov first | none |
Also WARN (>10 MiB? no): the largest images are `affiche_sensibilisation_Lyna_Rebahi.png` 9.61 MiB and `mockup.jpg` 9.78 MiB (quarantined). Nothing else is above 10 MiB once the PDF leaves.

### Negative-test fixtures (proof that the guard bites; verified to produce the intended properties)
```bash
mkfile -n 21m public/zz-dummy.bin            # > 20 MiB → check must exit ≠ 0 at check-assets
ffmpeg -v error -y -f lavfi -i testsrc=d=1:s=64x64 -pix_fmt yuv420p10le -c:v libx264 public/zz-10bit.mp4   # pix_fmt fail
ffmpeg -v error -y -f lavfi -i testsrc=d=1:s=64x64 -pix_fmt yuv420p -c:v libx264 public/zz-nofs.mp4        # ftyp,free,mdat,moov → faststart fail
# positive control: add -movflags +faststart → ftyp,moov,free,mdat
bun run check; echo "exit=$?"   # expect ≠0 each time; then: rm public/zz-*  && bun run check  (expect 0)
```
Never `git add` these fixtures. Run them one at a time so each failure message is attributable.

### Decode-aware inventory script (used for this research; reusable as a plan task)
Runs with `bun` or `node` (24 strips types). Scans `src/**/*.{ts,tsx,css,json,html}` + `public/animate/*.{html,js}`, adds `decodeURIComponent(text).normalize("NFC")` to the corpus, and classifies each `public/**` file as REF (full `/path` found), NAME-ONLY (basename only, so check manually) or UNREF. Reverse pass: extract every `"/(assets|videos|animate|media)/…"` literal from `src/`, decode + NFC, then `existsSync("public"+p)`.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Assumption: dry-run may not enforce 25 MiB (STATE.md blocker) | **Verified:** `wrangler 4.82.2 deploy --dry-run` fails with "Cloudflare Workers supports assets with sizes of up to 25 MiB…" (exit 1) | tested 2026-09-27 | check-assets' 20 MiB threshold is a margin; the ceiling is double-guarded. Update STATE.md blocker |
| `ffprobe -v trace | grep moov` for faststart | top-level box walk in TS | — | no ffprobe dependency for faststart |
| bun.lockb (binary) | bun ≥1.2 defaults to text `bun.lock`; `bunfig.toml` pins `saveTextLockfile = false` [CITED: bun.com/docs/pm/cli/install] | bun 1.2 | Keep the binary lockfile (Lovable config kept). `bun install` keeps writing `bun.lockb` |

## Git hygiene

- `.gitignore` additions: `media-src/` (verified NOT ignored today: `git check-ignore media-src/x` → exit 1). `public/assets/charte_graphique.pdf` is already ignored. Keep that line even after the move (defence). The `public/videos/extraitpubSAE1.mp4` line can stay.
- Everything being removed is already in history (pack 332.8 MiB). This phase only shrinks the tree. **The only binary added is `public/media/portrait.jpg`, and `git mv` of the identical blob `f17cea5…` adds 0 bytes to history.**
- Pre-commit verification (manual gate per commit; a hook is optional):
```bash
git diff --cached --name-only --diff-filter=A -z | xargs -0 -I{} sh -c 'git cat-file -e "$(git hash-object "{}")" 2>/dev/null && echo "reuse {}" || echo "NEW BLOB $(stat -f %z "{}") {}"'
git diff --cached --name-only | grep -Ei '\.(pdf|fla|ai|tmp|psd)$' && echo "FORBIDDEN STAGED"
```
Any "NEW BLOB" > 1 MiB should block the commit.
- The first commit of the phase includes Lyna's `src/data/projects.ts` diff (removes `page-web-perso` and `mashup`, leaving 9 projects). That diff is also why `site.jpg` becomes unreferenced.
- Push: `origin/main` is at `d5421f4`; local `main` is 26 commits ahead (docs). Pushing at the end of the phase pushes these too. That is fine, and there are no binaries in them.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `resolve.dedupe` listing an uninstalled `@tanstack/react-query` is harmless | knip results | build error → keep react-query, note it |
| A2 | bun links `node_modules/.bin/wrangler` for a transitive dep | Pitfall 4 | `check` fails at the last step → add wrangler devDep |
| A3 | `bun.lockb` (vite-plugin 1.30.0, react-start 1.167.16) builds green | Pitfall 2 | fall back to a non-frozen `bun install` |
| A4 | `lynarebahi.fr` is routed to worker `tanstack-start-app` (deployment date/author match, domain in dashboard) | Runtime State | deploy goes to a worker that does not serve the domain → verify with `curl` after deploy |
| A5 | Vite empties `dist/client` on each build | Pitfall 6 | stale files → forbidden-extension check catches them |
| A6 | Production Cloudflare decodes `%20` like local workerd (production 404s today only because that build predates/differs) | Asset inventory | palette image 404 in prod → caught by the post-deploy curl check |
| A7 | knip / wrangler legitimacy (slopcheck unavailable) | Package audit | negligible: first-party tools already in use |

## Open Questions

1. **Replace the 2026-09-01 webp production with the PNG build now?**
   - Known: production is lighter and not reproducible from git. Phase 2 will make the repo build lighter than both.
   - Recommendation: `checkpoint:human-verify` before `wrangler deploy`, citing the rollback ID. If Lyna refuses, Phase 1 ends at a green dry-run and the deploy moves to the end of Phase 2.
2. **`fond.jpeg` at the `public/animate/` root**: unreferenced and not in the delete-list. Recommend quarantine (root orphan like the `.mp4`s). The four orphan atlases inside `images/` stay per the locked decision.
3. **`portrait-gradient-border` + `portrait-float` animation**: not named in CLEAN-02, but decorative. Recommend removing them ("tout effet décoratif retiré sans remplacement"). Keep `.portrait-wrapper` / `.portrait-image` sizing.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| bun | `bun run check`, `bun install/remove`, `bunx knip` | **✗** | — (brew stable 1.4.2) | none for the locked workflow → **Wave 0: `brew install bun`** (brew present at /opt/homebrew/bin/brew). Temporary: `npx knip@6.38.0`, `node scripts/check-assets.ts` |
| node | tooling, fallback runner | ✓ | 24.15.0 | — |
| tsc | check step 1 | ✓ | node_modules/.bin/tsc (5.8) | — |
| vite | check step 2 | ✓ | 7.3.2 | — |
| wrangler | check step 4, deploy | ✓ (transitive) | 4.82.2 (npm tree); authenticated | `bun add -d wrangler` if not linked after bun install |
| ffprobe / ffmpeg | pix_fmt check, fixtures | ✓ | 8.1.1 | script warns and skips pix_fmt |
| mkfile, shasum, rsync, cmp | fixtures, backups | ✓ (macOS) | — | `dd if=/dev/zero bs=1m count=21` |
| Cloudflare auth | deploy | ✓ | `wrangler whoami` OK; deployments list works | — |

**Missing dependencies with no fallback:** bun (must be installed in Wave 0; the locked `check` script and CLEAN-08 depend on it).

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None (no unit runner in repo). Validation = shell commands + `scripts/check-assets.ts` + manual browser walk |
| Config file | `scripts/check-assets.exceptions.json` (Wave 0/1), `knip.json` |
| Quick run command | `bunx tsc --noEmit && bunx vite build` (~6 s) |
| Full suite command | `bun run check` (= `tsc --noEmit && vite build && bun scripts/check-assets.ts && wrangler deploy --dry-run`, ~10-15 s) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| CLEAN-01 | dead components gone, types + build green | smoke | `test ! -e src/components/ProjectModal.tsx && test ! -e src/components/Petals.tsx && test ! -d src/components/ui && ! grep -n "function Skills" src/routes/index.tsx && bun run check` | ❌ Wave 0 (check script) |
| CLEAN-02 | no decorative code | grep | `! grep -rnE "Petals\|CornerOrnament\|CustomCursor\|PORTRAIT_EFFECT_SETTINGS\|class Point\|floating-badge\|sakura-cursor\|cursor-dot\|petal-fall\|cursor: url" src` (expect no output) | n/a |
| PERF-02 | no global mousemove | grep | `! grep -rn "mousemove" src` | n/a |
| CLEAN-03 | deps pruned | tool | `bunx knip --dependencies` → no unused deps (with knip.json); `! grep -E "\"(zod\|react-hook-form\|@tanstack/react-query\|date-fns\|@radix-ui/)" package.json` | ❌ knip.json |
| CLEAN-04 | single media location | fs | `test ! -d src/assets && test -f public/media/portrait.jpg && grep -n '"/media/portrait.jpg"' src/routes/index.tsx && ! grep -rn "@/assets" src` | n/a |
| CLEAN-05 | animate cleaned | fs | `ls public/animate` shows only the 6 scene html/js + `components images imagesImad imagesframe2 videos`; `! ls public/animate/*.fla public/animate/*.mp4 public/animate/3_CLEMENT.* public/animate/illustrations 2>/dev/null` | n/a |
| CLEAN-05 | 6-scene chain plays | **manual** | `bun run build && bunx wrangler dev`, open `/projects/sae-2`, watch the iframe reach 3_ALBERTIN; DevTools Network: no 4xx for `/animate/**` (307 on `.html` is expected) | manual-only (canvas animation + timed `window.open`) |
| CLEAN-06 | quarantine done, refs intact | script | inventory script → 0 UNREF in `public/assets`; reverse scan → 0 MISSING; `ls media-src/quarantine/public/assets` lists the 5 quarantined files | ❌ Wave 0 (inventory script, optional commit under scripts/) |
| CLEAN-07 | no broken refs | grep + http | `! grep -rnE "extraitpubSAE1\|festival-flyer\|festival-goodies" src`; with `wrangler dev`: `curl` home + 9 project pages → every `src="/…"` → 200 | partial manual (network tab) |
| CLEAN-08 | Cloudflare only | fs | `test ! -e vercel.json && test ! -e server.js && test ! -e package-lock.json && ! grep -n '"start"' package.json && test -e bun.lockb` | n/a |
| CLEAN-09 | originals backed up, PDF never committed | fs + git | `git check-ignore -q media-src/x && test -f media-src/charte_graphique.pdf && test -f "media-src/src/assets/affichepromo.png" && test -f "media-src/src/assets/prévention.png"`; `git log --all --name-only --format= \| grep -c "charte_graphique.pdf"` → 0 | n/a |
| SIZE-07 | guard bites and passes | script | fixtures above: each makes `bun run check` exit ≠ 0 with a FAIL line naming the file; after `rm public/zz-*`, `bun run check` exits 0 and prints 3 EXCEPTION lines | ❌ Wave 0 (`scripts/check-assets.ts`, exceptions json) |
| SIZE-07 | deployed | http | after `wrangler deploy`: `curl -s -o /dev/null -w '%{http_code}' https://lynarebahi.fr/assets/charte_graphique.pdf` → 404; `…/animate/2_SOPHIA.fla` → 404; `…/assets/palette%20de%20couleurs.png` → 200; `…/media/portrait.jpg` → 200 | n/a |

### Sampling Rate
- **Per task commit:** `bunx tsc --noEmit && bunx vite build` (plus `bun scripts/check-assets.ts` once it exists)
- **Per wave merge:** `bun run check`
- **Phase gate:** `rm -rf dist && bun run check` green + three negative fixtures proven + manual Animate chain + network-tab 404 sweep on home + 9 project pages (`prototype-site-accessible, business-card-mockup, festival-identite, illustration-photoshop, portraits-illustration, stop-motion, clip, sae-1, sae-2`) + post-deploy curl checks

### Wave 0 Gaps
- [ ] `brew install bun`; `rm -rf node_modules && bun install --frozen-lockfile`; `test -x node_modules/.bin/wrangler`; `bunx tsc --noEmit && bunx vite build && bunx wrangler deploy --dry-run` green
- [ ] `.gitignore` += `media-src/`; ESLint ignores += `public`, `media-src`; `.prettierignore` += `public`, `media-src`
- [ ] Full backup: `rsync -a public/ media-src/public/`, `rsync -a src/assets/ media-src/src/assets/`, `diff -rq` each; `cp` of the site-backup mirror + `extraitpubSAE1.mp4` into `media-src/`
- [ ] `scripts/check-assets.ts` + `scripts/check-assets.exceptions.json` + `"check"` script in `package.json`
- [ ] `knip.json`

## Security Domain

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | — |
| V3 Session Management | no | — |
| V4 Access Control | yes (information exposure) | Nothing private in `public/`: the PDF (brand guide) and `.fla`/`.ai` sources are currently **publicly downloadable on production**. The cleanup plus the forbidden-extension check in check-assets fix this |
| V5 Input Validation | unchanged | contact form keeps native HTML `required`/`type=email` (CLEAN-03 removes zod/react-hook-form, which were unused) |
| V6 Cryptography | no | — |
| V14 Configuration | yes | remove `server.js` (unmaintained Node server that buffered responses via `result.text()`, which breaks binary/stream responses); single deploy target |

### Known Threat Patterns
| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Source/working files leaked via static hosting | Information disclosure | forbidden-extension fail in `check-assets.ts`; `media-src/` gitignored and outside `public/` |
| Secrets accidentally in `dist/client` | Information disclosure | `.assetsignore` already excludes `.dev.vars`; no `.env` in repo (verified) |
| Third-party script supply chain (`code.createjs.com`, `code.jquery.com` in the Animate iframe) | Tampering | out of scope; note for the phase-2 `_headers`/CSP work |

## Sources

### Primary (HIGH confidence, measured in this session)
- Local runs: `tsc --noEmit` (exit 0), `vite build` (output layout), `wrangler deploy --dry-run` (pass; 26 MiB dummy → exit 1 with 25 MiB message), `wrangler dev` (URL behaviour, 307 on `.html`), `wrangler rollback --help`, `wrangler deployments list`
- `npx knip@6.38.0` report; `npm view knip`, `npm view wrangler`
- `ffprobe` + box walk on all 10 kept MP4s and 3 fixtures; `cmp`/`shasum` duplicate checks; decode+NFC inventory script
- `curl` against `https://lynarebahi.fr` (production contents)
- `bun.lockb` strings (pinned versions), `package-lock.json`, `node_modules/@lovable.dev/vite-tanstack-config/dist/index.js`

### Secondary
- [CITED: bun.com/docs/runtime/child-process] `Bun.spawnSync` returns `{exitCode, stdout, success,…}`
- [CITED: bun.com/docs/runtime/utils] `Bun.which(bin)` returns `null` when not found
- [CITED: bun.com/docs/pm/cli/install] text lockfile default since 1.2; `saveTextLockfile`

### Tertiary (LOW)
- Whether bun links transitive bins; whether bun migrates `package-lock.json` (not documented on the install page I fetched)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH, except the bun lockfile versions (measured, but not yet built with bun)
- Architecture / dead-code map: HIGH (line-exact, grep + knip + build)
- Pitfalls: HIGH for measured ones (sizes, dry-run, production state); MEDIUM for bun-specific behaviour

**Research date:** 2026-09-27
**Valid until:** 2026-10-27 (repo-specific; production state may change if someone redeploys)

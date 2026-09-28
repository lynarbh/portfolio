# Phase 3: Hero & Qui suis-je en scène — Research

**Researched:** 2026-09-28
**Domain:** React 19 SSR/hydration (TanStack Start), CSS cascade layers in Tailwind v4, offline media pipeline (sharp + ffmpeg), content centralisation, Open Graph
**Confidence:** HIGH. Almost every claim below was measured on the real repo, in a scratch copy of it, or in headless Chrome 153. Items marked `[ASSUMED]` are listed in the Assumptions Log.

Scratch evidence (read-only, not in the repo): `/private/tmp/claude-501/-Users-lynouchrbh-Dev-portfolio/c2e1b255-1370-4ae6-91cd-bbfdabee7496/scratchpad/phase3-research/`. It holds `grain-final.mjs`, `stills2.mjs`, `logos.mjs`, `jsx-audit.mjs`, `jsx-audit2.mjs`, `tw.mjs`, `rm/` (hydration test and the `cdp.mjs` headless-Chrome harness), `build/` (scratch Vite build) and contact sheets (`hero-sheet.jpg`, `cv-sheet.jpg`, `pick.jpg`).

> **Working-tree alert (found at 11:00 on 2026-09-28, during research):** `src/routes/index.tsx` has **uncommitted edits by Lyna** (not made by this research; `git status` → ` M src/routes/index.tsx`). She rewrote the About paragraph (now 95 words, with two `<br>`, « jeune femme de 20 ans » and « J'ai 20 ans », « je RA.CON.TE.Pas mal, non ? »), changed the scroll cue to « ↓ Scroll vers le bas », and her editor reformatted three `.catch(() => { })` calls and the filter `className`. **The planner must treat this text as the current default (TEXT-02) and must not lose it.** First task of the copy plan: commit her edit as-is (or have her commit it), then migrate. Her new `about.intro` breaks two locked rules (40–70 words; « J'ai 20 ans » banned, and the addendum removes it from the default). See Open Question 7.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Hero — cadre, grain, positionnement, Open Graph
- Cadre écran : cadre fin plein largeur autour de la vidéo, coins arrondis, bord `--plum` 1 px, vignette légère en `box-shadow` inset, bombé simulé par un dégradé radial ; aucun `filter`, aucun canvas ; la vidéo et le bouton pause restent cliquables, aucun overlay n'intercepte clics ni scroll tactile
- Grain : tuile 256×256 pré-rendue par le pipeline média (WebP < 10 Ko, entrée `grain` du manifeste), posée en `background-image` sur un calque `pointer-events: none`, opacité 6–8 %, animée par `background-position` en `steps()` sur une couche promue (`will-change: transform` ou `translateZ(0)`), retirée sous `prefers-reduced-motion`
- Positionnement + disponibilité sous le titre : slots `hero.tagline` (≤ 12 mots, ex. « Alternance chargée de communication · réalisation & montage ») et `hero.availability` (« Disponible à partir de … » ; slot vide → ligne masquée), DM Sans, style « carton de générique » (petites capitales espacées)
- Open Graph : `og.jpg` 1200×630 ≤ 200 Ko extrait d'une frame du hero par le pipeline, référencé dans `__root.tsx` avec le slot `meta.description` (140–160 caractères, valeur actuelle par défaut marquée TODO) ; `og:title`, `og:url`, `twitter:card` cohérents

#### Qui suis-je — portrait, positionnement, vidéo CV
- Portrait « viseur » en CSS pur : 4 équerres de coins `--gold`, point REC sakura pulsant lentement, balayage projecteur unique à l'entrée dans le viewport (`IntersectionObserver` + classe), rendu statique (équerres seules) sous `prefers-reduced-motion` ; image via `<Picture id="home/portrait">`
- 4 slots dans `copy.ts` : `about.intro` (40–70 mots), `about.goal` (objectif alternance, 1 phrase), `about.specialty` (spécialité vidéo, 1 phrase), `about.range` (polyvalence MMI, 1 phrase) ; textes actuels par défaut marqués TODO ; consignes « à bannir » : « J'ai 20 ans », « passionnée », « créative », « polyvalente » sans preuve
- Vidéo CV : carte à côté du portrait, poster extrait par le pipeline (entrée `cv` : poster + durée lue par ffprobe et écrite dans le manifeste généré), libellé « CV vidéo — m:ss » calculé depuis la durée, bouton play accessible (nom explicite), `preload="none"`, lecture au clic avec son, lecteur natif (pas de lecteur custom)
- Composition : deux colonnes ≥ 1024 px (portrait + carte CV / textes + grille de logos), une colonne en dessous ; rythme d'espacement existant ; classes `ornament-card` / `chapter-title` conservées

#### Grille de compétences — logos par métier
- Registre `src/data/tools.ts` : 13 outils `{ id, name, group: "video" | "design" | "web", initials }` — Vidéo : premiere-pro, after-effects, davinci-resolve, capcut · Design : photoshop, illustrator, indesign, lightroom, animate, canva · Web : figma, html-css, vs-code ; réutilisé tel quel par la phase 4 (PROJ-03)
- Composant `<ToolLogo>` : `<img src="/media/logos/<id>.svg" alt={name} width height loading="lazy">` avec repli `onError` vers un monogramme inline (cercle sakura, initiales Cormorant) ; jamais d'image cassée ; 3 groupes titrés Vidéo · Design · Web, sans niveau, barre ni pourcentage
- Placeholders : `npm run media` génère les monogrammes SVG `public/media/logos/<id>.svg` manquants et n'écrase JAMAIS un fichier présent ; Lyna remplace en déposant son fichier du même nom (`<id>.png` prioritaire sur `<id>.svg` si présent — le composant tente le PNG puis le SVG puis le monogramme, ou le manifeste enregistre le format présent)
- Icônes libres : Figma, HTML/CSS (HTML5 ou CSS3) et DaVinci Resolve copiées depuis `simple-icons` (CC0) dans `public/media/logos/` lors du même run (via `npx`/téléchargement ponctuel, fichier commité, aucune dépendance runtime ni devDependency permanente) ; Adobe ×7, Canva, CapCut, VS Code restent en monogramme jusqu'à réception des images
- Style : vignettes 44×44 px sur fond crème, bord 1 px `--border`, légende DM Sans 12 px, grille responsive (4 par ligne mobile, 6–7 desktop), survol = léger relèvement seulement

#### Textes (`copy.ts`) et mouvement
- `src/content/copy.ts` : objet typé par section (`meta`, `hero`, `about`, `skills`, `projects` (intitulés de section), `contact`, `footer`, `projectPages` pour les branches en dur) ; chaque slot = `{ text, todo, brief: { length, angle, avoid } }` ; les composants lisent `copy.x.y.text` ; `todo: true` n'a aucun rendu visible en production ; script `npm run copy:todo` (Node ESM) liste les slots à écrire
- Migration : tous les textes en dur de `index.tsx`, `__root.tsx` et des 4 branches de `$projectId.tsx` passent dans `copy.ts` avec leur valeur actuelle (marquée `todo` là où Lyna réécrit) ; les fautes de frappe évidentes de `projects.ts` sont corrigées (liste dans le SUMMARY) ; aucune chaîne utilisateur en dur ne subsiste dans les composants (les libellés fonctionnels des contrôles, ex. « Mettre en pause la vidéo », vivent aussi dans `copy.ts`)
- `prefers-reduced-motion` : hook `useReducedMotion()` via `useSyncExternalStore` (`getServerSnapshot` → `false` ; aucun branchement de rendu au premier passage → pas d'écart d'hydratation) + règle CSS globale `@media (prefers-reduced-motion: reduce)` neutralisant `.reveal`, le grain, le balayage du portrait, le REC et les transitions ; le hero garde son comportement de la phase 2 (poster statique + bouton)
- Transitions : `Reveal` conservé avec un volet vertical très court en plus du fondu ; aucune animation pilotée par le scroll ; couche `@layer cinema` dans `styles.css` regroupant grain, cadre, viseur, transitions ; `src/components/cinema/*` n'importe jamais depuis `src/data/`

#### Décisions ajoutées après le contrat UI (2026-09-28)
- Les valeurs par défaut des slots ne contiennent aucune phrase bannie : la phrase « J'ai 20 ans … » est retirée de `about.intro` (le reste du texte actuel est conservé, marqué todo) et `meta.description` est reformulée sans « créatif/créative » ; `npm run copy:todo` liste les slots todo ET signale toute phrase bannie présente dans un texte (sortie consultative, non bloquante, ajoutée à la fin de `npm run check` sans faire échouer le build)
- Détails fixés par l'UI-SPEC (font foi) : lignes « carton de générique » en capitales 12 px, graisse 500, interlettrage 0,12 em ; alias `--plum-ink: rgb(61 31 58)` pour le texte sur cartes (littéral déjà utilisé, pas une nouvelle couleur) ; le grain n'est animé que pendant la lecture du hero (le bouton pause l'arrête aussi) ; le point REC pulse deux fois puis reste fixe ; cadre plein largeur < 640 px ; poster CV en `<img loading="lazy">` (pas l'attribut `poster`, chargé trop tôt), lecture lancée dans le gestionnaire de clic ; vignettes de la grille en `alt=""` avec légende ; monogrammes SVG générés en Georgia (les polices web ne s'appliquent pas dans un SVG via `<img>`), monogramme inline de repli en Cormorant ; le balayage du portrait réutilise l'observateur de `Reveal` (`.reveal.in`) ; `<html lang="fr">`, `twitter:card = summary_large_image`, suppression de `twitter:site @Lovable`, `og:image` en URL absolue `https://lynarebahi.fr/media/og.jpg` (upscale ≈ 11 % depuis 1080 px accepté)

### Claude's Discretion
- Valeurs exactes (rayon du cadre, opacité du grain 6–8 %, durée du balayage, tailles) dans les bornes ci-dessus ; nommage des classes dans `@layer cinema`
- Choix de la frame du hero pour `og.jpg` et le poster CV (frame nette, non noire)
- Forme exacte du monogramme SVG (généré par un petit module `scripts/media/logos.mjs`)
- Découpage des slots `projectPages.*` pour les 4 branches en dur (un slot par bloc de texte)
- Emplacement du bouton pause du hero par rapport au cadre (reste fixe, hors cadre, comme en phase 2)

### Deferred Ideas (OUT OF SCOPE)
- Métadonnées de coins façon générique, serif calligraphique rouge, showreel 60–90 s (slot + bouton « Showreel — m:ss »), sous-titres CV → v2
- Logos par projet (chips), crédits type fin de film, process strip, vignettes animées, façade YouTube, Animate en « bonus » click-to-load, `affichepromo`/`prévention` → phase 4
- Contact (email + LinkedIn + CV PDF), `_headers`, QA mobile réelle → phase 5
- Nettoyage Prettier global des fichiers hérités → tâche quick hors milestone

The approved `03-UI-SPEC.md` is the visual contract. Every value in it (sizes, colours, slot table, component contracts, budgets) holds unless this research flags it below as a measured conflict (grain encoding, frame timestamps).
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| HERO-02 | Ligne de positionnement + disponibilité sous le titre | § Copy model (`hero.tagline`, `hero.availability`, SSR-decided hide), Pattern 5 (title card) |
| HERO-03 | Codes cinéma légers (cadre, grain tuilé pré-rendu, transitions) sans coût mobile ni overlay bloquant, désactivés sous reduced-motion | Pattern 3 (layer order, measured), Pattern 4 (frame + grain), grain recipe (4,034 B, measured), Pitfalls 1–4, CDP `elementFromPoint` check |
| HERO-04 | OG = frame du hero + description 140–160 caractères | Pipeline `stills` (og.jpg 1200×630, 87,616 B at t=16 s, byte-identical), Pattern 9 (head), description default at 144/155 characters |
| ABOUT-01 | Portrait animé CSS pur, statique sous reduced-motion | Pattern 6 (viewfinder, sweep hooked to `.reveal.in`) |
| ABOUT-02 | Positionnement via 4 slots | Copy model, about slots (intro default = 40 words once « J'ai 20 ans » is removed) |
| ABOUT-03 | Grille de logos par métier, monogrammes remplaçables | `tools.ts`, `scripts/media/logos.mjs` (prototype, deterministic, no-overwrite verified), simple-icons 16.33.0 slugs verified, Pattern 8 (`ToolLogo`) |
| ABOUT-04 | Vidéo CV libellée avec durée, poster, pas de préchargement | ffprobe 84.629 s → « 1:25 », CV poster (t=75 s, 45,526 B), Pattern 7, CDP resource-timing check (prod today loads the CV: `[["video",300]]`) |
| TEXT-01 | Tous les textes dans `src/content/copy.ts` | Full string inventory (75 + 106 literals found by an AST audit), `jsx-audit.mjs` as the gate |
| TEXT-02 | Textes actuels conservés par défaut + TODO ; fautes de `projects.ts` corrigées | Typo list, `copy:todo` design (Node 24 imports `.ts` natively, measured) |
| PERF-01 | reduced-motion global via hook SSR-safe + CSS | Pattern 2 (hook, hydration test in Chrome), Pitfall 2 (stale value in the mount effect, measured) |
</phase_requirements>

## Project Constraints (from CLAUDE.md)

- Stack is fixed: TanStack Start + Tailwind v4 (CSS-first, `@theme inline` in `src/styles.css`) + the Lovable Vite wrapper. Do not re-add plugins in `vite.config.ts`.
- npm only (bun is not installed). No new runtime or dev dependency in this phase (UI-SPEC budget: « New JS dependencies: none »).
- Cloudflare Workers: 25 MiB per asset; project rules: 12,000,000 B per MP4, 60 MiB total (`check-assets.mjs`, never waivable).
- Media: nothing deleted or visibly degraded.
- Copy is Lyna's: the code ships slots and briefs; defaults are current texts marked todo.
- Logos: Adobe marks are not freely available; named placeholders, Lyna supplies the files.
- Palette and fonts are kept (Cormorant Garamond + DM Sans; `--plum/--cream/--sakura/--gold/--border`).
- Conventions: named exports, inline prop types, `@/` imports, French UI copy, English identifiers, Prettier (100 cols, double quotes). ESLint and tsc do **not** flag unused code (`no-unused-vars` off, `noUnusedLocals: false`), so dead code (`SKILL_TAGS`, `.portrait-*`, `.grain::before`) must be removed by hand.
- Generated files are never hand-edited: `src/routeTree.gen.ts`, `src/data/media.generated.ts`.
- Route-tree invariant: no file created, deleted or renamed in `src/routes/`. Editing the content of `index.tsx`, `__root.tsx` and `$projectId.tsx` is fine (it does not change the tree). `src/router.tsx` is not a route file and may be edited.
- GSD workflow: edits happen through `/gsd-execute-phase`.

## Summary

The UI contract is detailed and mostly implementable as written. Research found six facts the planner must know, all measured:

1. **The grain encoding in the UI-SPEC does not work as written.** « Luma-only noise, lossy q≈40, < 10 KB » gives a tile whose noise has a standard deviation of about 13 grey levels (9,372 B). At 7 % opacity that is under 1 level on screen, so the grain is invisible. A **4-level quantised noise, generated at 128×128, upscaled ×2 (nearest) to 256×256 and saved as lossless WebP** is **4,034 B**, keeps a standard deviation of 37, and is byte-identical across runs. That meets the locked budget (WebP, 256×256, < 10 KB) with a visible grain.
2. **`@layer cinema` loses to every unlayered rule in `styles.css`.** The legacy classes (`.reveal`, `.quest-btn:hover`, `.quest-card:hover`…) are unlayered. Tailwind v4 puts a new layer *after* `utilities` by default. So the reduced-motion guard's `.reveal { opacity: 1 }` would be silently beaten by the old unlayered `.reveal { opacity: 0 }`. Fix, verified in a scratch Vite build: prepend `@layer theme, base, components, cinema, utilities;`, move the `.reveal` rules into `@layer cinema`, and use `!important` for hover transforms in the guard.
3. **`useReducedMotion()` is stale inside a mount effect.** Tested in headless Chrome with reduced motion on: the first render and the `[]` mount effect see `false`, and React re-renders with `true` right after. There is no hydration warning, as intended. But if `Hero` makes its autoplay decision from the hook value in its mount effect, the video starts playing for a reduced-motion user. The hook module must also export a live getter (`getReducedMotion()`) for effects.
4. **The UI-SPEC default frames are poor.** The CV at 00:00:03 is a letterboxed title card with black bands, and 00:00:15 has « j'ai 20 ans » burned in. The hero at 00:00:02 is fine, but 00:00:16 (waterfalls with a boat) reads far better as a thumbnail. Recommended: `og` at 16 s (87,616 B), CV poster at 75 s (Lyna on camera with a mic, 45,526 B at q80). Both are deterministic.
5. **Adding a `poster` to the `cv` video entry would re-encode the 10 MB CV** (entry options are hashed into the cache key). Put the frame stills in a separate manifest section (`stills`) and read `duration` with ffprobe when rendering the generated module, never through the encode cache.
6. **Every JSX literal can be audited with the TypeScript compiler already installed.** The `jsx-audit.mjs` prototype finds 26 literals in `index.tsx`, 3 in `__root.tsx`, 4 in `router.tsx`, 106 in `$projectId.tsx` and 0 in components. That gives TEXT-01 a mechanical gate: 0 after migration.

**Primary recommendation:** plan in four waves. (1) Copy migration and the pipeline, in parallel (they share no file). (2) The motion foundation and the hero (layer order, hook, frame, grain, head/OG). (3) « Qui suis-je » (viewfinder, CV card, skills grid). (4) Verification and deploy with the headless-Chrome harness. No new dependency.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Grain tile, og.jpg, CV poster, CV duration, logo placeholders | Offline build tooling (`npm run media`) | CDN/static (`public/media/**`, committed) | Deterministic assets made once from local masters; never at request or build time |
| Asset URLs and metadata (`stills`, `logos`, `videos.cv.duration`) | Generated data module (`src/data/media.generated.ts`) | — | Single source the components read; SSR-safe, no runtime I/O |
| Copy (all user-facing strings) | Static content module (`src/content/copy.ts`) | Frontend server (SSR renders it) | Rendered identically on server and client, so no hydration risk |
| `<head>` meta / OG | Frontend server (TanStack `head()` in `__root.tsx`, SSR) | — | Scrapers do not run JS; tags must be in the SSR HTML |
| Screen frame, grain, viewfinder, shutter, reduced-motion guard | Browser (CSS in `@layer cinema`) | — | Pure CSS, no JS per frame; motion is driven by CSS and one IntersectionObserver |
| Hero autoplay / pause state, grain pause coupling | Browser (React effect + `data-playing` attribute) | — | Needs `HTMLMediaElement`; SSR renders the paused state |
| Reduced-motion preference | Browser (`matchMedia` via `useSyncExternalStore`) | Frontend server (server snapshot `false`) | The server cannot know it; CSS handles the visual part |
| CV playback | Browser (native `<video preload="none">`, click handler) | Worker (`run_worker_first` Range path, unchanged) | 0 bytes before the click; the phase-2 Range handling stays |
| Logo fallback | Browser (`onError` → inline monogram) | Build tooling (placeholder always present) | The file always exists, so `onError` is only a safety net |

## Standard Stack

### Core (all already installed, versions from `node_modules`)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| react / react-dom | 19.2.5 | `useSyncExternalStore`, SSR hydration | Built-in external-store hook, the documented SSR-safe way to read browser state `[CITED: react.dev/reference/react/useSyncExternalStore]` |
| @tanstack/react-router | 1.168.21 | `head()` meta/links, `HeadContent` | Already used; meta dedupes by `name`/`property`, deepest route and last occurrence win `[VERIFIED: node_modules/@tanstack/react-router/dist/esm/headContentUtils.js]` |
| tailwindcss / @tailwindcss/vite | 4.2.2 | CSS-first theme, layers | Layer order confirmed by compiling and building `[VERIFIED: scratch build]` |
| sharp | 0.35.4 (pinned) | grain tile, og.jpg, CV poster | Already the image encoder of the pipeline |
| ffmpeg / ffprobe | 8.1.1 (Homebrew) | frame extraction, duration | Already the video encoder of the pipeline |
| typescript | 5.8.x (devDependency) | AST audit of hard-coded strings (`copy:todo --audit`) | Already installed, no new dependency |

### Supporting (not installed; fetched once into a temp directory)
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| simple-icons (npm tarball only) | 16.33.0 | 3 SVGs: `figma`, `html5`, `davinciresolve` | Only when one of `public/media/logos/{figma,html-css,davinci-resolve}.svg` is missing. `npm pack simple-icons@16.33.0` into `media-src/.tmp/`, extract, copy 3 files. Never added to `package.json`. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Lossless 4-level grain (4 KB) | Lossy q40 luma noise (UI-SPEC wording, 9.4 KB) | Lossy keeps SD ≈ 13, which is invisible at 7 % opacity (measured). Rejected. |
| `background-position` steps (locked) | `transform: translate3d()` steps on an oversized layer | Transform is compositor-only (web.dev), but the layer must overhang the frame, and on a 390×844 @3× phone the texture grows from ≈ 12 MB to ≈ 18–44 MB. Keep the locked approach: one isolated layer repainted 8×/s only while the hero plays. Switch only if the Performance panel shows the repaint. |
| `simple-icons` via `npm pack` | Hand-copy from simpleicons.org | Same files; `npm pack` with a pinned version is reproducible and scriptable |
| Native TS import in scripts (Node 24) | `vm.runInNewContext` literal parsing (as `verify-media.mjs` does) | Native import is simpler and handles helpers/`satisfies`; it needs Node ≥ 22.18 (the machine has 24.15). See Open Question 3. |

**Installation:** none. `npm pack` runs only inside `scripts/media/logos.mjs`, into `media-src/.tmp/` (gitignored, deleted at exit).

**Version verification:** `npm view simple-icons version` → `16.33.0`, license `CC0-1.0`, modified 2026-09-27, created 2017-09-17, no `postinstall` `[VERIFIED: npm registry]`.

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| simple-icons | npm | 9 years (2017-09-17) | not measured | github.com/simple-icons/simple-icons | [OK] (`slopcheck scan simple-icons --pkg npm`: OK, info-level « simple- » name flag, « package is established ») | Approved. Fetched with `npm pack` only, never installed; no `postinstall` script. |

**Packages removed due to slopcheck [SLOP] verdict:** none. (A first run without `--pkg npm` checked PyPI by mistake and reported SLOP; the npm check is the relevant one.)
**Packages flagged as suspicious [SUS]:** none.
Nothing is installed into the repo in this phase.

## Architecture Patterns

### System Architecture Diagram

```
                           ┌──────────────── offline, by hand: npm run media ────────────────┐
media-src/manifest.json ──►│ videos[] (unchanged) ─► encodeVideo ─► public/media/video/*.mp4   │
media-src/video/*.mp4   ──►│ stills[] ─► ffmpeg -ss <at> (class filter) ─► sharp ─► og.jpg,    │
                           │            cv-poster.webp                                          │
   seed/params (code) ────►│ grain ─► mulberry32 ─► raw buf ─► sharp lossless ─► grain.webp     │
src/data/tools.ts ────────►│ logos.mjs ─► exists? keep : (simple-icons | monogram) ─► logos/*.svg │
                           │ renderGenerated ─► ffprobe duration ─► src/data/media.generated.ts │
                           └────────────────────────────────┬──────────────────────────────────┘
                                                            │ committed files
Request ─► Worker (src/server.ts) ─► TanStack SSR ──────────┘
            │   __root head(): copy.meta + stills.og (absolute URL) ─► <head> og:*, lang="fr"
            │   index.tsx: Hero(copy.hero, stills.grain → CSS var) · About(copy.about, videos.cv, tools, logos)
            ▼
Browser: HTML (paused state, reveals hidden) ─► hydrate
   ├─ Hero effect: getReducedMotion()? stay paused : play() ─► data-playing=true ─► grain animates
   ├─ Reveal IO ─► .reveal.in ─► opacity/translate/clip-path shutter; .reveal.in .cinema-viewfinder::after sweep
   ├─ CvVideoCard click ─► controls+unmute+play() (same gesture) ─► first MP4 byte
   └─ ToolLogo <img> 404? ─► onError / mount check ─► inline monogram
CSS @media (prefers-reduced-motion) in @layer cinema ─► grain/REC/sweep hidden, reveals static
```

### Recommended Project Structure (new and changed files only)

```
src/
├── content/copy.ts                 # NEW: every user-facing string, typed slots, no imports
├── data/tools.ts                   # NEW: 13-tool registry, no imports (the pipeline imports it)
├── data/media.generated.ts         # REGENERATED: + stills, + logos, + videos.cv.poster/duration
├── hooks/use-reduced-motion.ts     # NEW: useReducedMotion() + getReducedMotion()
├── components/cinema/ScreenFrame.tsx  # NEW: frame + grain, props only, no data import
├── components/cinema/Viewfinder.tsx   # NEW: brackets + REC + sweep around children
├── components/CvVideoCard.tsx      # NEW
├── components/ToolLogo.tsx         # NEW
├── components/SkillsGrid.tsx       # NEW
├── components/Reveal.tsx           # unchanged API; CSS gains the shutter
├── routes/index.tsx                # content only: Hero/About rebuilt, all strings → copy
├── routes/__root.tsx               # head(): OG, lang="fr", notFound strings → copy
├── routes/projects/$projectId.tsx  # content only: 4 branches' strings → copy.projectPages
├── router.tsx                      # DefaultErrorComponent strings → copy.error
└── styles.css                      # layer order statement, @layer cinema, legacy dead CSS removed
scripts/
├── media.mjs                       # + stills section, + logos step, + duration, + generated exports
├── media/stills.mjs                # NEW: grain + frame stills (or inside images.mjs/video.mjs)
├── media/logos.mjs                 # NEW
├── verify-media.mjs                # + grain/og/poster/duration/logo checks
└── copy-todo.mjs                   # NEW: todo list, banned phrases, JSX audit (advisory)
public/media/{og.jpg, cinema/grain.webp, video/cv-poster.webp, logos/*.svg}   # NEW committed assets
```

### Pattern 1: `src/content/copy.ts` (types, helpers, sections)

**What:** one self-contained module (no imports; Node must be able to import it for `copy:todo`). Every leaf is a `Slot`. Nested groups are allowed (`skills.groups.video`, `projectPages.clip.block1Heading`).

```ts
// src/content/copy.ts — no imports: scripts/copy-todo.mjs imports this file natively (Node ≥ 22.18).
export type Brief = { readonly length: string; readonly angle: string; readonly avoid: string };
export type Slot = { readonly text: string; readonly todo: boolean; readonly brief: Brief };
type CopyTree = { readonly [key: string]: Slot | CopyTree };

/** Phrases flagged by `npm run copy:todo` in any slot text (advisory). */
export const BANNED: readonly { label: string; pattern: RegExp }[] = [
  { label: "« J'ai 20 ans »", pattern: /j['’]ai\s+20\s+ans/i },
  { label: "« passionné(e) »", pattern: /passionn[ée]e?s?\b/i },
  { label: "« créatif / créative »", pattern: /cr[ée]ati(?:f|ve|fs|ves)\b/i },
  { label: "« polyvalente » (sans preuve)", pattern: /polyvalente?s?\b/i },
  { label: "« univers »", pattern: /\bunivers\b/i },
  { label: "« réalisé dans le cadre de »", pattern: /r[ée]alis[ée]e?s?\s+dans\s+le\s+cadre\s+d/i },
  { label: "« N'hésitez pas à me contacter »", pattern: /n['’]h[ée]sitez\s+pas/i },
];

const FUNCTIONAL: Brief = { length: "—", angle: "libellé fonctionnel", avoid: "—" };
/** Final functional label (todo: false). */
const label = (text: string): Slot => ({ text, todo: false, brief: FUNCTIONAL });
/** Current text kept as default; Lyna rewrites it (todo: true). */
const draft = (text: string, brief: Brief): Slot => ({ text, todo: true, brief });

export const meta = {
  title: draft("Lyna Rebahi - Portfolio", { length: "≤ 60 caractères", angle: "nom + métier", avoid: "le nom du site seul" }),
  description: draft(
    "Portfolio de Lyna Rebahi, étudiante en BUT MMI : réalisation et montage vidéo, design graphique, web. Recherche une alternance de chargée de communication.",
    { length: "140–160 caractères", angle: "reprendre hero.tagline + alternance + disponibilité", avoid: "« créatif », le nom du site seul" },
  ),
  ogImageAlt: label("Extrait de la vidéo d'accueil du portfolio de Lyna Rebahi"),
  author: label("Lyna Rebahi"),
} as const satisfies CopyTree;

export const hero = {
  firstName: label("Lyna"),
  lastName: label("Rebahi"),
  tagline: draft("Alternance chargée de communication · réalisation & montage", { length: "≤ 12 mots, 1 ligne", angle: "[ce que je fais] + [formats] + [pour qui] ; dire « alternance » et la spécialité vidéo", avoid: "passionnée, créative, polyvalente, univers" }),
  availability: draft("", { length: "~12 mots, 1 ligne", angle: "poste · rentrée · rythme · lieu", avoid: "« à la recherche d'opportunités », dates vagues" }),
  // … cta, scrollCue, videoFallback, pauseLabel (UI-SPEC slot table)
} as const satisfies CopyTree;
// … about, skills, nav, projects, contact, footer, notFound, error, projectPages
```

**How components read it:** `import * as copy from "@/content/copy";` then `copy.hero.tagline.text`. This matches the locked « `copy.x.y.text` » wording without a default-export object.

**Rendering rules:**
- `todo` is never rendered.
- A slot whose `text.trim()` is empty is not rendered (hero availability, about slots, and its `dt`). The check runs during render from static data, so SSR and client agree (no mismatch, no CLS).
- Templates use named placeholders, filled by a tiny helper in `src/lib/` (not in `copy.ts`, to keep it data-only): `footer.text = "Lyna Rebahi Portfolio {year}"`, `projects.cardAriaLabel = "Voir le projet {title}"`, `projectPages.galleryAlt = "{title} — vue {n}"`. Example: `fill(copy.footer.text.text, { year })`.
- Markup inside a sentence (the `<em>` in « Qui *suis-je ?* », the h1 « Lyna *Rebahi* ») becomes two slots (`about.titleLead` / `about.titleEm`, `hero.firstName` / `hero.lastName`). Never HTML strings.
- The line break in the « En cours / de dev » sticker is kept as `"En cours\nde dev"`, rendered with `whitespace-pre-line`.
- The filter buttons: labels move to copy (`projects.filters.all/video/photo/branding/illustration/university`), but **the category values used for filtering stay in code** (`{ key: "video", category: "Vidéo" }`). If a label were used as the filter value, Lyna renaming « Vidéo » would silently break filtering.

**Bundle note (measured):** Rollup puts a module imported by two route chunks into a shared chunk. In a scratch build, `import * as copy` from `index.tsx` and `$projectId.tsx` produced one `copy-*.js` chunk containing **both** sections, loaded by the home page. `projectPages` is about 21,000 characters, about 5 KB gzip. That is the price of the locked single file. See Open Question 2.

### Pattern 2: `useReducedMotion()` and the live getter (PERF-01)

```ts
// src/hooks/use-reduced-motion.ts
import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/** Live value. Safe anywhere; returns false on the server. Use it inside effects and handlers. */
export function getReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(QUERY).matches;
}

/** Reactive value for effects that must re-run when the OS setting changes.
 *  First client render = server snapshot (false), then React re-renders with the real value.
 *  Never branch visible markup on it (CSS owns the visual side). */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getReducedMotion, () => false);
}
```

Measured in headless Chrome 153 with `prefers-reduced-motion: reduce` emulated (React 19 development build, SSR with `renderToString`, then `hydrateRoot`):

```
render reduce=false
mount effect: hook=false live=true      ← the [] effect sees the stale server snapshot
deps effect: hook=false
render reduce=true                      ← React re-renders right after hydration
deps effect: hook=true
```

No hydration warning and no recoverable error, **even when the render output branched on the value**. The branch variant printed the same log with no `onRecoverableError` call.

**Hero consumption (no behaviour change from phase 2):**

```tsx
const reduce = useReducedMotion();
useEffect(() => {
  const v = videoRef.current;
  if (!v) return;
  // Live read: the hook value is still the server snapshot (false) during this first effect.
  const reduceNow = getReducedMotion();
  // … same listeners as phase 2; onVisibility uses getReducedMotion() too
  v.muted = true;
  if (!reduceNow) v.play().catch(() => {});
  return () => { /* same cleanup */ };
}, []);

// OS setting switched to "reduce" during the visit: stop decorative playback.
useEffect(() => {
  if (reduce) videoRef.current?.pause(); // the user can still press play; userPaused stays false
}, [reduce]);
```

After the change, `grep -c "matchMedia" src/routes/index.tsx` must be `0`.

### Pattern 3: `@layer cinema` in Tailwind v4 (measured cascade)

Facts, compiled with `@tailwindcss/node` 4.2.2 and confirmed in a scratch `vite build` of the repo:
- Without a statement, Tailwind emits `@layer theme, base, components, utilities;` and a later `@layer cinema {}` is ordered **after `utilities`**. Cinema would then override utility classes set on the same element.
- **All unlayered CSS beats all layered CSS** (normal declarations). The current `.reveal`, `.quest-btn`, `.quest-card`, `.ornament-card`, `.hud-tag`, `.portrait-*` and `.grain::before` rules in `styles.css` are unlayered.
- With `@layer theme, base, components, cinema, utilities;` placed **before** `@import "tailwindcss" source(none);`, the built CSS keeps the order `properties, theme, base, components, cinema, utilities`. Tailwind utilities in JSX then refine cinema classes, which is the expected Tailwind behaviour.
- For `!important`, the order is reversed: an important declaration in an earlier layer beats important declarations in later layers and unlayered ones, and any important beats all normal declarations. So the guard's `!important` durations and `transform: none !important` win over the unlayered legacy hovers.

```css
/* src/styles.css — first line, before the import */
@layer theme, base, components, cinema, utilities;
@import "tailwindcss" source(none);
@source "../src";
/* … existing @theme inline, :root (+ --plum-ink: rgb(61 31 58);), @layer base … */
/* DELETE: .grain::before (feTurbulence + mix-blend-mode), .portrait-wrapper, .portrait-image*,
   the unlayered .reveal / .reveal.in lines (moved below). */

@layer cinema {
  /* Reveal: fade + rise + short vertical shutter (UI-SPEC §5) */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    clip-path: inset(-64px -64px 100% -64px);
    transition:
      opacity 0.9s ease,
      transform 0.9s ease,
      clip-path 0.32s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .reveal.in { opacity: 1; transform: none; clip-path: inset(-64px); }

  /* … .cinema-screen, .cinema-grain, .cinema-titlecard, .cinema-viewfinder, .cinema-rec, .cinema-tile … */

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    html { scroll-behavior: auto !important; } /* base layer sets smooth; important needed across layers */
    .reveal, .reveal.in { opacity: 1; transform: none; clip-path: none; }
    .cinema-grain, .cinema-rec, .cinema-viewfinder::after { display: none; }
    .quest-card:hover, .quest-btn:hover, .cinema-tile:hover { transform: none !important; }
  }
}
```

`html { scroll-behavior: smooth }` lives in `@layer base`, which comes before `cinema`, so a normal declaration in `cinema` wins without `!important`. `!important` is harmless and survives a later move of the base rule. The UI-SPEC's `.reveal` guard only works because `.reveal` moves into `cinema`. This is a required move, not a style choice.

Forbidden inside `@layer cinema` (gate: `awk '/@layer cinema \{/,0' src/styles.css | grep -cE "mix-blend-mode|backdrop-filter|(^|[^-])filter:|feTurbulence"` → `0`). The legacy `.quest-btn { backdrop-filter: blur(6px) }` and the phase-2 toggle's `backdrop-blur-[6px]` are outside the layer and stay.

### Pattern 4: Screen frame + grain (HERO-03)

```tsx
// src/components/cinema/ScreenFrame.tsx — never imports from src/data/
export function ScreenFrame({ grainUrl, playing }: { grainUrl: string; playing: boolean }) {
  return (
    <div
      className="cinema-screen"
      data-playing={playing ? "true" : "false"}
      style={{ "--cinema-grain-url": `url("${grainUrl}")` } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="cinema-grain" />
    </div>
  );
}
// Hero: <ScreenFrame grainUrl={stills.grain} playing={state === "playing"} />
// SSR renders state "paused" → data-playing="false" → grain paused until play() succeeds.
```

```css
@layer cinema {
  .cinema-screen {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    border: 1px solid var(--plum); border-radius: 16px; overflow: hidden;
    box-shadow: 0 0 0 100vmax rgb(61 31 58 / 0.92), inset 0 0 120px 24px rgb(61 31 58 / 0.55);
    background: radial-gradient(ellipse 70% 60% at 50% 45%, rgb(251 246 239 / 0.06) 0%, transparent 70%);
  }
  @media (min-width: 640px) { .cinema-screen { inset: 16px; } }
  @media (min-width: 1024px) { .cinema-screen { inset: 24px; } }

  .cinema-grain {
    position: absolute; inset: 0; pointer-events: none;
    background-image: var(--cinema-grain-url); background-repeat: repeat; background-size: 256px 256px;
    opacity: 0.07; will-change: transform;
    /* steps(1, end) per keyframe interval = hold each offset 125 ms: a jitter, not a slide */
    animation: cinema-grain 1s steps(1, end) infinite;
  }
  .cinema-screen[data-playing="false"] .cinema-grain { animation-play-state: paused; }
  @keyframes cinema-grain {
    0%    { background-position: 0 0; }
    12.5% { background-position: -96px -32px; }
    25%   { background-position: -32px -160px; }
    37.5% { background-position: -192px -64px; }
    50%   { background-position: -64px -224px; }
    62.5% { background-position: -160px -128px; }
    75%   { background-position: -224px -192px; }
    87.5% { background-position: -128px -96px; }
    100%  { background-position: 0 0; }
  }
}
```

- The frame is `absolute` inside `section#top` (not `fixed`), under the content (`z-10`), the toggle (`fixed z-30`) and the nav (`fixed z-40`). The legacy `grain` class is removed from the content wrapper.
- `animation: … steps(8)` on an 8-keyframe animation would split **each** interval into 8 steps (64 mostly linear positions). Use `steps(1, end)` with explicit keyframes for jitter.
- Hero section: `h-svh` (Tailwind v4 utility, `100svh`) replaces `h-screen`.

### Pattern 5: Title-card lines (HERO-02)

```tsx
const availability = copy.hero.availability.text.trim();
<Reveal delay={280}>
  <p className="mt-4 mx-auto flex max-w-xl flex-col items-center gap-2">
    <span className="cinema-titlecard">{copy.hero.tagline.text}</span>
    {availability ? <span className="cinema-titlecard">{availability}</span> : null}
  </p>
</Reveal>
```

```css
.cinema-titlecard {
  display: inline; font-family: var(--font-body); font-size: 0.75rem; line-height: 1rem;
  font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cream);
  background: rgb(61 31 58 / 0.85); padding: 4px 8px; border-radius: 2px;
  -webkit-box-decoration-break: clone; box-decoration-break: clone;  /* Safari needs the prefix */
}
```

Tailwind's `box-decoration-clone` emits both declarations (verified). Hand-written CSS must include the `-webkit-` form.

### Pattern 6: Viewfinder (ABOUT-01)

```tsx
// src/components/cinema/Viewfinder.tsx — the image comes in as children
export function Viewfinder({ children, recLabel }: { children: React.ReactNode; recLabel: string }) {
  return (
    <div className="cinema-viewfinder">
      {children}
      <span className="cinema-bracket cinema-bracket--tl" aria-hidden="true" />
      <span className="cinema-bracket cinema-bracket--tr" aria-hidden="true" />
      <span className="cinema-bracket cinema-bracket--bl" aria-hidden="true" />
      <span className="cinema-bracket cinema-bracket--br" aria-hidden="true" />
      <span className="cinema-rec" aria-hidden="true"><i className="cinema-rec-dot" />{recLabel}</span>
    </div>
  );
}
```

```css
.cinema-viewfinder { position: relative; overflow: hidden; border-radius: 4px; aspect-ratio: 4 / 5;
  width: 100%; max-width: 280px; margin-inline: auto; box-shadow: var(--shadow-quest); }
@media (min-width: 1024px) { .cinema-viewfinder { max-width: 352px; } }
.cinema-bracket { position: absolute; width: 24px; height: 24px; border: 0 solid var(--gold); pointer-events: none; }
.cinema-bracket--tl { top: 12px; left: 12px; border-top-width: 2px; border-left-width: 2px; }
/* … tr / bl / br … */
.cinema-rec-dot { display: inline-block; width: 8px; height: 8px; border-radius: 9999px; background: var(--sakura);
  animation: cinema-rec 2s ease-in-out 2; }            /* 2 pulses, then solid (animations end at the base style) */
@keyframes cinema-rec { 50% { opacity: 0.3; } }
.cinema-viewfinder::after { content: ""; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(105deg, transparent 35%, rgb(251 246 239 / 0.35) 50%, transparent 65%);
  transform: translateX(-100%); }
.reveal.in .cinema-viewfinder::after { animation: cinema-sweep 1.2s ease-out 0.4s both; }
@keyframes cinema-sweep { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
```

The sweep relies on the ancestor `Reveal` (`.reveal.in`), so there is no second observer (locked). The REC pulse starts at page load, not at reveal. That is acceptable (4 s total), and REC can reuse `.reveal.in` if the planner wants it synchronised: `.reveal.in .cinema-rec-dot { animation: … }`.

### Pattern 7: CV video card (ABOUT-04)

```tsx
export function CvVideoCard({ src, poster, duration }: { src: string; poster: string; duration?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const secs = duration ? Math.round(duration) : undefined;          // 84.629 → 85
  const mss = secs !== undefined ? `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}` : null; // "1:25"
  const iso = secs !== undefined ? `PT${Math.floor(secs / 60)}M${secs % 60}S` : undefined;       // "PT1M25S"

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.controls = true;       // same synchronous gesture: required for audio on iOS
    v.muted = false;
    v.play().catch(() => {});
    setStarted(true);
    v.focus();
  };
  return (
    <div className="relative aspect-video overflow-hidden rounded-[4px] bg-black shadow-[var(--shadow-quest)]">
      <video ref={videoRef} preload="none" playsInline controlsList="nodownload" width={1920} height={1080}
        className="absolute inset-0 h-full w-full" onError={() => setFailed(true)}>
        <source src={src} type="video/mp4" />
      </video>
      {!started && (
        <>
          <img src={poster} width={1280} height={720} loading="lazy" decoding="async" alt=""
            className="absolute inset-0 h-full w-full object-cover" />
          <button type="button" onClick={play} className="absolute inset-0 …">
            <span className="sr-only">{copy.about.cvPlay.text} </span>
            {/* 56px disc + play glyph, aria-hidden */}
            <span className="cinema-titlecard absolute bottom-4 left-4">
              {copy.about.cvLabel.text}{mss ? <> — <time dateTime={iso}>{mss}</time></> : null}
            </span>
          </button>
        </>
      )}
      {failed && ( /* copy.about.cvError + link to src, target=_blank rel=noopener */ )}
    </div>
  );
}
```

- `onError` on `<video>` does not fire for `<source>` failures in every browser (the error is raised on the `<source>` element). Attach `onError` to the `<source>` as well, or use `src` on the `<video>` itself `[ASSUMED]`. `<video src>` with `preload="none"` is also 0 bytes before play.
- Prod today loads the CV on page load: resource timing in headless Chrome shows `[["video",300]]` (`preload="metadata"`). After this phase the same probe must return `[]` until the click.
- `CvVideoCard` sits in `src/components/` (not `cinema/`), so importing `copy` is fine. It receives `videos.cv` fields as props from `About`.

### Pattern 8: `ToolLogo` and the logo map (ABOUT-03)

**Resolution strategy (recommended):** one URL per tool, decided by the pipeline. `media.mjs` looks for `public/media/logos/<id>.png`, then `<id>.svg`, and writes a `logos` map into the generated module. The component never probes. Lyna's two paths:
- She drops `<id>.svg` over the placeholder: works immediately, no command, no code (same URL).
- She drops `<id>.png`: she (or the next `npm run media`) regenerates the map. Document this in the SUMMARY.

```ts
// media.generated.ts (added by renderGenerated)
export const logos = {
  "after-effects": "/media/logos/after-effects.svg",
  // … 13 entries, keys sorted with byKey
} as const satisfies Record<string, string>;
```

```tsx
// src/components/ToolLogo.tsx
import { logos } from "@/data/media.generated";
export function ToolLogo({ id, name, initials, alt }: { id: string; name: string; initials: string; alt?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [broken, setBroken] = useState(false);
  // An error that fired before hydration is missed by React: check once after mount.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setBroken(true);
  }, []);
  if (broken) return <Monogram initials={initials} />;             // aria-hidden disc, Cormorant 16/500
  return (
    <img ref={ref} src={(logos as Record<string, string>)[id] ?? `/media/logos/${id}.svg`}
      width={28} height={28} loading="lazy" decoding="async" alt={alt ?? name}
      onError={() => setBroken(true)} />
  );
}
```

SSR renders the `<img>`; the swap happens only on the client after an error, so the first client render equals the server HTML. The sole-file-exists guarantee (the pipeline always writes a placeholder) makes the fallback rare.

`src/data/tools.ts` must have **no imports** (the pipeline imports it natively):

```ts
export type ToolGroup = "video" | "design" | "web";
export type Tool = { readonly id: string; readonly name: string; readonly group: ToolGroup; readonly initials: string };
export const tools = [
  { id: "premiere-pro", name: "Premiere Pro", group: "video", initials: "Pr" },
  // … UI-SPEC order, 13 entries
] as const satisfies readonly Tool[];
export type ToolId = (typeof tools)[number]["id"];
```

### Pattern 9: `<head>` in `__root.tsx` (HERO-04)

```tsx
import * as copy from "@/content/copy";
import { stills } from "@/data/media.generated";
const SITE = "https://lynarebahi.fr";

head: () => ({
  meta: [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: copy.meta.title.text },
    { name: "description", content: copy.meta.description.text },
    { name: "author", content: copy.meta.author.text },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "fr_FR" },
    { property: "og:url", content: `${SITE}/` },
    { property: "og:title", content: copy.meta.title.text },
    { property: "og:description", content: copy.meta.description.text },
    { property: "og:image", content: `${SITE}${stills.og}` },   // stills.og = "/media/og.jpg"
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:alt", content: copy.meta.ogImageAlt.text },
    { name: "twitter:card", content: "summary_large_image" },
    // twitter:site removed
  ],
  links: [ /* unchanged */ ],
}),
// RootShell: <html lang="fr">
```

- `HeadContent` dedupes by `name ?? property`, walking from the deepest route and from the **last** entry of each array. A child route can override a tag; the project pages inherit these root tags (including `og:url` = home) until phase 4 adds per-project heads.
- Keep `og:image` path stable (`/media/og.jpg`). Messengers cache previews per URL; a later regenerated frame at the same URL may show the old preview for a while `[ASSUMED]`. Acceptable for v1.
- The `index.tsx` route keeps its single hero-poster preload; `og.jpg` is not preloaded.

### Pattern 10: pipeline extensions (measured recipes)

**Manifest (`media-src/manifest.json`, local only — the directory is gitignored):**

```json
"stills": [
  { "id": "grain", "kind": "grain", "out": "media/cinema/grain.webp" },
  { "id": "og", "kind": "frame", "video": "hero", "at": 16, "out": "media/og.jpg",
    "width": 1200, "height": 630, "format": "jpeg", "quality": 80 },
  { "id": "cv-poster", "kind": "frame", "video": "cv", "at": 75, "out": "media/video/cv-poster.webp",
    "width": 1280, "height": 720, "format": "webp", "quality": 80 }
]
```

- Validate like `images`/`videos`: unique ids (shared id space), `claim()` every `out`, `video` must be a known video id, `at` a number within 0…duration, `format` ∈ {jpeg, webp}.
- Cache key per still = sha(source bytes or grain params) + JSON(options) + `PIPELINE_VERSION` + fingerprint(`STILL_SIGNATURE`, `SHARP_VERSIONS`, ffmpeg version). Adding the section does **not** change existing keys, so nothing re-encodes.
- **Do not add `poster` to the `cv` video entry**: `videoOptions(v)` includes `poster`, so the key changes and the 10 MB CV re-encodes (single-thread x264, slow preset).

**Grain (measured, `grain-final.mjs`):**

```js
// mulberry32: integer-only 32-bit PRNG → same sequence on every run and platform. Never Math.random.
function mulberry32(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const GRAIN = { seed: 0x5eed, cell: 128, size: 256, levels: [64, 107, 149, 192] };
export async function renderGrain({ seed, cell, size, levels } = GRAIN) {
  const rnd = mulberry32(seed);
  const raw = Buffer.alloc(cell * cell);
  for (let i = 0; i < raw.length; i++) {
    const g = (rnd() + rnd()) / 2;                         // triangular: mid levels more frequent
    raw[i] = levels[Math.min(levels.length - 1, Math.floor(g * levels.length))];
  }
  return sharp(raw, { raw: { width: cell, height: cell, channels: 1 } })
    .resize(size, size, { kernel: "nearest" })              // 2×2 CSS-px grains
    .webp({ lossless: true, effort: 6 })
    .toBuffer();                                            // write this buffer as-is
}
```

| Variant | Bytes | Decoded SD | Verdict |
|---------|-------|-----------|---------|
| iid luma noise, lossy q40 (UI-SPEC wording) | 9,372 | 12.7 | Invisible at 7 % |
| iid, amp 64, lossy q30 | 13,202 | 21.5 | Over budget |
| 256², 2 levels ±48, lossless | 8,262 | 48.0 | Fine 1-px grain, near the limit |
| **128² → 256² nearest, 4 levels, lossless** | **4,034** | **37.1** | **Recommended** (SHA-256 prefix `002d26bcc304ce8e`, identical on two runs) |

Opacity: start at 0.07. A static composite at 7 % is barely perceptible; the effect comes from the 8 Hz jitter. The final 0.06–0.08 value is a human visual check. Do not raise it above 0.08 (locked). Do not re-encode the buffer through a second `sharp().toFile()`: that silently switches to lossy q80 (measured 19,088 B).

**Frames (measured, `stills2.mjs`, identical bytes on two runs, no ICC, no EXIF):**

```js
// Frame at `at` seconds. Input seeking (-ss before -i) is frame-accurate when decoding.
// Hero master is HLG bt2020: reuse the hero colorspace filter WITHOUT fps (a still needs no rate).
const HERO_STILL_FILTER = "colorspace=all=bt709:iall=bt2020:itrc=bt2020-10:format=yuv420p";
run("ffmpeg", ["-v", "error", "-y", "-ss", String(at), "-i", srcAbs,
  ...(entry.class === "hero" ? ["-vf", HERO_STILL_FILTER] : []),
  "-frames:v", "1", "-update", "1", "-fflags", "+bitexact", "-flags", "+bitexact", pngTmp]);
await sharp(pngTmp)
  .resize({ width, height, fit: "cover", position: "centre", kernel: "lanczos3" })
  .toColourspace("srgb").removeAlpha()
  [format]({ quality, ...(format === "jpeg" ? { mozjpeg: true, progressive: true } : { effort: 6, smartSubsample: true }) })
  .toFile(outAbs);
```

| Still | Source | Time | Size | Notes |
|-------|--------|------|------|-------|
| og.jpg 1200×630 | `media-src/video/hero.mp4` (1080×574, HLG, 16.85 s) | **16 s** (UI-SPEC default 2 s) | **87,616 B** (2 s: 146,668 B; 5 s: 152,172 B) | Waterfalls + boat, wide, bright. Upscale ≈ 11 % and a 1.905 vs 1.882 ratio crop (≈ 7 px top/bottom at 1080). |
| cv-poster.webp 1280×720 | `media-src/video/56_Lyna_REBAHI_CVvideo.mp4` (1920×1080, 84.629 s) | **75 s** (UI-SPEC default 3 s) | **45,526 B** at q80 (37,378 B at q72) | Lyna on camera with a mic. 3 s is a letterboxed title card; 10 s is pure white; 15 s shows « j'ai 20 ans » burned in. |

Frame choice is a human confirmation item (contact sheets in scratch: `hero-sheet.jpg`, `cv-sheet.jpg`, `pick.jpg`).

**Duration:** read at `renderGenerated` time for every `media/video/` entry, from the committed output (deterministic):

```js
const probeDuration = (file) => {
  const { stdout } = run("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file]);
  const d = Number(stdout.trim());
  if (!Number.isFinite(d) || d <= 0) throw new Error(`ffprobe: bad duration for ${file}`);
  return Math.round(d * 1000) / 1000;          // 84.629 (cv), 16.867 (hero)
};
// VideoEntry gains `readonly duration?: number;` and, for cv, `poster` from stills["cv-poster"].
```

Measured: master and output CV are both `84.629000` s → `Math.round` → 85 s → « 1:25 », `PT1M25S`.

**Generated module additions:**

```ts
export type VideoEntry = { readonly src: string; readonly width: number; readonly height: number;
  readonly poster?: string; readonly duration?: number };
export const stills = {
  "cv-poster": "/media/video/cv-poster.webp",
  "grain": "/media/cinema/grain.webp",
  "og": "/media/og.jpg",
} as const satisfies Record<string, string>;
export const logos = { /* 13 */ } as const satisfies Record<string, string>;
```

Keep the `export const X = { … } as const satisfies …` shape: `verify-media.mjs` extracts each literal with a regex plus `vm.runInNewContext`.

**Logos (`scripts/media/logos.mjs`, prototype `logos.mjs` in scratch):**

```js
const FREE = { figma: "figma", "html-css": "html5", "davinci-resolve": "davinciresolve" };
const SIMPLE_ICONS = "simple-icons@16.33.0";   // pinned: same bytes every time
// For each tool of src/data/tools.ts (imported natively):
//   if <id>.png or <id>.svg exists → keep (never overwrite), record the URL
//   else if FREE[id] → copy icons/<slug>.svg from the pack, set fill="#3d1f3a", width/height 28, strip <title>
//   else → write the monogram
const monogram = (name, initials) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" role="img" aria-label="${esc(name)}">` +
  `<circle cx="16" cy="16" r="16" fill="#f2b3ba"/>` +
  `<text x="16" y="16" dy="0.35em" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" ` +
  `font-size="14" font-weight="500" fill="#3d1f3a">${esc(initials)}</text></svg>\n`;
// Pack fetch (only if a FREE file is missing): run("npm", ["pack", SIMPLE_ICONS, "--pack-destination", TMP_DIR, "--silent"])
// then run("tar", ["-xzf", tgz, "-C", TMP_DIR]); read `${TMP_DIR}/package/icons/<slug>.svg`.
```

- Measured: two runs produce identical files; an existing file is kept (tested with a custom `capcut.svg`). Sizes: monograms 328–346 B; figma 1,112 B; html5 346 B; davinci-resolve 1,784 B (all ≪ 8 KB).
- In simple-icons 16.33.0, `figma`, `html5`, `davinciresolve` and `css` exist; `css3`, all `adobe*`, `canva`, `capcut` and `visualstudiocode` do **not** (verified in the tarball). The UI-SPEC's HTML5 mark is the right pick for `html-css`.
- Licence: the package is CC0-1.0, but its `DISCLAIMER.md` says « that doesn't mean to imply that all icons within the project are also CC0 » and asks users to check per-icon licence data and brand guidelines. The JSON entries for Figma (guidelines `figma.com/using-the-figma-brand`), HTML5 (source w3.org) and DaVinci Resolve (source blackmagicdesign.com) carry no separate licence field. The marks remain trademarks of their owners. Nominative use in a « tools I use » grid is the usual practice `[ASSUMED]` (not legal advice).
- `media.mjs` must add every logo file to `produced` (or skip `media/logos/` in the orphan report), or each run prints 13 `orphan` warnings, and Lyna's own files would look like orphans.
- A missing network during the pack must not fail the whole run: warn and fall back to a monogram for that tool (the next run with network replaces it, since a generated monogram is not « Lyna's file »). Recommendation: record generated files in the cache (`logos: { id: { sha256, source: "monogram" | "simple-icons" } }`) so the pipeline can tell its own placeholders from Lyna's replacements.

**`verify-media.mjs` additions:** grain exists, WebP, 256×256, < 10,000 B; og.jpg JPEG 1200×630 ≤ 200,000 B, no ICC; cv-poster WebP 1280×720 ≤ 120,000 B; `videos.cv.duration` is a finite number > 0; `videos.cv.poster` exists; every `tools.ts` id has a file in `logos`, each ≤ 8,192 B, and each SVG contains no `<script`, no `on…=` attribute and no external `href` (see Security).

### Pattern 11: `npm run copy:todo`

```js
// scripts/copy-todo.mjs — advisory: always exit 0 (a future --strict may exit 1).
// Node ≥ 22.18 strips TypeScript types natively; copy.ts has no imports.
import * as copy from "../src/content/copy.ts";
const isSlot = (n) => n && typeof n.text === "string" && typeof n.todo === "boolean" && n.brief;
const walk = (node, path, out) => {
  for (const [k, v] of Object.entries(node)) {
    if (k === "BANNED" || typeof v !== "object" || v === null) continue;
    if (isSlot(v)) out.push([`${path}${k}`, v]); else walk(v, `${path}${k}.`, out);
  }
  return out;
};
const slots = walk(copy, "", []);
// 1) todo slots with their brief (length / angle / avoid)
// 2) banned phrases found in slot TEXT only (never in briefs, which quote them on purpose)
// 3) meta.description length outside 140–160 (HERO-04)
// 4) --audit: TS-AST scan of src/routes/**/*.tsx, src/router.tsx, src/components/**/*.tsx for JSX text,
//    string alt/aria-label/title/placeholder attributes and string JSX expressions containing a letter run
```

`package.json`:
```json
"copy:todo": "node scripts/copy-todo.mjs",
"check": "tsc --noEmit && vite build && node scripts/check-assets.mjs && wrangler deploy --dry-run && node scripts/copy-todo.mjs --advisory"
```

Measured: `await import("./copy.ts")` with `as const satisfies` and helper functions works on Node v24.15.0 with no flag and no warning.

Expected advisory hits with the current texts kept as defaults: `projectPages["sae-2"]` « l'univers mythologique » (`$projectId.tsx:504`) and `projectPages.clip` « réalisé dans le cadre du BUT MMI » (`:199`). This is the intended behaviour (advisory). See Open Question 4.

### Anti-Patterns to Avoid
- **Deciding autoplay from the hook value in a `[]` effect** (stale `false`, measured). Use `getReducedMotion()`.
- **Branching visible markup on `useReducedMotion()`.** It does not trigger a hydration error (measured), but it flashes the non-reduced markup first. CSS owns the visual side.
- **New unlayered CSS for cinema classes**, or cinema rules left after `utilities`.
- **Using copy labels as logic values** (filters).
- **Importing `@/…` from `copy.ts` or `tools.ts`**: Node cannot resolve the alias, so `copy:todo` and `npm run media` break.
- **Adding `poster` to the `cv` video entry** (re-encodes the CV).
- **`Math.random()` or `Date.now()` in any generator** (breaks byte-identical outputs).
- **A second observer or a scroll listener for the sweep** (locked: reuse `.reveal.in`).
- **Putting `position: fixed` elements inside a `Reveal`**: during the transition the wrapper has a `transform`, which makes it the containing block of fixed descendants, and the shutter's `clip-path` clips them.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Media-query state in React | `useState` + `useEffect(matchMedia)` | `useSyncExternalStore` | Tearing-free, SSR snapshot built in, subscription cleanup handled |
| Seeded noise | Custom LCG with floats | mulberry32 (12 lines, public domain, integer math) | Known-good distribution, bit-exact in V8 |
| Brand SVG paths | Tracing Figma/HTML5/Resolve marks | simple-icons 16.33.0 | Maintained, normalised 24×24 paths |
| Hard-coded string audit | Regex over TSX | TypeScript compiler API (already a devDependency) | Regex misses multi-line JSX text and mis-parses attributes |
| Headless verification | Puppeteer / Playwright install | System Chrome + CDP over Node 24's global `WebSocket` (scratch `rm/cdp.mjs`) | Zero dependency, already working against prod |
| OG image | Screenshot service | ffmpeg frame + sharp cover crop | Deterministic, offline |

**Key insight:** every new capability here already has a tool in the repo or the OS. The whole phase adds zero packages.

## Common Pitfalls

### Pitfall 1: Cinema layer beaten by legacy unlayered CSS
**What goes wrong:** the reduced-motion guard does not show `.reveal` content, the hover lift stays, and cinema defaults ignore utilities.
**Why:** unlayered rules beat layered ones; Tailwind puts a custom layer after `utilities`.
**How to avoid:** layer statement first line, move `.reveal` into `cinema`, `!important` for the hover `transform` in the guard (Pattern 3).
**Warning signs:** in DevTools, `.reveal` shows `opacity: 0` crossed out in `@layer cinema`.

### Pitfall 2: Stale reduced-motion value in the mount effect
**What goes wrong:** the hero plays for reduced-motion users.
**Why:** the hook returns the server snapshot during hydration; `[]` effects capture it (measured).
**How to avoid:** `getReducedMotion()` inside effects; the hook only drives `[reduce]` effects.
**Warning signs:** the CDP probe with emulated `reduce` reports `video.paused === false`.

### Pitfall 3: Grain invisible, or grain over budget
**What goes wrong:** the lossy tile loses its noise; raising the amplitude bursts the 10 KB budget.
**How to avoid:** the lossless 4-level recipe (4,034 B, SD 37). Budget check in `verify-media`.

### Pitfall 4: `steps(8)` on multi-keyframe grain
**What goes wrong:** the grain slides smoothly instead of jittering.
**How to avoid:** `steps(1, end)` with explicit keyframes.

### Pitfall 5: The CV loads before the click
**Why:** `preload="metadata"` today, a `poster` attribute, or `preload="auto"` defaults on some browsers.
**How to avoid:** `preload="none"`, no `poster` attribute, lazy `<img>`. CDP resource-timing check (prod baseline shows the request today).

### Pitfall 6: The pipeline re-encodes everything
**Why:** bumping `PIPELINE_VERSION` or changing `videoOptions` changes every key.
**How to avoid:** new `stills` section with its own keys; duration via ffprobe at render time; logos outside the cache key system.

### Pitfall 7: Orphan warnings and overwritten replacements
**Why:** `media.mjs` flags any `public/media` file not in `produced`; a naïve generator rewrites existing files.
**How to avoid:** add logos to `produced`; `existsSync` before any write; cache records which files are generated.

### Pitfall 8: Copy module unusable by Node
**Why:** an `@/` import, an `enum`, or a `namespace` in `copy.ts`/`tools.ts` (non-erasable TS or unresolvable alias).
**How to avoid:** no imports; only erasable syntax (`type`, `as const`, `satisfies`). `npm run copy:todo` fails fast if broken.

### Pitfall 9: Banned phrases re-enter through defaults
**What:** « J'ai 20 ans » (about.intro) and « créatif » (meta.description) are in today's text.
**How to avoid:** the addendum removes them; `copy:todo` reports any remaining one. Known remaining: 2 in `projectPages` (advisory).

### Pitfall 10: `box-decoration-break` without the prefix
**What:** in Safari, wrapped title-card lines lose their per-line band.
**How to avoid:** `-webkit-box-decoration-break: clone` (or the Tailwind utility, which emits both).

### Pitfall 11: Footer year hydration edge
`new Date().getFullYear()` renders on the Worker (UTC) and on the client (local time). Around New Year's midnight they can differ. Negligible for now, but do not copy this pattern for other dynamic strings.

### Pitfall 12: OG preview caching
Scrapers cache per URL; the first shares after deploy show the new image, and re-shares of already scraped links may keep the old « no image » preview for a while `[ASSUMED]`. Test with a URL never shared before (for example `https://lynarebahi.fr/?og=1`).

## Hard-coded String Inventory (TEXT-01)

Found with a TypeScript-AST audit (`jsx-audit2.mjs`: JSX text + string literals outside technical attributes). Proposed slot ids follow the UI-SPEC table.

### `src/routes/index.tsx`
| Line | Current text | Slot / action |
|------|--------------|---------------|
| 25–30 | `CATEGORIES`: Tout, Vidéo, Photo, Branding, Illustration, Projet universitaire | `projects.filters.{all,video,photo,branding,illustration,university}` (labels); values stay in code |
| 34 | `SKILL_TAGS` (6 tools) | **Remove** (replaced by `SkillsGrid`) |
| 39–41 | À propos / Créations / Contact | `nav.links.about/projects/contact` |
| 51 | PORTFOLIO | `nav.brand` |
| 64 | aria-label « Menu » | `nav.menuLabel` (✕/☰ glyphs stay inline, not text) |
| 141 | Votre navigateur ne supporte pas la vidéo HTML5. | `hero.videoFallback` |
| 159 | Mettre en pause la vidéo | `hero.pauseLabel` |
| 168 | Lyna / Rebahi | `hero.firstName` / `hero.lastName` |
| 173 | Designer Multimédia & Créatrice de Contenu | **Remove** (superseded by `hero.tagline` + `hero.availability`) |
| 178 | Voir mes projets | `hero.cta` |
| 182 | ↓ Scroll (**working tree: « ↓ Scroll vers le bas »**, Lyna's uncommitted edit) | `hero.scrollCue` (todo); default = her new text |
| 199 | Portrait de Lyna Rebahi | `about.portraitAlt` |
| 209 | Qui / suis-je ? | `about.titleLead` / `about.titleEm` |
| 212–222 | **Working tree (Lyna's uncommitted edit, 95 words):** « Faites connaissance avec Lyna REBAHI, jeune femme de 20 ans, étudiante en BUT MMI, en recherche d'une alternance en communication digitale. Ok ça c'était la partie formelle, si je devais me décrire avec mes mots : `<br><br>` Une cinéphile accro romantisme gothique et à l'audiovisuel … J'ai 20 ans, je crée … Je filme ; j'imagine ; je dessine ; je monte ; je crée des identités visuelles et bien sûr je RA.CON.TE.Pas mal, non ? » (HEAD version: 40 words once « J'ai 20 ans, » is removed) | `about.intro` (todo). Her text is the current default, but see Open Question 7: the addendum requires removing « J'ai 20 ans » from the default; she also wrote « jeune femme de 20 ans ». The two `<br>` become a paragraph break: store `\n\n` in the slot and render with `whitespace-pre-line`, or split into `about.introLead` + `about.intro`. |
| — | (new) | `about.goal`, `about.specialty(Label)`, `about.range(Label)`, `about.cvLabel`, `about.cvPlay`, `about.cvError`, `about.cvErrorLink`, `about.recLabel`, `skills.title`, `skills.groups.*` (UI-SPEC defaults) |
| 276 | `Voir le projet ${p.title}` | `projects.cardAriaLabel` = « Voir le projet {title} » |
| 297–299 | En cours / de dev | `projects.inProgress` = « En cours\nde dev » |
| 306 | Voir le projet &rarr; | `projects.cardCta` = « Voir le projet → » |
| 321 | "Tout" (initial filter state) | the `all` key, not a string |
| 335 | Mes Créations | `projects.title` |
| 404 | Erreur lors de l'envoi. Veuillez réessayer. | `contact.error` |
| 420 | Prenons contact | `contact.title` |
| 428 | Envie d'échanger autour d'une alternance ? Écrivez-moi. | `contact.lead` (todo) |
| 438/445/452 | Votre nom / Votre email / Votre message | `contact.placeholders.name/email/message` |
| 461 | ❀ Message envoyé / Envoi en cours... / Envoyer le message | `contact.sent/sending/submit` |
| 468 | lyna.rebahi@gmail.com | `contact.email` (the `mailto:` href is built from it) |
| 475/482 | LinkedIn / Instagram | `contact.linkedinLabel/instagramLabel` (URLs stay in code; phase 5 reworks contact) |
| 488 | Lyna Rebahi Portfolio {year} | `footer.text` |

### `src/routes/__root.tsx`
| Line | Current | Slot / action |
|------|---------|---------------|
| 10–20 | 404 / Page not found / The page you're looking for… / Go home | `notFound.code/title/body/cta` → « 404 », « Page introuvable », « Cette page n'existe pas ou a été déplacée. », « Retour à l'accueil » |
| 33, 36 | Lyna Rebahi - Portfolio | `meta.title` (todo) |
| 34, 37 | two different descriptions (116 and 72 chars) | one `meta.description` (140–160, no « créatif »), used for both `description` and `og:description` |
| 35 | author Lyna Rebahi | `meta.author` |
| 39–40 | twitter summary / @Lovable | `summary_large_image`; `twitter:site` removed |
| 59 | `lang="en"` | `lang="fr"` |
| 72–77 | effect appending `/favicon.ico?` + `Date.now()` | Not copy. Leave it; flagged for a later quick task (it adds a cache-busted favicon request on every visit and `favicon.ico` is gitignored) |

### `src/router.tsx` (`DefaultErrorComponent`)
Something went wrong / An unexpected error occurred. Please try again. / Try again / Go home → `error.title` « Une erreur est survenue », `error.body` « Un problème inattendu est survenu. Réessayez. » `[ASSUMED wording: functional label, not in UI-SPEC]`, `error.retry` « Réessayer », `error.home` « Retour à l'accueil ».

### `src/routes/projects/$projectId.tsx` (106 JSX literals + 5 palette names)
| Block | Lines | Count | Content |
|-------|-------|-------|---------|
| Common | 25, 30, 47, 624, 628, 644, 676 | 7 | « Projet introuvable. », « Retour au portfolio », « ← Retour aux projets », « Le projet », « Outils », « Voir le site en ligne », gallery alt template |
| `business-card-mockup` | 88–184 | 18 + 5 names | 4 headings, 6 alts, 3 paragraphs, palette (5 × name + note; hex stays in code) |
| `clip` | 186–316 | 24 | 6 « Bloc n — … » headings, 11 alts, 6 paragraphs |
| `sae-2` | 318–542 | 48 | 9 headings, 4 variant names + taglines + paragraphs, 17 alts, 2 iframe titles, « Visiter le site », 6 paragraphs |
| `sae-1` | 544–620 | 15 | 3 headings, 7 alts, 3 paragraphs, « Voir le site en ligne : » + URL text |

Keys: `projectPages.<projectId>.<blockKey>` (Claude's discretion), for example `projectPages.clip.block3Heading`, `projectPages.clip.block3Body`, `projectPages.clip.finalShotAlt`. Headings, labels and alts: `todo: false`. Narrative paragraphs: `todo: true`, with the FEATURES.md `project.*` brief.

Gate after migration: `node scripts/copy-todo.mjs --audit` reports **0** literals in `src/routes/**/*.tsx`, `src/router.tsx`, `src/components/**/*.tsx`.

## Typos (TEXT-02)

`src/data/projects.ts` (the data stays in this file):

| Line | Now | Fix |
|------|-----|-----|
| 82 | « …notamment au niveau des ombrestion : retranscrire un visage… » | Text corrupted since the initial commit (two sentences merged). Minimal repair: « …au niveau des ombres. L'enjeu : retranscrire un visage… ». **Flag to Lyna** (the missing words are unknown). |
| 105 | shortDescription « …(en cours de réalisation). » while the description says the clip is finished | « Clip vidéo — Blue, Yung Kai. » (contradiction, to confirm with Lyna) |
| 106 | « actuellement fini » | « terminé » |
| 106 | « J'ai voulu exploré » | « J'ai voulu explorer » |
| 119 | « Diagramme de GANTT » | « diagramme de Gantt » |
| 120 | tools « Visual Studio Code » | leave for phase 4 (tool chips map to `tools.ts` id `vs-code`) |

Texts moving from `$projectId.tsx` into `copy.projectPages` (fix while migrating):

| Line | Now | Fix |
|------|-----|-----|
| 247 | « À partir de 3h15 » (a 3:41 song) | « À partir de 3:15 » |
| 564 | « son déclinaison secondaire » | « sa déclinaison secondaire » |
| 585 | « identité colorielle » | « identité colorimétrique » (confirm) |

## Runtime State Inventory

This phase migrates strings and renames nothing stored. Only deployed and cached state is affected.

| Category | Items Found | Action Required |
|----------|-------------|-----------------|
| Stored data | None. No database; content is static in the bundle. | none |
| Live service config | Cloudflare Worker `tanstack-start-app`, production version `9b787c88-e735-4fc9-84dc-2b83f9b4faa2`. Scraper caches (Facebook/WhatsApp/LinkedIn/iMessage) hold the current « no og:image » preview of `lynarebahi.fr`. | Deploy at the end; test OG with a fresh URL; optionally re-scrape via the Facebook Sharing Debugger / LinkedIn Post Inspector (human) |
| OS-registered state | None. | none |
| Secrets/env vars | None touched (EmailJS keys unchanged, out of scope). | none |
| Build artifacts | `media-src/.cache.json` gains still/logo entries; `src/data/media.generated.ts` regenerated; new committed files under `public/media/{cinema,logos}/`, `public/media/og.jpg`, `public/media/video/cv-poster.webp`. | Run `npm run media` once, commit outputs with the code that reads them |

## Code Examples

The patterns above are the code examples. One more: the headless-Chrome verification harness, already working against production (scratch `rm/cdp.mjs`, 40 lines, zero dependencies: system Chrome + Node 24 global `WebSocket`):

```js
// Usage: node cdp.mjs <url> <reduce|no> <waitMs> '<async JS expression>'
// Launches Chrome headless with --remote-debugging-port, enables Runtime + Log,
// optionally Emulation.setEmulatedMedia({ features: [{ name: "prefers-reduced-motion", value: "reduce" }] }),
// navigates, collects console/exception/log entries, then Runtime.evaluate({ awaitPromise: true, returnByValue: true }).
```

Baseline on production today (2026-09-28): `{"lang":"en","paused":true,"og":null,"tw":"@Lovable"}` with reduced motion emulated (the hero stays paused, as phase 2 intended), no console errors, and `{"cvRequests":[["video",300]],"ctaHit":true}` without emulation (the CV is requested before any click).

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `useEffect` + `useState` for media queries | `useSyncExternalStore` with `getServerSnapshot` | React 18 | SSR-safe, no tearing |
| Live SVG `feTurbulence` grain + `mix-blend-mode` | Pre-rendered tiled image at low opacity | — (PITFALLS 12) | CPU repaint removed |
| `--experimental-strip-types` | Type stripping on by default | Node 23.6 / 22.18 `[CITED: nodejs.org docs, ASSUMED version boundary]` | Scripts can import `.ts` data files |
| `poster` attribute for click-to-play | Lazy `<img>` over `preload="none"` video | — | Poster bytes deferred with the rest of below-the-fold content |

**Deprecated/outdated in this repo:** `.grain::before`, `.portrait-wrapper`, `.portrait-image*`, `SKILL_TAGS`, the hero italic subtitle, `twitter:site @Lovable`, the `// Ajoute Link ici` comment on `index.tsx:1`.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `onError` on `<video>` misses `<source>` failures in some browsers | Pattern 7 | CV error message never shows; mitigated by also listening on `<source>` |
| A2 | React misses `<img>` error events fired before hydration | Pattern 8 | None: the mount check covers it either way |
| A3 | Scrapers keep old previews per URL for a while | Pitfalls 12, Pattern 9 | Confusing first test; use a fresh URL |
| A4 | Nominative use of Figma/HTML5/Resolve marks in a skills grid is acceptable | Pattern 10 | Lyna can swap to monograms by deleting 3 files (they regenerate as monograms) |
| A5 | Node's type stripping is default from 22.18 (the machine runs 24.15, verified working) | Pattern 11 | Only matters on another machine with Node 22.12–22.17 |
| A6 | `error.body` wording « Un problème inattendu est survenu. Réessayez. » | Inventory | Functional label; Lyna may reword |
| A7 | Texture-memory figures for a transform-based grain (≈ 18–44 MB at 390×844 @3×) | Alternatives | Only relevant if the locked approach is revisited |
| A8 | « identité colorimétrique » is the intended word; the portrait sentence repair | Typos | Wording, to confirm with Lyna |

## Open Questions (RESOLVED — 2026-09-28, see 03-CONTEXT.md « Décisions ajoutées après recherche » : 1 frames 16 s / 75 s → UAT ; 2 ≈ 5 Ko gzip acceptés ; 3 engines >=22.18 ; 4 phrases bannies des pages projet seulement signalées ; 5 disponibilité pré-remplie « septembre 2026 » (Lyna) ; 6 opacité 0,07 → UAT ; 7 texte About de Lyna gardé tel quel (Lyna))

1. **Frame timestamps for og.jpg (16 s) and the CV poster (75 s)**
   - What we know: both are sharp and bright; the UI-SPEC defaults (2 s / 3 s) are worse for the CV (black bands).
   - Recommendation: use 16 s / 75 s as manifest defaults (`at`), and add a human check « aperçu OG et poster CV » to the final verification. Changing them is a manifest edit plus `npm run media`.
2. **~5 KB gzip of `projectPages` text on the home page** (single `copy.ts`, measured shared chunk)
   - Recommendation: accept it for v1 (locked single file). If PERF work in phase 5 needs it, split `projectPages` into its own module, which changes TEXT-01 wording, so ask Lyna first.
3. **Node version for scripts** (`engines: ">=22.12"`, native `.ts` import needs ≥ 22.18)
   - Recommendation: bump `engines.node` to `">=22.18"` in the same plan that adds `copy:todo`. Alternatively reuse the `vm.runInNewContext` literal trick of `verify-media.mjs`, which fails on helper calls (`label()`, `draft()`) in `copy.ts`. So prefer the bump.
4. **Banned phrases still present in `projectPages` defaults** (« univers », « réalisé dans le cadre du »)
   - The addendum explicitly cleans only `about.intro` and `meta.description`; TEXT-02 keeps current texts.
   - Recommendation: keep them, marked `todo`; `copy:todo` lists them (advisory). Lyna rewrites.
5. **`hero.availability` default**
   - The CV video itself says « à partir de septembre 2026 » (burned-in subtitle at 75 s). Copy is Lyna's, so the default stays empty (line hidden). Mention it to her as a hint in the SUMMARY.
6. **Grain opacity (0.06–0.08)** is a human visual check on a real screen (static composites are nearly invisible by design).
7. **Lyna's new About paragraph (uncommitted) versus the locked slot rules**
   - What we know: she rewrote the paragraph by hand today (95 words, mentions her age twice, a « partie formelle » lead followed by a personal part). The locked rules say `about.intro` is 40–70 words, « J'ai 20 ans » is banned and must be removed from the default (addendum), and `about.goal` carries the job sought.
   - What's unclear: whether she wants her new text kept verbatim despite the brief.
   - Recommendation: keep her words, do not rewrite them (copy is hers). Mechanically: her first sentence (« … en recherche d'une alternance en communication digitale. ») is the natural default for `about.goal`; the rest goes to `about.intro`; remove only the literal « J'ai 20 ans, » as the addendum requires, keep `todo: true`, and let `copy:todo` flag « 20 ans » and the word count. Ask Lyna to confirm in the plan's checkpoint or the SUMMARY. Also fix « accro romantisme » → « accro au romantisme » and « RA.CON.TE.Pas » → « RA.CON.TE. Pas » only if she agrees (typos in her own new text).

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node | scripts, build | ✓ | v24.15.0 | — |
| npm | `npm pack`, scripts | ✓ | (bundled) | — |
| ffmpeg / ffprobe | frames, duration | ✓ | 8.1.1 (`/opt/homebrew/bin`) | — |
| sharp | grain, stills | ✓ | 0.35.4 (`node_modules/sharp/dist/index.cjs`) | — |
| tar (bsdtar) | extract simple-icons tarball | ✓ | macOS | — |
| Network to registry.npmjs.org | first simple-icons fetch | ✓ at research time | — | Monogram placeholder, retry on next run |
| Google Chrome (headless) | CDP verification | ✓ | 153.0.8010.53 | Manual DevTools checks |
| sips | dimension checks | ✓ | macOS (reads WebP and JPEG, verified) | `ffprobe -show_entries stream=width,height` |
| wrangler | dry-run, deploy, rollback | ✓ | 4.82.2 (pinned) | — |
| `media-src/` masters | stills | ✓ | hero.mp4 (16.85 s HLG), CV (84.629 s) | — (blocking if missing) |

Missing dependencies with no fallback: none.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None (no test runner in the project, by design). Verification = `tsc`, build, the project scripts (`verify-media`, `copy:todo`, `check-assets`), shell probes and the headless-Chrome CDP harness. |
| Config file | none |
| Quick run command | `npx tsc --noEmit && npm run copy:todo -- --audit && npm run verify-media` |
| Full suite command | `npm run check` (tsc, vite build, check-assets, wrangler dry-run, copy:todo advisory) + CDP probes against `npx vite build && npx wrangler dev --port 8787` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HERO-02 | Tagline rendered under h1; availability hidden when empty | smoke | `curl -s localhost:8787/ \| grep -c 'Alternance chargée de communication'` ≥ 1 and `grep -c 'cinema-titlecard' src/routes/index.tsx` ≥ 1 | ❌ Wave 0 (code) |
| HERO-03 | Frame + grain present, no forbidden CSS, grain < 10 KB, no overlay intercepts clicks | smoke + CDP | `grep -c '@layer cinema' src/styles.css` = 1; `awk '/@layer cinema \{/,0' src/styles.css \| grep -cE 'mix-blend-mode\|backdrop-filter\|feTurbulence'` = 0; `grep -c feTurbulence src/styles.css` = 0; `stat -f%z public/media/cinema/grain.webp` < 10000; `sips -g pixelWidth -g pixelHeight public/media/cinema/grain.webp` = 256/256; CDP: `elementFromPoint` at the CTA centre and at the pause-toggle centre returns them | ❌ Wave 0 |
| HERO-03 / PERF-01 | Reduced motion: grain/REC/sweep hidden, reveals static, hero paused | CDP (emulated media) | CDP `reduce`: `getComputedStyle(q('.cinema-grain')).display === 'none'`, `getComputedStyle(q('.cinema-viewfinder'),'::after').display === 'none'`, `getComputedStyle(q('.cinema-rec')).display === 'none'`, `q('video').paused === true`, first `.reveal` opacity `'1'` before any scroll | ❌ Wave 0 |
| PERF-01 | Hook exists, no direct matchMedia in the hero, no hydration warning | unit-ish + CDP | `grep -c useSyncExternalStore src/hooks/use-reduced-motion.ts` = 1; `grep -c matchMedia src/routes/index.tsx` = 0; CDP console on the prod build: 0 entries matching `/hydrat\|#418\|#423\|#425/i` (with and without `reduce`) | ❌ Wave 0 |
| HERO-04 | OG tags + image | smoke (post-build/post-deploy) | `curl -s URL \| grep -o '<meta property="og:image" content="[^"]*"'` = `https://lynarebahi.fr/media/og.jpg`; `curl -s -o og.jpg https://lynarebahi.fr/media/og.jpg && sips -g pixelWidth -g pixelHeight og.jpg` = 1200/630; `stat -f%z og.jpg` ≤ 200000; `curl -s URL \| grep -c 'twitter:site'` = 0; `grep -c 'summary_large_image'` = 1; description length checked by `copy:todo` (140–160) | ❌ Wave 0 |
| ABOUT-01 | Viewfinder brackets present; sweep bound to `.reveal.in`; static under reduce | smoke + CDP | `grep -c 'cinema-bracket' src/components/cinema/Viewfinder.tsx` = 4 (or ≥ 4); `grep -c '.reveal.in .cinema-viewfinder::after' src/styles.css` = 1; CDP (reduce) above | ❌ Wave 0 |
| ABOUT-02 | 4 slots exist and render | unit | `node -e "import('./src/content/copy.ts').then(c=>{for(const k of ['intro','goal','specialty','range']) if(!c.about[k]) process.exit(1)})"`; intro default 40–70 words (copy:todo can print word counts) | ❌ Wave 0 |
| ABOUT-03 | 13 logos, grouped, no level, fallback works, replaceable | smoke + CDP | `ls public/media/logos/*.svg \| wc -l` = 13; each `stat -f%z` ≤ 8192; `grep -ciE 'level\|niveau\|%' src/components/SkillsGrid.tsx` = 0; `npm run verify-media` (logo checks); CDP: 13 `img[src^="/media/logos/"]` inside `#about`; `img.dispatchEvent(new Event('error'))` → a monogram replaces it; replace test: copy a custom SVG over `capcut.svg` in a scratch copy, rerun `npm run media`, file unchanged | ❌ Wave 0 |
| ABOUT-04 | Label « CV vidéo — 1:25 », poster, 0 bytes before click | smoke + CDP | `grep -c 'preload="none"' src/components/CvVideoCard.tsx` = 1; `grep -c 'poster=' src/components/CvVideoCard.tsx` = 0; `stat -f%z public/media/video/cv-poster.webp` ≤ 120000; generated `duration` present; CDP: after scrolling to `#about`, `performance.getEntriesByType('resource').filter(e=>e.name.includes('cv-lyna-rebahi')).length === 0`; button accessible name contains `CV vidéo — 1:25` | ❌ Wave 0 |
| TEXT-01 | No hard-coded strings | static analysis | `node scripts/copy-todo.mjs --audit` → 0 literals; `test -f src/content/copy.ts` | ❌ Wave 0 |
| TEXT-02 | Defaults kept + todo; typos fixed | static | `npm run copy:todo` lists ≥ 1 todo slot and exits 0; `grep -cE 'ombrestion\|voulu exploré\|GANTT\|actuellement fini' src/data/projects.ts` = 0; `grep -c "J'ai 20 ans" src/content/copy.ts` = 0 | ❌ Wave 0 |

Manual-only (human UAT, cannot be automated here):
- Grain look and opacity on a real phone and a desktop screen (0.06–0.08); frame bezel look.
- Reduced motion with the real OS setting (macOS/iOS « Réduire les animations »), not only emulation.
- Tap-through on a real touch device: CTA, pause toggle, nav, CV card (PITFALLS 12: responsive mode uses desktop compositing).
- OG preview in a real messenger (WhatsApp/iMessage/LinkedIn) with a fresh URL.
- CV plays with sound on iPhone Safari after one tap.
- Frame choice for og.jpg / CV poster.

### Sampling Rate
- **Per task commit:** `npx tsc --noEmit` + the task's grep/stat probes.
- **Per wave merge:** `npm run check` (includes the `copy:todo` advisory tail) + `npm run verify-media`.
- **Phase gate:** full suite green, CDP probes green against `wrangler dev` **before** `npm run deploy`, then the same curl/CDP probes against `https://lynarebahi.fr`.

### Wave 0 Gaps
- [ ] `scripts/copy-todo.mjs` (todo list, banned phrases, description length, `--audit` AST scan).
- [ ] `verify-media.mjs` extensions (grain, og, poster, duration, logos, SVG safety).
- [ ] CDP harness: keep it outside the repo (scratch) or add it as `scripts/verify-browser.mjs` (no dependency). Planner's call; if committed, it must never run inside `check`/`deploy` (it needs Chrome and a running server).
- [ ] No framework install needed.

### Deploy procedure (end of phase, authorised, same rule as phase 2)
1. `npm run media` (once, after the pipeline plan) → commit outputs. `npm run verify-media` green.
2. `npm run check` green (the advisory tail prints the todo list; it does not fail).
3. Local SSR probes: `npx vite build && npx wrangler dev --port 8787` (free the port first, kill it after) + CDP probes.
4. `npx wrangler deployments list` → record the active version (expected `9b787c88-e735-4fc9-84dc-2b83f9b4faa2`).
5. `npm run deploy` **once**.
6. Post-deploy: `curl -sI https://lynarebahi.fr/media/og.jpg` → 200, `content-type: image/jpeg`; download + `sips` 1200×630; `curl -s https://lynarebahi.fr/ | grep -c 'lang="fr"'` = 1; tagline present; `for id in $(…13 ids…); do curl -s -o /dev/null -w "%{http_code} " https://lynarebahi.fr/media/logos/$id.svg; done` → all 200; `curl -sI https://lynarebahi.fr/media/cinema/grain.webp` → 200; CDP probes against prod (0 hydration errors, `cvRequests: []`, reduce checks).
7. Rollback if needed: `npx wrangler rollback 9b787c88-e735-4fc9-84dc-2b83f9b4faa2 --message "phase 3 rollback"`.

## Security Domain

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | — |
| V3 Session Management | no | — |
| V4 Access Control | no | — |
| V5 Input Validation | yes (build-time inputs) | Manifest validation in `media.mjs` (canonical paths, `claim()`); SVG content check in `verify-media` |
| V6 Cryptography | no | — |
| V12 Files and Resources | yes | Pipeline writes only under `public/`; `insideDir()` guard reused for every new `out` |
| V14 Configuration | yes | No secret added; OG origin hard-coded to the production domain |

### Known Threat Patterns for this stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Malicious SVG dropped in `public/media/logos/` (scripts run when the SVG URL is opened directly, same origin) | Tampering / Elevation | `<img>` never executes SVG scripts; `verify-media` rejects `<script`, `on*=`, `javascript:` and external `href` in logo SVGs; phase 5 `_headers` can add `Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'` on `/media/logos/*` |
| Supply chain through the simple-icons fetch | Tampering | Pinned version `16.33.0`, `npm pack` (no install scripts run), only 3 static files copied, committed and reviewable in the diff |
| Path traversal via manifest `out` | Tampering | Existing `insideDir` + `claim()` applied to `stills[].out` |
| `target="_blank"` link on CV error | Info disclosure | `rel="noopener"` (UI-SPEC) |
| Copy strings rendered as HTML | XSS | Copy is rendered as React text only; never `dangerouslySetInnerHTML`; markup via split slots |

## Suggested plan decomposition (for the planner)

| Wave | Plan | Owns files | Depends on |
|------|------|-----------|------------|
| 1 | **03-01 Copy migration** (first step: commit Lyna's uncommitted `index.tsx` edit as-is so it is not lost): `copy.ts` (all sections incl. `projectPages`), `scripts/copy-todo.mjs`, `package.json` (`copy:todo`, check tail, engines), migrate every string in `index.tsx` (current markup), `__root.tsx` (strings + `lang` + head keys), `router.tsx`, `$projectId.tsx`; typo fixes in `projects.ts`. Gate: audit = 0. | copy.ts, copy-todo.mjs, package.json, index.tsx, __root.tsx, router.tsx, $projectId.tsx, projects.ts | — |
| 1 | **03-02 Pipeline**: `tools.ts`, `stills` (grain, og, cv-poster), duration, `logos.mjs` + simple-icons fetch, generated `stills`/`logos`/`duration`, `verify-media` checks; run `npm run media`; commit assets. | scripts/**, src/data/tools.ts, src/data/media.generated.ts, public/media/** | — (parallel with 03-01: no shared file) |
| 2 | **03-03 Motion foundation + hero + head**: layer statement, `@layer cinema` (reveal shutter, frame, grain, titlecard, guard), dead CSS removal, `use-reduced-motion.ts`, `ScreenFrame`, hero rebuild, OG head. | styles.css, hooks/, components/cinema/ScreenFrame.tsx, index.tsx (Hero), __root.tsx (head) | 03-01, 03-02 |
| 3 | **03-04 Qui suis-je**: `Viewfinder`, `CvVideoCard`, `ToolLogo`, `SkillsGrid`, About rebuild, remaining cinema CSS. | components/*, styles.css, index.tsx (About) | 03-03 (same files) |
| 4 | **03-05 Verify + deploy**: full suite, CDP probes local then prod, `npm run deploy`, curl checks, rollback note, human UAT list. | none (or scripts/verify-browser.mjs) | 03-04 |

## Sources

### Primary (HIGH confidence)
- Repo code read in full: `src/routes/index.tsx`, `__root.tsx`, `$projectId.tsx`, `router.tsx`, `Reveal.tsx`, `Picture.tsx`, `styles.css`, `projects.ts`, `scripts/media.mjs`, `scripts/media/{util,video,images}.mjs`, `verify-media.mjs` (head), `check-assets.mjs` (head), `media-src/manifest.json`, `media.generated.ts`, `package.json`, `wrangler.jsonc`, `.gitignore`, `eslint.config.js`.
- Measurements in scratch: grain variants (sharp 0.35.4), frames (ffmpeg 8.1.1), logos prototype, Tailwind 4.2.2 compile + scratch `vite build` (layer order, shared `copy` chunk), React 19.2.5 hydration test in Chrome 153 via CDP, production CDP baseline.
- `node_modules/@tanstack/react-router/dist/esm/headContentUtils.js` (1.168.21): meta dedupe.
- simple-icons 16.33.0 tarball: `icons/`, `data/simple-icons.json`, `LICENSE.md` (CC0 1.0), `DISCLAIMER.md`.
- npm registry: `npm view simple-icons` (version, license, repo, dates, no postinstall); slopcheck npm scan: OK.

### Secondary (MEDIUM confidence)
- web.dev « How to create high-performance CSS animations » (only `transform` and `opacity` stay on the compositor): https://web.dev/articles/animations-guide
- react.dev `useSyncExternalStore` (`getServerSnapshot` runs on the server and during hydration): https://react.dev/reference/react/useSyncExternalStore
- Project research: `.planning/research/PITFALLS.md` §12, phase-2 `02-07-SUMMARY.md` (deploy and rollback procedure, production version).

### Tertiary (LOW confidence)
- Scraper cache behaviour, `<source>` error-event behaviour, trademark nominative use: training knowledge, flagged `[ASSUMED]`.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH. Nothing new is installed; versions were read from `node_modules` and the registry.
- Architecture: HIGH. Layer order, the hydration behaviour, the shared chunk and pipeline determinism were measured.
- Pitfalls: HIGH for 1–8 (measured); MEDIUM for 11–12.
- Copy inventory: HIGH (AST audit). Slot naming is Claude's discretion.

**Research date:** 2026-09-28
**Valid until:** 2026-10-28 (stable stack; re-check the simple-icons pin only if the fetch fails)

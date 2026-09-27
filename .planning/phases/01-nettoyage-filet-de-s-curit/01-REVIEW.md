---
phase: 01-nettoyage-filet-de-s-curit
reviewed: 2026-09-27T20:49:48Z
depth: standard
files_reviewed: 11
files_reviewed_list:
  - scripts/check-assets.mjs
  - scripts/check-assets.exceptions.json
  - scripts/inventory-assets.mjs
  - src/data/projects.ts
  - src/routes/index.tsx
  - src/routes/projects/$projectId.tsx
  - src/styles.css
  - package.json
  - knip.json
  - eslint.config.js
  - .prettierignore
findings:
  critical: 0
  warning: 8
  info: 10
  total: 18
status: issues_found
---

# Phase 01: Code Review Report

**Reviewed:** 2026-09-27T20:49:48Z
**Depth:** standard
**Files Reviewed:** 11
**Status:** issues_found

## Summary

Reviewed the two new Node ESM guard scripts in full, the exceptions JSON, and the diff (`ed9065c..HEAD`) of the route files, `styles.css`, `projects.ts` and the four config files.

Verified by execution (not just reading):

- `tsc --noEmit` passes; `src/components/ui`, `src/assets`, `server.js`, `bun.lockb` are really gone, so the 43 pruned dependencies leave no dangling imports.
- `node scripts/inventory-assets.mjs` → `REF=62 NAME-ONLY=0 UNREF=0 MISSING=0`, exit 0. Every `/assets|videos|media|animate/` literal in `src/` (including the percent-encoded `palette%20de%20couleurs.png` and the `ø` in `skøllrub_logo_final.png`) resolves to a file in `public/`.
- `node scripts/check-assets.mjs` against a fresh `dist/client` → `OK`, exit 0, three waivers consumed as documented. `ffprobe` confirms `hero.mp4` is `h264 / yuv420p10le` and the CV video is `yuv420p` with `ftyp,free,mdat,moov` (moov last), so the exceptions file is accurate.
- MP4 box walker exercised on a synthetic file with a 64-bit `largesize` box and a `size=0` (to-EOF) box → `['ftyp','moov','mdat']`, correct.
- `spawnSync("ffprobe", [...])` is used without `shell`, with the file path as a discrete argv entry that always starts with `/` — no command injection surface.
- The 25 MiB ceiling (line 119) and forbidden extensions (line 117) push straight into `errors` and never go through `report()`/`waived()`, so they cannot be waived regardless of what the JSON says. Confirmed.
- Prettier and ESLint pass on the new scripts, `eslint.config.js` and `knip.json`.
- All remaining custom CSS classes (`grain`, `quest-btn`, `chapter-title`, `portrait-*`, `reveal`, `quest-card`/`overlay`, `ornament-card`, `hud-tag`) and the shadcn theme tokens (`bg-primary`, `text-destructive`, `border-input`, …) are still referenced from `src/`. No dangling class references from the removed cursor/petal/badge/corner CSS.
- All four remaining `project.id === "…"` branches in `$projectId.tsx` (`business-card-mockup`, `clip`, `sae-2`, `sae-1`) still have a matching entry in `projects`; the removed `page-web-perso`/`mashup` entries had no detail branch, so no dead branches were left behind.

No blockers. The guard scripts are fundamentally sound and fail closed. The warnings below are robustness gaps in the safety net itself (misleading failure output, unvalidated exceptions schema, a guard that is not on the deploy path, a Node-version floor that is not declared) plus one dead dependency that survived the pruning and is explicitly hidden from knip. Info items are cleanup leftovers from the removals.

## Warnings

### WR-01: ffprobe non-zero exit is reported as `pix_fmt=` instead of as an ffprobe failure

**File:** `scripts/check-assets.mjs:94-96`, `scripts/check-assets.mjs:129-131`
**Issue:** `pixFmt()` only checks `r.error` (spawn failure, i.e. binary not found). When ffprobe *is* installed but exits non-zero — corrupt/truncated MP4, a container ffprobe cannot parse, or an audio-only `.mp4` that has no `v:0` stream — `r.stdout` is `""`, the function returns `""`, and the file is reported as `FAIL  videos/x.mp4 pix_fmt=` with the real cause (on `r.stderr`) discarded. Verified: `ffprobe -select_streams v:0 … <non-video file>` exits 1 with `Invalid data found when processing input` and empty stdout. The result still fails closed, but the message sends the person debugging in the wrong direction (they will look at pixel formats, not at a broken file), and an audio-only asset would be flagged for the wrong reason.
**Fix:**
```js
function pixFmt(file) {
  const r = spawnSync("ffprobe", [/* … */], { encoding: "utf8" });
  if (r.error) return null; // binary missing → graceful skip
  if (r.status !== 0) return { error: r.stderr.trim() || `exit ${r.status}` };
  const v = r.stdout.trim().split(/[\n,]/)[0].trim();
  return v ? { pixFmt: v } : { error: "no video stream" };
}
// call site
const pf = pixFmt(abs);
if (pf === null) ffprobeMissing = true;
else if (pf.error) errors.push(`${rel} ffprobe failed: ${pf.error}`);
else if (pf.pixFmt !== "yuv420p") report(rel, "pix_fmt", `${rel} pix_fmt=${pf.pixFmt}`);
```

### WR-02: Exceptions file is consumed without any schema validation

**File:** `scripts/check-assets.mjs:29-31`, `scripts/check-assets.mjs:135-145`
**Issue:** Three distinct failure modes, none of which produce a clear message:
1. An entry missing `path` or `waive` crashes the script with `TypeError: Cannot read properties of undefined (reading 'includes')` (verified) — exit 1 with a stack trace rather than a diagnostic.
2. An unknown rule name is silently ignored. `"waive": ["hard"]` or `"waive": ["forbidden"]` has no effect (correct, per the never-waivable requirement) but the author is never told, so they may believe the 25 MiB ceiling was lifted until the build fails later. Similarly a typo like `"pixfmt"` silently fails to waive.
3. If someone deletes the file in phase 2 ("Empty this list in phase 2") instead of emptying the array, `readFileSync` throws ENOENT.
**Fix:**
```js
const RULES = new Set(["size", "faststart", "pix_fmt"]);
const exceptions = existsSync(EXCEPTIONS_FILE)
  ? (JSON.parse(readFileSync(EXCEPTIONS_FILE, "utf8")).exceptions ?? [])
  : [];
for (const [i, e] of exceptions.entries()) {
  const bad =
    typeof e?.path !== "string" ||
    !Array.isArray(e.waive) ||
    e.waive.some((r) => !RULES.has(r));
  if (bad) {
    console.error(`check-assets: invalid exception #${i}: ${JSON.stringify(e)} (waive ⊆ ${[...RULES]})`);
    process.exit(2);
  }
}
```

### WR-03: `.assetsignore` is treated as an exact-path list; Cloudflare treats it as gitignore-style globs

**File:** `scripts/check-assets.mjs:33-41`, `scripts/check-assets.mjs:111`
**Issue:** `ignored.has(rel)` only matches a line that is byte-identical to the relative path. Cloudflare Workers Static Assets interprets `.assetsignore` with gitignore semantics (`*.map`, `videos/`, `**/raw/**`, leading `/`, negation). Today the generated file only contains `wrangler.json` and `.dev.vars` so it happens to work, but the moment a glob or a directory entry is added (e.g. to exclude source maps or a scratch folder from deploy), the script and Cloudflare disagree about which files are served: the script will count and can FAIL on files Cloudflare never uploads.
**Fix:** Convert each pattern to a RegExp with the common gitignore subset (`*`, `**`, trailing `/` = directory prefix, leading `/` = anchor, `!` = negate), or, simplest and exact, spawn `git check-ignore --no-index` is not available for arbitrary ignore files — so a minimal matcher:
```js
const toRe = (p) =>
  new RegExp(
    "^" +
      p.replace(/^\//, "").replace(/\/$/, "/**")
        .replace(/[.+^${}()|[\]\\]/g, "\\$&")
        .replace(/\*\*/g, "\0").replace(/\*/g, "[^/]*").replace(/\0/g, ".*") +
      "$",
  );
const ignoreRes = [...ignored].map(toRe);
const isIgnored = (rel) => ignoreRes.some((re) => re.test(rel));
```

### WR-04: Missing ffprobe only downgrades to a warning — no strict mode for CI

**File:** `scripts/check-assets.mjs:77`, `scripts/check-assets.mjs:94`, `scripts/check-assets.mjs:130`, `scripts/check-assets.mjs:138`
**Issue:** On any machine without ffprobe (a fresh CI runner, Cloudflare Workers Builds), the `pix_fmt` rule is skipped and `check-assets: OK` is printed with a single `WARN ffprobe not found` line that nobody reads in a green pipeline. The one rule that protects against the actual hero-video problem (`yuv420p10le` does not play in Safari/iOS hardware decoders) is therefore only enforced on the developer's laptop. Graceful skip is reasonable locally, but there must be a way to make the skip fatal.
**Fix:**
```js
const STRICT = process.env.CHECK_ASSETS_STRICT === "1" || process.env.CI === "true";
// …
if (ffprobeMissing) {
  const msg = "ffprobe not found: pix_fmt NOT checked";
  if (STRICT) errors.push(msg); else warns.push(msg);
}
```
and document `ffprobe` as a requirement in the script header / README.

### WR-05: The guard is not on the deploy path

**File:** `package.json:13`
**Issue:** `check` runs `tsc && vite build && check-assets && wrangler deploy --dry-run`, but there is no `deploy` script, so the actual deploy is a bare `npx wrangler deploy` (or the Cloudflare dashboard build) that never executes `check-assets.mjs`. A 26 MiB re-encode in phase 2 will be caught only if someone remembers to run `npm run check` first. The safety net exists but nothing forces traffic through it.
**Fix:**
```json
"scripts": {
  "check": "tsc --noEmit && vite build && node scripts/check-assets.mjs",
  "deploy": "npm run check && wrangler deploy"
}
```
If Cloudflare Workers Builds is the deploy mechanism, set its build command to `npm run check` (the build itself is inside `check`) and keep `wrangler deploy --dry-run` out of `check` (it re-parses the config but adds nothing the real deploy would not).

### WR-06: `URL_RE` in the inventory reverse-scan is over-greedy and produces false `MISSING` (exit 1)

**File:** `scripts/inventory-assets.mjs:70-76`
**Issue:** `/\/(?:assets|videos|animate|media)\/[^"'`\n]+/g` stops only at a quote or newline. Verified against four inputs:
- `background: url(/assets/hero.png);` → matches `/assets/hero.png);` → reported MISSING.
- `<p>Voir /assets/a.png et /assets/b.png</p>` (JSX text) → one match `/assets/a.png et /assets/b.png</p>` → MISSING.
- `"https://cdn.example.com/assets/x.png"` → matches `/assets/x.png` → MISSING even though it is an external URL.
Today `src/` contains none of these shapes, so the run is clean, but this is the tool that will be used during the phase 2 re-encode/rename work, and a single unquoted `url()` in `styles.css` or a sentence in a French description mentioning `/assets/` will turn it red for a non-existent file.
**Fix:**
```js
// stop at whitespace, quotes, brackets; do not match when preceded by a URL/path char
const URL_RE = /(?<![\w.:/-])\/(?:assets|videos|animate|media)\/[^\s"'`()<>]+/g;
```

### WR-07: `tw-animate-css` is a dead dependency that survived the pruning and is hidden from knip

**File:** `package.json:24`, `src/styles.css:3`, `knip.json:4`
**Issue:** `@import "tw-animate-css";` is still in `styles.css`, but no `animate-*` (or any other utility from that package) is used anywhere under `src/` — the only consumer was the deleted shadcn `ui/` kit (accordion, dialog, sheet, …). `grep -rn 'animate-' src` returns nothing. The phase explicitly listed the package in `knip.json` `ignoreDependencies`, so knip will never report it. `tailwindcss` in the same ignore list is legitimate (CSS-only import); this one is not.
**Fix:** Remove line 3 of `src/styles.css`, drop `tw-animate-css` from `dependencies`, and remove it from `knip.json` `ignoreDependencies`. Re-run `vite build` and confirm the CSS bundle shrinks.

### WR-08: `import.meta.dirname` requires Node ≥ 20.11 but no engine floor is declared

**File:** `scripts/check-assets.mjs:15`, `scripts/inventory-assets.mjs:9`, `package.json`
**Issue:** Both scripts derive `ROOT` from `import.meta.dirname`. On Node 18.x or ≤ 20.10 (still common defaults on CI images and some Cloudflare build presets) that property is `undefined`, `join(undefined, "..")` throws `TypeError [ERR_INVALID_ARG_TYPE]`, and the guard dies with an opaque stack trace. `package.json` has no `engines` field and the repo has no `.nvmrc`/`.node-version` (CLAUDE.md already notes this). The local machine is Node 24 so nobody has hit it yet.
**Fix:** Either declare the floor:
```json
"engines": { "node": ">=20.11" }
```
plus a `.nvmrc` with `22`, or make the scripts portable:
```js
import { fileURLToPath } from "node:url";
const ROOT = fileURLToPath(new URL("..", import.meta.url));
```

## Info

### IN-01: Orphaned section header and double blank line after removing `page-web-perso`

**File:** `src/data/projects.ts:17-20`
**Issue:** `// --- SITE WEB ---` is now followed by two empty lines and then `// --- PROTOTYPE SITE WEB ACCESSIBLE ---`. The first header labels nothing. CLAUDE.md documents the section-comment convention; an empty section breaks it.
**Fix:** Delete lines 17-19 (keep the `PROTOTYPE` header), or rename it to `// --- SITE WEB ---` and drop the second header.

### IN-02: `Project.category` union has dead members and one un-filterable value

**File:** `src/data/projects.ts:4`, `src/routes/index.tsx:15`
**Issue:** After the removals, no project uses `"Design"` or `"SAE"`, and `"Site Web"` (used by `prototype-site-accessible`) has no chip in `CATEGORIES`, so that project is only reachable under `Tout`. The union and the chip list have drifted apart; the type no longer documents reality.
**Fix:** Prune the union to the categories actually in use and either add `"Site Web"` to `CATEGORIES` or recategorize the prototype. Consider deriving `CATEGORIES` from `Project["category"]` so they cannot drift again.

### IN-03: Stale comments left in a dead-code cleanup phase

**File:** `src/routes/index.tsx:1`, `src/routes/index.tsx:134`
**Issue:** Line 1 still carries `// Ajoute Link ici`, which CLAUDE.md explicitly calls out as an editing artifact not to be modelled. Line 134 says `{/* Circular portrait */}` while the CSS block it wraps is titled "Portrait image container - RECTANGULAR" and has `border-radius` for a rounded rectangle. Both survived a phase whose purpose was removing dead/misleading code from this file.
**Fix:** Delete the line-1 comment; delete or correct the line-134 comment.

### IN-04: Stale-exception check only detects "file gone", not "waiver no longer needed"

**File:** `scripts/check-assets.mjs:135-137`
**Issue:** The `$comment` says the list must be emptied in phase 2. After `hero.mp4` is re-encoded to `yuv420p`, the file still exists, the `pix_fmt` rule no longer fires, and the waiver sits there unused with nothing telling anyone. Also, `existsSync(join(DIST, e.path))` compares the JSON's NFC path with the on-disk name without normalizing; on a Linux CI runner with NFD file names this produces a spurious "stale" warning (macOS is normalization-insensitive, so it is invisible locally).
**Fix:** Track consumption inside `report()` (`used.add(rel + ":" + rule)`), then after the walk warn for every `(path, rule)` in `exceptions` that was never consumed. For the existence check, compare against the NFC-normalized set of walked `rel` paths instead of calling `existsSync`.

### IN-05: Only `.mp4` gets the faststart / pix_fmt inspection

**File:** `scripts/check-assets.mjs:123`
**Issue:** `.mov` and `.m4v` are the same ISO-BMFF container and would benefit from the same checks; `.webm` is skipped entirely. None are present today, but a `.mov` export dropped into `public/videos` in phase 2 would pass with only the size rule applied.
**Fix:** `const BMFF = new Set([".mp4", ".m4v", ".mov"]);` and use it for the faststart/pix_fmt block; consider adding `.mov`/`.webm` to `FORBIDDEN` if the policy is "only mp4 is served".

### IN-06: `walk(PUBLIC)` is executed twice and REF classification is substring-based

**File:** `scripts/inventory-assets.mjs:52`, `scripts/inventory-assets.mjs:68`, `scripts/inventory-assets.mjs:62-63`
**Issue:** The same directory tree is walked and normalized twice to build `publicFiles` and `existing`. Separately, `corpus.includes(url)` treats `/assets/a.png` as referenced if the corpus contains `/assets/a.png.bak` or `/assets/a.pngx`; and `corpus.includes(name)` for NAME-ONLY will match a short basename anywhere in prose. Acceptable for a hand-review tool, but worth a boundary-aware check now that the tool is the basis for quarantine decisions.
**Fix:** Walk once into `const all = walk(PUBLIC)` and derive both lists. For the match, use the same lookahead the reverse-scan should use: `new RegExp(escape(url) + "(?![\\w.-])").test(corpus)`.

### IN-07: `@custom-variant dark` has no consumer

**File:** `src/styles.css:5`
**Issue:** `dark:` is not used in any `.tsx`, and there is no `.dark` class toggling anywhere. It is a leftover of the shadcn scaffold whose consumers were deleted in this phase. Harmless (Tailwind emits nothing for an unused variant), but it is exactly the kind of dead config the phase set out to remove.
**Fix:** Delete line 5.

### IN-08: `knip` is configured but neither installed nor scripted; `wrangler` is invoked but not declared

**File:** `knip.json`, `package.json:13`, `package.json` devDependencies
**Issue:** `knip.json` exists, but `knip` is not in `devDependencies` and there is no `knip` script, so it can only run via `npx knip` against an unpinned network version. Meanwhile `check` runs `wrangler`, which resolves only because it is a transitive dependency of `@cloudflare/vite-plugin`; knip itself will report it as an unlisted binary the first time it runs.
**Fix:** `npm i -D knip wrangler`, add `"knip": "knip"` to scripts. Pin `wrangler` to the `^4.x` range that `@cloudflare/vite-plugin` peers on.

### IN-09: The new Node scripts are outside ESLint's recommended-rules coverage

**File:** `eslint.config.js:12`
**Issue:** The `extends: [js.configs.recommended, …]` block is restricted to `**/*.{ts,tsx}`. `scripts/*.mjs` and `eslint.config.js` are only visited by the Prettier plugin, so `no-undef`, `no-unreachable`, `no-constant-condition`, etc. never run on the two guard scripts. (`@typescript-eslint/no-unused-vars` is off project-wide anyway, per CLAUDE.md.)
**Fix:**
```js
{
  files: ["**/*.{js,mjs}"],
  extends: [js.configs.recommended],
  languageOptions: { ecmaVersion: 2022, sourceType: "module", globals: globals.node },
},
```

### IN-10: `npm run lint` is red with 609 pre-existing Prettier errors, so `check` omits `lint`

**File:** `package.json:13` (and `src/routes/projects/$projectId.tsx`, `src/routes/index.tsx`, `src/data/projects.ts`, `src/routes/__root.tsx`, `src/components/Reveal.tsx`)
**Issue:** `eslint .` reports 609 `prettier/prettier` errors (571 in `$projectId.tsx`, 20 in `index.tsx`, 11 in `projects.ts`, 6 in `__root.tsx`, 1 in `Reveal.tsx`) plus one `react-refresh/only-export-components` warning in `router.tsx`. None were introduced by this phase (its diff in those files is deletions-only), but the new `check` script conspicuously leaves `lint` out, presumably because it cannot pass. This means the one script that is supposed to be the gate does not gate formatting or hook-rule violations.
**Fix:** Run `npm run format` in a standalone "chore: format" commit (no logic changes, easy to review), then add `npm run lint` to `check`.

---

_Reviewed: 2026-09-27T20:49:48Z_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_

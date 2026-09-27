---
phase: 01-nettoyage-filet-de-s-curit
fixed_at: 2026-09-27T23:00:00Z
review_path: .planning/phases/01-nettoyage-filet-de-s-curit/01-REVIEW.md
iteration: 2
fix_scope: critical_warning
findings_in_scope: 1
fixed: 1
skipped: 0
status: all_fixed
cumulative:
  iteration_1: { findings_in_scope: 8, fixed: 8, skipped: 0, report: 01-REVIEW-FIX.iter2.md }
  iteration_2: { findings_in_scope: 1, fixed: 1, skipped: 0 }
  total_fixed: 9
  total_skipped: 0
---

# Phase 01: Code Review Fix Report

**Fixed at:** 2026-09-27T23:00:00Z
**Source review:** .planning/phases/01-nettoyage-filet-de-s-curit/01-REVIEW.md
**Iteration:** 2

**Summary:**
- Findings in scope: 1 (WR-01 of iteration 2; 0 critical; IN-01 to IN-14 are out of scope)
- Fixed: 1
- Skipped: 0
- Cumulative: iteration 1 fixed 8 of 8 (WR-01 to WR-08, report archived as `01-REVIEW-FIX.iter2.md`), and iteration 2 fixed 1 of 1. Total: 9 fixed, 0 skipped.

## Fixed Issues

### WR-01: Tightened `URL_RE` truncates quoted paths that contain spaces, parentheses or commas, producing false MISSING

**Files modified:** `scripts/inventory-assets.mjs`
**Commit:** 8a0ee29
**Applied fix:** The single `URL_RE` reverse scan is replaced by two passes over the raw text. Matching still happens on the raw, percent-encoded text, and each match is decoded and NFC-normalised afterwards.
- `QUOTED_RE = /(["'`])(\/(?:assets|videos|animate|media)\/[^"'`\n]+?)\1/g`: a quoted literal that starts with the prefix is taken as the whole path, so spaces, `(1)` and commas are kept.
- `BARE_RE = /(?<![\w.:/}-])\/(?:assets|videos|animate|media)\/[^\s"'`()<>,]+/g`: this pass runs on the text with quoted literals blanked out. It keeps the strict character class and trims trailing `.,;:!?)>]`. `}` was added to the lookbehind, so `${BASE}/assets/x.png` template pieces are skipped. As before, a path preceded by a host (`https://…/assets/…`) is skipped.
- A literal that contains `${` is skipped before decoding.

### Test matrix

The unmodified script was copied into a scratchpad tree (`scratchpad/wr01/`, outside the repo). It ran with an empty `public/`, so every path it extracted was listed as MISSING:

| Input | Extracted |
|---|---|
| `src="/assets/palette de couleurs.png"` | `/assets/palette de couleurs.png` |
| `image: "/assets/logo (1).png",` | `/assets/logo (1).png` |
| `"/assets/palette%20de%20couleurs%202.png"` | `/assets/palette de couleurs 2.png` |
| `Voir la maquette /assets/bare-dot.png.` | `/assets/bare-dot.png` |
| `Voir /assets/bare-semi.png; puis` | `/assets/bare-semi.png` |
| `(voir /assets/bare-paren.png)` | `/assets/bare-paren.png` |
| `voir /assets/prose.png.` | `/assets/prose.png` |
| `"https://cdn.example.com/assets/external.png"` | not extracted (correct) |
| `https://cdn.example.com/videos/ext2.mp4.` in prose | not extracted (correct) |
| `` `${BASE}/assets/template-piece.png` `` | not extracted (correct) |
| `` `/assets/${name}.png` `` | not extracted (correct) |
| CSS `url(/assets/css-bare.png)` | `/assets/css-bare.png` |
| CSS `url("/assets/css quoted.png")` | `/assets/css quoted.png` |
| `` `/videos/tpl ok.mp4` ``, `'/media/single, comma.jpg'` | both extracted whole |
| `"/assets/query.png?v=2"` | `/assets/query.png` |

With an empty `public/`, the result was `MISSING=12`: exactly the 12 intended paths and nothing else. After creating those 12 files: `REF=12 NAME-ONLY=0 UNREF=0 MISSING=0`, exit 0. The REF classification and the reverse scan agree on paths that contain a literal space.

### Verification (real tree)

```
MISSING: referenced in src/ but absent from public/ (0)

REF=62 NAME-ONLY=0 UNREF=0 MISSING=0
Checking formatting...
All matched files use Prettier code style!
exit=0
```
(`node scripts/inventory-assets.mjs && npx prettier --check … && npx eslint … && npx tsc --noEmit`: eslint and tsc produced no output.)

---

_Fixed: 2026-09-27T23:00:00Z_
_Fixer: Claude (gsd-code-fixer)_
_Iteration: 2_

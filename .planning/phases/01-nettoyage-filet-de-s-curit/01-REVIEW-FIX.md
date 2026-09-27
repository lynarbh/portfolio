---
phase: 01-nettoyage-filet-de-s-curit
fixed_at: 2026-09-27T23:40:00Z
review_path: .planning/phases/01-nettoyage-filet-de-s-curit/01-REVIEW.md
iteration: 3
fix_scope: critical_warning
findings_in_scope: 2
fixed: 2
skipped: 0
status: all_fixed
cumulative:
  iteration_1: { findings_in_scope: 8, fixed: 8, skipped: 0, report: 01-REVIEW-FIX.iter2.md }
  iteration_2: { findings_in_scope: 1, fixed: 1, skipped: 0, report: 01-REVIEW-FIX.iter3.md }
  iteration_3: { findings_in_scope: 2, fixed: 2, skipped: 0 }
  total_fixed: 11
  total_skipped: 0
---

# Phase 01: Code Review Fix Report

**Fixed at:** 2026-09-27T23:40:00Z
**Source review:** .planning/phases/01-nettoyage-filet-de-s-curit/01-REVIEW.md
**Iteration:** 3

**Summary:**
- Findings in scope: 2 (WR-01 and WR-02 of iteration 3; 0 critical; IN-01 to IN-15 are out of scope, except that the IN-15 trailing-space case is fixed by the same `.trim()`)
- Fixed: 2
- Skipped: 0
- Cumulative: iteration 1 fixed 8 of 8 (report `01-REVIEW-FIX.iter2.md`), iteration 2 fixed 1 of 1 (report `01-REVIEW-FIX.iter3.md`), and iteration 3 fixed 2 of 2. Total: 11 fixed, 0 skipped.

## Fixed Issues

### WR-01: A quoted `srcset`/`srcSet` value is taken whole as one path, giving a false MISSING

**Files modified:** `scripts/inventory-assets.mjs`
**Commit:** 23768a1
**Applied fix:** Each quoted literal now goes through `splitQuoted()`. The literal is split only if it contains a width or density descriptor at the end of a candidate, which `DESCRIPTOR_RE = /\s+\d+(?:\.\d+)?[wx]\s*(?:,|$)/` checks for. In that case it is split on `,`, and each candidate is trimmed and has its trailing descriptor removed. Only candidates that start with `/assets|videos|animate|media/` are kept.

Without a descriptor, the literal is taken whole and trimmed. So `"/assets/palette de couleurs.png"` and `"/assets/a,b.png"` do not split, and neither does `"/assets/photo 2x.png"`, where the `2x` is part of the file name. The `.trim()` also covers the IN-15 trailing-space case. The detector is anchored on `,` or end of literal, which is stricter than the reviewer's `\b` candidate. With `\b`, `photo 2x.png` would have been split by mistake.

### WR-02: A quoted literal that contains the other quote character is cut short

**Files modified:** `scripts/inventory-assets.mjs`
**Commit:** 23768a1
**Applied fix:** `QUOTED_RE` is now built from a shared `PREFIX` with one alternative per quote type: `"(P[^"\n]+?)"|'(P[^'\n]+?)'|` plus a backtick alternative. Each body excludes only its own delimiter, and the capture is read as `m[1] ?? m[2] ?? m[3]`.

These were kept unchanged:
- matching on the raw text, then percent-decode and NFC
- blanking quoted literals before the bare pass
- the `${` skip
- the `}`/host lookbehind in `BARE_RE`

The header comment now also records the remaining IN-15 limits as known limits: JSON-escaped slashes, and an elision directly before a bare path.

### Verification

The harness is `scratchpad/iter3/verify.mjs`, outside the repo. It slices the real `candidates()` block out of `scripts/inventory-assets.mjs`, evaluates it, and applies the `${` skip. It runs the reviewer's 27 cases:
- 23 cases must match the `8a0ee29` output exactly (no regression).
- 4 cases must change as intended:
  - `"/assets/l'image.png"` is kept whole.
  - `'/assets/l"x.png'` is kept whole.
  - `srcSet="/assets/a.png 1x, /assets/a@2x.png 2x"` gives the two paths.
  - `"/assets/a.png "` is trimmed.

The harness also runs 7 new cases:

| Input | Extracted |
|---|---|
| `srcSet="/assets/w.png 480w, /assets/w2.png 960w"` | `/assets/w.png`, `/assets/w2.png` |
| `'/assets/say "hi".png'` | whole |
| `` `/assets/it's.png` `` | whole |
| `"/assets/photo 2x.png"` | whole (not split) |
| `srcset="/assets/a.png, /assets/b.png 1.5x"` | `/assets/a.png`, `/assets/b.png` |
| `srcSet="https://cdn.x/a.png 1x, /assets/b.png 2x"` | `/assets/b.png` only |
| `"  /assets/a.png"` | `/assets/a.png` (via the bare pass) |

Result: 34 of 34 pass. `"/assets/palette de couleurs.png"` (case 1) is still kept whole.

Real tree:
```
MISSING: referenced in src/ but absent from public/ (0)

REF=62 NAME-ONLY=0 UNREF=0 MISSING=0
Checking formatting...
All matched files use Prettier code style!
exit=0
```
The command was `node scripts/inventory-assets.mjs && npx prettier --check scripts/inventory-assets.mjs && npx eslint scripts/inventory-assets.mjs && npx tsc --noEmit`. ESLint and tsc produced no output.

---

_Fixed: 2026-09-27T23:40:00Z_
_Fixer: Claude (gsd-code-fixer)_
_Iteration: 3_

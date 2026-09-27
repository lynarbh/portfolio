---
phase: 1
slug: nettoyage-filet-de-s-curit
status: draft
nyquist_compliant: false
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
| **Estimated runtime** | ~1 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx tsc --noEmit && npx vite build && node scripts/check-assets.mjs`
- **After every plan wave:** Run `npm run check`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 1 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | REQ-{XX} | T-1-01 / — | {expected secure behavior or "N/A"} | unit | `{command}` | ✅ / ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `{tests/test_file.py}` — stubs for REQ-{XX}
- [ ] `{tests/conftest.py}` — shared fixtures
- [ ] `{framework install}` — if no framework detected

*If none: "Existing infrastructure covers all phase requirements."*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| {behavior} | REQ-{XX} | {reason} | {steps} |

*If none: "All phase behaviors have automated verification."*

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 1s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** {pending / approved YYYY-MM-DD}

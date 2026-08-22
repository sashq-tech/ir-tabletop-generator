# 2026-08-22 Identity Provider Outage Drill Release

## Scope

- Added one complete, system-neutral Interactive Rehearsal for a shared identity-provider outage.
- Preserved the focused workspace, direct URL restoration, packet generator, facilitator pre-brief, AAR copy, AAR-only print, download, and route/history contracts.
- Kept the drill defensive and planning-oriented with no attack, exploit, credential-theft, malware, or evasion instructions.

## Facilitator Value

- Five injects move from widespread sign-in failure through evidence and application scope, controlled break-glass continuity, communication thresholds, staged recovery validation, and governance follow-up.
- Each inject presents three scenario-specific decisions with distinct consequences and lessons.
- The exercise separates identity availability, compromise indicators, business continuity, vendor evidence, and emergency-access governance so facilitators can rehearse fact-bounded decisions.

## Production Evidence

- Commit `542a881` is pushed to `main` and live at `https://responserehearsal.com/`.
- `node --check app.js` and `git diff --check` passed.
- All 24 desktop and 390px mobile Chrome regressions passed, preserving landing/history, packet/export/print, facilitator copy, direct drill restoration, five-step AAR, accessibility, trust, and overflow behavior.
- Production `app.js` contains `ddos-identity-provider-outage` and the direct interactive route returned `200`.
- A live 390px run restored the selected drill after reload, displayed the correct title and first inject, presented three decisions at all five steps, reached AAR and print-ready state, and recorded no horizontal overflow or page errors.

## Boundaries And Next Work

- No backend, accounts, uploads, database, analytics, ad placement, AdSense resubmission, Cloudflare setting, DNS setting, Search Console setting, or provider-account change.
- Next useful scenario candidate: software-signing certificate expiration or revocation, distinct from identity and general availability drills.

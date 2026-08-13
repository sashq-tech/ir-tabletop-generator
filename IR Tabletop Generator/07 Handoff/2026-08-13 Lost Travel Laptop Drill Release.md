# 2026-08-13 Lost Travel Laptop Drill Release

## Scope

- Added one complete defensive Interactive Rehearsal for a company laptop lost during customer travel.
- Preserved the focused workspace, packet generator, AAR, copy, download, print, and route/history contracts.
- Kept the drill generic and planning-oriented; it contains no exploit, credential-theft, malware, or attack instructions.

## Facilitator Value

- Five injects move from initial loss through data scoping, remote-action tradeoffs, executive/customer communication criteria, and recovery ownership.
- Each inject has three scenario-specific decisions with distinct consequences and lessons.
- The drill explicitly rehearses remote lock versus wipe, cloud-session containment, evidence preservation, replacement-device continuity, and fact-bounded customer readiness.

## Verification

- `node --check app.js`
- `git diff --check`
- All 18 desktop and 390px mobile Playwright workspace regressions passed, including direct URL restoration and a five-decision run through copied AAR output.
- Commit `4ea1752` was pushed to `main`; cache-busted live `app.js` contains the scenario key and title.
- Live desktop and 390px mobile Chrome runs restored the drill, showed three choices at every inject, reached the AAR, avoided overflow, and logged no page errors.
- Twelve homepage, guide, trust/contact, sitemap, robots, and ads routes returned `200` after publication.
- The optional Firefox runner skipped because its Playwright browser binary is not installed.

## Boundaries

- No backend, accounts, uploads, database, analytics, ad placement, Cloudflare setting, Search Console setting, or AdSense resubmission change.
- Next useful library family: cloud storage exposure, with evidence and access-governance decisions distinct from this travel-device drill.

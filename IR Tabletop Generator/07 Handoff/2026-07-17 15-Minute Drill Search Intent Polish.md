# 2026-07-17 15-Minute Drill Search Intent Polish

## Context

Search Console is still nearly flat, but the first useful content signal is practical drill intent:

- Query: `incident response drills`
- Page signal: `https://responserehearsal.com/15-minute-incident-response-drill`
- Current interpretation: early-indexing signal only, not enough volume for a broad rewrite.

## Bounded Production Change

Commit:

- `c44f3af Polish 15-minute drill search intent`

Files changed:

- `15-minute-incident-response-drill.html`
- `guides.html`
- `sitemap.xml`

What changed:

- Strengthened the 15-minute guide for practical incident response drill intent.
- Added a compact drill card with scenario, team objective, facilitator rule, and output.
- Added a facilitator script that keeps the drill decision-focused.
- Added visible FAQ content and FAQ schema for "What is an incident response drill?"
- Added a natural bridge from the short guide into the focused Interactive Rehearsal path.
- Updated the Guides hub ransomware drill link to include `?path=interactive`.
- Updated sitemap `lastmod` for `guides.html` and `15-minute-incident-response-drill.html` to `2026-07-17`.

## Deployment

Cloudflare Pages deploy hook was triggered after push.

- Deploy hook deployment id: `e9af199c-af59-4e63-a7fe-e48589ee2a76`
- Prior confirmed deploy hook recovery id: `4627d6a8-8cc7-4f8d-ba63-46fccc741b79`

## Verification

Local checks:

- `git diff --check` passed with existing CRLF warnings only.
- JSON-LD parsed as `Article` and `FAQPage`.
- Local marker checks confirmed canonical URL, `dateModified: 2026-07-17`, FAQ schema, new drill card, facilitator script, interactive rehearsal bridge, and direct interactive CTA.

Live checks:

- `https://responserehearsal.com/15-minute-incident-response-drill.html` returned `200` and contains the new guide sections, direct CTA, canonical URL, FAQ schema, and `dateModified: 2026-07-17`.
- `https://responserehearsal.com/guides.html` returned `200` and contains the direct `path=interactive` ransomware drill link.
- `https://responserehearsal.com/sitemap.xml` returned `200 application/xml` and includes `guides.html`, `15-minute-incident-response-drill.html`, and `2026-07-17` lastmod markers.
- `https://responserehearsal.com/?path=interactive&type=ransomware&focus=communications&duration=60&difficulty=standard&rehearsal=ransomware-communications-pressure` returned `200`.
- Live homepage still contains the direct Interactive Rehearsal entry link.
- Live `app.js` still contains `pendingPathFocus`, `focusPendingPath`, and preserved `syncInteractiveScenarioPicker(params.get("rehearsal"))` handling.
- Trust endpoints remained healthy: Contact, `ads.txt`, `/.well-known/security.txt`, and `robots.txt` returned expected markers.

## Current Posture

- AdSense review remains pending.
- `/guides.html` indexing was requested and remains pending recrawl.
- The 15-minute and 30-minute guide articles were indexed/green per Sean's 2026-07-11 Search Console inspection.
- Treat the 2026-07-17 `incident response drills` impression as a directional signal, not proof of search demand.
- Production is stable; avoid more content churn unless Search Console repeats the drill-query signal or Google reports a concrete issue.

## Next Recommended Slice

If Search Console repeats `incident response drills`, `15-minute incident response drill`, or similar short-rehearsal queries, make one more bounded content pass:

- Add one or two example mini-drills under the 15-minute guide.
- Add an internal link from the 30-minute guide back to the 15-minute drill when teams need a shorter rehearsal.
- Keep the primary CTA pointed at the focused Interactive Rehearsal workspace.

If Search Console stays flat, hold production and wait for AdSense/Search Console feedback.

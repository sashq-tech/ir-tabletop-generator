# Response Rehearsal Incident Response Drill Search Alignment Release

Date: 2026-09-19
Status: Published and live

## Measurement Trigger

The September 18 hold completed with fresh Search Console data through September 17:

- latest seven days: `0 clicks / 73 impressions`, versus `0 / 19`;
- `/15-minute-incident-response-drill` over 35 days: `94 impressions`, `0 clicks`, average position `17.07`;
- `what is an incident response drill?`: `34` impressions, position `9.09`;
- `what is an incident response drill`: `25` impressions, position `13.56`;
- `what is incident response drill`: `3` impressions, position `9.33`.

The guide already has substantive facilitator content, a worked decision record, primary sources, FAQ/schema, and a complete handoff into the 15-minute Interactive Rehearsal. The bounded gap is the alignment between the measured definition question, the search-result title, and the first visible answer.

## Candidate Scope

- Change the page title and Article headline to `What Is an Incident Response Drill? 15-Minute Guide`.
- Use a concise description that answers the query and accurately previews the worked example and interactive rehearsal.
- Make `What is an incident response drill?` the page-specific heading.
- Put the direct definition and existing 15-minute CTA before the short-drill versus tabletop comparison.
- Preserve the canonical route, FAQ, sources, long-form guide, BEC rehearsal parameters, timer, pre-brief, five-inject flow, AAR copy, print state, and Back navigation.

## Release Verification

- Feature commit: `d10de973682fafb523f60dc44edeaee7e0f0e661` (`Align incident drill guide with search intent`)
- Branch and remote: `main`, pushed to `origin/main`
- Static checks: `node --check app.js`, `node --check qa/workspace-regression.spec.js`, `git diff --check`, and metadata/JSON-LD parsing passed
- Regression suite: all 34 desktop/mobile Chrome workspace tests passed
- Production page: `https://responserehearsal.com/15-minute-incident-response-drill`
- Live metadata: exact title, description, canonical URL, Article headline, and `2026-09-19` modified date verified
- Live desktop and 390px flow: direct definition visible; CTA restored the 15-minute BEC rehearsal and timer after reload; all five injects showed three decisions; AAR/print-ready and Back navigation passed; no horizontal overflow or page errors were observed

## Measurement Follow-Up

Hold further title, description, heading, and definition-copy changes while fresh impressions and clicks accumulate. Compare equivalent post-release windows before considering another CTR edit; do not interpret a short-term zero-click interval as a reason for immediate churn.

No account, analytics, AdSense, Cloudflare, DNS, Search Console, backend, upload, or database setting is in scope.

# 2026-07-11 Static Guides Hub Pass

## Scope

Bounded static content/navigation pass for Response Rehearsal. No app features, presentation/PDF/PPTX work, DNS changes, Search Console actions, or backend work.

## Context

Sean provided fresh Search Console exports under `C:\Users\rdrnr\Projects\AI Ops Center\Human Ops 7.11.26`, but that folder did not include a Response Rehearsal export. This pass did not infer any new Response Rehearsal search data from those files.

## Files Changed

- `guides.html`
- `index.html`
- `about.html`
- `15-minute-incident-response-drill.html`
- `30-minute-incident-response-tabletop.html`
- `privacy.html`
- `terms.html`
- `contact.html`
- `trust-and-privacy.html`
- `sitemap.xml`
- `README.md`
- `DEPLOYMENT_CHECKLIST.md`
- `IR Tabletop Generator/07 Handoff/Codex Handoff Status.md`

## Work Completed

- Added a static `Guides` hub for practical incident response rehearsal resources.
- Linked the 15-minute incident response drill, 30-minute tabletop guide, full generator, and ransomware communications pressure drill route.
- Added lightweight `CollectionPage` plus `ItemList` structured data to the hub.
- Added `Guides` to public header/footer navigation and sitemap.
- Added a homepage mention of the guides and drills hub.
- Preserved the readable content-page CTA button styling check target.

## Verification

- Run `node --check app.js`.
- Parse static HTML and JSON-LD for the guide hub.
- Confirm sitemap entries map to local public files.
- Confirm public pages link to `guides.html`.
- Confirm content-page CTA links still have readable button text.
- After commit/push, live-verify `https://responserehearsal.com/guides.html`, homepage navigation, sitemap, and CTA styling.

## Next Signal

Use actual Response Rehearsal Search Console data when available. If Search Console remains quiet or unavailable, the next safe static pass is a small internal-link/content clarity improvement, not app-feature expansion.

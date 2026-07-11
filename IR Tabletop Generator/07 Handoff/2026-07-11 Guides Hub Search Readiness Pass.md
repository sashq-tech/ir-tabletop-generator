# 2026-07-11 Guides Hub Search Readiness Pass

## Scope

Notes/docs-only readiness pass after publishing the Response Rehearsal Guides hub. No app features, static page content, sitemap, nav, DNS, Search Console, Bing, PDF/PPTX, or facilitator workflow changes were made.

## Context

The fresh `C:\Users\rdrnr\Projects\AI Ops Center\Human Ops 7.11.26` export folder did not include Response Rehearsal Search Console data. Use actual Response Rehearsal Search Console or Bing Webmaster Tools evidence before making the next production content decision.

## URLs To Verify Next

- Homepage: `https://responserehearsal.com/`
- Guides hub: `https://responserehearsal.com/guides.html`
- 15-minute drill guide: `https://responserehearsal.com/15-minute-incident-response-drill.html`
- 30-minute tabletop guide: `https://responserehearsal.com/30-minute-incident-response-tabletop.html`
- Sitemap: `https://responserehearsal.com/sitemap.xml`
- Ransomware communications drill route: `https://responserehearsal.com/?type=ransomware&focus=communications&duration=60&difficulty=standard&rehearsal=ransomware-communications-pressure`

## Signal Checklist

- Google sitemap status: hold if fetched successfully; fix sitemap/nav only if fetch fails, public URLs are missing, or inspection reports blocked/unreachable pages.
- Google URL inspection: request indexing for `/`, `/guides.html`, `/15-minute-incident-response-drill.html`, and `/30-minute-incident-response-tabletop.html` when live inspection passes but indexing is pending.
- Parameterized ransomware drill route: treat as an app route, not a static sitemap target. Check it only if needed to verify the Guides hub link or if Search Console can live-test the rendered URL.
- Bing Webmaster Tools: hold if sitemap and core URLs are discovered; resubmit sitemap or use IndexNow if Bing has not crawled after several days; fix only for blocked/unreachable/canonical problems.
- WebsiteLaunches/directories/referrals: hold if referrals appear and engagement is not clearly broken; improve listing copy if referrals bounce; write the next guide only when the signal points to a specific practical search intent.

## 2026-07-11 Search Console Status Update

Sean inspected the guide URLs in Google Search Console:

- `https://responserehearsal.com/guides.html` was not indexed; Sean requested indexing. Treat this as indexing requested / pending recrawl, not a site defect.
- `https://responserehearsal.com/15-minute-incident-response-drill.html` is indexed and green.
- `https://responserehearsal.com/30-minute-incident-response-tabletop.html` is indexed and green.
- No issues were reported on the indexed guide pages.

## Current Posture

Do not create another production content page yet. Let the Guides hub recrawl after the indexing request. The two article pages are indexed/green, so there is no current guide-page defect to fix.

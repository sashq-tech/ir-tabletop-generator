# 2026-07-18 Sitemap Canonical Redirect Cleanup

## Trigger

Sean reported a concrete Search Console sitemap defect on 2026-07-18: the live sitemap listed eight `.html` URLs that Cloudflare Pages redirects to extensionless canonical routes. Search Console reported 10 redirecting variants overall.

## Scope

Fix only URL hygiene needed for indexing clarity:

- Keep the existing extensionless public URL posture.
- Keep old `.html` compatibility redirects working.
- Do not change landing/product content, ads, DNS, security settings, or app behavior.
- Verify the previously published AAR-only print fix is already live before stacking this publication.

## Local Change

Updated sitemap, canonical metadata, Open Graph URLs, structured-data URLs, and internal static hrefs so crawlable site references use final extensionless routes:

- `/`
- `/about`
- `/guides`
- `/15-minute-incident-response-drill`
- `/30-minute-incident-response-tabletop`
- `/privacy`
- `/terms`
- `/contact`
- `/trust-and-privacy`

Files changed:

- `sitemap.xml`
- `index.html`
- `about.html`
- `guides.html`
- `15-minute-incident-response-drill.html`
- `30-minute-incident-response-tabletop.html`
- `privacy.html`
- `terms.html`
- `contact.html`
- `trust-and-privacy.html`

## Verification Plan

- Confirm live AAR markers before publish: `INTERACTIVE_AAR_READY_CLASS`, `setInteractiveAarPrintReady`, and `interactive-aar-ready`.
- Parse `sitemap.xml` and confirm no submitted `<loc>` ends in `.html`.
- Confirm local canonical URLs for every sitemap page match the extensionless route.
- After deploy, verify every live sitemap URL returns `200` without a redirect.
- Verify representative old `.html` routes still redirect for compatibility.
- Verify live self-canonical tags on sitemap pages.
- Submit IndexNow only if an established project helper exists.

## Current Posture

This is a narrow Search Console defect fix during AdSense review. Production should remain stable after verification; avoid additional product, SEO, DNS, ads, Cloudflare-setting, or security changes unless a concrete blocker appears.

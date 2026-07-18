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

## Publish And Live Verification

- Commit: `a64f54b Use extensionless canonical URLs`.
- Pushed to GitHub `main`.
- Cloudflare Pages deploy hook accepted deployment id `55cf2a94-879a-4216-93d1-7feacf5326d0`.
- Live sitemap now lists only the nine extensionless canonical URLs above.
- Every live sitemap URL returned `200` without a redirect.
- Every live sitemap URL exposed the expected self-canonical tag.
- Representative trust/search endpoints passed: `/contact`, `/privacy`, `/terms`, `/guides`, `robots.txt`, `ads.txt`, and `/.well-known/security.txt`.
- Previously published AAR-only print markers remained live after the deploy: `INTERACTIVE_AAR_READY_CLASS`, `setInteractiveAarPrintReady`, and `interactive-aar-ready`.
- Old `.html` compatibility routes still return `308` to the matching extensionless route.
- Direct Interactive Rehearsal URLs still returned `200`: `/?path=interactive` and the ransomware communications pressure rehearsal URL.
- IndexNow ping returned `200` for the sitemap plus canonical URL list using the established key file.

## Follow-Up

Monitor Search Console for the redirecting sitemap variants to clear after recrawl. Do not resubmit or churn production unless Search Console continues to report the extensionless sitemap URLs as redirecting or the sitemap fetch itself fails.

# Response Rehearsal Public Page Structured Data Release

Date: 2026-09-22
Status: Published and live

## Boundary

Fresh Search Console shows the recently released 15-minute drill at `142` impressions and average position `14.99`. This release does not rewrite that guide, add duplicate incident-drill content, or change the focused Interactive Rehearsal route.

## Audit

Audited:

- About
- Privacy
- Terms
- Contact
- Trust & Privacy
- Guides

The five trust pages already use truthful page types and descriptions aligned with their visible purpose and meta descriptions. Guides correctly uses `CollectionPage`, but its description is not aligned with the page metadata and it lacks the page identity fields used by the trust pages. None of the six pages has a linked `BreadcrumbList`.

## Candidate Scope

- Preserve each existing page type: `AboutPage`, `WebPage`, `ContactPage`, or `CollectionPage`.
- Add a page-linked `BreadcrumbList` containing only Response Rehearsal home and the current canonical page.
- Give every page and breadcrumb a unique canonical `@id`.
- Align Guides with its exact meta description plus the existing site `isPartOf` and `inLanguage` conventions.
- Preserve the Guides eight-item collection, all visible copy, public navigation, and every Interactive Rehearsal link.
- Add desktop/mobile regression coverage for parsing, canonical/metadata/sitemap agreement, page-to-breadcrumb linkage, unique IDs, and exact breadcrumb items.

## Release Verification

- Feature commit: `cdc74eb9718eefb52102beabc362a758f422e258` (`Add public page breadcrumb schema`)
- Branch and remote: `main`, pushed to `origin/main`
- Static checks: `node --check app.js`, `node --check qa/workspace-regression.spec.js`, `git diff --check`, and local JSON-LD parsing passed
- Regression suite: all 34 desktop/mobile Chrome workspace tests passed
- Production routes: About, Privacy, Terms, Contact, Trust & Privacy, and Guides all returned `200`
- Production JSON-LD: every route exposed the expected page node plus a canonical, linked two-item `BreadcrumbList`; descriptions and URLs matched page metadata
- Guides retained its eight-item collection and aligned description
- Live 390px check: all six pages avoided horizontal overflow and page errors; the focused BEC Interactive Rehearsal still restored and presented three decisions

No certification, compliance, review, rating, pricing, service, or unsupported product claim is added. No account, analytics, AdSense, Cloudflare, DNS, Search Console, backend, upload, or database setting is in scope.

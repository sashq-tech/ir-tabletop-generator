# Response Rehearsal Public Page Structured Data Release

Date: 2026-09-22
Status: Candidate ready for authoritative regression and publication

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

## Candidate Verification

- JSON-LD parsing: pending
- JavaScript/test syntax and diff hygiene: pending
- Full desktop/mobile workspace suite: pending
- Authoritative commit and push: pending
- Live six-route and JSON-LD verification: pending

No certification, compliance, review, rating, pricing, service, or unsupported product claim is added. No account, analytics, AdSense, Cloudflare, DNS, Search Console, backend, upload, or database setting is in scope.

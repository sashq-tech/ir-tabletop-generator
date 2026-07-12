# 2026-07-12 Post Contact Fix QA

## Scope

Post-contact-fix QA and next-slice notes pass for Response Rehearsal.

AdSense review is pending. This pass did not change production code/content because no live trust or indexing blocker was found.

## Status Confirmed

- Contact fix commit: `4c6562f Add real Response Rehearsal contact path`.
- Docs/handoff commit: `922e0f5 Record Response Rehearsal contact verification`.
- Repository was clean before this notes-only pass.
- Live Contact page verified at `https://responserehearsal.com/contact`.

## Live Surfaces Checked

Status checks returned 200:

- `https://responserehearsal.com/`
- `https://responserehearsal.com/contact`
- `https://responserehearsal.com/privacy`
- `https://responserehearsal.com/terms`
- `https://responserehearsal.com/guides.html`
- `https://responserehearsal.com/sitemap.xml`
- `https://responserehearsal.com/robots.txt`
- `https://responserehearsal.com/ads.txt`

Marker checks:

- Contact page contains the `mailto:contact@responserehearsal.com` form action and JavaScript mailto target.
- Contact page states the static form does not send anything to a server from the site.
- Contact page includes `Open email draft`.
- No old placeholder/future-channel contact wording was found in the live Contact response.
- Sitemap includes homepage, Guides hub, 15-minute guide, 30-minute guide, Privacy, Contact, Terms, and Trust & Privacy. Privacy and Contact have `2026-07-12` lastmod entries.
- Robots includes `Sitemap: https://responserehearsal.com/sitemap.xml`.
- `ads.txt` includes `google.com, pub-7040609172484112, DIRECT, f08c47fec0942fa0`.
- Privacy page includes the Contact email section and email routing provider boundary.
- Terms page retains legal/compliance/incident-response advice boundaries.
- Guides hub links the 15-minute drill, 30-minute tabletop guide, and ransomware communications pressure drill.
- Trust/content page CTA styling remains covered by `.content-page a.primary-button` and `.primary-button`, with dark ink on green in the default state.

## Search Console Note

Sean inspected guide URLs on 2026-07-11:

- `https://responserehearsal.com/guides.html`: indexing requested / pending recrawl. This is not a site defect unless Search Console later reports a crawl, canonical, or blocked-page issue.
- `https://responserehearsal.com/15-minute-incident-response-drill.html`: indexed/green.
- `https://responserehearsal.com/30-minute-incident-response-tabletop.html`: indexed/green.

## Recommended First Implementation Slice

Post-AdSense or explicit Sean approval only.

First slice: prepare the Structured Landing + Focused Interactive Rehearsal restructure without adding new features.

1. Choose the route shape.
   - Preferred starting point: `index.html` becomes the landing/front door and `rehearsal.html` becomes the focused Interactive Rehearsal workspace.
   - Before changing public links, define compatibility for existing parameterized rehearsal URLs, especially the ransomware communications pressure drill from Guides.
2. Draft the landing shell.
   - Product name, concise serious incident-response positioning, browser-only/no-login/no-upload trust line, and three doors: Interactive Rehearsal, Guides / Short Drills, About / Trust / Privacy.
   - Hide packet exports, slide controls, worksheet controls, detailed settings, and sample packet buttons on first load.
3. Map current controls before moving code.
   - Focused rehearsal: scenario picker, pre-brief, timer, inject stage, choices, consequence meters, facilitator notes, copy inject, AAR reveal/export.
   - Secondary facilitator prep: full packet, participant/facilitator guides, slides, worksheet, print/download/copy controls.
4. Verify before publish.
   - Guide URLs remain 200 and discoverable.
   - Contact/Privacy/Terms/Trust, sitemap, robots, and `ads.txt` remain clean.
   - CTA text remains readable without hover.
   - No new guides or app features are added during the restructure slice.

## Current Posture

AdSense review pending. `/guides.html` indexing requested / pending recrawl. The two guide articles are indexed/green.

Production stayed untouched in this QA pass. Continue to hold production changes unless AdSense, Search Console, Bing, or live checks report a concrete issue, or Sean explicitly approves the restructure.

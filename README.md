# Response Rehearsal

Response Rehearsal is a static, browser-only prototype for building incident response tabletop exercise materials. It is designed for defensive readiness discussions, facilitator prep, and lightweight exercise delivery without accounts, uploads, databases, or backend services.

Tagline: Practice incident decisions before the real day.

Live site: `https://responserehearsal.com/`

The canonical public domain is `https://responserehearsal.com/`. The `www` host is also reachable, but canonical metadata points to the apex domain.

## What It Does

- Generates incident response tabletop packets from selected settings.
- Supports ransomware, credential phishing, insider data exposure, public service outage, and vendor compromise scenarios.
- Produces participant handouts, facilitator guides, timed injects, discussion prompts, evidence prompts, worksheets, action trackers, and after-action material.
- Includes interactive rehearsal mode with scenario picker, facilitator runbook, timer controls, facilitator notes, copyable injects, decision choices, consequence meters, and AAR export.
- Includes evaluator-friendly samples: a BEC demo run and a copy-ready ransomware tabletop packet.
- Includes browser presentation mode with facilitator and participant deck views for remote or hybrid sessions.
- Provides copy, print, download, daily drill, and shareable URL controls.

## Run Locally

No install or build step is required.

Option 1: open `index.html` directly in a browser.

Option 2: run a local static server from the repository root:

```powershell
python -m http.server 4195 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4195/
```

Focused smoke-test URL:

```text
http://127.0.0.1:4195/?type=phishing&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=246810&rehearsal=phishing-bec
```

## Public Runtime Files

The static app runs from these top-level files:

- `index.html`
- `styles.css`
- `app.js`
- `about.html`
- `15-minute-incident-response-drill.html`
- `30-minute-incident-response-tabletop.html`
- `privacy.html`
- `terms.html`
- `contact.html`
- `trust-and-privacy.html`
- `robots.txt`
- `sitemap.xml`

Supporting repository docs:

- `README.md`
- `DEPLOYMENT_CHECKLIST.md`
- `POST_LAUNCH_BACKLOG.md`
- `IR Tabletop Generator/` project notes and handoff history

Local-only folders such as source references, generated output, agent metadata, and workspace files should not be treated as public runtime assets.

## Verification

Run the JavaScript syntax check before pushing app changes:

```powershell
node --check .\app.js
```

Recommended manual smoke path:

- Load the app with no console errors.
- Click `Load BEC demo`.
- Confirm the interactive format opens with `Executive Payment Request Drill`.
- Click `Copy ransomware packet` and confirm the button reports `Copied`.
- Generate a full packet.
- Open interactive rehearsal.
- Confirm the scenario picker updates the exercise.
- Confirm facilitator runbook ready state.
- Copy the facilitator pre-brief.
- Start and complete an interactive path.
- Confirm the AAR export unlocks.
- Click `Copy AAR summary` after completion and confirm it produces the concise decisions/gaps/actions summary.
- Open About, Privacy, Terms, Contact, and Trust links from the header or footer.
- Confirm `Trust & Privacy` appears in the main public navigation and footer.
- Confirm the content-page `Open the generator` / `Return to generator` button text is readable before hover.
- Check a narrow/mobile viewport for no horizontal overflow.

See `DEPLOYMENT_CHECKLIST.md` for the fuller staging checklist.

## Human Launch Checklist

- Google Search Console: add `https://responserehearsal.com/` as a URL-prefix property, or use a domain property if DNS verification is available. Submit `https://responserehearsal.com/sitemap.xml`, then inspect/request indexing for the homepage and public trust pages.
- Bing Webmaster Tools: add or import the site, submit `https://responserehearsal.com/sitemap.xml`, and confirm crawl/index status after the sitemap is fetched.
- Cloudflare/domain sanity: confirm apex and `www` both return `200 OK`, HTTPS is valid, the apex remains canonical, `robots.txt` and `sitemap.xml` are reachable, and no unexpected redirects or challenge pages appear.
- Directory positioning: describe the site as a browser-only incident response tabletop exercise generator for defensive practice and facilitator preparation. Avoid claims that it provides legal advice, compliance advice, incident-response consulting, or guaranteed readiness improvement.
- Suggested listing categories: cybersecurity training, incident response tabletop exercises, business continuity planning, security awareness tools, or facilitator tools.

Suggested public listing copy:

> Response Rehearsal is a browser-only tabletop exercise generator that helps facilitators practice incident decisions before the real day. Build defensive scenarios, injects, participant handouts, facilitator notes, worksheets, and after-action prompts without accounts, uploads, or a backend. Generated material is a planning aid that should be reviewed by the facilitator; it is not legal, compliance, or incident-response advice.

## Trust And Use Boundaries

This prototype creates educational tabletop exercise materials. It does not provide legal, compliance, regulatory, or incident-response advice.

Do not enter real credentials, confidential incident details, personal information, sensitive infrastructure details, regulated data, or anything that would create risk if shared. Use generic or fictionalized details when practicing.

The generator should stay focused on defensive tabletop discussion and readiness planning. It should not include operational attack guidance.

Public trust pages are included for soft-launch readiness: `about.html`, `privacy.html`, `terms.html`, `contact.html`, and `trust-and-privacy.html`. Contact copy is intentionally neutral until a permanent launch contact path is selected.

## Current Status

- Static/browser-only prototype.
- Live public domain: `https://responserehearsal.com/`.
- GitHub repository remains the source/staging repo for changes before they reach the live site.
- Canonical URLs, `robots.txt`, and `sitemap.xml` point to the apex domain.
- Post-launch stability sweep on 2026-06-28 passed for apex, `www`, crawl files, trust page metadata, and the main generator/demo flow.
- Release checkpoint on 2026-06-28 covered live-domain metadata, human launch/discovery checklist, facilitator export context, mobile facilitator controls, and copy-button state feedback.
- Production bugfix checkpoint on 2026-06-28 made `Trust & Privacy` a first-class public nav link and resolved the content-page generator CTA contrast issue.
- Source reference materials are research inputs and should not be copied into public site content.

## Recent Product Polish

- Facilitator exports now carry clearer exercise context, timer metadata, closeout capture prompts, and educational-use boundaries.
- Mobile facilitator controls use larger, more predictable tap targets for live sessions.
- Copy actions provide visible success/failure feedback and polite assistive-technology announcements.
- Public trust navigation now exposes `Trust & Privacy` in the main header and footer, and content-page generator CTA labels remain readable in the default state.
- Public content now includes `15-minute-incident-response-drill.html`, a fast incident response drill guide for short security-team decision practice.
- Public content now includes `30-minute-incident-response-tabletop.html`, an indexable facilitation guide linked from the homepage, header/footer navigation, and sitemap.
- Post-launch backlog remains intentionally focused on static/browser-only improvements before any account, upload, backend, analytics, or database decisions.

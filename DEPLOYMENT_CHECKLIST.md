# Response Rehearsal Deployment Checklist

This project is a live static site. Do not change production hosting, DNS, or domain settings without Sean approval.

## Current Prototype State

- Static browser-only app with no build step.
- Core public experience is implemented in plain HTML, CSS, and JavaScript.
- Current local path: `C:\Users\rdrnr\Projects\IR Tabletop Generator`.
- Current GitHub remote: `https://github.com/sashq-tech/ir-tabletop-generator.git`.
- Current public endpoint: `https://responserehearsal.com/`.
- Canonical domain: `https://responserehearsal.com/`.
- The `www` host is also reachable, but canonical metadata should point to the apex domain.
- Current release checkpoint: live-domain metadata, post-launch stability checks, human launch/discovery guidance, facilitator export context, mobile facilitator control layout, copy-button state feedback, first-class `Trust & Privacy` navigation, and content-page generator CTA contrast are complete.

## Public Files To Ship

Only these top-level files are intended for a static public site today:

- `index.html`
- `styles.css`
- `app.js`
- `about.html`
- `guides.html`
- `15-minute-incident-response-drill.html`
- `30-minute-incident-response-tabletop.html`
- `privacy.html`
- `terms.html`
- `contact.html`
- `trust-and-privacy.html`
- `robots.txt`
- `sitemap.xml`
- `README.md`
- `DEPLOYMENT_CHECKLIST.md`

Optional for repository staging, but not required for the public web root:

- `.gitignore`
- `IR Tabletop Generator.code-workspace`

## Do Not Ship

Keep these local unless a later decision explicitly changes the deploy model:

- `Incident Response Sources/`
- `IR Tabletop Generator/` Obsidian vault notes
- `output/` browser test artifacts and generated files
- `.agents/`
- `.codex/`
- `.git/`
- `.vscode/`
- `*.code-workspace`

## Verification Commands

Run these from `C:\Users\rdrnr\Projects\IR Tabletop Generator` before any staging push:

```powershell
node --check .\app.js
git status --short
git remote -v
```

Use a local static server for browser smoke testing:

```powershell
python -m http.server 4195 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4195/
```

Recommended focused smoke URL:

```text
http://127.0.0.1:4195/?type=phishing&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=246810&rehearsal=phishing-bec
```

## Local Browser Smoke Checklist

- Load the app with no console errors.
- Generate a full packet.
- Open the interactive rehearsal format.
- Confirm the scenario picker updates the selected exercise.
- Confirm the facilitator runbook shows ready state before start.
- Copy the facilitator pre-brief.
- Start the interactive exercise.
- Confirm timer, current inject copy, facilitator notes, and copy-button success/failure states work.
- Complete an interactive path.
- Confirm after-action export unlocks, copies, and includes exercise context, owner/follow-up prompts, and educational-use boundary copy.
- Confirm `Trust & Privacy` is reachable from the main public navigation and footer on Home, About, Privacy, Terms, Contact, and Trust & Privacy.
- Confirm `Guides` is reachable from the main public navigation and footer and links to the 15-minute drill, 30-minute tabletop guide, and ransomware communications pressure drill route.
- Confirm content-page generator CTA text is readable in default, hover, and focus states.
- Test mobile/narrow viewport for no horizontal overflow.

## Before Any Public Launch

- Confirm no source PDFs, downloaded references, local notes, screenshots, or test artifacts are included in the deployed folder.
- Review `trust-and-privacy.html` for accuracy.
- Review About, Privacy, Terms, and Contact pages for launch contact wording and current data-handling accuracy.
- Confirm Trust & Privacy is clearly discoverable from public navigation, not only as a footer or contextual link.
- Run `node --check app.js`.
- Open `index.html` directly in a browser and generate at least one packet.
- Test participant and facilitator presentation modes.
- Test print views for full packet, participant handout, facilitator guide, blank worksheet, and slide deck.
- Confirm no analytics, ads, affiliate links, external scripts, uploads, accounts, or backend calls were added unintentionally.
- Confirm canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` point to `https://responserehearsal.com/`.

## Before GitHub Staging

- Confirm `git remote -v` shows the intended GitHub remote.
- Confirm the repository does not include `Incident Response Sources/`, Obsidian notes, `.agents/`, `.codex/`, `output/`, or test artifacts.
- Confirm GitHub renders the repository cleanly and the intended runtime files are present at the repository root.
- Confirm the prototype is still educational, defensive, browser-only, and does not ask users to enter sensitive incident details.
- Re-run syntax and browser smoke checks immediately before pushing a public milestone.

## Human Launch And Discovery Checklist

- Google Search Console: add/verify `responserehearsal.com`, submit `https://responserehearsal.com/sitemap.xml`, and inspect/request indexing for the homepage, Guides hub, 15-minute drill, 30-minute tabletop guide, and public trust pages.
- Bing Webmaster Tools: add or import the site, submit the sitemap, and confirm crawl/index status after discovery.
- IndexNow: key file URL is `https://responserehearsal.com/b7e1a9c42d6f4083a5c8e2f9017b6d34.txt`. For a future manual ping, submit homepage and sitemap URLs with key `b7e1a9c42d6f4083a5c8e2f9017b6d34`.
- Cloudflare/domain sanity: confirm apex and `www` return `200 OK`, HTTPS is valid, the apex domain remains canonical, `robots.txt` and `sitemap.xml` are reachable, and DNS/redirect settings match the intended production route.
- WebsiteLaunches/directories: position the site as a browser-only tabletop exercise generator for defensive readiness practice and facilitator preparation. Do not present it as legal advice, compliance advice, incident-response consulting, or a guaranteed readiness solution.
- Listing category ideas: cybersecurity training, incident response tabletop exercise, security awareness, business continuity planning, facilitator tools.

## 2026-07-11 AdSense Preflight Result

Verdict after fixes: Submit. This is a readiness judgment, not a guarantee of AdSense approval.

Submission status: Submitted to AdSense on 2026-07-11. Sean submitted all sites, including Response Rehearsal. AdSense review is pending.

Fixed before the verdict:

- Removed exposed `Response Rehearsal prototype` wording from generated packet footer text.
- Updated Privacy and Trust copy so possible third-party advertising/cookies are acknowledged if AdSense is enabled.

Preflight evidence:

- Live `https://responserehearsal.com/ads.txt` includes `google.com, pub-7040609172484112, DIRECT, f08c47fec0942fa0`.
- Live sitemap includes the homepage, Guides hub, 15-minute guide, 30-minute guide, About, Privacy, Terms, Contact, and Trust & Privacy.
- Reviewed public HTML for placeholder/prototype/beta wording, hobby/tabletop-game framing, deceptive ad labels, and ad-click encouragement.
- Content-page generator CTA text remains readable before hover.

Current hold posture: do not churn production while AdSense review is pending unless AdSense, Search Console, or live-site checks report a concrete issue or blocker. `/guides.html` remains indexing requested / pending recrawl; the 15-minute and 30-minute guide articles are indexed/green.

2026-07-11 Cloudflare Crawler Hints enabled. Sean enabled the Cloudflare Crawler Hints beta across all four sites. This is a Cloudflare-side/search-crawl assist, not a production code change. Keep monitoring `/guides.html` indexing requested / pending recrawl, the indexed/green guide articles, sitemap/Search Console, Bing, and AdSense review; do not churn production unless AdSense/Search Console reports a concrete issue or a live blocker appears.

After AdSense approval or ad-code placement, re-check the live pages to confirm ads do not resemble navigation, CTA buttons, download controls, or exercise action controls.

### 2026-07-11 Guides Hub Readiness Signals

Use this list when Sean next has Google Search Console, Bing Webmaster Tools, or referral/directory evidence available. The July 11 Human Ops export folder did not include Response Rehearsal data, so do not make content decisions from those exports.

Current Search Console status from Sean's 2026-07-11 inspection:

- `https://responserehearsal.com/guides.html`: not indexed; indexing requested. This is pending recrawl, not a site defect.
- `https://responserehearsal.com/15-minute-incident-response-drill.html`: indexed and green.
- `https://responserehearsal.com/30-minute-incident-response-tabletop.html`: indexed and green.
- No issues were reported on the indexed guide pages.

- Sitemap: `https://responserehearsal.com/sitemap.xml`
  - Hold if Google and Bing have fetched it successfully and the listed URLs are discoverable.
  - Fix sitemap/nav if it is not fetched, shows a fetch error, or omits the current public URLs.
- Homepage: `https://responserehearsal.com/`
  - Hold if indexed and no coverage/canonical warnings appear.
  - Request indexing if discovered but not indexed after the sitemap is accepted.
  - Fix sitemap/nav if inspection reports blocked, redirected unexpectedly, or different canonical than the apex URL.
- Guides hub: `https://responserehearsal.com/guides.html`
  - Current status: indexing requested / pending recrawl after Sean's 2026-07-11 inspection.
  - Hold if discovered/indexed and linked from the homepage or sitelinks/internal link reports.
  - Do not treat the current not-indexed state as a defect unless Search Console later reports crawl, canonical, or blocked-page issues.
  - Write the next guide only after this page is indexed or there is a clear query/referral signal showing related demand.
- 15-minute drill guide: `https://responserehearsal.com/15-minute-incident-response-drill.html`
  - Current status: indexed and green after Sean's 2026-07-11 inspection.
  - Hold if impressions begin for short-drill or fast-response rehearsal terms.
  - Write the next guide if impressions appear with low CTR, or if related queries suggest a narrower practical drill topic.
- 30-minute tabletop guide: `https://responserehearsal.com/30-minute-incident-response-tabletop.html`
  - Current status: indexed and green after Sean's 2026-07-11 inspection.
  - Hold if impressions begin for tabletop/facilitation terms.
  - Write the next guide if query data clusters around a specific incident type, audience, or exercise format.
- Ransomware communications drill route: `https://responserehearsal.com/?type=ransomware&focus=communications&duration=60&difficulty=standard&rehearsal=ransomware-communications-pressure`
  - Treat as an app route, not a static sitemap URL.
  - Use URL inspection only if Search Console allows testing the parameterized route and the live test renders the generator cleanly.
  - Fix nav only if the Guides hub link breaks; otherwise hold and let static guide URLs carry indexing.
- Bing crawl/index status:
  - Hold if Bing has discovered the sitemap and core URLs.
  - Resubmit sitemap or IndexNow if Bing has not crawled after several days.
  - Fix only if Bing reports blocked crawl, unreachable URLs, or canonical/redirect problems.
- WebsiteLaunches/directories/referrals:
  - Hold if referral visits are present and bounce behavior is not obviously broken.
  - Improve listing copy if referral traffic appears but no meaningful engagement follows.
  - Write the next guide only if a referral source or directory category points to a specific practical search intent.

Suggested listing copy:

> Response Rehearsal is a browser-only tabletop exercise generator for practicing incident decisions before the real day. It helps facilitators draft defensive scenarios, injects, participant handouts, facilitator notes, worksheets, and after-action prompts without accounts, uploads, or a backend. Generated material is a planning aid that should be reviewed against each organization's own policies and risk tolerance.

## Future Optional Static Hosting

If this later moves beyond GitHub repository staging to Cloudflare Pages or another static host:

- Project root: repository root.
- Build command: none.
- Output directory: repository root.
- Required runtime files: `index.html`, `styles.css`, `app.js`, `about.html`, `guides.html`, `15-minute-incident-response-drill.html`, `30-minute-incident-response-tabletop.html`, `privacy.html`, `terms.html`, `contact.html`, `trust-and-privacy.html`.
- Review the live apex and key pages after each production push.

## Handoff Summary For Staging

- App type: static site, no backend.
- Build command: none.
- Public entry point: `index.html`.
- Required runtime files: `index.html`, `styles.css`, `app.js`, `about.html`, `guides.html`, `15-minute-incident-response-drill.html`, `30-minute-incident-response-tabletop.html`, `privacy.html`, `terms.html`, `contact.html`, `trust-and-privacy.html`, `robots.txt`, `sitemap.xml`.
- Current endpoint: `https://responserehearsal.com/`.
- Public guide pages: `guides.html`, `15-minute-incident-response-drill.html`, and `30-minute-incident-response-tabletop.html`.

## Product Guardrails

- Static/browser-only.
- No login.
- No upload.
- No backend.
- No database.
- No personal or confidential incident details entered by users.
- Defensive tabletop exercise preparation only; avoid operational attack guidance.

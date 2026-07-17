# Codex Handoff Status

## Last Updated

2026-07-16

## Current State

The IR Tabletop Generator project has:

- A static prototype at the project root.
- A structured Obsidian vault in `IR Tabletop Generator/`.
- A local source document folder at `Incident Response Sources/`.

## Prototype Files

- `index.html`
- `styles.css`
- `app.js`
- `README.md`

## Vault Structure

- `00 Hub/`
- `01 Product Strategy/`
- `02 Prototype Notes/`
- `03 Source Research/`
- `04 Scenario Design/`
- `05 Compliance and Trust/`
- `06 Decisions/`
- `07 Handoff/`

## Recent Work

- Created first browser-only prototype.
- Added cyber-themed interface.
- Added seeded scenario generation.
- Added copy and print controls.
- Fixed mobile layout after screenshot review.
- Created initial Obsidian vault structure and notes.
- Used three parallel agents for content model, UX, and source-research recommendations.
- Added exercise focus, self-contained exercise profile, use note, facilitator/scribe placeholders, initial conditions, meeting agenda, participant roles, discussion prompts, decision points, stakeholder messages, communications checklist, evidence checklist, and action tracker.
- Added shareable URL state through the Copy scenario link control.
- Added source-to-feature and packet anatomy notes.
- Added seeded scenario variables, scenario-specific evidence needs, View packet control, and Markdown-style copied packet text.
- Added phase labels to the timeline and stage strip: Detect, Triage, Contain, Communicate, Recover.
- Added exercise ground rules and scenario-specific assumptions to validate.
- Converted timeline generation to true phase-specific inject pools and added phase objectives.
- Added Markdown packet download and print page margins.
- Added Daily drill button using a date-based seed.
- Added Prototype QA Checklist and Content Expansion Backlog notes.
- Added footer trust message to the prototype.
- Split the packet visually into Participant Handout and Facilitator Guide sections.
- Added separate Markdown downloads for participant handout and facilitator guide.
- Added facilitator-only expected discussion areas, watch-for gaps, and evidence prompts.
- Made the facilitator guide Markdown export more self-contained with a participant handout reference snapshot.
- Deepened ransomware and credential phishing content pools across openings, phase injects, decisions, stakeholder messages, initial conditions, assumptions, and facilitator guidance.
- Deepened insider data exposure, public service outage/DDoS, and vendor compromise content pools to match the same first-pass depth.
- Added a facilitator-only Facts / Assumptions / Decisions / Questions worksheet to the page and facilitator Markdown export.
- Added full-packet, participant-only, and facilitator-only print controls with print-mode CSS.
- Captured future slide-ready export idea: slide outline, landscape slide-format PDF, and possible client-side PowerPoint export for organizational templates.
- Added first slide-ready output prototype: copyable slide outline and printable slide deck with remote facilitation ground rules, configurable group check-in, one slide per inject phase, key decisions, worksheet capture, and group lessons learned.
- Made first print/export polish pass: lighter scribe-capture slide, slide numbers in slide-deck mode, and white-background phase objective cards in facilitator print output.
- Added browser presentation mode for remote facilitation: one-slide-at-a-time deck view, next/previous controls, keyboard navigation, Escape exit, and shareable `view=present&slide=N` URLs.
- Added printable and downloadable blank facilitator worksheet for live scribing and after-action capture.
- Added discussion prompt and evidence/after-action prompt slides to better match the facilitator flow.
- Added separate facilitator and participant browser presentation modes.
- Added a facilitator notes rail with notes visibility control.
- Added participant-safe presentation filtering so shared mode skips facilitator-only slides and removes facilitator/scribe-only bullets from shared inject slides.
- Updated presentation URLs to preserve `deck=participant|facilitator`, slide number, and hidden notes state.
- Public launch work renamed the site to Response Rehearsal at `https://responserehearsal.com/`.
- Added public trust pages, 15-minute drill guide, 30-minute tabletop guide, focused ransomware communications pressure drill path, and a static `guides.html` hub.
- July 11 guide-hub pass used current local/static site inventory only; fresh Search Console exports in `C:\Users\rdrnr\Projects\AI Ops Center\Human Ops 7.11.26` did not include a Response Rehearsal export.
- Added a notes/docs-only Guides hub search readiness checklist covering Search Console sitemap status, URL inspection/indexing, Bing crawl/index status, WebsiteLaunches/directory/referral evidence, and exact Response Rehearsal URLs to verify next.
- Sean inspected the guide URLs in Search Console on 2026-07-11: `https://responserehearsal.com/guides.html` was not indexed and indexing was requested, so it is pending recrawl and not a site defect; `https://responserehearsal.com/15-minute-incident-response-drill.html` and `https://responserehearsal.com/30-minute-incident-response-tabletop.html` are indexed/green with no reported issues.
- Ran a 2026-07-11 AdSense preflight audit. Fixed two small blockers before submission posture: removed exposed `prototype` wording from generated packet footer text and updated Privacy/Trust copy for possible third-party advertising/cookies. Verdict after fixes: Submit, with no guarantee of AdSense approval.
- Submitted to AdSense on 2026-07-11. Sean submitted all sites, including Response Rehearsal. Current posture: AdSense review pending; `/guides.html` indexing requested / pending recrawl; the 15-minute and 30-minute guide articles are indexed/green; no production churn unless AdSense, Search Console, or live-site checks report a concrete issue or blocker.
- 2026-07-11 Cloudflare Crawler Hints enabled. Sean enabled the Cloudflare Crawler Hints beta across all four sites. This is a Cloudflare-side/search-crawl assist, not a production code change. Continue monitoring `/guides.html` indexing requested / pending recrawl, guide pages indexed/green, sitemap/Search Console, Bing, and AdSense review.
- 2026-07-11 product-structure note captured Sean's direction that the current site feels chaotic, the Interactive Rehearsal is the strongest part, the landing page should become a true intro with path/door choices, and Interactive Rehearsal should move into a focused workspace. Planning note: `IR Tabletop Generator/01 Product Strategy/2026-07-11 Structured Landing Focused Interactive Rehearsal.md`. No production changes were made.
- 2026-07-12 contact trust fix published in commit `4c6562f Add real Response Rehearsal contact path`. Sean confirmed `contact@responserehearsal.com` is available through Cloudflare Email Routing. Updated `contact.html`, `privacy.html`, `styles.css`, and `sitemap.xml` so `/contact` has a real public contact path, a truthful form-style static mailto workflow, a visible email fallback, and no placeholder/future-channel contact wording.
- 2026-07-12 live verification passed for `https://responserehearsal.com/contact`, `https://responserehearsal.com/contact.html`, Privacy, Terms, Trust & Privacy, stylesheet contact-form rules, and sitemap markers. Cloudflare Email Obfuscation rewrites visible email links in raw HTML, but the form action and JavaScript mailto target remain `contact@responserehearsal.com`.
- 2026-07-12 post-contact-fix QA confirmed commits `4c6562f` and `922e0f5` are present, the repo was clean before notes updates, and key live surfaces returned 200: `/`, `/contact`, `/privacy`, `/terms`, `/guides.html`, `sitemap.xml`, `robots.txt`, and `ads.txt`.
- 2026-07-12 live marker checks found the Contact page mailto form, no fake server-side submit language, sitemap guide/contact/privacy markers, robots sitemap directive, AdSense publisher line `pub-7040609172484112`, Guides hub links, and default trust-page CTA styling through `.content-page a.primary-button` and `.primary-button`.
- 2026-07-12 backlog updated with the recommended first implementation slice for Structured Landing + Focused Interactive Rehearsal. It remains post-AdSense or explicit-approval only; no production code/content changed in this QA pass.
- 2026-07-12 Cloudflare Low recommendation addressed in commit `ce6763d Add Response Rehearsal security.txt` by adding `.well-known/security.txt` with RFC 9116-style Contact, Expires, Preferred-Languages, and Canonical fields. It uses `mailto:contact@responserehearsal.com` and `https://responserehearsal.com/contact`, with no bug bounty or permission-to-test language.
- 2026-07-12 live verification passed for `https://responserehearsal.com/.well-known/security.txt`: `200 OK`, `Content-Type: text/plain; charset=utf-8`, required Contact/Expires/Canonical fields present. The first immediate post-push request briefly returned the homepage fallback, but a 20-second retry returned the correct text file.
- 2026-07-16 implemented the smallest safe first slice toward Structured Landing + Focused Interactive Rehearsal in commit `ada8697 Add focused rehearsal entry paths`: added a homepage path-door band above the existing format chooser with Interactive Rehearsal, Build Materials, and Guides / Short Drills choices. Interactive Rehearsal and Build Materials reuse the existing mode system and scroll to existing sections; Guides links to `guides.html`.
- 2026-07-16 live verification passed for the path-door slice: homepage returned `200` and contains the new path labels and `data-path-target="interactive"`; live `app.js` contains `pathButtons` and `openPathDoor`; Guides, Contact, Privacy, Terms, sitemap, `ads.txt`, and `security.txt` stayed healthy.
- 2026-07-16 trust/search posture preserved: AdSense review remains pending; `/guides.html` indexing requested / pending recrawl; 15-minute and 30-minute guide pages indexed/green per Sean; live `ads.txt` and `/.well-known/security.txt` remain part of the verification set.
- 2026-07-16 direct interactive path state implemented and pushed in commit `23625e5 Add direct interactive path state`: added compatible `?path=interactive` support, preserved existing scenario and `rehearsal` parameters, and made the Interactive Rehearsal door copyable as `index.html?path=interactive` while normal clicks still use the existing in-page focused workspace.
- 2026-07-16 direct path publish is not yet live-verified. Local checks passed (`node --check app.js`, `git diff --check`, marker checks), and the commit was pushed to `main`, but direct `npx wrangler deploy` failed because Wrangler auto-detected an invalid worker name from the folder path; `npx wrangler pages project list` then confirmed non-interactive Wrangler needs `CLOUDFLARE_API_TOKEN`. Failed Wrangler side effects (`wrangler.jsonc` and appended `.gitignore` lines) were removed and the repo returned clean.
- 2026-07-16 production remains on the prior live path-door slice: cache-busted live checks for `app.js` and homepage did not show the new `pendingPathFocus` / `path=interactive` markers after the push wait. Current live trust checks still passed for homepage, Guides, Contact, `ads.txt`, and `/.well-known/security.txt`.
- 2026-07-16 deployment recovery recheck: production still does not show the direct-path markers. Local inspection found no committed Wrangler config, no `.github/workflows`, no `package.json`, and no recorded Cloudflare Pages project name. The confirmed source/staging remote is `https://github.com/sashq-tech/ir-tabletop-generator.git`. Sean's safest phone action is to open Cloudflare Workers & Pages, find the Pages project serving `responserehearsal.com`, confirm it is connected to `sashq-tech/ir-tabletop-generator` on `main`, then retry/trigger deployment for the latest commit. Do not create Wrangler config until the exact Pages project is confirmed.
- 2026-07-17 deploy hook recovery resolved the direct-path blocker. Sean provided and successfully triggered the Cloudflare Pages deploy hook `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/003a0ca5-b605-40d3-84c4-fed90a39de80`; Cloudflare returned deployment id `4627d6a8-8cc7-4f8d-ba63-46fccc741b79`. Live homepage now contains `href="index.html?path=interactive"`, and live `app.js` contains `pendingPathFocus`, `focusPendingPath`, `state.path = "interactive"`, plus preserved `syncInteractiveScenarioPicker(params.get("rehearsal"))`.
- 2026-07-17 browser verification passed: `https://responserehearsal.com/?path=interactive` loads into `document.body.dataset.mode=interactive`, preserves `path=interactive`, scrolls `#interactiveExercise` to the top of the viewport, and focuses `#startInteractiveBtn`. The parameterized ransomware communications pressure URL preserved `type=ransomware`, `focus=communications`, `duration=60`, `difficulty=standard`, and `rehearsal=ransomware-communications-pressure`.
- 2026-07-17 focused live checks passed after deploy hook: Contact, Privacy, Terms, Guides, `ads.txt`, `/.well-known/security.txt`, sitemap, and robots are reachable and contain expected trust/search markers.

## Next Recommended Step

Direct Interactive Rehearsal path support is live and verified. Contact trust is fixed with `contact@responserehearsal.com`, `security.txt` is configured for Cloudflare trust hygiene, and the homepage has a small path-door entry without a full restructure. Search Console status remains: `/guides.html` indexing requested / pending recrawl; the 15-minute and 30-minute guide articles are indexed/green per Sean. AdSense review remains pending, so keep churn low. The confirmed production recovery path is the Cloudflare Pages deploy hook Sean provided on 2026-07-17. Next useful implementation slice, if Sean wants to continue, is to reduce competing export controls while in interactive mode without creating a new route yet.

## Later Roadmap Note

For August exercise prep, slide-ready output and browser presentation mode now exist as first prototypes so users can run from the browser, paste generated exercise content into organizational PowerPoint templates, or print a slide-format PDF. True `.pptx` export should still wait until the no-backend approach is proven.

Important example use case: the user's exercise spans three geographic sites and is delivered over Microsoft Teams. Slide output should still remain platform-agnostic, pace the exercise in organized chunks, create clear response moments for each group, and avoid the awkwardness of running the session from a long Confluence page.

## Cautions

- Keep this project separate from ReadyScene and Utility Stack.
- Treat downloaded source documents as research/reference, not copy-paste text.
- Preserve the no-login/no-upload/no-backend product promise unless the user explicitly changes direction.

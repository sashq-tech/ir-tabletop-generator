# Response Rehearsal Post-Launch Backlog

This backlog captures practical next improvements after the first public launch. It is intentionally scoped to browser-only, static-site work with no accounts, uploads, database, or backend service.

## 2026-09-22 Public Page Structured Data And Breadcrumbs

Status: Published in commit `cdc74eb` on 2026-09-22.

Measurement boundary:

- Fresh Search Console shows `/15-minute-incident-response-drill` at `142` impressions and average position `14.99`.
- That guide was just released with search-intent alignment, so this pass does not rewrite it, duplicate its content, or alter the focused Interactive Rehearsal path.

Audit findings:

- About, Privacy, Terms, Contact, and Trust & Privacy already use truthful page types and schema descriptions that match their meta descriptions.
- Guides correctly uses `CollectionPage` and an eight-item facilitator collection, but its schema description differs from its meta description and it lacks the shared page identity fields used by the trust pages.
- None of the six audited pages links its page node to a page-specific `BreadcrumbList`.

Bounded implementation:

- Add a two-item `BreadcrumbList` to each audited page: Response Rehearsal home, then the current canonical page.
- Link each existing page node to its breadcrumb by a unique canonical `@id`.
- Align Guides with its canonical metadata and the existing `@id`, `isPartOf`, and language conventions without changing the visible guide or its eight-item collection.
- Extend regression coverage to parse both nodes on all six routes, compare page descriptions and URLs with metadata/canonical/sitemap evidence, verify unique IDs, and reject breadcrumb drift.

No certification, compliance, review, rating, pricing, service, or unsupported product claim is added.

Release evidence:

- `node --check app.js`, `node --check qa/workspace-regression.spec.js`, `git diff --check`, local JSON-LD parsing, and all 34 desktop/mobile Chrome workspace regressions passed.
- Production About, Privacy, Terms, Contact, Trust & Privacy, and Guides returned `200`; each exposed the expected page type plus a linked two-item `BreadcrumbList` matching canonical metadata.
- Guides retained its eight-item collection and its schema description now matches the page meta description.
- Live 390px checks found no horizontal overflow or page errors, and the focused BEC Interactive Rehearsal still restored and presented three decisions.

## 2026-08-13 Preventive AdSense Value Audit

Status: Published in commit `4222ab3` on 2026-08-13. The facilitator learning path is live; no AdSense resubmission or account setting was changed.

Evidence:

- The live product has nine indexable routes. The homepage and two drill guides are substantive; the Guides hub is primarily navigational, while About, Privacy, Terms, Contact, and Trust & Privacy are appropriately concise for their purposes.
- Interactive Rehearsal is a complete original workflow with scenario selection, pre-brief, runbook, timer, injects, decision consequences, facilitator notes, and AAR output. Packet generation, worksheets, slides, copy, download, and print paths add meaningful facilitator utility.
- Source contains no manual AdSense units, so ad-to-content balance is not the current risk. The meaningful preventive gap is a thin discovery layer between first-time facilitators and the existing product depth.
- The newest Search Console snapshot, generated 2026-08-13 with data through 2026-08-10, shows `0 / 10` clicks/impressions for the latest seven days versus `0 / 6` previously. Query evidence is still sparse and centered on defining incident response drills, so it does not justify broad SEO rewrites or multiple new pages.

Candidate decision:

- Deepen `guides.html` into one original facilitator learning path covering exercise sizing, decision objectives, room preparation, inject pacing, decision-quality capture, realistic pressure, and AAR closeout.
- Reuse direct links into the existing 15-minute, 30-minute, Interactive Rehearsal, ransomware communications, BEC, and Packet Generator paths. Do not add a new route or alter the focused workspace.
- Add a browser regression for substantive guide content, structured-data alignment, direct BEC handoff, Back navigation, and desktop/mobile overflow.

Release evidence:

- `node --check app.js`, diff hygiene, and all 16 desktop/mobile Chrome workspace regressions passed immediately before publication.
- The live `/guides` route returned `200` with the new facilitator learning path, aligned canonical URL, and CollectionPage structured data after commit `4222ab3` reached production.
- AdSense resubmission remains a separate human/account decision.

## 2026-09-19 Incident Response Drill Search Alignment

Status: Published in commit `d10de97` on 2026-09-19 after the completed September 18 measurement hold.

Evidence through 2026-09-17:

- Latest seven days: `0 clicks / 73 impressions`, versus `0 / 19` in the previous seven days.
- Full 35-day page result for `/15-minute-incident-response-drill`: `94 impressions`, `0 clicks`, average position `17.07`.
- Definition-intent queries include `what is an incident response drill?` (`34` impressions, position `9.09`), `what is an incident response drill` (`25`, position `13.56`), and `what is incident response drill` (`3`, position `9.33`), all with zero clicks.
- The page already contains substantial original facilitator guidance, a worked decision record, primary sources, FAQ/schema, and a direct 15-minute Interactive Rehearsal path. A new page or broader content expansion is not justified.

Bounded implementation:

- Align the HTML title, social title, Article headline, and page-specific heading with the measured definition question.
- Put a concise, useful definition immediately under the page heading, followed by the existing 15-minute rehearsal action before the format comparison.
- Keep the current guide depth, FAQ, primary sources, canonical route, scenario-first workspace, and 15-minute BEC rehearsal handoff unchanged.
- Add regression assertions for title, description, heading, direct answer, Article schema, date modified, and the existing end-to-end rehearsal flow.

Acceptance criteria:

- Searchers receive a direct answer without a thin duplicate page or unsupported claim.
- The title and description accurately preview the definition, worked example, and 15-minute interactive action.
- The direct CTA still restores the 15-minute BEC rehearsal, timer, pre-brief, five-inject flow, AAR copy, print state, and Back navigation.
- Desktop and 390px layouts have no horizontal overflow or page errors.
- No account, analytics, AdSense, Cloudflare, DNS, Search Console, backend, upload, or database setting changes are made.

Release evidence:

- `node --check app.js`, `node --check qa/workspace-regression.spec.js`, `git diff --check`, metadata/JSON-LD parsing, and all 34 desktop/mobile Chrome workspace regressions passed.
- Production returned the exact new title, description, canonical URL, Article headline, direct definition, and `2026-09-19` modified date.
- Live desktop and 390px runs followed the CTA into the 15-minute BEC rehearsal, restored the timer and scenario after reload, completed all five injects with three decisions each, reached AAR/print-ready state, returned to the guide with Back, and showed no horizontal overflow or page errors.
- Search Console and AdSense were not manually resubmitted; the page remains in a measurement hold so impressions and clicks can accumulate against the new snippet.

## 0. Structured Landing And Focused Interactive Rehearsal

Status: Complete in the 2026-08-03 approved landing/workspace release. Keep the single-document `?path=` model unless real usage shows a need for separate HTML files.

Why it matters: Sean's product signal is that the current site feels chaotic, while the Interactive Rehearsal is the strongest part. The landing page should introduce Response Rehearsal, then offer clear paths/doors instead of exposing every generator, export, slide, worksheet, and guide option at once.

Implementation decision: keep `index.html` as the canonical landing page and use compatible `?path=interactive` and `?path=packet` workspace state. This preserves existing parameterized drill links while giving browser Back, Forward, refresh, and copied URLs a stable route contract.

2026-08-03 approved implementation:

- Bare `/` now remains a calm landing page instead of being rewritten into default generator parameters.
- The first screen offers three clear paths: Interactive Rehearsal, Packet Generator, and Guides.
- Interactive Rehearsal is a distraction-free workspace with public navigation, packet actions, packet content, slides, and worksheets hidden; one persistent Exit workspace action returns to the landing page.
- Packet Generator retains the existing packet, handout, facilitator guide, slide, worksheet, copy, download, and print controls.
- `pushState` is used only for path entry/exit. In-workspace settings use `replaceState`, and `popstate` restores route, mode, scenario, and presentation state without duplicate history entries.
- Legacy parameterized URLs without `path=` open the Packet Generator and normalize to `path=packet`; existing `path=interactive` links preserve their selected scenario and rehearsal.
- A repeatable Playwright suite now covers desktop and 390px mobile entry/exit/history, direct links, refresh, packet copy/download/print, start-to-AAR and AAR print state, visible-control names, and horizontal overflow.

2026-07-16 safe first slice:

- Added a small homepage path-door band above the existing format chooser.
- Primary path: Interactive Rehearsal, wired to the existing focused interactive workspace.
- Secondary paths: Build Materials and Guides / Short Drills.
- No new route, app feature, guide page, DNS/platform setting, sitemap change, or trust-page change was introduced.
- The later implementation kept the compatible query route instead of adding `rehearsal.html`, avoiding duplicated app markup and redirect risk.

2026-07-16 direct-path follow-up:

- Commit `23625e5 Add direct interactive path state` adds compatible `?path=interactive` support without creating a new route.
- Existing scenario URL parameters remain intact, including `type`, `org`, `focus`, `duration`, `difficulty`, group labels, seed, presentation state, and `rehearsal`.
- The Interactive Rehearsal door now has a copyable static href, `index.html?path=interactive`, while JavaScript still intercepts normal clicks for the current-page focused workspace.
- Local checks passed, but production publish is pending. Wrangler direct deploy blocked because no `CLOUDFLARE_API_TOKEN` is available in this non-interactive environment, and live cache-busted marker checks did not yet show commit `23625e5`.
- Before the next product slice, publish/verify commit `23625e5` through the established Cloudflare Pages/GitHub path or provide a usable Cloudflare deploy token.

2026-07-18 deep-audit follow-up:

- Commit `9503b7e` fixed the localized Interactive Rehearsal wording defect where `Communications pressure` could render as `communications pressure pressure`.
- Live desktop and 390px mobile QA passed for direct `?path=interactive`, landing-door click, facilitator notes, copy feedback, start-to-AAR, AAR export, packet/sample copy, Markdown export filename generation, stubbed print path, back/forward behavior, and browser console.
- P3 URL hygiene item: promoted to a concrete Search Console defect on 2026-07-18 after Sean reported redirecting sitemap variants. Fixed in commit `a64f54b Use extensionless canonical URLs`, deployed through Cloudflare Pages deployment `55cf2a94-879a-4216-93d1-7feacf5326d0`, by moving sitemap `<loc>` values, canonical metadata, Open Graph URLs, structured-data URLs, and static internal hrefs to extensionless final routes while preserving `.html` compatibility redirects.
- P3 landing URL item: resolved in the 2026-08-03 landing/workspace release; bare `/` remains clean until a workspace is selected.

2026-07-18 print/PDF acceptance follow-up:

- Commit `1a306de` fixed the packet print front-matter defect by hiding `.path-doorway` and `.format-chooser` in `@media print`.
- Real browser PDFs were generated before and after the fix under `output/pdf/`, with Poppler-rendered contact sheets under `output/pdf/rendered*`.
- After-fix review passed for generated full packet, participant-only handout, and facilitator-only guide: no landing UI pages, no obvious clipped text, light ink, readable type, and participant output did not leak facilitator-only sections.
- P3 AAR print item: complete and live in commit `4378385 Add AAR-only print view`, deployed through Cloudflare Pages deployment `3956bfd4-bc39-4724-953a-d4a11e20b9d6`. The fix uses `interactive-aar-ready` only after AAR completion and print CSS hides workspace controls/runbook while preserving the AAR record.
- PDF evidence passed: live-before AAR was 5 pages with workspace chrome, patched live-after AAR is 3 pages starting directly with the after-action reveal. Packet regression stayed stable on production: full packet 9 pages, participant handout 3 pages without visual facilitator leakage, facilitator guide 8 pages.

Implementation checklist used for the approved release:

1. Choose route shape and compatibility rule:
   - Preferred starting point: keep `index.html` as the landing/front door and create `rehearsal.html` for the focused Interactive Rehearsal workspace.
   - Preserve existing parameterized rehearsal links from Guides, especially the ransomware communications pressure drill. If a separate `rehearsal.html` is used, add a compatibility handoff plan before changing public links.
2. Draft the landing shell only:
   - Product name, concise incident-response decision-rehearsal positioning, browser-only/no-login/no-upload trust line, and three doors: Interactive Rehearsal, Guides / Short Drills, About / Trust / Privacy.
   - Do not expose packet exports, slide controls, worksheet controls, detailed settings, or sample packet buttons on first load.
3. Map current controls before moving code:
   - Interactive Rehearsal workspace: scenario picker, pre-brief, timer, inject stage, choices, consequence meters, facilitator notes, copy inject, AAR reveal/export.
   - Secondary facilitator prep path: full packet, participant handout, facilitator guide, slides, worksheet, print/download/copy controls.
4. Verify before publish:
   - Existing guide URLs still return 200 and remain linked.
   - Guides hub remains discoverable.
   - `/contact`, Privacy, Terms, Trust & Privacy, sitemap, robots, and `ads.txt` remain clean.
   - `/.well-known/security.txt` remains live as `text/plain`.
   - CTA text remains visible without hover.
   - No new app features or guide content are added during this restructure slice.

Acceptance criteria:

- First load is a true landing page with concise intro, trust/positioning, and clear path choices.
- Interactive Rehearsal has a focused workspace with scenario picker, timer, inject stage, choices, consequence meters, facilitator notes, copy controls, and after-action reveal, without packet/export clutter.
- Guides/short drills and About/Trust/Privacy remain discoverable.
- Existing indexed guide URLs and parameterized rehearsal links are preserved or intentionally redirected with checks.
- CTA labels remain readable without hover and serious incident-response positioning is preserved.
- No new app features are added as part of the restructure unless separately approved.

## 1. Facilitator Print And Export Polish

Status: First pass complete. Keep this item open for future print/readability refinements after real facilitator use.

Why it matters: Facilitators are likely to save, print, or paste materials into a meeting agenda before running a session. Cleaner outputs make the tool feel trustworthy and reduce the manual cleanup needed before a real tabletop.

First small implementation step: Review the current print, download, AAR summary, participant handout, facilitator guide, worksheet, and slide deck outputs from one generated exercise and one sample packet. Identify the two most common formatting gaps, such as missing metadata, awkward page breaks, unclear section titles, or copy text that needs facilitator context.

Acceptance criteria:

- A generated packet includes scenario metadata, exercise duration, audience, selected scenario family, and facilitator notes in the appropriate outputs.
- Print views avoid obvious clipped text, orphan headings, or missing page context.
- Copy/export controls produce text that can be pasted into email, Word, or meeting notes without losing key decisions, owners, and follow-up prompts.

## 2. Scenario Library Growth

Status: In progress. Focused drills now include role-change repository access, lost travel laptop exposure, cloud storage link exposure, SaaS data retention failure, identity provider outage, software signing certificate failure, vendor platform outage, and ransomware communications pressure; continue expanding underrepresented families with realistic, defensive drills.

Why it matters: The app will be judged quickly by whether the scenarios feel realistic, varied, and useful. A broader library gives repeat visitors more reasons to return and supports different organization sizes, roles, and exercise goals.

2026-08-13 bounded implementation: Added a complete lost travel laptop exposure drill with five injects, three distinct decisions per inject, facilitator consequences, direct-link restoration, and AAR output. The drill covers device and session containment, evidence preservation, remote lock/wipe criteria, customer notification readiness, replacement-device continuity, and durable travel controls without operational attack detail.

2026-08-13 bounded implementation: Added a complete cloud storage link exposure drill with five injects, three distinct decisions per inject, direct-link restoration, facilitator pre-brief copy, and AAR output. The drill covers nested sharing scope, data ownership, incomplete anonymous-access evidence, link and guest-session containment, contract/customer thresholds, and sustainable governance recovery without duplicating the contractor or lost-device exercises.

2026-08-22 bounded implementation: Added a complete SaaS data retention failure drill with five injects, three distinct decisions per inject, direct-link restoration, facilitator pre-brief copy, AAR copy, and AAR-only print behavior. The drill covers automated-deletion containment, evidence preservation, retention and legal-hold scope, non-destructive restore authority, customer-impact thresholds, communications, and governance recovery without duplicating ransomware restoration or cloud-sharing decisions.

2026-08-22 bounded implementation: Added a complete identity provider outage drill with five injects, three distinct decisions per inject, direct-link restoration, facilitator pre-brief copy, AAR copy, and AAR-only print behavior. The drill covers break-glass authority, authentication evidence, application-level continuity, vendor escalation, cause-neutral communications, staged recovery validation, and durable emergency-access governance without duplicating SaaS admin lockout or general availability scenarios.

2026-08-22 bounded implementation: Added a complete software signing certificate failure drill with five injects, three distinct decisions per inject, direct-link restoration, facilitator pre-brief copy, AAR copy, and AAR-only print behavior. The drill covers release containment, signed-artifact and trust-chain evidence, accountable emergency signing, customer and vendor communication thresholds, end-to-end recovery validation, key and certificate rotation, and durable certificate governance without duplicating generic vendor outage or update-integrity decisions.

Release evidence: Commit `542a881` is pushed and live. `node --check app.js`, `git diff --check`, and all 24 desktop/mobile Chrome regressions passed. Production `app.js` contains `ddos-identity-provider-outage`; the direct 390px route restored the selected drill, presented three decisions at every inject, reached AAR/print-ready state, and showed no horizontal overflow or page errors.

Latest release evidence: Commit `b2689d2` is pushed and live. `node --check app.js`, `node --check qa/workspace-regression.spec.js`, `git diff --check`, and all 26 desktop/mobile Chrome regressions passed. Production `app.js` contains `supplyChain-signing-certificate-failure`; the direct public 390px route restored the selected drill after reload, completed all five injects with three decisions each, reached AAR/print-ready state, and showed no horizontal overflow or page errors.

Next small implementation step: After this release is validated, reassess family coverage and consider a focused source-control platform outage during an active release that tests local continuity, protected-branch exception authority, artifact provenance, vendor escalation, and recovery validation without duplicating identity-provider or general vendor outages.

Acceptance criteria:

- Each new scenario has a distinct title, brief, inject timeline, expected decisions, facilitator notes, and after-action prompts.
- The scenario picker clearly maps the sample/drill to its incident family.
- New scenarios stay defensive, planning-focused, and free of confidential or organization-specific details.

## 3. Exercise Safety And Disclaimer Positioning

Status: First pass complete. Trust & Privacy is now a first-class public nav/footer link; continue checking safety visibility when adding new exports, samples, or public copy.

Why it matters: Response Rehearsal is a planning aid, not legal, compliance, or incident-response advice. That boundary should be visible at the moments where users are most likely to copy, export, or reuse exercise material.

First small implementation step: Review the generator, sample packet, AAR export, trust page, About page, Terms page, and README for consistent safety language. Identify whether one short in-app note should appear near generation/export controls without making the interface feel alarmist.

Acceptance criteria:

- Public pages and generated/exported materials use consistent wording about educational/planning use, facilitator responsibility, no guarantees, and no legal/security incident-response advice.
- The Privacy page and Trust & Privacy page remain clearly discoverable and distinct: privacy/data handling on Privacy, and trust/use boundaries on Trust & Privacy.
- Users are reminded not to enter real credentials, sensitive incident details, personal information, or regulated data.
- Safety language does not imply the app provides professional services or validated compliance outcomes.

## 4. Mobile Facilitation Usability

Status: First pass complete. Keep this item open for additional real-device testing.

Why it matters: Facilitators may use a phone or small laptop while presenting over Zoom or Teams. The live console, timers, inject controls, and notes need to remain usable under pressure on narrow screens.

First small implementation step: Run a focused mobile-width smoke test through loading a demo, opening interactive rehearsal, revealing facilitator notes, copying an inject, advancing decisions, and copying the AAR summary. Record the first layout or tap-target issue found.

Acceptance criteria:

- No horizontal overflow appears on common narrow widths.
- Timer, inject, decision, notes, and copy controls remain reachable without confusing scrolling.
- Buttons and status text fit their containers without clipping or layout jumps.

## 5. QA Coverage And Regression Checks

Status: Partially complete. Current release checks cover syntax, desktop and mobile Chrome workflows, print/export smoke, live crawl endpoints, cache-busted asset checks, public trust navigation, content-page generator CTA contrast, and trust-page structured data. A reusable live smoke target is still future work.

2026-08-06 unpublished structured-data and QA candidate:

- Added one page-specific JSON-LD node to About, Privacy, Terms, Contact, and Trust & Privacy. Each node uses the page's existing truthful description, extensionless self-canonical URL, unique page identifier, and shared site reference; no FAQ, rating, service, or organization claims were invented.
- Extended the Playwright suite to parse every new schema node and compare its URL and description with canonical, Open Graph, meta description, and sitemap evidence.
- Added desktop and 390px checks for landmarks, accessible control names, contact-form labels, keyboard focus order, JavaScript errors, and horizontal overflow across all five pages.
- Added a separate optional Firefox configuration and self-detecting runner. It executes the same suite when Playwright Firefox is installed and reports a truthful skip when it is unavailable.
- The application runtime, landing/workspace routing, drill content, packet generation, AAR flow, copy/download/print behavior, sitemap, and public page content were not changed.

Why it matters: The project is a single-page static app with many interconnected controls. Small changes can break scenario selection, copied text, print views, or presentation mode without an obvious build failure.

First small implementation step: Create a lightweight smoke-test checklist or script target that covers the highest-risk flows: syntax check, homepage load, BEC demo, ransomware packet copy, interactive scenario selection, facilitator notes reveal, AAR summary copy, trust page links, `robots.txt`, and `sitemap.xml`.

Acceptance criteria:

- The repo documents one repeatable pre-push verification path for docs-only changes and one for runtime changes.
- Runtime changes require `node --check app.js` plus a local browser smoke of the generator/demo flow.
- Launch/crawl changes require live checks for apex, `www`, `robots.txt`, `sitemap.xml`, key trust pages, and public navigation discoverability.

## Not In Scope Yet

- User accounts, saved exercises, uploads, analytics, databases, or backend services.
- Claims that the tool provides legal, compliance, or professional incident-response advice.
- Organization-specific incident details or real sensitive data in sample content.

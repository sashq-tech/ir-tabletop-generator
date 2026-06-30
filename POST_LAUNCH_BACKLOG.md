# Response Rehearsal Post-Launch Backlog

This backlog captures practical next improvements after the first public launch. It is intentionally scoped to browser-only, static-site work with no accounts, uploads, database, or backend service.

## 1. Facilitator Print And Export Polish

Status: First pass complete. Keep this item open for future print/readability refinements after real facilitator use.

Why it matters: Facilitators are likely to save, print, or paste materials into a meeting agenda before running a session. Cleaner outputs make the tool feel trustworthy and reduce the manual cleanup needed before a real tabletop.

First small implementation step: Review the current print, download, AAR summary, participant handout, facilitator guide, worksheet, and slide deck outputs from one generated exercise and one sample packet. Identify the two most common formatting gaps, such as missing metadata, awkward page breaks, unclear section titles, or copy text that needs facilitator context.

Acceptance criteria:

- A generated packet includes scenario metadata, exercise duration, audience, selected scenario family, and facilitator notes in the appropriate outputs.
- Print views avoid obvious clipped text, orphan headings, or missing page context.
- Copy/export controls produce text that can be pasted into email, Word, or meeting notes without losing key decisions, owners, and follow-up prompts.

## 2. Scenario Library Growth

Status: In progress. A focused role-change repository access drill has been added to the insider incident family; continue expanding underrepresented families with realistic, defensive drills.

Why it matters: The app will be judged quickly by whether the scenarios feel realistic, varied, and useful. A broader library gives repeat visitors more reasons to return and supports different organization sizes, roles, and exercise goals.

First small implementation step: Add one focused, copy-ready drill for each underrepresented incident family, using realistic but generic details and avoiding operational attack guidance. Start with short drills that exercise different decision pressures rather than long narrative branches.

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

Status: Partially complete. Current release checks cover syntax, mobile Chrome smoke, print/export smoke, live crawl endpoints, cache-busted asset checks, public trust navigation, and content-page generator CTA contrast; a reusable scripted smoke target is still future work.

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

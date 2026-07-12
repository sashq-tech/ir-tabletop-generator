# 2026-07-11 Structured Landing + Focused Interactive Rehearsal

## Source Signal

Sean clarified the product direction on 2026-07-11:

- Response Rehearsal currently feels chaotic.
- The strongest part of the product is the Interactive Rehearsal.
- Interactive Rehearsal should live in its own focused space with minimal distractions.
- The landing page should introduce the tool first, then let the user choose a path.
- Think in terms of paths/doors, not everything visible at once.

AdSense review is pending, so this note is planning only. Do not change production code, public content, sitemap, DNS, Search Console, AdSense settings, or app behavior until AdSense review completes or Sean explicitly approves a live restructure.

## Current Structure Observed

The live app is still a single dense surface:

- `index.html` acts as both landing page and full generator workspace.
- The header includes public links plus immediate app actions such as `Copy packet` and `Print full packet`.
- The first main section asks users to choose a format: full packet, interactive rehearsal, slide facilitation, or scribe worksheet.
- The same first-load flow exposes a demo run, exercise settings, generation actions, print/download/copy controls, packet output, participant handout, facilitator guide, worksheets, slide deck, and hidden presentation mode.
- `guides.html`, `15-minute-incident-response-drill.html`, and `30-minute-incident-response-tabletop.html` are public guide surfaces and should remain discoverable.
- The interactive rehearsal itself already has strong pieces: scenario picker, facilitator runbook, timer, copy-current-inject, copy-pre-brief, facilitator notes toggle, consequence meters, inject stage, choice grid, and after-action reveal/export.

The core issue is not lack of capability. It is that the homepage exposes too many workflows before the user has chosen why they came.

## Proposed Information Architecture

### Landing Page

Purpose: answer "What is this, and which path should I choose?"

Recommended first screen:

- Product name and one concise positioning line: incident response decision rehearsal for facilitators and security teams.
- A short trust/privacy signal: browser-based, no login, no upload, no sensitive incident data needed.
- Three primary path choices, presented as doors.

Avoid on first load:

- Full packet export controls.
- Print/download/copy actions.
- Detailed scenario settings.
- Participant/facilitator packet content.
- Slide deck and worksheet controls.
- Multiple competing demo CTAs.
- Dense nav that makes the page feel like a control room before the user chooses a path.

### Door 1: Interactive Rehearsal

This should be the product's focused workspace.

Belongs inside:

- Scenario family and focused drill picker.
- Short scenario setup and facilitator pre-brief.
- Start/reset controls.
- Timer and inject-by-inject stage.
- Decision choices.
- Consequence meters.
- Copy current inject.
- Facilitator notes toggle.
- After-action reveal and copy/export summary.
- Optional link back to landing and optional link to full packet/slides only after the rehearsal is underway or complete.

Should be de-emphasized or hidden:

- Public guide nav beyond a small back/help link.
- Full packet generator controls.
- Download participant/facilitator handout buttons.
- Slide presentation controls unless the user enters a presentation path.
- Long static packet output.
- Marketing copy.

### Door 2: Guides / Short Drills

Purpose: support search intent and users who want facilitation instructions before launching the app.

Belongs inside:

- `guides.html`
- `15-minute-incident-response-drill.html`
- `30-minute-incident-response-tabletop.html`
- Ransomware communications pressure drill link.
- Future practical guides only when Search Console, Bing, referral, or AdSense signals justify them.

Guardrail: keep this path serious and facilitator-focused. Avoid hobby tabletop language.

### Door 3: About / Trust / Privacy / How It Works

Purpose: reassure users, reviewers, and cautious facilitators.

Belongs inside:

- About.
- Trust & Privacy.
- Privacy.
- Terms.
- Contact.
- A lightweight "how it works" explanation if needed: choose a scenario, run decisions, capture after-action notes, keep sensitive data out.

Guardrail: do not bury trust pages. They matter for AdSense posture, security credibility, and user confidence.

### Optional Door: Scenario Library / Templates

Only add this if it improves clarity after the first restructure.

Possible shape:

- Scenario library as an internal selector inside Interactive Rehearsal, not a separate first-load wall of options.
- Templates as an export/prep path after a user chooses Full Packet, Slides, or Worksheet.
- Do not create a new public template library unless search or user evidence supports it.

## What To Hide Or De-Emphasize On First Load

Move these behind a path selection:

- `Copy packet`, `Print full packet`, and broad export actions.
- Full packet, slide, and worksheet mode cards.
- The `Help me choose` selector.
- BEC demo and sample packet copy actions.
- Detailed control panel fields.
- Participant handout and facilitator guide content.
- Slide deck, worksheet, and presentation controls.
- Advanced group/site/team-format controls.

Keep visible or lightly available:

- The product name.
- A short explanation of the tool.
- Browser-only/no-login/no-upload trust language.
- Path choices: Interactive Rehearsal, Guides/Short Drills, About/Trust/Privacy.
- A small footer with public pages for discoverability and reviewer trust.

## Implementation Guardrails

- Preserve serious incident-response positioning.
- Keep "rehearsal" and "decision practice" as the dominant language.
- Avoid hobby/tabletop-game framing.
- Keep CTA button text readable without hover.
- Keep the Guides hub discoverable from landing, footer, and relevant content pages.
- Preserve indexed guide URLs and do not break existing canonical URLs.
- Preserve no-login/no-upload/no-backend promise.
- Do not add new app features during the restructure; this is primarily information architecture and focus.
- Do not remove the existing full packet, slide, worksheet, participant handout, facilitator guide, or print/export capabilities; relocate or de-emphasize them behind the right path.
- Keep parameterized rehearsal routes working, especially the ransomware communications pressure drill route linked from the Guides hub.

## Recommended Phased Plan

### Phase 0: Hold During Review

Current posture: AdSense review pending; `/guides.html` indexing requested / pending recrawl; 15-minute and 30-minute guide articles indexed/green. Do not change production unless AdSense, Search Console, or a live check reports a concrete issue, or Sean explicitly approves the live restructure.

### Phase 1: Design The Door Model

Create a small implementation spec before code:

- Decide whether the focused rehearsal workspace is a separate static file such as `rehearsal.html` or a route/state on `index.html`.
- Define URL compatibility so existing guide links and parameterized rehearsal URLs still work.
- Decide where Full Packet, Slide Facilitation, and Scribe Worksheet live after the landing page is simplified.
- Sketch desktop and mobile first-load layout with the three main doors.

### Phase 2: Landing Page Restructure

After approval:

- Make `index.html` a true landing page.
- Keep intro/trust/path choices above the fold.
- Move dense generator controls out of first load.
- Keep Guides and trust links visible.
- Verify public pages, CTA contrast, sitemap, and canonical behavior.

### Phase 3: Focused Interactive Rehearsal Workspace

After the landing page has a clear path:

- Move or reveal the existing interactive rehearsal console as a focused workspace.
- Start with scenario selection and short setup.
- Keep live-run controls visible and exports secondary.
- Preserve AAR copy/export and facilitator notes.
- Verify keyboard, mobile, timer, choice, notes, and AAR flows.

### Phase 4: Secondary Paths

Then organize supporting workflows:

- Full packet builder for facilitators preparing materials.
- Slide facilitation for Teams/Zoom-style delivery.
- Scribe worksheet for live capture.
- Guides/short drills as the public learning and search path.

### Phase 5: QA And Search Safety

Before any publish:

- Run normal syntax/readiness checks.
- Smoke test landing door navigation.
- Smoke test interactive rehearsal from a direct URL and from Guides.
- Confirm Guides hub remains discoverable.
- Confirm CTA labels remain readable.
- Confirm no public placeholder/prototype language appears.
- Confirm no indexed guide URLs are removed or redirected unexpectedly.

## Next Decision Needed

Wait for AdSense review or explicit approval before implementing. When implementation is approved, the first decision is route shape:

- Option A: keep `index.html` as landing and use `index.html?path=rehearsal` for the focused workspace.
- Option B: keep `index.html` as landing and create `rehearsal.html` as the focused workspace.

Option B is likely clearer for users and future search/navigation, but it requires careful handling of existing parameterized rehearsal links.

# Prototype Status

## Current State

Codex created the first static prototype on June 26, 2026.

The prototype lives at the project root:

- `index.html`
- `styles.css`
- `app.js`
- `README.md`

It can be opened directly in a browser. No dev server is required.

## Implemented

- Cyber-themed interface.
- Settings panel for incident type, organization profile, audience, duration, difficulty, and seed.
- Exercise focus control.
- Generated exercise packet output.
- Copy packet control.
- Copy scenario link control with URL state.
- Download packet control for Markdown output.
- Separate participant handout and facilitator guide Markdown downloads.
- Daily drill control that uses the current date as the seed.
- View packet control for faster mobile navigation.
- Full-packet, participant-only, and facilitator-only print controls.
- Blank worksheet print control and blank worksheet Markdown download for live scribing.
- Slide-deck print control and slide-outline copy control for remote, hybrid, or distributed exercises.
- Browser presentation mode with one-slide-at-a-time deck view, next/previous controls, keyboard navigation, and shareable `view=present&deck=participant|facilitator&slide=N` URLs.
- Participant-safe browser presentation mode that filters facilitator-only slides and removes facilitator/scribe-only bullets from shared inject slides.
- Facilitator browser presentation mode with a separate notes rail and a notes visibility toggle for screen-share control.
- Configurable presentation group labels that flow into the slide deck and scenario link.
- Seeded generation for repeatable output.
- Seeded scenario variables for detection source, affected asset, business impact, and recovery constraint.
- Exercise profile, use note, facilitator/scribe placeholders, initial conditions, ground rules, assumptions to validate, meeting agenda, participant roles, discussion prompts, decision points, stakeholder messages, communications checklist, and action tracker sections.
- Packet is visually split into Participant Handout and Facilitator Guide sections.
- Facilitator Guide now includes expected discussion areas, watch-for gaps, and evidence prompts.
- Facilitator Guide now includes a Facts / Assumptions / Decisions / Questions worksheet.
- Facilitator Guide Markdown download includes a participant handout reference snapshot so it can stand alone.
- Ransomware and credential phishing pools have deeper opening conditions, injects, decisions, stakeholder messages, facts, assumptions, and facilitator guidance.
- Insider data exposure, public service outage/DDoS, and vendor compromise pools have also received the deeper content treatment.
- Scenario-specific evidence checklist items.
- Markdown-style copy output.
- Browser-generated slide deck preview/print mode with remote facilitation ground rules, group check-in, inject slides, key decisions, worksheet capture, and group lessons learned.
- Slide deck now includes discussion prompt and evidence/after-action prompt slides so the live deck better matches the facilitator flow.
- Slide-deck print polish: replaced dense worksheet-row slide content with a lighter scribe-capture slide and added slide numbers to slide-deck mode.
- Print CSS includes page margins, split print modes, and basic page-break handling for cleaner PDF output.
- Facilitator print polish: phase-objective cards now print with white backgrounds and dark text instead of screen-mode dark cards.
- Footer states no login, no upload, no backend, and browser-based generic content.
- Mobile layout fixes after screenshot review.

## Current Incident Types

- Ransomware disruption
- Credential phishing
- Insider data exposure
- Public service outage
- Vendor compromise

## Verification

- `node --check app.js` passed.
- Local Chrome headless screenshots were captured for desktop and mobile.
- Chrome print-emulation screenshots and PDFs were generated for the slide deck and facilitator guide.
- Browser verification confirmed presentation navigation, direct presentation URLs, participant-safe deck filtering, facilitator notes visibility, and blank worksheet print rendering.
- Mobile overflow was found and fixed.
- Browser verification artifacts are kept in `../output/` and ignored by `.gitignore`.

## Known Limitations

- Content model is improved across all five current incident categories.
- Injects now use true phase-specific pools for Detect, Triage, Contain, Communicate, and Recover.
- Print layout has split-mode support, blank worksheet support, and basic page-break protection, but still needs deeper portrait-paper review.
- Slide deck mode has first-pass density polish, landscape PDF output, participant-safe browser mode, and facilitator notes, but should still be reviewed with real organizational content before exercise use.
- Local Poppler/Python PDF inspection was not available, so visual review currently uses Chrome print emulation and generated PDF files.
- Source-document mapping has started at the source-group level, but individual source review is not complete.
- No domain, branding, analytics, or deployment plan yet.

## Next Prototype Moves

- Continue portrait print review for full packet, participant handout, facilitator guide, and blank worksheet.
- Review slide-deck PDF in a normal PDF viewer and decide whether a `.pptx` export is worth the added complexity.
- Continue browser presentation-mode polish for real remote facilitation, especially notes ergonomics, participant-safe direct links, dense slides, and screen-share readability.
- Add scenario variants or optional category filters only after print/export polish is stronger.

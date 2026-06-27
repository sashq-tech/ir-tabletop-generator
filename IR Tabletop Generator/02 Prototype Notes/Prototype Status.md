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
- Slide-deck print control and slide-outline copy control for remote, hybrid, or distributed exercises.
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
- Print CSS includes page margins, split print modes, and basic page-break handling for cleaner PDF output.
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
- Mobile overflow was found and fixed.
- Browser verification artifacts are kept in `../output/` and ignored by `.gitignore`.

## Known Limitations

- Content model is improved across all five current incident categories.
- Injects now use true phase-specific pools for Detect, Triage, Contain, Communicate, and Recover.
- Print layout has split-mode support and basic page-break protection, but still needs deeper portrait-paper review.
- Slide deck mode exists as a first prototype, but needs slide density and landscape PDF review before real exercise use.
- Source-document mapping has started at the source-group level, but individual source review is not complete.
- No domain, branding, analytics, or deployment plan yet.

## Next Prototype Moves

- Continue portrait print review and decide whether the worksheet should stay as a compact table or become a printable blank form.
- Continue slide-deck review for remote and hybrid facilitation and decide whether a `.pptx` export is worth the added complexity.
- Add scenario variants or optional category filters only after print/export polish is stronger.

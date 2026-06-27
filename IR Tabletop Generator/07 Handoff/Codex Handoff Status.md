# Codex Handoff Status

## Last Updated

2026-06-27

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

## Next Recommended Step

Continue export/presentation polish before adding more scenario categories. The strongest next work item is a real-world presentation rehearsal pass: Teams/Zoom screen share, browser fullscreen, participant-safe links, facilitator notes ergonomics, and local PDF viewer review.

## Later Roadmap Note

For August exercise prep, slide-ready output and browser presentation mode now exist as first prototypes so users can run from the browser, paste generated exercise content into organizational PowerPoint templates, or print a slide-format PDF. True `.pptx` export should still wait until the no-backend approach is proven.

Important example use case: the user's exercise spans three geographic sites and is delivered over Microsoft Teams. Slide output should still remain platform-agnostic, pace the exercise in organized chunks, create clear response moments for each group, and avoid the awkwardness of running the session from a long Confluence page.

## Cautions

- Keep this project separate from ReadyScene and Utility Stack.
- Treat downloaded source documents as research/reference, not copy-paste text.
- Preserve the no-login/no-upload/no-backend product promise unless the user explicitly changes direction.

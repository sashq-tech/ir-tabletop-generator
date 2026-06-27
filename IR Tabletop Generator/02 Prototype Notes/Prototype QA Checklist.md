# Prototype QA Checklist

Use this checklist after meaningful prototype changes.

## Static Checks

- Run `node --check app.js`.
- Open the local `index.html` directly in a browser.
- Confirm controls still update the packet.
- Confirm URL settings still update after generation.

## Browser Checks

- Desktop render does not show overlap or obvious clipping.
- Mobile render does not show horizontal overflow.
- Header actions remain usable.
- Control panel buttons fit on mobile.
- Stage strip wraps cleanly on mobile.

## Packet Checks

- Printed packet includes the use note.
- Full-packet print includes both Participant Handout and Facilitator Guide sections.
- Participant-only print hides facilitator-only sections and future injects.
- Facilitator-only print includes scenario context plus facilitator-only sections.
- Packet includes exercise profile, seed, generated date, facilitator, and scribe placeholders.
- Timeline has one inject for each phase.
- Copy packet output uses readable Markdown-style headings.
- Download packet creates a `.md` file.
- Download participant handout creates a participant-safe `.md` file without future injects.
- Download facilitator guide creates a facilitator-only `.md` file with injects, expected discussion areas, facts/assumptions/decisions/questions worksheet, watch-for gaps, evidence prompts, evidence checklist, and action tracker.
- Download blank worksheet creates a scribe-ready `.md` file without prefilled scenario prompts.
- Facilitator guide includes enough participant context to stand alone without exposing future injects in the participant handout.
- Facts / Assumptions / Decisions / Questions worksheet stays readable on desktop and does not widen the mobile page.
- Blank worksheet print mode shows writable Facts / Assumptions / Decisions / Questions and Decision / Action Tracker tables.
- Evidence checklist is scenario-specific.
- Copy slide outline includes remote facilitation ground rules, group check-in, scenario brief, inject slides, discussion prompts, key decisions, worksheet capture, evidence/AAR prompts, and group lessons learned.
- Print slide deck shows slide-ready content instead of the packet view.
- Slide deck supports remote, hybrid, or distributed facilitation without exposing real organization-specific details.
- Presentation group labels flow into slide output and copied scenario links.
- Browser presentation mode opens a one-slide-at-a-time deck, supports next/previous controls, supports arrow-key navigation, exits with Escape, and preserves `view=present&deck=participant|facilitator&slide=N` in the URL.
- Facilitator presentation mode shows the notes rail by default and preserves `notes=off` when notes are hidden.
- Participant presentation mode hides the notes rail, disables the Notes button, filters facilitator-only slides, and does not show facilitator/scribe-only bullets on shared inject slides.

## Trust Checks

- No compliance guarantee language.
- No official endorsement language.
- No offensive technical instructions.
- No request for real secrets or organization-specific sensitive data.

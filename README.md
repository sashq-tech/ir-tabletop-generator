# IR Tabletop Generator Prototype

This is an early static prototype for a separate Incident Response Tabletop Exercise Generator site.

The project direction is:

- Browser-based and no-login.
- No uploaded organizational data.
- Client-side generation only.
- Practical ISSO/security-manager utility over enterprise simulation.
- Generate the whole exercise packet, not just a scenario idea.

The downloaded files in `Incident Response Sources/` are reference material only. The first prototype uses original, simplified scenario patterns and should not copy source-document language directly.

## Prototype Features

- Incident type, organization profile, audience, duration, and difficulty controls.
- Exercise focus control.
- Seeded generation for repeatable packets.
- Seeded scenario variables for detection source, affected asset, business impact, and recovery constraint.
- Scenario brief, exercise profile, use note, initial conditions, ground rules, assumptions to validate, objectives, agenda, participant roles, phase objectives, phase-specific timed injects, discussion prompts, expected discussion areas, facts/assumptions/decisions/questions worksheet, decision points, stakeholder messages, communications checklist, watch-for gaps, facilitator notes, after-action prompts, evidence prompts, evidence checklist, and action tracker.
- Copy, full-packet print, participant-only print, facilitator-only print, blank worksheet print, slide-deck print, slide-outline copy, download, Daily drill, and View packet controls.
- Copy scenario link control that preserves settings in the URL.
- Markdown-style copied packet text.
- Markdown full packet, participant handout, standalone facilitator guide, and blank worksheet downloads.
- Browser-generated slide outline and slide-deck print view for remote, hybrid, or distributed facilitation.
- Browser presentation mode with facilitator and participant deck modes, next/previous controls, keyboard navigation, facilitator notes, and shareable slide URLs.
- Daily drill seed based on the current date.
- Quiet site footer reinforcing no-login, no-upload, no-backend behavior.

## Next Ideas

- Continue polishing portrait print layout and page breaks.
- Continue polishing slide-deck layout, facilitator notes, and participant-safe browser presentation flow.
- Continue deepening the phase-specific inject pools and decision prompts.
- Add scenario variants or optional category filters only after the five current categories feel strong.
- Expand the source-to-feature map from source groups into individual source notes when useful.
## Launch / Deployment Boundary

This prototype is not deployed yet. If it graduates toward a public static site, ship only the intended public files:

- `index.html`
- `styles.css`
- `app.js`
- `trust-and-privacy.html`

Do not ship `Incident Response Sources/`, the Obsidian vault, `output/`, workspace files, agent folders, or local test artifacts. See `DEPLOYMENT_CHECKLIST.md` before any public launch.


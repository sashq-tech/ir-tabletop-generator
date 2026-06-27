# Product Brief

## Working Name

Incident Response Tabletop Exercise Generator

## One-Sentence Pitch

A free, no-login browser tool that generates meeting-ready incident response tabletop exercise packets for security teams, ISSOs, managers, and small organizations.

## Why This Exists

The original insight came from trying to build an incident response exercise at work and noticing that the task felt similar to ReadyScene: choose a situation, add complications, produce a usable scenario, and give the facilitator enough structure to run the session.

This project is not trying to compete with paid tabletop platforms. The opportunity is a lightweight, accessible tool for people who need a credible exercise fast.

## Target Users

- ISSOs and security coordinators
- Small IT teams
- Security managers
- Compliance owners
- Department leaders preparing for annual or quarterly tabletop exercises
- Organizations that need a starting point before customizing internally

## Product Principles

- No login.
- No uploaded data.
- No backend dependency.
- No claim of guaranteed compliance.
- Practical output beats flashy simulation.
- The generated packet should help someone run a real meeting.

## Version-One Value

The site should generate the whole tabletop packet, not just a scenario prompt:

- Scenario overview
- Exercise objectives
- Roles or participant guidance
- Initial briefing
- Timed injects
- Discussion questions
- Facilitator notes
- After-action review prompts
- Evidence checklist

## Possible Differentiator

The best early gimmick is the audit-ready packet: a printable, professional package that helps the facilitator document the exercise afterward.

## Future Slide Output Idea

For the August exercise timeframe, consider a slide-ready export path. The goal should not be to replace organizational PowerPoint templates. It should give users clean slide content they can paste into their own templates.

A motivating real-world use case is a tabletop exercise spanning multiple locations and delivered over a meeting platform such as Microsoft Teams. The product should support that situation without being limited to it. A slide deck can help the facilitator break the exercise into organized chunks, keep remote or hybrid participants oriented, and avoid the pacing problems that can happen when the exercise is run from a long Confluence page.

Potential formats:

- Slide outline copied as Markdown or plain text.
- Landscape slide-format PDF with one concept per page.
- Later PowerPoint export if a reliable client-side library fits the no-backend model.

Likely slide sequence:

1. Exercise title and profile
2. Objectives and ground rules
3. Scenario brief
4. Initial conditions
5. Participant roles
6. Inject timeline overview
7. One slide per inject phase
8. Discussion prompts
9. Key decisions
10. Evidence and after-action worksheet

Remote facilitation additions:

- Configurable presentation group labels
- Group participation check-in slide
- Remote facilitation ground rules slide
- Pause points for each group to respond
- Scribe capture slide for facts, assumptions, decisions, and open questions
- Final group lessons learned slide

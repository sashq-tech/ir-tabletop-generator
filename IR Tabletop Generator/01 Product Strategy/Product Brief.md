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

## Presentation and Export Direction

For the August exercise timeframe, support both browser-run facilitation and slide-ready export paths. The goal should not be to replace organizational PowerPoint templates. It should give users clean slide content they can run from the browser, print to PDF, or paste into their own templates.

A motivating real-world use case is a tabletop exercise spanning multiple locations and delivered over a meeting platform such as Microsoft Teams. The product should support that situation without being limited to it. A slide deck can help the facilitator break the exercise into organized chunks, keep remote or hybrid participants oriented, and avoid the pacing problems that can happen when the exercise is run from a long Confluence page.

Current and potential formats:

- Browser presentation mode with one slide at a time.
- Slide outline copied as Markdown or plain text.
- Landscape slide-format PDF with one concept per page.
- Printable blank facilitator worksheet for live scribing.
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
10. Scribe capture
11. Evidence and after-action prompts
12. Group lessons learned

Remote facilitation additions:

- Configurable presentation group labels
- Group participation check-in slide
- Remote facilitation ground rules slide
- Pause points for each group to respond
- Scribe capture slide for facts, assumptions, decisions, and open questions
- Final group lessons learned slide
## Primary Real-World Design Context

The first real target use case is a small software development company tabletop exercise run by a sole cyber practitioner / ISSO.

Non-sensitive operating context:

- Current company size is under 100 people, with a possible hiring goal around 150 depending on awarded contracts.
- Work pattern is hybrid. Monday and Friday are commonly work-from-home days, but there is flexibility.
- Personnel often travel to demonstrate software and meet with customers.
- The company is Microsoft 365 Commercial heavy.
- Current software delivery is mostly executable-based, with web application versions in progress.
- The organization has completed one tabletop so far.
- Prior exercise participants included ISSO, IT Director, FSO/Ops Chief, CEO, and President.
- In Sean's organization, the FSO and Operations Chief are the same person because of company size; the product must not assume that combined role is normal elsewhere.
- In Sean's organization, the President will likely ask many of the operational/executive questions and brief the CEO as needed.
- The next exercise may include additional participants such as the product team lead.
- Target exercise duration is 60 minutes, but executive discussion can run long.

Design implications:

- The product should support small teams without assuming a SOC or large security staff.
- Remote and hybrid participation should be first-class, especially Microsoft Teams / Zoom-style facilitation.
- Scenarios should include executive decision pressure without letting leadership discussion consume the whole exercise.
- Role mapping should be configurable. Do not hard-code Sean's local role structure, such as combined FSO/Ops Chief, into generic scenario assumptions.
- Software demo travel and customer-facing commitments are useful pressure points.
- Microsoft 365 account compromise, credential phishing, travel-device exposure, software delivery disruption, vendor/customer communication, and web-app transition risks are high-value scenario seeds.
- Time-boxing, decision capture, and after-action outputs matter as much as scenario drama.


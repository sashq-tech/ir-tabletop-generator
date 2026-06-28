# Scenario Model

## Generator Shape

The site should generate a complete exercise packet from modular components.

## Inputs

- Incident type
- Organization profile
- Audience
- Duration
- Difficulty
- Seed

Possible future inputs:

- Regulatory pressure
- Public visibility
- Cloud/on-prem/hybrid environment
- Exercise maturity
- Facilitator experience
- Include media/public affairs pressure
- Include legal/privacy concerns

## Output Sections

- Scenario title
- Scenario brief
- Exercise objectives
- Participant roles
- Initial conditions
- Timeline injects
- Discussion prompts
- Facilitator notes
- Expected decision points
- After-action prompts
- Evidence checklist

## Current Incident Categories

- Ransomware
- Phishing
- Insider threat
- DDoS or public service outage
- Vendor/supply chain compromise

## Candidate Future Categories

- Lost or stolen device
- Business email compromise
- Data leak or accidental disclosure
- Cloud storage exposure
- Website defacement
- Privileged account compromise
- Physical disruption plus cyber impact
- Election or public-event support incident
- Backup failure during incident recovery

## Design Notes

The tone should be credible, practical, and calm. It should feel like an ISSO or security manager could print the packet and bring it to a meeting.

Avoid making the output feel unserious. The interactive mode can use game mechanics, but it should be framed as decision rehearsal, not entertainment.
## Interactive Decision-Rehearsal Direction

The long-term goal is an interactive, branching tabletop mode inspired by choose-your-own-adventure structure but framed as a serious decision-rehearsal simulator.

Core idea:

- Display one inject at a time.
- Offer plausible response options.
- Let the facilitator or team choose an action.
- Track consequences across hidden or visible meters.
- Adapt later injects and the final debrief based on choices.

Recommended first interactive scenario:

- Credential phishing / Microsoft 365 account compromise.

Why this scenario first:

- Realistic for a small hybrid software company.
- Understandable to executives, IT, product, operations, and security participants.
- Supports Microsoft 365-heavy assumptions without requiring confidential tenant details.
- Can include travel/demo pressure, customer communication concerns, and software delivery impact.
- Can stay defensive and avoid operational attack guidance.

Candidate meters:

- Account containment
- Evidence quality
- Business continuity
- Customer / stakeholder trust
- Team coordination
- Time pressure

First-pass interactive phases:

1. Detect: suspicious sign-in or user-reported phishing message.
2. Triage: determine scope, preserve logs, decide who needs to know.
3. Contain: reset credentials, revoke sessions, isolate affected access, protect customer-facing commitments.
4. Communicate: decide internal messaging, leadership briefing, and customer-facing posture.
5. Recover: monitor recurrence, validate controls, document after-action items.

Output should include:

- Decision path taken.
- Consequences of each selected action.
- Missed questions.
- Strong decisions.
- After-action items.
- Suggested next exercise focus.

## First Prototype Slice

Added on 2026-06-27: the prototype now includes a browser-only interactive decision-rehearsal mode for a Microsoft 365 account compromise scenario.

Implemented mechanics:

- Start/reset controls inside the generated packet area.
- Five visible consequence meters: containment, evidence, continuity, trust, and coordination.
- Five decision phases: detect, triage, contain, communicate, and recover.
- Three plausible response choices per phase.
- End-of-run after-action reveal showing selected path, consequences, lessons, final meter scores, and recommended next exercise focus.

Current limitation: this first slice is a fixed scenario rather than a generator-driven branching system. Next useful step is browser QA, then decide whether to connect interactive scenarios to selected incident type, organization profile, and duration.

## Role Mapping Direction

The interactive model should eventually support configurable role mapping rather than assuming the same leadership or operations structure everywhere.

Sean-specific context for the August exercise:

- The President will likely ask many of the operational and executive-level questions during the exercise.
- The President can brief the CEO as needed instead of requiring the CEO to drive every discussion point directly.
- The FSO and Operations Chief are the same person in Sean's organization because of company size.
- That combined FSO/Ops role should not be treated as a normal default for other organizations.

Product implication: scenario templates should use generic role labels by default, then allow facilitators to map those labels to their actual people or titles.

## Format Separation Direction

Added on 2026-06-27: the prototype now separates major workspaces inside the static page rather than showing every generated artifact at once.

Current workspaces:

- Full packet.
- Interactive rehearsal.
- Slide facilitation.
- Scribe worksheet.

Product implication: if this pattern holds up, the site can later graduate these into separate physical pages or routes. For now, mode switching keeps the prototype browser-only and avoids adding build tooling.

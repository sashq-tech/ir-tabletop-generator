# Exercise Packet Anatomy

This note defines the target packet shape for the prototype.

## Version-One Packet Sections

1. Exercise profile
2. Use note and disclaimer
3. Participant Handout divider
4. Scenario brief
5. Initial conditions
6. Ground rules
7. Assumptions to validate
8. Exercise objectives
9. Meeting agenda
10. Participant roles
11. Facilitator Guide divider
12. Scenario variables
13. Phase objectives
14. Inject timeline
15. Discussion prompts
16. Expected discussion areas
17. Facts / Assumptions / Decisions / Questions worksheet
18. Key decision points
19. Stakeholder messages
20. Communications checklist
21. Watch-for gaps
22. Facilitator notes
23. After-action prompts
24. Evidence prompts
25. Evidence checklist
26. Decision and action tracker

## Why This Shape Works

The user does not only need a scenario. They need enough structure to run a meeting and document the exercise afterward.

The participant handout should not reveal future injects, stakeholder curveballs, facilitator prompts, or evidence expectations. The facilitator guide can include those items.

The facilitator guide should also be usable as a standalone file. It can repeat a concise participant-context snapshot, but it should keep all injects, expected discussion areas, the facts/assumptions/decisions/questions worksheet, watch-for gaps, evidence prompts, and action tracking in facilitator-only sections.

The packet should help a facilitator answer:

- What is the incident?
- Who should be in the room?
- What do participants know at the start?
- What updates arrive during the exercise?
- What decisions must the group discuss?
- What facts, assumptions, decisions, and open questions should the scribe capture?
- What weaknesses or skipped steps should the facilitator listen for?
- What evidence should be saved?
- What follow-up work should be assigned?

## Generator Modules

Useful module pools:

- `incidentTypes`
- `organizationProfiles`
- `audienceProfiles`
- `exerciseFocus`
- `openingConditionsByIncident`
- `initialFactsByIncident`
- `injectPoolsByIncident`
- `stakeholderMessagesByIncident`
- `discussionPromptBank`
- `decisionPointsByIncident`
- `facilitatorNotesByAudience`
- `evidenceChecklistItems`
- `aarPrompts`
- `complicationsByDifficulty`

## Product Caution

Avoid too many controls too early. The prototype should feel quick and useful. Depth should come from better generated content, not a complicated form.

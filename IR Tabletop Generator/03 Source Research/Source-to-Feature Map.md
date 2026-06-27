# Source-to-Feature Map

Use this as the working layer between downloaded source documents and prototype features.

Do not copy source language directly into the site. Use sources to identify recurring exercise structure, terminology, decision areas, and facilitation patterns.

| Source group | Incident category | Packet section influenced | Reusable pattern | Generator module | Caution |
|---|---|---|---|---|---|
| NIST SP 800-61r3 | All | Roles, escalation, containment, recovery, evidence | Incident lifecycle and response coordination | `participantRoles`, `decisionPoints`, `evidenceItems` | Avoid implying official compliance or certification |
| NIST SP 800-84 | All | Exercise design, facilitation, evaluation, AAR | Exercise planning and after-action structure | `meetingAgenda`, `facilitatorNotes`, `aarPrompts` | Use structure, not copied wording |
| NIST CSWP.29 | All | Governance and readiness framing | Outcome-based readiness language | Trust copy, objective pools | Keep claims cautious |
| Ransomware CTEP | Ransomware | Scenario brief, injects, recovery dilemmas | Backup uncertainty, service disruption, communications pressure | `ransomware.injects`, `decisionPoints`, `stakeholderMessages` | Avoid operational offensive detail |
| Insider Threat CTEP | Insider | Scenario brief, legal/HR prompts, evidence preservation | HR/legal/security coordination | `insider.initialConditions`, `stakeholderMessages` | Avoid accusatory or employment-law advice |
| Federal DDoS CTEP | Public outage / DDoS | Timeline injects, provider coordination, public status | Availability incident with public pressure | `ddos.injects`, `communications` prompts | Keep technical mitigation generic |
| Vendor Supply Chain CTEP | Vendor compromise | Third-party access, contract/legal prompts, vendor notice ambiguity | External dependency and limited facts | `supplyChain.injects`, `decisionPoints` | Avoid contract-specific advice |
| Executive Leadership CTEP | Leadership audience | Executive prompts, risk decisions, public messaging | Leadership pressure under uncertainty | `audienceNotes.leadership`, executive injects | Do not over-index on executives for all users |
| CCTE checklist/template/scenarios | All | Print packet, facilitator checklist, evidence worksheet | Audit-ready packet anatomy | Profile, worksheet, evidence checklist | Commercial materials are positioning reference only |
| Monthly phishing/policy/asset examples | Future packs | Lightweight scenario variety | Short tabletop structures | Future incident packs | Defer until core five categories are deeper |
| Natural disaster / bomb threat / flooding / tornado | Future resilience modes | Physical disruption plus cyber/IT dependencies | Cross-domain continuity exercises | Future resilience category | Not version-one core |

## Current Priority

Deepen the five prototype categories before adding more incident types:

- Ransomware
- Credential phishing
- Insider data exposure
- Public service outage / DDoS
- Vendor compromise

## Next Research Pass

For each source group, capture:

- Useful exercise structure
- Common roles
- Common decision points
- Useful inject pattern
- Evidence or AAR pattern
- Language to avoid

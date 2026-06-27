# CISA CTEP Scenario Matrix

Use this note to organize CTEP-style source patterns into generator modules.

## Version-One Source Groups

| Source group | Prototype category | Useful patterns | Generator module |
|---|---|---|---|
| Ransomware CTEP | Ransomware disruption | Backup uncertainty, service disruption, public visibility, recovery prioritization | `ransomware.injects`, `initialConditionPools.ransomware` |
| Insider Threat CTEP | Insider data exposure | HR/legal/security coordination, evidence preservation, access review | `insider.decisions`, `insider.messages` |
| Federal DDoS CTEP | Public service outage | Provider coordination, public status, traffic filtering, continuity pressure | `ddos.injects`, communications checklist |
| Vendor Supply Chain CTEP | Vendor compromise | Vendor ambiguity, third-party access, procurement/legal review | `supplyChain.decisions`, `supplyChain.messages` |
| Executive Leadership CTEP | Leadership audience | Executive pressure, risk acceptance, external messaging | `audienceNotes.leadership`, stress injects |
| Information Technology CTEP | Technical audience | System ownership, triage, dependencies, recovery | `roleSets.technical`, operations focus |
| Defense Industrial Base CTEP | Regulated or contractual environments | Contractual reporting, partner concerns, sensitive data handling | future profile/focus variants |

## Later Source Groups

| Source group | Possible future category |
|---|---|
| Monthly phishing exercises | More phishing inject variety |
| Unauthorized downloads / policy breach | Policy and insider-lite scenarios |
| Asset management | Inventory and unknown-device scenarios |
| Utility outage | Resilience and continuity mode |
| Natural disaster / hurricane / flood / tornado | Physical disruption plus cyber dependency |
| Bomb threat | Non-cyber continuity exercise, likely out of core scope |

## Rule

Deepen the current five categories before adding new ones.

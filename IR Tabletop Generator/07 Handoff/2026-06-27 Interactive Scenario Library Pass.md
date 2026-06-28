# 2026-06-27 Interactive Scenario Library Pass

## Completed
- Replaced the single hard-coded interactive demo path with an `interactiveScenarios` library keyed by incident type.
- Kept the original Microsoft 365 account-compromise path as the phishing interactive scenario.
- Added distinct playable paths for:
  - Ransomware disruption
  - Insider data exposure
  - Public service outage
  - Vendor compromise
- Added reusable scenario generation for the non-phishing paths, with incident-specific titles, meter labels, phase injects, primary choices, outcomes, and lessons.
- Fixed an option-advance bug where the click handler still referenced the old local `scenario` variable.

## Verified
- `node --check app.js` passed.
- Playwright smoke test passed on localhost using ransomware settings:
  - Interactive intro displays `Ransomware Disruption Decision Rehearsal`.
  - First active inject is `Shared files begin changing at scale`, not the old phishing/traveling employee scenario.
  - Choosing option 1 advances to `Triage / step 2 of 5` with `Business impact and entry point are unclear`.
  - Ransomware-specific meter labels are visible: Spread control and Service continuity.

## Next
- Make each scenario path richer by replacing the reusable secondary choices with phase-specific alternatives.
- Consider adding difficulty modifiers so intro, standard, and stress test affect ambiguity, time pressure, and choice consequences.
# 2026-06-27 Settings Integration and Help Bubble Fix

## Completed
- Fixed field help so the explanation panel moves directly below the selected field instead of opening below the action buttons.
- Added expanded-state styling for the active help button.
- Added a shared current exercise setup helper in `app.js` for scenario, profile, audience, focus, duration, and difficulty.
- Wired the interactive rehearsal intro, section title, and in-progress context line to the selected exercise settings.
- Starting the interactive exercise now switches into interactive mode and preserves the selected settings in the scenario context.

## Verified
- `node --check app.js` passed.
- Playwright smoke test passed on localhost:
  - Help bubble appears under Incident type and exposes the correct explanation.
  - Interactive mode reflects Credential phishing, Small business IT team, 90 minutes, Stress test, Mixed technical and leadership, and Balanced readiness.
  - Starting the interactive exercise keeps that context visible during the first inject.

## Remaining
- The first playable branching path is still the Microsoft 365 account-compromise model.
- Next useful build step: add scenario-specific interactive branches or a branch template system so ransomware, insider risk, outage, and vendor compromise are playable without relying on the phishing/M365 path.
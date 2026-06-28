# 2026-06-28 Facilitator Runbook Readiness Pass

## What changed
- Added a compact facilitator runbook view to the interactive exercise area.
- The runbook ties together scenario selection, facilitator pre-brief prep, live console usage, and after-action report export.
- The runbook updates across the exercise lifecycle:
  - Ready: prompts the facilitator to confirm the selected scenario and prepare materials.
  - Running: shows live session status and current step count.
  - Complete: confirms the AAR export is unlocked and prompts owner/follow-up capture.
- Added responsive styling so the four-step runbook collapses cleanly from desktop to mobile.

## Verification
- `node --check app.js` passed.
- Browser smoke test opened the local site on port `4195` with `rehearsal=phishing-bec`.
- Confirmed the ready runbook references `Executive Payment Request Drill` and `60-minute standard session`.
- Started the interactive exercise and confirmed runbook status changed to live/running step state.
- Completed the interactive path and confirmed the runbook changed to complete state and the AAR export unlocked.
- Mobile viewport check at `390x780`: one runbook column, no horizontal overflow.
- Browser console check: 0 errors and 0 warnings.

## Publish note
- Publishing is still blocked because the repo has no remote configured. `git remote -v` returned no output.
- Work is ready locally once a GitHub/Pages deployment target is connected.

## Next useful pass
- Add optional facilitator/scribe/participant name fields and carry them into the pre-brief, runbook, and AAR export.
- Add direct download buttons for facilitator pre-brief and runbook artifacts.

# 2026-06-27 Ransomware Choice Depth Pass

## What changed
- Expanded the ransomware interactive rehearsal so Options 2 and 3 are no longer generic placeholders.
- Added phase-specific alternate choices for Detect, Triage, Contain, Communicate, and Recover.
- Updated the interactive scenario helper to accept optional per-phase alternate choices while keeping the shared defaults for other incident types.
- Kept the browser-only/static architecture intact.

## Ransomware path now covers
- Early restore pressure before containment is understood.
- Waiting for certainty before declaring or coordinating response.
- Siloed technical investigation versus shared fact board.
- Containment decisions that trade spread control against operational continuity.
- Under-communication and over-warning risks.
- Restore speed versus validation and reinfection risk.

## Verification
- `node --check app.js` passed after the helper change and ransomware content replacement.
- Browser smoke test on local port 4179 confirmed the interactive ransomware title and intro render.
- Started the ransomware interactive exercise and confirmed first inject choices:
  - Option 1: declare suspected incident, preserve evidence, assign scope and leadership briefing owners.
  - Option 2: tell staff to stop using the share and wait for IT confirmation.
  - Option 3: start restoring the deadline-critical folder first.
- Selected Option 2 and confirmed meters changed and the exercise advanced to Triage step 2 of 5 with ransomware-specific choices.

## Notes
- Browser console showed one error during smoke testing; this appears consistent with the existing local favicon/static artifact behavior seen in earlier checks, not an app-breaking runtime failure.
- Next useful pass: make the after-action reveal more useful by showing the user's decision path, key tradeoffs, and suggested follow-up actions by role.

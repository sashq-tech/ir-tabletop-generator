# 2026-06-28 Facilitator Pre-Brief Setup Pass

## What changed
- Added a `Copy facilitator pre-brief` action to the interactive facilitator console.
- Added a copyable facilitator pre-brief export tied to the selected interactive scenario, scenario family, organization profile, audience, focus, duration, difficulty, group mode, and seed.
- Included exercise setup, opening script, facilitator agenda, participant roles, pre-read checklist, materials to stage, and ground rules.
- Added scenario-specific pre-read emphasis for phishing/BEC, ransomware, insider, outage, and vendor/supply-chain paths.

## Verification
- `node --check app.js` passed.
- Browser smoke test opened the local site on port `4194` with `rehearsal=phishing-bec`.
- Confirmed the facilitator pre-brief button is present.
- Confirmed the generated pre-brief includes the selected BEC drill, opening script, agenda, participant roles, pre-read checklist, materials to stage, ground rules, Microsoft 365 preparation guidance, and polished `60-minute` wording.
- Browser console check: 0 errors and 0 warnings.

## Publish note
- Publishing is still blocked because the repo has no remote configured. `git remote -v` returned no output.
- Work is ready locally once a GitHub/Pages deployment target is connected.

## Next useful pass
- Add optional facilitator, scribe, and participant name fields and include them in the pre-brief and after-action exports.
- Add a dedicated download button for the facilitator pre-brief.

# 2026-06-28 Focused Scenario Library Expansion Pass

## What changed
- Added three new focused interactive drills to the scenario library:
  - Executive Payment Request Drill (`phishing-bec`)
  - SaaS Admin Lockout Ransomware Drill (`ransomware-saas-lockout`)
  - Vendor Update Integrity Drill (`supplyChain-update-integrity`)
- Registered each drill in the interactive scenario picker and URL state through the existing `rehearsal=` flow.
- Added custom Option 2 and Option 3 tradeoffs for the Executive Payment Request Drill so it exercises BEC-style finance and executive verification decisions.
- Kept the ransomware SaaS lockout and vendor update integrity drills playable with the standard focused-drill alternate choices to keep this pass bounded.

## Verification
- `node --check app.js` passed.
- Browser smoke test on local port 4192 confirmed `rehearsal=phishing-bec` deep link is preserved.
- Verified phishing picker now shows featured, OAuth consent, and Executive payment request options.
- Started and completed the Executive Payment Request Drill; confirmed all visible choices render cleanly with no `undefined` or `[object Object]`, after-action reveal appears, and export text includes the drill title and picker label.
- Started and completed the SaaS Admin Lockout Ransomware Drill; confirmed picker options, clean visible choices, and after-action reveal.
- Started and completed the Vendor Update Integrity Drill; confirmed picker options, clean visible choices, and after-action reveal.
- Browser console check: 0 errors and 0 warnings.

## Publish note
- Publishing is still blocked because the repo has no remote configured. `git remote -v` returned no output.
- Work is ready locally once a GitHub/Pages deployment target is connected.

## Next useful pass
- Add custom Option 2 and Option 3 tradeoffs for the remaining focused drills, especially SaaS Admin Lockout and Vendor Update Integrity.
- Consider a lightweight scenario-library index/count display so users can see how many playable drills exist for each incident family.

# 2026-06-28 After-Action Export Pass

## What changed
- Added a Copy after-action reveal button to the interactive rehearsal controls.
- Button starts disabled and only enables after the interactive exercise reaches the after-action reveal.
- Export text is Markdown-style and includes exercise profile, summary, readiness snapshot, decision path, tradeoffs, and follow-up owners.
- Reused the same tradeoff and follow-up owner helper logic as the on-screen reveal so copied text and UI stay aligned.
- Added disabled-button styling for clearer affordance.

## Verification
- `node --check app.js` passed.
- Browser smoke test on local port 4181 confirmed the copy button starts disabled.
- Completed a ransomware interactive path and confirmed the copy button enables at the reveal.
- Verified generated export text contains: title, Readiness Snapshot, Decision Path, Tradeoffs to Discuss, and Follow-Up Owners.
- Console showed only `/favicon.ico` 404 from the temporary static server.

## Next useful pass
- Deepen the phishing interactive path to match the ransomware path quality, then repeat for insider exposure, public outage, and vendor compromise.

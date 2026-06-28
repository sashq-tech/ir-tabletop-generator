# 2026-06-28 Interactive Scenario Library Picker Pass

## What changed
- Added an interactive scenario selector inside the Interactive rehearsal panel.
- Added URL persistence with `rehearsal=` so copied links preserve the selected playable scenario.
- Added one focused drill per incident family:
  - OAuth Consent Phishing Drill
  - Backup Failure Ransomware Drill
  - Contractor Overshare Drill
  - Cloud Dependency Outage Drill
  - Vendor Breach Notice Drill
- Preserved the existing deep interactive paths as the featured scenario for each incident family.
- Added scenario summaries that update when the incident family or scenario changes.
- Added an inline empty favicon to avoid temporary `/favicon.ico` 404 noise.

## Verification
- `node --check app.js` passed.
- Browser smoke test on local port 4186 confirmed `rehearsal=phishing-oauth` deep link is preserved.
- Confirmed the phishing library shows featured and OAuth drill options.
- Completed the OAuth Consent Phishing Drill through all five steps and verified after-action export includes title, Decision Path, and Follow-Up Owners.
- Confirmed changing incident type to Public service outage repopulates the scenario picker and preserves `rehearsal=ddos-cloud-dependency` in the URL.
- Confirmed a direct Vendor Breach Notice Drill URL preserves `type=supplyChain` and `rehearsal=supplyChain-breach-notice`.
- Final browser console check after favicon patch: 0 errors and 0 warnings.

## Publish note
- Could not publish by git push because this repo currently has no remote configured (`git remote -v` returned no output).
- Ready to publish once a remote or deployment target is configured.

## Next useful pass
- Deepen focused drill Option 2/3 choices so the new secondary scenarios have incident-specific tradeoffs instead of using the generic fallback options.

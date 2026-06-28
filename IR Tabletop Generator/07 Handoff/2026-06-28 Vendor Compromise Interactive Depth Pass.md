# 2026-06-28 Vendor Compromise Interactive Depth Pass

## What changed
- Reworked the vendor compromise interactive scenario into a focused third-party/support-portal decision rehearsal.
- Fixed the interactive scenario key from `vendor` to `supplyChain` so the dropdown value actually loads this path.
- Added custom meters for Third-party access, Vendor evidence, Support continuity, Customer confidence, and Partner coordination.
- Added phase-specific choices for Detect, Triage, Contain, Communicate, and Recover.
- Scenario now emphasizes support portal access, vendor incident claims, contract/security addendum obligations, controlled vendor contact paths, monitored access exceptions, customer/leadership criteria, and restoration gates.
- Added non-ideal options that test assuming vendor maintenance, overbroad vendor lockout, waiting for formal notice, scattered vendor outreach, restoring full access for business pressure, over-communicating before impact is confirmed, under-communicating to leadership, and restoring access based only on vendor assurance.

## Verification
- `node --check app.js` passed.
- Browser smoke test on local port 4185 confirmed the `type=supplyChain` URL loads the vendor compromise interactive path.
- Confirmed first inject, custom meters, and phase-specific Option 2/3 choices render.
- Completed a mixed vendor compromise path through all five decisions.
- Verified after-action export text includes: title, Readiness Snapshot, Decision Path, Tradeoffs to Discuss, and Follow-Up Owners.
- Console showed only `/favicon.ico` 404 from the temporary static server.

## Next useful pass
- Add a scenario picker or scenario library view so users can select among multiple interactive exercises within the same incident family instead of having only one fixed path per incident type.

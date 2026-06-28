# 2026-06-28 Insider Interactive Depth Pass

## What changed
- Reworked the insider interactive scenario into a focused data exposure/offboarding decision rehearsal.
- Added phase-specific choices for Detect, Triage, Contain, Communicate, and Recover.
- Scenario now emphasizes HR/legal coordination, data-owner sensitivity review, evidence preservation, least-privilege transition access, need-to-know messaging, and access governance closeout.
- Added non-ideal options that explore premature questioning, overbroad lockout, assuming benign intent without scoping, premature malicious framing, under-communication, and speculative after-action narratives.

## Verification
- `node --check app.js` passed.
- Browser smoke test on local port 4183 confirmed insider title, first inject, custom meters, and first-step choices render.
- Completed a mixed insider path through all five decisions.
- Verified after-action export text includes: title, Readiness Snapshot, Decision Path, Tradeoffs to Discuss, and Follow-Up Owners.
- Console showed only `/favicon.ico` 404 from the temporary static server.

## Next useful pass
- Deepen the public service outage interactive path next, making it useful for web app/service availability incidents.

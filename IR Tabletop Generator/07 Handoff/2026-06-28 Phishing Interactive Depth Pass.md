# 2026-06-28 Phishing Interactive Depth Pass

## What changed
- Reworked the phishing interactive scenario into a Microsoft 365-focused account compromise decision rehearsal.
- Updated the first inject to clarify the product lead reports an unfamiliar Microsoft 365 sign-in alert while preparing for a customer demo.
- Added stronger phase-specific choices for Detect, Triage, Contain, Communicate, and Recover.
- Added realistic Microsoft 365 scoping points: sign-ins, session revocation, mailbox rules, SharePoint access, Teams messages, OAuth/app consent, file sharing, and notification thresholds.
- Kept the path blame-resistant by focusing closeout on process, control, decision, evidence, and owner gaps.

## Verification
- `node --check app.js` passed.
- Browser smoke test on local port 4182 confirmed the phishing interactive title, first inject, new meters, and new first-step choices render.
- Completed a mixed phishing path through all five decisions.
- Verified after-action export text includes: title, Readiness Snapshot, Decision Path, Tradeoffs to Discuss, and Follow-Up Owners.
- Console showed only `/favicon.ico` 404 from the temporary static server.

## Next useful pass
- Deepen the insider data exposure interactive path next, using a small-company, HR/manager, access-review, and evidence-preservation framing.

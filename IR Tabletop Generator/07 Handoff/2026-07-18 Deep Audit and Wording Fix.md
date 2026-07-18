# 2026-07-18 Deep Audit and Wording Fix

## Scope

Deep review pass for the live Response Rehearsal landing front door and focused Interactive Rehearsal route. This pass closed out the interrupted `fdfe7e5` focused workspace verification, fixed the localized generated wording defect `communications pressure pressure`, published only that low-risk source fix, and recorded larger findings for later work.

## Production Change

- Commit `9503b7e Fix interactive focus wording`
- File changed: `app.js`
- Deploy path: GitHub push to `main`, then Cloudflare Pages deploy hook
- Cloudflare deploy hook deployment id: `b7048e41-7a15-43a3-81a1-beaf273b838c`

The defect source was clear in `interactiveIntroText()`: the generated sentence appended `pressure` to every focus label, while `focusAdds.communications.label` already reads `Communications pressure`. The fix adds `interactiveFocusPhrase()` so labels that already include `pressure` are not duplicated.

## Verification

Static checks:

- `node --check app.js` passed.
- `git diff --check` passed before commit.
- Local and live text sweeps found no `communications pressure pressure`.
- Local sitemap/trust markers remain present for Guides, the 15-minute guide, 30-minute guide, Contact, Privacy, Terms, Trust & Privacy, `ads.txt`, and `security.txt`.

Deploy and live checks:

- Live `app.js?verify=9503b7e` contains `interactiveFocusPhrase` and the existing direct-path markers `pendingPathFocus`.
- Live homepage contains `href="index.html?path=interactive"`, Guides links, and the Interactive Rehearsal path label.
- `https://responserehearsal.com/` returned `200 OK`.
- `https://responserehearsal.com/?path=interactive` returned `200 OK`.
- `https://responserehearsal.com/.well-known/security.txt` returned `200 OK` with `text/plain`.
- `https://responserehearsal.com/ads.txt` returned `200 OK` with `text/plain`.
- `https://responserehearsal.com/sitemap.xml` returned `200 OK` with `application/xml`.
- Extensionless trust routes `/contact`, `/privacy`, and `/terms` returned `200 OK`.

Browser audit:

- Desktop direct route expanded to full state URL with `path=interactive`, selected `ransomware-communications-pressure`, set `document.body.dataset.mode=interactive`, focused `#startInteractiveBtn`, and placed `#interactiveExercise` at viewport top.
- Focused route hid `.path-doorway`, `.format-chooser`, `.control-panel`, and `.header-actions`.
- Desktop and 390px mobile viewport both showed no horizontal overflow.
- Live generated intro text includes `with communications pressure,` and does not include the duplicate wording.
- Facilitator notes toggle set `aria-expanded=true`, revealed 3 notes, and kept the panel visible.
- Facilitator pre-brief copy, current inject copy, packet copy, sample brief copy, ransomware sample copy, and AAR copy all returned visible `Copied` feedback with non-empty copied text.
- Start-to-AAR flow completed: choices reached 0, after-action reveal was visible, debrief text was populated, and AAR export buttons unlocked.
- Markdown export functions produced expected filenames:
  - `ransomware-disruption-audit9503.md`
  - `ransomware-disruption-participant-handout-audit9503.md`
  - `ransomware-disruption-facilitator-guide-audit9503.md`
  - `ransomware-disruption-blank-worksheet-audit9503.md`
- Print participant path called `window.print()` with `print-participant-only` class when the print dialog was stubbed.
- Browser back returned to packet mode without `path=interactive`; forward restored interactive mode, focus, and top-of-workspace position.
- Landing Interactive Rehearsal door click opened focused workspace, preserved `path=interactive`, focused `#startInteractiveBtn`, and had no horizontal overflow.
- Browser console after desktop/mobile interactions: 0 errors, 0 warnings.

## Findings

No P0/P1 blockers found.

P2 fixed - Generated wording duplicate in Interactive Rehearsal intro.

- Route: `/?path=interactive&type=ransomware&focus=communications&duration=60&difficulty=standard&rehearsal=ransomware-communications-pressure`
- Source: `app.js`, `interactiveIntroText()`
- Symptom: generated text could read `communications pressure pressure`.
- Status: fixed and live in `9503b7e`.

P3 backlog - Cloudflare clean URLs redirect `.html` public guide/trust URLs to extensionless routes while local canonicals and sitemap still use `.html`.

- Repro: `curl -L -I https://responserehearsal.com/guides.html` shows `308 Permanent Redirect` to `/guides`, then `200 OK`.
- Also observed for `15-minute-incident-response-drill.html`, `30-minute-incident-response-tabletop.html`, and `contact.html`.
- Risk: access works and pages are not broken, but sitemap/canonical/public nav consistency should be settled in one deliberate URL hygiene pass after AdSense review or explicit approval.
- Do not fix piecemeal during review unless Search Console reports a concrete coverage/canonical issue.

P3 backlog - Bare homepage JavaScript normalizes `/` into a full parameterized default state URL on load.

- Repro: open `https://responserehearsal.com/`; after app initialization the browser URL becomes a default `?type=...&seed=...&rehearsal=...` state.
- Risk: not a crawl blocker because raw HTML canonical remains apex, but it makes the front door feel less clean and adds noise to sharing/history.
- Recommended future slice: preserve a clean landing URL until a user changes settings, opens a direct path, copies a scenario link, or starts a generated packet workflow.

P3 note - Print was verified with `window.print()` stubbed to avoid opening the system print dialog from automation.

- Risk: browser print classes and call path work, but final paper/PDF appearance should still be spot-checked manually before using for a real exercise.

## Current Posture

- AdSense review pending.
- `/guides.html` indexing request remains pending recrawl per Sean's Search Console status.
- 15-minute and 30-minute guide pages were indexed/green per Sean.
- Direct focused Interactive Rehearsal route is live.
- Contact, `ads.txt`, `security.txt`, sitemap, robots, trust pages, copy/export, and AAR flow are stable in this pass.
- Hold production churn unless AdSense/Search Console reports a concrete issue, or Sean approves a deliberate URL hygiene or landing URL cleanup slice.

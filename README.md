# Incident Response Tabletop Exercise Generator

IR Tabletop Generator is a static, browser-only prototype for building incident response tabletop exercise materials. It is designed for defensive readiness discussions, facilitator prep, and lightweight exercise delivery without accounts, uploads, databases, or backend services.

Current staging endpoint: this GitHub repository. There is no custom domain or Cloudflare deployment configured yet.

## What It Does

- Generates incident response tabletop packets from selected settings.
- Supports ransomware, credential phishing, insider data exposure, public service outage, and vendor compromise scenarios.
- Produces participant handouts, facilitator guides, timed injects, discussion prompts, evidence prompts, worksheets, action trackers, and after-action material.
- Includes interactive rehearsal mode with scenario picker, facilitator runbook, timer controls, facilitator notes, copyable injects, decision choices, consequence meters, and AAR export.
- Includes evaluator-friendly samples: a BEC demo run and a copy-ready ransomware tabletop packet.
- Includes browser presentation mode with facilitator and participant deck views for remote or hybrid sessions.
- Provides copy, print, download, daily drill, and shareable URL controls.

## Run Locally

No install or build step is required.

Option 1: open `index.html` directly in a browser.

Option 2: run a local static server from the repository root:

```powershell
python -m http.server 4195 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4195/
```

Focused smoke-test URL:

```text
http://127.0.0.1:4195/?type=phishing&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=246810&rehearsal=phishing-bec
```

## Public Runtime Files

The static app runs from these top-level files:

- `index.html`
- `styles.css`
- `app.js`
- `trust-and-privacy.html`

Supporting repository docs:

- `README.md`
- `DEPLOYMENT_CHECKLIST.md`
- `IR Tabletop Generator/` project notes and handoff history

Local-only folders such as source references, generated output, agent metadata, and workspace files should not be treated as public runtime assets.

## Verification

Run the JavaScript syntax check before pushing app changes:

```powershell
node --check .\app.js
```

Recommended manual smoke path:

- Load the app with no console errors.
- Click `Load BEC demo`.
- Confirm the interactive format opens with `Executive Payment Request Drill`.
- Click `Copy ransomware packet` and confirm the button reports `Copied`.
- Generate a full packet.
- Open interactive rehearsal.
- Confirm the scenario picker updates the exercise.
- Confirm facilitator runbook ready state.
- Copy the facilitator pre-brief.
- Start and complete an interactive path.
- Confirm the AAR export unlocks.
- Click `Copy AAR summary` after completion and confirm it produces the concise decisions/gaps/actions summary.
- Check a narrow/mobile viewport for no horizontal overflow.

See `DEPLOYMENT_CHECKLIST.md` for the fuller staging checklist.

## Trust And Use Boundaries

This prototype creates educational tabletop exercise materials. It does not provide legal, compliance, regulatory, or incident-response advice.

Do not enter real credentials, confidential incident details, personal information, sensitive infrastructure details, regulated data, or anything that would create risk if shared. Use generic or fictionalized details when practicing.

The generator should stay focused on defensive tabletop discussion and readiness planning. It should not include operational attack guidance.

## Current Status

- Static/browser-only prototype.
- GitHub repository is the current staging/publication endpoint.
- No domain or Cloudflare deployment is configured.
- Source reference materials are research inputs and should not be copied into public site content.

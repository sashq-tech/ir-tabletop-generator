# IR Tabletop Generator Deployment Checklist

This project is still a local prototype. Do not deploy without Sean approval.

## Current Prototype State

- Static browser-only app with no build step.
- Core public experience is implemented in plain HTML, CSS, and JavaScript.
- Current local path: `C:\Users\rdrnr\Projects\IR Tabletop Generator`.
- Current GitHub remote: `https://github.com/sashq-tech/ir-tabletop-generator.git`.
- Current publication/staging endpoint: GitHub repository.
- Domain and Cloudflare Pages setup are future optional work and are not part of the current staging path.

## Public Files To Ship

Only these top-level files are intended for a static public site today:

- `index.html`
- `styles.css`
- `app.js`
- `about.html`
- `privacy.html`
- `terms.html`
- `contact.html`
- `trust-and-privacy.html`
- `README.md`
- `DEPLOYMENT_CHECKLIST.md`

Optional for repository staging, but not required for the public web root:

- `.gitignore`
- `IR Tabletop Generator.code-workspace`

## Do Not Ship

Keep these local unless a later decision explicitly changes the deploy model:

- `Incident Response Sources/`
- `IR Tabletop Generator/` Obsidian vault notes
- `output/` browser test artifacts and generated files
- `.agents/`
- `.codex/`
- `.git/`
- `.vscode/`
- `*.code-workspace`

## Verification Commands

Run these from `C:\Users\rdrnr\Projects\IR Tabletop Generator` before any staging push:

```powershell
node --check .\app.js
git status --short
git remote -v
```

Use a local static server for browser smoke testing:

```powershell
python -m http.server 4195 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4195/
```

Recommended focused smoke URL:

```text
http://127.0.0.1:4195/?type=phishing&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=246810&rehearsal=phishing-bec
```

## Local Browser Smoke Checklist

- Load the app with no console errors.
- Generate a full packet.
- Open the interactive rehearsal format.
- Confirm the scenario picker updates the selected exercise.
- Confirm the facilitator runbook shows ready state before start.
- Copy the facilitator pre-brief.
- Start the interactive exercise.
- Confirm timer, current inject copy, and facilitator notes work.
- Complete an interactive path.
- Confirm after-action export unlocks and copies.
- Test mobile/narrow viewport for no horizontal overflow.

## Before Any Public Launch

- Confirm no source PDFs, downloaded references, local notes, screenshots, or test artifacts are included in the deployed folder.
- Review `trust-and-privacy.html` for accuracy.
- Review About, Privacy, Terms, and Contact pages for launch contact wording and current data-handling accuracy.
- Run `node --check app.js`.
- Open `index.html` directly in a browser and generate at least one packet.
- Test participant and facilitator presentation modes.
- Test print views for full packet, participant handout, facilitator guide, blank worksheet, and slide deck.
- Confirm no analytics, ads, affiliate links, external scripts, uploads, accounts, or backend calls were added unintentionally.

## Before GitHub Staging

- Confirm `git remote -v` shows the intended GitHub remote.
- Confirm the repository does not include `Incident Response Sources/`, Obsidian notes, `.agents/`, `.codex/`, `output/`, or test artifacts.
- Confirm GitHub renders the repository cleanly and the intended runtime files are present at the repository root.
- Confirm the prototype is still educational, defensive, browser-only, and does not ask users to enter sensitive incident details.
- Re-run syntax and browser smoke checks immediately before pushing a public milestone.

## Future Optional Static Hosting

If this later moves beyond GitHub repository staging to Cloudflare Pages or another static host:

- Project root: repository root.
- Build command: none.
- Output directory: repository root.
- Required runtime files: `index.html`, `styles.css`, `app.js`, `about.html`, `privacy.html`, `terms.html`, `contact.html`, `trust-and-privacy.html`.
- Review the staging URL before any production or custom-domain mapping.

## Handoff Summary For Staging

- App type: static site, no backend.
- Build command: none.
- Public entry point: `index.html`.
- Required runtime files: `index.html`, `styles.css`, `app.js`, `about.html`, `privacy.html`, `terms.html`, `contact.html`, `trust-and-privacy.html`.
- Current endpoint: GitHub repository.
- Future optional endpoint: Cloudflare Pages or equivalent static hosting, only after that path is chosen.

## Product Guardrails

- Static/browser-only.
- No login.
- No upload.
- No backend.
- No database.
- No personal or confidential incident details entered by users.
- Defensive tabletop exercise preparation only; avoid operational attack guidance.

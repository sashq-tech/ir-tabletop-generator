# 2026-07-16 Focused Rehearsal Entry Slice

## Scope

Small first slice toward the Structured Landing + Focused Interactive Rehearsal direction.

Sean does not want to sit idle during AdSense review, but the site should preserve the trust/search posture. This pass avoided a full route split or app restructure.

## Production Change

Added a homepage path-door band above the existing format chooser.

Commit: `ada8697 Add focused rehearsal entry paths`.

Paths:

- Interactive Rehearsal: selects the existing `interactive` workspace mode and scrolls to the existing interactive exercise section.
- Build Materials: selects the existing packet/materials workspace and scrolls to the settings panel.
- Guides / Short Drills: links to `guides.html`.

## Files Changed

- `index.html`
- `styles.css`
- `app.js`
- `POST_LAUNCH_BACKLOG.md`
- `IR Tabletop Generator/07 Handoff/Codex Handoff Status.md`
- `IR Tabletop Generator/07 Handoff/2026-07-16 Focused Rehearsal Entry Slice.md`

## Guardrails Preserved

- No DNS, Cloudflare, Search Console, Bing, or AdSense settings changed.
- No sitemap or indexed guide URL changes.
- No new guide page or app feature added.
- Existing Guides hub and trust pages remain discoverable.
- Existing parameterized rehearsal links remain intact.
- `ads.txt` and `/.well-known/security.txt` remain part of the live verification set.

## Verification

Local checks:

- `node --check app.js` passed.
- `git diff --check` passed with CRLF warnings only.
- Marker checks confirmed the new homepage path band, `data-path-target` buttons, `openPathDoor` handler, and existing trust/search files.

Live checks:

- `https://responserehearsal.com/` returned `200` and contains `Choose a path`, `Interactive Rehearsal`, `Build Materials`, `Guides / Short Drills`, and `data-path-target="interactive"`.
- Live `app.js` contains `pathButtons`, `openPathDoor`, and `setWorkspaceMode("interactive")`.
- `https://responserehearsal.com/guides.html` redirects to `/guides` and returns `200`; the canonical remains `https://responserehearsal.com/guides.html`.
- `https://responserehearsal.com/contact`, `/privacy`, and `/terms` returned `200`.
- Live `ads.txt` still contains `pub-7040609172484112`.
- Live `/.well-known/security.txt` still returns `200` as `text/plain`.
- Live sitemap still lists `/`, `guides.html`, the 15-minute guide, the 30-minute guide, Privacy, Contact, Terms, and Trust & Privacy.

## Current Search And Trust Posture

- AdSense review pending.
- `/guides.html` indexing requested / pending recrawl.
- `https://responserehearsal.com/15-minute-incident-response-drill.html` indexed/green per Sean.
- `https://responserehearsal.com/30-minute-incident-response-tabletop.html` indexed/green per Sean.
- `ads.txt` live with `pub-7040609172484112`.
- `/.well-known/security.txt` live as `text/plain` with Contact, Expires, Preferred-Languages, and Canonical.

## Next Recommended Slice

If Sean approves another small production pass before AdSense completes, keep it to one of these:

- Add a direct URL state such as `?path=interactive` that opens the existing focused interactive mode without moving files.
- De-emphasize packet/export controls while `body[data-mode="interactive"]` is active, without removing them from packet/slides/worksheet modes.
- Add a small "Back to paths" control for the existing workspace once a path is selected.

Do not create `rehearsal.html` or move major app structure until after AdSense approval or explicit approval for a larger restructure.

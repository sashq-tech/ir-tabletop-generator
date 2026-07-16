# 2026-07-16 Direct Interactive Path State

## Scope

Small Response Rehearsal product slice for the focused Interactive Rehearsal direction.

## Runtime Change

- Commit: `23625e5 Add direct interactive path state`
- Files changed: `app.js`, `index.html`
- Added compatible `?path=interactive` URL support.
- Preserved existing parameterized exercise links and scenario state, including the `rehearsal` parameter.
- The Interactive Rehearsal path tile now has a copyable static href: `index.html?path=interactive`.
- Normal clicks still use the existing in-page mode system and scroll/focus the existing Interactive Rehearsal workspace.
- No new route, sitemap change, guide change, trust-page change, DNS/platform change, or app-feature expansion was introduced.

## Local Verification

- `node --check app.js` passed.
- `git diff --check` passed with CRLF warnings only.
- Marker checks found `pendingPathFocus`, `focusPendingPath`, `state.path = "interactive"`, `syncInteractiveScenarioPicker(params.get("rehearsal"))`, and `href="index.html?path=interactive"`.
- Repo was clean after the failed Wrangler side effects were removed.

## Push / Publish Status

- Commit `23625e5` was pushed to `main`.
- Direct `npx wrangler deploy` did not publish. Wrangler auto-detected an invalid worker name from the folder path (`" -abletop -enerator"`) and stopped with a config validation error.
- The failed Wrangler setup created an invalid `wrangler.jsonc` and appended Wrangler ignore lines to `.gitignore`; both tool-created side effects were removed, and the repo returned to clean.
- `npx wrangler pages project list` was retried outside the sandbox after an npm cache `EPERM`, but Wrangler requires `CLOUDFLARE_API_TOKEN` in this non-interactive environment.
- Cache-busted live checks for `https://responserehearsal.com/app.js?v=23625e5b` and `https://responserehearsal.com/?v=23625e5b` did not show the new direct-path markers after the push wait.
- Current conclusion: code is pushed, but production is not yet verified live for commit `23625e5`.

## Live Checks

- `https://responserehearsal.com/?path=interactive&type=ransomware&focus=communications&duration=60&difficulty=standard&rehearsal=ransomware-communications-pressure` returned `200`, but the deployed JavaScript still lacks the new direct-path markers, so this is not a successful behavior verification yet.
- `https://responserehearsal.com/` returned `200`.
- `https://responserehearsal.com/guides.html` returned `200`.
- `https://responserehearsal.com/contact` returned `200`.
- `https://responserehearsal.com/ads.txt` returned `200 text/plain` with `pub-7040609172484112`.
- `https://responserehearsal.com/.well-known/security.txt` returned `200 text/plain` with Contact, Expires, Preferred-Languages, and Canonical fields.

## Current Posture

- AdSense review remains pending.
- `/guides.html` indexing requested / pending recrawl.
- The 15-minute and 30-minute guide articles are indexed/green per Sean.
- `ads.txt` and `security.txt` remain live and healthy.
- No further product changes should be layered on top until commit `23625e5` is published and live-verified, or Sean explicitly provides the Cloudflare deploy path/token.

## Next Slice

1. Publish/verify commit `23625e5` through the established Cloudflare Pages/GitHub path, or provide `CLOUDFLARE_API_TOKEN` for non-interactive Wrangler deploy/list commands.
2. Live-verify homepage markers, live `app.js` markers, and the direct parameter URL.
3. After that, the next safe focused-workspace slice is to reduce competing packet/export controls while in interactive mode, still without creating `rehearsal.html`.

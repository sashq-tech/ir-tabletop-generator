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

## 2026-07-16 Recovery Recheck

- Repo remained clean before this status note.
- Latest local commits remain `b6c6154 Record direct interactive path deployment status` and `23625e5 Add direct interactive path state`.
- Rechecked production with cache-busted URLs:
  - `https://responserehearsal.com/app.js?v=23625e5-recheck-0716`
  - `https://responserehearsal.com/?v=23625e5-recheck-0716`
- Production still did not show `pendingPathFocus`, `focusPendingPath`, `state.path = "interactive"`, or `href="index.html?path=interactive"`.
- Local deployment inspection found no committed `wrangler.toml`, `wrangler.json`, `wrangler.jsonc`, `package.json`, `.github/workflows`, `_headers`, or `_redirects` deployment config.
- Local docs identify the GitHub remote as `https://github.com/sashq-tech/ir-tabletop-generator.git` and describe GitHub as the source/staging repo, but they do not record an exact Cloudflare Pages project name.

## Operator Note For Sean

Phone-safe next action:

1. Open Cloudflare dashboard.
2. Go to Workers & Pages, then Pages.
3. Find the Pages project serving `responserehearsal.com`.
4. Check whether it is connected to `sashq-tech/ir-tabletop-generator` on `main`.
5. If connected, open Deployments and click Retry deployment or Trigger deployment for the latest `main` commit.
6. If it is not connected, connect it to `sashq-tech/ir-tabletop-generator`, branch `main`, with build command blank/none and output directory set to the repository root.
7. If Sean wants Codex to deploy from here, provide a Cloudflare API token as `CLOUDFLARE_API_TOKEN` with permission to read/deploy the relevant Pages project; then Codex can list projects and deploy without guessing.

Do not create a Wrangler config in the repo until the correct Cloudflare Pages project name and deployment model are confirmed.

## 2026-07-17 Deploy Hook Resolution

- Sean provided and successfully triggered the Cloudflare Pages deploy hook:
  - `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/003a0ca5-b605-40d3-84c4-fed90a39de80`
- Cloudflare returned deployment id:
  - `4627d6a8-8cc7-4f8d-ba63-46fccc741b79`
- Direct-path deployment blocker is resolved.
- Live homepage source now contains `href="index.html?path=interactive"` and `data-path-target="interactive"`.
- Live `app.js` now contains `pendingPathFocus`, `focusPendingPath`, `state.path = "interactive"`, and the preserved `syncInteractiveScenarioPicker(params.get("rehearsal"))` flow.

Browser verification:

- `https://responserehearsal.com/?path=interactive` loads, rewrites to a full generated state URL, preserves `path=interactive`, sets `document.body.dataset.mode` to `interactive`, scrolls the Interactive Rehearsal section to the top of the viewport, and focuses `#startInteractiveBtn`.
- Parameterized rehearsal URL verified:
  - `https://responserehearsal.com/?path=interactive&type=ransomware&focus=communications&duration=60&difficulty=standard&rehearsal=ransomware-communications-pressure`
  - Live browser state preserved `type=ransomware`, `focus=communications`, `duration=60`, `difficulty=standard`, `rehearsal=ransomware-communications-pressure`, `path=interactive`, `document.body.dataset.mode=interactive`, and focus on `#startInteractiveBtn`.

Focused live endpoint verification:

- `https://responserehearsal.com/contact` returned `200`.
- `https://responserehearsal.com/privacy` returned `200`.
- `https://responserehearsal.com/terms` returned `200`.
- `https://responserehearsal.com/guides.html` returned `200`.
- `https://responserehearsal.com/ads.txt` returned `200 text/plain` and contains `pub-7040609172484112`.
- `https://responserehearsal.com/.well-known/security.txt` returned `200 text/plain` and contains Contact, Expires, and Canonical fields.
- `https://responserehearsal.com/sitemap.xml` returned `200 application/xml` and includes homepage, Guides, 15-minute guide, 30-minute guide, and Contact URLs.
- `https://responserehearsal.com/robots.txt` returned `200 text/plain` and includes `Allow: /` plus the sitemap URL.

Current conclusion: direct Interactive Rehearsal path support is live and verified. The earlier deployment blocker is closed.

## 2026-07-17 Search Console + Deploy Recheck

- Re-ran deployment closeout after Sean downloaded the 2026-07-17 Search Console Performance export.
- Live homepage still contains `href="index.html?path=interactive"` and `data-path-target="interactive"`.
- Live `app.js` still contains `pendingPathFocus`, `focusPendingPath`, `state.path = "interactive"`, and preserved `syncInteractiveScenarioPicker(params.get("rehearsal"))`.
- Browser verification still passes for `https://responserehearsal.com/?path=interactive`: mode is `interactive`, `path=interactive` is preserved, `#interactiveExercise` is at the top of the viewport, and focus is on `#startInteractiveBtn`.
- Browser verification still passes for the parameterized ransomware communications pressure URL:
  - `type=ransomware`
  - `focus=communications`
  - `duration=60`
  - `difficulty=standard`
  - `rehearsal=ransomware-communications-pressure`
  - `path=interactive`
- Focused live endpoints remained healthy: Contact, Privacy, Terms, Guides, `ads.txt`, `/.well-known/security.txt`, sitemap, and robots all returned expected status/markers.

## Earlier Pre-Hook Live Checks

- Before Sean triggered the deploy hook on 2026-07-17, `https://responserehearsal.com/?path=interactive&type=ransomware&focus=communications&duration=60&difficulty=standard&rehearsal=ransomware-communications-pressure` returned `200`, but the deployed JavaScript still lacked the new direct-path markers.
- After deploy hook deployment `4627d6a8-8cc7-4f8d-ba63-46fccc741b79`, this behavior is now live-verified.
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
- Direct-path support from commit `23625e5` is now published and live-verified via the 2026-07-17 deploy hook run.

## Next Slice

1. Keep AdSense/search churn low unless Google, Search Console, Bing, or live checks report a concrete issue.
2. The next safe focused-workspace slice is to reduce competing packet/export controls while in interactive mode, still without creating `rehearsal.html`.
3. Preserve the deploy hook as the confirmed production deployment path unless a proper Cloudflare Pages config/token is added later.

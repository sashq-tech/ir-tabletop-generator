# 2026-06-28 Deploy Readiness Checklist Pass

## What changed
- Expanded `DEPLOYMENT_CHECKLIST.md` into a practical prototype staging checklist.
- Documented the current static/browser-only project state and local project path.
- Listed public files intended for staging and files/folders that should not ship.
- Added verification commands for `node --check`, `git status --short`, and `git remote -v`.
- Added a local static-server smoke-test command and a focused BEC scenario smoke URL.
- Added GitHub staging prerequisites and handoff summary.
- Cloudflare/domain setup is future optional work only, not part of the current staging path.

## Verification
- Docs-only pass; no app code was changed.
- Read back `DEPLOYMENT_CHECKLIST.md` after editing to confirm content and formatting.
- `git remote -v` still returned no output.

## Staging caution
- `DEPLOYMENT_CHECKLIST.md` is currently untracked in the local repo, so it must be included intentionally when the repo is prepared for GitHub staging.
- The public deployment root should include only the intended static runtime files and should exclude sources, Obsidian notes, agent metadata, test artifacts, and local workspace files.

## Publish note
- Later correction: the GitHub repository is the current publication/staging endpoint for now.
- Do not claim Cloudflare Pages or domain deployment unless that is separately configured and verified.

## Next useful pass
- Add a small repository-staging manifest once the GitHub staging flow is settled.
- Add Cloudflare Pages guidance only if that future deployment model is chosen.
- Re-run full syntax and browser smoke verification immediately before the first staging push.

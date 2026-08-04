# 2026-08-03 Landing And Workspace Release

## Decision

Sean explicitly approved the Response Rehearsal landing/workspace split and publication. The implementation keeps the existing single-document static architecture and uses query-route state instead of creating a duplicated `rehearsal.html` application.

## Product Change

- Bare `/` is now a calm front door with three clear paths: Interactive Rehearsal, Packet Generator, and Guides.
- Interactive Rehearsal is a focused live workspace. Public navigation, packet actions, packet output, slides, worksheets, and the public footer are hidden while facilitating.
- A persistent `Exit workspace` action returns to the clean landing page.
- Packet Generator retains all existing packet, participant, facilitator, slide, worksheet, copy, print, and Markdown download behavior.
- Existing interactive drills, selected `rehearsal=` values, facilitator runbook, timer, notes, consequence meters, decision paths, AAR copy, and AAR-only print state are preserved.

## Route Contract

- `/` is the landing page and stays free of generated default parameters.
- `/?path=interactive&...` restores the focused live workspace and selected drill.
- `/?path=packet&...` restores facilitator preparation; `mode=slides|worksheet` restores packet sub-modes.
- Legacy parameterized URLs without `path=` open Packet Generator and normalize with `replaceState`.
- Entry and Exit use one `pushState` each. Settings use `replaceState`. `popstate` restores route, mode, scenario, and presentation state without creating new history entries.

## Regression Coverage

The repository now includes a Playwright suite with desktop Chrome and a 390 x 844 mobile viewport. It covers:

- landing, Interactive Rehearsal, and Packet Generator entry;
- persistent Exit, Back, Forward, refresh, and direct-link restoration;
- selected incident/scenario and packet sub-mode restoration;
- packet copy, facilitator Markdown download filename, and print invocation;
- facilitator pre-brief copy, five-decision BEC run, AAR unlock/copy, and AAR-only print visibility;
- accessible names for visible links/buttons; and
- horizontal overflow on landing, interactive, and packet paths.

## Local Verification

- `node --check app.js` passed.
- Syntax checks passed for the QA server, Playwright config, and regression spec.
- `npm ci --ignore-scripts` completed with zero reported vulnerabilities.
- `npm run test:workspace` passed all 8 desktop/mobile tests.
- Desktop and mobile screenshots were visually reviewed for the landing and Interactive Rehearsal workspace; no overlap, clipping, or horizontal overflow was observed.
- `git diff --check` passed with only the repository's normal CRLF conversion warnings.

## Guardrails

- No backend, account, upload, analytics, ad code, external script, database, DNS, Search Console, AdSense, or Cloudflare setting change.
- No drill, scenario, packet, export, or trust-page content was removed.
- The runtime remains plain HTML, CSS, and JavaScript. Playwright is development-only QA tooling.

## Publication

This note is committed with the approved release. The exact commit and live deployment verification are recorded in the task result and Home AI Ops release note after publication.

## Residual Risk

- Interactive decision progress is intentionally session-only; refreshing restores the selected route/scenario but not an in-progress choice path or timer.
- Browser history and responsive checks are automated in Chrome. Safari/Firefox and a physical phone remain useful later confidence checks, not current blockers.

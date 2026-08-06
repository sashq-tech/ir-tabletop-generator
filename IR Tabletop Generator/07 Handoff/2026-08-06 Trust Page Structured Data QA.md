# 2026-08-06 Trust Page Structured Data QA

## Status

Committed locally for review; the exact commit is recorded in Home AI Ops. Not pushed, published, or deployed.

## Scope

- Added truthful page-specific JSON-LD to About, Privacy, Terms, Contact, and Trust & Privacy.
- Preserved the extensionless canonical contract and existing page descriptions.
- Added schema parse, canonical/Open Graph/description consistency, sitemap coverage, narrow-screen overflow, accessible-name, keyboard-focus, landmark, and contact-label checks.
- Added an optional Firefox test target that runs the same suite when Playwright Firefox is installed and otherwise reports a skip.

## Verification

- `node --check app.js`: passed.
- `npm run test:workspace`: 12 of 12 desktop/mobile Chrome tests passed.
- Configuration and `package.json` parse: passed.
- `npm run test:workspace:firefox`: skipped because the Playwright Firefox executable is not installed on this machine.

## Preserved Baseline

Production remains at baseline `432a026`; local repository HEAD is the review commit recorded in Home AI Ops. No application code, landing/workspace behavior, drill content, packet/AAR/export/print behavior, sitemap, Cloudflare, Search Console, AdSense, account setting, push, deployment, or publish action was changed.

## Residual Risk

- Firefox and Safari/WebKit behavior remains unverified until those browser runtimes are available.
- Structured data is locally parseable and internally consistent but has not been checked by an external rich-results validator or observed on production because publishing is outside this pass.

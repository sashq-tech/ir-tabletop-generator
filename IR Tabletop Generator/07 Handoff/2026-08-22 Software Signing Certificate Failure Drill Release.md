# Response Rehearsal Software Signing Certificate Failure Drill Release

Date: 2026-08-22
Status: Published and live

## Scope

Added one bounded, system-neutral Interactive Rehearsal scenario: `supplyChain-signing-certificate-failure`.

The five-inject drill covers:

- preserving signed artifacts, hashes, certificate-chain status, timestamps, build and signing logs, and key-custody evidence;
- separating expiration, revocation, timestamp, chain-distribution, signing-service, and possible key-compromise hypotheses;
- pausing affected releases while preserving a last-known-good continuity path;
- authorizing an emergency signing path through named authority, two-person approval, clean rebuild, least key access, and independent validation;
- setting fact-bounded vendor and customer communication thresholds without asking customers to bypass trust controls;
- validating signatures, timestamps, revocation behavior, representative installs, update channels, rollback, key retirement, and durable ownership before closure.

The existing SaaS data retention and identity provider outage drills were not modified.

## Preserved Contracts

- Landing and focused Interactive Rehearsal workspace separation
- Direct URL, refresh, and selected-scenario restoration
- Three decisions for each of five injects
- Facilitator pre-brief copy
- AAR summary copy and AAR-only print behavior
- Desktop and 390px mobile layout expectations
- Existing packet, copy, print, and AAR behavior for all other scenarios

## Release Verification

- Feature commit: `b2689d2` (`Add software signing certificate drill`)
- Branch and remote: `main`, pushed to `origin/main`
- Syntax and diff: `node --check app.js`, `node --check qa/workspace-regression.spec.js`, and `git diff --check` passed
- Regression suite: all 26 desktop/mobile Chrome tests passed
- Production asset: `https://responserehearsal.com/app.js` contains `supplyChain-signing-certificate-failure`
- Production route: `https://responserehearsal.com/?path=interactive&type=supplyChain&rehearsal=supplyChain-signing-certificate-failure`
- Live 390px verification: direct route and reload restored the selected drill; all five injects displayed three decisions; the run reached visible AAR and print-ready state; no horizontal overflow or page errors were observed

No account, analytics, AdSense, Cloudflare, DNS, Search Console, or other provider settings are in scope.

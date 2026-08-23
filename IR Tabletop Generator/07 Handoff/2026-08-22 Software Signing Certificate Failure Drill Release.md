# Response Rehearsal Software Signing Certificate Failure Drill Release

Date: 2026-08-22
Status: Candidate ready for authoritative regression and publication

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

## Candidate Verification

- Staged JavaScript syntax: pending
- Focused direct-link and AAR regression: added
- Full desktop/mobile Playwright suite: pending
- Authoritative commit and push: pending
- Live production route and complete 390px flow: pending

No account, analytics, AdSense, Cloudflare, DNS, Search Console, or other provider settings are in scope.

# 2026-07-12 Security.txt Hygiene

## Scope

Cloudflare flagged `security.txt` as not configured. Sean reported it as Low but recommended.

This was handled as a small trust/security hygiene fix during AdSense review. No app, guide, product, DNS, or platform changes were made.

## File Added

- `.well-known/security.txt`

## Commit

`ce6763d Add Response Rehearsal security.txt`

## Expected Live URL

`https://responserehearsal.com/.well-known/security.txt`

## Contents

```text
Contact: mailto:contact@responserehearsal.com
Contact: https://responserehearsal.com/contact
Expires: 2027-06-30T23:59:00Z
Preferred-Languages: en
Canonical: https://responserehearsal.com/.well-known/security.txt
```

## Notes

- `Contact` uses the confirmed public contact path.
- The HTTPS contact route is included because `https://responserehearsal.com/contact` is live.
- `Expires` is less than one year out.
- `Canonical` matches the exact well-known URL.
- No bug bounty, authorization-to-test, safe harbor, or permission language was added.

## Verification

Local checks:

- File exists at `.well-known/security.txt`.
- Required fields are present.
- Sweep found no bug bounty, authorization-to-test, safe harbor, permission, or testing-scope language.
- `git diff --check` passed with CRLF warnings only.

Live checks:

- `https://responserehearsal.com/.well-known/security.txt` returned `200 OK`.
- `Content-Type` was `text/plain; charset=utf-8`.
- Live body contained both `Contact` fields, `Expires`, `Preferred-Languages`, and matching `Canonical`.
- Note: the first immediate post-push request briefly returned the homepage fallback as `text/html`; after a 20-second retry, the correct `security.txt` file was live.

## Current Posture

AdSense review remains pending. `/guides.html` remains indexing requested / pending recrawl. The 15-minute and 30-minute guide articles are indexed/green per Sean.

Continue production hold unless AdSense, Search Console, Bing, Cloudflare, or live checks report a concrete issue.

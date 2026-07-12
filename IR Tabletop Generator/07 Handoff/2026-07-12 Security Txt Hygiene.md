# 2026-07-12 Security.txt Hygiene

## Scope

Cloudflare flagged `security.txt` as not configured. Sean reported it as Low but recommended.

This was handled as a small trust/security hygiene fix during AdSense review. No app, guide, product, DNS, or platform changes were made.

## File Added

- `.well-known/security.txt`

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

## Current Posture

AdSense review remains pending. `/guides.html` remains indexing requested / pending recrawl. The 15-minute and 30-minute guide articles are indexed/green per Sean.

Continue production hold unless AdSense, Search Console, Bing, Cloudflare, or live checks report a concrete issue.

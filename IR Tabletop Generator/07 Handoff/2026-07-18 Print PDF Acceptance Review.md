# 2026-07-18 Print PDF Acceptance Review

## Scope

Bounded print/export acceptance pass after live commit `9503b7e` and the deep audit. Public URL/canonical cleanup stayed deferred. No SEO, ads, DNS, Cloudflare setting, analytics, or landing-page restructure work was done.

## Finding Fixed

P2 fixed - Generated packet print PDFs included the landing/path chooser and format chooser before the actual packet.

- Repro artifact before fix:
  - `output/pdf/rr-printaudit-before-full-packet.pdf`
  - `output/pdf/rr-printaudit-before-participant-handout.pdf`
  - `output/pdf/rr-printaudit-before-facilitator-guide.pdf`
- Visual symptom: first two PDF pages were the front-door path choices, format chooser, demo run, and UI controls instead of generated exercise material.
- Source: `styles.css` print rules hid `.site-header`, `.control-panel`, `.signal-strip`, and `.site-footer`, but did not hide newer `.path-doorway` or `.format-chooser` sections.
- Fix commit: `1a306de Fix packet print front matter`
- Deploy hook deployment id: `ef4f7059-bbd8-4c4f-9f18-520a054542ec`

## Artifacts Reviewed

Before-fix PDFs:

- `output/pdf/rr-printaudit-before-full-packet.pdf` - 11 pages
- `output/pdf/rr-printaudit-before-participant-handout.pdf` - 5 pages
- `output/pdf/rr-printaudit-before-facilitator-guide.pdf` - 10 pages
- `output/pdf/rr-printaudit-before-completed-aar.pdf` - 5 pages

After-fix live PDFs:

- `output/pdf/rr-printaudit-after-full-packet.pdf` - 9 pages
- `output/pdf/rr-printaudit-after-participant-handout.pdf` - 3 pages
- `output/pdf/rr-printaudit-after-facilitator-guide.pdf` - 8 pages
- `output/pdf/rr-printaudit-after-completed-aar.pdf` - 5 pages

Rendered PNG contact sheets:

- `output/pdf/rendered/contact-rr-printaudit-full-packet.png`
- `output/pdf/rendered/contact-rr-printaudit-participant-handout.png`
- `output/pdf/rendered/contact-rr-printaudit-facilitator-guide.png`
- `output/pdf/rendered/contact-rr-printaudit-completed-aar.png`
- `output/pdf/rendered-after/contact-rr-printaudit-after-full-packet.png`
- `output/pdf/rendered-after/contact-rr-printaudit-after-participant-handout.png`
- `output/pdf/rendered-after/contact-rr-printaudit-after-facilitator-guide.png`
- `output/pdf/rendered-after/contact-rr-printaudit-after-completed-aar.png`

## Acceptance Results

Passed after fix:

- Full packet starts directly at `Generated packet` and no longer prints landing path choices, format chooser, demo controls, header, footer, or side controls.
- Participant-only handout starts at the packet, prints 3 pages, and does not show facilitator-only sections such as inject timeline, expected discussion areas, FADQ table, facilitator notes, evidence prompts, or action tracker.
- Facilitator guide starts at the packet, prints 8 pages, and includes participant reference context plus facilitator-only sections as intended for a self-contained guide.
- PDF output uses light ink, readable type, Letter pages, consistent section hierarchy, and no obvious clipped or overlapping content in the rendered PNG review.
- Page counts dropped by exactly the front-matter pages removed: full packet 11 to 9, participant 5 to 3, facilitator 10 to 8.
- Live post-fix stylesheet contains `.path-doorway` and `.format-chooser` in the print-hidden selector group.

Live regression checks after deploy:

- `https://responserehearsal.com/?path=interactive` returned `200 OK`.
- `https://responserehearsal.com/styles.css?verify=1a306de` contained the print fix.
- Packet copy returned `Copied` with non-empty generated packet text.
- Markdown export filenames remained correct:
  - `ransomware-disruption-printaudit9503.md`
  - `ransomware-disruption-participant-handout-printaudit9503.md`
  - `ransomware-disruption-facilitator-guide-printaudit9503.md`
  - `ransomware-disruption-blank-worksheet-printaudit9503.md`
- Start-to-AAR completed on the live focused route, AAR text populated, and AAR summary copy returned `Copied`.
- 390px mobile focused route preserved `path=interactive`, selected `ransomware-communications-pressure`, focused `#startInteractiveBtn`, and had no horizontal overflow.
- Browser console after regression checks: 0 errors, 0 warnings.
- Homepage, Contact, Privacy, Terms, Guides, sitemap, `ads.txt`, and `/.well-known/security.txt` returned healthy responses.

## Residual Risks

P3 - Completed AAR print view is readable but still prints the broader interactive workspace controls/runbook before the after-action reveal.

- Artifact: `output/pdf/rr-printaudit-after-completed-aar.pdf`
- Risk: usable for a facilitator record, but not yet a clean AAR-only handout.
- Recommendation: add a future AAR-specific print/export slice only if Sean wants printable AAR packets. Keep it separate from URL/canonical and landing-page work.

P3 - Browser-generated PDFs are untagged.

- Risk: common for Chromium PDF output; visual and text readability passed, but formal PDF accessibility tagging is not provided by the current browser-only approach.

Manual spot-check still recommended before the August exercise:

- Open `output/pdf/rr-printaudit-after-participant-handout.pdf` and `output/pdf/rr-printaudit-after-facilitator-guide.pdf` in the target PDF viewer/printer.
- Confirm printer margins and scale mode are acceptable on the actual organizational printer or PDF workflow.
- If using the AAR PDF externally, decide whether the broader interactive workspace pages are acceptable or whether an AAR-only export should be added first.

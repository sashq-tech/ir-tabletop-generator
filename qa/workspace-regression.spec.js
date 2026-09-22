const { test, expect } = require("@playwright/test");

const interactiveUrl =
  "/?path=interactive&type=phishing&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=246810&rehearsal=phishing-bec";

const travelLaptopUrl =
  "/?path=interactive&type=insider&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=864213&rehearsal=insider-lost-travel-laptop";

const cloudStorageUrl =
  "/?path=interactive&type=insider&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=731945&rehearsal=insider-cloud-storage-exposure";

const saasRetentionUrl =
  "/?path=interactive&type=supplyChain&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=592417&rehearsal=supplyChain-saas-retention-failure";

const identityProviderOutageUrl =
  "/?path=interactive&type=ddos&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=418736&rehearsal=ddos-identity-provider-outage";

const signingCertificateUrl =
  "/?path=interactive&type=supplyChain&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=307514&rehearsal=supplyChain-signing-certificate-failure";

const sourceControlOutageUrl =
  "/?path=interactive&type=supplyChain&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=824619&rehearsal=supplyChain-source-control-platform-outage";

const publicTrustPages = [
  { route: "/about", type: "AboutPage" },
  { route: "/privacy", type: "WebPage" },
  { route: "/terms", type: "WebPage" },
  { route: "/contact", type: "ContactPage" },
  { route: "/trust-and-privacy", type: "WebPage" }
];

const publicStructuredDataPages = [
  { route: "/about", type: "AboutPage", breadcrumbName: "About" },
  { route: "/privacy", type: "WebPage", breadcrumbName: "Privacy" },
  { route: "/terms", type: "WebPage", breadcrumbName: "Terms" },
  { route: "/contact", type: "ContactPage", breadcrumbName: "Contact" },
  { route: "/trust-and-privacy", type: "WebPage", breadcrumbName: "Trust & Privacy" },
  { route: "/guides", type: "CollectionPage", breadcrumbName: "Guides" }
];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.__copiedText = "";
    window.__printCalls = 0;
    window.__downloads = [];
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (value) => {
          window.__copiedText = value;
        }
      }
    });
    window.print = () => {
      window.__printCalls += 1;
    };
    URL.createObjectURL = () => "blob:response-rehearsal-test";
    URL.revokeObjectURL = () => {};
    const nativeClick = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function click() {
      if (this.download) {
        window.__downloads.push(this.download);
        return;
      }
      nativeClick.call(this);
    };
  });
});

test("landing doors, exit, history, refresh, and direct links stay coherent", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");

  await expect(page.locator("body")).toHaveAttribute("data-route", "landing");
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator("#pathDoorwayTitle")).toBeVisible();
  await expect(page.locator(".workspace-bar")).toBeHidden();
  await expect(page.locator("[data-path-target]")) .toHaveCount(2);

  const initialLength = await page.evaluate(() => history.length);
  await page.getByRole("link", { name: /Interactive Rehearsal/ }).click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page).toHaveURL(/path=interactive/);
  await expect(page.locator("#workspaceTitle")).toHaveText("Interactive Rehearsal");
  await expect(page.locator("#interactiveScenario")).toBeFocused();
  const interactiveOrder = await page.locator("#interactiveScenario, #startInteractiveBtn").evaluateAll((elements) =>
    elements.map((element) => element.id)
  );
  expect(interactiveOrder).toEqual(["interactiveScenario", "startInteractiveBtn"]);
  expect(await page.evaluate(() => history.length)).toBe(initialLength + 1);

  await page.locator("#exitWorkspaceBtn").click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "landing");
  await expect(page).toHaveURL(/\/$/);
  expect(await page.evaluate(() => history.length)).toBe(initialLength + 2);

  await page.goBack();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await page.goBack();
  await expect(page.locator("body")).toHaveAttribute("data-route", "landing");
  await page.goForward();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await page.reload();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page).toHaveURL(/path=interactive/);

  await page.goto(interactiveUrl);
  await expect(page.locator("#interactiveScenario")).toHaveValue("phishing-bec");
  await expect(page.locator("#incidentType")).toHaveValue("phishing");
  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("phishing-bec");
  expect(errors).toEqual([]);
});

test("packet preparation preserves exports, print calls, and mode state", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /Packet Generator/ }).click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "packet");
  await expect(page.locator("#incidentType")).toBeFocused();
  await expect(page).toHaveURL(/path=packet/);

  await page.locator("#copyBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Participant Handout");
  await page.locator("#printBtn").click();
  expect(await page.evaluate(() => window.__printCalls)).toBe(1);
  await page.locator("#downloadFacilitatorBtn").click();
  expect(await page.evaluate(() => window.__downloads.some((name) => name.endsWith("facilitator-guide-" + document.querySelector("#seedInput").value + ".md")))).toBe(true);

  await page.getByRole("button", { name: /Slide facilitation/ }).click();
  await expect(page.locator("body")).toHaveAttribute("data-mode", "slides");
  await expect(page).toHaveURL(/mode=slides/);
  await page.reload();
  await expect(page.locator("body")).toHaveAttribute("data-route", "packet");
  await expect(page.locator("body")).toHaveAttribute("data-mode", "slides");
});

test("interactive run completes with AAR copy and print-ready output", async ({ page }) => {
  await page.goto(interactiveUrl);
  await page.locator("#copyPreBriefBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Facilitator Pre-Brief");
  await page.locator("#startInteractiveBtn").click();

  for (let step = 0; step < 5; step += 1) {
    await page.locator("#interactiveChoices button").first().click();
  }

  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("#copyAarSummaryBtn")).toBeEnabled();
  await page.locator("#copyAarSummaryBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("AAR Summary");
  await expect(page.locator("body")).toHaveClass(/interactive-aar-ready/);

  await page.emulateMedia({ media: "print" });
  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("#interactiveStage")).toBeHidden();
});

test("lost travel laptop drill restores direct state and produces a complete AAR", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(travelLaptopUrl);
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#incidentType")).toHaveValue("insider");
  await expect(page.locator("#interactiveScenario")).toHaveValue("insider-lost-travel-laptop");
  await expect(page.locator("#interactiveTitle")).toHaveText("Lost Travel Laptop Exposure Drill");
  await expect(page.locator("#interactiveScenarioSummary")).toContainText("remote lock or wipe decisions");

  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("insider-lost-travel-laptop");
  await page.locator("#startInteractiveBtn").click();
  await expect(page.locator("#interactiveInjectTitle")).toContainText("Laptop missing after a customer visit");

  for (let step = 0; step < 5; step += 1) {
    await expect(page.locator("#interactiveChoices button")).toHaveCount(3);
    await page.locator("#interactiveChoices button").first().click();
  }

  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await page.locator("#copyAarSummaryBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Lost Travel Laptop Exposure Drill");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("AAR Summary");

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("cloud storage exposure drill preserves direct state, facilitator copy, and AAR output", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(cloudStorageUrl);
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#incidentType")).toHaveValue("insider");
  await expect(page.locator("#interactiveScenario")).toHaveValue("insider-cloud-storage-exposure");
  await expect(page.locator("#interactiveTitle")).toHaveText("Cloud Storage Link Exposure Drill");
  await expect(page.locator("#interactiveScenarioSummary")).toContainText("link and guest-session containment");

  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("insider-cloud-storage-exposure");
  await page.locator("#copyPreBriefBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Cloud Storage Link Exposure Drill");
  await page.locator("#startInteractiveBtn").click();
  await expect(page.locator("#interactiveInjectTitle")).toContainText("Anonymous project-folder link is discovered");

  for (let step = 0; step < 5; step += 1) {
    await expect(page.locator("#interactiveChoices button")).toHaveCount(3);
    await page.locator("#interactiveChoices button").first().click();
  }

  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/interactive-aar-ready/);
  await page.locator("#copyAarSummaryBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Cloud Storage Link Exposure Drill");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("AAR Summary");

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("SaaS retention failure drill preserves direct state, facilitator copy, and AAR output", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(saasRetentionUrl);
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#incidentType")).toHaveValue("supplyChain");
  await expect(page.locator("#interactiveScenario")).toHaveValue("supplyChain-saas-retention-failure");
  await expect(page.locator("#interactiveTitle")).toHaveText("SaaS Data Retention Failure Drill");
  await expect(page.locator("#interactiveScenarioSummary")).toContainText("retention and legal-hold scope");

  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("supplyChain-saas-retention-failure");
  await page.locator("#copyPreBriefBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("SaaS Data Retention Failure Drill");
  await page.locator("#startInteractiveBtn").click();
  await expect(page.locator("#interactiveInjectTitle")).toContainText("Historical records disappear after an automated cleanup");

  for (let step = 0; step < 5; step += 1) {
    await expect(page.locator("#interactiveChoices button")).toHaveCount(3);
    await page.locator("#interactiveChoices button").first().click();
  }

  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/interactive-aar-ready/);
  await page.locator("#copyAarSummaryBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("SaaS Data Retention Failure Drill");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("AAR Summary");

  await page.emulateMedia({ media: "print" });
  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("#interactiveStage")).toBeHidden();

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("identity provider outage drill preserves direct state, facilitator copy, and AAR output", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(identityProviderOutageUrl);
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#incidentType")).toHaveValue("ddos");
  await expect(page.locator("#interactiveScenario")).toHaveValue("ddos-identity-provider-outage");
  await expect(page.locator("#interactiveTitle")).toHaveText("Identity Provider Outage Drill");
  await expect(page.locator("#interactiveScenarioSummary")).toContainText("break-glass authority");

  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("ddos-identity-provider-outage");
  await page.locator("#copyPreBriefBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Identity Provider Outage Drill");
  await page.locator("#startInteractiveBtn").click();
  await expect(page.locator("#interactiveInjectTitle")).toContainText("Single sign-on failures spread across critical applications");

  for (let step = 0; step < 5; step += 1) {
    await expect(page.locator("#interactiveChoices button")).toHaveCount(3);
    await page.locator("#interactiveChoices button").first().click();
  }

  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/interactive-aar-ready/);
  await page.locator("#copyAarSummaryBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Identity Provider Outage Drill");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("AAR Summary");

  await page.emulateMedia({ media: "print" });
  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("#interactiveStage")).toBeHidden();

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("software signing certificate drill preserves direct state, facilitator copy, and AAR output", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(signingCertificateUrl);
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#incidentType")).toHaveValue("supplyChain");
  await expect(page.locator("#interactiveScenario")).toHaveValue("supplyChain-signing-certificate-failure");
  await expect(page.locator("#interactiveTitle")).toHaveText("Software Signing Certificate Failure Drill");
  await expect(page.locator("#interactiveScenarioSummary")).toContainText("emergency signing authority");

  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("supplyChain-signing-certificate-failure");
  await page.locator("#copyPreBriefBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Software Signing Certificate Failure Drill");
  await page.locator("#startInteractiveBtn").click();
  await expect(page.locator("#interactiveInjectTitle")).toContainText("scheduled release begins showing publisher trust warnings");

  for (let step = 0; step < 5; step += 1) {
    await expect(page.locator("#interactiveChoices button")).toHaveCount(3);
    await page.locator("#interactiveChoices button").first().click();
  }

  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/interactive-aar-ready/);
  await page.locator("#copyAarSummaryBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Software Signing Certificate Failure Drill");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("AAR Summary");

  await page.emulateMedia({ media: "print" });
  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("#interactiveStage")).toBeHidden();

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("source-control outage drill preserves direct state, timer, AAR, print, and responsive layout", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(sourceControlOutageUrl);
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#incidentType")).toHaveValue("supplyChain");
  await expect(page.locator("#interactiveScenario")).toHaveValue("supplyChain-source-control-platform-outage");
  await expect(page.locator("#interactiveTitle")).toHaveText("Source-Control Platform Outage During an Active Release");
  await expect(page.locator("#interactiveScenarioSummary")).toContainText("evidence-led token decisions");

  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("supplyChain-source-control-platform-outage");
  await expect(page).toHaveURL(/rehearsal=supplyChain-source-control-platform-outage/);
  await expect(page.locator("#interactiveTimer")).toHaveText("60:00");
  await page.locator("#toggleTimerBtn").click();
  await expect(page.locator("#interactiveTimerStatus")).toHaveText("Running");
  await page.locator("#toggleTimerBtn").click();
  await expect(page.locator("#interactiveTimerStatus")).toHaveText("Paused");

  await page.locator("#copyPreBriefBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Source-Control Platform Outage During an Active Release");
  await page.locator("#startInteractiveBtn").click();
  await expect(page.locator("#interactiveInjectTitle")).toContainText("source-control platform fails midway through an active release");

  for (let step = 0; step < 5; step += 1) {
    await expect(page.locator("#interactiveChoices button")).toHaveCount(3);
    await page.locator("#interactiveChoices button").first().click();
  }

  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/interactive-aar-ready/);
  await page.locator("#copyAarSummaryBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Source-Control Platform Outage During an Active Release");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("AAR Summary");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Timer remaining:");

  await page.emulateMedia({ media: "print" });
  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("#interactiveStage")).toBeHidden();

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("visible controls have names and both routes avoid horizontal overflow", async ({ page }) => {
  for (const url of ["/", interactiveUrl, "/?path=packet&seed=246810"]) {
    await page.goto(url);
    const unnamed = await page.locator("button:visible, a:visible").evaluateAll((elements) =>
      elements
        .filter((element) => !((element.getAttribute("aria-label") || element.textContent || "").trim()))
        .map((element) => element.outerHTML)
    );
    expect(unnamed).toEqual([]);
    const overflow = await page.evaluate(() => ({
      innerWidth,
      scrollWidth: document.documentElement.scrollWidth
    }));
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  }
});

test("short-drill guides hand facilitators directly into the interactive workspace", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/15-minute-incident-response-drill");
  await expect(page).toHaveTitle("What Is an Incident Response Drill? 15-Minute Guide");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", "An incident response drill is structured practice for real security decisions. See a worked example, then run a focused 15-minute interactive rehearsal.");
  await expect(page.getByRole("heading", { level: 2, name: "What is an incident response drill?" })).toBeVisible();
  await expect(page.getByText(/structured practice session where a team responds to a plausible security condition/)).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "How a 15-minute drill differs from a tabletop" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Actionable 15-minute facilitator sequence" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Worked decision record: unexpected MFA approval" })).toBeVisible();

  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  const articleSchema = JSON.parse(schemas[0]);
  const faqSchema = JSON.parse(schemas[1]);
  expect(canonical).toBe("https://responserehearsal.com/15-minute-incident-response-drill");
  expect(articleSchema.mainEntityOfPage).toBe(canonical);
  expect(articleSchema.headline).toBe("What Is an Incident Response Drill? 15-Minute Guide");
  expect(articleSchema.description).toBe("An incident response drill is structured practice for real security decisions. See a worked example, then run a focused 15-minute interactive rehearsal.");
  expect(articleSchema.dateModified).toBe("2026-09-19");
  expect(faqSchema["@type"]).toBe("FAQPage");

  const sourceHrefs = await page.locator('a[href^="https://www.cisa.gov"], a[href^="https://csrc.nist.gov"]').evaluateAll((links) =>
    links.map((link) => link.href)
  );
  expect(sourceHrefs).toEqual(expect.arrayContaining([
    "https://www.cisa.gov/resources-tools/services/cisa-tabletop-exercise-packages",
    "https://csrc.nist.gov/pubs/sp/800/84/final",
    "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
  ]));

  const fifteenMinuteCta = page.getByRole("link", { name: "Run the 15-minute Interactive Rehearsal", exact: true }).first();
  await expect(fifteenMinuteCta).toBeVisible();
  await fifteenMinuteCta.click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#workspaceTitle")).toHaveText("Interactive Rehearsal");
  await expect(page.locator("#duration")).toHaveValue("15");
  await expect(page.locator("#interactiveTimer")).toHaveText("15:00");
  await expect(page).toHaveURL(/path=interactive/);
  await expect(page).toHaveURL(/duration=15/);
  await expect(page.locator("#interactiveScenario")).toHaveValue("phishing-bec");
  await page.locator("#copyPreBriefBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("15 minutes");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("13-15 min");
  await page.reload();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#duration")).toHaveValue("15");
  await expect(page.locator("#interactiveTimer")).toHaveText("15:00");
  await page.locator("#startInteractiveBtn").click();
  for (let step = 0; step < 5; step += 1) {
    await expect(page.locator("#interactiveChoices button")).toHaveCount(3);
    await page.locator("#interactiveChoices button").first().click();
  }
  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("#copyAarSummaryBtn")).toBeEnabled();
  await page.locator("#copyAarSummaryBtn").click();
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("AAR Summary");
  await expect.poll(() => page.evaluate(() => window.__copiedText)).toContain("Duration: 15 minutes");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("#interactiveDebrief")).toBeVisible();
  await expect(page.locator("#interactiveStage")).toBeHidden();
  await page.emulateMedia({ media: "screen" });
  await page.goBack();
  await expect(page).toHaveURL(/15-minute-incident-response-drill$/);

  await page.goto("/30-minute-incident-response-tabletop");
  const thirtyMinuteCta = page.getByRole("link", { name: "Run a 30-minute Interactive Rehearsal", exact: true });
  await expect(thirtyMinuteCta).toBeVisible();
  await thirtyMinuteCta.click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#duration")).toHaveValue("30");
  await expect(page).toHaveURL(/path=interactive/);
  await expect(page).toHaveURL(/duration=30/);
  await page.reload();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#duration")).toHaveValue("30");
  await page.goBack();
  await expect(page).toHaveURL(/30-minute-incident-response-tabletop$/);

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("60-minute facilitator field guide is crawlable and preserves interactive rehearsal state", async ({ page, request }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/60-minute-incident-response-tabletop");
  await expect(page.getByRole("heading", { level: 2, name: "How to run a 60-minute incident response tabletop" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Assign four room functions" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Minute-by-minute 60-minute agenda" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: /Worked example/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "After-action rubric" })).toBeVisible();

  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  const description = await page.locator('meta[name="description"]').getAttribute("content");
  const ogUrl = await page.locator('meta[property="og:url"]').getAttribute("content");
  expect(canonical).toBe("https://responserehearsal.com/60-minute-incident-response-tabletop");
  expect(ogUrl).toBe(canonical);
  expect(description).toContain("timed agenda");

  const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  expect(schema["@type"]).toBe("Article");
  expect(schema.mainEntityOfPage).toBe(canonical);
  expect(schema.datePublished).toBe("2026-08-24");

  const articleWords = await page.locator("article").innerText().then((text) => text.trim().split(/\s+/).length);
  expect(articleWords).toBeGreaterThanOrEqual(1800);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain(`<loc>${canonical}</loc>`);
  const llms = await request.get("/llms.txt");
  expect(llms.ok()).toBe(true);
  expect(await llms.text()).toContain("60-minute incident response tabletop facilitator guide");

  const cta = page.getByRole("link", { name: "Run the 60-minute BEC rehearsal", exact: true });
  await expect(cta).toBeVisible();
  await cta.click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#workspaceTitle")).toHaveText("Interactive Rehearsal");
  await expect(page.locator("#interactiveScenario")).toHaveValue("phishing-bec");
  await expect(page.locator("#duration")).toHaveValue("60");
  await expect(page).toHaveURL(/path=interactive/);
  await expect(page).toHaveURL(/rehearsal=phishing-bec/);
  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("phishing-bec");
  await expect(page.locator("#duration")).toHaveValue("60");
  await page.goBack();
  await expect(page).toHaveURL(/60-minute-incident-response-tabletop$/);

  const unnamed = await page.locator("button:visible, a:visible").evaluateAll((elements) =>
    elements
      .filter((element) => !((element.getAttribute("aria-label") || element.textContent || "").trim()))
      .map((element) => element.outerHTML)
  );
  expect(unnamed).toEqual([]);
  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("source-control outage facilitator guide is substantive and hands off to the exact rehearsal", async ({ page, request }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/source-control-platform-outage-tabletop");
  await expect(page.getByRole("heading", { level: 2, name: "Source-control platform outage during an active release" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Run the five-stage agenda" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Build a release evidence ledger" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Bound credential risk without assuming compromise" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Worked decision record" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Use a staged-restoration checklist" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Score the AAR with behavior-based evidence" })).toBeVisible();

  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  const description = await page.locator('meta[name="description"]').getAttribute("content");
  const ogUrl = await page.locator('meta[property="og:url"]').getAttribute("content");
  expect(canonical).toBe("https://responserehearsal.com/source-control-platform-outage-tabletop");
  expect(ogUrl).toBe(canonical);
  expect(description).toContain("credential-risk boundaries");

  const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  expect(schema["@type"]).toBe("Article");
  expect(schema.mainEntityOfPage).toBe(canonical);
  expect(schema.datePublished).toBe("2026-08-24");

  const articleWords = await page.locator("article").innerText().then((text) => text.trim().split(/\s+/).length);
  expect(articleWords).toBeGreaterThanOrEqual(1500);
  expect(articleWords).toBeLessThanOrEqual(2000);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain(`<loc>${canonical}</loc>`);
  const llms = await request.get("/llms.txt");
  expect(llms.ok()).toBe(true);
  expect(await llms.text()).toContain("Source-control platform outage tabletop facilitator guide");

  const cta = page.getByRole("link", { name: "Run the source-control outage rehearsal", exact: true });
  await expect(cta).toBeVisible();
  await expect(cta).toHaveAttribute("href", /seed=824619/);
  await expect(cta).toHaveAttribute("href", /rehearsal=supplyChain-source-control-platform-outage/);
  await cta.click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#interactiveScenario")).toHaveValue("supplyChain-source-control-platform-outage");
  await expect(page.locator("#incidentType")).toHaveValue("supplyChain");
  await expect(page.locator("#duration")).toHaveValue("60");
  await expect(page.locator("#interactiveTimer")).toHaveText("60:00");
  await expect(page).toHaveURL(/path=interactive/);
  await expect(page).toHaveURL(/rehearsal=supplyChain-source-control-platform-outage/);
  await page.reload();
  await expect(page.locator("#interactiveScenario")).toHaveValue("supplyChain-source-control-platform-outage");
  await page.goBack();
  await expect(page).toHaveURL(/source-control-platform-outage-tabletop$/);

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
  expect(errors).toEqual([]);
});

test("about page explains the creator context, method, and review boundaries", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { level: 2, name: "About the creator and the method" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Why this project exists" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "The creator's working context" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "How the material is developed" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "What review does and does not mean" })).toBeVisible();
  await expect(page.getByRole("link", { name: "CISA tabletop exercise packages" })).toHaveAttribute("href", /^https:\/\/www\.cisa\.gov\//);
  await expect(page.getByRole("link", { name: "NIST SP 800-61 Revision 3" })).toHaveAttribute("href", /^https:\/\/csrc\.nist\.gov\//);

  const articleWords = await page.locator("article").innerText().then((text) => text.trim().split(/\s+/).length);
  expect(articleWords).toBeGreaterThanOrEqual(500);
  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
});

test("guides hub provides a substantive facilitator path into rehearsal", async ({ page }) => {
  await page.goto("/guides");

  await expect(page.getByRole("heading", { level: 2, name: "Facilitator learning path" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: /Run each inject as a decision loop/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: /Close with a usable after-action record/ })).toBeVisible();

  const articleWords = await page.locator("article").innerText().then((text) => text.trim().split(/\s+/).length);
  expect(articleWords).toBeGreaterThanOrEqual(750);

  const schemaNodes = (await page.locator('script[type="application/ld+json"]').allTextContents()).map((text) => JSON.parse(text));
  const schema = schemaNodes.find((node) => node["@type"] === "CollectionPage");
  expect(schema).toBeTruthy();
  expect(schema["@type"]).toBe("CollectionPage");
  expect(schema.mainEntity.itemListElement).toHaveLength(8);
  await expect(page.getByRole("link", { name: "Use the 60-minute facilitator field guide", exact: true })).toHaveAttribute("href", "/60-minute-incident-response-tabletop");
  await expect(page.getByRole("link", { name: "Use the source-control outage facilitator guide", exact: true })).toHaveAttribute("href", "/source-control-platform-outage-tabletop");
  await expect(page.getByRole("link", { name: "Source-Control Platform Outage Tabletop Facilitator Guide", exact: true })).toHaveAttribute("href", "/source-control-platform-outage-tabletop");
  await expect(page.getByRole("link", { name: "interactive source-control outage rehearsal", exact: true })).toHaveAttribute("href", /rehearsal=supplyChain-source-control-platform-outage/);

  const rehearsalLink = page.getByRole("link", { name: "Run the BEC decision rehearsal", exact: true }).last();
  await expect(rehearsalLink).toHaveAttribute("href", /path=interactive/);
  await rehearsalLink.click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#interactiveScenario")).toHaveValue("phishing-bec");
  await page.goBack();
  await expect(page).toHaveURL(/\/guides$/);

  const overflow = await page.evaluate(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);
});

test("public page and breadcrumb schema agree with canonical metadata and sitemap", async ({ page, request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const sitemapXml = await sitemap.text();
  const schemaIds = new Set();

  for (const { route, type, breadcrumbName } of publicStructuredDataPages) {
    await page.goto(route);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute("content");
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    const schemaNodes = (await page.locator('script[type="application/ld+json"]').allTextContents()).map((text) => JSON.parse(text));

    expect(schemaNodes).toHaveLength(2);
    const pageSchema = schemaNodes.find((schema) => schema["@type"] === type);
    const breadcrumbSchema = schemaNodes.find((schema) => schema["@type"] === "BreadcrumbList");
    expect(pageSchema).toBeTruthy();
    expect(breadcrumbSchema).toBeTruthy();
    expect(pageSchema["@context"]).toBe("https://schema.org");
    expect(pageSchema.url).toBe(canonical);
    expect(pageSchema.description).toBe(description);
    expect(pageSchema.isPartOf).toEqual({ "@id": "https://responserehearsal.com/#website" });
    expect(pageSchema.inLanguage).toBe("en-US");
    expect(pageSchema["@id"]).toBe(`${canonical}#webpage`);
    expect(pageSchema.breadcrumb).toEqual({ "@id": `${canonical}#breadcrumb` });
    expect(breadcrumbSchema["@context"]).toBe("https://schema.org");
    expect(breadcrumbSchema["@id"]).toBe(`${canonical}#breadcrumb`);
    expect(breadcrumbSchema.itemListElement).toEqual([
      {
        "@type": "ListItem",
        position: 1,
        name: "Response Rehearsal",
        item: "https://responserehearsal.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbName,
        item: canonical
      }
    ]);
    for (const schema of schemaNodes) {
      expect(schemaIds.has(schema["@id"])).toBe(false);
      schemaIds.add(schema["@id"]);
    }
    expect(ogUrl).toBe(canonical);
    expect(sitemapXml).toContain(`<loc>${canonical}</loc>`);
  }
});

test("trust pages remain keyboard-readable and avoid narrow-screen overflow", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  for (const { route } of publicTrustPages) {
    await page.goto(route);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("article h2")).toHaveCount(1);
    await expect(page.locator('nav[aria-label="Public pages"]')).toBeVisible();
    await expect(page.locator('nav[aria-label="Footer"]')).toBeVisible();

    const unnamed = await page.locator("button:visible, a:visible, input:visible, select:visible, textarea:visible").evaluateAll((elements) =>
      elements
        .filter((element) => !((element.getAttribute("aria-label") || element.labels?.[0]?.textContent || element.textContent || "").trim()))
        .map((element) => element.outerHTML)
    );
    expect(unnamed).toEqual([]);

    const overflow = await page.evaluate(() => ({
      innerWidth,
      scrollWidth: document.documentElement.scrollWidth
    }));
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1);

    await page.locator("body").press("Tab");
    await expect(page.locator(":focus")).toHaveAttribute("aria-label", "Response Rehearsal home");
    await page.keyboard.press("Tab");
    await expect(page.locator(":focus")).toHaveText("About");
  }

  await page.goto("/contact");
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toHaveAttribute("type", "email");
  await expect(page.getByLabel("Topic")).toBeVisible();
  await expect(page.getByLabel("Message")).toBeVisible();
  expect(errors).toEqual([]);
});

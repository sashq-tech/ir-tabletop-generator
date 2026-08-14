const { test, expect } = require("@playwright/test");

const interactiveUrl =
  "/?path=interactive&type=phishing&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=246810&rehearsal=phishing-bec";

const travelLaptopUrl =
  "/?path=interactive&type=insider&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=864213&rehearsal=insider-lost-travel-laptop";

const cloudStorageUrl =
  "/?path=interactive&type=insider&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=731945&rehearsal=insider-cloud-storage-exposure";

const publicTrustPages = [
  { route: "/about", type: "AboutPage" },
  { route: "/privacy", type: "WebPage" },
  { route: "/terms", type: "WebPage" },
  { route: "/contact", type: "ContactPage" },
  { route: "/trust-and-privacy", type: "WebPage" }
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
  await expect(page.locator("#startInteractiveBtn")).toBeFocused();
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
  await page.goto("/15-minute-incident-response-drill");
  const fifteenMinuteCta = page.getByRole("link", { name: "Open Interactive Rehearsal", exact: true });
  await expect(fifteenMinuteCta).toBeVisible();
  await fifteenMinuteCta.click();
  await expect(page.locator("body")).toHaveAttribute("data-route", "interactive");
  await expect(page.locator("#workspaceTitle")).toHaveText("Interactive Rehearsal");
  await expect(page).toHaveURL(/path=interactive/);
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
});

test("guides hub provides a substantive facilitator path into rehearsal", async ({ page }) => {
  await page.goto("/guides");

  await expect(page.getByRole("heading", { level: 2, name: "Facilitator learning path" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: /Run each inject as a decision loop/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: /Close with a usable after-action record/ })).toBeVisible();

  const articleWords = await page.locator("article").innerText().then((text) => text.trim().split(/\s+/).length);
  expect(articleWords).toBeGreaterThanOrEqual(750);

  const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  expect(schema["@type"]).toBe("CollectionPage");
  expect(schema.mainEntity.itemListElement).toHaveLength(5);

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

test("trust-page schema parses and agrees with canonical, metadata, and sitemap", async ({ page, request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const sitemapXml = await sitemap.text();
  const schemaIds = new Set();

  for (const { route, type } of publicTrustPages) {
    await page.goto(route);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute("content");
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    const schemaText = await page.locator('script[type="application/ld+json"]').allTextContents();

    expect(schemaText).toHaveLength(1);
    const schema = JSON.parse(schemaText[0]);
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe(type);
    expect(schema.url).toBe(canonical);
    expect(schema.description).toBe(description);
    expect(schema.isPartOf).toEqual({ "@id": "https://responserehearsal.com/#website" });
    expect(schema["@id"]).toBe(`${canonical}#webpage`);
    expect(schemaIds.has(schema["@id"])).toBe(false);
    schemaIds.add(schema["@id"]);
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

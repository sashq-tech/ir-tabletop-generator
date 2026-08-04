const { test, expect } = require("@playwright/test");

const interactiveUrl =
  "/?path=interactive&type=phishing&org=smallBusiness&audience=mixed&focus=balanced&duration=60&difficulty=standard&gm=whole&seed=246810&rehearsal=phishing-bec";

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

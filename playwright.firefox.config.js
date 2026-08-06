const { defineConfig } = require("@playwright/test");
const os = require("node:os");
const path = require("node:path");
const base = require("./playwright.config");

module.exports = defineConfig({
  ...base,
  outputDir: path.join(os.tmpdir(), "response-rehearsal-playwright-firefox"),
  use: {
    ...base.use,
    browserName: "firefox",
    channel: undefined
  },
  projects: [
    {
      name: "desktop-firefox",
      use: {
        browserName: "firefox",
        viewport: { width: 1440, height: 1000 }
      }
    },
    {
      name: "mobile-firefox",
      use: {
        browserName: "firefox",
        viewport: { width: 390, height: 844 },
        hasTouch: true
      }
    }
  ]
});

const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./qa",
  testMatch: "workspace-regression.spec.js",
  timeout: 45000,
  expect: { timeout: 8000 },
  fullyParallel: false,
  workers: 1,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:4195",
    browserName: "chromium",
    channel: "chrome",
    trace: "retain-on-failure"
  },
  webServer: {
    command: "node qa/static-server.mjs",
    url: "http://127.0.0.1:4195/",
    reuseExistingServer: true,
    timeout: 15000
  },
  projects: [
    {
      name: "desktop-chrome",
      use: { viewport: { width: 1440, height: 1000 } }
    },
    {
      name: "mobile-chrome",
      use: {
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true
      }
    }
  ]
});

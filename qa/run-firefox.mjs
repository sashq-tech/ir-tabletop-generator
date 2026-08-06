import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { firefox } = require("@playwright/test");
const executable = firefox.executablePath();

if (!existsSync(executable)) {
  console.log(`Firefox compatibility checks skipped: Playwright Firefox is not installed at ${executable}`);
  process.exit(0);
}

const cli = require.resolve("@playwright/test/cli");
const result = spawnSync(process.execPath, [cli, "test", "--config=playwright.firefox.config.js"], {
  env: process.env,
  stdio: "inherit"
});

process.exit(result.status ?? 1);

import { chromium } from "playwright";
import fs from "node:fs";

const character = JSON.parse(fs.readFileSync("characters/CALIPER.mage.json", "utf8"));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });

await page.goto("https://edwardcarpenter10.github.io/mage-character-forge/", {
  waitUntil: "networkidle",
  timeout: 60000
});

await page.evaluate((data) => {
  localStorage.setItem("mage-character-forge-v3", JSON.stringify(data));
  localStorage.removeItem("mage-character-forge-v2");
  localStorage.removeItem("mage-character-forge-v1");
}, character);

await page.reload({ waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

const renderedName = (await page.locator(".print-sheet h1").innerText()).trim();
if (!renderedName.includes("Gabriel Navarro")) {
  throw new Error(`Forge did not restore CALIPER data; printable name was: ${renderedName}`);
}

await page.pdf({
  path: "CALIPER-M20-Technocrat.pdf",
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: true
});

const stats = fs.statSync("CALIPER-M20-Technocrat.pdf");
if (stats.size < 10000) throw new Error("Generated PDF is unexpectedly small.");
console.log(`Rendered ${renderedName} through the live Forge (${stats.size} bytes).`);

await browser.close();

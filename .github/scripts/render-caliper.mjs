import { chromium } from "playwright";
import fs from "node:fs";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

await page.goto("https://edwardcarpenter10.github.io/mage-character-forge/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1200);

const fileInputs = page.locator('input[type="file"]');
const count = await fileInputs.count();
console.log(`File inputs found: ${count}`);
if (!count) throw new Error('No file input found for Forge import');

await fileInputs.first().setInputFiles("characters/CALIPER.mage.json");
await page.waitForTimeout(1800);

const printText = await page.locator(".print-sheet").innerText();
for (const expected of [
  "Gabriel Navarro",
  "Posthuman Systems Architect",
  "Remote Systems Override",
  "Predictive Combat Architecture",
  "Primal Systems Interface",
  "Familiar",
  "Built-in Devices: 6 points",
  "Online Access",
  "Skeletal Enhancement",
  "Subdermal Armor"
]) {
  if (!printText.includes(expected)) throw new Error(`Missing expected content after live import: ${expected}`);
}
if (printText.includes("Contacts●")) throw new Error("Contacts still present on printed sheet");
if (printText.includes("Perception +1 · Intelligence +1")) throw new Error("Old trait-based Enhancement allocation still present");

await page.pdf({path:"CALIPER-M20-Technocrat.pdf",format:"Letter",printBackground:true,preferCSSPageSize:true});
const stats=fs.statSync("CALIPER-M20-Technocrat.pdf");
if(stats.size<10000) throw new Error("Generated PDF is unexpectedly small");
console.log(`Rendered revised CALIPER through live Forge import (${stats.size} bytes).`);
await browser.close();

import { chromium } from "playwright";
import fs from "node:fs";

const character = JSON.parse(fs.readFileSync("characters/CALIPER.mage.json", "utf8"));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

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
await page.waitForTimeout(1800);

const printText = await page.locator(".print-sheet").innerText();
const bodyText = await page.locator("body").innerText();

for (const expected of [
  "Gabriel Navarro",
  "Posthuman Systems Architect",
  "Data",
  "Time",
  "Matter",
  "Prime",
  "Faulty Enhancements",
  "Eidetic Memory"
]) {
  if (!printText.includes(expected)) {
    throw new Error(`Live Forge print sheet is missing expected content: ${expected}`);
  }
}

const audit = bodyText
  .split(/\n+/)
  .map((line) => line.trim())
  .filter(Boolean)
  .filter((line) => /freebie|flaw|spent|remaining|overspent|invalid|warning|error|experience|xp/i.test(line));

console.log("=== FORGE LEDGER / VALIDATION LINES ===");
for (const line of audit.slice(0, 120)) console.log(line);
console.log("=== END FORGE LEDGER / VALIDATION LINES ===");

await page.pdf({
  path: "CALIPER-M20-Technocrat.pdf",
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: true
});

const stats = fs.statSync("CALIPER-M20-Technocrat.pdf");
if (stats.size < 10000) throw new Error("Generated PDF is unexpectedly small.");
console.log(`Rendered final CALIPER through the live hosted Forge (${stats.size} bytes).`);

await browser.close();

import { chromium } from "playwright";
import fs from "node:fs";

const character = JSON.parse(fs.readFileSync("characters/CALIPER.mage.json", "utf8"));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

await page.goto("https://edwardcarpenter10.github.io/mage-character-forge/", { waitUntil: "networkidle", timeout: 60000 });
await page.evaluate((data) => {
  localStorage.setItem("mage-character-forge-v3", JSON.stringify(data));
  localStorage.removeItem("mage-character-forge-v2");
  localStorage.removeItem("mage-character-forge-v1");
}, character);
await page.reload({ waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1800);

const printText = await page.locator(".print-sheet").innerText();
for (const expected of ["Gabriel Navarro","Posthuman Systems Architect","Remote Systems Override","Predictive Combat Architecture","Primal Systems Interface","Genius"]){
  if (!printText.includes(expected)) throw new Error(`Missing expected content: ${expected}`);
}
if (printText.includes("Contacts●")) throw new Error("Contacts still present on printed sheet");

await page.pdf({path:"CALIPER-M20-Technocrat.pdf",format:"Letter",printBackground:true,preferCSSPageSize:true});
const stats=fs.statSync("CALIPER-M20-Technocrat.pdf");
if(stats.size<10000) throw new Error("Generated PDF is unexpectedly small");
console.log(`Rendered updated CALIPER through live Forge (${stats.size} bytes).`);
await browser.close();

import { chromium } from "playwright";
import fs from "node:fs";

const character = JSON.parse(fs.readFileSync("characters/CALIPER.mage.json", "utf8"));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });

await page.goto("https://edwardcarpenter10.github.io/mage-character-forge/", {
  waitUntil: "networkidle",
  timeout: 60000
});

const discovery = await page.evaluate(() => {
  const body = document.body.innerText.split(/\n+/).map(s => s.trim()).filter(Boolean);
  const lines = body.filter(s => /data|correspondence|variant|technocrat/i.test(s));
  const selects = [...document.querySelectorAll('select')].map((el, i) => ({
    i,
    name: el.getAttribute('name'),
    id: el.id,
    value: el.value,
    options: [...el.options].map(o => o.textContent.trim()).filter(t => /data|correspondence|technocrat/i.test(t)),
    context: (el.parentElement?.innerText || '').replace(/\s+/g,' ').slice(0,260)
  })).filter(x => x.options.length || /data|correspondence|technocrat/i.test(x.context));
  return { lines: lines.slice(0,120), selects };
});
console.log('=== DATA/CORRESPONDENCE UI DISCOVERY ===');
console.log(JSON.stringify(discovery, null, 2));
console.log('=== END UI DISCOVERY ===');

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

const sphereLines = printText.split(/\n+/).map(s=>s.trim()).filter(Boolean);
const sphereStart = sphereLines.findIndex(s => s === 'Spheres');
console.log('=== PRINTED SPHERE SECTION ===');
console.log(sphereLines.slice(Math.max(0,sphereStart), sphereStart + 20).join('\n'));
console.log('=== END PRINTED SPHERE SECTION ===');

const audit = bodyText
  .split(/\n+/)
  .map((line) => line.trim())
  .filter(Boolean)
  .filter((line) => /freebie|flaw|spent|remaining|overspent|invalid|warning|error|experience|xp/i.test(line));

console.log("=== FORGE LEDGER / VALIDATION LINES ===");
for (const line of audit.slice(0, 160)) console.log(line);
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

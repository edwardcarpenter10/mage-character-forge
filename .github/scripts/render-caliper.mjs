import { chromium } from "playwright";
import fs from "node:fs";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
await page.goto("https://edwardcarpenter10.github.io/mage-character-forge/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1200);

const fileInputs = page.locator('input[type="file"]');
console.log(`File inputs found: ${await fileInputs.count()}`);
await fileInputs.first().setInputFiles("characters/CALIPER.mage.json");
await page.waitForTimeout(2200);

const printText = await page.locator(".print-sheet").innerText();
const stored = await page.evaluate(() => {
  const out = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    out[k] = localStorage.getItem(k);
  }
  return out;
});
console.log("=== STORAGE KEYS ===");
console.log(Object.keys(stored));
for (const [k,v] of Object.entries(stored)) {
  if (/mage|forge/i.test(k)) {
    try {
      const x = JSON.parse(v);
      console.log(k, JSON.stringify({name:x?.identity?.name, rotes:x?.rotes, backgrounds:x?.backgrounds, enhancementForm:x?.enhancementForm, enhancementDeviceDots:x?.enhancementDeviceDots, enhancementNotes:x?.enhancementNotes}, null, 2));
    } catch { console.log(k, String(v).slice(0,1000)); }
  }
}
console.log("=== PRINT CHECK ===");
for (const s of ["Gabriel Navarro","Remote Systems Override","Predictive Combat Architecture","Primal Systems Interface","Familiar","Built-in Devices: 6 points","Online Access","Skeletal Enhancement","Subdermal Armor"]) console.log(`${s}: ${printText.includes(s)}`);
console.log(printText.slice(-5000));

await page.pdf({path:"CALIPER-M20-Technocrat.pdf",format:"Letter",printBackground:true,preferCSSPageSize:true});
console.log(`PDF bytes: ${fs.statSync("CALIPER-M20-Technocrat.pdf").size}`);
await browser.close();

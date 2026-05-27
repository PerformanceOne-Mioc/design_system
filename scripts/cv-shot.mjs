import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const out   = join(__dir, '..', 'showcase');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox','--disable-setuid-sandbox','--force-color-profile=srgb'],
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
await page.goto('http://localhost:3900/lebenslauf.html', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1800));

await page.screenshot({ path: join(out, 'cv-screen.png'), type: 'png', fullPage: false });
await page.screenshot({ path: join(out, 'cv-full.png'),   type: 'png', fullPage: true  });

await browser.close();
console.log('done');

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const out = join(__dir, '..', 'showcase');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-color-profile=srgb'],
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
await page.goto('http://localhost:3900/', { waitUntil: 'networkidle0' });

// wait for fonts + blobs
await new Promise(r => setTimeout(r, 1200));

const sections = [
  { id: null,         file: '01-hero.png' },
  { id: 'brand',      file: '02-brand.png' },
  { id: 'colors',     file: '03-colors.png' },
  { id: 'type',       file: '04-type.png' },
  { id: 'components', file: '05-components.png' },
  { id: 'data',       file: '06-data.png' },
  { id: 'forms',      file: '07-forms.png' },
  { id: 'motion',     file: '08-motion.png' },
  { id: 'layout',     file: '09-layout.png' },
  { id: 'states',     file: '10-states.png' },
  { id: 'principles', file: '11-principles.png' },
];

for (const { id, file } of sections) {
  if (id) {
    await page.evaluate(id => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, id);
    await new Promise(r => setTimeout(r, 300));
  } else {
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 300));
  }
  await page.screenshot({ path: join(out, file), type: 'png' });
  console.log('captured', file);
}

await browser.close();
console.log('done');

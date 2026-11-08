/**
 * Renders /resume from the built site to public/benjamin-davis-resume.pdf,
 * using the page's own print stylesheet. The PDF and the web resume are
 * therefore the same document and cannot drift apart.
 *
 * Run after `astro build`:  node scripts/build-resume-pdf.mjs
 * Then run `astro build` once more so the PDF is copied into dist/.
 */
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT   = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST   = join(ROOT, 'dist');
const OUTPUT = join(ROOT, 'public', 'benjamin-davis-resume.pdf');

const TYPES = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg',
  '.png': 'image/png', '.gif': 'image/gif', '.mp4': 'video/mp4',
  '.woff2': 'font/woff2', '.json': 'application/json',
};

const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    let file = join(DIST, p);
    try {
      if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    } catch {
      file = join(DIST, p, 'index.html');
    }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
});

await new Promise(r => server.listen(0, r));
const port = server.address().port;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`http://localhost:${port}/resume`, { waitUntil: 'networkidle' });
// Google Fonts are remote; give them a beat so the PDF isn't set in fallbacks.
await page.waitForTimeout(2500);
await page.emulateMedia({ media: 'print' });

await mkdir(dirname(OUTPUT), { recursive: true });
await page.pdf({
  path: OUTPUT,
  format: 'Letter',
  printBackground: true,
  margin: { top: '0.55in', bottom: '0.55in', left: '0.6in', right: '0.6in' },
});

await browser.close();
server.close();

const { size } = await stat(OUTPUT);
console.log(`resume PDF written: ${(size / 1024).toFixed(0)} KB → public/benjamin-davis-resume.pdf`);

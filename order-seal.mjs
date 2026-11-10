/* Seals the card viewer for the password-gated /order page.
 *
 *   node order-seal.mjs --password=...        (or set ORDER_PASSWORD)
 *
 * Reads private/BD-Solutions-Card-Viewer.html (kept out of git) and writes
 * public/order/card-viewer.enc — PBKDF2-SHA256 + AES-256-GCM, decrypted in the
 * browser by src/pages/order.astro. The blob is useless without the password,
 * so it is safe to publish; the password lives nowhere in the repo.
 *
 * Layout of the file: base64( salt[16] | iv[12] | ciphertext | tag[16] ).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT  = dirname(fileURLToPath(import.meta.url));
const ITER  = 310000;                                   // must match order.astro
const arg   = k => (process.argv.find(a => a.startsWith(`--${k}=`)) || '').split('=').slice(1).join('=');

const password = arg('password') || process.env.ORDER_PASSWORD || '';
const input    = resolve(ROOT, arg('in')  || 'private/BD-Solutions-Card-Viewer.html');
const output   = resolve(ROOT, arg('out') || 'public/order/card-viewer.enc');

if (!password) {
  console.error('No password. Pass --password=... or set ORDER_PASSWORD.');
  process.exit(1);
}

const html = readFileSync(input, 'utf8');
const salt = randomBytes(16);
const iv   = randomBytes(12);
const key  = pbkdf2Sync(password, salt, ITER, 32, 'sha256');
const c    = createCipheriv('aes-256-gcm', key, iv);
const ct   = Buffer.concat([c.update(html, 'utf8'), c.final()]);
const tag  = c.getAuthTag();

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, Buffer.concat([salt, iv, ct, tag]).toString('base64'));

console.log(`sealed ${(html.length / 1024).toFixed(0)} KB of viewer -> ${relative(ROOT, output)}`);

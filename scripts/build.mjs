import { cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
if (!host) {
  console.error('Informe SITE_URL ou execute na Vercel com VERCEL_PROJECT_PRODUCTION_URL disponível.');
  process.exit(1);
}
const url = new URL(host.startsWith('http') ? host : `https://${host}`);
if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
  throw new Error('SITE_URL deve ser apenas a origem HTTPS, por exemplo https://tonin.vercel.app');
}
const canonical = `${url.origin}/`;
mkdirSync('dist', { recursive: true });
cpSync('public', 'dist', { recursive: true, force: true });
for (const name of ['index.html', 'robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt']) {
  const path = join('dist', name);
  const contents = readFileSync(path, 'utf8').replaceAll('__SITE_URL__', canonical);
  writeFileSync(path, contents);
}
console.log(`Site gerado para ${canonical}`);

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const routes = [
  '/',
  '/creation-site-internet-tahiti',
  '/community-management-tahiti',
  '/creation-application-polynesie',
  '/automatisation-ia-tahiti',
  '/blog',
  '/blog/community-management-tahiti-pourquoi-confier-page-facebook',
  '/blog/creation-site-internet-tahiti-prix-conseils',
  '/blog/automatisation-ia-pme-polynesie',
  '/blog/google-business-profile-tahiti-visibilite',
  '/blog/avis-clients-polynesie-reputation-en-ligne',
  '/blog/reseaux-sociaux-ou-site-web-patente-tahiti',
  '/blog/instagram-entreprise-tahiti-guide-debutant',
  '/blog/strategie-digitale-petite-entreprise-polynesie',
  '/mentions-legales',
];

for (const url of routes) {
  const { html: appHtml, helmet } = render(url);

  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('\n    ');

  const finalHtml = template
    .replace('<!--app-html-->', appHtml)
    .replace('<!--head-tags-->', headTags);

  const dirPath = url === '/' ? 'dist' : `dist${url}`;
  fs.mkdirSync(toAbsolute(dirPath), { recursive: true });
  fs.writeFileSync(toAbsolute(`${dirPath}/index.html`), finalHtml);
  console.log('Pre-rendered:', `${dirPath}/index.html`);
}

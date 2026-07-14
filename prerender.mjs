import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render, blogArticles } = await import('./dist/server/entry-server.js');

const staticRoutes = [
  '/',
  '/creation-site-internet-tahiti',
  '/community-management-tahiti',
  '/creation-application-polynesie',
  '/automatisation-ia-tahiti',
  '/blog',
  '/mentions-legales',
];

const blogRoutes = blogArticles.map((a) => `/blog/${a.slug}`);

const routes = [...staticRoutes, ...blogRoutes];

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

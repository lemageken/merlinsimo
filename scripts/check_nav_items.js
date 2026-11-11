const fs = require('fs');
const path = require('path');
const siteDir = 'd:/ANTIGRAVITY/projets/site-genie/site';

function getNavLinks(p) {
  const c = fs.readFileSync(p, 'utf8');
  const m = c.match(/<nav[\s\S]*?<\/nav>/i);
  if (!m) return [];
  const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  const links = [];
  while ((match = regex.exec(m[0])) !== null) {
    links.push({ href: match[1], text: match[2].replace(/<[^>]+>/g, '').trim() });
  }
  return links;
}

console.log('index.html:', getNavLinks(path.join(siteDir, 'index.html')));
console.log('articles.html:', getNavLinks(path.join(siteDir, 'articles.html')));
console.log('intelligence-enfant.html:', getNavLinks(path.join(siteDir, 'intelligence-enfant.html')));
const articleFiles = fs.readdirSync(path.join(siteDir, 'articles')).filter(f => f.endsWith('.html'));
console.log('article 1:', getNavLinks(path.join(siteDir, 'articles', articleFiles[0])));

const fs = require('fs');
const path = require('path');
const siteDir = 'd:/ANTIGRAVITY/projets/site-genie/site';

const rootPages = fs.readdirSync(siteDir).filter(f => f.endsWith('.html'));
const artFiles = fs.readdirSync(path.join(siteDir, 'articles')).filter(f => f.endsWith('.html'));

const allFiles = rootPages.map(f => path.join(siteDir, f))
  .concat(artFiles.map(f => path.join(siteDir, 'articles', f)));

console.log(`Processing ${allFiles.length} HTML files...`);

let updated = 0;
allFiles.forEach(file => {
  let c = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Bump style.css?v=...
  if (c.includes('style.css')) {
    c = c.replace(/style\.css(\?v=[^"'\s>]+)?/g, 'style.css?v=16.0');
    changed = true;
  }

  // Bump main.js?v=...
  if (c.includes('main.js')) {
    c = c.replace(/main\.js(\?v=[^"'\s>]+)?/g, 'main.js?v=16.0');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, c, 'utf8');
    updated++;
  }
});

console.log(`Successfully updated cache-buster to v=16.0 in ${updated} HTML files!`);

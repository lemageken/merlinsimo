const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(siteDir);
console.log(`Processing ${htmlFiles.length} HTML files...`);

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Cache buster to v=7.0
  if (content.includes('style.css')) {
    const updated = content.replace(/style\.css(\?v=[0-9.]+)?/g, 'style.css?v=7.0');
    if (updated !== content) {
      content = updated;
      changed = true;
    }
  }

  // 2. Remove dark midnight-blue inline overrides on buttons
  if (content.includes('var(--midnight-blue)')) {
    content = content.replace(/style="[^"]*var\(--midnight-blue\)[^"]*"/g, '');
    changed = true;
  }

  // 3. For article pages in articles/, add sun badge to logo if missing
  if (filePath.includes(path.sep + 'articles' + path.sep)) {
    if (content.includes('<a href="../index.html" class="logo">Merlin <span>SIMO</span></a>')) {
      content = content.replace(
        '<a href="../index.html" class="logo">Merlin <span>SIMO</span></a>',
        '<a href="../index.html" class="logo"><span class="sun-badge">☀️</span> Merlin <span>SIMO</span></a>'
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${path.relative(siteDir, filePath)}`);
  }
});

console.log('All HTML files upgraded successfully!');

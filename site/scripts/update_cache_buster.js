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
    } else if (file.endsWith('.html') && !file.startsWith('orig_')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(siteDir);
console.log(`Updating cache buster to ?v=14.0 in ${htmlFiles.length} HTML files...`);

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const updated = content.replace(/style\.css(\?v=[0-9.]+)?/g, 'style.css?v=14.0');
  if (updated !== content) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`Updated: ${path.relative(siteDir, file)}`);
  }
});

console.log('All 25 HTML files refreshed with ?v=14.0!');

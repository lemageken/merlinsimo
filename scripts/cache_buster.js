const fs = require('fs');
const path = require('path');

const siteDir = 'd:/ANTIGRAVITY/projets/site-genie/site';

function getFiles(dir, exts = ['.html']) {
  let res = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      res = res.concat(getFiles(full, exts));
    } else if (exts.includes(path.extname(full))) {
      res.push(full);
    }
  }
  return res;
}

const htmlFiles = getFiles(siteDir);
let updated = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const replaced = content.replace(/(href="(?:\.\.\/)?css\/style\.css)(?:\?[^"]*)?(")/g, '$1?v=5.0$2');
  if (replaced !== content) {
    fs.writeFileSync(file, replaced, 'utf8');
    updated++;
  }
}

console.log(`Updated CSS cache-buster ?v=5.0 in ${updated} HTML files.`);

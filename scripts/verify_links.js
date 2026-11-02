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
let errors = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);

  const regex = /(?:href|src)="([^"#:]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const relPath = match[1];
    if (relPath.startsWith('http') || relPath.startsWith('mailto:') || relPath.startsWith('tel:') || relPath.startsWith('javascript:')) continue;
    
    const relClean = relPath.split('?')[0];
    const targetPath = path.resolve(dir, relClean);
    if (!fs.existsSync(targetPath)) {
      console.error(`Broken link in ${path.relative(siteDir, file)}: ${relPath} -> ${targetPath}`);
      errors++;
    }
  }
}

if (errors === 0) {
  console.log(`SUCCESS: All local links & assets (0 broken) verified successfully across ${htmlFiles.length} HTML files!`);
} else {
  console.log(`FAILURE: Found ${errors} broken local references.`);
}

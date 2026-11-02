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
let totalLinks = 0;
let brokenLinks = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const fileDir = path.dirname(file);
  const regex = /href="([^"#?]+)(#[^"]*)?(\?[^"]*)?"/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      totalLinks++;
      continue;
    }
    totalLinks++;
    const targetPath = path.resolve(fileDir, href);
    if (!fs.existsSync(targetPath)) {
      console.error(`Broken link in ${path.relative(siteDir, file)} -> ${href}`);
      brokenLinks++;
    }
  }
});

console.log(`Verification complete: ${totalLinks} total links checked. Broken links: ${brokenLinks}`);
if (brokenLinks === 0) {
  console.log('SUCCESS: All internal links are 100% valid!');
}

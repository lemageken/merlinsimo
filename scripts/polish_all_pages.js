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
console.log(`Polishing ${htmlFiles.length} HTML files...`);

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Cache-buster to ?v=9.0
  const updatedCss = content.replace(/style\.css(\?v=[0-9.]+)?/g, 'style.css?v=9.0');
  if (updatedCss !== content) {
    content = updatedCss;
    changed = true;
  }

  // 2. Add sun badge to logo if missing
  if (content.includes('class="header__logo">Merlin <span>SIMO</span></a>')) {
    content = content.replace(
      'class="header__logo">Merlin <span>SIMO</span></a>',
      'class="header__logo"><span class="sun-badge">☀️</span> Merlin <span>SIMO</span></a>'
    );
    changed = true;
  }
  if (content.includes('class="logo">Merlin <span>SIMO</span></a>')) {
    content = content.replace(
      'class="logo">Merlin <span>SIMO</span></a>',
      'class="logo"><span class="sun-badge">☀️</span> Merlin <span>SIMO</span></a>'
    );
    changed = true;
  }

  // 3. For index.html, wrap hero tagline in hero__tagline-wrapper if not wrapped
  if (file.endsWith('index.html')) {
    if (content.includes('<p class="hero__tagline">') && !content.includes('<div class="hero__tagline-wrapper">')) {
      content = content.replace(
        '<p class="hero__tagline">« La créativité n\'est pas un don. C\'est une pratique. »</p>',
        `<div class="hero__tagline-wrapper">
                <p class="hero__tagline">« La créativité n'est pas un don. C'est une pratique. »</p>
            </div>`
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${path.relative(siteDir, file)}`);
  }
});

console.log('All pages polished successfully!');

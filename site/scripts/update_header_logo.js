const fs = require('fs');
const path = require('path');

const rootDir = 'd:/ANTIGRAVITY/projets/site-genie/site';
const rootFiles = ['index.html', 'articles.html', 'boutique.html', 'a-propos.html', 'contact.html'];
const articlesDir = path.join(rootDir, 'articles');
const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));

let updated = 0;

for (const file of rootFiles) {
  const filePath = path.join(rootDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  // Match header__logo
  const regex = /<a\s+href="index\.html"\s+class="header__logo"[^>]*>[\s\S]*?<\/a>/i;
  const newHeaderLogo = `<a href="index.html" class="header__logo"><img src="images/logo-transparent.png" alt="Emblème Merlin SIMO — L'Atelier de l'Esprit" class="header__logo-img"> Merlin <span>SIMO</span></a>`;
  if (regex.test(html)) {
    html = html.replace(regex, newHeaderLogo);
    fs.writeFileSync(filePath, html, 'utf8');
    updated++;
  }
}

for (const file of articleFiles) {
  const filePath = path.join(articlesDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  const regex = /<a\s+href="\.\.\/index\.html"\s+class="header__logo"[^>]*>[\s\S]*?<\/a>/i;
  const newHeaderLogo = `<a href="../index.html" class="header__logo"><img src="../images/logo-transparent.png" alt="Emblème Merlin SIMO — L'Atelier de l'Esprit" class="header__logo-img"> Merlin <span>SIMO</span></a>`;
  if (regex.test(html)) {
    html = html.replace(regex, newHeaderLogo);
    fs.writeFileSync(filePath, html, 'utf8');
    updated++;
  }
}

console.log(`Successfully updated header logo in ${updated} files.`);

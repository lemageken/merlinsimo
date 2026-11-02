const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site');

// Mapping of 20 articles with staggered dates between August and October 2026
const schedule = [
  {
    file: 'retrouver-creativite-bloque.html',
    iso: '2026-10-28',
    short: '28 oct. 2026',
    long: '28 octobre 2026'
  },
  {
    file: 'produire-idees-sans-inspiration.html',
    iso: '2026-10-24',
    short: '24 oct. 2026',
    long: '24 octobre 2026'
  },
  {
    file: 'habitudes-esprits-creatifs.html',
    iso: '2026-10-20',
    short: '20 oct. 2026',
    long: '20 octobre 2026'
  },
  {
    file: 'apprendre-plus-vite-retenir.html',
    iso: '2026-10-16',
    short: '16 oct. 2026',
    long: '16 octobre 2026'
  },
  {
    file: 'curiosite-projet-concret.html',
    iso: '2026-10-12',
    short: '12 oct. 2026',
    long: '12 octobre 2026'
  },
  {
    file: 'penser-autrement-exercices.html',
    iso: '2026-10-08',
    short: '08 oct. 2026',
    long: '8 octobre 2026'
  },
  {
    file: 'prise-notes-creation-reflexion.html',
    iso: '2026-10-04',
    short: '04 oct. 2026',
    long: '4 octobre 2026'
  },
  {
    file: 'developper-attention-distractions.html',
    iso: '2026-09-29',
    short: '29 sept. 2026',
    long: '29 septembre 2026'
  },
  {
    file: 'routine-reflexion-personnelle.html',
    iso: '2026-09-25',
    short: '25 sept. 2026',
    long: '25 septembre 2026'
  },
  {
    file: 'echec-matiere-premiere-innovation.html',
    iso: '2026-09-21',
    short: '21 sept. 2026',
    long: '21 septembre 2026'
  },
  {
    file: 'inspirer-grands-createurs.html',
    iso: '2026-09-17',
    short: '17 sept. 2026',
    long: '17 septembre 2026'
  },
  {
    file: 'idee-premiere-version-imparfaite.html',
    iso: '2026-09-13',
    short: '13 sept. 2026',
    long: '13 septembre 2026'
  },
  {
    file: 'questions-puissantes-debloquer.html',
    iso: '2026-09-09',
    short: '09 sept. 2026',
    long: '9 septembre 2026'
  },
  {
    file: 'esprit-critique-imagination.html',
    iso: '2026-09-05',
    short: '05 sept. 2026',
    long: '5 septembre 2026'
  },
  {
    file: 'ennui-silence-marche-idees.html',
    iso: '2026-08-31',
    short: '31 août 2026',
    long: '31 août 2026'
  },
  {
    file: 'identite-creative-assumer-style.html',
    iso: '2026-08-26',
    short: '26 août 2026',
    long: '26 août 2026'
  },
  {
    file: 'techniques-visualisation-projet.html',
    iso: '2026-08-21',
    short: '21 août 2026',
    long: '21 août 2026'
  },
  {
    file: 'observer-quotidien-regard-neuf.html',
    iso: '2026-08-16',
    short: '16 août 2026',
    long: '16 août 2026'
  },
  {
    file: 'connexions-inattendues-domaines.html',
    iso: '2026-08-11',
    short: '11 août 2026',
    long: '11 août 2026'
  },
  {
    file: 'vie-creative-plutot-attendre-talent.html',
    iso: '2026-08-05',
    short: '05 août 2026',
    long: '5 août 2026'
  }
];

// Helper to update card date in a file
function updateCardDate(content, filename, newIso, newDisplay) {
  // Finds card containing href="articles/filename" or href="filename"
  // and updates its <time datetime="...">...</time>
  const escaped = filename.replace('.', '\\.');
  const regex = new RegExp(`(<article class="card"[^>]*>[\\s\\S]*?<a href="(?:articles\\/)?${escaped}"[\\s\\S]*?<time datetime=")[^"]+(">[^<]+<\\/time>)`, 'm');
  if (regex.test(content)) {
    return content.replace(regex, `$1${newIso}">` + newDisplay + `</time>`);
  }
  return content;
}

// 1. Update articles.html
console.log('1. Updating articles.html...');
let articlesContent = fs.readFileSync(path.join(siteDir, 'articles.html'), 'utf8');
schedule.forEach(item => {
  articlesContent = updateCardDate(articlesContent, item.file, item.iso, item.short);
});
fs.writeFileSync(path.join(siteDir, 'articles.html'), articlesContent, 'utf8');

// 2. Update index.html
console.log('2. Updating index.html...');
let indexContent = fs.readFileSync(path.join(siteDir, 'index.html'), 'utf8');
schedule.forEach(item => {
  indexContent = updateCardDate(indexContent, item.file, item.iso, item.short);
});
fs.writeFileSync(path.join(siteDir, 'index.html'), indexContent, 'utf8');

// 3. Update each individual article file
console.log('3. Updating 20 individual article files in articles/...');
schedule.forEach(item => {
  const filePath = path.join(siteDir, 'articles', item.file);
  if (fs.existsSync(filePath)) {
    let artContent = fs.readFileSync(filePath, 'utf8');
    // Replace <time datetime="..." ...>...</time>
    artContent = artContent.replace(/<time datetime="[^"]+"([^>]*)>[^<]+<\/time>/, `<time datetime="${item.iso}"$1>${item.long}</time>`);
    fs.writeFileSync(filePath, artContent, 'utf8');
    console.log(`Updated article: ${item.file} -> ${item.iso} (${item.long})`);
  }
});

// 4. Update copyright year to 2026 across all HTML files
console.log('4. Updating copyright year to 2026 across all files...');
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

const allHtml = getAllHtmlFiles(siteDir);
allHtml.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('© 2024')) {
    c = c.replace(/©\s*2024/g, '© 2026');
    fs.writeFileSync(f, c, 'utf8');
    console.log(`Copyright updated in: ${path.relative(siteDir, f)}`);
  }
});

console.log('All publication dates successfully staggered between August and October 2026!');

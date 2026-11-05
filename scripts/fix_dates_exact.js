const fs = require('fs');
const path = require('path');

const siteDir = 'd:/ANTIGRAVITY/projets/site-genie/site';
const articlesDir = path.join(siteDir, 'articles');

const dateMap = {
  'votre-enfant-est-il-moins-intelligent-potentiel.html': '27 Octobre 2026',
  'pourquoi-enfants-apprennent-differemment-rythmes.html': '28 Octobre 2026',
  'donner-gout-lecture-enfant-sans-forcer.html': '29 Octobre 2026',
  'memoire-enfant-10-jeux-simples-retenir-lecons.html': '30 Octobre 2026',
  'developper-logique-mathematique-enfant-maison.html': '31 Octobre 2026',
  'enfant-pose-trop-de-questions-intelligence-a-encourager.html': '01 Novembre 2026',
  'telephone-television-jeux-video-proteger-concentration-enfant.html': '02 Novembre 2026',
  '15-minutes-par-jour-changer-maniere-dont-enfant-apprend.html': '03 Novembre 2026',
  'notes-baissent-reagir-sans-crier-decourager-enfant.html': '04 Novembre 2026',
  'preparer-enfant-reussir-dans-le-monde-de-demain.html': '05 Novembre 2026'
};

// 1. Update articles
Object.entries(dateMap).forEach(([file, displayDate]) => {
  const p = path.join(articlesDir, file);
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, 'utf8');
  // Match any time tag containing fa-calendar-alt
  html = html.replace(/<time[^>]*>[\s\S]*?<i class="far fa-calendar-alt"><\/i>\s*[^<]+<\/time>/gi, (match) => {
    return match.replace(/<i class="far fa-calendar-alt"><\/i>\s*[^<]+/, `<i class="far fa-calendar-alt"></i> ${displayDate}`);
  });
  fs.writeFileSync(p, html, 'utf8');
  console.log(`Updated article ${file} -> ${displayDate}`);
});

// 2. Update intelligence-enfant.html
const hubPath = path.join(siteDir, 'intelligence-enfant.html');
let hub = fs.readFileSync(hubPath, 'utf8');

// Replace in cards
Object.entries(dateMap).forEach(([file, displayDate]) => {
  const slug = file.replace('.html', '');
  // Match the card container for this article
  const cardRegex = new RegExp(`(<article[^>]*data-title="[^"]*"[\\s\\S]*?href="articles\\/${slug}\\.html"[\\s\\S]*?<i class="far fa-calendar-alt"><\\/i>\\s*)([^<]+)`, 'gi');
  hub = hub.replace(cardRegex, `$1${displayDate}`);
});

// Fallback replacement of any remaining old date strings next to fa-calendar-alt in the hub
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)(?:5|05)\s+novembre\s+2026/gi, '$105 Novembre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)(?:4|04)\s+novembre\s+2026/gi, '$104 Novembre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)(?:2|02)\s+novembre\s+2026/gi, '$102 Novembre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)18\s+octobre\s+2026/gi, '$127 Octobre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)20\s+octobre\s+2026/gi, '$128 Octobre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)22\s+octobre\s+2026/gi, '$129 Octobre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)25\s+octobre\s+2026/gi, '$130 Octobre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)27\s+octobre\s+2026/gi, '$131 Octobre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)29\s+octobre\s+2026/gi, '$101 Novembre 2026');
hub = hub.replace(/(<i class="far fa-calendar-alt"><\/i>\s*)31\s+octobre\s+2026/gi, '$102 Novembre 2026');

fs.writeFileSync(hubPath, hub, 'utf8');
console.log('intelligence-enfant.html dates completely updated');

// Check Article 10 in articlesDir
const art10 = fs.readFileSync(path.join(articlesDir, 'preparer-enfant-reussir-dans-le-monde-de-demain.html'), 'utf8');
console.log('Article 10 contains "05 Novembre 2026":', art10.includes('05 Novembre 2026'));

// Check hub
console.log('Hub contains "05 Novembre 2026":', hub.includes('05 Novembre 2026'));

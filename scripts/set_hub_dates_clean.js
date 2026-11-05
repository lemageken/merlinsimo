const fs = require('fs');

const hubPath = 'd:/ANTIGRAVITY/projets/site-genie/site/intelligence-enfant.html';
let content = fs.readFileSync(hubPath, 'utf8');

const map = [
  { slug: 'votre-enfant-est-il-moins-intelligent-potentiel', date: '27 Octobre 2026' },
  { slug: 'pourquoi-enfants-apprennent-differemment-rythmes', date: '28 Octobre 2026' },
  { slug: 'donner-gout-lecture-enfant-sans-forcer', date: '29 Octobre 2026' },
  { slug: 'memoire-enfant-10-jeux-simples-retenir-lecons', date: '30 Octobre 2026' },
  { slug: 'developper-logique-mathematique-enfant-maison', date: '31 Octobre 2026' },
  { slug: 'enfant-pose-trop-de-questions-intelligence-a-encourager', date: '01 Novembre 2026' },
  { slug: 'telephone-television-jeux-video-proteger-concentration-enfant', date: '02 Novembre 2026' },
  { slug: '15-minutes-par-jour-changer-maniere-dont-enfant-apprend', date: '03 Novembre 2026' },
  { slug: 'notes-baissent-reagir-sans-crier-decourager-enfant', date: '04 Novembre 2026' },
  { slug: 'preparer-enfant-reussir-dans-le-monde-de-demain', date: '05 Novembre 2026' }
];

const articles = content.split('<article class="article-card-enfant"');
console.log('Found articles:', articles.length - 1);

for (let i = 1; i < articles.length; i++) {
  let block = articles[i];
  for (const item of map) {
    if (block.includes(item.slug)) {
      block = block.replace(/<i class="far fa-calendar-alt"><\/i>\s*[^<]+/i, `<i class="far fa-calendar-alt"></i> ${item.date}`);
      console.log(`Matched article ${i} (${item.slug}) -> ${item.date}`);
      break;
    }
  }
  articles[i] = block;
}

content = articles.join('<article class="article-card-enfant"');
fs.writeFileSync(hubPath, content, 'utf8');

console.log('Done! Has 05 Novembre 2026:', content.includes('05 Novembre 2026'));
console.log('Has 27 Octobre 2026:', content.includes('27 Octobre 2026'));

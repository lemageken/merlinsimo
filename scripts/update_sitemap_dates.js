const fs = require('fs');
const path = require('path');

const sitemapPath = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site/sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

const dateMap = [
  { slug: 'votre-enfant-est-il-moins-intelligent-potentiel', date: '2026-10-18' },
  { slug: 'pourquoi-enfants-apprennent-differemment-rythmes', date: '2026-10-20' },
  { slug: 'donner-gout-lecture-enfant-sans-forcer', date: '2026-10-22' },
  { slug: 'memoire-enfant-10-jeux-simples-retenir-lecons', date: '2026-10-25' },
  { slug: 'developper-logique-mathematique-enfant-maison', date: '2026-10-27' },
  { slug: 'enfant-pose-trop-de-questions-intelligence-a-encourager', date: '2026-10-29' },
  { slug: 'telephone-television-jeux-video-proteger-concentration-enfant', date: '2026-10-31' },
  { slug: '15-minutes-par-jour-changer-maniere-dont-enfant-apprend', date: '2026-11-02' },
  { slug: 'notes-baissent-reagir-sans-crier-decourager-enfant', date: '2026-11-04' },
  { slug: 'preparer-enfant-reussir-dans-le-monde-de-demain', date: '2026-11-05' }
];

dateMap.forEach(item => {
  const re = new RegExp(`(<loc>https:\\/\\/merlinsimo\\.netlify\\.app\\/articles\\/${item.slug}\\.html<\\/loc>\\s*<lastmod>)[^<]+(<\\/lastmod>)`, 'g');
  content = content.replace(re, `$1${item.date}$2`);
});

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log('sitemap.xml updated with calibrated dates.');

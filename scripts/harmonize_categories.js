const fs = require('fs');

const path = 'd:/ANTIGRAVITY/projets/site-genie/site/articles.html';
let html = fs.readFileSync(path, 'utf8');

const categoryClasses = {
  'creativite': 'card__category--orange',
  'apprentissage': 'card__category--gold',
  'action': 'card__category--green',
  'critique': 'card__category--purple',
  'innovation': 'card__category--rose'
};

html = html.replace(/<article class="card" data-category="([^"]+)">\s*<div class="card__body">\s*<span class="card__category[^"]*">([^<]+)<\/span>/g, (match, cat, label) => {
  const cls = categoryClasses[cat] || '';
  return `<article class="card" data-category="${cat}">\n                        <div class="card__body">\n                            <span class="card__category ${cls}">${label}</span>`;
});

fs.writeFileSync(path, html, 'utf8');
console.log('Updated categories in articles.html');

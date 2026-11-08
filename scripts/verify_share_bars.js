const fs = require('fs');
const path = require('path');

const dir = 'd:/ANTIGRAVITY/projets/site-genie/site/articles';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

console.log(`Checking ${files.length} article files...`);

let issues = 0;
files.forEach(f => {
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  const checks = [
    { name: 'article-share-bar', pass: c.includes('article-share-bar') },
    { name: 'whatsapp', pass: c.includes('btn-share--whatsapp') },
    { name: 'facebook', pass: c.includes('btn-share--facebook') },
    { name: 'linkedin', pass: c.includes('btn-share--linkedin') },
    { name: 'x', pass: c.includes('btn-share--x') },
    { name: 'telegram', pass: c.includes('btn-share--telegram') },
    { name: 'copy', pass: c.includes('btn-share--copy') },
    { name: 'main.js', pass: c.includes('main.js') }
  ];

  const failed = checks.filter(ch => !ch.pass);
  if (failed.length > 0) {
    issues++;
    console.error(`FAIL [${f}]: missing ${failed.map(ch => ch.name).join(', ')}`);
  }
});

if (issues === 0) {
  console.log(`PERFECT: 100% of the ${files.length} articles have full social sharing bars with WhatsApp, Facebook, LinkedIn, X, Telegram, and Copier le lien!`);
} else {
  console.error(`Total issues found: ${issues}`);
}

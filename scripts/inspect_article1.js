const fs = require('fs');
const c = fs.readFileSync('d:/ANTIGRAVITY/projets/site-genie/site/articles/votre-enfant-est-il-moins-intelligent-potentiel.html', 'utf8');

const r = /<img[^>]+src=["']([^"']+)["']/gi;
let m;
while ((m = r.exec(c)) !== null) {
  console.log('Article 1 IMG:', m[1]);
}

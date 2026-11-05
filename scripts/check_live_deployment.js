const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url + '?_t=' + Date.now(), { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function verify() {
  console.log('--- Verifying Netlify Live Deployment ---');
  
  const home = await fetch('https://merlinsimo.netlify.app/index.html');
  console.log('Homepage status:', home.status);
  console.log('Homepage has Child Intelligence Showcase:', home.body.includes('Dossier Majeur') && home.body.includes('Développement de l\'Intelligence de l\'Enfant'));
  
  const hub = await fetch('https://merlinsimo.netlify.app/intelligence-enfant.html');
  console.log('\nHub intelligence-enfant status:', hub.status);
  console.log('Hub has "05 Novembre 2026":', hub.body.includes('05 Novembre 2026'));
  console.log('Hub has "Nouvelle Rubrique":', hub.body.includes('Nouvelle Rubrique'));
  console.log('Hub has cache-buster ?v=20261105b:', hub.body.includes('?v=20261105b'));

  const art1 = await fetch('https://merlinsimo.netlify.app/articles/votre-enfant-est-il-moins-intelligent-potentiel.html');
  console.log('\nArticle 1 status:', art1.status);
  console.log('Article 1 has date 27 Octobre 2026:', art1.body.includes('27 Octobre 2026'));
  console.log('Article 1 has African image with cache buster:', art1.body.includes('developper-potentiel-enfant.jpg?v=20261105b'));

  const art10 = await fetch('https://merlinsimo.netlify.app/articles/preparer-enfant-reussir-dans-le-monde-de-demain.html');
  console.log('\nArticle 10 status:', art10.status);
  console.log('Article 10 has date 05 Novembre 2026:', art10.body.includes('05 Novembre 2026'));
}

verify().catch(console.error);

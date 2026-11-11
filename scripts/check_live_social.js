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

async function main() {
  console.log('--- Testing live Netlify deployment for Social Share buttons ---');
  
  // Test adult article
  const res1 = await fetch('https://merlinsimo.netlify.app/articles/retrouver-creativite-bloque.html');
  console.log('Adult article status:', res1.status);
  console.log('Has WhatsApp button:', res1.body.includes('btn-share--whatsapp'));
  console.log('Has Facebook button:', res1.body.includes('btn-share--facebook'));
  console.log('Has LinkedIn button:', res1.body.includes('btn-share--linkedin'));
  console.log('Has X button:', res1.body.includes('btn-share--x'));
  console.log('Has Telegram button:', res1.body.includes('btn-share--telegram'));
  console.log('Has Copier le lien button:', res1.body.includes('btn-share--copy'));
  console.log('Has Sidebar share widget:', res1.body.includes('sidebar-share-buttons'));

  // Test child article
  const res2 = await fetch('https://merlinsimo.netlify.app/articles/votre-enfant-est-il-moins-intelligent-potentiel.html');
  console.log('\nChild article status:', res2.status);
  console.log('Has WhatsApp button:', res2.body.includes('btn-share--whatsapp'));
  console.log('Has Facebook button:', res2.body.includes('btn-share--facebook'));
  console.log('Has LinkedIn button:', res2.body.includes('btn-share--linkedin'));
  console.log('Has Telegram button:', res2.body.includes('btn-share--telegram'));
  console.log('Has Copier le lien button:', res2.body.includes('btn-share--copy'));

  // Test articles hub
  const res3 = await fetch('https://merlinsimo.netlify.app/articles.html');
  console.log('\nArticles hub status:', res3.status);
  console.log('Has Share Section:', res3.body.includes('Articles Index Social Sharing Section'));
}

main().catch(console.error);

const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function main() {
  console.log('=== Checking Netlify Live Site ===');
  const res = await fetch('https://merlinsimo.netlify.app/intelligence-enfant');
  console.log('Status:', res.status);
  console.log('Etag:', res.headers.etag);
  console.log('Date:', res.headers.date);
  
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let m;
  const imgs = [];
  while ((m = regex.exec(res.body)) !== null) {
    imgs.push(m[1]);
  }
  console.log('Found', imgs.length, 'images:');
  imgs.forEach(img => console.log(' - ' + img));

  // Check individual article pages
  const articleRes = await fetch('https://merlinsimo.netlify.app/articles/votre-enfant-est-il-moins-intelligent-potentiel.html');
  console.log('\n=== Article 1 ===');
  console.log('Status:', articleRes.status);
  const m1 = articleRes.body.match(/<time[^>]*>(.*?)<\/time>/i);
  console.log('Date in article 1:', m1 ? m1[1] : 'not found');
  const img1 = articleRes.body.match(/<img[^>]+src=["']([^"']+)["']/i);
  console.log('Image in article 1:', img1 ? img1[1] : 'not found');

  // Check article 10 (most recent)
  const article10 = await fetch('https://merlinsimo.netlify.app/articles/preparer-enfant-reussir-dans-le-monde-de-demain.html');
  console.log('\n=== Article 10 ===');
  console.log('Status:', article10.status);
  const m10 = article10.body.match(/<time[^>]*>(.*?)<\/time>/i);
  console.log('Date in article 10:', m10 ? m10[1] : 'not found');
  const img10 = article10.body.match(/<img[^>]+src=["']([^"']+)["']/i);
  console.log('Image in article 10:', img10 ? img10[1] : 'not found');

  // Check if cache-control causes browser caching
  console.log('\n=== Cache-Control Headers ===');
  console.log('intelligence-enfant Cache-Control:', res.headers['cache-control']);
  
  // Test if image files are accessible and return 200
  for (const img of imgs.slice(0, 4)) {
    const fullUrl = img.startsWith('http') ? img : 'https://merlinsimo.netlify.app' + (img.startsWith('/') ? '' : '/') + img;
    const r = await fetch(fullUrl);
    console.log('Image', img, 'Status:', r.status, 'Content-Length:', r.headers['content-length'], 'Cache-Control:', r.headers['cache-control']);
  }
}

main().catch(console.error);

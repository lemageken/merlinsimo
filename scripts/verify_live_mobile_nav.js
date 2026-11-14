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
  console.log('--- Verifying Netlify Live Deployment for Mobile Nav ---');

  // 1. Check style.css
  const cssRes = await fetch('https://merlinsimo.netlify.app/css/style.css');
  console.log('style.css status:', cssRes.status);
  console.log('style.css has 100dvh:', cssRes.body.includes('100dvh'));
  console.log('style.css has overflow-y auto:', cssRes.body.includes('overflow-y: auto'));
  console.log('style.css has chevrons (›):', cssRes.body.includes("content: '›'"));
  console.log('style.css has nav__mobile-whatsapp:', cssRes.body.includes('nav__mobile-whatsapp'));

  // 2. Check main.js
  const jsRes = await fetch('https://merlinsimo.netlify.app/js/main.js');
  console.log('\nmain.js status:', jsRes.status);
  console.log('main.js has nav__mobile-extra insertion:', jsRes.body.includes('nav__mobile-extra'));

  // 3. Check index.html
  const htmlRes = await fetch('https://merlinsimo.netlify.app/index.html');
  console.log('\nindex.html status:', htmlRes.status);
  console.log('index.html uses style.css?v=16.0:', htmlRes.body.includes('style.css?v=16.0'));
}

verify().catch(console.error);

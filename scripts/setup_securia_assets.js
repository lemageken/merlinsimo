const fs = require('fs');
const path = require('path');

const destDir = 'd:/ANTIGRAVITY/projets/site-genie/site/images/securia';
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const logoSrc = 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/.user_uploaded/media_1794667317196_de8f2c26.jpg';

fs.copyFileSync(logoSrc, path.join(destDir, 'logo-securia.jpg'));
fs.copyFileSync(logoSrc, path.join(destDir, 'presentation-projet-securia.jpg'));
fs.copyFileSync(logoSrc, path.join('d:/ANTIGRAVITY/projets/site-genie/site/images', 'logo-securia.jpg'));

console.log('Successfully copied Secur.IA logo!');
console.log('Files in securia dir:', fs.readdirSync(destDir));

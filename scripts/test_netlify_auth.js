const { execSync } = require('child_process');
const fs = require('fs');

const p = 'C:/Users/Merlin/AppData/Roaming/netlify/Config/config.json';
const config = JSON.parse(fs.readFileSync(p, 'utf8'));
config.userId = '6ac7b0a88753befc03c26006';
fs.writeFileSync(p, JSON.stringify(config, null, '\t'), 'utf8');

const token = config.users['6ac7b0a88753befc03c26006'].auth.token;
console.log('Token found:', token ? token.slice(0, 8) + '...' : 'none');

try {
  const out = execSync('cmd.exe /c "netlify sites:list"', {
    env: { ...process.env, NETLIFY_AUTH_TOKEN: token },
    encoding: 'utf8'
  });
  console.log('SITES:\n', out);
} catch (e) {
  console.log('Error:', e.stdout || e.stderr || e.message);
}

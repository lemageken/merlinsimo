const { execSync } = require('child_process');
const cwd = 'd:/ANTIGRAVITY/projets/site-genie';

function run(cmd) {
  console.log('> ' + cmd);
  try {
    const out = execSync(cmd, { cwd, encoding: 'utf8' }).trim();
    if (out) console.log(out);
    return out;
  } catch (e) {
    console.error('CMD Error:', e.stdout || e.stderr || e.message);
    throw e;
  }
}

// 1. Git init
run('git init -b main');

// 2. Git add
run('git add .');

// 3. Git commit
run('git commit -m "feat: initialisation du site Merlin SIMO - L Atelier de l Esprit"');

// 4. Create GitHub repository with gh CLI and push
console.log('Creating GitHub repository lemageken/merlinsimo...');
try {
  run('gh repo create lemageken/merlinsimo --public --source=. --remote=origin --push');
} catch (e) {
  console.log('If repo creation failed, trying to push to existing remote...');
  try {
    run('git push -u origin main');
  } catch (err) {
    console.error('Push error:', err.message);
  }
}

console.log('GitHub setup finished!');

const { execSync } = require('child_process');
const cwd = 'd:/ANTIGRAVITY/projets/site-genie';

function run(cmd) {
  console.log('> ' + cmd);
  try {
    const out = execSync(cmd, { cwd, encoding: 'utf8' }).trim();
    if (out) console.log(out);
    return out;
  } catch (e) {
    console.error('Error:', e.stdout || e.stderr || e.message);
    throw e;
  }
}

run('git add .');
run('git commit -m "style(articles): réécriture intégrale des 20 articles en style pédagogique chaleureux, complice et accessible dès le collège"');
run('git push origin main');
console.log('GitHub repository successfully updated!');

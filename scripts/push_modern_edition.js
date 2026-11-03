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
run('git commit -m "style(articles): rééquilibrage moderne et universel (Einstein, Feynman, Pixar, Steve Jobs) avec ancrage urbain et contemporain au Cameroun (Douala, Yaoundé, Arthur Zang, William Elong, Samuel Eto\'o)"');
run('git push origin main');
console.log('GitHub repository successfully updated with modern balanced edition!');

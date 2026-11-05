const { execSync } = require('child_process');
const cwd = 'd:/ANTIGRAVITY/projets/site-genie';

function run(cmd) {
  console.log('> ' + cmd);
  try {
    const out = execSync(cmd, { cwd, encoding: 'utf8' }).trim();
    if (out) console.log(out);
    return out;
  } catch (e) {
    console.error('Error executing:', cmd);
    if (e.stdout) console.log('Stdout:', e.stdout);
    if (e.stderr) console.error('Stderr:', e.stderr);
    throw e;
  }
}

console.log('--- Staging and committing changes to Git ---');
run('git add .');
run('git commit -m "feat(rubrique): publication intégrale de la rubrique Développement de l\'Intelligence de l\'Enfant (10 articles de fond, hub intelligence-enfant.html, illustrations réalistes, promotions Selar et mise à jour sitemap/navigation)"');

console.log('--- Pushing to GitHub (origin main) ---');
run('git push origin main');

console.log('--- Deploying directly to Netlify production ---');
run('netlify deploy --dir d:/ANTIGRAVITY/projets/site-genie/site --prod');

console.log('=== DEPLOYMENT AND PUBLICATION COMPLETE! ===');

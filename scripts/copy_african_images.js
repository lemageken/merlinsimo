const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Merlin\\.gemini\\antigravity\\brain\\d8ac7886-f84d-4592-98e9-f369420c4af2';
const targetDir = path.resolve(__dirname, '..', 'site', 'images', 'enfants');

const imageUpdates = [
  { prefix: 'rythmes_apprentissage_enfant_african', target: 'rythmes-apprentissage-enfant.jpg' },
  { prefix: 'jeux_memoire_enfant_african', target: 'jeux-memoire-enfant.jpg' },
  { prefix: 'logique_mathematique_enfant_african', target: 'logique-mathematique-enfant.jpg' },
  { prefix: 'attention_ecrans_enfant_african', target: 'attention-ecrans-enfant.jpg' },
  { prefix: 'difficultes_scolaires_solutions_african', target: 'difficultes-scolaires-solutions.jpg' }
];

const brainFiles = fs.readdirSync(brainDir);

imageUpdates.forEach(item => {
  const match = brainFiles.find(f => f.startsWith(item.prefix) && f.endsWith('.jpg'));
  if (match) {
    const src = path.join(brainDir, match);
    const dest = path.join(targetDir, item.target);
    fs.copyFileSync(src, dest);
    const stat = fs.statSync(dest);
    console.log(`Replaced with African photo: ${match} -> ${item.target} (${Math.round(stat.size / 1024)} KB)`);
  } else {
    console.error(`ERROR: Could not find ${item.prefix}`);
  }
});

console.log('All 5 African images copied successfully to site/images/enfants/');

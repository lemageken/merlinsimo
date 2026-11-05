const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Merlin\\.gemini\\antigravity\\brain\\d8ac7886-f84d-4592-98e9-f369420c4af2';
const targetDir = path.resolve(__dirname, '..', 'images', 'enfants');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imageMap = [
  { prefix: 'developper_potentiel_enfant', target: 'developper-potentiel-enfant.jpg' },
  { prefix: 'rythmes_apprentissage_enfant', target: 'rythmes-apprentissage-enfant.jpg' },
  { prefix: 'gout_lecture_enfant', target: 'gout-lecture-enfant.jpg' },
  { prefix: 'jeux_memoire_enfant', target: 'jeux-memoire-enfant.jpg' },
  { prefix: 'logique_mathematique_enfant', target: 'logique-mathematique-enfant.jpg' },
  { prefix: 'curiosite_questions_enfant', target: 'curiosite-questions-enfant.jpg' },
  { prefix: 'attention_ecrans_enfant', target: 'attention-ecrans-enfant.jpg' },
  { prefix: 'routine_15_minutes_enfant', target: 'routine-15-minutes-enfant.jpg' },
  { prefix: 'difficultes_scolaires_solutions', target: 'difficultes-scolaires-solutions.jpg' },
  { prefix: 'parents_partenaires_educatifs', target: 'parents-partenaires-educatifs.jpg' }
];

const brainFiles = fs.readdirSync(brainDir);

imageMap.forEach(item => {
  const match = brainFiles.find(f => f.startsWith(item.prefix) && f.endsWith('.jpg'));
  if (match) {
    const src = path.join(brainDir, match);
    const dest = path.join(targetDir, item.target);
    fs.copyFileSync(src, dest);
    const stat = fs.statSync(dest);
    console.log(`Copied: ${match} -> ${item.target} (${Math.round(stat.size / 1024)} KB)`);
  } else {
    console.error(`WARNING: No match found for ${item.prefix}`);
  }
});

console.log('All images copied successfully!');

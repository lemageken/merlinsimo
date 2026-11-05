const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Merlin\\.gemini\\antigravity\\brain\\d8ac7886-f84d-4592-98e9-f369420c4af2';
const targetDir = path.resolve(__dirname, '..', 'site', 'images', 'enfants');

const assignments = [
  // 1. Article 1: Black African
  { src: 'developper_potentiel_enfant_1793909317462.jpg', target: 'developper-potentiel-enfant.jpg', race: 'Black African' },
  // 2. Article 2: Black African
  { src: 'rythmes_apprentissage_enfant_african_1793912899437.jpg', target: 'rythmes-apprentissage-enfant.jpg', race: 'Black African' },
  // 3. Article 3: Other race
  { src: 'gout_lecture_enfant_1793909438195.jpg', target: 'gout-lecture-enfant.jpg', race: 'Other race' },
  // 4. Article 4: Black African
  { src: 'jeux_memoire_enfant_african_1793912921972.jpg', target: 'jeux-memoire-enfant.jpg', race: 'Black African' },
  // 5. Article 5: Other race
  { src: 'logique_mathematique_enfant_1793909635446.jpg', target: 'logique-mathematique-enfant.jpg', race: 'Other race' },
  // 6. Article 6: Black African
  { src: 'logique_mathematique_enfant_african_1793912944411.jpg', target: 'curiosite-questions-enfant.jpg', race: 'Black African' },
  // 7. Article 7: Black African
  { src: 'attention_ecrans_enfant_african_1793913668889.jpg', target: 'attention-ecrans-enfant.jpg', race: 'Black African' },
  // 8. Article 8: Black African
  { src: 'difficultes_scolaires_solutions_african_1793913726051.jpg', target: 'routine-15-minutes-enfant.jpg', race: 'Black African' },
  // 9. Article 9: Other race
  { src: 'difficultes_scolaires_solutions_1793910243302.jpg', target: 'difficultes-scolaires-solutions.jpg', race: 'Other race' },
  // 10. Article 10: Other race
  { src: 'parents_partenaires_educatifs_1793910304250.jpg', target: 'parents-partenaires-educatifs.jpg', race: 'Other race' }
];

assignments.forEach(item => {
  const srcPath = path.join(brainDir, item.src);
  const destPath = path.join(targetDir, item.target);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    const size = Math.round(fs.statSync(destPath).size / 1024);
    console.log(`[${item.race}] ${item.src} -> ${item.target} (${size} KB)`);
  } else {
    console.error(`ERROR: Source not found: ${srcPath}`);
  }
});

console.log('--- Assignment Complete ---');
console.log('Black African Articles (60%): 1, 2, 4, 6, 7, 8');
console.log('Other Race Articles (40%): 3, 5, 9, 10');

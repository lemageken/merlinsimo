const fs = require('fs');
const path = require('path');

const destDir = 'd:/ANTIGRAVITY/projets/site-genie/site/images/securia';
const rootImages = 'd:/ANTIGRAVITY/projets/site-genie/site/images';

const imageMap = [
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/banner_secur_ia_1794667816422.jpg',
    dest: 'banner-secur-ia.jpg',
    alsoRoot: true
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/renseignement_policier_anticipation_1794667832473.jpg',
    dest: 'renseignement-policier-anticipation.jpg'
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/police_judiciaire_enquetes_criminelles_1794667857550.jpg',
    dest: 'police-judiciaire-enquetes-criminelles.jpg'
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/securite_publique_maintien_ordre_1794667884336.jpg',
    dest: 'securite-publique-maintien-ordre.jpg'
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/cybercriminalite_afrique_bouclier_ia_1794667828426.jpg',
    dest: 'cybercriminalite-afrique-bouclier-ia.jpg'
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/securite_frontieres_criminalite_transnationale_1794667865024.jpg',
    dest: 'securite-frontieres-criminalite-transnationale.jpg'
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/gestion_crises_defense_nationale_1794667943426.jpg',
    dest: 'gestion-crises-defense-nationale.jpg'
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/formation_policier_simulateurs_ia_1794667838335.jpg',
    dest: 'formation-policier-simulateurs-ia.jpg'
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/police_intelligente_administration_citoyens_1794667879495.jpg',
    dest: 'police-intelligente-administration-citoyens.jpg'
  },
  {
    src: 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/souverainete_numerique_securite_cameroun_1794667950502.jpg',
    dest: 'souverainete-numerique-securite-cameroun.jpg'
  }
];

imageMap.forEach(item => {
  if (fs.existsSync(item.src)) {
    fs.copyFileSync(item.src, path.join(destDir, item.dest));
    if (item.alsoRoot) {
      fs.copyFileSync(item.src, path.join(rootImages, item.dest));
    }
    console.log('✓ Successfully deployed:', item.dest, 'Size:', fs.statSync(item.src).size);
  } else {
    console.error('✗ Missing source:', item.src);
  }
});

console.log('Total files in site/images/securia:', fs.readdirSync(destDir));

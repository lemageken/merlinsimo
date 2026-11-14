const fs = require('fs');
const path = require('path');

const destDir = 'd:/ANTIGRAVITY/projets/site-genie/site/images/securia';
const rootImages = 'd:/ANTIGRAVITY/projets/site-genie/site/images';

const batch1 = [
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
  }
];

batch1.forEach(item => {
  if (fs.existsSync(item.src)) {
    fs.copyFileSync(item.src, path.join(destDir, item.dest));
    if (item.alsoRoot) {
      fs.copyFileSync(item.src, path.join(rootImages, item.dest));
    }
    console.log('Copied:', item.dest);
  } else {
    console.warn('Source missing:', item.src);
  }
});

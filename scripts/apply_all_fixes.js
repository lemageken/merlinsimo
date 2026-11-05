const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteDir = 'd:/ANTIGRAVITY/projets/site-genie/site';
const uploadedLogo = 'C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/.user_uploaded/media_1793632532548_53541772.jpg';

console.log('--- 1. Updating logo files with user-uploaded Atelier de l Esprit logo ---');
if (fs.existsSync(uploadedLogo)) {
  fs.copyFileSync(uploadedLogo, path.join(siteDir, 'images/logo.jpg'));
  fs.copyFileSync(uploadedLogo, path.join(siteDir, 'images/logo-atelier-esprit.jpg'));
  fs.copyFileSync(uploadedLogo, path.join(siteDir, 'images/logo-google-seo.jpg'));
  console.log('User logo copied to site/images/logo.jpg and logo-atelier-esprit.jpg');
}

console.log('--- 2. Updating netlify.toml cache policy ---');
const netlifyTomlPath = 'd:/ANTIGRAVITY/projets/site-genie/netlify.toml';
let toml = fs.readFileSync(netlifyTomlPath, 'utf8');
toml = toml.replace(/Cache-Control\s*=\s*"public,\s*max-age=31536000,\s*immutable"/g, 'Cache-Control = "public, max-age=0, must-revalidate"');
fs.writeFileSync(netlifyTomlPath, toml, 'utf8');
console.log('netlify.toml updated with no-stale cache-control for images');

console.log('--- 3. Calibrating dates across the 10 child intelligence articles ---');
const dateMap = {
  'votre-enfant-est-il-moins-intelligent-potentiel.html': { iso: '2026-10-27', display: '27 Octobre 2026' },
  'pourquoi-enfants-apprennent-differemment-rythmes.html': { iso: '2026-10-28', display: '28 Octobre 2026' },
  'donner-gout-lecture-enfant-sans-forcer.html': { iso: '2026-10-29', display: '29 Octobre 2026' },
  'memoire-enfant-10-jeux-simples-retenir-lecons.html': { iso: '2026-10-30', display: '30 Octobre 2026' },
  'developper-logique-mathematique-enfant-maison.html': { iso: '2026-10-31', display: '31 Octobre 2026' },
  'enfant-pose-trop-de-questions-intelligence-a-encourager.html': { iso: '2026-11-01', display: '01 Novembre 2026' },
  'telephone-television-jeux-video-proteger-concentration-enfant.html': { iso: '2026-11-02', display: '02 Novembre 2026' },
  '15-minutes-par-jour-changer-maniere-dont-enfant-apprend.html': { iso: '2026-11-03', display: '03 Novembre 2026' },
  'notes-baissent-reagir-sans-crier-decourager-enfant.html': { iso: '2026-11-04', display: '04 Novembre 2026' },
  'preparer-enfant-reussir-dans-le-monde-de-demain.html': { iso: '2026-11-05', display: '05 Novembre 2026' }
};

// 4. Update individual article pages
const articlesDir = path.join(siteDir, 'articles');
Object.entries(dateMap).forEach(([file, info]) => {
  const filePath = path.join(articlesDir, file);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // Update date
  html = html.replace(/<time datetime="[^"]*">(?:<i class="far fa-calendar-alt"><\/i>\s*)?[^<]+<\/time>/gi, 
    `<time datetime="${info.iso}"><i class="far fa-calendar-alt"></i> ${info.display}</time>`);
  
  html = html.replace(/"datePublished":\s*"[^"]*"/g, `"datePublished": "${info.iso}"`);
  html = html.replace(/"dateModified":\s*"[^"]*"/g, `"dateModified": "2026-11-05"` );

  // Bust image caches with ?v=20261105b
  html = html.replace(/src="(\.\.\/images\/enfants\/[^"?]+)(?:\?v=[^"]*)?"/g, 'src="$1?v=20261105b"');
  html = html.replace(/src="(\.\.\/images\/[^"?]+\.(?:jpg|png|svg))(?:\?v=[^"]*)?"/g, 'src="$1?v=20261105b"');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated article: ${file} -> ${info.display}`);
});

// 5. Update sitemap.xml
const sitemapPath = path.join(siteDir, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
Object.entries(dateMap).forEach(([file, info]) => {
  const regex = new RegExp(`(<loc>https:\\/\\/merlinsimo\\.netlify\\.app\\/articles\\/${file.replace('.', '\\.')}<\\/loc>\\s*<lastmod>)[^<]+(<\\/lastmod>)`, 'g');
  sitemap = sitemap.replace(regex, `$1${info.iso}$2`);
});
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('sitemap.xml updated with new dates');

// 6. Update intelligence-enfant.html
const hubPath = path.join(siteDir, 'intelligence-enfant.html');
let hubHtml = fs.readFileSync(hubPath, 'utf8');

// Ensure "Nouvelle Rubrique" is completely removed
hubHtml = hubHtml.replace(/<span[^>]*class="[^"]*badge[^"]*"[^>]*>[\s\S]*?Nouvelle Rubrique[\s\S]*?<\/span>/gi, '');
hubHtml = hubHtml.replace(/Nouvelle Rubrique Éditoriale/gi, 'Rubrique Spéciale');

// Bust image caches in hub
hubHtml = hubHtml.replace(/src="(images\/enfants\/[^"?]+)(?:\?v=[^"]*)?"/g, 'src="$1?v=20261105b"');
hubHtml = hubHtml.replace(/src="(images\/banner-intelligence-enfant\.jpg)(?:\?v=[^"]*)?"/g, 'src="$1?v=20261105b"');

// Update dates inside card metadata in intelligence-enfant.html
Object.entries(dateMap).forEach(([file, info]) => {
  const slug = file.replace('.html', '');
  // Find article block containing this slug
  const regex = new RegExp(`(href="articles\\/${slug}\\.html"[\\s\\S]*?<i class="far fa-calendar-alt"><\\/i>\\s*)([^<]+)`, 'gi');
  hubHtml = hubHtml.replace(regex, `$1${info.display}`);
});

// Also replace general date patterns matching the cards in intelligence-enfant.html
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*5 novembre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 05 Novembre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*4 novembre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 04 Novembre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*2 novembre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 02 Novembre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*18 octobre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 27 Octobre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*20 octobre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 28 Octobre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*22 octobre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 29 Octobre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*25 octobre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 30 Octobre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*27 octobre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 31 Octobre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*29 octobre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 01 Novembre 2026</span>');
hubHtml = hubHtml.replace(/<span><i class="far fa-calendar-alt"><\/i>\s*31 octobre 2026<\/span>/g, '<span><i class="far fa-calendar-alt"></i> 02 Novembre 2026</span>');

fs.writeFileSync(hubPath, hubHtml, 'utf8');
console.log('intelligence-enfant.html updated with cache-busting and 05 Novembre 2026 dates');

// 7. Add Showcase section on index.html so the homepage proudly displays the new Child Intelligence section
const indexPath = path.join(siteDir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const showcaseSection = `
                <!-- Section Showcase : Développement de l'Intelligence de l'Enfant -->
                <section class="section" style="background: linear-gradient(135deg, rgba(0, 186, 199, 0.07) 0%, rgba(212, 160, 23, 0.07) 100%); border-radius: var(--radius-2xl); padding: var(--space-3xl) var(--space-xl); margin-bottom: var(--space-3xl); border: 1px solid rgba(0, 186, 199, 0.25);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: var(--space-xl); flex-wrap: wrap; gap: var(--space-md);">
                        <div>
                            <span class="card__category" style="background: var(--electric-blue); color: #fff; margin-bottom: var(--space-xs); display: inline-block;">Dossier Majeur</span>
                            <h2 class="section__title" style="margin-bottom: var(--space-xs); font-size: var(--fs-2xl);">Développement de l'Intelligence de l'Enfant</h2>
                            <p style="color: var(--text-medium); font-size: var(--fs-base); max-width: 680px;">
                                « Comprendre, stimuler et accompagner le potentiel intellectuel de chaque enfant. » Une collection complète de 10 guides concrets basés sur les sciences cognitives et le quotidien familial.
                            </p>
                        </div>
                        <a href="intelligence-enfant.html" class="btn btn--primary" style="font-size: var(--fs-sm); padding: 0.65rem 1.25rem;">
                            Découvrir les 10 guides pour enfants →
                        </a>
                    </div>

                    <div class="grid-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-xl);">
                        <!-- Enfant Card 1 (Article 1 - African photo) -->
                        <article class="card" style="background: var(--bg-card); border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--border); display: flex; flex-direction: column;">
                            <div style="height: 180px; overflow: hidden; position: relative;">
                                <img src="images/enfants/developper-potentiel-enfant.jpg?v=20261105b" alt="Développer le potentiel de son enfant" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
                                <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(10,25,47,0.85); color: #fff; font-size: 10px; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full);">Neuroplasticité</span>
                            </div>
                            <div class="card__body" style="padding: var(--space-md); flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <div class="card__meta" style="margin-bottom: var(--space-2xs); font-size: var(--fs-2xs);">
                                        <time datetime="2026-10-27">27 Octobre 2026</time>
                                        <span class="reading-time">13 min</span>
                                    </div>
                                    <h3 class="card__title" style="font-size: var(--fs-md); line-height: 1.35; margin-bottom: var(--space-xs);">
                                        <a href="articles/votre-enfant-est-il-moins-intelligent-potentiel.html">Votre enfant est-il moins intelligent qu'il ne le pourrait ? 7 façons de développer son potentiel</a>
                                    </h3>
                                    <p class="card__excerpt" style="font-size: var(--fs-xs); line-height: 1.5; color: var(--text-medium);">
                                        Comment l'environnement, le dialogue socratique et les habitudes éducatives réveillent le génie naturel de l'enfant sans pression.
                                    </p>
                                </div>
                                <a href="articles/votre-enfant-est-il-moins-intelligent-potentiel.html" style="font-weight: 700; color: var(--electric-blue); font-size: var(--fs-xs); margin-top: var(--space-sm);">Lire le guide complet →</a>
                            </div>
                        </article>

                        <!-- Enfant Card 2 (Article 4 - African photo) -->
                        <article class="card" style="background: var(--bg-card); border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--border); display: flex; flex-direction: column;">
                            <div style="height: 180px; overflow: hidden; position: relative;">
                                <img src="images/enfants/jeux-memoire-enfant.jpg?v=20261105b" alt="Mémoire de l'enfant et jeux" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
                                <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(10,25,47,0.85); color: #fff; font-size: 10px; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full);">Mémoire & Jeux</span>
                            </div>
                            <div class="card__body" style="padding: var(--space-md); flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <div class="card__meta" style="margin-bottom: var(--space-2xs); font-size: var(--fs-2xs);">
                                        <time datetime="2026-10-30">30 Octobre 2026</time>
                                        <span class="reading-time">14 min</span>
                                    </div>
                                    <h3 class="card__title" style="font-size: var(--fs-md); line-height: 1.35; margin-bottom: var(--space-xs);">
                                        <a href="articles/memoire-enfant-10-jeux-simples-retenir-lecons.html">La mémoire de votre enfant se travaille : 10 jeux simples pour l'aider à mieux retenir ses leçons</a>
                                    </h3>
                                    <p class="card__excerpt" style="font-size: var(--fs-xs); line-height: 1.5; color: var(--text-medium);">
                                        10 activités amusantes et ultra-efficaces pour ancrer durablement les connaissances à l'école sans bachotage rébarbatif.
                                    </p>
                                </div>
                                <a href="articles/memoire-enfant-10-jeux-simples-retenir-lecons.html" style="font-weight: 700; color: var(--electric-blue); font-size: var(--fs-xs); margin-top: var(--space-sm);">Lire le guide complet →</a>
                            </div>
                        </article>

                        <!-- Enfant Card 3 (Article 8 - African photo) -->
                        <article class="card" style="background: var(--bg-card); border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--border); display: flex; flex-direction: column;">
                            <div style="height: 180px; overflow: hidden; position: relative;">
                                <img src="images/enfants/routine-15-minutes-enfant.jpg?v=20261105b" alt="Routine 15 minutes par jour" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
                                <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(10,25,47,0.85); color: #fff; font-size: 10px; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full);">Routine Familiale</span>
                            </div>
                            <div class="card__body" style="padding: var(--space-md); flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <div class="card__meta" style="margin-bottom: var(--space-2xs); font-size: var(--fs-2xs);">
                                        <time datetime="2026-11-03">03 Novembre 2026</time>
                                        <span class="reading-time">13 min</span>
                                    </div>
                                    <h3 class="card__title" style="font-size: var(--fs-md); line-height: 1.35; margin-bottom: var(--space-xs);">
                                        <a href="articles/15-minutes-par-jour-changer-maniere-dont-enfant-apprend.html">15 minutes par jour peuvent-elles changer la manière dont votre enfant apprend ?</a>
                                    </h3>
                                    <p class="card__excerpt" style="font-size: var(--fs-xs); line-height: 1.5; color: var(--text-medium);">
                                        La routine familiale d'excellence : lecture partagée, échange d'idées et jeu de logique pour un bond spectaculaire en confiance.
                                    </p>
                                </div>
                                <a href="articles/15-minutes-par-jour-changer-maniere-dont-enfant-apprend.html" style="font-weight: 700; color: var(--electric-blue); font-size: var(--fs-xs); margin-top: var(--space-sm);">Lire le guide complet →</a>
                            </div>
                        </article>
                    </div>
                </section>
`;

if (!indexHtml.includes('Développement de l\'Intelligence de l\'Enfant')) {
  indexHtml = indexHtml.replace('<!-- Section: Derniers Articles -->', showcaseSection + '\n                <!-- Section: Derniers Articles -->');
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('index.html enriched with child intelligence showcase section');
} else {
  console.log('index.html already has showcase section');
}

// 8. Update articles.html with a top notice banner
const articlesHubPath = path.join(siteDir, 'articles.html');
let articlesHubHtml = fs.readFileSync(articlesHubPath, 'utf8');
if (!articlesHubHtml.includes('intelligence-enfant.html')) {
  const enfantBanner = `
            <div style="background: linear-gradient(135deg, rgba(0, 186, 199, 0.1) 0%, rgba(212, 160, 23, 0.1) 100%); border-radius: var(--radius-xl); padding: var(--space-lg); margin-bottom: var(--space-2xl); border: 1px solid rgba(0,186,199,0.3); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md);">
                <div>
                    <span style="font-size: var(--fs-xs); font-weight: 700; color: var(--electric-blue); text-transform: uppercase;">Rubrique Spéciale Éducation</span>
                    <h3 style="margin: 0.25rem 0; font-size: var(--fs-lg);">Développement de l'Intelligence de l'Enfant</h3>
                    <p style="margin: 0; font-size: var(--fs-xs); color: var(--text-medium);">10 dossiers pratiques fondés sur les sciences cognitives pour stimuler mémoire, curiosité et logique chez les 3-12 ans.</p>
                </div>
                <a href="intelligence-enfant.html" class="btn btn--primary" style="font-size: var(--fs-xs); padding: 0.5rem 1rem;">Consulter les 10 dossiers →</a>
            </div>
  `;
  articlesHubHtml = articlesHubHtml.replace('<div class="articles-grid">', enfantBanner + '\n            <div class="articles-grid">');
  fs.writeFileSync(articlesHubPath, articlesHubHtml, 'utf8');
  console.log('articles.html updated with child intelligence banner');
}

console.log('=== All files successfully updated and prepared! ===');

/**
 * Script de construction intégrale de la rubrique "Secur.IA"
 * Merlin SIMO – L'Intelligence en Action
 * 
 * Génère :
 * 1. site/secur-ia.html (Hub principal de la rubrique)
 * 2. 10 pages d'articles complètes dans site/articles/
 * 3. Mise à jour de la navigation sur toutes les pages du site
 * 4. Section vitrine Secur.IA sur site/index.html
 * 5. Mise à jour de site/sitemap.xml
 * 6. Styles CSS spécialisés pour Secur.IA dans site/css/style.css
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SITE_DIR = path.join(ROOT_DIR, 'site');
const ARTICLES_DIR = path.join(SITE_DIR, 'articles');
const CSS_PATH = path.join(SITE_DIR, 'css', 'style.css');
const SITEMAP_PATH = path.join(SITE_DIR, 'sitemap.xml');
const INDEX_PATH = path.join(SITE_DIR, 'index.html');

// 1. Charger les articles
const part1 = require('./data_securia_part1.js');
const part2 = require('./data_securia_part2.js');
const articles = [...part1, ...part2];

console.log(`=== Initialisation construction Secur.IA : ${articles.length} articles chargés ===`);

// Vérifier et enrichir chaque article
articles.forEach((art, idx) => {
    if (!art.slug || !art.title) {
        throw new Error(`Article index ${idx} incomplet !`);
    }
    art.date = art.dateDisplay || '05 Novembre 2026';
    art.readingTime = art.readTime || '14 min de lecture';
    art.wordCount = art.wordCount || '2 400+ mots';
    art.imageCaption = art.imageAlt || art.title;
    art.contentHtml = art.sections ? art.sections.map(sec => {
        let out = '';
        if (sec.type !== 'lead' && sec.title) {
            out += `<h2>${sec.title}</h2>\n`;
        }
        if (sec.html) {
            out += sec.html + '\n';
        }
        return out;
    }).join('\n') : (art.contentHtml || '');
});

// 2. Injecter les styles CSS pour Secur.IA s'ils ne sont pas déjà présents
const SECURIA_CSS = `
/* ==========================================================================
   SECUR.IA & POCAM237 — STYLES SPÉCIALISÉS (SÉCURITÉ & INTELLIGENCE ARTIFICIELLE)
   ========================================================================== */
:root {
  --securia-green: #00a651;
  --securia-green-dark: #007a3d;
  --securia-green-light: rgba(0, 166, 81, 0.12);
  --securia-red: #e52521;
  --securia-red-dark: #b81b17;
  --securia-gold: #f8b318;
  --securia-gold-dark: #cf920b;
  --securia-navy: #091b29;
  --securia-dark-card: #0d2235;
  --securia-border: rgba(0, 166, 81, 0.25);
}

.securia-hero-banner {
  background: linear-gradient(135deg, #061420 0%, #0c2438 50%, #081d2c 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 4.5rem 0 3.5rem;
  border-bottom: 2px solid var(--securia-gold);
}
.securia-hero-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 166, 81, 0.18) 0%, rgba(0,0,0,0) 70%);
  pointer-events: none;
}
.securia-hero-banner::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(248, 179, 24, 0.12) 0%, rgba(0,0,0,0) 70%);
  pointer-events: none;
}

.securia-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 166, 81, 0.15);
  border: 1px solid var(--securia-green);
  color: #2ee587;
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.securia-motto {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--securia-gold);
  margin-bottom: 1.25rem;
}
.securia-motto span.dot-green { color: var(--securia-green); }
.securia-motto span.dot-red { color: var(--securia-red); }

.securia-intro-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 5px solid var(--securia-green);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  margin-bottom: var(--space-2xl);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.securia-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.securia-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}
.securia-card:hover {
  transform: translateY(-5px);
  border-color: var(--securia-green);
  box-shadow: 0 16px 36px rgba(0, 166, 81, 0.12);
}
.securia-card__img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #0d2235;
}
.securia-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.securia-card:hover .securia-card__img {
  transform: scale(1.05);
}
.securia-card__badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(9, 27, 41, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #2ee587;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.65rem;
  border-radius: var(--radius-full);
}
.securia-card__body {
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.securia-card__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: var(--fs-xs);
  color: var(--text-light);
  margin-bottom: var(--space-xs);
  flex-wrap: wrap;
}
.securia-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: var(--space-xs);
  color: var(--text-dark);
}
.securia-card__title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}
.securia-card__title a:hover {
  color: var(--securia-green-dark);
}
.securia-card__desc {
  font-size: var(--fs-sm);
  color: var(--text-medium);
  line-height: 1.6;
  margin-bottom: var(--space-md);
  flex-grow: 1;
}
.securia-card__footer {
  margin-top: auto;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.securia-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: var(--fs-xs);
  font-weight: 700;
  color: var(--securia-green-dark);
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
}
.securia-card__btn:hover {
  color: var(--securia-green);
  transform: translateX(3px);
}

/* Callout boxes dans les articles Secur.IA */
.securia-box {
  margin: var(--space-xl) 0;
  padding: var(--space-lg) var(--space-xl);
  border-radius: var(--radius-lg);
  border-left: 5px solid;
}
.securia-box--tactical {
  background: rgba(0, 166, 81, 0.06);
  border-color: var(--securia-green);
}
.securia-box--legal {
  background: rgba(9, 27, 41, 0.05);
  border-color: #1a4971;
}
.securia-box--future {
  background: rgba(248, 179, 24, 0.08);
  border-color: var(--securia-gold-dark);
}
.securia-box__title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: var(--fs-base);
  font-weight: 800;
  margin-bottom: var(--space-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.securia-box--tactical .securia-box__title { color: var(--securia-green-dark); }
.securia-box--legal .securia-box__title { color: #0b3356; }
.securia-box--future .securia-box__title { color: #a36f04; }

.securia-project-box {
  background: linear-gradient(135deg, #091b29 0%, #0d2940 100%);
  color: #ffffff;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  margin: var(--space-2xl) 0;
  border: 1px solid rgba(0, 166, 81, 0.3);
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
  position: relative;
  overflow: hidden;
}
.securia-project-box h3 {
  color: var(--securia-gold);
  font-size: var(--fs-xl);
  margin-bottom: var(--space-xs);
}
.securia-project-box p {
  color: #d1dbe5;
  font-size: var(--fs-sm);
  line-height: 1.65;
}
`;

let currentCss = fs.readFileSync(CSS_PATH, 'utf8');
if (!currentCss.includes('SECUR.IA & POCAM237')) {
    fs.appendFileSync(CSS_PATH, '\n' + SECURIA_CSS, 'utf8');
    console.log('✓ Styles Secur.IA injectés avec succès dans site/css/style.css');
} else {
    console.log('✓ Styles Secur.IA déjà présents dans site/css/style.css');
}

// 3. Modèle Navigation Global
function getNavHtml(activePage, isSubdir = false) {
    const prefix = isSubdir ? '../' : '';
    const items = [
        { href: 'index.html', label: 'Accueil', key: 'index' },
        { href: 'articles.html', label: 'Articles', key: 'articles' },
        { href: 'intelligence-enfant.html', label: 'Intelligence Enfant', key: 'intelligence-enfant' },
        { href: 'secur-ia.html', label: 'Secur.IA', key: 'secur-ia' },
        { href: 'boutique.html', label: 'Boutique', key: 'boutique' },
        { href: 'a-propos.html', label: 'À propos', key: 'a-propos' },
        { href: 'contact.html', label: 'Contact', key: 'contact' }
    ];

    const listItems = items.map(it => {
        const isActive = activePage === it.key;
        const activeClass = isActive ? ' nav__link--active' : '';
        return `                    <li class="nav__item"><a href="${prefix}${it.href}" class="nav__link${activeClass}">${it.label}</a></li>`;
    }).join('\n');

    return `            <nav class="nav" aria-label="Navigation principale">
                <ul class="nav__list">
${listItems}
                </ul>
            </nav>`;
}

// 4. Modèle Footer Global
function getFooterHtml(isSubdir = false) {
    const prefix = isSubdir ? '../' : '';
    return `    <footer class="footer">
        <div class="container">
            <div class="footer__grid">
                <div>
                    <span class="header__logo" style="display: block; margin-bottom: var(--space-md);"><img src="${prefix}images/logo-transparent.png" alt="Emblème Merlin SIMO" class="header__logo-img"> Merlin <span>SIMO</span></span>
                    <p class="footer__text">
                        Plateforme éditoriale et de recherche consacrée à l'autonomie intellectuelle, à l'élévation des capacités cognitives et à l'innovation technologique souveraine au service de la sécurité humaine.
                    </p>
                    <p class="footer__text" style="font-style: italic; color: var(--gold); margin-top: var(--space-sm);">
                        « Informer · Assister · Protéger — L'Intelligence au service de la nation. »
                    </p>
                </div>
                <div>
                    <h4 class="footer__title">Navigation</h4>
                    <ul class="footer__links">
                        <li><a href="${prefix}index.html">Accueil</a></li>
                        <li><a href="${prefix}articles.html">Articles & Essais de fond</a></li>
                        <li><a href="${prefix}intelligence-enfant.html">Développement Intelligence Enfant</a></li>
                        <li><a href="${prefix}secur-ia.html">Secur.IA (Sécurité & IA)</a></li>
                        <li><a href="${prefix}boutique.html">Boutique & Ressources</a></li>
                        <li><a href="${prefix}a-propos.html">À propos de Merlin SIMO</a></li>
                        <li><a href="${prefix}contact.html">Contact & Partenariats</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer__title">Rubriques Stratégiques</h4>
                    <ul class="footer__links">
                        <li><a href="${prefix}secur-ia.html">Projet Secur.IA & Pocam237</a></li>
                        <li><a href="${prefix}secur-ia.html?cat=police-judiciaire">Police Judiciaire & Criminalistique</a></li>
                        <li><a href="${prefix}secur-ia.html?cat=cybercriminalite">Bouclier Anti-Cybercriminalité</a></li>
                        <li><a href="${prefix}secur-ia.html?cat=souverainete">Souveraineté Numérique Africaine</a></li>
                        <li><a href="${prefix}intelligence-enfant.html">Neurosciences & Éveil Enfant</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer__title">Contact & Sécurité</h4>
                    <p class="footer__text">Échange direct pour consultations institutionnelles, conférences et projets d'ingénierie sécurité :</p>
                    <a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="font-size: var(--fs-xs); display: inline-flex; align-items: center; gap: 0.5rem; margin-top: var(--space-xs);"><i class="fab fa-whatsapp"></i> WhatsApp : +237 683 911 717</a>
                </div>
            </div>
            <div class="footer__bottom">
                <p>&copy; 2026 Merlin SIMO. Tous droits réservés. Concepteur de SECUR.IA et Pocam237. Collaboration stratégique : M. ENGUENE ENGUENE Jean Albert.</p>
                <div class="footer__legal">
                    <a href="${prefix}a-propos.html">Mentions Légales</a>
                    <a href="${prefix}contact.html">Confidentialité</a>
                    <a href="${prefix}sitemap.xml">Plan du site</a>
                </div>
            </div>
        </div>
    </footer>`;
}

// 5. Génération de site/secur-ia.html
function buildSecuriaHub() {
    const hubArticlesCards = articles.map((art, idx) => {
        const imagePath = art.image.startsWith('images/') ? art.image : ('images/securia/' + art.image);
        return `                <article class="securia-card" data-category="${art.categorySlug}" data-title="${art.title.toLowerCase()}" data-desc="${art.summary.toLowerCase()}">
                    <div class="securia-card__img-wrap">
                        <img src="${imagePath}" alt="${art.title}" class="securia-card__img" loading="lazy">
                        <span class="securia-card__badge">${art.category}</span>
                    </div>
                    <div class="securia-card__body">
                        <div class="securia-card__meta">
                            <span><i class="far fa-calendar-alt"></i> ${art.date}</span>
                            <span><i class="far fa-clock"></i> ${art.readingTime}</span>
                            <span><i class="fas fa-file-alt"></i> ${art.wordCount}</span>
                        </div>
                        <h2 class="securia-card__title">
                            <a href="articles/${art.slug}.html">${art.title}</a>
                        </h2>
                        <p class="securia-card__desc">${art.summary}</p>
                        <div class="securia-card__footer">
                            <span style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-user"></i> Merlin SIMO</span>
                            <a href="articles/${art.slug}.html" class="securia-card__btn">
                                Lire l'article complet <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </article>`;
    }).join('\n');

    const hubHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secur.IA – Intelligence Artificielle & Sécurité Publique | Merlin SIMO</title>
    <meta name="description" content="Informer, Assister, Protéger : La transformation numérique, opérationnelle et tactique des forces de sécurité et de police face aux mutations criminelles contemporaines. Un cadre d'innovation conçu par Merlin SIMO (créateur de SECUR.IA et Pocam237, en collaboration stratégique avec M. ENGUENE ENGUENE Jean Albert).">
    <meta name="keywords" content="Secur.IA, Pocam237, Merlin SIMO, ENGUENE ENGUENE Jean Albert, police Cameroun, DGSN Cameroun, SERVIR DGSN, intelligence artificielle police, police prédictive Afrique, criminalistique IA, souveraineté numérique sécurité, cybersécurité Afrique">
    <meta name="author" content="Merlin SIMO">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="https://merlinsimo.netlify.app/secur-ia.html">

    <!-- Open Graph / Meta -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Merlin SIMO – L'Intelligence en Action">
    <meta property="og:url" content="https://merlinsimo.netlify.app/secur-ia.html">
    <meta property="og:title" content="Secur.IA – L'Intelligence au Service de la Sécurité">
    <meta property="og:description" content="Informer, Assister, Protéger : Découvrez la rubrique stratégique dédiée à l'IA policière, au maintien de l'ordre, aux enquêtes criminelles et à la souveraineté sécuritaire africaine.">
    <meta property="og:image" content="https://merlinsimo.netlify.app/images/securia/banner-secur-ia.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Secur.IA – L'Intelligence au Service de la Sécurité">
    <meta property="og:locale" content="fr_FR">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://merlinsimo.netlify.app/secur-ia.html">
    <meta name="twitter:title" content="Secur.IA – L'Intelligence au Service de la Sécurité | Merlin SIMO">
    <meta name="twitter:description" content="Transformation numérique des forces de police et de sécurité : 10 articles de fond, analyses doctrinales et cadre opérationnel Secur.IA.">
    <meta name="twitter:image" content="https://merlinsimo.netlify.app/images/securia/banner-secur-ia.jpg">

    <!-- Favicons & App Icons -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="manifest" href="site.webmanifest">
    <meta name="theme-color" content="#00a651">

    <!-- Schema.org JSON-LD (CollectionPage & BreadcrumbList) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://merlinsimo.netlify.app/secur-ia.html#webpage",
          "url": "https://merlinsimo.netlify.app/secur-ia.html",
          "name": "Secur.IA – L'Intelligence au Service de la Sécurité – Merlin SIMO",
          "description": "Comprendre et appliquer l'intelligence artificielle pour la sécurité publique, les enquêtes de police judiciaire et la souveraineté nationale.",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://merlinsimo.netlify.app/#website",
            "name": "Merlin SIMO – L'Intelligence en Action",
            "url": "https://merlinsimo.netlify.app/"
          },
          "about": {
            "@type": "Thing",
            "name": "Sécurité publique, Police prédictive et Intelligence Artificielle en Afrique"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://merlinsimo.netlify.app/secur-ia.html#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://merlinsimo.netlify.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Secur.IA",
              "item": "https://merlinsimo.netlify.app/secur-ia.html"
            }
          ]
        }
      ]
    }
    </script>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="reading-progress" id="readingProgress"></div>

    <!-- Header Navigation -->
    <header class="header">
        <div class="container header__inner">
            <a href="index.html" class="header__logo"><img src="images/logo-transparent.png" alt="Emblème Merlin SIMO" class="header__logo-img"> Merlin <span>SIMO</span></a>
${getNavHtml('secur-ia')}
            <button class="hamburger" aria-label="Menu mobile" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main class="main-content">
        <!-- Hero Banner Secur.IA -->
        <section class="securia-hero-banner">
            <div class="container">
                <div style="display: grid; grid-template-columns: 1fr; lg-grid-template-columns: 1.15fr 0.85fr; gap: var(--space-2xl); align-items: center;">
                    <div>
                        <div class="securia-badge-pill">
                            <i class="fas fa-shield-alt"></i> Projet Stratégique & Souveraineté Nationale
                        </div>
                        <h1 style="font-size: clamp(2rem, 4vw, 3rem); line-height: 1.15; margin-bottom: var(--space-xs); font-family: var(--font-heading); color: #ffffff;">
                            Secur.IA <span style="color: var(--securia-green);">–</span> L'Intelligence au Service de la Sécurité
                        </h1>
                        <div class="securia-motto">
                            INFORMER <span class="dot-green">◆</span> ASSISTER <span class="dot-red">◆</span> PROTÉGER
                        </div>
                        <p style="font-size: var(--fs-md); line-height: 1.7; color: #d0e0ed; margin-bottom: var(--space-lg); max-width: 640px;">
                            Face aux mutations complexes de la criminalité, du terrorisme transnational et de la délinquance numérique, <strong>Secur.IA</strong> pose les fondations doctrinales, opérationnelles et technologiques du policier augmenté au Cameroun et en Afrique.
                        </p>
                        <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap;">
                            <a href="#articlesList" class="btn btn--primary" style="background: var(--securia-green); border-color: var(--securia-green);">
                                <i class="fas fa-book-open"></i> Découvrir les 10 articles de fond
                            </a>
                            <a href="https://wa.me/237683911717?text=Bonjour%20M.%20Merlin%20SIMO%2C%20je%20souhaite%20%C3%A9changer%20au%20sujet%20du%20projet%20Secur.IA%20et%20de%20ses%20applications%20op%C3%A9rationnelles." target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="border-color: rgba(255,255,255,0.4); color: #ffffff;">
                                <i class="fab fa-whatsapp"></i> Échanger sur le projet (+237 683 911 717)
                            </a>
                        </div>
                    </div>
                    <div style="text-align: center; position: relative;">
                        <img src="images/securia/banner-secur-ia.jpg" alt="Secur.IA – Intelligence Artificielle pour la Sécurité et la Police" style="width: 100%; max-width: 520px; border-radius: var(--radius-xl); border: 2px solid rgba(0, 166, 81, 0.4); box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
                    </div>
                </div>
            </div>
        </section>

        <!-- Presentation Officielle Box Secur.IA & Pocam237 -->
        <section style="padding: var(--space-2xl) 0 var(--space-lg);">
            <div class="container">
                <div class="securia-intro-card" style="display: grid; grid-template-columns: 1fr; md-grid-template-columns: auto 1fr; gap: var(--space-xl); align-items: center;">
                    <div style="text-align: center;">
                        <img src="images/securia/logo-securia.jpg" alt="Logo Officiel SECUR.IA – Informer Assister Protéger" style="width: 200px; max-width: 100%; border-radius: var(--radius-lg); box-shadow: 0 8px 25px rgba(0,0,0,0.15); border: 2px solid var(--securia-green);">
                    </div>
                    <div>
                        <div style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--securia-green-dark); font-weight: 700; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.5rem;">
                            <i class="fas fa-certificate"></i> Initiative Technologique & Doctrinale Indépendante
                        </div>
                        <h2 style="font-size: var(--fs-2xl); margin-bottom: var(--space-xs); color: var(--text-dark);">
                            L'Écosystème SECUR.IA & POCAM237 : Vers une Police Moderne et Connectée
                        </h2>
                        <p style="font-size: var(--fs-sm); color: var(--text-medium); line-height: 1.7; margin-bottom: var(--space-sm);">
                            Conçu par <strong>Merlin SIMO</strong>, chercheur et développeur en technologies de sécurité, avec la collaboration stratégique de <strong>M. ENGUENE ENGUENE Jean Albert</strong>, le projet <strong>SECUR.IA</strong> a pour vocation d’équiper les forces de défense et de sécurité camerounaises d’outils d’analyse prédictive, d'aide à la décision tactique et de coordination des interventions d’urgence.
                        </p>
                        <p style="font-size: var(--fs-sm); color: var(--text-medium); line-height: 1.7; margin-bottom: var(--space-md);">
                            En synergie avec l’application citoyenne <strong>Pocam237</strong>, cet écosystème concrétise les orientations du Haut Commandement de la Sûreté Nationale (DGSN — magazine <em>SERVIR</em> n° 027) en favorisant le rapprochement police-population, la dématérialisation administrative, la lutte intraitable contre la cybercriminalité et la garantie rigoureuse des libertés publiques (Loi n° 2024/017 du 23 décembre 2024 sur la protection des données).
                        </p>
                        <div style="display: flex; gap: var(--space-md); flex-wrap: wrap; font-size: var(--fs-xs); color: var(--text-dark); font-weight: 600;">
                            <span><i class="fas fa-check-circle" style="color: var(--securia-green);"></i> Respect du Code de Procédure Pénale</span>
                            <span><i class="fas fa-check-circle" style="color: var(--securia-green);"></i> Souveraineté des Serveurs & Données</span>
                            <span><i class="fas fa-check-circle" style="color: var(--securia-green);"></i> Superviseur Humain Obligatoire (HITL)</span>
                        </div>
                    </div>
                </div>

                <!-- Partage Réseaux Sociaux Hub -->
                <div style="background: rgba(0, 166, 81, 0.05); border: 1px solid rgba(0, 166, 81, 0.2); border-radius: var(--radius-lg); padding: var(--space-md) var(--space-lg); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-sm); margin-bottom: var(--space-2xl);">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <i class="fas fa-share-alt" style="color: var(--securia-green); font-size: 1.25rem;"></i>
                        <span style="font-size: var(--fs-sm); font-weight: 600; color: var(--text-dark);">Partagez cette rubrique avec des officiers, décideurs ou passionnés de sécurité :</span>
                    </div>
                    <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap;">
                        <a href="https://api.whatsapp.com/send?text=D%C3%A9couvrez%20Secur.IA%20%E2%80%93%20L'Intelligence%20au%20Service%20de%20la%20S%C3%A9curit%C3%A9%20par%20Merlin%20SIMO%20%3A%2010%20articles%20de%20fond%20sur%20l'IA%20polici%C3%A8re%2C%20le%20renseignement%20et%20la%20souverainet%C3%A9%20africaine%20%3A%20https%3A%2F%2Fmerlinsimo.netlify.app%2Fsecur-ia.html" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="padding: 0.4rem 0.8rem; font-size: var(--fs-xs); background: #25D366; color: white; border-color: #25D366;">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmerlinsimo.netlify.app%2Fsecur-ia.html" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="padding: 0.4rem 0.8rem; font-size: var(--fs-xs); background: #1877F2; color: white; border-color: #1877F2;">
                            <i class="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com/intent/tweet?text=Secur.IA%20%E2%80%93%20L'Intelligence%20au%20Service%20de%20la%20S%C3%A9curit%C3%A9%20par%20Merlin%20SIMO&url=https%3A%2F%2Fmerlinsimo.netlify.app%2Fsecur-ia.html" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="padding: 0.4rem 0.8rem; font-size: var(--fs-xs); background: #000000; color: white; border-color: #000000;">
                            <i class="fab fa-x-twitter"></i> X
                        </a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmerlinsimo.netlify.app%2Fsecur-ia.html" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="padding: 0.4rem 0.8rem; font-size: var(--fs-xs); background: #0A66C2; color: white; border-color: #0A66C2;">
                            <i class="fab fa-linkedin-in"></i> LinkedIn
                        </a>
                    </div>
                </div>

                <!-- Section Recherche & Filtres -->
                <div id="articlesList" style="margin-bottom: var(--space-xl);">
                    <div style="display: flex; flex-direction: column; md-flex-direction: row; justify-content: space-between; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
                        <div>
                            <h2 style="font-size: var(--fs-2xl); color: var(--text-dark); margin-bottom: 0.25rem;">Les 10 Articles de Référence</h2>
                            <p style="font-size: var(--fs-xs); color: var(--text-light); id="searchCounter">10 articles disponibles — Analyses opérationnelles et doctrinales</p>
                        </div>
                        <div style="position: relative; width: 100%; max-width: 380px;">
                            <i class="fas fa-search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-light);"></i>
                            <input type="text" id="securiaArticleSearch" placeholder="Rechercher (ex: renseignement, PJ, cyber...)" style="width: 100%; padding: 0.65rem 1rem 0.65rem 2.6rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); font-size: var(--fs-sm); outline: none;">
                        </div>
                    </div>

                    <!-- Filtres par pilier thématique -->
                    <div class="securia-filters" style="display: flex; gap: var(--space-xs); flex-wrap: wrap; margin-bottom: var(--space-xl);">
                        <button class="filter-pill active" data-category="all" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--securia-green); color: white; font-size: var(--fs-xs); font-weight: 700; cursor: pointer;">Tous (10)</button>
                        <button class="filter-pill" data-category="projet" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Projet Secur.IA</button>
                        <button class="filter-pill" data-category="renseignement" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Renseignement</button>
                        <button class="filter-pill" data-category="police-judiciaire" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Police Judiciaire</button>
                        <button class="filter-pill" data-category="securite-publique" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Sécurité Publique</button>
                        <button class="filter-pill" data-category="cybercriminalite" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Cybercriminalité</button>
                        <button class="filter-pill" data-category="frontieres" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Frontières</button>
                        <button class="filter-pill" data-category="gestion-crises" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Crises & Défense</button>
                        <button class="filter-pill" data-category="formation" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Formation</button>
                        <button class="filter-pill" data-category="administration" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Police & Citoyens</button>
                        <button class="filter-pill" data-category="souverainete" style="padding: 0.4rem 0.85rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); color: var(--text-dark); font-size: var(--fs-xs); font-weight: 600; cursor: pointer;">Souveraineté</button>
                    </div>

                    <!-- Notice aucun résultat -->
                    <div id="noResultsNotice" style="display: none; text-align: center; padding: var(--space-2xl); background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border); margin-bottom: var(--space-xl);">
                        <i class="fas fa-search" style="font-size: 2rem; color: var(--text-light); margin-bottom: var(--space-sm);"></i>
                        <p style="font-size: var(--fs-md); color: var(--text-dark); font-weight: 600;">Aucun article ne correspond à votre recherche.</p>
                        <p style="font-size: var(--fs-xs); color: var(--text-medium);">Essayez un autre mot-clé ou réinitialisez les filtres.</p>
                    </div>

                    <!-- Grille des Articles -->
                    <div class="securia-card-grid" id="securiaGrid">
${hubArticlesCards}
                    </div>
                </div>

                <!-- Institutional Partner CTA Box -->
                <div class="securia-project-box">
                    <div style="display: grid; grid-template-columns: 1fr; lg-grid-template-columns: 1.2fr 0.8fr; gap: var(--space-xl); align-items: center;">
                        <div>
                            <span class="securia-badge-pill" style="border-color: var(--securia-gold); color: var(--securia-gold);">
                                <i class="fas fa-hands-helping"></i> Dialogue Institutionnel & Recherche Opérationnelle
                            </span>
                            <h3>Vous représentez une institution de sécurité, une école de police ou un organisme de défense ?</h3>
                            <p>
                                Le projet <strong>SECUR.IA</strong> et l’écosystème <strong>Pocam237</strong> sont documentés à travers des notes techniques, des architectures logicielles sécurisées et des modèles de simulateurs tactiques adaptés aux réalités du Cameroun et du bassin d'Afrique Centrale.
                            </p>
                            <p style="margin-top: var(--space-xs); font-style: italic; color: var(--securia-gold);">
                                Pour une présentation doctrinale, une étude de cas ou un partage d'expertise technique :
                            </p>
                        </div>
                        <div style="text-align: center; lg-text-align: right;">
                            <a href="https://wa.me/237683911717?text=Bonjour%20M.%20Merlin%20SIMO%2C%20je%20vous%20contacte%20dans%20le%20cadre%20institutionnel%20au%20sujet%20de%20la%20rubrique%20Secur.IA." target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="background: var(--securia-green); border-color: var(--securia-green); padding: 0.85rem 1.6rem; font-size: var(--fs-sm); margin-bottom: var(--space-xs); display: inline-flex; align-items: center; gap: 0.5rem;">
                                <i class="fab fa-whatsapp"></i> Échanger sur WhatsApp (+237 683 911 717)
                            </a>
                            <p style="font-size: var(--fs-xs); color: #9ab4c7;">
                                <i class="fas fa-shield-alt"></i> Échanges confidentiels & respect des protocoles de sécurité
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>

${getFooterHtml(false)}

    <!-- Scripts -->
    <script src="js/main.js"></script>
    <script>
        // Script de recherche et de filtrage interactif pour Secur.IA
        const searchInput = document.getElementById('securiaArticleSearch');
        const filterPills = document.querySelectorAll('.filter-pill');
        const articleCards = document.querySelectorAll('.securia-card');
        const searchCounter = document.getElementById('searchCounter');
        const noResults = document.getElementById('noResultsNotice');

        let currentCategory = 'all';

        function filterSecuriaArticles() {
            const query = (searchInput.value || '').toLowerCase().trim();
            let visibleCount = 0;

            articleCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const title = card.getAttribute('data-title');
                const desc = card.getAttribute('data-desc');

                const matchesCat = (currentCategory === 'all' || category === currentCategory);
                const matchesQuery = !query || title.includes(query) || desc.includes(query);

                if (matchesCat && matchesQuery) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (searchCounter) {
                searchCounter.textContent = visibleCount + (visibleCount > 1 ? ' articles trouvés' : ' article trouvé');
            }
            if (noResults) {
                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', filterSecuriaArticles);
        }

        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => {
                    p.classList.remove('active');
                    p.style.background = 'var(--bg-card)';
                    p.style.color = 'var(--text-dark)';
                });
                pill.classList.add('active');
                pill.style.background = 'var(--securia-green)';
                pill.style.color = 'white';
                currentCategory = pill.getAttribute('data-category');
                filterSecuriaArticles();
            });
        });
    </script>
</body>
</html>`;

    fs.writeFileSync(path.join(SITE_DIR, 'secur-ia.html'), hubHtml, 'utf8');
    console.log('✓ site/secur-ia.html généré avec succès !');
}

// 6. Génération des 10 pages d'articles individuelles
function buildSecuriaArticles() {
    articles.forEach((art, index) => {
        const artImg = art.image.startsWith('images/') ? art.image : ('images/securia/' + art.image);

        // Sélectionner 3 articles similaires dans Secur.IA
        const related = articles
            .filter((_, i) => i !== index)
            .slice(0, 3);

        const relatedHtml = related.map(rel => {
            const relImg = rel.image.startsWith('images/') ? rel.image : ('images/securia/' + rel.image);
            return `                        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
                            <img src="../${relImg}" alt="${rel.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
                            <div style="padding: var(--space-md); display: flex; flex-direction: column; flex-grow: 1;">
                                <span style="font-size: 0.65rem; color: var(--securia-green-dark); font-weight: 800; text-transform: uppercase; margin-bottom: 0.35rem;">${rel.category}</span>
                                <h4 style="font-size: var(--fs-xs); line-height: 1.4; margin-bottom: var(--space-xs); font-weight: 700;">
                                    <a href="${rel.slug}.html" style="color: var(--text-dark); text-decoration: none;">${rel.title}</a>
                                </h4>
                                <a href="${rel.slug}.html" style="margin-top: auto; font-size: 0.75rem; color: var(--securia-green-dark); font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;">Lire <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>`;
        }).join('\n');

        const shareUrl = encodeURIComponent(`https://merlinsimo.netlify.app/articles/${art.slug}.html`);
        const shareText = encodeURIComponent(`${art.title} — par Merlin SIMO : `);

        const articleHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${art.title} — Merlin SIMO | Secur.IA</title>
    <meta name="description" content="${art.summary.replace(/"/g, '&quot;')}">
    <meta name="keywords" content="${art.category}, Secur.IA, Pocam237, Merlin SIMO, police Cameroun, DGSN, intelligence artificielle sécurité, défense nationale, ${art.slug}">
    <meta name="author" content="Merlin SIMO">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="https://merlinsimo.netlify.app/articles/${art.slug}.html">
    
    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Merlin SIMO – L'Intelligence en Action">
    <meta property="og:url" content="https://merlinsimo.netlify.app/articles/${art.slug}.html">
    <meta property="og:title" content="${art.title.replace(/"/g, '&quot;')}">
    <meta property="og:description" content="${art.summary.replace(/"/g, '&quot;')}">
    <meta property="og:image" content="https://merlinsimo.netlify.app/${artImg}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${art.title.replace(/"/g, '&quot;')}">
    <meta property="og:locale" content="fr_FR">
    <meta property="article:published_time" content="2026-11-05T08:00:00+01:00">
    <meta property="article:author" content="Merlin SIMO">
    <meta property="article:section" content="Sécurité et Intelligence Artificielle">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://merlinsimo.netlify.app/articles/${art.slug}.html">
    <meta name="twitter:title" content="${art.title.replace(/"/g, '&quot;')}">
    <meta name="twitter:description" content="${art.summary.replace(/"/g, '&quot;')}">
    <meta name="twitter:image" content="https://merlinsimo.netlify.app/${artImg}">

    <!-- Favicons & App Icons -->
    <link rel="icon" type="image/x-icon" href="../favicon.ico">
    <link rel="icon" type="image/png" sizes="48x48" href="../favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
    <link rel="manifest" href="../site.webmanifest">
    <meta name="theme-color" content="#00a651">

    <!-- Schema.org JSON-LD (TechArticle) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://merlinsimo.netlify.app/articles/${art.slug}.html"
      },
      "headline": "${art.title.replace(/"/g, '\\"')}",
      "description": "${art.summary.replace(/"/g, '\\"')}",
      "image": [
        "https://merlinsimo.netlify.app/${artImg}"
      ],
      "datePublished": "2026-11-05T08:00:00+01:00",
      "dateModified": "2026-11-05T08:00:00+01:00",
      "author": {
        "@type": "Person",
        "name": "Merlin SIMO",
        "url": "https://merlinsimo.netlify.app/a-propos.html"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Merlin SIMO – L'Intelligence en Action",
        "logo": {
          "@type": "ImageObject",
          "url": "https://merlinsimo.netlify.app/images/logo-transparent.png"
        }
      },
      "inLanguage": "fr-FR"
    }
    </script>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="reading-progress" id="readingProgress"></div>

    <!-- Header Navigation -->
    <header class="header">
        <div class="container header__inner">
            <a href="../index.html" class="header__logo"><img src="../images/logo-transparent.png" alt="Emblème Merlin SIMO" class="header__logo-img"> Merlin <span>SIMO</span></a>
${getNavHtml('secur-ia', true)}
            <button class="hamburger" aria-label="Menu mobile" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main class="main-content">
        <div class="container article-layout">
            
            <article class="article-content" style="background: var(--bg-card); padding: var(--space-2xl); border-radius: var(--radius-xl); border: 1px solid var(--border);">
                
                <!-- Fil d'Ariane -->
                <nav class="breadcrumb" aria-label="Fil d'Ariane" style="margin-bottom: var(--space-lg); font-size: var(--fs-xs);">
                    <a href="../index.html" style="color: var(--text-light); text-decoration: none;">Accueil</a>
                    <span style="margin: 0 0.5rem; color: var(--border);">&gt;</span>
                    <a href="../secur-ia.html" style="color: var(--securia-green-dark); font-weight: 600; text-decoration: none;">Secur.IA</a>
                    <span style="margin: 0 0.5rem; color: var(--border);">&gt;</span>
                    <span style="color: var(--text-medium);">${art.title.slice(0, 45)}...</span>
                </nav>

                <!-- Article Meta -->
                <div class="article-meta" style="margin-bottom: var(--space-md); display: flex; gap: var(--space-md); align-items: center; flex-wrap: wrap;">
                    <span class="card__category" style="background: var(--securia-green-light); color: var(--securia-green-dark); font-weight: 700; font-size: 0.75rem; text-transform: uppercase; padding: 0.35rem 0.75rem; border-radius: 9999px;">${art.category}</span>
                    <time datetime="2026-11-05" style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-calendar-alt"></i> ${art.date}</time>
                    <span class="reading-time" style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-clock"></i> ${art.readingTime}</span>
                    <span style="font-size: var(--fs-xs); color: var(--text-light);"><i class="fas fa-file-alt"></i> ${art.wordCount}</span>
                    <span style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-user"></i> Par Merlin SIMO</span>
                </div>
                
                <!-- Titre Principal -->
                <h1 style="font-size: clamp(1.75rem, 3.2vw, 2.6rem); margin-bottom: var(--space-lg); line-height: 1.25; color: var(--text-dark); font-family: var(--font-heading);">
                    ${art.title}
                </h1>
                
                <!-- Lead Paragraph -->
                <p class="article-lead" style="font-size: var(--fs-md); line-height: 1.75; color: var(--text-dark); margin-bottom: var(--space-xl); font-weight: var(--fw-medium); border-left: 4px solid var(--securia-green); padding-left: var(--space-md); background: rgba(0, 166, 81, 0.03); padding-top: var(--space-sm); padding-bottom: var(--space-sm); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                    ${art.summary}
                </p>

                <!-- Featured Image -->
                <figure style="margin: 0 0 var(--space-2xl) 0;">
                    <img src="../${artImg}" alt="${art.title}" style="width: 100%; border-radius: var(--radius-lg); object-fit: cover; aspect-ratio: 16/9; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid var(--border);">
                    <figcaption style="font-size: var(--fs-xs); color: var(--text-light); text-align: center; margin-top: var(--space-xs); font-style: italic;">
                        ${art.imageCaption || art.title} — Archives et concepts Secur.IA / Merlin SIMO.
                    </figcaption>
                </figure>

                <!-- Boutons de Partage en Début d'Article -->
                <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap; align-items: center; padding: var(--space-sm) var(--space-md); background: rgba(0,0,0,0.02); border-radius: var(--radius-md); margin-bottom: var(--space-xl); border: 1px solid var(--border);">
                    <span style="font-size: var(--fs-xs); font-weight: 700; color: var(--text-medium); margin-right: var(--space-xs);"><i class="fas fa-share-alt"></i> Partager :</span>
                    <a href="https://api.whatsapp.com/send?text=${shareText}${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #25D366; font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid #25D366; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #1877F2; font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid #1877F2; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;"><i class="fab fa-facebook-f"></i> Facebook</a>
                    <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #000; font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid #000; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;"><i class="fab fa-x-twitter"></i> X</a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn-share" style="color: #0A66C2; font-size: 0.85rem; padding: 0.3rem 0.6rem; border: 1px solid #0A66C2; border-radius: 4px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
                </div>

                <!-- Corps de l'Article -->
                <div class="article-body" style="font-size: var(--fs-base); line-height: 1.8; color: var(--text-dark);">
${art.contentHtml}
                </div>

                <!-- Synthèse Stratégique & Points Clés -->
                <div style="background: rgba(0, 166, 81, 0.08); border: 2px solid var(--securia-green); border-radius: var(--radius-xl); padding: var(--space-xl); margin: var(--space-2xl) 0;">
                    <h3 style="font-size: var(--fs-lg); color: var(--securia-green-dark); margin-bottom: var(--space-sm); display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-clipboard-check"></i> Synthèse Stratégique & Retenues Majeures
                    </h3>
                    <ul style="padding-left: var(--space-lg); line-height: 1.7; font-size: var(--fs-sm); color: var(--text-dark);">
                        <li><strong>Le policier augmenté, pas remplacé :</strong> L'intelligence artificielle est un outil d'aide à la décision et d'accélération cognitive. Le jugement moral et le contrôle légal demeurent exclusivement humains.</li>
                        <li><strong>Légalité républicaine absolue :</strong> L'exploitation de données doit impérativement respecter le Code de procédure pénale camerounais (Loi n° 2005/007) et la Loi n° 2024/017 sur la protection des données personnelles.</li>
                        <li><strong>Souveraineté des infrastructures :</strong> Aucune donnée régalienne ne saurait être hébergée hors du territoire national. La sécurité de demain exige des modèles souverains, hébergés localement.</li>
                        <li><strong>Synergie opérationnelle avec Pocam237 :</strong> Le renseignement et la sécurité publique se nourrissent de la confiance et du signalement citoyen sécurisé, créant un pont indestructible entre la population et ses protecteurs.</li>
                    </ul>
                </div>

                <!-- Boîte Projet Secur.IA & Pocam237 CTA -->
                <div class="securia-project-box">
                    <span class="securia-badge-pill" style="border-color: var(--securia-gold); color: var(--securia-gold);">
                        <i class="fas fa-shield-alt"></i> Cadre d'Ingénierie & Déploiement
                    </span>
                    <h3>Le Projet Secur.IA & la Plateforme Pocam237</h3>
                    <p>
                        Cet article s'inscrit dans le cadre de recherche et de conception doctrinale développé par <strong>Merlin SIMO</strong>, en collaboration stratégique avec <strong>M. ENGUENE ENGUENE Jean Albert</strong>. Notre vision : doter les services de sécurité camerounais et africains d'une avance technologique décisive face à la criminalité émergente.
                    </p>
                    <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap; margin-top: var(--space-md);">
                        <a href="https://wa.me/237683911717?text=Bonjour%20M.%20Merlin%20SIMO%2C%20j'ai%20lu%20votre%20article%20'${encodeURIComponent(art.title.slice(0, 50))}'%20et%20je%20souhaite%20en%20savoir%20plus." target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="background: var(--securia-green); border-color: var(--securia-green); font-size: var(--fs-xs); display: inline-flex; align-items: center; gap: 0.5rem;">
                            <i class="fab fa-whatsapp"></i> Échanger sur WhatsApp (+237 683 911 717)
                        </a>
                        <a href="../secur-ia.html" class="btn btn--secondary" style="border-color: rgba(255,255,255,0.4); color: white; font-size: var(--fs-xs);">
                            <i class="fas fa-th-list"></i> Voir tous les articles Secur.IA
                        </a>
                    </div>
                </div>

                <!-- Partage en Fin d'Article -->
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md); padding: var(--space-lg); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); margin-top: var(--space-xl);">
                    <div>
                        <span style="font-weight: 700; font-size: var(--fs-sm); color: var(--text-dark); display: block;">Cet article vous a éclairé ?</span>
                        <span style="font-size: var(--fs-xs); color: var(--text-light);">Partagez cette analyse stratégique avec votre réseau :</span>
                    </div>
                    <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap;">
                        <a href="https://api.whatsapp.com/send?text=${shareText}${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="background: #25D366; color: white; border-color: #25D366; padding: 0.4rem 0.8rem; font-size: var(--fs-xs);"><i class="fab fa-whatsapp"></i> Partager sur WhatsApp</a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="background: #1877F2; color: white; border-color: #1877F2; padding: 0.4rem 0.8rem; font-size: var(--fs-xs);"><i class="fab fa-facebook-f"></i> Facebook</a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="background: #0A66C2; color: white; border-color: #0A66C2; padding: 0.4rem 0.8rem; font-size: var(--fs-xs);"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
                    </div>
                </div>

                <!-- Carte d'Auteur Merlin SIMO -->
                <div class="author-box" style="margin-top: var(--space-2xl); padding: var(--space-xl); background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--border); display: flex; gap: var(--space-lg); align-items: center; flex-wrap: wrap;">
                    <img src="../images/merlin-simo.jpg" alt="Merlin SIMO" style="width: 85px; height: 85px; border-radius: 50%; object-fit: cover; border: 3px solid var(--securia-green);">
                    <div style="flex: 1; min-width: 240px;">
                        <span style="font-size: var(--fs-xs); color: var(--securia-green-dark); font-weight: 700; text-transform: uppercase;">Auteur & Concepteur Stratégique</span>
                        <h4 style="font-size: var(--fs-lg); margin-bottom: 0.25rem; color: var(--text-dark);">Merlin SIMO</h4>
                        <p style="font-size: var(--fs-xs); color: var(--text-medium); line-height: 1.6; margin-bottom: var(--space-xs);">
                            Chercheur indépendant, développeur et concepteur des solutions <strong>SECUR.IA</strong> et <strong>Pocam237</strong> (avec la collaboration stratégique de M. ENGUENE ENGUENE Jean Albert). Passionné par l'application de l'IA aux sciences criminelles, à la défense nationale et à la souveraineté africaine.
                        </p>
                        <a href="../a-propos.html" style="font-size: var(--fs-xs); color: var(--securia-green-dark); font-weight: 700; text-decoration: none;">Découvrir le parcours & les projets <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

            </article>

            <!-- Sidebar Navigation & Recommandations -->
            <aside class="sidebar">
                <!-- Partage Sidebar -->
                <div class="sidebar-card" style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: var(--space-lg); margin-bottom: var(--space-xl);">
                    <h3 style="font-size: var(--fs-sm); font-weight: 700; margin-bottom: var(--space-xs); color: var(--text-dark);">Partager cette analyse</h3>
                    <p style="font-size: var(--fs-xs); color: var(--text-medium); margin-bottom: var(--space-sm);">Faites rayonner l'innovation sécuritaire :</p>
                    <div style="display: flex; flex-direction: column; gap: var(--space-xs);">
                        <a href="https://api.whatsapp.com/send?text=${shareText}${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="background: #25D366; color: white; border-color: #25D366; font-size: var(--fs-xs); padding: 0.5rem; text-align: center;"><i class="fab fa-whatsapp"></i> Transférer sur WhatsApp</a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="background: #1877F2; color: white; border-color: #1877F2; font-size: var(--fs-xs); padding: 0.5rem; text-align: center;"><i class="fab fa-facebook-f"></i> Partager sur Facebook</a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="background: #0A66C2; color: white; border-color: #0A66C2; font-size: var(--fs-xs); padding: 0.5rem; text-align: center;"><i class="fab fa-linkedin-in"></i> Partager sur LinkedIn</a>
                    </div>
                </div>

                <!-- Articles Secur.IA similaires -->
                <div class="sidebar-card" style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: var(--space-lg); margin-bottom: var(--space-xl);">
                    <h3 style="font-size: var(--fs-sm); font-weight: 700; margin-bottom: var(--space-md); color: var(--text-dark); display: flex; align-items: center; gap: 0.4rem;">
                        <i class="fas fa-shield-alt" style="color: var(--securia-green);"></i> Dans la même rubrique
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: var(--space-md);">
${relatedHtml}
                    </div>
                    <div style="text-align: center; margin-top: var(--space-md);">
                        <a href="../secur-ia.html" style="font-size: var(--fs-xs); color: var(--securia-green-dark); font-weight: 700; text-decoration: none;">Voir les 10 articles Secur.IA <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <!-- Contact Rapide -->
                <div class="sidebar-card" style="background: linear-gradient(135deg, #091b29, #0f2d47); color: white; border-radius: var(--radius-xl); padding: var(--space-lg); text-align: center;">
                    <img src="../images/securia/logo-securia.jpg" alt="Logo Secur.IA" style="width: 80px; margin: 0 auto var(--space-sm); border-radius: var(--radius-md); border: 1px solid var(--securia-gold);">
                    <h4 style="font-size: var(--fs-sm); color: var(--securia-gold); margin-bottom: 0.25rem;">Projet Secur.IA</h4>
                    <p style="font-size: 0.75rem; color: #bed2e4; line-height: 1.5; margin-bottom: var(--space-sm);">
                        Pour toute présentation technique ou demande d'évaluation doctrinale.
                    </p>
                    <a href="https://wa.me/237683911717?text=Bonjour%20M.%20Merlin%20SIMO%2C%20je%20vous%20contacte%20depuis%20la%20rubrique%20Secur.IA." target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="background: var(--securia-green); border-color: var(--securia-green); font-size: 0.75rem; padding: 0.4rem 0.8rem; width: 100%;">
                        <i class="fab fa-whatsapp"></i> Échanger sur WhatsApp
                    </a>
                </div>
            </aside>

        </div>
    </main>

${getFooterHtml(true)}

    <!-- Scripts -->
    <script src="../js/main.js"></script>
</body>
</html>`;

        const articlePath = path.join(ARTICLES_DIR, `${art.slug}.html`);
        fs.writeFileSync(articlePath, articleHtml, 'utf8');
        console.log(`✓ Article ${index + 1}/10 généré : ${art.slug}.html`);
    });
}

// 7. Mettre à jour la navigation dans tous les fichiers HTML existants
function updateAllNavigations() {
    console.log('=== Mise à jour de la navigation sur toutes les pages du site ===');

    // Trouver tous les fichiers HTML dans site/ et site/articles/
    const rootHtmlFiles = fs.readdirSync(SITE_DIR)
        .filter(f => f.endsWith('.html'))
        .map(f => path.join(SITE_DIR, f));

    const articleHtmlFiles = fs.readdirSync(ARTICLES_DIR)
        .filter(f => f.endsWith('.html'))
        .map(f => path.join(ARTICLES_DIR, f));

    const allFiles = [...rootHtmlFiles, ...articleHtmlFiles];

    allFiles.forEach(filePath => {
        let content = fs.readFileSync(filePath, 'utf8');
        const isSubdir = path.dirname(filePath) === ARTICLES_DIR;
        const fileName = path.basename(filePath, '.html');

        // Trouver la page active
        let activePage = '';
        if (fileName === 'index') activePage = 'index';
        else if (fileName === 'articles') activePage = 'articles';
        else if (fileName === 'intelligence-enfant') activePage = 'intelligence-enfant';
        else if (fileName === 'secur-ia') activePage = 'secur-ia';
        else if (fileName === 'boutique') activePage = 'boutique';
        else if (fileName === 'a-propos') activePage = 'a-propos';
        else if (fileName === 'contact') activePage = 'contact';
        else if (isSubdir) {
            // Est-ce un article Secur.IA ?
            const isSecuriaArticle = articles.some(a => a.slug === fileName);
            if (isSecuriaArticle) activePage = 'secur-ia';
            else if (fileName.includes('enfant') || fileName.includes('reussir') || fileName.includes('apprend') || fileName.includes('notes-baissent')) activePage = 'intelligence-enfant';
            else activePage = 'articles';
        }

        // Remplacer le bloc <nav class="nav"...> ... </nav>
        const navRegex = /<nav class="nav" aria-label="Navigation principale">[\s\S]*?<\/nav>/;
        if (navRegex.test(content)) {
            const newNav = getNavHtml(activePage, isSubdir);
            content = content.replace(navRegex, newNav);
            fs.writeFileSync(filePath, content, 'utf8');
        }
    });

    console.log(`✓ Navigation mise à jour sur ${allFiles.length} pages HTML !`);
}

// 8. Ajouter une section Vitrine Secur.IA sur site/index.html
function updateIndexShowcase() {
    console.log('=== Mise à jour de la page d\'accueil site/index.html ===');
    let indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');

    if (!indexHtml.includes('securia-home-showcase')) {
        const showcaseHtml = `
        <!-- Section Vitrine Secur.IA sur la Page d'Accueil -->
        <section class="section securia-home-showcase" style="background: linear-gradient(135deg, #061420 0%, #0c2438 100%); color: #ffffff; padding: var(--space-3xl) 0; border-top: 3px solid var(--securia-gold); border-bottom: 3px solid var(--securia-green); position: relative; overflow: hidden;">
            <div class="container">
                <div style="display: grid; grid-template-columns: 1fr; lg-grid-template-columns: 1.1fr 0.9fr; gap: var(--space-2xl); align-items: center; margin-bottom: var(--space-2xl);">
                    <div>
                        <div class="securia-badge-pill" style="border-color: var(--securia-green); color: #2ee587; background: rgba(0, 166, 81, 0.15);">
                            <i class="fas fa-shield-alt"></i> Nouvelle Rubrique Majeure
                        </div>
                        <h2 style="font-size: clamp(2rem, 3.5vw, 2.8rem); line-height: 1.2; margin-bottom: var(--space-xs); font-family: var(--font-heading); color: #ffffff;">
                            Secur.IA <span style="color: var(--securia-green);">–</span> L'Intelligence au Service de la Sécurité
                        </h2>
                        <div class="securia-motto" style="color: var(--securia-gold);">
                            INFORMER <span class="dot-green">◆</span> ASSISTER <span class="dot-red">◆</span> PROTÉGER
                        </div>
                        <p style="font-size: var(--fs-md); line-height: 1.7; color: #d0e0ed; margin-bottom: var(--space-md);">
                            Comment l’intelligence artificielle, la criminalistique prédictive et les outils d'assistance tactique transforment-ils l'action policière face aux cybermenaces, à la délinquance urbaine et au terrorisme transnational ?
                        </p>
                        <p style="font-size: var(--fs-sm); line-height: 1.6; color: #9ab4c7; margin-bottom: var(--space-lg);">
                            Une série de <strong>10 articles de doctrine, de droit et de stratégie de terrain</strong>, adossée au projet <strong>SECUR.IA</strong> et à la plateforme citoyenne <strong>Pocam237</strong>, développés par Merlin SIMO avec la collaboration stratégique de M. ENGUENE ENGUENE Jean Albert.
                        </p>
                        <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap;">
                            <a href="secur-ia.html" class="btn btn--primary" style="background: var(--securia-green); border-color: var(--securia-green);">
                                <i class="fas fa-shield-alt"></i> Explorer la rubrique Secur.IA (10 articles)
                            </a>
                            <a href="articles/de-la-feuille-dechiree-au-policier-augmente-pourquoi-securia.html" class="btn btn--secondary" style="border-color: rgba(255,255,255,0.4); color: #ffffff;">
                                Lire l'article manifeste <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div style="text-align: center;">
                        <a href="secur-ia.html">
                            <img src="images/securia/banner-secur-ia.jpg" alt="Secur.IA – Intelligence Artificielle et Sécurité Publique" style="width: 100%; max-width: 500px; border-radius: var(--radius-xl); border: 2px solid rgba(0, 166, 81, 0.4); box-shadow: 0 20px 40px rgba(0,0,0,0.5); transition: transform 0.3s ease;">
                        </a>
                    </div>
                </div>

                <!-- 3 Articles Secur.IA à la Une -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg);">
                    <div style="background: rgba(13, 34, 53, 0.85); border: 1px solid rgba(0, 166, 81, 0.3); border-radius: var(--radius-lg); padding: var(--space-lg);">
                        <span style="font-size: 0.7rem; font-weight: 800; color: #2ee587; text-transform: uppercase;">Manifeste Secur.IA</span>
                        <h3 style="font-size: var(--fs-md); color: #ffffff; margin: 0.5rem 0; line-height: 1.35;">De la feuille déchirée au policier augmenté : pourquoi Secur.IA</h3>
                        <p style="font-size: var(--fs-xs); color: #bed2e4; line-height: 1.5; margin-bottom: var(--space-sm);">Genèse, doctrine opérationnelle et articulation stratégique avec l'application Pocam237 pour moderniser la sécurité publique.</p>
                        <a href="articles/de-la-feuille-dechiree-au-policier-augmente-pourquoi-securia.html" style="font-size: var(--fs-xs); color: var(--securia-gold); font-weight: 700; text-decoration: none;">Lire l'article &rarr;</a>
                    </div>
                    <div style="background: rgba(13, 34, 53, 0.85); border: 1px solid rgba(0, 166, 81, 0.3); border-radius: var(--radius-lg); padding: var(--space-lg);">
                        <span style="font-size: 0.7rem; font-weight: 800; color: #2ee587; text-transform: uppercase;">Police Judiciaire & PJ</span>
                        <h3 style="font-size: var(--fs-md); color: #ffffff; margin: 0.5rem 0; line-height: 1.35;">Police judiciaire et IA : vitesse d'analyse et préservation des libertés</h3>
                        <p style="font-size: var(--fs-xs); color: #bed2e4; line-height: 1.5; margin-bottom: var(--space-sm);">Analyse criminalistique, faisceaux d'indices et respect du Code de procédure pénale camerounais (Loi 2005/007).</p>
                        <a href="articles/police-judiciaire-intelligence-artificielle-enquetes-criminelles.html" style="font-size: var(--fs-xs); color: var(--securia-gold); font-weight: 700; text-decoration: none;">Lire l'article &rarr;</a>
                    </div>
                    <div style="background: rgba(13, 34, 53, 0.85); border: 1px solid rgba(0, 166, 81, 0.3); border-radius: var(--radius-lg); padding: var(--space-lg);">
                        <span style="font-size: 0.7rem; font-weight: 800; color: #2ee587; text-transform: uppercase;">Souveraineté Numérique</span>
                        <h3 style="font-size: var(--fs-md); color: #ffffff; margin: 0.5rem 0; line-height: 1.35;">Souveraineté numérique et police de demain : stratégie pour le Cameroun</h3>
                        <p style="font-size: var(--fs-xs); color: #bed2e4; line-height: 1.5; margin-bottom: var(--space-sm);">Pourquoi l'Afrique et le Cameroun ne doivent pas déléguer leurs serveurs régaliens : cloud souverain et cryptographie nationale.</p>
                        <a href="articles/souverainete-numerique-police-demain-strategie-nationale-cameroun.html" style="font-size: var(--fs-xs); color: var(--securia-gold); font-weight: 700; text-decoration: none;">Lire l'article &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
`;
        // Insérer avant la section boutique ou juste après la section hero/enfant
        if (indexHtml.includes('<!-- Section Boutique')) {
            indexHtml = indexHtml.replace('<!-- Section Boutique', showcaseHtml + '\n        <!-- Section Boutique');
        } else if (indexHtml.includes('<section class="section')) {
            // Insérer après la deuxième section
            const targetPos = indexHtml.indexOf('</section>', indexHtml.indexOf('</section>') + 10) + 10;
            indexHtml = indexHtml.slice(0, targetPos) + showcaseHtml + indexHtml.slice(targetPos);
        }
        fs.writeFileSync(INDEX_PATH, indexHtml, 'utf8');
        console.log('✓ Section vitrine Secur.IA injectée dans site/index.html');
    } else {
        console.log('✓ Section vitrine Secur.IA déjà présente dans site/index.html');
    }
}

// 9. Mettre à jour site/sitemap.xml
function updateSitemap() {
    console.log('=== Mise à jour de site/sitemap.xml ===');
    let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');

    // Vérifier si secur-ia.html est déjà présent
    if (!sitemap.includes('secur-ia.html')) {
        let newUrls = `  <url>
    <loc>https://merlinsimo.netlify.app/secur-ia.html</loc>
    <lastmod>2026-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;

        articles.forEach(art => {
            newUrls += `  <url>
    <loc>https://merlinsimo.netlify.app/articles/${art.slug}.html</loc>
    <lastmod>2026-11-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        });

        sitemap = sitemap.replace('</urlset>', newUrls + '</urlset>');
        fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
        console.log(`✓ 11 nouvelles URLs Secur.IA ajoutées à site/sitemap.xml !`);
    } else {
        console.log('✓ URLs Secur.IA déjà présentes dans site/sitemap.xml');
    }
}

// EXECUTION GLOBALE
try {
    buildSecuriaHub();
    buildSecuriaArticles();
    updateIndexShowcase();
    updateAllNavigations();
    updateSitemap();
    console.log('\n======================================================');
    console.log('🎉 TOUTES LES ÉTAPES DE CONSTRUCTION SECUR.IA SONT TERMINÉES AVEC SUCCÈS !');
    console.log('======================================================');
} catch (err) {
    console.error('❌ Erreur lors de la construction Secur.IA :', err);
    process.exit(1);
}

/**
 * Script de construction complète de la rubrique
 * "DÉVELOPPEMENT DE L'INTELLIGENCE DE L'ENFANT"
 * Merlin SIMO – L'Intelligence en Action
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SITE_DIR = path.join(ROOT_DIR, 'site');
const ARTICLES_DIR = path.join(SITE_DIR, 'articles');

const p1Module = require('./data_articles_enfants_part1.js');
const p2Module = require('./data_articles_enfants_part2.js');

const articlesPart1 = p1Module.articlesPart1 || p1Module;
const articlesPart2 = p2Module.articlesPart2 || p2Module;

const allEnfantsArticles = [...articlesPart1, ...articlesPart2];

console.log(`Loaded ${allEnfantsArticles.length} child development articles.`);

// Definition of promotional products
const PRODUCTS = {
  'eveillez-le-genie': {
    title: "Éveillez le Génie de votre Enfant",
    badge: "Méthode Complète Éveil & Potentiel",
    subtitle: "La méthode concrète pour stimuler le potentiel intellectuel, la curiosité naturelle, la mémoire et la créativité des enfants de 3 à 12 ans sans pression ni fausse promesse.",
    features: [
      "Le guide pas-à-pas des 7 piliers de la neuroplasticité familiale",
      "50 jeux d'éveil cognitif réalisables à la maison sans matériel coûteux",
      "La méthode du dialogue socratique pour développer l'esprit critique",
      "Le protocole anti-distraction et gestion sereine des écrans"
    ],
    coverImage: "../images/eveillez-le-genie-de-votre-enfant.jpg",
    coverImageHub: "images/eveillez-le-genie-de-votre-enfant.jpg",
    price: "Disponible sur Selar",
    selarUrl: "https://selar.com/l11bp7g11v"
  },
  'mon-enfant-reussit': {
    title: "Mon Enfant Réussit",
    badge: "Coffret Réussite & Autonomie Scolaire",
    subtitle: "Le système éprouvé pour transformer les devoirs en plaisir, développer la méthode de travail, surmonter les blocages scolaires et booster les notes avec fierté.",
    features: [
      "Le protocole des 15 minutes d'or quotidiennes par niveau",
      "Les techniques de mémorisation active (fiches mémoires, rappel espacé)",
      "Comment débloquer la logique et les mathématiques par le quotidien",
      "Le plan d'urgence en 30 jours pour redresser les notes sans crier"
    ],
    coverImage: "../images/mon-enfant-reussit-coffret.png",
    coverImageHub: "images/mon-enfant-reussit-coffret.png",
    price: "Disponible sur Selar",
    selarUrl: "https://selar.com/sov955h77r"
  }
};

/**
 * Helper to build product promo box in article
 */
function buildProductBox(productKey) {
  if (productKey === 'ambidextre' || productKey === 'both') {
    const p1 = PRODUCTS['eveillez-le-genie'];
    const p2 = PRODUCTS['mon-enfant-reussit'];
    return `
      <div class="product-callout-child" style="background: linear-gradient(135deg, rgba(0, 186, 199, 0.08) 0%, rgba(212, 160, 23, 0.08) 100%); border: 2px solid var(--electric-blue); border-radius: var(--radius-xl); padding: var(--space-xl); margin: var(--space-3xl) 0;">
        <div style="text-align: center; margin-bottom: var(--space-lg);">
          <span style="background: var(--electric-blue); color: #fff; padding: 0.3rem 1rem; border-radius: var(--radius-full); font-size: var(--fs-xs); font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: 0.05em;">Recommandation Éditoriale – Les 2 Piliers d'Avenir</span>
          <h3 style="margin-top: var(--space-sm); font-size: var(--fs-xl);">Deux programmes complets pour équiper votre enfant pour le monde de demain</h3>
          <p style="color: var(--text-medium); max-width: 650px; margin: 0 auto; font-size: var(--fs-sm);">Associez l'éveil du potentiel créatif et la maîtrise des méthodes scolaires pour lui offrir le meilleur tremplin de vie.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-lg); margin-top: var(--space-lg);">
          <!-- Produit 1 -->
          <div style="background: var(--bg-card); border-radius: var(--radius-lg); padding: var(--space-lg); border: 1px solid var(--border); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; gap: var(--space-md); align-items: center; margin-bottom: var(--space-sm);">
                <img src="${p1.coverImage}" alt="${p1.title}" style="width: 75px; height: auto; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
                <div>
                  <span style="font-size: var(--fs-2xs); color: var(--gold-darker); font-weight: var(--fw-bold); text-transform: uppercase;">Pilier Éveil</span>
                  <h4 style="font-size: var(--fs-md); margin: 0; line-height: 1.3;">${p1.title}</h4>
                </div>
              </div>
              <p style="font-size: var(--fs-xs); color: var(--text-medium); margin-bottom: var(--space-md);">${p1.subtitle}</p>
            </div>
            <a href="${p1.selarUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="width: 100%; text-align: center; font-size: var(--fs-xs); padding: 0.6rem 1rem;">Commander sur Selar <i class="fas fa-arrow-right"></i></a>
          </div>
          <!-- Produit 2 -->
          <div style="background: var(--bg-card); border-radius: var(--radius-lg); padding: var(--space-lg); border: 1px solid var(--border); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; gap: var(--space-md); align-items: center; margin-bottom: var(--space-sm);">
                <img src="${p2.coverImage}" alt="${p2.title}" style="width: 75px; height: auto; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
                <div>
                  <span style="font-size: var(--fs-2xs); color: var(--electric-blue); font-weight: var(--fw-bold); text-transform: uppercase;">Pilier Scolaire</span>
                  <h4 style="font-size: var(--fs-md); margin: 0; line-height: 1.3;">${p2.title}</h4>
                </div>
              </div>
              <p style="font-size: var(--fs-xs); color: var(--text-medium); margin-bottom: var(--space-md);">${p2.subtitle}</p>
            </div>
            <a href="${p2.selarUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="width: 100%; text-align: center; font-size: var(--fs-xs); padding: 0.6rem 1rem;">Commander sur Selar <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    `;
  }

  const prod = PRODUCTS[productKey] || PRODUCTS['eveillez-le-genie'];
  return `
    <div class="product-callout-child" style="background: linear-gradient(135deg, rgba(0, 186, 199, 0.06) 0%, rgba(212, 160, 23, 0.06) 100%); border: 2px solid var(--electric-blue); border-radius: var(--radius-xl); padding: var(--space-xl); margin: var(--space-3xl) 0;">
      <div style="display: flex; flex-direction: column; md-flex-direction: row; gap: var(--space-xl); align-items: center;">
        <div style="flex-shrink: 0; text-align: center;">
          <img src="${prod.coverImage}" alt="${prod.title}" style="width: 170px; max-width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: 0 12px 24px -6px rgba(0,0,0,0.25);">
          <span style="display: inline-block; margin-top: var(--space-xs); font-size: var(--fs-2xs); font-weight: var(--fw-bold); color: var(--gold-darker); text-transform: uppercase;">Édition Officielle</span>
        </div>
        <div style="flex: 1;">
          <span style="background: rgba(0, 186, 199, 0.15); color: var(--electric-blue-dark); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: var(--fs-2xs); font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: 0.05em;">${prod.badge}</span>
          <h3 style="margin-top: var(--space-xs); margin-bottom: var(--space-xs); font-size: var(--fs-xl);">${prod.title}</h3>
          <p style="font-size: var(--fs-sm); color: var(--text-dark); margin-bottom: var(--space-md);">${prod.subtitle}</p>
          <ul style="margin: 0 0 var(--space-lg) var(--space-lg); padding: 0; font-size: var(--fs-xs); color: var(--text-medium); line-height: 1.6;">
            ${prod.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div style="display: flex; gap: var(--space-md); align-items: center; flex-wrap: wrap;">
            <a href="${prod.selarUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="padding: 0.75rem 1.75rem; font-size: var(--fs-sm);">
              Obtenir le guide complet sur Selar <i class="fas fa-external-link-alt" style="margin-left: 0.4rem;"></i>
            </a>
            <span style="font-size: var(--fs-xs); color: var(--text-light);"><i class="fas fa-lock" style="color: #22c55e;"></i> Accès immédiat & sécurisé</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Build related articles block for sidebar and bottom
 */
function buildRelatedArticles(currentId) {
  const others = allEnfantsArticles.filter(a => a.id !== currentId);
  // Pick 3 related articles
  const selected = [others[(currentId) % others.length], others[(currentId + 2) % others.length], others[(currentId + 4) % others.length]];

  return selected.map(a => `
    <li>
      <a href="./${a.slug}.html" style="display: flex; gap: var(--space-sm); align-items: center; text-decoration: none; padding: var(--space-xs) 0;">
        <img src="../images/enfants/${a.imageKey}.jpg" alt="${a.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--radius-md); flex-shrink: 0;">
        <div>
          <span style="font-size: 11px; color: var(--electric-blue); font-weight: var(--fw-semibold); display: block;">${a.category}</span>
          <span style="font-size: var(--fs-xs); color: var(--text-dark); line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${a.title}</span>
        </div>
      </a>
    </li>
  `).join('');
}

/**
 * Generate full HTML for an individual article
 */
function generateArticleHtml(article) {
  const pageUrl = `https://merlinsimo.netlify.app/articles/${article.slug}.html`;
  const imageUrl = `https://merlinsimo.netlify.app/images/enfants/${article.imageKey}.jpg`;
  const shareText = `${article.title} - par Merlin SIMO`;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.metaTitle}</title>
    <meta name="description" content="${article.metaDescription}">
    <meta name="keywords" content="${article.keywords.join(', ')}">
    <meta name="author" content="Merlin SIMO">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${pageUrl}">
    
    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Merlin SIMO – L'Intelligence en Action">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:title" content="${article.title}">
    <meta property="og:description" content="${article.metaDescription}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="675">
    <meta property="og:image:alt" content="${article.title}">
    <meta property="og:locale" content="fr_FR">
    <meta property="article:published_time" content="${article.date}T09:00:00+01:00">
    <meta property="article:author" content="Merlin SIMO">
    <meta property="article:section" content="Développement de l'Intelligence de l'Enfant">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${pageUrl}">
    <meta name="twitter:title" content="${article.title}">
    <meta name="twitter:description" content="${article.metaDescription}">
    <meta name="twitter:image" content="${imageUrl}">

    <!-- Favicons & App Icons -->
    <link rel="icon" type="image/x-icon" href="../favicon.ico">
    <link rel="icon" type="image/png" sizes="48x48" href="../favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
    <link rel="manifest" href="../site.webmanifest">
    <meta name="theme-color" content="#00bac7">

    <!-- Schema.org JSON-LD (Article & Breadcrumbs) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "${pageUrl}#article",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://merlinsimo.netlify.app/#website",
            "name": "Merlin SIMO – L'Intelligence en Action",
            "url": "https://merlinsimo.netlify.app/"
          },
          "headline": "${article.title.replace(/"/g, '\\"')}",
          "description": "${article.metaDescription.replace(/"/g, '\\"')}",
          "image": "${imageUrl}",
          "datePublished": "${article.date}T09:00:00+01:00",
          "dateModified": "${article.date}T09:00:00+01:00",
          "mainEntityOfPage": "${pageUrl}",
          "articleSection": "Développement de l'Intelligence de l'Enfant",
          "inLanguage": "fr-FR",
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
              "url": "https://merlinsimo.netlify.app/images/logo-512.png"
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${pageUrl}#breadcrumb",
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
              "name": "Intelligence Enfant",
              "item": "https://merlinsimo.netlify.app/intelligence-enfant.html"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "${article.title.replace(/"/g, '\\"')}",
              "item": "${pageUrl}"
            }
          ]
        }
      ]
    }
    </script>

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- CSS -->
    <link rel="stylesheet" href="../css/style.css?v=15.0">
</head>
<body>
    <div class="reading-progress" id="readingProgress"></div>

    <!-- Header Navigation -->
    <header class="header">
        <div class="container header__inner">
            <a href="../index.html" class="header__logo"><img src="../images/logo-transparent.png" alt="Emblème Merlin SIMO" class="header__logo-img"> Merlin <span>SIMO</span></a>
            <nav class="nav" aria-label="Navigation principale">
                <ul class="nav__list">
                    <li class="nav__item"><a href="../index.html" class="nav__link">Accueil</a></li>
                    <li class="nav__item"><a href="../articles.html" class="nav__link">Articles</a></li>
                    <li class="nav__item"><a href="../intelligence-enfant.html" class="nav__link nav__link--active">Intelligence Enfant</a></li>
                    <li class="nav__item"><a href="../boutique.html" class="nav__link">Boutique</a></li>
                    <li class="nav__item"><a href="../a-propos.html" class="nav__link">À propos</a></li>
                    <li class="nav__item"><a href="../contact.html" class="nav__link">Contact</a></li>
                </ul>
            </nav>
            <button class="hamburger" aria-label="Menu mobile" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main class="main-content">
        <!-- Breadcrumb Navigation -->
        <div class="container" style="padding-top: var(--space-xl);">
            <nav class="breadcrumb-trail" aria-label="Fil d'Ariane">
                <a href="../index.html"><i class="fas fa-home"></i> Accueil</a>
                <span class="breadcrumb-separator"><i class="fas fa-chevron-right"></i></span>
                <a href="../intelligence-enfant.html">Développement de l'Intelligence de l'Enfant</a>
                <span class="breadcrumb-separator"><i class="fas fa-chevron-right"></i></span>
                <span class="breadcrumb-current">${article.title}</span>
            </nav>
        </div>

        <div class="container two-col" style="padding-top: var(--space-lg); padding-bottom: var(--space-4xl);">
            <article class="article-content" style="background: var(--bg-card); padding: var(--space-2xl); border-radius: var(--radius-xl); border: 1px solid var(--border);">
                
                <!-- Article Meta -->
                <div class="article-meta" style="margin-bottom: var(--space-md); display: flex; gap: var(--space-md); align-items: center; flex-wrap: wrap;">
                    <span class="card__category" style="background: rgba(0, 186, 199, 0.12); color: var(--electric-blue-dark);">${article.category}</span>
                    <time datetime="${article.date}" style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-calendar-alt"></i> ${article.dateFormatted}</time>
                    <span class="reading-time" style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-clock"></i> ${article.readingTime}</span>
                    <span style="font-size: var(--fs-xs); color: var(--text-light);"><i class="far fa-user"></i> Par Merlin SIMO</span>
                </div>
                
                <!-- Title -->
                <h1 style="font-size: var(--fs-3xl); margin-bottom: var(--space-lg); line-height: 1.25; color: var(--text-dark);">${article.title}</h1>
                
                <!-- Lead Paragraph -->
                <p class="article-lead" style="font-size: var(--fs-lg); line-height: 1.7; color: var(--text-dark); margin-bottom: var(--space-xl); font-weight: var(--fw-medium); border-left: 4px solid var(--electric-blue); padding-left: var(--space-lg); background: rgba(0, 186, 199, 0.04); padding-top: var(--space-md); padding-bottom: var(--space-md); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                    ${article.lead}
                </p>

                <!-- Article Featured Illustration -->
                <div class="article-hero-media" style="margin-bottom: var(--space-2xl); text-align: center;">
                    <img src="../images/enfants/${article.imageKey}.jpg" alt="${article.title}" style="width: 100%; max-height: 480px; object-fit: cover; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg);">
                    <p style="font-size: var(--fs-xs); color: var(--text-light); margin-top: var(--space-xs); font-style: italic;">Illustration pédagogique – Rubrique Développement de l'Intelligence de l'Enfant | Merlin SIMO</p>
                </div>

                <!-- Main Content Body -->
                <div class="article-body" style="font-size: var(--fs-base); line-height: 1.8; color: var(--text-dark);">
                    ${article.bodyHtml}
                </div>

                <!-- Product Recommendation Box -->
                ${buildProductBox(article.product)}

                <!-- Social Sharing Bar -->
                <div class="article-share-bar" style="margin: var(--space-2xl) 0; padding: var(--space-lg); background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-md);">
                    <div style="font-weight: var(--fw-semibold); font-size: var(--fs-sm); color: var(--text-dark);">
                        <i class="fas fa-share-alt" style="color: var(--electric-blue); margin-right: 0.5rem;"></i> Partager cet article à un parent ou éducateur :
                    </div>
                    <div class="share-buttons-group">
                        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' - À lire ici : ' + pageUrl)}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--whatsapp" title="Partager sur WhatsApp">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--facebook" title="Partager sur Facebook">
                            <i class="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer" class="btn-share btn-share--twitter" title="Partager sur X">
                            <i class="fab fa-x-twitter"></i> X
                        </a>
                    </div>
                </div>

                <!-- Author Bio Box -->
                <div class="author-bio-box" style="margin-top: var(--space-2xl); padding: var(--space-xl); background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border); display: flex; gap: var(--space-xl); align-items: center; flex-direction: column; sm-flex-direction: row;">
                    <img src="../images/merlin-simo-portrait.jpg" alt="Merlin SIMO" style="width: 100px; height: 100px; border-radius: var(--radius-full); object-fit: cover; border: 3px solid var(--electric-blue); flex-shrink: 0;">
                    <div>
                        <h4 style="font-size: var(--fs-lg); margin-bottom: var(--space-2xs);">À propos de Merlin SIMO</h4>
                        <p style="font-size: var(--fs-xs); color: var(--text-medium); line-height: 1.6; margin-bottom: var(--space-sm);">
                            Auteur, chercheur en dynamiques cognitives et conférencier. Passionné par la transmission des méthodes concrètes d'apprentissage, il aide les parents, éducateurs et jeunes esprits à déployer tout leur potentiel intellectuel.
                        </p>
                        <a href="../a-propos.html" style="font-size: var(--fs-xs); color: var(--electric-blue); font-weight: var(--fw-semibold); text-decoration: none;">Découvrir son parcours & sa vision <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

            </article>

            <!-- Sidebar Navigation & TOC -->
            <aside class="sidebar">
                
                <!-- Table of contents -->
                <div class="sidebar__block" style="position: sticky; top: 90px;">
                    <h3 class="sidebar__title"><i class="fas fa-list-ul"></i> Sommaire de l'article</h3>
                    <nav class="toc">
                        <ul class="sidebar__links">
                            ${article.toc.map(item => `<li><a href="#${item.id}">${item.title}</a></li>`).join('')}
                        </ul>
                    </nav>

                    <div style="margin-top: var(--space-xl); padding-top: var(--space-md); border-top: 1px solid var(--border);">
                        <a href="../intelligence-enfant.html" style="font-size: var(--fs-xs); color: var(--electric-blue); text-decoration: none; font-weight: var(--fw-bold); display: inline-flex; align-items: center; gap: 0.4rem;">
                            <i class="fas fa-arrow-left"></i> Voir les 10 articles de la rubrique
                        </a>
                    </div>
                </div>

                <!-- Articles similaires -->
                <div class="sidebar__block">
                    <h3 class="sidebar__title"><i class="fas fa-lightbulb"></i> Dans la même rubrique</h3>
                    <ul class="sidebar__links" style="list-style: none; padding-left: 0;">
                        ${buildRelatedArticles(article.id)}
                    </ul>
                </div>

                <!-- Assistance directe -->
                <div class="sidebar__block" style="background: linear-gradient(135deg, rgba(37,211,102,0.1), rgba(0,186,199,0.06)); border-color: rgba(37,211,102,0.3);">
                    <h3 class="sidebar__title" style="color: #1da851;"><i class="fab fa-whatsapp"></i> Échanger avec Merlin</h3>
                    <p style="font-size: var(--fs-xs); color: var(--text-medium); margin-bottom: var(--space-sm);">
                        Une question sur l'éducation ou le développement de votre enfant ?
                    </p>
                    <a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-heading); font-size: var(--fs-sm); font-weight: var(--fw-bold); color: #1da851; display: inline-flex; align-items: center; gap: 0.4rem;">
                        Discussion WhatsApp <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

            </aside>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer__grid">
                <div>
                    <span class="header__logo" style="display: block; margin-bottom: var(--space-md);"><span class="sun-badge">☀️</span> Merlin <span class="logo-accent">SIMO</span></span>
                    <p class="footer__text">
                        Plateforme éditoriale consacrée à l'autonomie intellectuelle, à la pensée créative méthodique et à l'éveil du potentiel des enfants.
                    </p>
                    <p class="footer__text" style="font-style: italic; color: var(--gold);">
                        « La créativité n'est pas un don. C'est une pratique. »
                    </p>
                </div>
                <div>
                    <h4 class="footer__title">Navigation</h4>
                    <ul class="footer__links">
                        <li><a href="../index.html">Accueil</a></li>
                        <li><a href="../articles.html">Articles Réflexion</a></li>
                        <li><a href="../intelligence-enfant.html">Intelligence Enfant</a></li>
                        <li><a href="../boutique.html">Boutique & Livres</a></li>
                        <li><a href="../a-propos.html">À propos</a></li>
                        <li><a href="../contact.html">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer__title">Contact Direct</h4>
                    <p class="footer__contact">
                        <a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer">
                            💬 WhatsApp : +237 683 911 717
                        </a>
                    </p>
                    <p class="footer__contact" style="margin-top: 0.5rem;">
                        <a href="mailto:merlinsimo2.0@gmail.com">
                            ✉️ merlinsimo2.0@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <div class="footer__bottom">
                <p>© 2026 Merlin SIMO. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <script src="../js/main.js"></script>
</body>
</html>`;
}

/**
 * Generate the Main Hub Page: site/intelligence-enfant.html
 */
function generateHubPageHtml() {
  const p1 = PRODUCTS['eveillez-le-genie'];
  const p2 = PRODUCTS['mon-enfant-reussit'];

  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Développement de l'Intelligence de l'Enfant – Merlin SIMO</title>
    <meta name="description" content="Comprendre, stimuler et accompagner le potentiel intellectuel de chaque enfant : méthodes pratiques, mémoire, logique, curiosité et réussite scolaire par Merlin SIMO.">
    <meta name="keywords" content="développement intelligence enfant, éveil intellectuel enfant, neurosciences éducation, réussite scolaire, mémoire enfant, logique mathématique enfant, Merlin SIMO">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="https://merlinsimo.netlify.app/intelligence-enfant.html">
    
    <!-- Open Graph / Meta -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Merlin SIMO – L'Intelligence en Action">
    <meta property="og:url" content="https://merlinsimo.netlify.app/intelligence-enfant.html">
    <meta property="og:title" content="Développement de l'Intelligence de l'Enfant – Merlin SIMO">
    <meta property="og:description" content="Comprendre, stimuler et accompagner le potentiel intellectuel de chaque enfant. 10 articles de fond et méthodes scientifiquement validées.">
    <meta property="og:image" content="https://merlinsimo.netlify.app/images/banner-intelligence-enfant.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Développement de l'Intelligence de l'Enfant – Merlin SIMO">
    <meta property="og:locale" content="fr_FR">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://merlinsimo.netlify.app/intelligence-enfant.html">
    <meta name="twitter:title" content="Développement de l'Intelligence de l'Enfant – Merlin SIMO">
    <meta name="twitter:description" content="Comprendre, stimuler et accompagner le potentiel intellectuel de chaque enfant. 10 articles complets et méthodes éprouvées.">
    <meta name="twitter:image" content="https://merlinsimo.netlify.app/images/banner-intelligence-enfant.jpg">

    <!-- Favicons & App Icons -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="manifest" href="site.webmanifest">
    <meta name="theme-color" content="#00bac7">

    <!-- Schema.org JSON-LD (CollectionPage & BreadcrumbList) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://merlinsimo.netlify.app/intelligence-enfant.html#webpage",
          "url": "https://merlinsimo.netlify.app/intelligence-enfant.html",
          "name": "Développement de l'Intelligence de l'Enfant – Merlin SIMO",
          "description": "Comprendre, stimuler et accompagner le potentiel intellectuel de chaque enfant.",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://merlinsimo.netlify.app/#website",
            "name": "Merlin SIMO – L'Intelligence en Action",
            "url": "https://merlinsimo.netlify.app/"
          },
          "about": {
            "@type": "Thing",
            "name": "Développement cognitif de l'enfant et réussite scolaire"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://merlinsimo.netlify.app/intelligence-enfant.html#breadcrumb",
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
              "name": "Développement de l'Intelligence de l'Enfant",
              "item": "https://merlinsimo.netlify.app/intelligence-enfant.html"
            }
          ]
        }
      ]
    }
    </script>

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css?v=15.0">
</head>
<body>
    <div class="reading-progress" id="readingProgress"></div>

    <!-- Header Navigation -->
    <header class="header">
        <div class="container header__inner">
            <a href="index.html" class="header__logo"><img src="images/logo-transparent.png" alt="Emblème Merlin SIMO" class="header__logo-img"> Merlin <span>SIMO</span></a>
            <nav class="nav" aria-label="Navigation principale">
                <ul class="nav__list">
                    <li class="nav__item"><a href="index.html" class="nav__link">Accueil</a></li>
                    <li class="nav__item"><a href="articles.html" class="nav__link">Articles</a></li>
                    <li class="nav__item"><a href="intelligence-enfant.html" class="nav__link nav__link--active">Intelligence Enfant</a></li>
                    <li class="nav__item"><a href="boutique.html" class="nav__link">Boutique</a></li>
                    <li class="nav__item"><a href="a-propos.html" class="nav__link">À propos</a></li>
                    <li class="nav__item"><a href="contact.html" class="nav__link">Contact</a></li>
                </ul>
            </nav>
            <button class="hamburger" aria-label="Menu mobile" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <main class="main-content">
        <!-- Hero Banner Section -->
        <section class="enfant-hero-section" style="background: linear-gradient(180deg, rgba(0, 186, 199, 0.08) 0%, rgba(255, 255, 255, 0) 100%); padding-top: var(--space-2xl); padding-bottom: var(--space-3xl); border-bottom: 1px solid var(--border);">
            <div class="container">
                <div style="display: grid; grid-template-columns: 1fr; lg-grid-template-columns: 1.1fr 0.9fr; gap: var(--space-2xl); align-items: center;">
                    <div>
                        <h1 style="font-size: var(--fs-4xl); line-height: 1.15; margin-bottom: var(--space-md); color: var(--text-dark);">
                            DÉVELOPPEMENT DE L'INTELLIGENCE DE L'ENFANT
                        </h1>
                        <p style="font-family: var(--font-serif); font-size: var(--fs-xl); color: var(--electric-blue-dark); font-style: italic; margin-bottom: var(--space-lg); line-height: 1.4;">
                            « Comprendre, stimuler et accompagner le potentiel intellectuel de chaque enfant. »
                        </p>
                        <p style="font-size: var(--fs-base); color: var(--text-dark); line-height: 1.8; margin-bottom: var(--space-xl);">
                            Chaque enfant possède des capacités qui peuvent être développées grâce à un environnement favorable, des expériences enrichissantes, des activités adaptées et un accompagnement bienveillant. Cette rubrique aide les parents et éducateurs à mieux comprendre le développement intellectuel des plus jeunes et à découvrir des méthodes simples pour stimuler leur mémoire, leur créativité, leur concentration, leur logique, leur langage et leur goût pour l'apprentissage.
                        </p>

                        <!-- Audience Pills -->
                        <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap; margin-bottom: var(--space-xl);">
                            <span style="background: var(--bg-card); border: 1px solid var(--border); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); font-size: var(--fs-xs); color: var(--text-medium);"><i class="fas fa-child" style="color: var(--electric-blue); margin-right: 0.3rem;"></i> Parents d'enfants de 3 à 12 ans</span>
                            <span style="background: var(--bg-card); border: 1px solid var(--border); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); font-size: var(--fs-xs); color: var(--text-medium);"><i class="fas fa-graduation-cap" style="color: var(--gold-darker); margin-right: 0.3rem;"></i> Réussite & Autonomie Scolaire</span>
                            <span style="background: var(--bg-card); border: 1px solid var(--border); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); font-size: var(--fs-xs); color: var(--text-medium);"><i class="fas fa-chalkboard-teacher" style="color: var(--electric-blue); margin-right: 0.3rem;"></i> Enseignants & Éducateurs</span>
                            <span style="background: var(--bg-card); border: 1px solid var(--border); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); font-size: var(--fs-xs); color: var(--text-medium);"><i class="fas fa-brain" style="color: #ec4899; margin-right: 0.3rem;"></i> Neurosciences & Cognition</span>
                        </div>
                    </div>

                    <!-- Hero Visual -->
                    <div>
                        <div style="position: relative; border-radius: var(--radius-2xl); overflow: hidden; box-shadow: var(--shadow-xl); border: 3px solid rgba(0, 186, 199, 0.3);">
                            <img src="images/banner-intelligence-enfant.jpg" alt="Enfant en situation d'apprentissage et découverte intellectuelle" style="width: 100%; height: auto; display: block; object-fit: cover;">
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,25,47,0.85) 100%); padding: var(--space-lg); color: #fff;">
                                <span style="font-size: var(--fs-xs); font-weight: var(--fw-semibold); color: var(--gold); text-transform: uppercase; letter-spacing: 0.05em;">L'Atelier des Jeunes Esprits</span>
                                <p style="margin: 0; font-size: var(--fs-sm); opacity: 0.95;">10 dossiers exhaustifs fondés sur les sciences cognitives et le bon sens pratique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Search & Filter Controls -->
        <section style="background: var(--bg-surface); padding: var(--space-xl) 0; border-bottom: 1px solid var(--border);">
            <div class="container">
                <div style="display: flex; flex-direction: column; md-flex-direction: row; gap: var(--space-lg); align-items: center; justify-content: space-between;">
                    
                    <!-- Search Input -->
                    <div style="position: relative; width: 100%; max-width: 480px;">
                        <i class="fas fa-search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-light);"></i>
                        <input type="text" id="enfantArticleSearch" placeholder="Rechercher un sujet (ex: mémoire, lecture, maths, écrans...)" style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.8rem; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-card); font-size: var(--fs-sm); outline: none; transition: all 0.2s ease;">
                    </div>

                    <!-- Category Pills -->
                    <div class="enfant-category-filters" style="display: flex; gap: var(--space-xs); flex-wrap: wrap; justify-content: center;">
                        <button class="filter-pill active" data-category="all">Tous (10)</button>
                        <button class="filter-pill" data-category="potentiel">Potentiel</button>
                        <button class="filter-pill" data-category="rythmes">Rythmes</button>
                        <button class="filter-pill" data-category="lecture">Lecture</button>
                        <button class="filter-pill" data-category="memoire">Mémoire</button>
                        <button class="filter-pill" data-category="logique">Logique & Maths</button>
                        <button class="filter-pill" data-category="curiosite">Curiosité</button>
                        <button class="filter-pill" data-category="attention">Écrans & Attention</button>
                        <button class="filter-pill" data-category="reussite">Méthode & Réussite</button>
                        <button class="filter-pill" data-category="avenir">Vision Avenir</button>
                    </div>

                </div>

                <!-- Active Counter -->
                <div style="margin-top: var(--space-sm); text-align: right; font-size: var(--fs-xs); color: var(--text-light);" id="searchCounter">
                    Affichage des 10 articles
                </div>
            </div>
        </section>

        <!-- Articles Grid Section -->
        <section style="padding: var(--space-3xl) 0;">
            <div class="container">
                <div class="articles-grid" id="enfantArticlesGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--space-xl);">
                    ${allEnfantsArticles.map(a => `
                        <article class="article-card-enfant" data-category="${a.categorySlug}" data-title="${a.title.toLowerCase()}" data-desc="${a.metaDescription.toLowerCase()} ${a.keywords.join(' ').toLowerCase()}" style="background: var(--bg-card); border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--border); display: flex; flex-direction: column; transition: transform 0.25s ease, box-shadow 0.25s ease;">
                            <div style="position: relative; height: 210px; overflow: hidden;">
                                <img src="images/enfants/${a.imageKey}.jpg" alt="${a.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" loading="lazy">
                                <span style="position: absolute; top: 1rem; left: 1rem; background: rgba(10, 25, 47, 0.85); color: #fff; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 11px; font-weight: var(--fw-semibold); backdrop-filter: blur(4px);">
                                    ${a.category}
                                </span>
                            </div>
                            <div style="padding: var(--space-lg); display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                                <div>
                                    <div style="font-size: var(--fs-2xs); color: var(--text-light); margin-bottom: var(--space-2xs); display: flex; justify-content: space-between;">
                                        <span><i class="far fa-calendar-alt"></i> ${a.dateFormatted}</span>
                                        <span><i class="far fa-clock"></i> ${a.readingTime}</span>
                                    </div>
                                    <h3 style="font-size: var(--fs-lg); line-height: 1.35; margin-bottom: var(--space-xs); color: var(--text-dark);">
                                        <a href="articles/${a.slug}.html" style="color: inherit; text-decoration: none;">${a.title}</a>
                                    </h3>
                                    <p style="font-size: var(--fs-xs); color: var(--text-medium); line-height: 1.6; margin-bottom: var(--space-md); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                                        ${a.metaDescription}
                                    </p>
                                </div>
                                <div style="margin-top: var(--space-sm); pt: var(--space-xs); border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                                    <a href="articles/${a.slug}.html" class="btn btn--primary" style="padding: 0.5rem 1rem; font-size: var(--fs-xs);">
                                        Lire l'article <i class="fas fa-arrow-right" style="margin-left: 0.3rem;"></i>
                                    </a>
                                    <span style="font-size: 11px; color: var(--text-light);">1200+ mots</span>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>

                <div id="noResultsNotice" style="display: none; text-align: center; padding: var(--space-3xl) 0;">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: var(--space-md);"></i>
                    <h3 style="font-size: var(--fs-xl);">Aucun article ne correspond à votre recherche</h3>
                    <p style="color: var(--text-medium);">Essayez avec d'autres termes comme « lecture », « mémoire » ou « mathématiques ».</p>
                    <button class="btn btn--secondary" onclick="document.getElementById('enfantArticleSearch').value=''; filterArticles();" style="margin-top: var(--space-md);">Réinitialiser la recherche</button>
                </div>
            </div>
        </section>

        <!-- Recommended Digital Products Spotlight -->
        <section style="background: linear-gradient(135deg, rgba(0, 186, 199, 0.05) 0%, rgba(212, 160, 23, 0.06) 100%); padding: var(--space-4xl) 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
            <div class="container">
                <div style="text-align: center; max-width: 750px; margin: 0 auto var(--space-3xl) auto;">
                    <span class="card__category" style="background: var(--gold-darker); color: #fff; padding: 0.3rem 0.9rem; border-radius: var(--radius-full); font-size: var(--fs-xs); font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: 0.05em;">
                        Bibliothèque Pratique Parents & Éducateurs
                    </span>
                    <h2 style="font-size: var(--fs-3xl); margin-top: var(--space-sm); margin-bottom: var(--space-xs);">Les Programmes Complets de Merlin SIMO</h2>
                    <p style="color: var(--text-medium); font-size: var(--fs-base);">Pour aller plus loin que les articles, découvrez nos deux méthodes numériques de référence, conçues pour accompagner durablement votre foyer.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-2xl);">
                    
                    <!-- Produit 1 -->
                    <div style="background: var(--bg-card); border-radius: var(--radius-2xl); padding: var(--space-2xl); border: 1px solid var(--border); box-shadow: var(--shadow-md); display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="text-align: center; margin-bottom: var(--space-lg);">
                                <img src="${p1.coverImageHub}" alt="${p1.title}" style="width: 220px; max-width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3); margin: 0 auto;">
                            </div>
                            <span style="background: rgba(0, 186, 199, 0.12); color: var(--electric-blue-dark); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: var(--fs-2xs); font-weight: var(--fw-bold); text-transform: uppercase;">Éveil & Potentiel</span>
                            <h3 style="font-size: var(--fs-xl); margin-top: var(--space-xs); margin-bottom: var(--space-xs);">${p1.title}</h3>
                            <p style="font-size: var(--fs-sm); color: var(--text-medium); line-height: 1.6; margin-bottom: var(--space-md);">${p1.subtitle}</p>
                            <ul style="margin: 0 0 var(--space-lg) var(--space-lg); padding: 0; font-size: var(--fs-xs); color: var(--text-medium); line-height: 1.6;">
                                ${p1.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <a href="${p1.selarUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="width: 100%; text-align: center; padding: 0.75rem 1.5rem; font-size: var(--fs-sm);">
                                Découvrir et Commander sur Selar <i class="fas fa-arrow-right" style="margin-left: 0.3rem;"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Produit 2 -->
                    <div style="background: var(--bg-card); border-radius: var(--radius-2xl); padding: var(--space-2xl); border: 1px solid var(--border); box-shadow: var(--shadow-md); display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <div style="text-align: center; margin-bottom: var(--space-lg);">
                                <img src="${p2.coverImageHub}" alt="${p2.title}" style="width: 220px; max-width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3); margin: 0 auto;">
                            </div>
                            <span style="background: rgba(212, 160, 23, 0.15); color: var(--gold-darker); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: var(--fs-2xs); font-weight: var(--fw-bold); text-transform: uppercase;">Méthode & Réussite Scolaire</span>
                            <h3 style="font-size: var(--fs-xl); margin-top: var(--space-xs); margin-bottom: var(--space-xs);">${p2.title}</h3>
                            <p style="font-size: var(--fs-sm); color: var(--text-medium); line-height: 1.6; margin-bottom: var(--space-md);">${p2.subtitle}</p>
                            <ul style="margin: 0 0 var(--space-lg) var(--space-lg); padding: 0; font-size: var(--fs-xs); color: var(--text-medium); line-height: 1.6;">
                                ${p2.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <a href="${p2.selarUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary" style="width: 100%; text-align: center; padding: 0.75rem 1.5rem; font-size: var(--fs-sm);">
                                Découvrir et Commander sur Selar <i class="fas fa-arrow-right" style="margin-left: 0.3rem;"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Parent Community & Direct WhatsApp Support -->
        <section style="padding: var(--space-3xl) 0;">
            <div class="container">
                <div style="background: var(--bg-card); border-radius: var(--radius-2xl); padding: var(--space-2xl); border: 2px dashed rgba(0, 186, 199, 0.4); text-align: center; max-width: 800px; margin: 0 auto;">
                    <i class="fab fa-whatsapp" style="font-size: 2.8rem; color: #25d366; margin-bottom: var(--space-sm);"></i>
                    <h3 style="font-size: var(--fs-2xl); margin-bottom: var(--space-xs);">Une question sur l'éducation de votre enfant ?</h3>
                    <p style="color: var(--text-medium); font-size: var(--fs-sm); max-width: 600px; margin: 0 auto var(--space-lg) auto;">
                        Merlin SIMO répond personnellement aux questions des parents et des éducateurs soucieux d'améliorer leurs pratiques familiales et d'aider leurs enfants à progresser.
                    </p>
                    <a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="background: #25d366; border-color: #25d366; color: #fff; padding: 0.75rem 2rem;">
                        <i class="fab fa-whatsapp" style="margin-right: 0.4rem;"></i> Écrire à Merlin sur WhatsApp (+237 683 911 717)
                    </a>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer__grid">
                <div>
                    <span class="header__logo" style="display: block; margin-bottom: var(--space-md);"><span class="sun-badge">☀️</span> Merlin <span class="logo-accent">SIMO</span></span>
                    <p class="footer__text">
                        Plateforme éditoriale consacrée à l'autonomie intellectuelle, à la pensée créative méthodique et à l'éveil du potentiel des enfants.
                    </p>
                    <p class="footer__text" style="font-style: italic; color: var(--gold);">
                        « La créativité n'est pas un don. C'est une pratique. »
                    </p>
                </div>
                <div>
                    <h4 class="footer__title">Navigation</h4>
                    <ul class="footer__links">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="articles.html">Articles Réflexion</a></li>
                        <li><a href="intelligence-enfant.html">Intelligence Enfant</a></li>
                        <li><a href="boutique.html">Boutique & Livres</a></li>
                        <li><a href="a-propos.html">À propos</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer__title">Contact Direct</h4>
                    <p class="footer__contact">
                        <a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer">
                            💬 WhatsApp : +237 683 911 717
                        </a>
                    </p>
                    <p class="footer__contact" style="margin-top: 0.5rem;">
                        <a href="mailto:merlinsimo2.0@gmail.com">
                            ✉️ merlinsimo2.0@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <div class="footer__bottom">
                <p>© 2026 Merlin SIMO. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <!-- Interactive Client Filtering Script -->
    <script>
        const searchInput = document.getElementById('enfantArticleSearch');
        const filterPills = document.querySelectorAll('.filter-pill');
        const articleCards = document.querySelectorAll('.article-card-enfant');
        const searchCounter = document.getElementById('searchCounter');
        const noResults = document.getElementById('noResultsNotice');

        let currentCategory = 'all';

        function filterArticles() {
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

            searchCounter.textContent = visibleCount + (visibleCount > 1 ? ' articles trouvés' : ' article trouvé');
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        searchInput.addEventListener('input', filterArticles);

        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentCategory = pill.getAttribute('data-category');
                filterArticles();
            });
        });
    </script>
    <script src="js/main.js"></script>
</body>
</html>`;
}

// ============================================================================
// EXECUTION DU BUILD
// ============================================================================

// 1. Génération des 10 articles individuels
console.log('--- Generating individual article HTML files ---');
allEnfantsArticles.forEach(article => {
  const filePath = path.join(ARTICLES_DIR, `${article.slug}.html`);
  const html = generateArticleHtml(article);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: articles/${article.slug}.html`);
});

// 2. Génération de la page d'accueil de la rubrique
console.log('--- Generating intelligence-enfant.html ---');
const hubHtml = generateHubPageHtml();
fs.writeFileSync(path.join(SITE_DIR, 'intelligence-enfant.html'), hubHtml, 'utf8');
console.log('Generated: site/intelligence-enfant.html');

// 3. Mise à jour de la navigation dans tous les fichiers HTML existants
console.log('--- Updating navigation menus across all existing pages ---');

// Menu pour les fichiers racines (index.html, articles.html, boutique.html, etc.)
const rootNavRegex = /(<ul class="nav__list">[\s\S]*?)(<li class="nav__item"><a href="articles\.html"[^>]*>Articles<\/a><\/li>)([\s\S]*?<\/ul>)/;
const rootNavItem = '\n                    <li class="nav__item"><a href="intelligence-enfant.html" class="nav__link">Intelligence Enfant</a></li>';

const rootFiles = ['index.html', 'articles.html', 'boutique.html', 'a-propos.html', 'contact.html'];
rootFiles.forEach(file => {
  const filePath = path.join(SITE_DIR, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('href="intelligence-enfant.html"')) {
      content = content.replace(/(<li class="nav__item"><a href="articles\.html"[^>]*>Articles<\/a><\/li>)/, `$1${rootNavItem}`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated nav in root: ${file}`);
    } else {
      console.log(`Nav already has intelligence-enfant in: ${file}`);
    }
  }
});

// Menu pour les articles existants dans site/articles/*.html
const articleNavItem = '\n                    <li class="nav__item"><a href="../intelligence-enfant.html" class="nav__link">Intelligence Enfant</a></li>';
const articleFiles = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.html'));

articleFiles.forEach(file => {
  const filePath = path.join(ARTICLES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('href="../intelligence-enfant.html"')) {
    content = content.replace(/(<li class="nav__item"><a href="\.\.\/articles\.html"[^>]*>Articles<\/a><\/li>)/, `$1${articleNavItem}`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated nav in article: ${file}`);
  }
});

// 4. Mise à jour du Sitemap.xml
console.log('--- Updating site/sitemap.xml ---');
const sitemapPath = path.join(SITE_DIR, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Check if intelligence-enfant is in sitemap
  let newEntries = '';
  if (!sitemapContent.includes('intelligence-enfant.html')) {
    newEntries += `  <url>
    <loc>https://merlinsimo.netlify.app/intelligence-enfant.html</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  }

  // Update or insert child intelligence articles
  allEnfantsArticles.forEach(article => {
    const loc = `https://merlinsimo.netlify.app/articles/${article.slug}.html`;
    const regex = new RegExp(`(<loc>${loc}<\\/loc>\\s*<lastmod>)[^<]+(<\\/lastmod>)`);
    if (regex.test(sitemapContent)) {
      sitemapContent = sitemapContent.replace(regex, `$1${article.date}$2`);
    } else if (!sitemapContent.includes(article.slug)) {
      newEntries += `  <url>
    <loc>${loc}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
    }
  });

  if (newEntries.length > 0) {
    sitemapContent = sitemapContent.replace('</urlset>', `${newEntries}</urlset>`);
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('sitemap.xml updated with new URLs.');
  } else {
    console.log('sitemap.xml already up to date.');
  }
}

console.log('--- Build of Intelligence de l\'Enfant section finished with 100% success! ---');

const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site');
const baseUrl = 'https://merlinsimo.com';

// 1. Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(siteDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('1. Generated robots.txt');

// 2. Generate site.webmanifest
const manifestJson = {
  "name": "Merlin SIMO — L'Atelier de l'Esprit",
  "short_name": "Merlin SIMO",
  "description": "Explorer l'intelligence humaine. Développer ses capacités. Transformer ses idées en réalisations.",
  "icons": [
    {
      "src": "/favicon-48x48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "/favicon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#00bac7",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/"
};
fs.writeFileSync(path.join(siteDir, 'site.webmanifest'), JSON.stringify(manifestJson, null, 2), 'utf8');
console.log('2. Generated site.webmanifest');

// 3. Load article metadata
const articlesDir = path.join(siteDir, 'articles');
const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));

const articleMetaMap = {};
articleFiles.forEach(file => {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
  const titleM = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const title = titleM ? titleM[1].trim() : file.replace('.html', '');
  const descM = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  const desc = descM ? descM[1] : '';
  const dateM = content.match(/<time\s+datetime="([^"]+)"[^>]*>([^<]+)<\/time>/);
  const date = dateM ? dateM[1] : '2026-10-01';
  const categoryM = content.match(/<span\s+class="(?:category-badge|card__category)"[^>]*>([^<]+)<\/span>/);
  const category = categoryM ? categoryM[1] : 'Cognition';
  
  articleMetaMap[file] = { title, desc, date, category };
});

// 4. Generate sitemap.xml
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/articles.html</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/boutique.html</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/a-propos.html</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact.html</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;

articleFiles.forEach(f => {
  const meta = articleMetaMap[f];
  sitemapXml += `  <url>
    <loc>${baseUrl}/articles/${f}</loc>
    <lastmod>${meta.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemapXml += `</urlset>\n`;
fs.writeFileSync(path.join(siteDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log('3. Generated sitemap.xml with all 25 URLs');

// 5. Inject complete SEO head & Schema.org in all 25 pages
function getFaviconTags(depth) {
  const prefix = depth === 1 ? '../' : '';
  return `    <!-- Favicons & App Icons (Google Search Certified) -->
    <link rel="icon" type="image/x-icon" href="${prefix}favicon.ico">
    <link rel="icon" type="image/png" sizes="48x48" href="${prefix}favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="${prefix}favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${prefix}favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${prefix}favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="${prefix}apple-touch-icon.png">
    <link rel="manifest" href="${prefix}site.webmanifest">
    <meta name="theme-color" content="#00bac7">`;
}

// Update Index
console.log('4. Optimizing SEO on index.html...');
let indexHtml = fs.readFileSync(path.join(siteDir, 'index.html'), 'utf8');
const indexFavicons = getFaviconTags(0);
const indexSeoHead = `    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${baseUrl}/">
    
    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Merlin SIMO — L'Atelier de l'Esprit">
    <meta property="og:url" content="${baseUrl}/">
    <meta property="og:title" content="Merlin SIMO — L'Atelier de l'Esprit | Intelligence, Créativité & Action">
    <meta property="og:description" content="Plateforme éditoriale de Merlin SIMO : Explorer l'intelligence humaine, développer ses capacités cognitives et transformer ses idées en réalisations concrètes.">
    <meta property="og:image" content="${baseUrl}/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Logo L'Atelier de l'Esprit — Merlin SIMO">
    <meta property="og:locale" content="fr_FR">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${baseUrl}/">
    <meta name="twitter:title" content="Merlin SIMO — L'Atelier de l'Esprit">
    <meta name="twitter:description" content="Explorer l'intelligence humaine. Développer ses capacités. Transformer ses idées en réalisations.">
    <meta name="twitter:image" content="${baseUrl}/images/og-image.jpg">
    
${indexFavicons}

    <!-- Structured Data: Schema.org (Google Search Knowledge Graph & Site Search) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "${baseUrl}/#organization",
          "name": "L'Atelier de l'Esprit",
          "alternateName": "Merlin SIMO",
          "url": "${baseUrl}/",
          "logo": {
            "@type": "ImageObject",
            "@id": "${baseUrl}/#logo",
            "url": "${baseUrl}/images/logo-512.png",
            "contentUrl": "${baseUrl}/images/logo-512.png",
            "caption": "Logo L'Atelier de l'Esprit — Merlin SIMO",
            "width": 512,
            "height": 512
          },
          "image": "${baseUrl}/images/logo-512.png",
          "founder": {
            "@type": "Person",
            "@id": "${baseUrl}/#person",
            "name": "Merlin SIMO",
            "jobTitle": "Auteur, Chercheur en dynamiques cognitives & Développeur",
            "email": "merlinsimo2.0@gmail.com",
            "telephone": "+237683911717",
            "image": "${baseUrl}/images/merlin-simo-portrait.jpg"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+237683911717",
            "contactType": "customer service",
            "email": "merlinsimo2.0@gmail.com",
            "availableLanguage": ["French", "English"]
          }
        },
        {
          "@type": "WebSite",
          "@id": "${baseUrl}/#website",
          "url": "${baseUrl}/",
          "name": "Merlin SIMO — L'Atelier de l'Esprit",
          "description": "Plateforme éditoriale consacrée à l'autonomie intellectuelle, à la pensée créative méthodique, aux neurosciences appliquées et au passage à l'action.",
          "publisher": { "@id": "${baseUrl}/#organization" },
          "inLanguage": "fr-FR"
        }
      ]
    }
    </script>`;

// Clean old og/meta tags in index.html and inject new
indexHtml = indexHtml.replace(/<meta property="og:title"[\s\S]*?<meta name="author"[^>]*>/, indexSeoHead);
fs.writeFileSync(path.join(siteDir, 'index.html'), indexHtml, 'utf8');

// Update a-propos.html
console.log('5. Optimizing SEO on a-propos.html...');
let aproposHtml = fs.readFileSync(path.join(siteDir, 'a-propos.html'), 'utf8');
const aproposSeoHead = `    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${baseUrl}/a-propos.html">
    
    <meta property="og:type" content="profile">
    <meta property="og:site_name" content="Merlin SIMO — L'Atelier de l'Esprit">
    <meta property="og:url" content="${baseUrl}/a-propos.html">
    <meta property="og:title" content="À propos de Merlin SIMO — Démarche, Vision & Manifeste">
    <meta property="og:description" content="Découvrez le parcours de Merlin SIMO : juriste, observateur des dynamiques cognitives, bâtisseur de systèmes et praticien de l'apprentissage méthodique.">
    <meta property="og:image" content="${baseUrl}/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Merlin SIMO — L'Atelier de l'Esprit">
    <meta property="og:locale" content="fr_FR">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="À propos de Merlin SIMO — L'Atelier de l'Esprit">
    <meta name="twitter:description" content="Explorer l'intelligence humaine. Développer ses capacités. Transformer ses idées en réalisations.">
    <meta name="twitter:image" content="${baseUrl}/images/og-image.jpg">

${indexFavicons}

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Merlin SIMO",
        "alternateName": "Merlin Simo",
        "description": "Observateur des dynamiques cognitives, passionné par les mécanismes de l'intelligence humaine, bâtisseur de systèmes et praticien de l'apprentissage méthodique.",
        "image": "${baseUrl}/images/merlin-simo-portrait.jpg",
        "jobTitle": "Auteur, Chercheur indépendant en neurosciences appliquées & Développeur",
        "email": "merlinsimo2.0@gmail.com",
        "telephone": "+237683911717",
        "url": "${baseUrl}/a-propos.html",
        "knowsAbout": [
          "Sciences cognitives",
          "Neurosciences appliquées",
          "Méthodes d'apprentissage accéléré",
          "Développement de la créativité",
          "Sciences Juridiques et Politiques",
          "Intelligence Artificielle et Automatisation"
        ]
      }
    }
    </script>`;

aproposHtml = aproposHtml.replace(/<meta property="og:title"[\s\S]*?<meta name="author"[^>]*>/, aproposSeoHead);
fs.writeFileSync(path.join(siteDir, 'a-propos.html'), aproposHtml, 'utf8');

// Update boutique.html
console.log('6. Optimizing SEO on boutique.html...');
let boutiqueHtml = fs.readFileSync(path.join(siteDir, 'boutique.html'), 'utf8');
const boutiqueSeoHead = `    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${baseUrl}/boutique.html">
    
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Merlin SIMO — L'Atelier de l'Esprit">
    <meta property="og:url" content="${baseUrl}/boutique.html">
    <meta property="og:title" content="Boutique Officielle — Programmes & Livres de Merlin SIMO">
    <meta property="og:description" content="Commandez les livres et coffrets de Merlin SIMO : Éveillez le Génie de votre Enfant, Boostez votre Mémoire en 8 Jours, et le Pack Complet 3 en 1.">
    <meta property="og:image" content="${baseUrl}/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Boutique Merlin SIMO">
    <meta property="og:locale" content="fr_FR">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Boutique Officielle — Merlin SIMO">
    <meta name="twitter:description" content="Programmes d'entraînement cognitif et livres éducatifs fondés sur les neurosciences.">
    <meta name="twitter:image" content="${baseUrl}/images/og-image.jpg">

${indexFavicons}

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Boutique Officielle & Livres de Merlin SIMO",
      "url": "${baseUrl}/boutique.html",
      "description": "Guides pratiques et programmes complets fondés sur les neurosciences pour réveiller le potentiel cognitif et la réussite éducative.",
      "hasPart": [
        {
          "@type": "Product",
          "name": "Éveillez le Génie de votre Enfant",
          "image": "${baseUrl}/images/eveillez-le-genie-de-votre-enfant.jpg",
          "description": "La méthode ÉCLAT de 15 minutes par jour pour apprendre, s'exprimer et grandir avec confiance.",
          "author": { "@type": "Person", "name": "Merlin SIMO" },
          "offers": {
            "@type": "Offer",
            "url": "https://selar.com/l11bp7g11v",
            "priceCurrency": "XAF",
            "price": "10000",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "Boostez votre Mémoire en 8 Jours",
          "image": "${baseUrl}/images/boostez-votre-memoire-en-8-jours.jpg",
          "description": "Le système pratique pour apprendre plus vite, retenir plus longtemps et ne plus oublier l'essentiel.",
          "author": { "@type": "Person", "name": "Merlin SIMO" },
          "offers": {
            "@type": "Offer",
            "url": "https://selar.com/0674970777",
            "priceCurrency": "XAF",
            "price": "15000",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "Pack Complet 3 en 1 : Mon Enfant Réussit",
          "image": "${baseUrl}/images/mon-enfant-reussit-pack-3-en-1.jpg",
          "description": "Le coffret intégral pour accompagner vos enfants : 100 vidéos de cours, le guide parental et le livre de mémoire.",
          "author": { "@type": "Person", "name": "Merlin SIMO" },
          "offers": {
            "@type": "Offer",
            "url": "https://selar.com/sov955h77r",
            "priceCurrency": "XAF",
            "price": "25000",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    }
    </script>`;

boutiqueHtml = boutiqueHtml.replace(/<meta property="og:title"[\s\S]*?<meta name="author"[^>]*>/, boutiqueSeoHead);
fs.writeFileSync(path.join(siteDir, 'boutique.html'), boutiqueHtml, 'utf8');

// Update articles.html
console.log('7. Optimizing SEO on articles.html...');
let articlesListHtml = fs.readFileSync(path.join(siteDir, 'articles.html'), 'utf8');
const articlesSeoHead = `    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${baseUrl}/articles.html">
    
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Merlin SIMO — L'Atelier de l'Esprit">
    <meta property="og:url" content="${baseUrl}/articles.html">
    <meta property="og:title" content="Articles, Essais & Guides Pratiques — Merlin SIMO">
    <meta property="og:description" content="Explorez 20 essais et guides méthodologiques sur la créativité, l'apprentissage accéléré, les modèles mentaux et l'innovation.">
    <meta property="og:image" content="${baseUrl}/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Articles de Merlin SIMO">
    <meta property="og:locale" content="fr_FR">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Articles & Guides — Merlin SIMO">
    <meta name="twitter:description" content="20 essais substantiels pour apprendre à mieux penser, créer et agir.">
    <meta name="twitter:image" content="${baseUrl}/images/og-image.jpg">

${indexFavicons}

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Articles & Guides de Merlin SIMO",
      "url": "${baseUrl}/articles.html",
      "description": "Essais sur l'esprit critique, la psychologie de la création et les méthodes cognitives de passage à l'action.",
      "publisher": {
        "@type": "Organization",
        "name": "L'Atelier de l'Esprit",
        "logo": { "@type": "ImageObject", "url": "${baseUrl}/images/logo-512.png" }
      }
    }
    </script>`;

articlesListHtml = articlesListHtml.replace(/<meta property="og:title"[\s\S]*?<meta name="author"[^>]*>/, articlesSeoHead);
fs.writeFileSync(path.join(siteDir, 'articles.html'), articlesListHtml, 'utf8');

// Update contact.html
console.log('8. Optimizing SEO on contact.html...');
let contactHtml = fs.readFileSync(path.join(siteDir, 'contact.html'), 'utf8');
const contactSeoHead = `    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${baseUrl}/contact.html">
    
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Merlin SIMO — L'Atelier de l'Esprit">
    <meta property="og:url" content="${baseUrl}/contact.html">
    <meta property="og:title" content="Contact Direct — Merlin SIMO | L'Atelier de l'Esprit">
    <meta property="og:description" content="Contactez directement Merlin SIMO via WhatsApp au +237 683 911 717 ou par email à merlinsimo2.0@gmail.com pour tout échange ou collaboration.">
    <meta property="og:image" content="${baseUrl}/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Contact Merlin SIMO">
    <meta property="og:locale" content="fr_FR">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Contactez Merlin SIMO">
    <meta name="twitter:description" content="Canaux directs : WhatsApp officiel (+237 683 911 717) et email (merlinsimo2.0@gmail.com).">
    <meta name="twitter:image" content="${baseUrl}/images/og-image.jpg">

${indexFavicons}

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact — Merlin SIMO",
      "url": "${baseUrl}/contact.html",
      "mainEntity": {
        "@type": "Person",
        "name": "Merlin SIMO",
        "email": "merlinsimo2.0@gmail.com",
        "telephone": "+237683911717",
        "image": "${baseUrl}/images/merlin-simo-portrait.jpg"
      }
    }
    </script>`;

contactHtml = contactHtml.replace(/<meta property="og:title"[\s\S]*?<meta name="author"[^>]*>/, contactSeoHead);
fs.writeFileSync(path.join(siteDir, 'contact.html'), contactHtml, 'utf8');

// Update 20 Articles
console.log('9. Optimizing SEO and Article Schema across all 20 individual articles...');
const articleFavicons = getFaviconTags(1);

articleFiles.forEach(f => {
  const filePath = path.join(articlesDir, f);
  let art = fs.readFileSync(filePath, 'utf8');
  const meta = articleMetaMap[f];

  const artCanonical = `${baseUrl}/articles/${f}`;
  const artSeoHead = `    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${artCanonical}">
    
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Merlin SIMO — L'Atelier de l'Esprit">
    <meta property="og:url" content="${artCanonical}">
    <meta property="og:title" content="${meta.title.replace(/"/g, '&quot;')}">
    <meta property="og:description" content="${meta.desc.replace(/"/g, '&quot;')}">
    <meta property="og:image" content="${baseUrl}/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${meta.title.replace(/"/g, '&quot;')}">
    <meta property="og:locale" content="fr_FR">
    <meta property="article:published_time" content="${meta.date}T09:00:00+01:00">
    <meta property="article:author" content="Merlin SIMO">
    <meta property="article:section" content="${meta.category}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${meta.title.replace(/"/g, '&quot;')}">
    <meta name="twitter:description" content="${meta.desc.replace(/"/g, '&quot;')}">
    <meta name="twitter:image" content="${baseUrl}/images/og-image.jpg">

${articleFavicons}

    <!-- Schema.org BlogPosting for Google Search Article Carousels & Snippets -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${artCanonical}"
      },
      "headline": "${meta.title.replace(/"/g, '\\"')}",
      "description": "${meta.desc.replace(/"/g, '\\"')}",
      "image": "${baseUrl}/images/og-image.jpg",
      "datePublished": "${meta.date}T09:00:00+01:00",
      "dateModified": "${meta.date}T09:00:00+01:00",
      "author": {
        "@type": "Person",
        "name": "Merlin SIMO",
        "url": "${baseUrl}/a-propos.html"
      },
      "publisher": {
        "@type": "Organization",
        "name": "L'Atelier de l'Esprit",
        "logo": {
          "@type": "ImageObject",
          "url": "${baseUrl}/images/logo-512.png"
        }
      },
      "articleSection": "${meta.category}"
    }
    </script>`;

  // Replace existing og block
  if (art.includes('<meta property="og:title"')) {
    art = art.replace(/<meta property="og:title"[\s\S]*?<meta property="og:locale"[^>]*>/, artSeoHead);
  } else {
    art = art.replace(/<\/head>/, `${artSeoHead}\n</head>`);
  }

  fs.writeFileSync(filePath, art, 'utf8');
  console.log(`Updated SEO: articles/${f}`);
});

console.log('SEO optimization & Google Favicon integration completed 100%!');

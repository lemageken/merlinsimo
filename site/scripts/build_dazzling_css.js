const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site');
const origCssPath = path.join(siteDir, 'scripts', 'original_style.css');
let css = fs.readFileSync(origCssPath, 'utf8');

// 1. Transform root variables to dazzling, brilliant & joyful colors
css = css.replace(
  /:root\s*\{[\s\S]*?\/\*\s*—\s*Typography/m,
  `:root {
  /* — Palette Solaire, Éclatante & Joyeuse — */
  --midnight-blue: #00bac7;      /* Alias pour boutons & liens : Cyan étincelant */
  --deep-blue: #0284c7;          /* Bleu ciel vibrant */
  --electric-blue: #00bac7;      /* Cyan électrique éclatant */
  --electric-blue-hover: #009aa7;
  --off-white: #f0f9ff;          /* Fond ice-blue / ciel très doux */
  --warm-white: #f8fbfe;         /* Fond daylight blanc pur nacré */
  --gold: #f59e0b;               /* Or solaire éclatant */
  --sun-yellow: #fbbf24;         /* Jaune soleil radieux */
  --coral: #f43f5e;              /* Rose corail étincelant */
  --emerald-green: #10b981;      /* Vert printemps dynamique */
  --text-dark: #091e3a;          /* Encre marine ultra-profonde pour une lisibilité parfaite */
  --text-medium: #1e293b;        /* Slate foncé net et contrasté (paragraphes, articles, extraits) */
  --text-light: #475569;         /* Slate soutenu pour métadonnées, dates et labels */
  --border: rgba(0, 186, 199, 0.22);
  --border-light: rgba(224, 242, 254, 0.9);

  /* — Surfaces Éclatantes — */
  --bg-body: #f8fbfe;
  --bg-section: #ffffff;
  --bg-card: #ffffff;
  --bg-sidebar: #ffffff;
  --bg-header: #ffffff;
  --bg-footer: #ffffff;
  --bg-hero: #f0f9ff;

  /* — Typography`
);

// 2. Header: Pure brilliant white with glowing cyan/gold border
css = css.replace(
  /\.header\s*\{[\s\S]*?z-index:\s*1000;\s*\}/m,
  `.header {
  position: sticky;
  top: 0;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 2px solid rgba(0, 186, 199, 0.2);
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 186, 199, 0.08);
}`
);

// Header Logo
css = css.replace(
  /\.header__logo\s*\{[\s\S]*?letter-spacing:\s*-0\.02em;\s*\}/m,
  `.header__logo,
.logo {
  font-family: var(--font-heading);
  font-weight: var(--fw-extra-bold);
  font-size: var(--fs-lg);
  color: #091e3a;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}`
);

css = css.replace(
  /\.header__logo\s*span\s*\{[\s\S]*?color:\s*var\(--electric-blue\);\s*\}/m,
  `.header__logo span,
.logo span {
  color: #008fa0;
}`
);

// Sun badge animation
const sunBadgeStyle = `
.sun-badge {
  color: #f59e0b;
  font-size: 1.35rem;
  filter: drop-shadow(0 2px 6px rgba(245, 158, 11, 0.5));
  animation: sunSpin 14s linear infinite;
}

@keyframes sunSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Desktop Nav links
css = css.replace(
  /\.nav__link\s*\{[\s\S]*?padding-block:\s*var\(--space-xs\);\s*\}/m,
  `.nav__link,
.nav-list a {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 600;
  color: #091e3a;
  transition: color var(--transition-fast);
  position: relative;
  padding-block: var(--space-xs);
}`
);

css = css.replace(
  /\.nav__link:hover,\s*\.nav__link:focus-visible,\s*\.nav__link--active\s*\{[\s\S]*?color:\s*var\(--off-white\);\s*\}/m,
  `.nav__link:hover,
.nav__link:focus-visible,
.nav-list a:hover {
  color: #008fa0;
}

.nav__link--active,
.nav-list a.active {
  color: #008fa0;
  font-weight: 700;
}`
);

// Hamburger icon color
css = css.replace(
  /\.hamburger__line\s*\{[\s\S]*?background:\s*var\(--off-white\);/m,
  `.hamburger__line,
.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #091e3a;`
);

// 3. Hero / Banner (Sun-drenched, radiant daylight background)
css = css.replace(
  /\.hero\s*\{[\s\S]*?min-height:\s*70vh;[\s\S]*?display:\s*flex;[\s\S]*?align-items:\s*center;\s*\}/m,
  `.hero {
  position: relative;
  background-color: #f0f9ff;
  background-image: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(240, 249, 255, 0.9) 50%, rgba(254, 249, 219, 0.85) 100%),
    url('../images/banner-eclatante.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: var(--space-4xl) 0 calc(var(--space-4xl) + var(--space-md));
  overflow: hidden;
  min-height: 72vh;
  display: flex;
  align-items: center;
}`
);

css = css.replace(
  /\.hero__title\s*\{[\s\S]*?letter-spacing:\s*-0\.03em;\s*\}/m,
  `.hero__title {
  font-size: clamp(2.4rem, 1.8rem + 3.5vw, 4.2rem);
  font-weight: var(--fw-extra-bold);
  color: #0f2942;
  margin-bottom: var(--space-md);
  letter-spacing: -0.03em;
  line-height: 1.15;
}`
);

css = css.replace(
  /\.hero__tagline\s*\{[\s\S]*?margin-bottom:\s*var\(--space-lg\);\s*\}/m,
  `.hero__tagline {
  font-family: var(--font-heading);
  font-size: clamp(1.15rem, 0.95rem + 1vw, 1.55rem);
  color: #0f2942;
  font-weight: var(--fw-extra-bold);
  letter-spacing: -0.01em;
  margin: 0;
}

.hero__tagline-wrapper {
  background: #ffffff;
  border: 2.5px solid #fbbf24;
  border-radius: var(--radius-lg);
  padding: var(--space-md) var(--space-2xl);
  margin-inline: auto;
  margin-bottom: var(--space-lg);
  display: inline-block;
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.22), 0 2px 8px rgba(0, 186, 199, 0.15);
  position: relative;
}

.hero__tagline-wrapper::before {
  content: '☀️';
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  background: #ffffff;
  border-radius: 50%;
  padding: 0 4px;
}`
);

css = css.replace(
  /\.hero__promise\s*\{[\s\S]*?font-weight:\s*var\(--fw-medium\);\s*\}/m,
  `.hero__promise {
  font-size: var(--fs-md);
  color: #091e3a;
  margin-block: var(--space-md) var(--space-2xl);
  font-weight: 500;
  max-width: 660px;
  margin-inline: auto;
  line-height: 1.7;
}`
);

// 4. Buttons (High-energy, brilliant capsules)
css = css.replace(
  /\.btn--primary\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*14px\s*rgba\(37,99,235,0\.35\);\s*\}/m,
  `.btn--primary {
  background: linear-gradient(135deg, #00bac7, #0284c7);
  color: #ffffff;
  border-radius: 100px;
  font-weight: var(--fw-extra-bold);
  box-shadow: 0 4px 16px rgba(0, 186, 199, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.4);
}`
);

css = css.replace(
  /\.btn--primary:hover,\s*\.btn--primary:focus-visible\s*\{[\s\S]*?box-shadow:\s*0\s*6px\s*20px\s*rgba\(37,99,235,0\.45\);\s*\}/m,
  `.btn--primary:hover,
.btn--primary:focus-visible {
  background: linear-gradient(135deg, #009aa7, #0274b0);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 186, 199, 0.45);
}`
);

css = css.replace(
  /\.btn--secondary\s*\{[\s\S]*?border:\s*1\.5px\s*solid\s*rgba\(245,\s*240,\s*232,\s*0\.3\);\s*\}/m,
  `.btn--secondary {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  color: #0f2942;
  border-radius: 100px;
  font-weight: var(--fw-extra-bold);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
}`
);

css = css.replace(
  /\.btn--secondary:hover,\s*\.btn--secondary:focus-visible\s*\{[\s\S]*?transform:\s*translateY\(-2px\);\s*\}/m,
  `.btn--secondary:hover,
.btn--secondary:focus-visible {
  background: linear-gradient(135deg, #d97706, #f59e0b);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(245, 158, 11, 0.45);
}`
);

css = css.replace(
  /\.btn--gold\s*\{[\s\S]*?color:\s*var\(--midnight-blue\);\s*\}/m,
  `.btn--gold {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  color: #0f2942;
  border-radius: 100px;
  font-weight: var(--fw-extra-bold);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
}`
);

// 5. Category badges (Joyful, saturated pastel pills)
const categoryBadgeRules = `
.card__category,
.category-badge {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: var(--fw-extra-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.95rem;
  border-radius: 100px;
  background: #e0f7fa;
  color: #007c8a;
  border: 1px solid rgba(0, 186, 199, 0.3);
}

.card__category--gold {
  background: #fef3c7 !important;
  color: #b45309 !important;
  border-color: rgba(245, 158, 11, 0.4) !important;
}

.card__category--coral,
.card__category--rose {
  background: #ffe4e6 !important;
  color: #e11d48 !important;
  border-color: rgba(244, 63, 94, 0.4) !important;
}

.card__category--green {
  background: #d1fae5 !important;
  color: #047857 !important;
  border-color: rgba(16, 185, 129, 0.4) !important;
}

.card__category--purple {
  background: #ede9fe !important;
  color: #6d28d9 !important;
  border-color: rgba(139, 92, 246, 0.4) !important;
}
`;

// 6. Page headers (Sunny, luminous daylight header)
css = css.replace(
  /\.page-header\s*\{[\s\S]*?position:\s*relative;[\s\S]*?overflow:\s*hidden;\s*\}/m,
  `.page-header {
  background: 
    linear-gradient(135deg, rgba(224, 247, 250, 0.95) 0%, rgba(254, 249, 219, 0.95) 50%, rgba(224, 242, 254, 0.95) 100%),
    url('../images/banner-eclatante.jpg') center 20% / cover no-repeat;
  border-bottom: 3.5px solid #00bac7;
  padding: var(--space-3xl) 0 var(--space-2xl);
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 25px rgba(0, 186, 199, 0.12), 0 2px 6px rgba(245, 158, 11, 0.08);
}`
);

css = css.replace(
  /\.page-header__title\s*\{[\s\S]*?margin-bottom:\s*var\(--space-sm\);\s*\}/m,
  `.page-header__title {
  position: relative;
  font-size: var(--fs-2xl);
  font-weight: var(--fw-extra-bold);
  color: #0f2942;
  margin-bottom: var(--space-sm);
  text-shadow: none;
}`
);

css = css.replace(
  /\.page-header__subtitle\s*\{[\s\S]*?margin-inline:\s*auto;\s*\}/m,
  `.page-header__subtitle {
  position: relative;
  font-size: var(--fs-md);
  color: #091e3a;
  max-width: 620px;
  margin-inline: auto;
  line-height: 1.6;
  font-weight: 500;
}`
);

// 7. CTA Banner (Vibrant turquoise with golden border)
css = css.replace(
  /\.cta-banner\s*\{[\s\S]*?\.cta-banner__text\s*\{[\s\S]*?margin-inline:\s*auto;\s*\}\s*\}/m,
  `.cta-banner {
  background: linear-gradient(135deg, #00bac7 0%, #0ea5e9 60%, #38bdf8 100%);
  border: 3px solid #fbbf24;
  border-radius: var(--radius-xl);
  padding: var(--space-3xl) var(--space-xl);
  text-align: center;
  color: #ffffff;
  margin-block: var(--space-2xl);
  box-shadow: 0 16px 45px rgba(0, 186, 199, 0.35), 0 4px 15px rgba(245, 158, 11, 0.25);
  position: relative;
  overflow: hidden;
}

.cta-banner__title {
  font-size: var(--fs-xl);
  color: #ffffff;
  margin-bottom: var(--space-sm);
  text-shadow: 0 2px 10px rgba(12, 35, 64, 0.35);
}

.cta-banner__text {
  color: rgba(255, 255, 255, 0.96);
  margin-bottom: var(--space-xl);
  max-width: 560px;
  margin-inline: auto;
  font-size: var(--fs-base);
  line-height: 1.6;
  font-weight: 500;
}`
);

// 8. Footer (100% luminous daylight footer with rainbow border)
const vibrantFooterCss = `.footer {
  background: linear-gradient(180deg, #ffffff 0%, #f0fdfa 40%, #e0f2fe 100%);
  color: #1e293b;
  padding: var(--space-3xl) 0 var(--space-xl);
  margin-top: var(--space-3xl);
  border-top: 4px solid;
  border-image: linear-gradient(90deg, #00bac7, #fbbf24, #f43f5e, #10b981) 1;
  box-shadow: 0 -10px 30px rgba(0, 186, 199, 0.08);
}

.footer-grid,
.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
}

@media (min-width: 768px) {
  .footer-grid,
  .footer__grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.footer-col h4,
.footer__title {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: var(--fw-extra-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0f2b48;
  margin-bottom: var(--space-md);
  position: relative;
  display: inline-block;
}

.footer-col h4::after,
.footer__title::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 32px;
  height: 3px;
  background: linear-gradient(90deg, #00bac7, #fbbf24);
  border-radius: 2px;
}

.footer-col p,
.footer__text {
  font-size: var(--fs-sm);
  line-height: 1.7;
  color: #334e68;
}

.footer-col ul,
.footer__links {
  list-style: none;
}

.footer-col li + li,
.footer__links li + li {
  margin-top: var(--space-sm);
}

.footer-col a,
.footer__links a {
  font-size: var(--fs-sm);
  color: #1e3a5f;
  font-weight: 600;
  transition: all var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.footer-col a:hover,
.footer__links a:hover {
  color: #00bac7;
  transform: translateX(4px);
}

.footer__contact a,
.footer-col a[href*="wa.me"] {
  font-size: var(--fs-sm);
  color: #047857 !important;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.6rem 1.15rem;
  background: #ecfdf5;
  border: 1.5px solid #a7f3d0;
  border-radius: 100px;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);
}

.footer__contact a:hover,
.footer-col a[href*="wa.me"]:hover {
  background: #25D366 !important;
  color: #ffffff !important;
  border-color: #25D366;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.4);
}

.footer-bottom,
.footer__bottom {
  border-top: 1px solid rgba(0, 186, 199, 0.2);
  padding-top: var(--space-lg);
  text-align: center;
  font-size: var(--fs-xs);
  color: #64748b;
}`;

css = css.replace(
  /\.footer\s*\{[\s\S]*?\.footer__bottom\s*\{[\s\S]*?color:\s*var\(--text-light\);\s*\}/m,
  vibrantFooterCss
);

// 9. Additional compatibility rules (products, articles, sidebar)
const extraRules = `
${sunBadgeStyle}
${categoryBadgeRules}

/* Horizontal Product Showcase */
.product-horizontal {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: var(--radius-lg);
  border: 1.5px solid rgba(0, 186, 199, 0.2);
  background: #ffffff;
  overflow: hidden;
  margin-bottom: var(--space-2xl);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}

.product-horizontal:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 35px rgba(0, 186, 199, 0.18);
  border-color: #00bac7;
}

@media (min-width: 860px) {
  .product-horizontal {
    grid-template-columns: 280px 1fr;
  }
}

.product-horizontal__img-wrap {
  background: linear-gradient(145deg, #e0f2fe 0%, #fef9c3 50%, #f0fdf4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
  border-bottom: 1px solid var(--border);
}

@media (min-width: 860px) {
  .product-horizontal__img-wrap {
    border-bottom: none;
    border-right: 1px solid var(--border);
  }
}

.product-horizontal__cover {
  max-width: 200px;
  width: 100%;
  height: auto;
  border-radius: var(--radius-sm);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  transition: transform var(--transition-base);
  display: block;
}

.product-horizontal:hover .product-horizontal__cover {
  transform: scale(1.03);
}

.product-horizontal__content {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
}

/* Compatibility classes for Article pages */
.two-column {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
}

@media (min-width: 1024px) {
  .two-column {
    grid-template-columns: 1fr var(--sidebar-width);
  }
}

.article-content {
  min-width: 0;
  font-size: var(--fs-base);
  line-height: 1.85;
  color: #0f2942;
}

.article-content h1 {
  font-size: var(--fs-2xl);
  font-weight: var(--fw-extra-bold);
  color: #0f2942;
  margin-block: var(--space-md) var(--space-lg);
  line-height: 1.25;
}

.article-content h2 {
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-md);
  font-size: var(--fs-xl);
  font-weight: var(--fw-extra-bold);
  color: #0f2942;
  border-bottom: 2px solid rgba(0, 186, 199, 0.2);
  padding-bottom: 0.35rem;
}

.article-content h3 {
  margin-top: var(--space-xl);
  margin-bottom: var(--space-md);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: #007c8a;
}

.article-lead {
  font-size: var(--fs-md);
  line-height: 1.8;
  color: #0f2942;
  padding: var(--space-lg) var(--space-xl);
  background: linear-gradient(135deg, #e0f7fa 0%, #fef9c3 100%);
  border-left: 5px solid #00bac7;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-2xl);
  box-shadow: 0 4px 16px rgba(0, 186, 199, 0.1);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
  font-size: var(--fs-sm);
  color: #627d98;
  margin-bottom: var(--space-md);
}

.article-content blockquote {
  font-family: var(--font-accent);
  font-size: var(--fs-lg);
  font-style: italic;
  color: #0f2942;
  border-left: 4px solid #f59e0b;
  padding: var(--space-lg) var(--space-xl);
  margin-block: var(--space-xl);
  background: #f8fafc;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.article-content ul,
.article-content ol {
  margin-bottom: var(--space-lg);
  padding-left: var(--space-xl);
}

.article-content ul { list-style: disc; }
.article-content ol { list-style: decimal; }

.article-content li {
  margin-bottom: var(--space-sm);
  color: #334e68;
}

.sidebar-card,
.sidebar__block {
  background: #ffffff;
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: 1.5px solid rgba(0, 186, 199, 0.18);
  margin-bottom: var(--space-xl);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

.sidebar-card h3,
.sidebar__title {
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0f2942;
  margin-bottom: var(--space-md);
  border-bottom: 2px solid rgba(0, 186, 199, 0.2);
  padding-bottom: 0.4rem;
}

.sidebar-links,
.sidebar__links {
  list-style: none;
}

.sidebar-links li + li,
.sidebar__links li + li {
  margin-top: var(--space-sm);
}

.sidebar-links a,
.sidebar__links a {
  font-size: var(--fs-sm);
  color: #334e68;
  transition: all var(--transition-fast);
  display: block;
}

.sidebar-links a:hover,
.sidebar__links a:hover {
  color: #00bac7;
  transform: translateX(4px);
}

.profile-mini__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00bac7, #0284c7);
  margin: 0 auto var(--space-sm);
  display: block;
  object-fit: cover;
  object-position: center top;
  font-family: var(--font-heading);
  font-size: var(--fs-xl);
  font-weight: var(--fw-extra-bold);
  color: #ffffff;
  border: 3.5px solid #ffffff;
  box-shadow: 0 0 0 3px #fbbf24, 0 8px 24px rgba(0, 186, 199, 0.35);
}

.about-avatar {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00bac7 0%, #0284c7 50%, #38bdf8 100%);
  display: block;
  object-fit: cover;
  object-position: center top;
  font-family: var(--font-heading);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-extra-bold);
  color: #ffffff;
  margin: 0 auto var(--space-xl);
  border: 4.5px solid #ffffff;
  box-shadow: 0 0 0 4px #fbbf24, 0 12px 35px rgba(0, 186, 199, 0.4);
}

.header .container,
.header__inner {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  height: 100% !important;
}

@media (min-width: 768px) {
  .nav__list,
  .nav-list {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: var(--space-lg) !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .nav__list li,
  .nav-list li {
    display: inline-flex !important;
    align-items: center !important;
  }
}

.footer__contact a[href*="mailto"],
.footer-col a[href*="mailto"] {
  font-size: var(--fs-sm);
  color: #0284c7 !important;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.6rem 1.15rem;
  background: #f0f9ff;
  border: 1.5px solid #bae6fd;
  border-radius: 100px;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.12);
}

.footer__contact a[href*="mailto"]:hover,
.footer-col a[href*="mailto"]:hover {
  background: #0284c7 !important;
  color: #ffffff !important;
  border-color: #0284c7;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(2, 132, 199, 0.35);
}
`;

// Remove dark mode media query completely (preserve radiant daylight theme)
const darkIdx = css.indexOf('@media (prefers-color-scheme: dark)');
if (darkIdx !== -1) {
  css = css.slice(0, darkIdx);
}

css += extraRules;

// Clean up any lingering faint off-white or translucent cream text
css = css.replace(/rgba\(245,\s*240,\s*232,\s*0\.75\)/g, '#1e293b');
css = css.replace(/rgba\(245,\s*240,\s*232,\s*0\.7\)/g, '#1e293b');
css = css.replace(/rgba\(245,\s*240,\s*232,\s*0\.45\)/g, '#475569');
css = css.replace(/rgba\(245,\s*240,\s*232,\s*0\.8\)/g, '#091e3a');

fs.writeFileSync(path.join(siteDir, 'css', 'style.css'), css, 'utf8');
console.log('Successfully built dazzling, brilliant & joyful style.css! Total lines:', css.split('\n').length);

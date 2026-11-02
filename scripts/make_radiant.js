const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site');
const cssPath = path.join(siteDir, 'css', 'style.css');

let css = fs.readFileSync(cssPath, 'utf8');

// 1. Purge dark navy and morbid color variables
css = css.replace(/--navy-deep:\s*#0e2038;/g, '--navy-deep: #0f2b48;');
css = css.replace(/--navy-darker:\s*#081526;/g, '--navy-darker: #0284c7;');
css = css.replace(/--navy-surface:\s*#142842;/g, '--navy-surface: #e0f2fe;');
css = css.replace(/--bg-footer:\s*#0c1e33;/g, '--bg-footer: #ffffff;');
css = css.replace(/--text-dark:\s*#0e2038;/g, '--text-dark: #0f2942;');
css = css.replace(/--midnight-blue:\s*var\(--navy-darker\);/g, '--midnight-blue: #0284c7;');

// 2. Brighten Hero background and banner overlay
css = css.replace(
  /\.hero\s*\{[\s\S]*?padding:\s*var\(--space-4xl\)\s*0[\s\S]*?overflow:\s*hidden;[\s\S]*?min-height:\s*72vh;[\s\S]*?display:\s*flex;[\s\S]*?align-items:\s*center;\s*\}/,
  `.hero {
  position: relative;
  background-color: #f0f9ff;
  background-image: 
    linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(240, 249, 255, 0.9) 100%),
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

// 3. Brighten profile-mini cover and avatar
css = css.replace(
  /\.profile-mini__cover\s*\{[\s\S]*?background-position:\s*center center;\s*\}/,
  `.profile-mini__cover {
  height: 95px;
  background-image: linear-gradient(180deg, rgba(0, 186, 199, 0.2) 0%, rgba(2, 132, 199, 0.45) 100%), url('../images/banner-eclatante.jpg');
  background-size: cover;
  background-position: center center;
}`
);

css = css.replace(
  /\.profile-mini__avatar\s*\{[\s\S]*?background:\s*linear-gradient\(135deg,\s*var\(--navy-deep\),\s*var\(--navy-surface\)\);[\s\S]*?box-shadow:\s*0\s*0\s*0\s*3px\s*var\(--cyan-primary\),\s*0\s*8px\s*20px\s*rgba\(0,\s*186,\s*199,\s*0\.25\);\s*\}/,
  `.profile-mini__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00bac7, #0284c7);
  margin: 0 auto var(--space-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: var(--fs-xl);
  font-weight: var(--fw-extra-bold);
  color: #ffffff;
  border: 3.5px solid #ffffff;
  box-shadow: 0 0 0 3px #fbbf24, 0 8px 24px rgba(0, 186, 199, 0.35);
}`
);

// 4. Brighten product-card cover box (no dark navy box behind books)
css = css.replace(
  /background:\s*linear-gradient\(145deg,\s*#0d1a30,\s*#162544\);/g,
  'background: linear-gradient(145deg, #e0f2fe 0%, #fef9c3 50%, #f0fdf4 100%);'
);

// 5. Brighten about page avatar
css = css.replace(
  /\.about-avatar\s*\{[\s\S]*?background:\s*linear-gradient\(135deg,\s*var\(--navy-deep\),\s*var\(--navy-surface\)\);[\s\S]*?box-shadow:\s*0\s*0\s*0\s*4px\s*var\(--cyan-primary\),\s*0\s*12px\s*30px\s*rgba\(0,\s*186,\s*199,\s*0\.3\);\s*\}/,
  `.about-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00bac7 0%, #0284c7 50%, #38bdf8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-extra-bold);
  color: #ffffff;
  margin: 0 auto var(--space-xl);
  border: 4px solid #ffffff;
  box-shadow: 0 0 0 4px #fbbf24, 0 12px 35px rgba(0, 186, 199, 0.4);
}`
);

// 6. Complete transformation of the Footer to a luminous, sunny, cheerful component
const newFooterCss = `/* --------------------------------------------------------------------------
   17. FOOTER (Solaire, Lumineux & Joyeux — Zéro Sombre / Zéro Morbide)
   -------------------------------------------------------------------------- */
.footer {
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
  background: linear-gradient(90deg, var(--cyan-primary), var(--sun-gold));
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
  color: var(--cyan-primary);
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
  padding: 0.6rem 1.1rem;
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
  /\/\*\s*--------------------------------------------------------------------------\s*17\.\s*FOOTER[\s\S]*?\.footer__bottom\s*\{[\s\S]*?color:\s*var\(--text-light\);\s*\}/,
  newFooterCss
);

// 7. Harmonize all header & article components so that both BEM & article page classes work flawlessly
const extraCompatibilityCss = `
/* --------------------------------------------------------------------------
   ARTICLE & GLOBAL COMPATIBILITY SUITE (All 20 Articles & Root Pages)
   -------------------------------------------------------------------------- */
.header .container,
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo,
.header__logo {
  font-family: var(--font-heading);
  font-weight: var(--fw-extra-bold);
  font-size: var(--fs-lg);
  color: #0c2340;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo span,
.header__logo span.logo-accent {
  background: linear-gradient(135deg, #00bac7 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-list,
.nav__list {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  list-style: none;
}

.nav-list a,
.nav__link {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 700;
  color: #1e3a5f;
  transition: all var(--transition-fast);
  position: relative;
  padding: 0.45rem 1.15rem;
  border-radius: 100px;
}

.nav-list a:hover,
.nav__link:hover {
  color: #007c8a;
  background: #e0f7fa;
}

.nav-list a.active,
.nav__link--active {
  color: #ffffff !important;
  background: linear-gradient(135deg, var(--cyan-primary), #0284c7);
  box-shadow: 0 4px 14px rgba(0, 186, 199, 0.35);
}

.menu-toggle,
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  z-index: 1002;
  border: none;
  background: none;
  cursor: pointer;
}

.menu-toggle span,
.hamburger span {
  display: block;
  width: 100%;
  height: 2.5px;
  background: #0c2340;
  border-radius: 2px;
}

/* Two-column layout support for both class names */
.two-col,
.two-column {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-3xl);
}

@media (min-width: 1024px) {
  .two-col,
  .two-column {
    grid-template-columns: 1fr var(--sidebar-width);
  }
}

/* Article Page Typography & Elements */
.article-content,
.article-body {
  font-size: var(--fs-base);
  line-height: 1.85;
  color: var(--text-medium);
  min-width: 0;
}

.article-content h1 {
  font-size: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  font-weight: var(--fw-extra-bold);
  color: #0f2b48;
  margin-block: var(--space-md) var(--space-lg);
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.article-content h2,
.article-body h2 {
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-md);
  font-size: var(--fs-xl);
  font-weight: var(--fw-extra-bold);
  color: #0f2b48;
  letter-spacing: -0.01em;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid rgba(0, 186, 199, 0.15);
}

.article-content h3,
.article-body h3 {
  margin-top: var(--space-xl);
  margin-bottom: var(--space-md);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: #007c8a;
}

.article-content p,
.article-body p {
  margin-bottom: var(--space-md);
}

.article-lead {
  font-size: var(--fs-md);
  line-height: 1.8;
  color: #0f2b48;
  font-weight: 500;
  padding: var(--space-lg) var(--space-xl);
  background: linear-gradient(135deg, #e0f7fa 0%, #fef9c3 100%);
  border-left: 5px solid var(--cyan-primary);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-2xl);
  box-shadow: 0 6px 20px rgba(0, 186, 199, 0.12);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
  font-size: var(--fs-sm);
  color: var(--text-light);
  margin-bottom: var(--space-md);
}

.category-badge {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: var(--fs-xs);
  font-weight: var(--fw-extra-bold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.95rem;
  border-radius: 100px;
  background: #e0f2fe;
  color: #0284c7;
  border: 1px solid rgba(2, 132, 199, 0.25);
}

.article-content blockquote,
.article-body blockquote {
  font-family: var(--font-accent);
  font-size: var(--fs-lg);
  font-style: italic;
  color: #0f2b48;
  background: #f8fafc;
  border-left: 4px solid var(--sun-gold);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: var(--space-lg) var(--space-xl);
  margin-block: var(--space-xl);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.article-content ul,
.article-content ol,
.article-body ul,
.article-body ol {
  margin-bottom: var(--space-lg);
  padding-left: var(--space-xl);
}

.article-content ul,
.article-body ul { list-style: disc; }
.article-content ol,
.article-body ol { list-style: decimal; }

.article-content li,
.article-body li {
  margin-bottom: var(--space-sm);
}

/* Sidebar cards and lists */
.sidebar-card,
.sidebar__block {
  background: #ffffff;
  border: 1.5px solid rgba(0, 186, 199, 0.15);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  margin-bottom: var(--space-xl);
}

.sidebar-card h3,
.sidebar__title {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: var(--fw-extra-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0f2b48;
  margin-bottom: var(--space-md);
  position: relative;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid rgba(0, 186, 199, 0.2);
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
  color: var(--text-medium);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.4rem 0.6rem;
  border-radius: var(--radius-sm);
}

.sidebar-links a:hover,
.sidebar__links a:hover {
  color: var(--cyan-primary);
  background: var(--cyan-light);
  transform: translateX(4px);
}

.toc ul {
  list-style: none;
}

.toc li + li {
  margin-top: var(--space-xs);
}

.toc a {
  font-size: var(--fs-sm);
  color: #334e68;
  display: block;
  padding: 0.35rem 0.5rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.toc a:hover {
  color: var(--cyan-primary);
  background: var(--cyan-light);
  font-weight: 600;
}
`;

css += extraCompatibilityCss;

fs.writeFileSync(cssPath, css, 'utf8');
console.log('style.css updated successfully with 100% radiant, luminous styling!');

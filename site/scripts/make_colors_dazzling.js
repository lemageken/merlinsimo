const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site');
const cssPath = path.join(siteDir, 'css', 'style.css');

let css = fs.readFileSync(cssPath, 'utf8');

// 1. Transform root variables to dazzling, brilliant & joyful colors
css = css.replace(/--midnight-blue:\s*#[0-9a-fA-F]+;/g, '--midnight-blue: #00bac7;');
css = css.replace(/--deep-blue:\s*#[0-9a-fA-F]+;/g, '--deep-blue: #0284c7;');
css = css.replace(/--electric-blue:\s*#[0-9a-fA-F]+;/g, '--electric-blue: #00bac7;');
css = css.replace(/--electric-blue-hover:\s*#[0-9a-fA-F]+;/g, '--electric-blue-hover: #009aa7;');
css = css.replace(/--off-white:\s*#[0-9a-fA-F]+;/g, '--off-white: #f0f9ff;');
css = css.replace(/--warm-white:\s*#[0-9a-fA-F]+;/g, '--warm-white: #f8fbfe;');
css = css.replace(/--gold:\s*#[0-9a-fA-F]+;/g, '--gold: #f59e0b;');
css = css.replace(/--coral:\s*#[0-9a-fA-F]+;/g, '--coral: #f43f5e;');
css = css.replace(/--text-dark:\s*#[0-9a-fA-F]+;/g, '--text-dark: #0f2942;');
css = css.replace(/--text-medium:\s*#[0-9a-fA-F]+;/g, '--text-medium: #334e68;');
css = css.replace(/--text-light:\s*#[0-9a-fA-F]+;/g, '--text-light: #627d98;');
css = css.replace(/--border:\s*[^;]+;/g, '--border: rgba(0, 186, 199, 0.2);');

// Surfaces
css = css.replace(/--bg-body:\s*[^;]+;/g, '--bg-body: #f8fbfe;');
css = css.replace(/--bg-section:\s*[^;]+;/g, '--bg-section: #ffffff;');
css = css.replace(/--bg-card:\s*[^;]+;/g, '--bg-card: #ffffff;');
css = css.replace(/--bg-sidebar:\s*[^;]+;/g, '--bg-sidebar: #ffffff;');
css = css.replace(/--bg-header:\s*[^;]+;/g, '--bg-header: #ffffff;');
css = css.replace(/--bg-footer:\s*[^;]+;/g, '--bg-footer: #ffffff;');
css = css.replace(/--bg-hero:\s*[^;]+;/g, '--bg-hero: #f0f9ff;');

// 2. Header styling (Brilliant white with glowing cyan/gold accents)
css = css.replace(
  /\.header\s*\{[\s\S]*?z-index:\s*1000;\s*\}/,
  `.header {
  position: sticky;
  top: 0;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 2px solid rgba(0, 186, 199, 0.2);
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 186, 199, 0.08);
}`
);

// Header logo with sun badge
css = css.replace(
  /\.header__logo\s*\{[\s\S]*?gap:\s*0\.5rem;\s*\}/,
  `.header__logo,
.logo {
  font-family: var(--font-heading);
  font-weight: var(--fw-extra-bold);
  font-size: var(--fs-lg);
  color: #0f2942;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}`
);

// Navigation links styling
css = css.replace(
  /\.nav__link\s*\{[\s\S]*?padding:\s*0\.35rem\s*0\.5rem;\s*\}/,
  `.nav__link,
.nav-list a {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: 700;
  color: #1e3a5f;
  transition: all var(--transition-fast);
  padding: 0.45rem 1.15rem;
  border-radius: 100px;
}`
);

css = css.replace(
  /\.nav__link:hover,\s*\.nav__link--active\s*\{[\s\S]*?color:\s*var\(--electric-blue\);\s*\}/,
  `.nav__link:hover,
.nav-list a:hover {
  color: #007c8a;
  background: #e0f7fa;
}

.nav__link--active,
.nav-list a.active {
  color: #ffffff !important;
  background: linear-gradient(135deg, #00bac7, #0284c7) !important;
  box-shadow: 0 4px 14px rgba(0, 186, 199, 0.35);
}`
);

// 3. Hero styling (Sun-drenched, radiant daylight panoramic background)
css = css.replace(
  /\.hero\s*\{[\s\S]*?min-height:\s*70vh;[\s\S]*?display:\s*flex;[\s\S]*?align-items:\s*center;\s*\}/,
  `.hero {
  position: relative;
  background-color: #f0f9ff;
  background-image: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(240, 249, 255, 0.9) 50%, rgba(254, 249, 219, 0.88) 100%),
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

// Hero title and tagline
css = css.replace(
  /\.hero__title\s*\{[\s\S]*?letter-spacing:\s*-0\.03em;\s*\}/,
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
  /\.hero__tagline\s*\{[\s\S]*?margin-bottom:\s*var\(--space-lg\);\s*\}/,
  `.hero__tagline {
  font-family: var(--font-heading);
  font-size: clamp(1.15rem, 0.95rem + 1vw, 1.55rem);
  color: #0f2942;
  font-weight: var(--fw-extra-bold);
  letter-spacing: -0.01em;
  margin: 0;
}`
);

css = css.replace(
  /\.hero__promise\s*\{[\s\S]*?font-weight:\s*var\(--fw-medium\);\s*\}/,
  `.hero__promise {
  font-size: var(--fs-md);
  color: #334e68;
  margin-block: var(--space-md) var(--space-2xl);
  font-weight: 500;
  max-width: 660px;
  margin-inline: auto;
  line-height: 1.7;
}`
);

// 4. Page headers styling (Dazzling, sunny daylight header on all pages)
css = css.replace(
  /\.page-header\s*\{[\s\S]*?position:\s*relative;[\s\S]*?overflow:\s*hidden;\s*\}/,
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
  /\.page-header__title\s*\{[\s\S]*?margin-bottom:\s*var\(--space-sm\);\s*\}/,
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
  /\.page-header__subtitle\s*\{[\s\S]*?margin-inline:\s*auto;\s*\}/,
  `.page-header__subtitle {
  position: relative;
  font-size: var(--fs-md);
  color: #334e68;
  max-width: 620px;
  margin-inline: auto;
  line-height: 1.6;
  font-weight: 500;
}`
);

// 5. Product showcase styling (No dark navy boxes behind books)
css = css.replace(
  /\.product-horizontal__img-wrap\s*\{[\s\S]*?border-bottom:\s*1px\s*solid\s*var\(--border\);\s*\}/,
  `.product-horizontal__img-wrap {
  background: linear-gradient(145deg, #e0f2fe 0%, #fef9c3 50%, #f0fdf4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
  border-bottom: 1px solid var(--border);
}`
);

// 6. Buttons styling (Brilliant, joyful, high-energy buttons)
css = css.replace(
  /\.btn--primary\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*14px\s*rgba\(37,99,235,0\.35\);\s*\}/,
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
  /\.btn--primary:hover,\s*\.btn--primary:focus-visible\s*\{[\s\S]*?box-shadow:\s*0\s*6px\s*20px\s*rgba\(37,99,235,0\.45\);\s*\}/,
  `.btn--primary:hover,
.btn--primary:focus-visible {
  background: linear-gradient(135deg, #009aa7, #0274b0);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 186, 199, 0.45);
}`
);

css = css.replace(
  /\.btn--secondary\s*\{[\s\S]*?border:\s*1\.5px\s*solid\s*rgba\(245,\s*240,\s*232,\s*0\.3\);\s*\}/,
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
  /\.btn--secondary:hover,\s*\.btn--secondary:focus-visible\s*\{[\s\S]*?transform:\s*translateY\(-2px\);\s*\}/,
  `.btn--secondary:hover,
.btn--secondary:focus-visible {
  background: linear-gradient(135deg, #d97706, #f59e0b);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(245, 158, 11, 0.45);
}`
);

css = css.replace(
  /\.btn--gold\s*\{[\s\S]*?color:\s*var\(--midnight-blue\);\s*\}/,
  `.btn--gold {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  color: #0f2942;
  border-radius: 100px;
  font-weight: var(--fw-extra-bold);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
}`
);

// 7. Footer styling (100% luminous daylight footer with rainbow border)
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
  /\.footer\s*\{[\s\S]*?\.footer__bottom\s*\{[\s\S]*?color:\s*var\(--text-light\);\s*\}/,
  vibrantFooterCss
);

// 8. Sidebar & profile mini avatar
css = css.replace(
  /\.profile-mini__avatar\s*\{[\s\S]*?box-shadow:\s*0\s*0\s*0\s*4px\s*rgba\(37,99,235,0\.15\);\s*\}/,
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

// 9. About page avatar
css = css.replace(
  /\.about-avatar\s*\{[\s\S]*?box-shadow:\s*0\s*0\s*0\s*6px\s*rgba\(37,99,235,0\.15\);\s*\}/,
  `.about-avatar {
  width: 150px;
  height: 150px;
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

// 10. CTA banner styling (Vibrant and warm, not dark)
css = css.replace(
  /\.cta-banner\s*\{[\s\S]*?\.cta-banner__text\s*\{[\s\S]*?margin-inline:\s*auto;\s*\}\s*\}/,
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

fs.writeFileSync(cssPath, css, 'utf8');
console.log('style.css successfully updated with dazzling, brilliant & joyful colors!');

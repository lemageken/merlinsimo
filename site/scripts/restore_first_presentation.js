const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('d:/ANTIGRAVITY/projets/site-genie/site');

// 1. Build the complete original style.css
const origCssPath = path.join(siteDir, 'scripts', 'original_style.css');
let baseCss = fs.readFileSync(origCssPath, 'utf8');

// Add styles for the real product images (.product-horizontal, .product-horizontal__cover, etc.)
// and compatibility classes for articles (.two-column, .article-content, etc.)
const additionalOriginalStyles = `
/* --------------------------------------------------------------------------
   ADDITIONAL EDITORIAL STYLES FOR REAL SHOP PRODUCTS & ARTICLE COMPATIBILITY
   (Maintains 100% fidelity to the original Wily Walnut editorial design system)
   -------------------------------------------------------------------------- */

/* Horizontal Product Showcase */
.product-horizontal {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--bg-card);
  overflow: hidden;
  margin-bottom: var(--space-2xl);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}

.product-horizontal:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--electric-blue);
}

@media (min-width: 860px) {
  .product-horizontal {
    grid-template-columns: 280px 1fr;
  }
}

.product-horizontal__img-wrap {
  background: linear-gradient(135deg, var(--midnight-blue) 0%, var(--deep-blue) 100%);
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
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
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
  color: var(--text-dark);
}

.article-content h1 {
  font-size: var(--fs-2xl);
  font-weight: var(--fw-extra-bold);
  color: var(--text-dark);
  margin-block: var(--space-md) var(--space-lg);
  line-height: 1.25;
}

.article-content h2 {
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-md);
  font-size: var(--fs-xl);
  font-weight: var(--fw-extra-bold);
  color: var(--text-dark);
  border-bottom: 2px solid var(--border);
  padding-bottom: 0.35rem;
}

.article-content h3 {
  margin-top: var(--space-xl);
  margin-bottom: var(--space-md);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--electric-blue);
}

.article-lead {
  font-size: var(--fs-md);
  line-height: 1.8;
  color: var(--text-dark);
  padding: var(--space-lg) var(--space-xl);
  background: var(--off-white);
  border-left: 4px solid var(--electric-blue);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-2xl);
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
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.3rem 0.85rem;
  border-radius: 100px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--electric-blue);
}

.article-content blockquote {
  font-family: var(--font-accent);
  font-size: var(--fs-lg);
  font-style: italic;
  color: var(--electric-blue);
  border-left: 3px solid var(--gold);
  padding-left: var(--space-lg);
  margin-block: var(--space-xl);
  background: var(--off-white);
  padding: var(--space-lg) var(--space-xl);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
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
  color: var(--text-medium);
}

.sidebar-card {
  background: var(--bg-sidebar);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: 1px solid var(--border);
  margin-bottom: var(--space-xl);
}

.sidebar-card h3 {
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-light);
  margin-bottom: var(--space-md);
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.4rem;
}

.sidebar-links {
  list-style: none;
}

.sidebar-links li + li {
  margin-top: var(--space-sm);
}

.sidebar-links a {
  font-size: var(--fs-sm);
  color: var(--text-medium);
  transition: all var(--transition-fast);
  display: block;
}

.sidebar-links a:hover {
  color: var(--electric-blue);
  transform: translateX(4px);
}

.toc ul { list-style: none; }
.toc li + li { margin-top: var(--space-xs); }
.toc a {
  font-size: var(--fs-sm);
  color: var(--text-medium);
  display: block;
  padding: 0.25rem 0.4rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}
.toc a:hover {
  color: var(--electric-blue);
  background: rgba(37, 99, 235, 0.06);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.footer-col h4 {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--off-white);
  margin-bottom: var(--space-md);
}

.footer-col p {
  font-size: var(--fs-sm);
  line-height: 1.7;
  color: rgba(245, 240, 232, 0.75);
}

.footer-col ul { list-style: none; }
.footer-col li + li { margin-top: var(--space-sm); }
.footer-col a {
  font-size: var(--fs-sm);
  color: rgba(245, 240, 232, 0.75);
  transition: color var(--transition-fast);
}
.footer-col a:hover {
  color: var(--electric-blue);
}

.footer-bottom {
  border-top: 1px solid rgba(245, 240, 232, 0.1);
  padding-top: var(--space-lg);
  text-align: center;
  font-size: var(--fs-xs);
  color: var(--text-light);
}

.logo {
  font-family: var(--font-heading);
  font-weight: var(--fw-extra-bold);
  font-size: var(--fs-lg);
  color: var(--off-white);
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo span {
  background: linear-gradient(135deg, var(--electric-blue), var(--gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  list-style: none;
}

.nav-list a {
  font-family: var(--font-heading);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: rgba(245, 240, 232, 0.85);
  transition: color var(--transition-fast);
  padding: 0.35rem 0.5rem;
}

.nav-list a:hover,
.nav-list a.active {
  color: var(--electric-blue);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
`;

const finalStyleCss = baseCss + additionalOriginalStyles;
fs.writeFileSync(path.join(siteDir, 'css', 'style.css'), finalStyleCss, 'utf8');
console.log('Original style.css restored with product & article compatibility extensions!');

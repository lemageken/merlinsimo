const fs = require('fs');
const path = 'd:/ANTIGRAVITY/projets/site-genie/site/css/style.css';
let css = fs.readFileSync(path, 'utf8');

if (!css.includes('/* --- RUBRIQUE ENFANTS & COMPOSANTS ENRICHIS --- */')) {
  const extraCss = `

/* --- RUBRIQUE ENFANTS & COMPOSANTS ENRICHIS --- */

/* Breadcrumbs */
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--fs-xs);
  color: var(--text-light);
  margin-bottom: var(--space-lg);
  flex-wrap: wrap;
}
.breadcrumbs a {
  color: var(--text-medium);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.breadcrumbs a:hover {
  color: var(--electric-blue);
}
.breadcrumbs__sep {
  color: var(--border);
}
.breadcrumbs__current {
  color: var(--text-dark);
  font-weight: 600;
}

/* Rubrique Hero Banner */
.rubrique-hero {
  background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #fffbeb 100%);
  border-bottom: 1px solid var(--border);
  padding: var(--space-3xl) 0;
  position: relative;
  overflow: hidden;
}
.rubrique-hero__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-2xl);
  align-items: center;
}
@media (max-width: 900px) {
  .rubrique-hero__grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}
.rubrique-hero__img-wrapper {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(0, 186, 199, 0.25);
  border: 3px solid #ffffff;
}
.rubrique-hero__img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform var(--transition-medium);
}
.rubrique-hero__img:hover {
  transform: scale(1.02);
}

/* Search & Filter Bar */
.filter-search-container {
  background: #ffffff;
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid var(--border);
  margin-bottom: var(--space-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
.search-wrapper {
  position: relative;
  width: 100%;
}
.search-input {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 2.85rem;
  font-family: var(--font-body);
  font-size: var(--fs-sm);
  border: 1.5px solid var(--border);
  border-radius: 12px;
  background: #f8fafc;
  color: var(--text-dark);
  transition: all var(--transition-fast);
  outline: none;
}
.search-input:focus {
  border-color: var(--electric-blue);
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(0, 186, 199, 0.15);
}
.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  pointer-events: none;
}

/* Social Share Bar */
.social-share {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: var(--space-2xl) 0;
  padding: var(--space-md);
  background: #f8fafc;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  flex-wrap: wrap;
}
.social-share__label {
  font-size: var(--fs-xs);
  font-weight: 700;
  color: var(--text-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-right: 0.5rem;
}
.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: var(--fs-xs);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-fast);
}
.share-btn--whatsapp {
  background: #25d366;
  color: #ffffff !important;
}
.share-btn--whatsapp:hover {
  background: #1eb956;
  transform: translateY(-1px);
}
.share-btn--facebook {
  background: #1877f2;
  color: #ffffff !important;
}
.share-btn--facebook:hover {
  background: #0d65d9;
  transform: translateY(-1px);
}
.share-btn--twitter {
  background: #0f1419;
  color: #ffffff !important;
}
.share-btn--twitter:hover {
  background: #272c30;
  transform: translateY(-1px);
}

/* Callouts Pédagogiques */
.callout-box {
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  margin: var(--space-xl) 0;
  position: relative;
}
.callout-box--science {
  background: #f0fdfa;
  border-left: 4px solid #0d9488;
}
.callout-box--exercise {
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
}
.callout-box--tip {
  background: #f0f9ff;
  border-left: 4px solid #0284c7;
}
.callout-box__title {
  font-family: var(--font-heading);
  font-size: var(--fs-md);
  font-weight: 700;
  margin-top: 0;
  margin-bottom: var(--space-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.callout-box--science .callout-box__title { color: #0f766e; }
.callout-box--exercise .callout-box__title { color: #b45309; }
.callout-box--tip .callout-box__title { color: #0369a1; }

/* Product Recommendation Card (Child Education) */
.product-card-child {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 2px solid #e2e8f0;
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  margin: var(--space-3xl) 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--space-xl);
  align-items: center;
}
@media (max-width: 650px) {
  .product-card-child {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .product-card-child img {
    margin: 0 auto;
    max-width: 140px;
  }
  .product-card-child .btn-group {
    justify-content: center;
  }
}
.product-card-child__img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: 0 8px 18px rgba(0,0,0,0.12);
  object-fit: cover;
}
.product-card-child__tag {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0284c7;
  background: #e0f2fe;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  display: inline-block;
  margin-bottom: var(--space-xs);
}
.product-card-child__title {
  font-family: var(--font-heading);
  font-size: var(--fs-lg);
  font-weight: 800;
  color: #091e3a;
  margin-bottom: var(--space-xs);
  line-height: 1.3;
}
.product-card-child__desc {
  font-size: var(--fs-sm);
  color: var(--text-medium);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}
.product-card-child__features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-lg) 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}
.product-card-child__features li {
  font-size: var(--fs-xs);
  color: var(--text-dark);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.product-card-child__features li::before {
  content: '✓';
  color: #059669;
  font-weight: 800;
}
`;

  fs.appendFileSync(path, extraCss, 'utf8');
  console.log('Appended enriched CSS for Enfants section successfully!');
} else {
  console.log('Enfants section CSS already present.');
}

const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'site', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const startMarker = '/* Desktop navigation */';
const endMarker = '/* --------------------------------------------------------------------------\n   6. HERO / BANNER';

const startIdx = css.indexOf(startMarker);
const endIdx = css.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
    console.error('Markers not found!', startIdx, endIdx);
    process.exit(1);
}

const replacement = `/* Navigation desktop & globale */
.nav {
  display: flex;
  align-items: center;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 1.35vw, 1.5rem);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__item {
  display: inline-flex;
  align-items: center;
}

.nav__link,
.nav-list a {
  font-family: var(--font-heading);
  font-size: clamp(0.82rem, 0.78rem + 0.15vw, 0.92rem);
  font-weight: 600;
  color: #091e3a;
  transition: color var(--transition-fast);
  position: relative;
  padding: var(--space-xs) 0.1rem;
  text-decoration: none;
  white-space: nowrap;
}

/* Indicateur anime sous le lien actif/survole (style original d'excellence) */
.nav__link::after,
.nav-list a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--electric-blue);
  transition: width var(--transition-base);
  border-radius: 1px;
}

.nav__link:hover,
.nav__link:focus-visible,
.nav-list a:hover {
  color: #008fa0;
}

.nav__link--active,
.nav-list a.active {
  color: #008fa0;
  font-weight: 700;
}

.nav__link:hover::after,
.nav__link:focus-visible::after,
.nav__link--active::after,
.nav-list a:hover::after,
.nav-list a.active::after {
  width: 100%;
}

/* Bouton Hamburger mobile */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  padding: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1002;
  transition: opacity var(--transition-fast);
  box-sizing: border-box;
}

.hamburger:hover {
  opacity: 0.8;
}

.hamburger__line,
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #091e3a;
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-fast), background-color var(--transition-fast);
}

.hamburger[aria-expanded="true"] .hamburger__line:nth-child(1),
.hamburger[aria-expanded="true"] span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background: #008fa0;
}
.hamburger[aria-expanded="true"] .hamburger__line:nth-child(2),
.hamburger[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger[aria-expanded="true"] .hamburger__line:nth-child(3),
.hamburger[aria-expanded="true"] span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background: #008fa0;
}

/* Navigation Mobile / Tablette (< 992px) */
@media (max-width: 991px) {
  .hamburger {
    display: flex;
  }

  .nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    height: calc(100dvh - var(--header-height));
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1.5rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    border-top: 1px solid rgba(0, 186, 199, 0.15);
    box-shadow: 0 20px 40px rgba(9, 30, 58, 0.1);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-10px);
    transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s ease;
    z-index: 1001;
    box-sizing: border-box;
  }

  .nav[data-open="true"] {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    width: 100%;
    max-width: 360px;
    margin: auto 0;
    padding: 0;
    list-style: none;
  }

  .nav__item {
    width: auto;
    display: block;
    text-align: center;
  }

  .nav__link,
  .nav-list a {
    display: inline-block;
    padding: 0.35rem 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #091e3a;
    text-decoration: none;
    position: relative;
    background: transparent;
    border: none;
    box-shadow: none;
    border-radius: 0;
    transition: color var(--transition-fast);
  }

  .nav__link::after,
  .nav-list a::after {
    bottom: -2px;
  }

  .nav__link:hover,
  .nav__link:active,
  .nav-list a:hover,
  .nav-list a:active {
    color: #008fa0;
    background: transparent;
  }

  .nav__link--active,
  .nav-list a.active {
    color: #008fa0;
    font-weight: 700;
    background: transparent;
    box-shadow: none;
  }
}

/* Ajustement ecrans courts en mode paysage */
@media (max-width: 991px) and (max-height: 600px) {
  .nav {
    justify-content: flex-start;
    padding: 1.25rem 1rem 2rem;
  }
  .nav__list {
    margin: 0 auto;
    gap: 0.75rem;
  }
  .nav__link,
  .nav-list a {
    font-size: 1.05rem;
  }
}

`;

css = css.slice(0, startIdx) + replacement + css.slice(endIdx);
fs.writeFileSync(cssPath, css, 'utf8');
console.log('✓ Successfully replaced nav CSS in style.css');

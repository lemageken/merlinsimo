/* ==========================================================================
   MERLIN SIMO — Main JavaScript
   Vanilla JS — No dependencies
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. MOBILE MENU TOGGLE
     -------------------------------------------------------------------------- */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      nav.setAttribute('data-open', String(!isOpen));
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.setAttribute('data-open', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.setAttribute('data-open', 'false');
        document.body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. SMOOTH SCROLLING (for same-page anchors)
     -------------------------------------------------------------------------- */
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL without scroll jump
          history.pushState(null, '', targetId);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. SCROLL-TRIGGERED FADE-IN ANIMATIONS (IntersectionObserver)
     -------------------------------------------------------------------------- */
  function initFadeInAnimations() {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.fade-in').forEach(function (el) {
        el.classList.add('fade-in--visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --------------------------------------------------------------------------
     4. ACTIVE NAV LINK HIGHLIGHTING
     -------------------------------------------------------------------------- */
  function initActiveNavLink() {
    var currentPath = window.location.pathname;
    // Normalize: remove trailing slash, get filename
    var filename = currentPath.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav__link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var linkFile = href.split('/').pop().split('#')[0].split('?')[0];

      // Match index
      if (
        (filename === '' || filename === 'index.html') &&
        (linkFile === '' || linkFile === 'index.html' || href === './' || href === '/')
      ) {
        link.classList.add('nav__link--active');
      } else if (linkFile && filename === linkFile) {
        link.classList.add('nav__link--active');
      } else if (filename.indexOf('articles') !== -1 && linkFile === 'articles.html') {
        // Also highlight "Articles" when on an article sub-page
        link.classList.add('nav__link--active');
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. BACK TO TOP BUTTON
     -------------------------------------------------------------------------- */
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;

    var threshold = 400;

    function toggle() {
      if (window.scrollY > threshold) {
        btn.classList.add('back-to-top--visible');
      } else {
        btn.classList.remove('back-to-top--visible');
      }
    }

    window.addEventListener('scroll', throttle(toggle, 100), { passive: true });
    toggle();

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     6. READING PROGRESS BAR (article pages)
     -------------------------------------------------------------------------- */
  function initReadingProgress() {
    var bar = document.querySelector('.reading-progress');
    if (!bar) return;

    var article = document.querySelector('.article-body') || document.querySelector('.main-content');
    if (!article) return;

    function update() {
      var rect = article.getBoundingClientRect();
      var articleTop = rect.top + window.scrollY;
      var articleHeight = article.offsetHeight;
      var scrolled = window.scrollY - articleTop;
      var progress = Math.min(Math.max(scrolled / (articleHeight - window.innerHeight), 0), 1);
      bar.style.width = (progress * 100).toFixed(1) + '%';
    }

    window.addEventListener('scroll', throttle(update, 50), { passive: true });
    update();
  }

  /* --------------------------------------------------------------------------
     7. SIDEBAR TABLE OF CONTENTS — active section tracking
     -------------------------------------------------------------------------- */
  function initTOCTracking() {
    var tocLinks = document.querySelectorAll('.toc__list a');
    if (!tocLinks.length) return;

    var headings = [];
    tocLinks.forEach(function (link) {
      var id = link.getAttribute('href');
      if (id && id.startsWith('#')) {
        var heading = document.querySelector(id);
        if (heading) headings.push({ el: heading, link: link });
      }
    });

    if (!headings.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var match = headings.find(function (h) { return h.el === entry.target; });
          if (!match) return;
          if (entry.isIntersecting) {
            tocLinks.forEach(function (l) { l.classList.remove('active'); });
            match.link.classList.add('active');
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    headings.forEach(function (h) { observer.observe(h.el); });
  }

  /* --------------------------------------------------------------------------
     8. IMAGE LAZY LOADING (fallback for browsers without native support)
     -------------------------------------------------------------------------- */
  function initLazyLoading() {
    // If native lazy-loading is supported, do nothing — the HTML already has loading="lazy"
    if ('loading' in HTMLImageElement.prototype) return;

    var images = document.querySelectorAll('img[loading="lazy"]');
    if (!images.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '200px' }
    );

    images.forEach(function (img) { observer.observe(img); });
  }

  /* --------------------------------------------------------------------------
     9. FILTER TABS (Articles page)
     -------------------------------------------------------------------------- */
  function initFilterTabs() {
    var tabs = document.querySelectorAll('.filter-tab');
    var cards = document.querySelectorAll('[data-category]');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        // Update active tab
        tabs.forEach(function (t) { t.classList.remove('filter-tab--active'); });
        tab.classList.add('filter-tab--active');

        var filter = tab.getAttribute('data-filter');

        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
            // Re-trigger fade-in
            card.classList.remove('fade-in--visible');
            void card.offsetWidth; // force reflow
            card.classList.add('fade-in--visible');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Check URL query parameter (?cat=xxx) on page load
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var initialCat = urlParams.get('cat');
      if (initialCat) {
        var matchingTab = document.querySelector('.filter-tab[data-filter="' + initialCat + '"]');
        if (matchingTab) {
          matchingTab.click();
        }
      }
    } catch (e) {
      // Graceful fallback for older environments
    }
  }

  /* --------------------------------------------------------------------------
     UTILITY: Throttle
     -------------------------------------------------------------------------- */
  function throttle(fn, wait) {
    var lastTime = 0;
    return function () {
      var now = Date.now();
      if (now - lastTime >= wait) {
        lastTime = now;
        fn.apply(this, arguments);
      }
    };
  }

  /* --------------------------------------------------------------------------
     INIT ON DOM READY
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initSmoothScrolling();
    initFadeInAnimations();
    initActiveNavLink();
    initBackToTop();
    initReadingProgress();
    initTOCTracking();
    initLazyLoading();
    initFilterTabs();
  });
})();

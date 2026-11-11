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

    // Dynamically insert mobile menu footer if absent
    if (!nav.querySelector('.nav__mobile-extra')) {
      var extra = document.createElement('div');
      extra.className = 'nav__mobile-extra';
      extra.innerHTML = '<a href="https://wa.me/237683911717" target="_blank" rel="noopener noreferrer" class="nav__mobile-whatsapp"><i class="fab fa-whatsapp"></i> Échanger sur WhatsApp (+237 683 911 717)</a><div class="nav__mobile-badge">Merlin SIMO — L\'Atelier de l\'Esprit</div>';
      nav.appendChild(extra);
    }

    function closeMenu() {
      hamburger.setAttribute('aria-expanded', 'false');
      nav.setAttribute('data-open', 'false');
      document.body.style.overflow = '';
    }

    function openMenu() {
      hamburger.setAttribute('aria-expanded', 'true');
      nav.setAttribute('data-open', 'true');
      document.body.style.overflow = 'hidden';
    }

    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when any link inside nav is clicked
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (nav.getAttribute('data-open') === 'true' && !nav.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
        closeMenu();
        hamburger.focus();
      }
    });

    // Close when window resized to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768 && nav.getAttribute('data-open') === 'true') {
        closeMenu();
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
     10. SOCIAL SHARING & CLIPBOARD COPY
     -------------------------------------------------------------------------- */
  function copyToClipboard(text, cb) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(cb).catch(function () {
        fallbackCopy(text, cb);
      });
    } else {
      fallbackCopy(text, cb);
    }
  }

  function fallbackCopy(text, cb) {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (cb) cb();
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  }

  window.copyArticleLink = function (btn, url) {
    var targetUrl = url || window.location.href.split('#')[0];
    var originalHTML = btn.innerHTML;
    copyToClipboard(targetUrl, function () {
      btn.classList.add('btn-share--copied');
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Lien copié !</span>';
      setTimeout(function () {
        btn.classList.remove('btn-share--copied');
        btn.innerHTML = originalHTML;
      }, 2500);
    });
  };

  function initSocialSharing() {
    // Popup window for desktop social shares
    document.querySelectorAll('.btn-share:not(.btn-share--whatsapp):not(.btn-share--copy):not(.btn-share--native)').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        var width = 640;
        var height = 520;
        var left = Math.max(0, (window.innerWidth - width) / 2 + window.screenX);
        var top = Math.max(0, (window.innerHeight - height) / 2 + window.screenY);
        window.open(href, 'share-dialog', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',toolbar=0,status=0,menubar=0');
      });
    });

    // Native Web Share API on mobile
    if (navigator.share) {
      document.querySelectorAll('.btn-share--native').forEach(function (btn) {
        btn.style.display = 'inline-flex';
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          var shareBar = this.closest('.article-share-bar') || this.closest('.social-share');
          var title = (shareBar && shareBar.getAttribute('data-article-title')) || document.title;
          var url = (shareBar && shareBar.getAttribute('data-article-url')) || window.location.href;
          navigator.share({
            title: title,
            text: title + ' - par Merlin SIMO',
            url: url
          }).catch(function () {});
        });
      });
    }
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
    initSocialSharing();
  });
})();

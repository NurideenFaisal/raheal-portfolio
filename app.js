/* ======================================================================
   Raheal Akuta — Portfolio interactions
   ======================================================================

   HOW TO EDIT TOOLS
   Scroll down to the "TOOLS LIST" section below.
   Each entry looks like:  { n: 'Tool Name', file: 'filename', c: '#colour' }

     n:    The display name shown on the website
     file: The SVG logo filename in assets/logos/ (without .svg)
           Set to null if there is no logo file — initials will show instead
     c:    Background colour used for the initials fallback

   To ADD a tool:    Copy an existing line, paste it, and change the values.
   To REMOVE a tool: Delete the line (and the comma on the line before it).
   To RENAME a tool: Change the n: value.

   ====================================================================== */

(function () {
  'use strict';

  /* ---- Apply SITE config (from config.js) to CSS custom properties ---- */
  var cfg   = (typeof SITE !== 'undefined') ? SITE : {};
  var root  = document.documentElement.style;

  // Card blur & overlay
  var cards = cfg.cards || {};
  if (cards.blur        != null) root.setProperty('--card-blur', cards.blur + 'px');
  if (cards.overlayColor)        root.setProperty('--card-rgb',  cards.overlayColor);
  if (cards.overlayTop  != null) root.setProperty('--card-ot',   cards.overlayTop);
  if (cards.overlayMid  != null) root.setProperty('--card-om',   cards.overlayMid);
  if (cards.overlayBot  != null) root.setProperty('--card-ob',   cards.overlayBot);

  // Colour overrides
  Object.keys(cfg.colors || {}).forEach(function (k) {
    root.setProperty('--' + k, cfg.colors[k]);
  });

  // Optional blended page background image
  var bgCfg = cfg.bg || {};
  if (bgCfg.image) {
    var bgEl = document.createElement('div');
    bgEl.id  = 'site-bg';
    bgEl.style.cssText =
      'position:fixed;inset:0;z-index:0;pointer-events:none;' +
      'background:url(' + bgCfg.image + ') center/cover no-repeat;' +
      'opacity:'        + (bgCfg.opacity != null ? bgCfg.opacity : 0.08) + ';' +
      'mix-blend-mode:' + (bgCfg.blend || 'multiply') + ';';
    document.body.insertBefore(bgEl, document.body.firstChild);
  }

  /* ---- Auto-set copyright year in footer ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Nav: frosted-glass on scroll + back-to-top button visibility ---- */
  var nav     = document.getElementById('nav');
  var backTop = document.getElementById('back-top');

  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('scrolled', y > 24);
    if (backTop) backTop.classList.toggle('visible', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Mobile hamburger menu ---- */
  var burger = document.getElementById('burger');
  var menu   = document.getElementById('mobileMenu');

  function closeMenu() {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---- Reveal elements as they scroll into view ---- */
  var revEls = document.querySelectorAll('.reveal');
  var io;

  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revEls.forEach(function (el) { io.observe(el); });
  } else {
    revEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Animated counting numbers in the stats strip ---- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var dur    = 1500;
    var start  = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / dur, 1);
      var eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- Work portfolio filter buttons ---- */
  var filtersEl = document.getElementById('filters');
  var cases     = document.querySelectorAll('#workGrid .case');

  if (filtersEl) {
    filtersEl.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn) return;

      filtersEl.querySelectorAll('.filter').forEach(function (f) {
        f.classList.remove('active');
      });
      btn.classList.add('active');

      var active = btn.getAttribute('data-f');
      cases.forEach(function (c) {
        c.classList.toggle('hide', active !== 'all' && c.getAttribute('data-cat') !== active);
      });
    });
  }

  /* ---- Tools list — edit entries in config.js, not here ---- */
  var tools = (cfg.tools && cfg.tools.length) ? cfg.tools : [];

  function initials(name) {
    return name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
  }

  var tg = document.getElementById('toolsGrid');
  if (tg) {
    tools.forEach(function (t, i) {
      var el = document.createElement('div');
      el.className = 'tool reveal' + (i % 4 ? ' d' + (i % 4) : '');

      var mark;
      if (t.file) {
        var fallback = "this.parentNode.classList.remove('logo');" +
                       "this.parentNode.style.background='" + t.c + "';" +
                       "this.outerHTML='" + initials(t.n) + "';";
        mark = '<span class="tmark logo">' +
               '<img src="assets/logos/' + t.file + '.svg" alt="' + t.n + ' logo" loading="lazy" onerror="' + fallback + '">' +
               '</span>';
      } else {
        mark = '<span class="tmark" style="background:' + t.c + '">' + initials(t.n) + '</span>';
      }

      el.innerHTML = mark + '<span class="tname">' + t.n + '</span>';
      tg.appendChild(el);

      if (io) io.observe(el);
      else el.classList.add('in');
    });
  }

  /* ---- Active nav link highlight as user scrolls through sections ---- */
  var sectionIds = ['about', 'services', 'skills', 'work', 'tools', 'testimonials'];
  var navLinks   = document.querySelectorAll('#navLinks a');

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

})();

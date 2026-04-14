(function () {
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  function applyImageOverrides() {
    var map = null;
    try {
      map = window.SITE_IMAGES || null;
    } catch (e) {
      map = null;
    }
    if (!map) return;

    var imgs = document.querySelectorAll('[data-image-key]');
    if (!imgs || !imgs.length) return;

    Array.prototype.forEach.call(imgs, function (img) {
      var key = img.getAttribute('data-image-key');
      if (!key) return;
      var nextSrc = map[key];
      if (typeof nextSrc !== 'string' || !nextSrc) return;
      if (img.getAttribute('src') === nextSrc) return;
      img.setAttribute('src', nextSrc);
    });
  }

  onReady(function () {
    applyImageOverrides();

    var prefersReduced = false;
    try {
      prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      prefersReduced = false;
    }

    var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!revealEls.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    revealEls.forEach(function (el) {
      io.observe(el);
    });
  });
})();

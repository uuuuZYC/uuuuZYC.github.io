// Count production visits only; local previews must not affect the totals.
(() => {
  if (window.location.hostname !== 'uuuuzyc.github.io') return;

  // Busuanzi stores totals remotely, so visits are shared across browsers.
  // Its containers stay hidden if the service is unavailable or blocked.
  const script = document.createElement('script');
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.async = true;
  document.head.appendChild(script);
})();

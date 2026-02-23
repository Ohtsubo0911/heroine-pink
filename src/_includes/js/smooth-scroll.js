(() => {

  function smoothScrollToElement(element, options = {}) {
    if (!element) return;

    const {
      behavior = 'smooth',
      block = 'start'
    } = options;

    element.scrollIntoView({
      behavior,
      block
    });
  }

  // 🔥 外部公開
  window.smoothScroll = smoothScrollToElement;

  // 🔥 ページ内リンクは start 固定
  document.addEventListener('click', (e) => {

    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    smoothScrollToElement(target, {
      block: 'start'
    });

  });

})();

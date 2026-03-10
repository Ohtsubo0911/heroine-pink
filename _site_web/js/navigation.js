document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.slide-nav');
  const overlay = document.querySelector('.nav-overlay');

  if (!toggle || !nav || !overlay) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });

});

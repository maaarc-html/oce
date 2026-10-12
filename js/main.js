const nav = document.querySelector('.nav');
nav?.querySelector('.nav__toggle')?.addEventListener('click', (e) => {
  const open = nav.classList.toggle('nav--open');
  e.currentTarget.setAttribute('aria-expanded', open);
});
nav?.querySelectorAll('.nav__item--has-menu > .nav__link').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const open = item.classList.toggle('nav__item--open');
    btn.setAttribute('aria-expanded', open);
  });
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav__item--has-menu')) {
    nav?.querySelectorAll('.nav__item--open').forEach((i) => i.classList.remove('nav__item--open'));
  }
});

/* Botón flotante de WhatsApp en todas las páginas */
(() => {
  if (document.querySelector('.wa-float')) return;
  const a = document.createElement('a');
  a.className = 'wa-float';
  a.href = 'https://wa.me/595986612300';
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Escribinos por WhatsApp');
  a.innerHTML = '<img src="assets/icons/whatsapp.svg" alt="">';
  document.body.appendChild(a);
})();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (!btn || !nav) return;

  // Accesibilidad Inicial
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Abrir menú');

  btn.addEventListener('click', () => {
    // Alterna la visibilidad del nav
    const opened = nav.classList.toggle('active');

    btn.setAttribute('aria-expanded', opened);
    btn.setAttribute('aria-label', opened ? 'Cerrar menú' : 'Abrir menú');

    btn.classList.toggle('open', opened);
  });
});

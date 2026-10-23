// Menu mobile
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));

// Sombra no header ao rolar
const header = document.getElementById('header');
window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 10), { passive: true });

// Animação de entrada
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// FAQ: abre um por vez
document.querySelectorAll('.accordion details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) document.querySelectorAll('.accordion details[open]').forEach(o => { if (o !== d) o.open = false; });
  });
});

// Meta Pixel: clique nos botões de compra
document.querySelectorAll('a[href*="pay.cakto.com.br"]').forEach(a => {
  a.addEventListener('click', () => { if (window.fbq) fbq('track', 'InitiateCheckout'); });
});

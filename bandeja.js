window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-bandeja');
  if (window.scrollY > 0) {
    hero.style.opacity = 1 - window.scrollY / 400;
  } else {
    hero.style.opacity = 1;
  }
});

// Ocultar ícone flutuante ao rolar
window.addEventListener('scroll', () => {
  const indicator = document.querySelector('.scroll-indicator');
  if (indicator) {
    if (window.scrollY > 50) {
      indicator.classList.add('hidden');
    } else {
      indicator.classList.remove('hidden');
    }
  }
});

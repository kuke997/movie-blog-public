document.addEventListener('DOMContentLoaded', function() {
  console.log("Portal Cinema Brasil iniciado");

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }

  const cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    card.style.cursor = 'pointer';
  });

  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = 'rgba(27, 27, 27, 0.98)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = '#1b1b1b';
      header.style.backdropFilter = 'none';
    }
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    }
  );
}
});
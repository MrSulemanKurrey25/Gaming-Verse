const cards = document.querySelectorAll('.game-card');

  const reveal = () => {
    const trigger = window.innerHeight * 0.95;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < trigger) {
        card.style.opacity = 5;
        card.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal();

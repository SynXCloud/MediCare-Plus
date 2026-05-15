/* ============================================================
   MediCare Plus — Animations Observer
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* Scroll Reveal Animation using Intersection Observer */
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  /* Number Counter Animation */
  const statNumbers = document.querySelectorAll('.stat-num');
  let hasCounted = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        hasCounted = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'));
          const duration = 2000; // 2 seconds
          const step = target / (duration / 16); // 60fps
          let current = 0;

          const updateCount = () => {
            current += step;
            if (current < target) {
              stat.innerText = Math.ceil(current);
              requestAnimationFrame(updateCount);
            } else {
              stat.innerText = target;
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.5 });

  const statsContainer = document.querySelector('.hero-stats');
  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }
});

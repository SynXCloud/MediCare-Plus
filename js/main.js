/* ============================================================
   MediCare Plus — Main Scripts
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* Navbar Scroll Effect */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* Mobile Menu Toggle */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  /* Live OPD Timing Logic */
  updateOPDStatus();
  setInterval(updateOPDStatus, 60000); // Check every minute
});

function updateOPDStatus() {
  const statusEl = document.getElementById('opdStatus');
  const pulseEl = document.getElementById('opdPulse');
  const textEl = document.getElementById('opdText');
  
  if (!statusEl || !pulseEl || !textEl) return;

  const now = new Date();
  const hours = now.getHours();
  // Mon-Sat: 9 AM to 1 PM (13:00) AND 5 PM (17:00) to 8 PM (20:00)
  const day = now.getDay(); // 0 is Sunday
  
  let isOpen = false;

  if (day !== 0) {
    if ((hours >= 9 && hours < 13) || (hours >= 17 && hours < 20)) {
      isOpen = true;
    }
  }

  if (isOpen) {
    pulseEl.className = 'opd-pulse open';
    textEl.innerHTML = '<strong>OPD Open Now</strong> (Walk-in Available)';
    textEl.style.color = '#2ecc71';
  } else {
    pulseEl.className = 'opd-pulse closed';
    textEl.innerHTML = '<strong>OPD Closed</strong> (Next: ' + getNextOPDTime(day, hours) + ')';
    textEl.style.color = '#e74c3c';
  }
}

function getNextOPDTime(day, hours) {
  if (day === 0) return 'Mon 9:00 AM'; // Sunday
  if (hours < 9) return 'Today 9:00 AM';
  if (hours >= 13 && hours < 17) return 'Today 5:00 PM';
  if (hours >= 20) return (day === 6) ? 'Mon 9:00 AM' : 'Tomorrow 9:00 AM';
  return '9:00 AM';
}

/* FAQ Accordion */
function toggleFAQ(element) {
  const allFaqs = document.querySelectorAll('.faq-item');
  allFaqs.forEach(faq => {
    if (faq !== element) {
      faq.classList.remove('open');
    }
  });
  element.classList.toggle('open');
}

/* Testimonials Slider */
let currentTestimonial = 0;
function scrollTestimonials(direction) {
  const track = document.getElementById('testimonialsTrack');
  if (!track) return;
  const cards = track.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  currentTestimonial += direction;
  
  // Wrap around
  if (currentTestimonial < 0) currentTestimonial = cards.length - 1;
  if (currentTestimonial >= cards.length) currentTestimonial = 0;

  const cardWidth = cards[0].offsetWidth + 24; // width + gap
  track.scrollTo({
    left: cardWidth * currentTestimonial,
    behavior: 'smooth'
  });
  
  updateDots();
}

function updateDots() {
  const dotsContainer = document.getElementById('tcDots');
  if (!dotsContainer) return;
  
  const track = document.getElementById('testimonialsTrack');
  const cards = track.querySelectorAll('.testimonial-card');
  
  dotsContainer.innerHTML = '';
  cards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `tc-dot ${index === currentTestimonial ? 'active' : ''}`;
    dot.onclick = () => {
      currentTestimonial = index;
      const cardWidth = cards[0].offsetWidth + 24;
      track.scrollTo({ left: cardWidth * currentTestimonial, behavior: 'smooth' });
      updateDots();
    };
    dotsContainer.appendChild(dot);
  });
}

// Initialize dots
document.addEventListener('DOMContentLoaded', updateDots);

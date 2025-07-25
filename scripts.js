// Scroll + Navbar Logic
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.getElementById("navbar");
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (navbar) {
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      navbar.classList.remove("navbar-visible");
      navbar.classList.add("navbar-hidden");
    } else {
      navbar.classList.remove("navbar-hidden");
      navbar.classList.add("navbar-visible");
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  if (scrollBtn) {
    if (currentScroll > 300) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  }
});

// Scroll-to-top button logic
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('scrollTopBtn');
  if (btn) {
    window.onscroll = function () {
      if (window.scrollY > 200) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    };
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Load footer and navbar from external files
window.addEventListener("DOMContentLoaded", () => {
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById('footer-container');
      if (footer) footer.innerHTML = data;
    });

  fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
      const navbar = document.getElementById('navbar-container');
      if (navbar) navbar.innerHTML = data;
    });
});

// Expand product card using event delegation
document.addEventListener("click", (e) => {
  const card = e.target.closest('.product-card');
  const expanded = document.getElementById('expanded-view');

  if (card && expanded) {
    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(el => {
      if (el !== card) {
        el.classList.add('opacity-0', 'pointer-events-none');
      } else {
        el.classList.add('hidden');
      }
    });

    expanded.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Reset product card grid
function resetProducts() {
  document.querySelectorAll('.product-card').forEach(el => {
    el.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
  });
  const expanded = document.getElementById('expanded-view');
  if (expanded) expanded.classList.add('hidden');
}

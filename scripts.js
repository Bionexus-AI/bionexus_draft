// Global variables
let lastScrollTop = 0;

// Scroll + Navbar Logic
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollBtn = document.getElementById("scrollTopBtn");
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Navbar hide/show
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.classList.remove("navbar-visible");
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
    navbar.classList.add("navbar-visible");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  // Show/hide scroll button
  if (currentScroll > 200) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

// Scroll-to-top button logic
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      const footerContainer = document.getElementById("footer-container");
      if (footerContainer) footerContainer.innerHTML = data;
    });

  // Load navbar
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      const navbarContainer = document.getElementById("navbar-container");
      if (navbarContainer) navbarContainer.innerHTML = data;
    });

  // Product Card Logic
  const cards = document.querySelectorAll('.product-card');
  const expanded = document.getElementById('expanded-view');

  if (cards && expanded) {
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const selected = card.getAttribute('data-product');
        cards.forEach(el => {
          if (el !== card) {
            el.classList.add('opacity-0', 'pointer-events-none');
          } else {
            el.classList.add('hidden');
          }
        });
        expanded.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }
});

// Reset expanded product view
function resetProducts() {
  document.querySelectorAll('.product-card').forEach(el => {
    el.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
  });
  document.getElementById('expanded-view').classList.add('hidden');
}

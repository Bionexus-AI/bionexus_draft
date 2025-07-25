// Scroll + Navbar Logic (already included in index.html)
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.classList.remove("navbar-visible");
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
    navbar.classList.add("navbar-visible");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  if (currentScroll > 300) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Expand product card
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.product-card');
    const selected = card.getAttribute('data-product');

    allCards.forEach(el => {
      if (el !== card) {
        el.classList.add('opacity-0', 'pointer-events-none');
      } else {
        el.classList.add('hidden');
      }
    });

    document.getElementById('expanded-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Reset to grid
function resetProducts() {
  document.querySelectorAll('.product-card').forEach(el => {
    el.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
  });
  document.getElementById('expanded-view').classList.add('hidden');
}
  
// Load footer from external file
window.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-container").innerHTML = html;
    });
});

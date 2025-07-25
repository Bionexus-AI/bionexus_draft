// Navbar and Scroll-to-Top Button Logic
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Show/hide navbar
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.classList.remove("navbar-visible");
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
    navbar.classList.add("navbar-visible");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  // Show/hide scroll to top button
  if (currentScroll > 300) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

// Scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

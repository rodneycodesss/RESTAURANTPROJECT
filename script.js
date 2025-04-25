document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.classList.add("hidden");
        } else {
          entry.target.classList.remove("hidden");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.style.transform = "translateY(-100%)"; // Hide navbar
      } else {
        // Scrolling up
        navbar.style.transform = "translateY(0)"; // Show navbar
      }
      lastScrollY = window.scrollY; // Update last scroll position
    });
  });
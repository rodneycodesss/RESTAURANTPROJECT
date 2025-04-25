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

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
  });
}


const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show-menu");
  });
});


// =========================
// CURRENT YEAR IN FOOTER
// =========================

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

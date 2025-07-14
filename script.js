/* ===== Dynamic year in footer ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== Mobile nav toggle ===== */
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("nav-links");
hamburger?.addEventListener("click", () => navLinks.classList.toggle("open"));

/* ===== AOS scroll animations ===== */
AOS.init({
  duration: 800,   // animation duration
  once: true       // animate only once as you scroll
});
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

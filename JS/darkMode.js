const html = document.documentElement;
const btnDarkMode = document.querySelector(".navbar__light-mode");

btnDarkMode.addEventListener("click", () => html.classList.toggle("dark-mode"));

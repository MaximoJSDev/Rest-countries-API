const html = document.documentElement;
const btnDarkMode = document.querySelector(".navbar__light-mode");
let dark = false;

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  dark = true;
}
btnDarkMode.addEventListener("click", () => {
  if (dark) {
    html.classList.remove("dark-mode");
    html.classList.add("light-mode");
    dark = false;
  } else {
    html.classList.remove("light-mode");
    html.classList.add("dark-mode");
    dark = true;
  }
});

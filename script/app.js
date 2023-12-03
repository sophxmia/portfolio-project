const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav_link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

function getTheme() {
  return (
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const currentTheme = getTheme();
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(targetTheme);
}

const toggle = document.getElementById("theme-toggle");

setTheme(getTheme());

toggle.addEventListener("click", toggleTheme);

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav_link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

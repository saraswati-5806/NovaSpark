const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "transparent";
  }
});
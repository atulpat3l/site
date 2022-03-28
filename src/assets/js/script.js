const hamburgerMenu = document.querySelector("#hamburger");
const navList = document.querySelector(".nav");
const hero = document.querySelector(".hero");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("cross");
  navList.classList.toggle("show");
});

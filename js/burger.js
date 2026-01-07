const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerActivate);
function burgerActivate() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

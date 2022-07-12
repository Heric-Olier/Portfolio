//*! Burguer Menu *//

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let nav__menu = document.querySelector(".nav__menu");
let about = document.querySelector(".about__section");
let skills = document.querySelector(".skills__section");
let study = document.querySelector(".study__section");
let projects = document.querySelector(".projects__section");
let contact = document.querySelector(".contact__section");

document
  .querySelector(".nav__menu-mobile")
  .addEventListener("click", barsAnimation);

function barsAnimation() {
  line1__bars.classList.toggle("active");
  line2__bars.classList.toggle("active");
  line3__bars.classList.toggle("active");

  nav__menu.classList.toggle("active");
}

const menusSection = [about, skills, study, projects, contact];

for (let i = 0; i < menusSection.length; i++) {
  menusSection[i].addEventListener("click", function () {
    nav__menu.classList.toggle("active");
  });
}

nav__menu.addEventListener("click", function () {
  line1__bars.classList.toggle("active");
  line2__bars.classList.toggle("active");
  line3__bars.classList.toggle("active");
});

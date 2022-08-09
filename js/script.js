const navBurguer = document.querySelector(".nav__burguer");
const navMenu = document.querySelector(".nav__menu");
const navMenuItems = document.querySelectorAll(".nav__menu ul li");
const navBurguerLine1 = document.querySelector(".nav__burguer-line-1");
const navBurguerLine2 = document.querySelector(".nav__burguer-line-2");
const navBurguerLine3 = document.querySelector(".nav__burguer-line-3");
const topButton = document.querySelector(".top-button");

//*!--------------- Burguer Menu ---------------*//

const showNavMenu = () => {
  navMenu.classList.toggle("active");
  navBurguerLine1.classList.toggle("active");
  navBurguerLine2.classList.toggle("active");
  navBurguerLine3.classList.toggle("active");
  navBurguer.classList.toggle("active");
};

// El menu se muestra y se oculta con un click en el icono de hamburguesa

navBurguer.addEventListener("click", () => {
  showNavMenu();
});

// El menú se cierra al hacer click en un elemento del mismo

navMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    showNavMenu();
  });
});

//*!---------------- scroll up -------------------*//

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});

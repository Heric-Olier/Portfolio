
let navBurguer = document.querySelector(".nav__burguer");
let navMenu = document.querySelector(".nav__menu");
let navMenuItems = document.querySelectorAll(".nav__menu ul li");
let navBurguerLine1 = document.querySelector(".nav__burguer-line-1");
let navBurguerLine2 = document.querySelector(".nav__burguer-line-2");
let navBurguerLine3 = document.querySelector(".nav__burguer-line-3");

//*!--------------- Burguer Menu ---------------*//

// El menu se muestra y se oculta con un click en el icono de hamburguesa

navBurguer.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navBurguerLine1.classList.toggle("active");
  navBurguerLine2.classList.toggle("active");
  navBurguerLine3.classList.toggle("active");
  navBurguer.classList.toggle("active");
});

// El menú se cierra al hacer click en un elemento del mismo

navMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navBurguerLine1.classList.toggle("active");
    navBurguerLine2.classList.toggle("active");
    navBurguerLine3.classList.toggle("active");
    navBurguer.classList.toggle("active");
  });
});

//*! scroll up *//

let topButton = document.querySelector(".top-button");

document.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});

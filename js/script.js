const navBurguer = document.querySelector(".nav__burguer");
const navMenu = document.querySelector(".nav__menu");
const navMenuItems = document.querySelectorAll(".nav__menu ul li a");
const navBurguerLine1 = document.querySelector(".nav__burguer-line-1");
const navBurguerLine2 = document.querySelector(".nav__burguer-line-2");
const navBurguerLine3 = document.querySelector(".nav__burguer-line-3");
const topButton = document.querySelector(".top-button");
const nav = document.querySelector("nav");
const allSections = document.querySelectorAll("section[id]");

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

//*!--------------- scroll up & Top Button - header ---------------*//

// El botón de scroll up y el nav se muestra cuando se hace scroll hacia abajo
window.addEventListener("scroll", () => {
  if (window.scrollY) {
    topButton.classList.add("active");
    nav.classList.add("active");
  } else {
    topButton.classList.remove("active");
    nav.classList.remove("active");
    navMenuItems.forEach((item) => {
      item.classList.remove("active");
    }); 
  }
});

// se selecciona el item del nav que corresponde a la sección en la que se encuentra el scroll
allSections.forEach((section) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= section.offsetTop - 100) {
      navMenuItems.forEach((item) => {
        item.classList.remove("active");
      });
      document.querySelector(`.nav__menu ul li a[href*=${section.id}]`).classList.add("active");
    }
  });
});


//*!--------------- Typed text ---------------*//

var typed = new Typed(".hero__subtitle", {
  strings: ["Desarrollador Web Front-End."],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 2800,
  startDelay: 1200,
  loop: true,
});

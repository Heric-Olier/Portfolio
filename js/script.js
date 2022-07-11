document.querySelector('.nav__menu-mobile').addEventListener('click', barsAnimation);

let line1__bars = document.querySelector('.line1__bars-menu');
let line2__bars = document.querySelector('.line2__bars-menu');
let line3__bars = document.querySelector('.line3__bars-menu');

function barsAnimation() {
    line1__bars.classList.toggle('active');
    line2__bars.classList.toggle('active');
    line3__bars.classList.toggle('active');
}



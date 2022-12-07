const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.burger-menu__nav');
const link = document.querySelector('.burger-menu__link');
const body = document.body;
const links = Array.from(menu.children);

burger.addEventListener('click', openBurger);

links.forEach((link) => {
    link.addEventListener('click', closeBurger);
});

function openBurger() {
    burger.classList.toggle('burger-menu_active');
    body.classList.toggle('body_noscroll');
}

function closeBurger() {
    burger.classList.add('burger-menu_active');
    body.classList.add('body_noscroll');
} 
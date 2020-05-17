import './index.scss'


(function () {
    const burger = document.querySelector('.moonshine-card__burger');
    const burgerMenu = document.querySelector('.moonshine-menu');
    burger.addEventListener('click', () => {
        burgerMenu.classList.add('moonshine-menu_active');
    });
}());

(function () {
    const cross = document.querySelector('.moonshine-menu__closebtn');
    const burgerMenu = document.querySelector('.moonshine-menu');
    cross.addEventListener('click', () => {
        burgerMenu.classList.remove('moonshine-menu_active');
    });
}());

(function () {
    const burger = document.querySelector('.recipes-card__burger');
    const burgerMenu = document.querySelector('.recipes-menu');
    burger.addEventListener('click', () => {
        burgerMenu.classList.add('recipes-menu_active');
    });
}());

(function () {
    const cross = document.querySelector('.recipes-menu__closebtn');
    const burgerMenu = document.querySelector('.recipes-menu');
    cross.addEventListener('click', () => {
        burgerMenu.classList.remove('recipes-menu_active');
    });
}());

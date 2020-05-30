import './index.scss'


(function () {
    const burger = document.querySelector('.moonshine-card__button');
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
    const burger = document.querySelector('.recipes-card__button');
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

//---------------------------header_parallax---------------------------//

function header_parallax(event) {
    let a = document.querySelector('.header__background');
    a.style.transform = 'translateX(' + event.clientX/150 + 'px)' + " " + 'translateY(' + event.clientY/150 + 'px)';
};

document.querySelector('.header').addEventListener('mousemove', header_parallax);



function header_title_parallax(event) {
    let a = document.querySelector('.header__title.title');
    a.style.transform = 'translateX(' + event.clientX/-150 + 'px)' + " " + 'translateY(' + event.clientY/-150 + 'px)';
};

document.querySelector('.header').addEventListener('mousemove', header_title_parallax);


//---------------------------body_parallax---------------------------//

window.addEventListener('scroll', function() {
    let a = document.querySelector('.moonshine-card__title');
    a.style.textShadow = pageYOffset/100 + 'px' + ' ' + pageYOffset/100 + 'px' + ' ' + pageYOffset/200 + 'px' +' '  + 'hsl(0, 0%, 50%)';
});

window.addEventListener('scroll', function() {
    let a = document.querySelector('.recipes-card__title');
    a.style.textShadow = pageYOffset/100 + 'px' + ' ' + pageYOffset/100 + 'px' + ' ' + pageYOffset/200 + 'px' +' '  + 'hsl(0, 0%, 50%)';
    a.style.marginTop = (300 - pageYOffset/5) + 'px';
});

//------------------------------appearance of elements-----------------------//


window.addEventListener('scroll', function() {
    const elem1 = document.querySelector('.moonshine-card');
    const elem2 = document.querySelector('.recipes-card');
    const clientHeight = document.documentElement.clientHeight;
    const heightToElem1 = elem1.getBoundingClientRect();
    const heightToElem2 = elem2.getBoundingClientRect();
    if (clientHeight - heightToElem1.top > 200 ) {
        document.querySelector('.moonshine-card__header').style.left = '0';
        document.querySelector('.moonshine-card__button').style.bottom = '0';
    }
    if (clientHeight - heightToElem2.top > 200 ) {
        document.querySelector('.recipes-card__header').style.right = '0';
        document.querySelector('.recipes-card__autor').style.right = '0';
        document.querySelector('.recipes-card__button').style.bottom = '0';
    }
});






function size() {
    const div = document.querySelector('.size');
    div.innerHTML = window.innerWidth + 'px' + document.documentElement.clientHeight + 'px'
};

setInterval(size, 20);                                     ;

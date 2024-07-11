const buttonHumburger = document.querySelector('#hamburger');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const elementClose = document.querySelector('#close');
const home = document.querySelector('#home');
const favorite = document.querySelector('#favorite');
const aboutMe = document.querySelector('#aboutMe');
const header = document.querySelector('header');

buttonHumburger.addEventListener('click', event => {
    hamburgerMenu.setAttribute('class', 'open');
    event.stopPropagation();
});

buttonHumburger.addEventListener('keydown', event => {
    if (event.key == 'Enter') {
        hamburgerMenu.setAttribute('class', 'open');
        event.stopPropagation();
    }
});

elementClose.addEventListener('click', event => {
    hamburgerMenu.removeAttribute('class', 'open');
    event.stopPropagation();
});

elementClose.addEventListener('keydown', event => {
    if(event.key == 'Enter') {
        hamburgerMenu.removeAttribute('class', 'open');
        event.stopPropagation();
    }
});

home.addEventListener('click', event => {
    hamburgerMenu.removeAttribute('class', 'open');
    event.stopPropagation();
})

favorite.addEventListener('click', event => {
    hamburgerMenu.removeAttribute('class', 'open');
    event.stopPropagation();
})

aboutMe.addEventListener('click', event => {
    hamburgerMenu.removeAttribute('class', 'open');
    event.stopPropagation();
})

buttonHumburger.addEventListener('click', () => {
    buttonHumburger.setAttribute('hidden', 'true')
    console.log('hello')
})

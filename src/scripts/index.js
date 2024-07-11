import 'regenerator-runtime';
import '../styles/main.css';
import KageApp from './views/kage-app';
import kageSwRegister from './utils/kage-sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const kageApp = new KageApp({
  hamburger: document.querySelector('#hamburger'),
  hamburgerMenu: document.querySelector('#hamburger-menu'),
  close: document.querySelector('#close'),
  content: document.querySelector('.kage-res'),
});

window.addEventListener('hashchange', () => {
  kageApp.renderPage();
});

window.addEventListener('load', () => {
  kageApp.renderPage();
  kageSwRegister();
});

// Scrol

let a = document.querySelector('.contentBx');
let b = document.querySelector('.imgBx');
let toggle = document.querySelector('.toggle');
let banner = document.querySelector('.banner');
let nav = document.querySelector('.nav');
let services = document.querySelector('.services')

window.onscroll = function () {
  if (window.pageYOffset > 200 && window.pageYOffset<1000) {
    a.classList.add('contentBxScrol');
    b.classList.add('imgBxScrol');
  } else {
    a.classList.remove('contentBxScrol');
    b.classList.remove('imgBxScrol');
  }
  if (window.pageYOffset > 1000 && window.pageYOffset<2000) {

    services.classList.add('servicesScrol');
  } else {
    services.classList.remove('servicesScrol')
  }

};

toggle.onclick = function () {
  // Добавьте код сюда

  banner.classList.toggle('menu');
  nav.classList.toggle('nav_active');
};

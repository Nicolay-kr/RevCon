// Scrol

let a = document.querySelector('.contentBx');
let b = document.querySelector('.imgBx');
let toggle = document.querySelector('.toggle');
let nav_toggle_off = document.querySelector('.nav_toggle_off');
// let nav = document.querySelector('.nav');
let services = document.querySelector('.services')

window.onscroll = function () {
  if (window.pageYOffset > 1000 && window.pageYOffset<2500) {
    a.classList.add('contentBxScrol');
    b.classList.add('imgBxScrol');
  } else {
    a.classList.remove('contentBxScrol');
    b.classList.remove('imgBxScrol');
  }
  if (window.pageYOffset >200 && window.pageYOffset<1500) {

    services.classList.add('servicesScrol');
  } else {
    services.classList.remove('servicesScrol')
  }

};

toggle.onclick = function () {

  nav_toggle_off.classList.toggle('nav_toggle_on');
  // nav.classList.toggle('nav_toggle_on');
};

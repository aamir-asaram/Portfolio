let menu = document.querySelector('.head');

function toggleMenu() {
  let intro = document.querySelector('#menu');
  let menu = document.querySelector('.menu-btn');
  menu.classList.toggle('hide');
  intro.classList.toggle('hide')
}

menu.addEventListener('click', toggleMenu);
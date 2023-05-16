const menu = document.querySelector('.head');

function toggleMenu() {
  const intro = document.querySelector('#menu');
  const menu = document.querySelector('.menu-btn');
  menu.classList.toggle('hide');
  intro.classList.toggle('hide');
}

menu.addEventListener('click', toggleMenu);
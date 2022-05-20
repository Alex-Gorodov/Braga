let burger = document.querySelector('.burger-navigation-list');
let burgerFirstLine = document.querySelector('.burger-btn-line:nth-child(1)');
let burgerThirdLine = document.querySelector('.burger-btn-line:nth-child(3)');

function burgerOpener() {
  burger.classList.toggle('burger-opened');
  burgerFirstLine.classList.toggle('open-first-line');
  burgerThirdLine.classList.toggle('open-third-line');
}
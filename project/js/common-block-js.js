let commonForm = document.querySelector('.form-block__form');
let inputCommonForm = commonForm.querySelector('.form__email-input');

let menuButton = document.querySelector('.menu__button-list');
let burgerMenu = document.getElementsByClassName('menu__list');

let phoneBlock = document.querySelector('.contact-block__tel');
let bottomLogo = document.querySelector('.logo-block__logo-bottom');

let checkCommonForm = () => {
  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(inputCommonForm.value.trim())) {
    event.preventDefault();
    commonForm.classList.add('error-common-form');
    inputCommonForm.classList.add('error-common-input');
    inputCommonForm.value = '';
    inputCommonForm.placeholder = 'Error input';
  } else {
    commonForm.classList.remove('error-common-form');
    inputCommonForm.classList.remove('error-common-input');
    inputCommonForm.placeholder = 'Enter email address';
  }
}

let openBurgerMenu = () => {
  burgerMenu[0].classList.toggle('open-menu');
  menuButton.classList.toggle('menu__open-list');
}


commonForm.addEventListener('submit', checkCommonForm);
menuButton.addEventListener('click',openBurgerMenu);

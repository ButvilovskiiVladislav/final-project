let formBlock = document.querySelector('.center__contact-form');
let inputList = formBlock.querySelectorAll('input');
let spanList = formBlock.querySelectorAll('span');

let checkFormBLock = () => {
  for (let i=0;i < inputList.length-1;i++) {
    if (inputList[i].getAttribute('type') === 'text') {
      if (inputList[i].value.trim() === '') {
        event.preventDefault();
        inputList[i].classList.add('error-input');
        spanList[i].classList.add('error-span');
      } else {
        inputList[i].classList.remove('error-input');
        spanList[i].classList.remove('error-span');
      }
    }
    if (inputList[i].getAttribute('type') === 'email') {
      if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(inputList[i].value.trim())) {
        event.preventDefault();
        inputList[i].classList.add('error-input');
        spanList[i].classList.add('error-span');
        inputList[i].value = '';
      } else {
        inputList[i].classList.remove('error-input');
        spanList[i].classList.remove('error-span');
      }
    }
  }
}

formBlock.addEventListener('submit', checkFormBLock);
const form = document.querySelector('#form');
const name = document.querySelectorAll('input.name');
const email = document.querySelectorAll('input.email');
const password = document.querySelectorAll('input.password');
const error = document.querySelector('.error-message')
const submit = document.querySelector('.submit')

const passwordType = document.querySelector('#password')
const togglePassword = document.querySelector('#togglePassword')


togglePassword.addEventListener('click', () => {
  const type = passwordType.getAttribute('type') === 'password' ? 'text' : 'password'
  passwordType.setAttribute('type', type)

  togglePassword.classList.toggle('fa-eye')
})


form.addEventListener('submit', (e) => {
  e.preventDefault()
})

function nameValidation(elem) {
  elem.addEventListener('focusout', (e) => {
    e.preventDefault()
    
    let nameRegex = /^[a-zA-Z]{3,}$/

    if(elem.value == "" || elem.value == null) {
      error.innerHTML = 'Name is empty. Try Again.'
      elem.classList.add('error');
      error.classList.remove('hidden');
      submit.classList.add('disabled');

    } else if (!elem.value.match(nameRegex)){
      error.innerHTML = 'Invalid name. Try Again.'
      elem.classList.add('error');
      error.classList.remove('hidden');
      submit.classList.add('disabled');
      return false;
    }
    
    else {
      elem.classList.add('correct')
      error.classList.add('hidden')
      elem.classList.remove('error');
      submit.classList.remove('disabled');
      return true;

  }
  })
}

function emailValidation(elem) {
  elem.addEventListener('focusout', (e) => {
    e.preventDefault()
    
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(elem.value == "" || elem.value == null ){
      error.innerHTML = 'Email is empty. Try Again.'
      elem.classList.add('error');
      error.classList.remove('hidden');
      submit.classList.add('disabled');
      return false

      
    } else if (!elem.value.match(emailRegex)){
      error.innerHTML = 'Invalid format. Try again.'
      elem.classList.add('error');
      error.classList.remove('hidden');
      submit.classList.add('disabled');
      return false;

    } else {
      elem.classList.add('correct');
      elem.classList.remove('error');
      error.classList.add('hidden');
      submit.classList.remove('disabled');
      return true;
    }
  })
}

function passwordValidation(elem) {
  elem.addEventListener('focusout', (e) => {
    e.preventDefault()
    
    let passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/

    if(elem.value == "" || elem.value == null ){
      error.innerHTML = 'Password is empty. Try Again.'
      elem.classList.add('error');
      error.classList.remove('hidden');
      submit.classList.add('disabled');
      return false;

      
    } else if (!elem.value.match(passwordRegex)){
      error.innerHTML = `
      Password must have: 8 digits minimum,</br> uppercase and lowercase letters and a special character.
      `
      elem.classList.add('error');
      error.classList.remove('hidden');
      submit.classList.add('disabled');
      return false;

    }
    
    else {
      elem.classList.add('correct')
      error.classList.add('hidden')
      elem.classList.remove('error');
      submit.classList.remove('disabled');
      return true;

  }
  })
}



for( let focus of name) {
  nameValidation(focus);
}

for( let focus of email) {
  emailValidation(focus);
}

for( let focus of password) {
  passwordValidation(focus);
}

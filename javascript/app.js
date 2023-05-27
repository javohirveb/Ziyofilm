const loginOpen = document.querySelector('.login-img')
const loginClose = document.querySelector('.login-close')
const loginForm = document.querySelector('.login-form-wrapper')

loginOpen.addEventListener('click', () => {
   loginForm.classList.toggle('top-0')
})

loginClose.addEventListener('click', () => {
   loginForm.classList.toggle('top-0')
})
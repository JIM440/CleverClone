const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menu.addEventListener('click', ()=>{
mobileMenu.classList.toggle('active')
menu.classList.toggle('active')
})
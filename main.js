const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menu.addEventListener('click', ()=>{
mobileMenu.classList.toggle('active')
menu.classList.toggle('active')
})

// Select the element to be revealed
const h1 = document.querySelector('h1');

// Create the intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, { once: true });

// Start observing the element
observer.observe(h1);


const revealElements = document.querySelectorAll('.scroll-reveal');

// Start observing each element
revealElements.forEach((element) => {
  observer.observe(element);
});
<<<<<<< HEAD
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar ul');

navbarToggle.addEventListener('click', () => {
=======
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', ()=>{
>>>>>>> e8f5b1dd9dc22425695a453fbfc4b71637897f5c
navLinks.classList.toggle('active');
});
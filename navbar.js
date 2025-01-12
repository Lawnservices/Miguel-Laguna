const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar ul');

navbarToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
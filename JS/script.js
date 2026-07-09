const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');    
    navbar.classList.toggle('active');    
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

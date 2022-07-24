const navToggle = document.querySelector('.container');
const navLinks = document.querySelectorAll('.nav__link');



navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    console.log('a click occurred');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});
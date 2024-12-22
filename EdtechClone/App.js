const menuLinks = document.querySelectorAll('.menu');

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuLinks.forEach((item) => item.classList.remove('active'));

        link.classList.add('active');
    });
});

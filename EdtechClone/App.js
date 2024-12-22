const menuLinks = document.querySelectorAll('.menu');

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuLinks.forEach((item) => item.classList.remove('active'));

        link.classList.add('active');
    });
});


// add toggle system 
const menuToggle = document.getElementById("menu_toggle");
const navMenu = document.querySelector(".nav_menu"); 

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
})
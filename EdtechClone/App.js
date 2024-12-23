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

// runing text 
const codeLines = `
1 <!DOCTYPE html>
2 <html>
3 <head>
4     <title>Example</title>
5     <link rel="stylesheet" href="styles.css">
6 </head>
7 <body>
8     <h1><a href="#">Header</a></h1>
9     <nav>
10         <a href="one">One</a>
11         <a href="two">Two</a>
12         <a href="three">Three</a>
13     </nav>
14 </body>
15 </html>
`;

// Target the output container
let output = document.querySelector('.code-output1');
let index = 0;

function typeCode() {
    if (index < codeLines.length) {
        output.innerHTML += codeLines.charAt(index);
        index++;
        setTimeout(typeCode, 50);
    } else {
        // Reset for infinite typing effect
        setTimeout(() => {
            output.innerHTML = '';
            index = 0;
            typeCode();
        }, 2000);
    }
}

typeCode();


const htmlcode = `
1 <!DOCTYPE html>
2 <html>
3 <head>
4     <title>Example</title>
5     <link rel="stylesheet" href="styles.css">
6 </head>
7 <body>
8     <h1><a href="#">Header</a></h1>
9     <nav>
10         <a href="one">One</a>
11         <a href="two">Two</a>
12         <a href="three">Three</a>
13     </nav>
14 </body>
15 </html>
`;

// Target the output container
let sndOutput = document.getElementById('code-output2');
let idx = 0;

function runingCode() {
    if (idx < htmlcode.length) {
        sndOutput.innerHTML += htmlcode.charAt(index);
        idx++;
        setTimeout(runingCode, 50);
    } else {
        // Reset for infinite typing effect
        setTimeout(() => {
            sndOutput.innerHTML = '';
            idx = 0;
            runingCode();
        }, 2000);
    }
}

runingCode();

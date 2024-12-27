const menu = document.querySelector('.navbar');
const menubutton = document.querySelector(".menu");
let isMenuShowing = false;

function Menu_Button() {

    const menulogo = menubutton.querySelector('img');

    if (isMenuShowing == false) {
        menu.classList.add("showMenu");
        menulogo.classList.add("menulogo");
        isMenuShowing = true;
    }
    else {
        menu.classList.remove("showMenu");
        menulogo.classList.remove("menulogo");
        isMenuShowing = false;
    }
}



document.addEventListener('DOMContentLoaded', () => {

    const navlink = document.querySelectorAll('.navbar a');
    const top_panel = document.getElementById("top_panel");

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
            top_panel.classList.add('scrolled_top');
            navlink.forEach(element => {
                element.classList.add("scrolled")
            });
        }
        else {
            top_panel.classList.remove('scrolled_top');
            navlink.forEach(element => {
                element.classList.remove("scrolled")
            });
        }
    });


});



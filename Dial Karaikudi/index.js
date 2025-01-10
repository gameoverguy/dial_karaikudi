const menu = document.querySelector(".navbar");
const menubutton = document.querySelector(".menu");
const menuoverlay = document.querySelector(".menu_overlay");
let isMenuShowing = false;

function Menu_Button() {
  const menulogo = menubutton.querySelector("img");

  if (isMenuShowing == false) {
    menu.classList.add("showMenu");
    menulogo.classList.add("menulogo");
    menuoverlay.classList.add("show");
    isMenuShowing = true;
  } else {
    menu.classList.remove("showMenu");
    menulogo.classList.remove("menulogo");
    menuoverlay.classList.remove("show");
    isMenuShowing = false;
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  console.log(section);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   const navlink = document.querySelectorAll(".navbar a");
//   const top_panel = document.getElementById("top_panel");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       // Adjust this value based on when you want the color to change
//       // top_panel.classList.add('scrolled_top');
//       navlink.forEach((element) => {
//         element.classList.add("scrolled");
//       });
//     } else {
//       // top_panel.classList.remove('scrolled_top');
//       navlink.forEach((element) => {
//         element.classList.remove("scrolled");
//       });
//     }
//   });
// });

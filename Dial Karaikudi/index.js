const navbar = document.getElementById("top_panel");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        top_panel.classList.add('scrolled');
    }
    else {
        top_panel.classList.remove('scrolled');
    }
});
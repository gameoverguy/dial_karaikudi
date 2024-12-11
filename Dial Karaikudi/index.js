document.addEventListener('DOMContentLoaded', () => {
    //const top_panel = document.querySelector('.top-panel');
    const navbar_a = document.getElementById("navbar_a");
    const top_panel = document.getElementById("top_panel");

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
            top_panel.classList.add('scrolled_top');
            navbar_a.forEach(a => {
                a.classList.add('scrolled');
            });

        }
        else {
            top_panel.classList.remove('scrolled_top');
            navbar_a.forEach(a => {
                navbar_a.classList.remove('scrolled');
            });


        }
    });


});
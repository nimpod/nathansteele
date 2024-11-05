import $ from "jquery";

$(".toggle-btn").on('click', function() {
    // user clicked on a toggle btn...
    let btn = this;
    
    // find out which screen should be displayed...
    let screen_to_show = btn.id.toString().split('-')[2];
    let screen = document.getElementById(screen_to_show);
    console.log(screen_to_show);
    console.log(screen);

    let btns = document.querySelector('.toggle-btns-container .toggle-btn');
    let screens = document.querySelector('.btns-and-screens .screen');
    console.log(btns);
    console.log(screens);

    // display the screen the user requested...
    screen.classList.add('selected');
    btn.classList.add('selected');
});

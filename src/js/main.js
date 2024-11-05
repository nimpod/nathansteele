
import $ from "jquery";
console.log('In main.js');


function event_listener_for_top_albums_list_nav_item() {
    console.log('EVT');
    let nav_item = document.addEventListener('click',  function() {
        console.log('CLICKED');
        var el = this;
        el.scrollIntoView(true);
    })   
}

const $ = window.$;

$(document).ready(function() {
    $('.menu-icon').on('click', function() {
        $('nav ul').toggleClass('active');
    });
});

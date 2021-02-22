var h, scrollInt;
var header = 110;
var scrolling = false;

$(document).ready(function() {
    h = $(".main-container").offset().top;


    $(window).scroll(function() {
        scrolling = true;
    });

    scrollInt = setInterval(scrollThrottle, 100);


});

$(window).resize(function() {
    clearInterval(scrollInt);
    h = $(".main-container").offset().top;
    scrollInt = setInterval(scrollThrottle, 100);
});

function scrollThrottle() {
    if(scrolling) {
        scrolling = false;
        if($(window).scrollTop() > h-header) {
            if(!$(".bg").hasClass("past")) {
                $(".bg, .nav-button").addClass("past");
            }
        } else {
            if($(window).scrollTop() < h-header && $(".bg").hasClass("past")) {
                $(".bg, .nav-button").removeClass("past");
            }
        }
    }
}

var h, scrollInt;
var header = 100;
var scrolling = false;

$(document).ready(function() {
    h = $(window).height();

    $(window).scroll(function() {
        scrolling = true;
    });

    scrollInt = setInterval(scrollThrottle, 100);


});

$(window).resize(function() {
    clearInterval(scrollInt);
    h = $(window).height();
    scrollInt = setInterval(scrollThrottle, 100);
});

function scrollThrottle() {
    if(scrolling) {
        scrolling = false;
        if($(window).scrollTop() > h-header) {
            if(!$(".bg").hasClass("past")) {
                $(".bg").addClass("past");
            }
        } else {
            if($(window).scrollTop() < h-header && $(".bg").hasClass("past")) {
                $(".bg").removeClass("past");
            }
        }
    }
}

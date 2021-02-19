var h, scrollInt;
var header = 80;
var scrolling = false;

$(document).ready(function() {
    h = $(window).height();

    $(window).scroll(function() {
        scrolling = true;
    });

    scrollInt = setInterval(scrollThrottle, 200);


});

$(window).resize(function() {
    clearInterval(scrollInt);
    h = $(window).height();
    scrollInt = setInterval(scrollThrottle, 200);
});

function scrollThrottle() {
    if(scrolling) {
        scrolling = false;
        if($(window).scrollTop() > h-header) {
            if(!$(".index").hasClass("past")) {
                $(".index").addClass("past");
            }
        } else {
            if($(window).scrollTop() < h-header && $(".index").hasClass("past")) {
                $(".index").removeClass("past");
            }
        }
    }
}

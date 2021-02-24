var h, scrollInt;
var header = 110;
var scrolling = false;

const mq = window.matchMedia("(max-width: 768px)");

$(document).ready(function() {
    if(mq.matches) {
        mobiFunc();
    } 

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
                if(mq.matches) {
                    $(".bg").addClass("past");
                } else {
                    $(".bg, .nav-button").addClass("past");
                }
            }
        } else {
            if($(window).scrollTop() < h-header && $(".bg").hasClass("past")) {
                $(".bg, .nav-button").removeClass("past");
            }
        }
    }
}

function mobiFunc() {
    let subOffset = $(window).height() - $(".subhead").height() - $(".page-title").outerHeight();
    $(".main-container.index-container").css("margin-top", `${subOffset}px`);

    $(".hamburger").click(function() {
        $("nav").show();
    });

    $(".nav-close").click(function() {
        $("nav").hide();
    });
}



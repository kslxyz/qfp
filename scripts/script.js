var h, scrollInt;
var header = 110;
var scrolling = false;

var last;

const mq = window.matchMedia("(max-width: 768px)");

$(document).ready(function() {
    if(mq.matches) {
        mobiFunc();
        $("nav").removeClass("black-nav");
        if ($("nav").hasClass("switch")) {
            $(".logo").find("img").attr('src', '../assets/logo/QFP_Logo_White_v2.svg');
        }
    } 

    h = $(".main-container").offset().top;

    $(window).scroll(function() {
        scrolling = true;
    });

    scrollInt = setInterval(scrollThrottle, 100);
    last = $(".landing4").position().left;

    setInterval(function() {
        let newLeft = $("#landing").offset().left - $(window).width();
        $('#landing').animate({'left':newLeft+'px'}, 1000, function(){
            if (newLeft <= -last) {
               $('#landing').css({'left': 0});
               }
            });
         return false;
    }, 7000);

});

$(window).resize(function() {
    $('#landing').css({'left': 0});
    last = $(window).width() * 3;
    clearInterval(scrollInt);
    h = $(".main-container").offset().top;
    scrollInt = setInterval(scrollThrottle, 100);
    if(mq.matches) {
        mobiFunc();
        $("nav").removeClass("black-nav");
        if ($("nav").hasClass("switch")) {
            $(".logo").find("img").attr('src', '../assets/logo/QFP_Logo_White_v2.svg');
        }
    } else {
        if($("nav").hasClass("switch") && !$("nav").hasClass("black-nav")) {
            $("nav").addClass("black-nav");
        }
    }
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
                    if($('nav').hasClass('black-nav')) {
                        $(".logo").find("img").attr('src', '../assets/logo/QFP_Logo_White_v2.svg');
                    }
                }
            }
        } else {
            if($(window).scrollTop() < h-header && $(".bg").hasClass("past")) {
                $(".bg, .nav-button").removeClass("past");
                if($('nav').hasClass('black-nav')) {
                    $(".logo").find("img").attr('src', '../assets/logo/QFP_Logo_Black_v2.svg');
                }
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



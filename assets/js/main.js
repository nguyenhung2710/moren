jQuery(document).ready(function ($) {

    //Navbar
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".site-header").addClass("site-hd__on");
        } else {
            $(".site-header").removeClass("site-hd__on");
        }
    });
    
    //Navbar full
    $(function () {
        $(".closebtn").click(function () {
            $("#myNav").removeClass("myNavOn");
        });
        $(".openbtn").click(function () {
            $("#myNav").addClass("myNavOn");
        });
    });

    //Carousel
    $(function () {
        $('.section-one, .sec-6').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });
        $('.section-seven').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        });
    });

    //IMG Sec-2

    //IMG Sec-5
    $(window).scroll(function () {
        if ($(document).scrollTop() > 3300) {
            $(".sec-5__img").addClass("sec-5__img-check");
            $(".lazyloaded").css("opacity", "1");
            $(".sec-5__content").css("opacity", "0.6");
        }
    });
});
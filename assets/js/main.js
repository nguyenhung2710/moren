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
            $("html").css("overflow", "unset");
        });
        $(".openbtn").click(function () {
            $("#myNav").addClass("myNavOn");
            $("html").css("overflow", "hidden");
        });
    });

    // Search
    $(function () {
        $(".closebtn-search").click(function () {
            $("#myNavSearch").fadeOut();
            $("html").css("overflow", "unset");
        });
        $(".btn-search").click(function () {
            $("#myNavSearch").fadeIn();
            $("#myNavSearch").css("display", "flex");
            $("html").css("overflow", "hidden");
        });
    });

    //Cart
    $(function() {
        $(".btn-cart").click(function() {
            $("#myNavCart").css("width", "31%");
            $(".nav-cart__overlay").fadeIn();
            $("html").css("overflow", "hidden");
        });
        $(".closebtn-cart").click(function() {
            $("#myNavCart").css("width", "0%");
            $(".nav-cart__overlay").fadeOut();
            $("html").css("overflow", "unset");
        });
        $(".nav-cart__overlay").click(function() {
            $("#myNavCart").css("width", "0%");
            $(".nav-cart__overlay").fadeOut();
        });
    })

    //User
    $(function() {
        //Close
        $(".close-user__item").click(function () {
            $(".nav-login, .overlay-user, .nav-regis").fadeOut();
            $("html").css("overflow", "unset");
        });
        //Layer
        $("#myNavUser").click(function () {
            $(".nav-login, .overlay-user, .nav-regis").fadeOut();
            $("html").css("overflow", "unset");
        });
        //Login
        $(".btn-user").click(function () {
            $(".nav-login, .overlay-user").fadeIn();
            $("html").css("overflow", "hidden");
        });
        $(".nav-regis__title-left").click(function () {
            $(".nav-login").show();
            $(".nav-regis").hide();
            $("html").css("overflow", "hidden");
        });
        //Register
        $(".nav-login__title-right").click(function () {
            $(".nav-login").hide();
            $(".nav-regis").show();
        });
    });

    //Carousel
    $(function () {
        $('.section-one').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });
        $('.product__sec-2').slick({
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            ]
        });
        $('.sec-6').slick({
            dots: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
        $('.section-seven').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        });
        $('.section-nine').slick({
            dots: false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                    }
                }
            ]
        });
    });
    
    //IMG Sec-5
    $(function () {
        const window_height = $(window).height();
        $(window).scroll(function () {
            const scroll = $(window).scrollTop();
            const sec = $('.section-five');
            sec.each(function (e) {
                const $this = $(this);
                const offset = $this.offset().top;
                if (scroll >= offset - (window_height * 0.75)) {
                    $(".sec-5__img").addClass("sec-5__img-check");
                    $(".lazyloaded").css("opacity", "1");
                    $(".sec-5__content").css("opacity", "0.6");
                }
            });
        });
    })
});
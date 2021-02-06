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

    // Card
    $(function () {
        $(".main-card, .mc__title").hover(function () {
            $(".mc__show").toggleClass("mc__show--on");
            $(".mc__title").toggleClass("mc__title--show");
            $(".mc__action-icon--cart").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-2, .mc__title-2").hover(function () {
            $(".mc__show-2").toggleClass("mc__show--on");
            $(".mc__title-2").toggleClass("mc__title--show");
            $(".mc__action-icon--cart-2").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-2").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-2").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-2").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-3, .mc__title-3").hover(function () {
            $(".mc__show-3").toggleClass("mc__show--on");
            $(".mc__title-3").toggleClass("mc__title--show");
            $(".mc__action-icon--cart-3").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-3").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-3").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-3").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-4, .mc__title-sec4-1").hover(function () {
            $(".mc__show-4").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-4").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-4").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-4").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-4").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-5, .mc__title-sec4-2").hover(function () {
            $(".mc__show-5").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-5").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-5").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-5").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-5").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-6, .mc__title-sec4-3").hover(function () {
            $(".mc__show-6").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-6").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-6").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-6").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-6").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-7, .mc__title-sec4-4").hover(function () {
            $(".mc__show-7").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-7").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-7").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-7").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-7").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-8, .mc__title-sec4-5").hover(function () {
            $(".mc__show-8").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-8").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-8").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-8").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-8").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-9, .mc__title-sec4-6").hover(function () {
            $(".mc__show-9").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-9").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-9").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-9").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-9").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-10, .mc__title-sec4-7").hover(function () {
            $(".mc__show-10").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-10").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-10").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-10").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-10").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-11, .mc__title-sec4-8").hover(function () {
            $(".mc__show-11").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-11").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-11").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-11").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-11").toggleClass("mc__acic-compare--on");
        });
        $(".main-card-12, .mc__title-sec4-9").hover(function () {
            $(".mc__show-12").toggleClass("mc__show--on");
            $(".mc__action-icon--cart-12").toggleClass("mc__acic-cart--on");
            $(".mc__action-icon--qv-12").toggleClass("mc__acic-qv--on");
            $(".mc__action-icon--vwl-12").toggleClass("mc__acic-vwl--on");
            $(".mc__action-icon--compare-12").toggleClass("mc__acic-compare--on");
        });
    });

    //IMG Sec-5
    $(window).scroll(function () {
        if ($(document).scrollTop() > 3300) {
            $(".sec-5__img").addClass("sec-5__img-check");
            $(".lazyloaded").css("opacity", "1");
            $(".sec-5__content").css("opacity", "0.6");
        }
    });
});
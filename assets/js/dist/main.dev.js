"use strict";

jQuery(document).ready(function ($) {
  //Navbar
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".site-header").addClass("site-hd__on");
    } else {
      $(".site-header").removeClass("site-hd__on");
    }
  }); //Navbar full

  $(function () {
    $(".closebtn").click(function () {
      $("#myNav").removeClass("myNavOn");
    });
    $(".openbtn").click(function () {
      $("#myNav").addClass("myNavOn");
    });
  }); //Carousel

  $(function () {
    $('.section-one').slick({
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    });
    $('.product__sec-2').slick({
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 991,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }, {
        breakpoint: 767,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
    });
    $('.sec-6').slick({
      dots: true,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      responsive: [{
        breakpoint: 991,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
    });
    $('.section-seven').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
    $('.section-nine').slick({
      dots: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 767,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      }]
    });
  }); //IMG Sec-2
  //IMG Sec-5

  $(function () {
    var window_height = $(window).height();
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var sec = $('.section-five');
      sec.each(function (e) {
        var $this = $(this);
        var offset = $this.offset().top;

        if (scroll >= offset - window_height * 0.75) {
          $(".sec-5__img").addClass("sec-5__img-check");
          $(".lazyloaded").css("opacity", "1");
          $(".sec-5__content").css("opacity", "0.6");
        }
      });
    });
  });
});
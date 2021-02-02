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
  }); // Card

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
  });
});
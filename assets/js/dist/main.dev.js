"use strict";

// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
// }
// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
// }
jQuery(document).ready(function ($) {
  //Navbar full
  $(function () {
    $(".closebtn").click(function () {
      //$("#myNav").css("width", "0%");
      $("#myNav").hide(3000);
    });
    $(".openbtn").click(function () {
      //$("#myNav").css("width", "100%");
      $("#myNav").show(3000);
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
  });
});
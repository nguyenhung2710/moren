jQuery(document).ready(function ($) {
    //Navbar full
    $(function(){
        $(".closebtn").click(function(){
            //$("#myNav").css("width", "0%");
            //$("#myNav").hide(3000);
            //$("#myNav").fadeOut("slow");
            $("#myNav").removeClass("myNavOn");
        });
        $(".openbtn").click(function(){
            //$("#myNav").css("width", "100%");
            //$("#myNav").show(3000);
            //$("#myNav").fadeIn("slow");
            $("#myNav").addClass("myNavOn");
        });
    });

    //Carousel
    $(function(){
        $('.section-one').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });
    });

    // Card
    $(function(){
        $(".main-card, .mc__title").hover(function () {
            $(".mc__show").toggleClass("mc__show--on");
            //$(".mc__title").toggleClass("mc-titile__show");
            $(".mc__title").toggleClass("mc__title--show");
        });
    });
});
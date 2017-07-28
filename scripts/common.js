$(document).ready(function() {
    $('.slider_nav').slick({
        adaptiveHeight: true,
       arrows: true ,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    arrows:false
                }
            }]
    });

    $(".menu-trigger").click(function () {
        $("nav ul").slideToggle(500);
    });
    $(window).resize(function () {
        if($(window).width()>765){
            $("nav ul").removeAttr("style");
        }
    });
});
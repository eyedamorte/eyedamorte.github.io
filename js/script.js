$(document).ready(function () {
    //ADAPTIVE NAVIGATION

    $(document).ready(function () {
        $(".menu-trigger").click(function () {
            $("nav ul").slideToggle(500);
        });
        $(window).resize(function () {
            if($(window).width()>700){
                $("nav ul").removeAttr("style");
            }
        });
    });

    //TABS
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    //____________________________________________________________________-


//    плавная прокрутка якоря

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
       var target = $(this).attr('href'),
           bl_top = $(target).offset().top;
       $('body, html').animate({
           scrollTop:bl_top
       }, 700);
        return false
    });
});
$(function () {
    $('.menu li a').click(function () {
        if ($(this).parent().find('>ul, >div>ul').size() > 0) {
            $(this).parent().find('>ul, >div>ul').slideToggle(500);
            return false;
        }
        else {
            return true;
        }

    });

    $('.menu li.active').parents('ul').show(0);
    $('.logo').animate({top:0}, {duration:2000, easing:'easeOutBounce'});

    $('.scroll').jScrollPane({
        showArrows:true,
        arrowScrollOnClick:true
    });

    $(window).resize(function () {
        $('.scroll').jScrollPane({
            showArrows:true,
            arrowScrollOnClick:true
        });
        if ($(window).height()>600){
           $('.cont').css('margin-top', ($(window).height()-600)/2+'px');
           }
           else {
               $('.cont').css('margin-top', '20px');
           }
    });

    $('.gallery').jCarouselLite({
        btnNext:".next",
        btnPrev:".prev",
        auto:3000,
        speed:1000

    });

    $(window).resize(function () {
        $('.gallery').jCarouselLite({
            showArrows:true,
            arrowScrollOnHover:true
        });
    });


    $('.fancybox').fancybox();

    $('.nav_activation').click(function(){
        $(this).parent().find('.navigation').slideToggle(500);



    });
    if ($(window).height()>600){
    $('.cont').css('margin-top', ($(window).height()-600)/2+'px');
    }
    else {
        $('.cont').css('margin-top', '20px');
    }


});
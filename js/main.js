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
    $('.logo').animate({top:-15}, {duration:2000, easing:'easeOutBounce'});

    $('.scroll').jScrollPane({
        showArrows:true,
        arrowScrollOnHover:true
    });

    $(window).resize(function () {
        $('.scroll').jScrollPane({
            showArrows:true,
            arrowScrollOnHover:true
        });
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


});
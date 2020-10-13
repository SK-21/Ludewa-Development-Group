


(function ($) {

    'use strict';

    var $body = $("body"),
    $window = $(window);

/*============================= Navigation Section ==============================*/

$window.on('scroll' ,function () {
if ($(".navbar").offset().top > 25) {
    $(".navbar-default").addClass("small");
} else {
    $(".navbar-default").removeClass("small");
}
});

/*============================= Navigation Section ==============================*/

$window.on('scroll' ,function () {
if ($(".navbar").offset().top > 25) {
    $(".navbar-nav").addClass("show");
} else {
    $(".navbar-nav").removeClass("show");
}
});

/*============================= Smoothscroll js ==============================*/

$('.navbar-default').on('click', 'a', function (event) {
var $anchor = $(this);
$('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 1
}, 1000);
event.preventDefault();
});
$('.navbar-nav>li>a').on('click', function(){
$('.navbar-collapse').collapse('hide');
});
/*====================================== jquery scroll spy ========================================*/

$body.scrollspy({
target: ".navbar-collapse",
offset: 15

});
    /*  = = = = = = = = = = = = =  =
            banner typed
        = = = = = = = = = = = = =  = */
    var mainBannerArea = $('.banner-area');

    mainBannerArea.owlCarousel({
        animateOut: 'slideOutLeft',
        animateIn: 'fadeIn',
        items: 1,
        loop: true,
        dots: true,
        mouseDrag: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i><div class="itemprebg"></div>', '<div class="itemnextbg"></div><i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 7000, // auto play time
        responsive: {
            0: {
                nav: false
            },
            900: {
                nav: true
            }
        }
    });

    var itemBg = $('.itembg');

    $('.banner-area .single-banner').each(function () {
        var itmeImg = $(this).find('.itembg img').attr('src');
        $(this).css({
            background: 'url(' + itmeImg + ')'
        });
    });

    function slideThumb() {

        // Nav

        $('.banner-area .owl-item').removeClass('next prev');

        var currenSlide = $('.banner-area .owl-item.active');
        currenSlide.next('.owl-item').addClass('next');
        currenSlide.prev('.owl-item').addClass('prev');

        var nextSlideImg = $('.owl-item.next').find('.itembg img').attr('src');
        var prevSlideImg = $('.owl-item.prev').find('.itembg img').attr('src');

        $('.banner-area .owl-nav .owl-prev .itemprebg').css({
            background: 'url(' + prevSlideImg + ')'
        });

        $('.banner-area .owl-nav .owl-next .itemnextbg').css({
            background: 'url(' + nextSlideImg + ')'
        });

        // Thumbnail

        var dotcount = 1;

        $('.banner-area .owl-dot').each(function () {
            $(this).addClass('dotnumber' + dotcount);
            $(this).attr('data-info', dotcount);
            dotcount = dotcount + 1;
        });

        var slidecount = 1;

        $('.banner-area .owl-item').not('.cloned').each(function () {
            $(this).addClass('slidenumber' + slidecount);
            slidecount = slidecount + 1;
        });

        $('.banner-area .owl-dot').each(function () {

            var grab = $(this).data('info');
            var slidegrab = $('.slidenumber' + grab + ' .itembg img').attr('src');

            $(this).css("background-image", "url(" + slidegrab + ")");

        });
    }

    slideThumb();

    mainBannerArea.on('translated.owl.carousel', function () {
        slideThumb();
    });

    mainBannerArea.on('translate.owl.carousel', function () {
        $('.single-banner h1').removeClass('fadeInUp animated animated-04s').hide();
        $('.single-banner p').removeClass('fadeInUp animated animated-08s').hide();
        $('.single-banner a').removeClass('fadeInUp animated animated-12s').hide();
    });

    mainBannerArea.on('translated.owl.carousel', function () {
        $('.owl-item.active .single-banner h1').addClass('fadeInUp animated animated-04s').show();
        $('.owl-item.active .single-banner p').addClass('fadeInUp animated animated-08s').show();
        $('.owl-item.active .single-banner a').addClass('fadeInUp animated animated-12s').show();
    });
    
    /*---- client slider ----*/
    var client_slider = $(".client-wraper");
    client_slider.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        mouseDrag: true,
        margin: 10,
        smartSpeed: 700,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

   
    /*  = = = = = = = = = = = = =  =
            parallax 
        = = = = = = = = = = = = =  = */
    var parallax_effect = $('.parallax');
    parallax_effect.jarallax({
        speed: 0.5
    });
    

    /*  = = = = = = = = = = = = =  =
            scroll up
        = = = = = = = = = = = = =  = */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*  = = = = = = = = = = = = =  =
            wmBox for popup video
        = = = = = = = = = = = = =  = */
    $.wmBox();

    $(window).on('load', function () {
    /*  = = = = = = = = = = = = =  =
            preloader
        = = = = = = = = = = = = =  = */
        $('.preloader').fadeOut('500');

        /*  = = = = = = = = = = = = =  =
                isotope
            = = = = = = = = = = = = =  = */
        // init Isotope
        var isotope_content = $('.iso-content');
        isotope_content.isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });
        // filter items on button click
        var isotope_nav = $('.iso-nav ul li');
        isotope_nav.on('click', function () {
            $('.iso-nav ul li').removeClass('gallery-active');
            $(this).addClass('gallery-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });
    });

}(jQuery));

jQuery(document).ready(function() {
    $('.mainSlider').bxSlider({
        speed: 300,
        pagerCustom: '#mainSliderThumbs',
        controls: false,
        mode: "fade",
        auto: true,
        pause: 6000,
        autoHover: true,
        onSlideAfter: function($slideElement, oldIndex, newIndex){
            $slideElement.siblings('.active').removeClass('active');
            $slideElement.addClass('active');
        },
        onSliderLoad: function(currentIndex){
            $('.mainSlider').removeClass('hideIt').children('li').eq(currentIndex).addClass('active');
            smooveInit();
        }
    });

    function smooveInit() {
        if ($('html').hasClass('ie') || ifMobile()) {
            $(".webAppDevFlow").addClass('smoove-ready');
            $(".appearence_from_bottom, .aboutUs_item").css({visibility: 'visible'});
        } else {
            $(".appearence_from_bottom").smoove({
                offset: '15%',
                opacity: 0,
                moveY: "30px"
            });

            $(".socialItem").smoove({
                offset: '35%',
                opacity: 0,
                scale: 0.5
            });

            $(".aboutUs_item").smoove({
                offset: '15%',
                opacity: 0,
                perspective: 1000,
                rotateX: "25deg",
                moveZ: "-100px",
                speed: 0.4
            });

            $(".webAppDevDraft").smoove({
                offset: '50%',
                opacity: 0,
                scale: 0.95
            });

            $(".webAppDevFlow").smoove({
                offset: '50%',
                opacity: 1,
                cssClass: "smoove-ready"
            });
        }
    }

    function ifMobile () {
        var $media_for_js = jQuery(".media_for_js"),
            $ifMobileWidth = (parseInt($media_for_js.css("z-index")) > 960) ? false : true,
            mobileUserAgent = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
                },
                any: function() {
                    return (mobileUserAgent.Android() || mobileUserAgent.BlackBerry() || mobileUserAgent.iOS() || mobileUserAgent.Opera() || mobileUserAgent.Windows());
                }
            };

        return ($ifMobileWidth || mobileUserAgent.any());
    }
});
jQuery(document).ready(function() {
    $('.mainSlider').bxSlider({
        speed: 300,
        pagerCustom: '#mainSliderThumbs',
        controls: false,
        mode: "fade",
        auto: true,
        pause: 8000,
        autoHover: true,
        onSlideAfter: function($slideElement, oldIndex, newIndex){
            $slideElement.siblings('.active').removeClass('active');
            $slideElement.addClass('active');
        },
        onSliderLoad: function(currentIndex){
            $('.mainSlider').children('li').eq(currentIndex).addClass('active');
        }
    });

    if ($('html').hasClass('ie')) {
        $(".webAppDevFlow").addClass('smoove-ready');
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
            rotateX: "30deg",
            moveY: "30px",
            moveZ: "-50px",
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
});
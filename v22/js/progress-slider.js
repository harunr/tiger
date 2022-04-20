$(document).ready(function() {
    var $slider = $('.individual-tab-slider');
    var $progressBar = $('.individual-tab-slider-one');
    var $progressBarLabel = $( '.slider__label' );

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel.text( calc + '% completed' );
    });
    
    if ($(window).width() < 991) {
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc );

            $progressBarLabel.text( calc + '% completed' );
        });

    }
    $slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        centerMode: true,
        centerPadding: '234px',
        infinite: true,
        loop: true,
        navigation:false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    centerPadding: '104px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    centerPadding: '34px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    arrows: false,
                    centerMode:true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    }); 
    
    
    
});


$(document).ready(function() {
    var $slider = $('.individual-tab-slider-two');
    var $progressBar = $('.similar-tyre-progressbar');
    var $progressBarLabel = $( '.slider__label' );

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel.text( calc + '% completed' );
    });
    
    if ($(window).width() < 991) {
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc );

            $progressBarLabel.text( calc + '% completed' );
        });

    }
    $slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        centerMode: true,
        centerPadding: '385px',
        infinite: true,
        loop: true,
        navigation:false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    centerPadding: '134px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    centerPadding: '104px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    arrows: false,
                    centerMode:true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    }); 
    
    
    
});


$(document).ready(function() {
    var $slider = $('.awards-slider');
    var $progressBar = $('.individual-tab-slider-one');
    var $progressBarLabel = $( '.slider__label' );

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );

        $progressBarLabel.text( calc + '% completed' );
    });

    if ($(window).width() < 991) {
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc );

            $progressBarLabel.text( calc + '% completed' );
        });

    }
    $slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        centerMode: true,
        centerPadding: '66px',
        infinite: true,
        loop: true,
        navigation:false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    centerPadding: '40',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1281,
                settings: {
                    arrows: true,
                    centerPadding: '30',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    centerPadding: '30',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    arrows: false,
                    centerMode:true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    }); 



});






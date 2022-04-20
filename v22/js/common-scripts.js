(function ($) {
    $(function () {

        /*  Header */
        if($(".main-header-section").length){
            var $header = $(".main-header-section"),
                $clone = $header.before($header.clone().addClass("fixedTop")),
                $fixedHeader = $('.fixedTop'),
                $mainHeaderHeight = $header.outerHeight() + 100,
                $headerHeight = $fixedHeader.outerHeight(),
                lastPos = 0;
            if ($(window).width() > 767) {
                $fixedHeader.css({
                    top: - $headerHeight
                });
                $(window).resize(function () {
                    $headerHeight = $fixedHeader.outerHeight();
                });

                $(window).on("scroll resize", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {

                        //$fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").addClass("started");

                        if (fromTop > lastPos) {
                            $fixedHeader.css({
                                top: 0
                            });
                        }
                        lastPos = fromTop;


                    } else {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").removeClass("started");

                    }
                });


            } else{
                $(window).on("scroll", function(){
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {
                        $("body").addClass("over-header");
                    }else{
                        $("body").removeClass("over-header");
                    }
                })
            }
        }


        var headerHeight = $('#main-header').outerHeight();
        $(window).resize(function () {
            headerHeight = $('#main-header').outerHeight();
        });

        $(document).delegate(".DeleteBtn", 'click', function () {
            alert(".DeleteBtn Click Function -  " + $(this).attr('id'));
            var DelBtnNum = $(this).attr('id');
            DelBtnNum = DelBtnNum[DelBtnNum.length - 1];
            $('#divInput' + DelBtnNum).remove();

        });
        
        $('.phone-nav').click(function () {
            $(this).toggleClass('nav-active')
            $('body').toggleClass('navShown')
        })

        if ($("select.size-select").length) {
            $("select.size-select").selectric({
                
            });
        }
        if ($("select.wheels-select").length) {
            $("select.wheels-select").selectric({
                
            });
        }

        if ($("select.sort-method-select").length) {	
            $("select.sort-method-select").selectric({	

            });	
        }	

        if($(".shop-category").length){	
            $("body").addClass('shop-category-page');	
        }	

        if($(".tyre-individual").length){	
            $("body").addClass('tyre-individual-page');	
        }
        
        if ($("select.mobi-select").length) {
            $("select.mobi-select").selectric({
                onChange: function (element) {
                    $(this).parents('.selectric-mobi-select').addClass('selectric-value-changed')
                }
            });
        }

        
    //tyre-about
        $(".rewards-discovery .profile-content:nth-child(5) .profile-accordion-item").addClass("active")
       
        $(".profile-accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h4").on("click touch", function(){
                $(".profile-accordion-item").removeClass("active")
                $(".profile-accordion-item .profile-accordion-content").slideUp();
                if($this.find(".profile-accordion-content:visible").length){
                    $(".profile-accordion-item").removeClass("active")
                    $(".profile-accordion-item .profile-accordion-content").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".profile-accordion-item .profile-accordion-content").slideUp();
                    $this.find(" > .profile-accordion-content").slideDown();
                }
            })
        })
        
        
        
 $('.main-nav ul > li').find(">div").parent().addClass("mega");
        
            $('.main-nav ul > li.mega').mouseenter(function(){
                $(this).addClass('megamenu-opened')
            })
            $('.main-nav ul > li.mega').mouseleave(function(){
                $(this).removeClass('megamenu-opened')
            })
        
        if ($(window).width() > 767) {
        $('.main-nav ul > li.mega').mouseenter(function(){
            $(this).addClass('megamenu-expand')
        })
        $('.main-nav ul > li.mega').mouseleave(function(){
            $(this).removeClass('megamenu-expand')
        })
        }


        // Click function 
        if ($(window).width() > 767) {
          $('.mega-menu-tab-trigers ul.tab-menu-item > li > a').click(function(){
          
          $('.mega-menu-tab-trigers ul.tab-menu-item > li > a').removeClass('account-tab-active');
          $(this).addClass('account-tab-active');
          $('body').addClass('thumbnail-hide');
          $('.mega-menu-tab-content .mega-menu-tab-item').hide();
          
          var activeTab = $(this).attr('rel');
          $('.'+activeTab).fadeIn().siblings().hide();
          
        });
            
          $('.main-nav ul li:nth-child(2) .mega-menu-tab-trigers ul.tab-triger li:nth-child(1) a, .main-nav ul li:nth-child(3) .mega-menu-tab-trigers ul.tab-triger li:nth-child(1) a').click(function(e){
                $('body').removeClass('thumbnail-hide')
          })

        };


        $('.finder-selectric select.size-select').attr("disabled", "disabled").selectric('refresh');
        $('.finder-selectric:first-child select.size-select').removeAttr("disabled").selectric('refresh');
        $('.finder-selectric').on('change', function () {
            $(this).next().find('.selectric-wrapper').removeClass("selectric-disabled");
            $(this).next().find('select.size-select').removeAttr("disabled").selectric('refresh');
            $(this).next().find('.selectric-wrapper').addClass('selectric-open');
            $(this).prev().removeClass('selectric-open');
            $(this).removeClass('selectric-open');
            $(this).addClass('field-selected');
        })
      
        $(".finder-selectric .selectric .label, .finder-selectric .selectric-items li").click(function() {
            console.log("Hello world!")
            $('html, body, article').animate({
                scrollTop: $(".finder-wrap").offset().top
            }, 700);
            });
        
        // End animation function
        
        setTimeout(function(){
            $('body').addClass('page-loaded');
        },2000);
        
        if ($(window).width() < 768) {
            $('.finder-selectric').removeClass('selectric-selected')
            $('.finder-selectric:first-child').addClass('selectric-selected')
            $('.finder-selectric').on('change', function () {

               
                $(this).next().addClass('selectric-selected');
                $(this).next().addClass('upper-index')
               
            })
            
            $('.finder-selectric').on('selectric-before-open', function() {
                $('.finder-selectric').removeClass('upper-index')
                $(this).addClass('upper-index')
            })
           
            $(".service-item").each(function(){
                var $this = $(this);
                $this.find(" h3").on("click touch", function(){
                    $(".service-item").removeClass("service-active")
                    $(".service-item-text p").slideUp();
                    if($this.find(".service-item-text p:visible").length){
                        $(".service-item").removeClass("service-active")
                        $(".service-item-text p").slideUp();
                    }
                    else{
                        $this.addClass("service-active")
                        $(".service-item-text p").slideUp();
                        $this.find(".service-item-text p").slideDown();
                    }
                })
            })
         
        }
        $(".service-item:nth-child(1) .service-item-text p").slideDown()
        $(".service-item:nth-child(1)").addClass("service-active")



        $('.single-tyre-tab-trigers ul li:first-child').addClass('single-tyre-tab-active');	
        $('.single-tyre-tab-item').hide();	
        $('.single-tyre-tab-item').eq(0).show();	
        // Click function	
        $('.single-tyre-tab-trigers ul li').click(function(){
            $('.single-tyre-tab-trigers ul li').removeClass('single-tyre-tab-active');	
            $(this).addClass('single-tyre-tab-active');	
            $('.single-tyre-tab-item').hide();	
            var activeTab = $(this).find('a').attr('href');	
            $(activeTab).fadeIn();	
            return false;	
        });	

        $('.tyre-bullets > figure').click(function () {	
            $(this).parent().toggleClass('nav-active')	
        })	

            $("div.tyre-filter-list ul li").each(function () {	
                var $this = $(this);	
                $this.find(" > h6").on("click touch", function () {	
                    if ($(this).parent().hasClass('tyre-filter-active')) {	
                        $(this).parent().removeClass('tyre-filter-active')	
                        $(this).parent().find(".tyre-filter-check-box").slideUp();	
                    } else {	
                        $(this).parent().addClass('tyre-filter-active')	
                        $(this).parent().find(".tyre-filter-check-box").slideDown();	
                    }	
                })	
            })	
       
        
        $(".mobi-accordion").each(function () {
            var $this = $(this);	
            $this.find(" > h5").on("click touch", function () {	
                if ($(this).parent().hasClass('mobi-tyre-accordion')) {	
                    $(this).parent().removeClass('mobi-tyre-accordion')	
                    $(this).parent().find("p").slideUp();	
                } else {	
                    $(this).parent().addClass('mobi-tyre-accordion')	
                    $(this).parent().find("p").slideDown();	
                }	
            })	
        })
        

        // This function for scroll animation

        var $animation_elements = $('.service-row-wrap, .service-item-wrap');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');


        $('.account-item-left-tab-wrap .finder-tab-trigger:first-child').addClass('finder-tab-active');
        $('.finder-tab-content').hide();
        $('.finder-tab-content:first').show();

        // Click function
        $('.finder-tab-trigger > h4').click(function () {
            $('.finder-tab-trigger >  h4').removeClass('finder-tab-active');
            $(this).addClass('finder-tab-active');
            $('.finder-tab-content').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        if ($(window).width() < 768) {
            if ($("select.mobi-select").length) {
                $("select.mobi-select").selectric({
                    onChange: function (element) {
                        var tchitem = $("#" + $("select.mobi-select option:selected").val());
                        var tchheight = tchitem.height() + 100;
                        $(".finder-tab-content-wrap").css({
                            height: tchitem + "px"
                        });
                        $(".finder-tab-content-wrap > div.finder-tab-content").removeClass("item-active");
                        tchitem.addClass("item-active");

                    }
                });
            }
        }

        if ($(".selectric-open").length) {
            $("body").addClass('selectric-open-blur');
        }

        if ($(window).width() < 768) {
            $('.log-in .input-item input[type=submit]').attr('value', 'SIGN UP')
        }

        if ($(window).width() < 768) {
            $('.category-item-wrap a:nth-child(2)').text('wheels', '')
        }

        if ($(".home-content").length) {
            $("body").addClass('home-content-page');
        }

        if ($(".selectric-open").length) {
            $("body").addClass('selectric-open-blur');
        };

        if ($(".flagstrap").length) {
            $('.flagstrap').flagStrap();
        };

        $(".my-account-list > ul > li > a").on("click touch", function () {
            $(".account-info-wrap").show();

        })

        if ($(window).width() > 767) {
            // Accordion Function
            $(".account-accordion-item").each(function () {
                var $this = $(this);
                $this.find(" > ul").on("click touch", function () {

                    if ($(this).parent().hasClass('order-active')) {
                        $(this).parent().removeClass('order-active')
                        $(this).parent().find(".order-details").slideUp();
                    } else {
                        $(this).parent().addClass('order-active')
                        $(this).parent().find(".order-details").slideDown();
                    }
                })
            })
        };

        // Accordion Function
        $(".add-address-btn ").each(function () {
            var $this = $(this);
            $this.find(" > a").on("click touch", function () {

                if ($(this).parent().hasClass('address-active')) {
                    $(this).parent().removeClass('address-active')
                    $(this).parent().find(".input-accordion-hide").slideUp();
                } else {
                    $(this).parent().addClass('address-active')
                    $(this).parent().find(".input-accordion-hide").slideDown();
                }
            })
        })

        $('div.account-accordion-item-wrap').each(function () {
            var $$_this = $(this)

            $$_this.find('ul.mobi').on('click touch', function () {
                $('div.account-accordion-item-wrap').find('.account-accordion-item').removeClass('hide-bar');
                $(this).parent().addClass('hide-bar');
                $('body').addClass('hide-scroll');
               
            });
        });

        $('.secondary-back-btn').on('click touch', function () {
            $('.account-accordion-item').removeClass('hide-bar')
            $('.secondary-back-btn').addClass('scrolld')
              $('body').removeClass('hide-scroll');

        });

        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({
                onChange: function (element) {
                    $(this).parents('div.selectric-wrapper').addClass('value-changed')
                }
            });
        };

        /* payment-page*/
        if ($('.payment-wrap').length) {
            $('body').addClass('payment-main-wrap')
        }
        /* payment-page*/

        /* collection-page*/
        if ($('.collection-page').length) {
            $('body').addClass('collection-main-wrap')
        }
        /*collection-page*/


        if ($(window).width() < 768) {
            $('.tyre-filter-title').click(function(){
               $('.tyre-filter-list').slideToggle()

           })
        }

        $(".payment-method-item-wrap > .payment-method-item").each(function () {
            var $this = $(this);
            $this.find(" > .custom_radio > label").on("click touch", function () {

                if ($(this).parent().hasClass('payment-active')) {
                    $(this).parent().removeClass('payment-active')
                    $(this).parent().find(".method-details-wrap").slideUp();
                } else {
                    $(this).parent().addClass('payment-active')
                    $(this).parent().find(".method-details-wrap").slideDown();
                }
            })
        })
        
        if ($('#hero-slider').length) {
            $('#hero-slider').slick({
                dots: false,
                arrows: true,
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                speed: 1000,


            })
            $(window).on('resize', function () {
                $('#hero-slider').slick('resize');

            });
        }


        if ($('.service-item-row:nth-child(2)').length) {
            $('.service-item-row:nth-child(2').slick({
                dots: false,
                arrows: false,
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                speed: 1000,
                centerMode: true,
                centerPadding: '55px',
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,

                        }
                    },

                ]


            })
            $(window).on('resize', function () {
                $('.service-item-row:nth-child(2)').slick('resize');

            });
        }


        if ($('.more-related-wrap').length) {
            $('.more-related-wrap').slick({
                dots: false,
                arrows: false,
                infinite: false,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                speed: 1000,
                centerMode: true,
                centerPadding: '36px',
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,

                        }
                    },

                ]


            })
            $(window).on('resize', function () {
                $('.more-related-wrap').slick('resize');

            });
        }


        /* Cart */
        $(function() {
            $(".button").on("click", function() {
                var $button = $(this);
                var $parent = $button.parent(); 
                var oldValue = $parent.find('.input').val();

                if ($button.text() == "+") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    
                    if (oldValue > 1) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 1;
                    }
                }
  
                $parent.find('.input').val(newVal);
            });
        });

        
        /* Cart */
        if ($(window).width() < 768) {
            $('.tyre-filter-title').click(function () {
                $(this).parent().toggleClass('tyre-filter-active')
                $('body').toggleClass('tyre-filter-show')
            })
        }
        
        /* individual*/
        $(".individual-tabnav li > a").removeClass("active")
        $(".individual-tabnav li > a").eq(0).addClass("active")
        $(".individual-tab-item-wrap > .individual-tab-item").eq(0).addClass("individual-tab-item-active")
        $(".individual-tabnav li > a").each(function (i) {
            $(this).click(function (e) {
                e.preventDefault();
                if ($(this).hasClass("active")) return false
                else {
                    $(".individual-tabnav li > a").removeClass("active")
                    $(this).addClass("active")
                    $(".individual-tab-item-wrap > .individual-tab-item").removeClass("individual-tab-item-active")
                    $(".individual-tab-item-wrap > .individual-tab-item").eq(i).addClass("individual-tab-item-active")
                }
            })

        });

        
        $('.main-nav-right ul li:nth-child(3) a, .bottom-menu ul li:nth-child(3) a').click(function (e) {
            e.preventDefault();
            $('body').addClass('wishlist-show')
            $('#phone-nav').removeClass('nav-active')
            $('body').removeClass('navShown')
        });
        
        $('.modal-close').click(function () {
            $('body').removeClass('wishlist-show')
        });
        
        
        $('.search-wrap input, .search-bar input').click(function(){
            $('.search-modal-open').fadeToggle()
            
        });
    
        $('.request-quote .request-quote-modal').fadeOut();
        $('.request-quote .main-nav-right ul li:nth-child(2) a, .mobi-breadcrumb ul li:nth-child(2) a').click(function(e){
            e.preventDefault();
            $('.request-quote .request-quote-modal').fadeIn();
            $('body').addClass('quote-modal-show');
        })
        $('.form-modal-close').click(function(){
            $('.request-quote .request-quote-modal').fadeOut();
            $('body').removeClass('quote-modal-show');
        })

        
        
        if ($(window).width() < 768) {

            $('.main-nav > .main-nav-left > ul > li.mega > a').click(function (e) {
                    e.preventDefault();
                    $(this).parent().addClass('mega-expand')
                $('body').addClass('mega-scroll-hide')
                })
            $('.mobi-back-btn').click(function (e) {
                    e.preventDefault();
                $(this).parents('.main-nav > .main-nav-left > ul > li.mega').removeClass('mega-expand')
                $('body').removeClass('mega-scroll-hide')
                })
      
            
        };

        
        if ($(window).width() < 768) {


            $(".general-expanded .contact-expanded").slideDown();
            $('.general-expanded.customer-feedback-item').addClass('contact-accordion-active')
            $(".customer-feedback-item").each(function(){
                var $this = $(this);
                $this.on("click touch", function(){
                    
                    $(".customer-feedback-item").removeClass("contact-accordion-active")
                    $(".contact-expanded").slideUp();
                    if($this.find(".contact-expanded:visible").length){
                        $(".customer-feedback-item").removeClass("contact-accordion-active")
                        $(".contact-expanded").slideUp();
                    }
                    else{
                        $this.addClass("contact-accordion-active")
                        $(".contact-expanded").slideUp();
                        $this.find(".contact-expanded").slideDown();
                    }
                })
                $this.find('div.customer-feedback-item-inner').on("click touch", function(e){
                    e.stopPropagation();
                })
            })
    };
        

        if ($(window).width() > 767) {

            $(".general-expanded.customer-feedback-item").addClass('contact-active')
            $(".general-expanded.customer-feedback-item .contact-expanded").fadeIn()
            $(".customer-feedback-item").each(function(){
                var $this = $(this);
                $this.on("click touch", function(){
                    $(".customer-feedback-item").removeClass("contact-active")
                    if($this.find(".contact-expanded:visible").length){
                        $(".customer-feedback-item").removeClass("contact-active")
                    }
                    else{
                        $this.addClass("contact-active")
                    }
                })
            })

        };

        if ($(window).width() < 768) {
            // Accordion Function
            $("ul.tab-menu-item > li").each(function () {
                var $this = $(this);
                $this.find(" > a").on("click touch", function (e) {
                    e.preventDefault();

                    if ($(this).parent().hasClass('secondary-active')) {
                        $(this).parent().removeClass('secondary-active')
                        $(this).parent().find(".accordion-item").slideUp();
                    } else {
                        $(this).parent().addClass('secondary-active')
                        $(this).parent().find(".accordion-item").slideDown();
                    }
                })
            })
    };
        
       
        
        $('ul.wheels-tab-primary > li').click(function(){            
            $('.wheels-tab-hidden').fadeIn();
        });

        $('ul.wheels-tab-hidden> li').click(function(){            
            $('.wheels-tab-hidden').fadeOut();
        });

        $('ul.diameter-tab-primary > li').click(function(){            
            $('.diameter-tab-hidden').fadeIn();
        });

        $('ul.diameter-tab-hidden> li').click(function(){            
            $('.diameter-tab-hidden').fadeOut();
        });

        $('ul.diameter-tab-hidden > li').click(function(){
            $('ul.diameter-tab-hidden > li').removeClass('diameter-tab-active');
            $(this).addClass('diameter-tab-active');
            
            var activeTab = $(this).attr('rel');
            $('.'+activeTab).fadeIn().siblings().hide();

        })

        $('ul.wheels-tab-hidden > li').click(function(){
            $('ul.wheels-tab-hidden> li').removeClass('wheels-tab-active');
            $(this).addClass('wheels-tab-active');

            var activeTab = $(this).attr('rel');
            $('.'+activeTab).fadeIn(function(){
                $('.single-tyre-tab-trigers li').removeClass('single-tyre-tab-active')
                $('.single-tyre-tab-content .single-tyre-tab-item').hide();
                $('.wheels-tab-item').find('.single-tyre-tab-content .single-tyre-tab-item:first').show();
                $('.wheels-tab-item').find('.single-tyre-tab-trigers ul li:first').addClass('single-tyre-tab-active');
            }).siblings().hide();
        
        })
        
        
        

        $(document).ready(function() {
            
            var $slider = $('#individual-tab-slider');
            var $progressBar = $('.individual-tab-slider-one');
            var $progressBarLabel = $( '.slider__label' );

            $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
                var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;

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
            if ($($slider).length) {
            $slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 400,
                arrows: true,
                infinite: false,
                loop: true,
                navigation:false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: true,
                            centerPadding: '134px',
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            autoplay: true,
                            arrows: false,
                            slidesToShow: 1
                        }
                    }
                ]
            }); 
            }
        });
       
        
        

        $(document).ready(function() {
            
            var $slider = $('#recent-post-slider');
            var $progressBar = $('.individual-tab-slider-one');
            var $progressBarLabel = $( '.slider__label' );

            $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
                var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;

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
            if ($($slider).length) {
            $slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 400,
                arrows: true,
                infinite: false,
                loop: true,
                navigation:false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: true,
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            autoplay: true,
                            arrows: false,
                            slidesToShow: 1
                        }
                    }
                ]
            }); 
            }
        });
       
        $('a.other-blog-item').addClass('single-tyre-tab-active');	
        $('.multi-media-tab-item').hide();	
        $('.multi-media-tab-item').eq(0).show();	
        // Click function	
        $('.multi-media-content a.other-blog-item').click(function(e){
            e.preventDefault();
            $('a.other-blog-item').removeClass('single-tyre-tab-active');	
            $(this).addClass('single-tyre-tab-active');	
            $('.multi-media-tab-item').hide();	
            var activeTab = $(this).attr('rel');
            $('.'+activeTab).fadeIn().siblings().hide();	
        });	
        
 
        $(".multi-media-content a.other-blog-item").click(function(e) {
           e.preventDefault();
            $('html, body, article').animate({
                scrollTop: $(".multi-media-wrap").offset().top - 100
            }, 700);
        });
    
       
       
        $(window).ready(function(){
            setInterval(function(){
                $('.heading-logo').addClass("animate-left")
            }, 1000);

        });
        
        
        if ($(".rewards-discovery").length) {
            $("body").addClass('rewards-page');
        }
        
        if ($(".about-content").length) {
            $("body").addClass('about-page');
        }
        
        
        
        
        
        $('.clear-cart-wrap').hide();
        $('.clear-cart').click(function(){            
            $('.clear-cart-wrap').fadeIn();
        });

        $('.clear-cart-wrap .close-btn').click(function(){            
            $('.clear-cart-wrap').fadeOut();
        });
        
        
        $('.tooltip').click(function(e){
            e.preventDefault();
        })
        
        
        
        if ($(window).width() > 767) {
        
        $('.modal-finder').hide();
        $('#tyre-finder').click(function(e){
            e.preventDefault();
            $('.modal-finder').fadeIn();
        });
        
        $('.modal-finder').click(function(){            
            $('.modal-finder').fadeOut();
        });
        
        $('.finder-selectric-btn > input').click(function(e){
            e.preventDefault();
            $('.search-btn').show();
            $('#tyre-finder').hide();
        })
        
        $('.search-btn span').click(function(e){
            e.preventDefault();
            $('.search-btn').hide();
            $('#tyre-finder').show();
            if(location.search.indexOf('reloaded=yes') < 0){
                var hash = window.location.hash;
                var loc = window.location.href.replace(hash, '');
                loc += (loc.indexOf('?') < 0? '?' : '&') + 'reloaded=yes';
                // SET THE ONE TIME AUTOMATIC PAGE RELOAD TIME TO 5000 MILISECONDS (5 SECONDS):
                setTimeout(function(){window.location.href = loc + hash;}, 1);
            }
            var uri = window.location.toString();

            if (uri.indexOf("?") > 0) {

                var clean_uri = uri.substring(0, uri.indexOf("?"));

                window.history.replaceState({}, document.title, clean_uri);

            }


        })
		
        
   
            
        }
        if ($(window).width() < 768) {
            
            $('.finder-selectric-btn > input').click(function(e){
                $('.finder-tab-content-wrap').fadeOut();
                $('.value-result-fild').fadeIn();
            })
            
            $('.value-result-fild span').click(function(e){
                $('.finder-tab-content-wrap').fadeIn();
                
                //Place as last thing before the closing </body> tag
                if(location.search.indexOf('reloaded=yes') < 0){
                    var hash = window.location.hash;
                    var loc = window.location.href.replace(hash, '');
                    loc += (loc.indexOf('?') < 0? '?' : '&') + 'reloaded=yes';
                    // SET THE ONE TIME AUTOMATIC PAGE RELOAD TIME TO 5000 MILISECONDS (5 SECONDS):
                    setTimeout(function(){window.location.href = loc + hash;}, 1);
                }
                var uri = window.location.toString();

                if (uri.indexOf("?") > 0) {

                    var clean_uri = uri.substring(0, uri.indexOf("?"));

                    window.history.replaceState({}, document.title, clean_uri);

                }
                
                
                
            })
            
        }
		
    }) // End ready function.
if ($(".request-quote-modal").length) {
            $("body").addClass('request-quote');
        }
    

})(jQuery)
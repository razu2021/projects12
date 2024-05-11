$(function() {
    /*--------------------------
	 Global Variable
	---------------------------- */
    var patsala = $(window);
    var page = $('html, body');

    /*--------------------------
    scroll to top active
    ---------------------------- */
    $(".scrolltop").on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    });

    /*--------------------------
     Menu Scroll Fix Function
    ---------------------------- */
    patsala.on('scroll', function() {
        if (patsala.scrollTop() > 100) {
            $('.menu_part').addClass('animated slideInDown fix')
        } else {
            $('.menu_part').removeClass('animated slideInDown fix ')
        }
    })

    patsala.on('scroll', function() {
        if (patsala.scrollTop() > 100) {
            $('.menu_part').addClass('none_menu')
        } else {
            $('.menu_part').removeClass('none_menu')
        }
    });


    $('.feed_slide').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 15,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.course_dtls_sidebar_feedback_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left left_slide"></i>', '<i class="fas fa-long-arrow-alt-right right_slide"></i>'],
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.course_dtls_sidebar_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.testmonial_slide_active').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.brand_slide_active').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    $('.feed_back_content_slide').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.client_logo_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('.pathner_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    new VenoBox({
        selector: '.my-video-links',
    });

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function(itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });



    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

});
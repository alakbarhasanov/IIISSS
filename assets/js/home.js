$(document).ready(function () {

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('.showMoreBtn').click(function () {
        $('.products-box').slice(6, 29).removeClass('d-none');
        $('.showMoreBtn').addClass('d-none')
        $('.lessMoreBtn').removeClass('d-none')
        $('.lessMoreBtn').css('margin-top', '20px');
    });

    $('.lessMoreBtn').click(function () {
        $('.products-box').slice(6, 29).addClass('d-none');
        $('.lessMoreBtn').addClass('d-none')
        $('.showMoreBtn').removeClass('d-none')
    });


    $('#topbtn').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 100)

    })

    

    $(window).scroll(function () {
        var header = $('#navbar'),
            scroll = $(window).scrollTop();
        let logo = $(".logo a h1")
        let logoA = $(".logo a")
        let navs = $(".navs ul li a")
        if (scroll >= 150) {
            header.css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'z-index': '99999',
                'background-color': 'white',
                'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                'backdrop-filter': 'blur(10px)',
                'background': 'transparent',
                'height': '100px'
            });
            logo.css({
                'color': 'black',
                'margin-top': '20px'
            })
            logoA.css({
                'text-decoration-color': 'black',
                'margin-top': '70px'
            })
            navs.css({
                'color': 'black'
            })
        } else {
            header.css({
                'position': 'relative',
                'box-shadow': 'none',
                'height': '60px',
            });
            logo.css({
                'color': 'white',
                'text-decoration-color': 'white',
                'margin-top': '0px'
            })
            logoA.css({
                'text-decoration-color': 'white',
                'margin-top': '0px'
            })
            navs.css({
                'color': 'white'
            })
        }
    });


    
    $(window).scroll(function () {
        var header = $('#navbar-phone'),
            scroll = $(window).scrollTop();
        let logo = $(".logo-img a h1")
        let logoA = $(".logo-img a")
        let navs = $(".hamburger-menu ul li a")
        let hamburgerMenu = $('.hamburger-menu')
        let hamburgerIcon = $(".hamburger-icon i")
        if (scroll >= 150) {
            header.css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'z-index': '99999',
                'background-color': 'white',
                'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                'backdrop-filter': 'blur(10px)',
                'background': 'white',
                'height': '100px'
            });
            logo.css({
                'color': 'black',
                'margin-top': '20px'
            })
            logoA.css({
                'text-decoration-color': 'black',
                'margin-top': '70px'
            })
            navs.css({
                'color': 'black'
            })
            hamburgerMenu.css({
                'background': 'white',
                'height': '135px',
            })
            hamburgerIcon.css({
                'margin-top': '15px',
                'color': 'black'
            })
        } else {
            header.css({
                'position': 'relative',
                'box-shadow': 'none',
                'height': '60px',
                'background': '#4D9ED1',
            });
            logo.css({
                'color': 'white',
                'text-decoration-color': 'white',
                'margin-top': '0px'
            })
            logoA.css({
                'text-decoration-color': 'white',
                'margin-top': '0px'
            })
            navs.css({
                'color': 'white'
            })
            hamburgerMenu.css({
                'background': '#4D9ED1',
                'height': '135px',
                'margin-left': '-12px'
            })
            hamburgerIcon.css({
                'margin-top': '15px',
                'color': 'white'
            })
        }
    });


    


    $("#navbar-phone .hamburger-icon i").on("click", function () {
        $("#navbar-phone .hamburger-menu").toggleClass("d-none");
    });

    

    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();

        $('.navs a').each(function() {
            var currLink = $('.navs a');
            var refElement = $(currLink.attr("href"));

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navs a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });

    // Başlanğıcda ilk bölməyə görə aktiv linki seç
    $(window).scroll();



    //Product carousel
    // $('.cartsss').slick({
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
            
    //     ]
    // });

})


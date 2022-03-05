$(document).ready(function () {

    // Carousel

    // $(".carousel").carousel({
    //     interval: false,
    //     pause: true
    // });

    // $(".carousel .carousel-inner").swipe({
    //     swipeLeft: function (event, direction, distance, duration, fingerCount) {
    //         this.parent().carousel('next');
    //     },
    //     swipeRight: function () {
    //         this.parent().carousel('prev');
    //     },
    //     threshold: 0,
    //     tap: function (event, target) {
    //         window.location = $(this).find('.carousel-item.active a').attr('href');
    //     },
    //     excludedElements: "label, button, input, select, textarea, .noSwipe"
    // });

    // $('.carousel .carousel-inner').on('dragstart', 'a', function () {
    //     return false;
    // });

    // swiper

    var swiper = new Swiper(".swiper-testimoni", {
        // slidesPerView: 3,
        // spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        }
    });

    var swiper = new Swiper(".cardSwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 5,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
});
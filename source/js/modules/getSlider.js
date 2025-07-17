'use strict';

(function () {
    var sliderContainers = document.querySelectorAll('.slider');

    var getBlockSlider = function (slider) {
        if (slider) {
            var container = slider.querySelector('.swiper-container');
            var slides = slider.querySelectorAll('.swiper-slide');
            var prev = slider.querySelector('.js-btn-next');
            var next = slider.querySelector('.js-btn-prev');
            var pagination = slider.querySelector('.swiper-pagination');
            var loop = true;
            var allowTouchMove = true;
            var direction = 'horizontal';
            var autoHeight = true;
            var breakpoints = {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 7,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
            };
            if (slides.length >= 2) {
                return new window.Swiper(container, {
                    direction: direction,
                    allowTouchMove: allowTouchMove,
                    loop: loop,
                    autoHeight: autoHeight,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    // updateOnWindowResize: false,
                    pagination: {
                        el: pagination,
                        clickable: true,
                    },
                    breakpoints: breakpoints,
                });
            }
        }
    };

    sliderContainers.forEach(function (currentValue) {
        getBlockSlider(currentValue);
    });
})();

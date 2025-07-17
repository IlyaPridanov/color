'use strict';

(function () {
  fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors')
  // fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors?new=true')
  // сначала дешевые
  // fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors?sortBy=price&order=asc')
  // сначала дорогие
  // fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors?sortBy=price&order=desc')
  // Например, новинки + сортировка по убыванию цены:
  // fetch('https://6879163463f24f1fdca0cc4f.mockapi.io/colors?new=true&sortBy=price&order=desc')
  .then(response => response.json())
  .then(products => {
    console.log(products); // Выведет массив товаров
    const container = document.getElementById('products');

    products.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Цена: ${product.price} руб.</p>
        </div>
      `;
    });
  });

    const sliderContainers = document.querySelectorAll('.slider');

    const getBlockSlider = function (slider) {
        if (slider) {
            const container = slider.querySelector('.swiper-container');
            const slides = slider.querySelectorAll('.swiper-slide');
            const prev = slider.querySelector('.js-btn-next');
            const next = slider.querySelector('.js-btn-prev');
            const pagination = slider.querySelector('.swiper-pagination');
            const loop = true;
            const allowTouchMove = true;
            const direction = 'horizontal';
            const autoHeight = true;
            const breakpoints = {
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

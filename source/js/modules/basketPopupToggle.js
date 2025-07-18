(function () {
  const basket = document.querySelector('.basket');
  const basketButton = document.querySelector('.header__basket-btn');
  const basketClose = document.querySelector('.basket__close');

  basket.addEventListener('click', function (evt) {
    if (evt.target === this) {
      basket.classList.remove('active');
    }
  })

  basketClose.addEventListener('click', function () {
    basket.classList.remove('active');
  })

  basketButton.addEventListener('click', function () {
    basket.classList.add('active');
  })
})();

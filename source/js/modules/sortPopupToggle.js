(function () {
  const sortPopup = document.querySelector('.sort__popup');
  const sortButton = document.querySelector('.sort__button');

  sortPopup.addEventListener('click', function (evt) {
    if (evt.target === this) {
      sortPopup.classList.remove('active');
    }
  })

  sortButton.addEventListener('click', function (evt) {
    sortPopup.classList.add('active');
  })
})();

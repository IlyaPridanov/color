(function () {
  const filterPopup = document.querySelector('.filter__popup');
  const filterCaption = document.querySelector('.filter__caption');

  filterPopup.addEventListener('click', function (evt) {
    if (evt.target === this) {
      filterPopup.classList.remove('active');
    }
  })

  filterCaption.addEventListener('click', function (evt) {
    filterPopup.classList.add('active');
  })
})();

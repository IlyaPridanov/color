$(document).ready(function() {
  const filterFormCaptionBtn = $('.filter-form__caption-btn');
  const filterItemCaptionBtn = $('.filter-item__caption-btn');
  const filterListCaptionBtn = $('button.filter-list__caption');
  const filterFormList = $('.filter-form__list');

  const mobilefilterForm = $('.side-catalog__bar');
  const mobilefilterOpenBtn = $('.top-filter__open');
  const body = $('body');
  const mobilefilterCloseBtn = $('.filter-form__close-btn');

  if (window.matchMedia('(max-width: 900px)').matches) {
    mobilefilterOpenBtn.on('click' , function () {
      mobilefilterForm.addClass('active');
      body.css('overflow-y','hidden');
    });
    mobilefilterCloseBtn.on('click' , function () {
      mobilefilterForm.removeClass('active');
      body.css('overflow-y','initial');
    });
  }

  if (window.matchMedia('(min-width: 901px)').matches) {
    filterFormCaptionBtn.on('click' , function () {
      $(this).toggleClass('active');
      filterFormList.slideToggle();
    });
  }

  filterItemCaptionBtn.on('click' , function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });

  filterListCaptionBtn.on('click' , function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});

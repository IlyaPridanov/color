'use strict';

(function () {
  const toggleNav = function () {
    if (window.matchMedia('(max-width:576px)').matches) {
      const navLink = jQuery('.nav__link.has-list');

      navLink.on('click', function (evt) {
        evt.preventDefault();
        jQuery(this).toggleClass('active');
        jQuery(this).next().slideToggle();
      })
    }
  };

  toggleNav();
})();


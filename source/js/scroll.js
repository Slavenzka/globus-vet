'use strict';

(function () {
  let scrollBtn = document.querySelector('.scroll__link');

  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 250) {
      scrollBtn.classList.add('scroll__link--active');
    }
    if (document.documentElement.scrollTop < 250) {
      scrollBtn.classList.remove('scroll__link--active');
    }
  });

  scrollBtn.addEventListener('click', function (evt) {
    document.documentElement.style.scrollBehavior = 'smooth';
  });
})();

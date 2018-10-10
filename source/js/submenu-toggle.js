'use strict';

(function () {
  let catalogItem = document.querySelector('.nav__item--catalogue');
  let submenu = document.querySelector('.submenu');

  submenu.style.display = 'none';

  document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('nav__item--catalogue') ||
     evt.target.classList.contains('submenu__list') ||
     (evt.target.classList.contains('submenu__link'))) {
      submenu.style.display = 'block';
    } else {
      submenu.style.display = 'none';
    }
  });
})();

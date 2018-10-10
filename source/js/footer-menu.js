'use strict';

(function () {
  let footer = document.querySelector('.footer-main');

  function disableSubmenue () {
    let submenues = footer.querySelectorAll('.footer__list');
    submenues.forEach(item => item.style.display = 'none');
  }

  if (window.innerWidth < 768) {
    disableSubmenue();
  }

  footer.addEventListener('click', function (evt) {
    if (window.innerWidth < 768) {
      disableSubmenue();
      if (evt.target.classList.contains('footer__title')) {
        let submenu = evt.target.parentNode.querySelector('.footer__list');
        submenu.style.display = (submenu.style.display === 'none') ?
          (submenu.style.display = 'block') :
          (submenu.style.display = 'none');
      }
    }
  });
})();

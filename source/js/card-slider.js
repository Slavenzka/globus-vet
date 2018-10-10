'use strict';

(function () {
  let slider = document.querySelector('.images');

  let sliderControl = {
    image: slider.querySelector('.images__img'),
    buttons: slider.querySelectorAll('.images__item'),

    removeSelection: function () {
      this.buttons.forEach(item => {
        if (item.classList.contains('images__item--selected')) {
          item.classList.remove('images__item--selected');
        }
      });
    },

    switchImage: function (selectedPreview) {
      if (selectedPreview.classList.contains('images__preview')) {
        this.image.src = selectedPreview.src;
      } else {
        this.image.src = selectedPreview.querySelector('.images__preview').src;
      }
    }
  }

  sliderControl.buttons.forEach(item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      sliderControl.switchImage(evt.target);
      sliderControl.removeSelection();
      evt.currentTarget.classList.add('images__item--selected');
    });
  });
})();

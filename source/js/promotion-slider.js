'use strict';

(function () {
  let promotion = document.querySelector('.promotion');
  let controlList = promotion.querySelector('.control__list');
  let buttons = controlList.querySelectorAll('.control__input');
  let largeList = promotion.querySelector('.large__list');
  let smallList = promotion.querySelector('.small__list');
  let nextSlide;

  let sliderOperation = {
    hideAllVisibleSlides: function () {
      largeList.querySelector('.slider__shown').classList.remove('slider__shown');
      smallList.querySelector('.slider__shown').classList.remove('slider__shown');
    },

    showAllSelectedSlides: function (selectedNumber) {
      this.hideAllVisibleSlides();
      largeList.children[selectedNumber - 1].classList.add('slider__shown');
      smallList.children[selectedNumber - 1].classList.add('slider__shown');
    },

    findSelected: function () {
      let selected;
      buttons.forEach(item => {
        if (item.checked) {
          selected = item.value - 1;
        }
      });
      return +selected;
    },
    checkNextInput: function () {
      let selection = this.findSelected();
      if (selection === buttons.length - 1) {
        buttons[0].checked = 'true';
      } else {
        buttons[selection + 1].checked = 'true';
      }
    }
  }

let autoSlide = setInterval(function () {
  nextSlide = (sliderOperation.findSelected() === buttons.length - 1) ? 0 : (sliderOperation.findSelected() + 1);
  sliderOperation.showAllSelectedSlides(nextSlide + 1);
  sliderOperation.checkNextInput();
}, 5000);

  buttons.forEach(item => {
    item.addEventListener('click', function (evt) {
      clearInterval(autoSlide);
      sliderOperation.showAllSelectedSlides(evt.target.value);
    });
  });
})();

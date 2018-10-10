'use strict';

(function () {
  let reviews = document.querySelector('.reviews');
  let reviewsSlider = reviews.querySelector('.reviews__list');
  let reviewsIndicators = reviews.querySelector('.reviews__indicators');
  let buttons = reviewsIndicators.querySelectorAll('.reviews__input');
  let buttonPrev = reviews.querySelector('.reviews__control--prev');
  let buttonNext = reviews.querySelector('.reviews__control--next');


  let sliderOperation = {
    classPrev: 'reviews__item--previous',
    classActive: 'reviews__item--selected',
    classNext: 'reviews__item--next',

    findSelected: function () {
      let selected;
      buttons.forEach(item => {
        if (item.checked) {
          selected = item.value - 1;
        }
      });
      return +selected;
    },

    checkSelection: function (selectedNumber) {
      if (selectedNumber < 0) {
        selectedNumber = buttons.length - 1;
      }
      if (selectedNumber === buttons.length) {
        selectedNumber = 0;
      }
      return selectedNumber;
    },

    switchRadio: function (selectedNumber) {
      selectedNumber = sliderOperation.checkSelection(selectedNumber);
      buttons[selectedNumber].checked = 'true';
    },

    clearClasses: function (listItem) {
      if (listItem.classList.contains(this.classPrev)) {
        listItem.classList.remove(this.classPrev);
      }
      if (listItem.classList.contains(this.classActive)) {
        listItem.classList.remove(this.classActive);
      }
      if (listItem.classList.contains(this.classNext)) {
        listItem.classList.remove(this.classNext);
      }
    },

    showSelectedSlide: function (selectedNumber) {
      selectedNumber = sliderOperation.checkSelection(selectedNumber);
      for (let i = 0; i < reviewsSlider.children.length; i++) {
        if (selectedNumber > i) {
          sliderOperation.clearClasses(reviewsSlider.children[i]);
          reviewsSlider.children[i].classList.add('reviews__item--previous');
        }
        if (selectedNumber === i) {
          sliderOperation.clearClasses(reviewsSlider.children[i]);
          reviewsSlider.children[i].classList.add('reviews__item--selected');
        }
        if (selectedNumber < i) {
          sliderOperation.clearClasses(reviewsSlider.children[i]);
          reviewsSlider.children[i].classList.add('reviews__item--next');
        }
      }
    }
  }

  buttonPrev.addEventListener('click', function (evt) {
    let number = sliderOperation.findSelected() - 1;
    sliderOperation.switchRadio(number);
    sliderOperation.showSelectedSlide(number);
  });

  buttonNext.addEventListener('click', function (evt) {
    let number = sliderOperation.findSelected() + 1;
    sliderOperation.switchRadio(number);
    sliderOperation.showSelectedSlide(number);
  });

  buttons.forEach(item => {
    item.addEventListener('click', function (evt) {
      sliderOperation.showSelectedSlide(evt.target.value - 1);
    });
  });
})();

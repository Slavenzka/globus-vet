'use strict';

(function () {
  let events = document.querySelector('.events');

  if (events) {
    let slider = events.querySelector('.events__list');
    let cards = slider.querySelectorAll('.events__item');
    let buttonPrev = events.querySelector('.events__button--prev');
    let buttonNext = events.querySelector('.events__button--next');

    let sliderOperation = {
      initializeSlider: function () {
        cards[0].classList.add('events__item--selected');
      },

      findActiveSlide: function () {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].classList.contains('events__item--selected')) {
            return i;
          }
        }
      },

      findNextSlide: function (number) {
        if (number === cards.length) {
          return 0;
        }
        return number;
      },

      findPrevSlide: function (number) {
        if (number < 0) {
          return cards.length - 1;
        }
        return number;
      },

      switchSlide: function (nextNumber) {
        cards.forEach(item => {
          if (item.classList.contains('events__item--selected')) {
            item.classList.remove('events__item--selected');
          }
        });
        cards[nextNumber].classList.add('events__item--selected');
      }
    }

    sliderOperation.initializeSlider();

    buttonPrev.addEventListener('click', function () {
      let active = sliderOperation.findActiveSlide();
      let prevNumber = sliderOperation.findPrevSlide(active - 1);

      sliderOperation.switchSlide(prevNumber);
    });

    buttonNext.addEventListener('click', function () {
      let active = sliderOperation.findActiveSlide();
      let nextNumber = sliderOperation.findNextSlide(active + 1);

      sliderOperation.switchSlide(nextNumber);
    });
  }
})();

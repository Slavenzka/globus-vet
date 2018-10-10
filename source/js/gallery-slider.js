'use strict';

(function () {
  let slider = document.querySelector('.gallery');
  let slideList = slider.querySelector('.gallery__list');
  let slideCollection = slider.querySelectorAll('.gallery__item');
  let btnPrev = slider.querySelector('.gallery__btn--prev');
  let btnNext = slider.querySelector('.gallery__btn--next');
  let imgLarge = slider.querySelector('.gallery__image-large');
  let activeClass = 'gallery__item--selected';
  let counter = slider.querySelector('.gallery__counter > span');

  let sliderOperations = {
    findActiveSlide: function () {
      for (let i = 0; i < slideCollection.length; i++) {
        if (slideCollection[i].classList.contains(activeClass)) {
          return i;
        }
      }
    },

    showActiveSlide: function () {
      let active = this.findActiveSlide();
      let imagePath = slideCollection[active].querySelector('img').src;
      imgLarge.src = imagePath;
    },

    disableButtonForward: function() {
      let active = this.findActiveSlide();

      if (btnNext.classList.contains('gallery__btn--blocked')) {
        btnNext.classList.remove('gallery__btn--blocked');
      }

      if (btnPrev.classList.contains('gallery__btn--blocked')) {
        btnPrev.classList.remove('gallery__btn--blocked');
      }

      if (active === slideCollection.length - 2) {
        btnNext.classList.add('gallery__btn--blocked');
      }
    },

    disableButtonBack: function () {
      let active = this.findActiveSlide();

      if (btnNext.classList.contains('gallery__btn--blocked')) {
        btnNext.classList.remove('gallery__btn--blocked');
      }

      if (btnPrev.classList.contains('gallery__btn--blocked')) {
        btnPrev.classList.remove('gallery__btn--blocked');
      }

      if (active - 1 <= 0) {
        btnPrev.classList.add('gallery__btn--blocked');
      }
    },

    pickNextActive: function (next) {
      let active = this.findActiveSlide();
      slideCollection[active].classList.remove(activeClass);
      slideCollection[next].classList.add(activeClass);
      this.showActiveSlide();
    },

    scrollForward: function () {
      let active = this.findActiveSlide();
      let step = -644;
      if (active % 4 === 0) {
        let value = step * Math.floor(active / 4);
        slideList.style.transform = 'translateX(' + value + 'px)';
      }
    },

    scrollBack: function () {
      let active = this.findActiveSlide();
      let step = -644;
      if ((active % 3 === 0) || (active % 7 === 0)) {
        let value = 0 + step * Math.floor(active / 3 - 1);
        slideList.style.transform = 'translateX(' + value + 'px)';
      }
    },

    showSlideNumber: function () {
      let active = this.findActiveSlide();
      active++;
      if (active < 10) {
        counter.textContent = '0' + active;
      } else {
        counter.textContent = active;
      }
    }
  }

  sliderOperations.showActiveSlide();
  sliderOperations.disableButtonBack();

  btnPrev.addEventListener('click', function () {
    let active = sliderOperations.findActiveSlide();
    sliderOperations.disableButtonBack();
    sliderOperations.pickNextActive(active - 1);
    if (active - 1 !== 0) {
      sliderOperations.scrollBack();
    }
    sliderOperations.showSlideNumber();
  });

  btnNext.addEventListener('click', function () {
    let active = sliderOperations.findActiveSlide();
    sliderOperations.disableButtonForward();
    sliderOperations.pickNextActive(active + 1);
    sliderOperations.scrollForward();
    sliderOperations.showSlideNumber();
  });
})();

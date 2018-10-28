'use strict';

$(document).ready(function(){
  $('.reviews__list').slick({
    infinite: true
  });
});

$(document).ready(function(){
  $('.small__list').slick({
    infinite: true,
    fade: true,
    arrows: false,
  });
  $('.large__list').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    arrows: false,
    dots: true,
    asNavFor: '.small__list'
  });
});

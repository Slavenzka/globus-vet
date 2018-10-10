'use strict';

(function () {
  var navMain = document.querySelector(".header-main__nav");
  var navToggle = document.querySelector(".nav__toggle");
  let submenu = document.querySelector('.submenu');

  navMain.classList.remove("header-main__nav--nojs");

    navToggle.addEventListener("click", function() {
      if (navMain.classList.contains("header-main__nav--closed")) {
        navMain.classList.remove("header-main__nav--closed");
        // submenu.style.display = 'none';
        navMain.classList.add("header-main__nav--opened");
      } else {
        navMain.classList.add("header-main__nav--closed");
        navMain.classList.remove("header-main__nav--opened");
      }
    });
})();

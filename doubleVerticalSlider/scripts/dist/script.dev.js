"use strict";

var sliderContainer = document.querySelector('.slider-container');
var slideRight = document.querySelector('.right-slide');
var slideLeft = document.querySelector('.left-slide');
var upButton = document.querySelector('.up-button');
var downButton = document.querySelector('.down-button');
var slidesLength = slideRight.querySelectorAll('div').length;
var activeSlideIndex = 0; // Moves the whole div up (number of children) * the full viewport height
// so the last child div is visible

slideLeft.style.top = "-".concat((slidesLength - 1) * 100, "vh");
upButton.addEventListener('click', function () {
  return changeSlide('up');
});
downButton.addEventListener('click', function () {
  return changeSlide('down');
});

var changeSlide = function changeSlide(direction) {
  var sliderHeight = sliderContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;

    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = "translateY(-".concat(activeSlideIndex * sliderHeight, "px)");
  slideLeft.style.transform = "translateY(".concat(activeSlideIndex * sliderHeight, "px)");
};
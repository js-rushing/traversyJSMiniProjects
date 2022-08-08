"use strict";

var body = document.body;
var slides = document.querySelectorAll('.slide');
var leftBtn = document.querySelector('#left');
var rightBtn = document.querySelector('#right');
var activeSlide = 0;
setBgToBody();
leftBtn.addEventListener('click', function () {
  activeSlide > 0 ? activeSlide-- : activeSlide = slides.length - 1;
  setActiveSlide();
  setBgToBody();
});
rightBtn.addEventListener('click', function () {
  activeSlide < slides.length - 1 ? activeSlide++ : activeSlide = 0;
  setActiveSlide();
  setBgToBody();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach(function (slide) {
    return slide.classList.remove('active');
  });
  slides[activeSlide].classList.add('active');
}
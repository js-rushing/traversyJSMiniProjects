"use strict";

var progress = document.querySelector('#progress');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var circles = document.querySelectorAll('.circle');
var currentActive = 1;
next.addEventListener('click', function () {
  currentActive < circles.length && currentActive++;
  update();
});
prev.addEventListener('click', function () {
  currentActive > 1 && currentActive--;
  update();
});

function update() {
  circles.forEach(function (circle, index) {
    index < currentActive ? circle.classList.add('active') : circle.classList.remove('active');
  });
  var actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
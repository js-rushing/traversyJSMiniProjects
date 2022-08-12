"use strict";

var loveMe = document.querySelector('.loveMe');
var times = document.querySelector('#times');
var clickTime = 0;
var timesClicked = 0;
loveMe.addEventListener('click', function (e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else if (new Date().getTime() - clickTime < 800) {
    createHeart(e);
    clickTime = 0;
    timesClicked++;
    times.innerText = "".concat(timesClicked);
  } else {
    clickTime = new Date().getTime();
  }
});

var createHeart = function createHeart(e) {
  var heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  var x = e.clientX;
  var y = e.clientY;
  var offsetLeft = e.target.offsetLeft;
  var offsetTop = e.target.offsetTop;
  var xInside = x - offsetLeft;
  var yInside = y - offsetTop;
  heart.style.top = "".concat(yInside, "px");
  heart.style.left = "".concat(xInside, "px");
  loveMe.appendChild(heart);
  setTimeout(function () {
    return heart.remove();
  }, 1000);
};
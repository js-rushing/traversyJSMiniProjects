"use strict";

var imageContainer = document.querySelector('.image-container');
var images = document.querySelectorAll('img');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var pause = document.querySelector('.pause');
var imageWidth = 500;
var slideTime = 3000;
var currentTranslate = 0;
var action = setInterval(incrementImages, slideTime);

function incrementImages() {
  if (currentTranslate === -((images.length - 1) * imageWidth)) {
    currentTranslate = 0;
  } else {
    currentTranslate -= imageWidth;
  }

  imageContainer.style.transform = "translateX(".concat(currentTranslate, "px)");
  clearInterval(action);
  action = setInterval(incrementImages, slideTime);
}

function decrementImages() {
  if (currentTranslate === 0) {
    currentTranslate = -((images.length - 1) * imageWidth);
  } else {
    currentTranslate += imageWidth;
  }

  imageContainer.style.transform = "translateX(".concat(currentTranslate, "px)");
  clearInterval(action);
  action = setInterval(incrementImages, slideTime);
}

next.addEventListener('click', incrementImages);
prev.addEventListener('click', decrementImages);
pause.addEventListener('click', function () {
  var symbol = pause.firstChild.classList[1].split('-')[1];

  if (symbol === 'pause') {
    pause.innerHTML = "<i class=\"fas fa-play\"></i>";
    clearInterval(action);
  } else {
    pause.innerHTML = "<i class=\"fas fa-pause\"></i>";
    action = setInterval(incrementImages, slideTime);
  }
});
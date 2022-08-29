"use strict";

var container = document.querySelector('.container');
var unsplashURL = 'https://source.unsplash.com/random/';
var rows = 5;

for (var i = 0; i < rows * 3; i++) {
  var img = document.createElement('img');
  img.src = "".concat(unsplashURL, "/").concat(getRandomSize());
  container.appendChild(img);
}

function getRandomSize() {
  return "".concat(getRandomNumber(), "x").concat(getRandomNumber());
}

function getRandomNumber() {
  return Math.floor(Math.random() * 30) + 300;
}
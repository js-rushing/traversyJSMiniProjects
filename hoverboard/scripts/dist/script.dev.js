"use strict";

var container = document.querySelector('#container');
var colors = ['#EF798A', '#F7A9A8', '#7D82B8', '#613F75', '#E5C3D1'];
var SQUARES = 1008;

var _loop = function _loop(i) {
  var square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', function () {
    setColor(square);
  });
  square.addEventListener('mouseout', function () {
    return removeColor(square);
  });
  container.appendChild(square);
};

for (var i = 0; i < SQUARES; i++) {
  _loop(i);
}

function setColor(element) {
  var color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = "0 0 2px ".concat(color, ", 0 0 10px ").concat(color);
}

function removeColor(element) {
  element.style.backgroundColor = '#1D1D1D';
  element.style.boxShadow = 'none';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
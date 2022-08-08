"use strict";

var labels = document.querySelectorAll('.form-control label');
labels.forEach(function (label) {
  label.innerHTML = label.innerText.split('').map(function (letter, index) {
    return "<span style=\"transition-delay:".concat(index * 30, "ms\">").concat(letter, "</span>");
  }).join('');
});
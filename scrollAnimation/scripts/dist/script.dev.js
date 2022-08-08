"use strict";

var boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  var triggerBottom = window.innerHeight * 0.8;
  boxes.forEach(function (box) {
    var boxTop = box.getBoundingClientRect().top;
    boxTop < triggerBottom ? box.classList.add('show') : box.classList.remove('show');
  });
}
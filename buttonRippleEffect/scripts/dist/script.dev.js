"use strict";

var buttons = document.querySelectorAll('.ripple');
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var buttonTop = e.target.offsetTop;
    var buttonLeft = e.target.offsetLeft;
    var xInside = x - buttonLeft;
    var yInside = y - buttonTop;
    var circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px'; // this won't work with arrow function

    this.appendChild(circle); // remove circle span from dom

    setTimeout(function () {
      return circle.remove();
    }, 500);
  });
});
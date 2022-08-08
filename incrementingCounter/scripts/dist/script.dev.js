"use strict";

var counters = document.querySelectorAll('.counter');
counters.forEach(function (counter) {
  counter.innerText = '0';

  var updateCounter = function updateCounter() {
    var target = +counter.getAttribute('data-target');
    var c = +counter.innerText;
    var increment = target / 200;

    if (c < target) {
      counter.innerText = "".concat(Math.ceil(c + increment));
      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
});
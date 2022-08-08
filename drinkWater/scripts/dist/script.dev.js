"use strict";

var smallCups = document.querySelectorAll('.cup-small');
var liters = document.querySelector('#liters');
var percentage = document.querySelector('#percentage');
var remaining = document.querySelector('#remaining');
updateBigCup();
smallCups.forEach(function (cup, index) {
  cup.addEventListener('click', function () {
    return highlightCups(index);
  });
});

function highlightCups(index) {
  if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
    index--;
  }

  smallCups.forEach(function (cup, index2) {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
}

function updateBigCup() {
  var fullCups = document.querySelectorAll('.cup-small.full').length;
  var totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = "".concat(fullCups / totalCups * 330, "px");
    percentage.innerText = "".concat(fullCups / totalCups * 100, "%");
  }

  if (fullCups === totalCups) {
    remaining.style.visibility = 'hidden';
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = 'visible';
    liters.innerText = "".concat(2 - 250 * fullCups / 1000, " L");
    remaining.style.height = 0;
  }
}
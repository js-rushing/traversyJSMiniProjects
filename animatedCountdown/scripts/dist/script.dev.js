"use strict";

var nums = document.querySelectorAll('.nums span');
var counter = document.querySelector('.counter');
var finalMessage = document.querySelector('.final');
var replay = document.querySelector('#replay');
runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');
  nums.forEach(function (num) {
    num.classList.value = '';
  });
  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach(function (num, index) {
    var nextToLast = nums.length - 1;
    num.addEventListener('animationend', function (e) {
      if (e.animationName === 'goIn') {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', function () {
  resetDOM();
  runAnimation();
});
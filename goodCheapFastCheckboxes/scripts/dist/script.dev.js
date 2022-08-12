"use strict";

var toggles = document.querySelectorAll('.toggle');
var good = document.querySelector('#good');
var cheap = document.querySelector('#cheap');
var fast = document.querySelector('#fast');
toggles.forEach(function (toggle) {
  return toggle.addEventListener('change', function (e) {
    return doTheTrick(e.target);
  });
});

function doTheTrick(checkedInput) {
  if (good.checked && cheap.checked && fast.checked) {
    good === checkedInput && (fast.checked = false);
    cheap === checkedInput && (good.checked = false);
    fast === checkedInput && (cheap.checked = false);
  }
}
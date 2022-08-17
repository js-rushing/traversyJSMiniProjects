"use strict";

var range = document.querySelector('#range');
range.addEventListener('input', function (e) {
  var rangeVal = +e.target.value;
  var label = e.target.nextElementSibling;
  var rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
  var labelWidth = getComputedStyle(label).getPropertyValue('width');
  var rangeWidthNum = +rangeWidth.substring(0, rangeWidth.length - 2);
  var labelWidthNum = +labelWidth.substring(0, labelWidth.length - 2);
  var max = +e.target.max;
  var min = +e.target.min;
  var leftBoundary = rangeVal * (rangeWidthNum / max) - labelWidthNum / 2 + scale(rangeVal, min, max, 10, -10);
  label.innerText = rangeVal; //   label.style.left = `${rangeWidthNum * (rangeVal / max) - (labelWidthNum / 2)}px`

  label.style.left = "".concat(leftBoundary, "px");
});
/*
 *   https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 */

var scale = function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
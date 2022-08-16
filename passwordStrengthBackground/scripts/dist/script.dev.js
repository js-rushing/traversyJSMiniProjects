"use strict";

var background = document.querySelector('#background');
var password = document.querySelector('#password');
password.addEventListener('input', function () {
  var length = password.value.length;
  var blurVal = 20 - 20 * (length / 20);
  background.style.filter = "blur(".concat(blurVal >= 0 ? blurVal : 0, "px)");
});
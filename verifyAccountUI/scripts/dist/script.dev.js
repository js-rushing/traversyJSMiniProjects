"use strict";

var codes = document.querySelectorAll('.code');
codes[0].focus();
codes.forEach(function (code, idx) {
  code.addEventListener('keydown', function (e) {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      var nextIdx = idx + 1;
      setTimeout(function () {
        nextIdx < codes.length && codes[nextIdx].focus();
      }, 10);
    } else if (e.key === 'Backspace') {
      setTimeout(function () {
        var prevIdx = idx - 1;
        prevIdx >= 0 && codes[prevIdx].focus();
      }, 10);
    }
  });
});
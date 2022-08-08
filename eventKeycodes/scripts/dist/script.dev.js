"use strict";

var insert = document.querySelector('#insert');
window.addEventListener('keydown', function (e) {
  insert.innerHTML = "<div class=\"key\">\n    ".concat(e.key === ' ' ? 'Space' : e.key, "\n    <small>event.key</small>\n  </div>\n  <div class=\"key\">\n    ").concat(e.keyCode, "\n    <small>event.keyCode</small>\n  </div>\n  <div class=\"key\">\n    ").concat(e.code, "\n    <small>event.code</small>\n  </div>");
});
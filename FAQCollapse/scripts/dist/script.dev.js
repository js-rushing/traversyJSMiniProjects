"use strict";

var btns = document.querySelectorAll('.faq-toggle');
btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.parentNode.classList.toggle('active');
  });
});
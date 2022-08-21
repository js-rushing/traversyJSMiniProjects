"use strict";

var openBtn = document.querySelector('.open-btn');
var closeBtn = document.querySelector('.close-btn');
var nav = document.querySelectorAll('.nav');
openBtn.addEventListener('click', function () {
  nav.forEach(function (nav_el) {
    return nav_el.classList.add('visible');
  });
});
closeBtn.addEventListener('click', function () {
  nav.forEach(function (nav_el) {
    return nav_el.classList.remove('visible');
  });
});
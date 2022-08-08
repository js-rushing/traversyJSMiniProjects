"use strict";

var toggle = document.querySelector('#toggle');
var nav = document.querySelector('#nav');
toggle.addEventListener('click', function () {
  return nav.classList.toggle('active');
});
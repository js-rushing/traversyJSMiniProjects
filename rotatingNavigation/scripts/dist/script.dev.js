"use strict";

var open = document.querySelector('#open');
var close = document.querySelector('#close');
var container = document.querySelector('.container');
open.addEventListener('click', function () {
  return container.classList.add('show-nav');
});
close.addEventListener('click', function () {
  return container.classList.remove('show-nav');
});
"use strict";

var loadText = document.querySelector('.loading-text');
var bg = document.querySelector('.bg');
var load = 0;

var _int = setInterval(blurring, 30);

function blurring() {
  load++;
  load > 99 && clearInterval(_int);
  loadText.innerText = "".concat(load, "%");
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = "blur(".concat((100 - load) / 5, "px)");
}
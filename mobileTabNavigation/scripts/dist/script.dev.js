"use strict";

var images = document.querySelectorAll('.phone img');
var links = document.querySelectorAll('li');
links.forEach(function (link, idx) {
  link.addEventListener('click', function () {
    links.forEach(function (link) {
      link.classList.remove('active');
    });
    link.classList.add('active');
    images.forEach(function (image) {
      image.classList.remove('show');
    });
    images[idx].classList.add('show');
  });
});
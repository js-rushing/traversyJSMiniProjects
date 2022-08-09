"use strict";

var header = document.querySelector('#header');
var title = document.querySelector('#title');
var excerpt = document.querySelector('#excerpt');
var profile_img = document.querySelector('#profile_img');
var nameEl = document.querySelector('#name');
var date = document.querySelector('#date');
var animated_bgs = document.querySelectorAll('.animated-bg');
var animated_bg_texts = document.querySelectorAll('.animated-bg-text');
setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&q=80" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vero!';
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  nameEl.innerHTML = 'John Doe';
  date.innerHTML = 'Oct 08, 2022';
  animated_bgs.forEach(function (bg) {
    return bg.classList.remove('animated-bg');
  });
  animated_bg_texts.forEach(function (text) {
    return text.classList.remove('animated-bg-text');
  });
}
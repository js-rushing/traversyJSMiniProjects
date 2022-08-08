"use strict";

var tagsEl = document.querySelector('#tags');
var textarea = document.querySelector('textarea');
textarea.focus();
textarea.addEventListener('keyup', function (e) {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(function () {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  // The filter, trim, map, trim removes whitespace
  var tags = input.split(',').filter(function (tag) {
    return tag.trim() !== '';
  }).map(function (tag) {
    return tag.trim();
  });
  tagsEl.innerHTML = '';
  tags.forEach(function (tag) {
    var tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  var rounds = 30;
  var interval = setInterval(function () {
    var randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(function () {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(function () {
    clearInterval(interval);
    setTimeout(function () {
      var randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, rounds * 100);
}

function pickRandomTag() {
  var tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
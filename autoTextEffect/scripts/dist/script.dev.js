"use strict";

var textEl = document.querySelector('#text');
var speedEl = document.querySelector('#speed');
var text = 'The Text Can Be Whatever You Want';
var idx = 1;
var speed = 300 / speedEl.value;
writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  idx > text.length && (idx = 1);
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', function (e) {
  return speed = 300 / e.target.value;
});
"use strict";

var screens = document.querySelectorAll('.screen');
var choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
var start_btn = document.querySelector('#start-btn');
var game_container = document.querySelector('#game-container');
var timeEl = document.querySelector('#time');
var scoreEl = document.querySelector('#score');
var seconds = 0;
var score = 0;
var selected_insect = {};
start_btn.addEventListener('click', function () {
  return screens[0].classList.add('up');
});
choose_insect_btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var img = btn.querySelector('img');
    var src = img.src;
    var alt = img.alt;
    selected_insect = {
      src: src,
      alt: alt
    };
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  var m = Math.floor(seconds / 60);
  var s = seconds % 60;
  m = m < 10 ? "0".concat(m) : m;
  s = s < 10 ? "0".concat(s) : s;
  timeEl.innerHTML = "Time: ".concat(m, ":").concat(s);
  seconds++;
}

function createInsect() {
  var insect = document.createElement('div');
  insect.classList.add('insect');

  var _getRandomLocation = getRandomLocation(),
      x = _getRandomLocation.x,
      y = _getRandomLocation.y;

  insect.style.top = "".concat(y, "px");
  insect.style.left = "".concat(x, "px");
  var insect_img = document.createElement('img');
  insect_img.src = selected_insect.src;
  insect_img.alt = selected_insect.alt;
  insect_img.style.transform = "rotate(".concat(Math.random() * 360, "deg)");
  insect.addEventListener('click', catchInsect);
  insect.appendChild(insect_img);
  screens[2].appendChild(insect);
}

function getRandomLocation() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var x = Math.random() * (width - 200) + 100;
  var y = Math.random() * (height - 200) + 100;
  return {
    x: x,
    y: y
  };
}

function catchInsect() {
  var _this = this;

  console.log(this);
  increaseScore();
  this.classList.add('caught');
  setTimeout(function () {
    return _this.remove();
  }, 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 2500);
}

function increaseScore() {
  score++;

  if (score > 29) {
    message.classList.add('visible');
  }

  scoreEl.innerHTML = "Score: ".concat(score);
}
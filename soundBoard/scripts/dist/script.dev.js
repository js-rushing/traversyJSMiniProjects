"use strict";

var sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
sounds.forEach(function (sound) {
  var btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', function () {
    stopAudio();
    document.querySelector("#".concat(sound)).play();
  });
  document.querySelector('#buttons').appendChild(btn);
});

function stopAudio() {
  sounds.forEach(function (sound) {
    var song = document.querySelector("#".concat(sound));
    song.pause();
    song.currentTime = 0;
  });
}
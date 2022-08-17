"use strict";

var ratings = document.querySelectorAll('.rating');
var sendBtn = document.querySelector('#send');
var panel = document.querySelector('#panel');
var selectedRating = 'Satisfied';
ratings.forEach(function (rating) {
  rating.addEventListener('click', function (e) {
    removeActive();
    rating.classList.add('active');
    selectedRating = rating.querySelector('small').innerText;
  });
});
sendBtn.addEventListener('click', function (e) {
  panel.innerHTML = "\n    <i class=\"fas fa-heart\"></i>\n    <strong>Thank You!</strong>\n    <br>\n    <strong>Feedback: ".concat(selectedRating, "</strong>\n    <p>We'll use your feedback to improve our customer support</p>\n    ");
});

function removeActive() {
  for (var i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
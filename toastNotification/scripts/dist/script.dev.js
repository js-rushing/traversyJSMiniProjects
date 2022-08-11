"use strict";

var button = document.querySelector('#button');
var toasts = document.querySelector('#toasts');
var messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];
button.addEventListener('click', createNotification);

function createNotification() {
  var toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerText = messages[Math.floor(Math.random() * messages.length)];
  toasts.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = 0;
    toast.style.transform = 'translateY(-1000%)';
  }, 4000);
  setTimeout(function () {
    toasts.removeChild(toast);
  }, 5000);
}
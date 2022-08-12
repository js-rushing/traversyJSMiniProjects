"use strict";

var addBtn = document.querySelector('#add');
var notes = JSON.parse(localStorage.getItem('notes'));
notes && notes.forEach(function (note) {
  return addNote(note);
});
addBtn.addEventListener('click', function () {
  return addNote();
});

function addNote() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = "\n    <div class=\"tools\">\n        <button class=\"edit\"><i class=\"fas fa-edit\"></i></button>\n        <button class=\"delete\"><i class=\"fas fa-trash-alt\"></i></button>\n    </div>\n    <div class=\"main ".concat(text ? '' : 'hidden', "\"></div>\n    <textarea class=\"").concat(text ? 'hidden' : '', "\"></textarea>\n    ");
  var editBtn = note.querySelector('.edit');
  var deleteBtn = note.querySelector('.delete');
  var main = note.querySelector('.main');
  var textArea = note.querySelector('textarea');
  textArea.value = text;
  /* marked() comes from the marked library 
  *   brought in with the script tag in the html
  *   This also allows the use of markdown in the note */

  main.innerHTML = marked.parse(text);
  editBtn.addEventListener('click', function () {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });
  deleteBtn.addEventListener('click', function () {
    note.remove();
    updateLS();
  });
  textArea.addEventListener('input', function (e) {
    var value = e.target.value;
    main.innerHTML = marked.parse(value);
    updateLS();
  });
  document.body.appendChild(note);
}

function updateLS() {
  var notesText = document.querySelectorAll('textarea');
  var notes = [];
  notesText.forEach(function (note) {
    notes.push(note.value);
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}
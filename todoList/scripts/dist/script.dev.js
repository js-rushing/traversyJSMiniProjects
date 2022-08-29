"use strict";

var form = document.querySelector('#form');
var input = document.querySelector('#input');
var todosUL = document.querySelector('#todos');
var todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(function (todo) {
    addTodo(todo);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  var todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    var todoEl = document.createElement('li');

    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;
    todoEl.addEventListener('click', function () {
      todoEl.classList.toggle('completed');
      updateLS();
    });
    todoEl.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosUL.appendChild(todoEl);
    input.value = '';
    updateLS();
  }
}

function updateLS() {
  var todoEls = document.querySelectorAll('li');
  var todos = [];
  todoEls.forEach(function (todoEl) {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}
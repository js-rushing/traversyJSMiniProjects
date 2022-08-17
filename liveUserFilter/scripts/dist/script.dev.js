"use strict";

var user_API = 'https://randomuser.me/api/';
var result = document.querySelector('#result');
var filter = document.querySelector('#filter');
var listItems = [];
getData();

function getData() {
  var res, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(user_API, "?results=50")));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context.sent;
          data.results.forEach(function (user) {
            var el = document.createElement('li');
            el.innerHTML = "\n        <img src=\"".concat(user.picture.thumbnail, "\" alt=\"Sara\">\n        <div class=\"user-info\">\n          <h4>").concat(user.name.first, " ").concat(user.name.last, "</h4>\n          <p>").concat(user.location.city, ", ").concat(user.location.country, "</p>\n        </div>\n        ");
            listItems.push(el);
          });
          result.innerHTML = '';
          listItems.forEach(function (item) {
            result.appendChild(item);
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

filter.addEventListener('input', function () {
  var search = filter.value.toLowerCase();
  listItems.forEach(function (item) {
    item.classList.add('hide');
  });
  listItems.forEach(function (item, idx) {
    var username = item.querySelector('h4').innerText.toLowerCase();
    var location = item.querySelector('p').innerText.toLowerCase();

    if (username.match(search) || location.match(search)) {
      item.classList.remove('hide');
    }
  });
});
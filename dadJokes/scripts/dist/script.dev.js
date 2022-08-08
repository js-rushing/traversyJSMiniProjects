"use strict";

var jokeEl = document.querySelector('#joke');
var jokeBtn = document.querySelector('#jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke(); // USING fetch
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }
//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
// USING ASYNC/AWAIT

function generateJoke() {
  var config, res, data;
  return regeneratorRuntime.async(function generateJoke$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          config = {
            headers: {
              Accept: 'application/json'
            }
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://icanhazdadjoke.com', config));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          jokeEl.innerHTML = data.joke;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}
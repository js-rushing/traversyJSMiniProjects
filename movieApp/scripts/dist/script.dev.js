"use strict";

var API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
var API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=".concat(API_KEY);
var IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
var SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=".concat(API_KEY, "&query=\"");
var main = document.querySelector('#main');
var form = document.querySelector('#form');
var search = document.querySelector('#search'); // Get initial movies

getMovies(API_URL);
/********** FUNCTIONS **********/

function getMovies(url) {
  var res, data;
  return regeneratorRuntime.async(function getMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context.sent;
          showMovies(data.results);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach(function (movie) {
    var title = movie.title,
        poster_path = movie.poster_path,
        vote_average = movie.vote_average,
        overview = movie.overview;
    var movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = "        \n        <img\n          src=\"".concat(IMG_PATH + poster_path, "\"\n          alt=\"").concat(title, "\"\n        />\n        <div class=\"movie-info\">\n          <h3>").concat(title, "</h3>\n          <span class=\"").concat(getClassByVoteAverage(vote_average), "\">").concat(vote_average, "</span>\n        </div>\n        <div class=\"overview\">\n          <h3>Overview</h3>\n          ").concat(overview, "\n        </div>      \n        ");
    main.appendChild(movieEl);
  });
}

function getClassByVoteAverage(vote_avg) {
  if (vote_avg >= 8) {
    return 'green';
  } else if (vote_avg >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
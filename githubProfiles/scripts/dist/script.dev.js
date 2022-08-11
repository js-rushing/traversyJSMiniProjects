"use strict";

var APIURL = 'https://api.github.com/users/';
var main = document.querySelector('#main');
var form = document.querySelector('#form');
var search = document.querySelector('#search');

function getUser(username) {
  var _ref, data;

  return regeneratorRuntime.async(function getUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios(APIURL + username));

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          createUserCard(data);
          getRepos(username);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          createErrorCard('No profile with this username');

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function getRepos(username) {
  var _ref2, data;

  return regeneratorRuntime.async(function getRepos$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios("".concat(APIURL).concat(username, "/repos?sort=created")));

        case 3:
          _ref2 = _context2.sent;
          data = _ref2.data;
          addReposToCard(data);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          createErrorCard('Problem fetching repos');

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function createUserCard(user) {
  var cardHTML = "<div class=\"card\">\n    <div>\n      <img\n        src=\"".concat(user.avatar_url, "\"\n        alt=\"\"\n        class=\"avatar\"\n      />\n    </div>\n    <div class=\"user-info\">\n      <h2>").concat(user.login, "</h2>\n      <p>\n        ").concat(user.bio ? user.bio : "User has no bio.", "\n      </p>\n\n      <ul>\n        <li>").concat(user.followers, "<strong>Followers</strong></li>\n        <li>").concat(user.following, "<strong>Following</strong></li>\n        <li>").concat(user.public_repos, "<strong>Repos</strong></li>\n      </ul>\n\n      <div id=\"repos\"></div>\n    </div>\n  </div>");
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  var reposEl = document.querySelector('#repos');
  repos.slice(0, 5).forEach(function (repo) {
    var repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

function createErrorCard(msg) {
  var cardHTML = "\n    <div class=\"card\">\n        <h1>".concat(msg, "</h1>\n    </div>\n    ");
  main.innerHTML = cardHTML;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var user = search.value;
  user && getUser(user);
  search.value = '';
});
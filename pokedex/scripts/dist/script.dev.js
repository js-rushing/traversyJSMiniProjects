"use strict";

var poke_container = document.querySelector('#poke-container');
var pokemon_count = 150;
var colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};

var fetchPokemons = function fetchPokemons() {
  var i;
  return regeneratorRuntime.async(function fetchPokemons$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 1;

        case 1:
          if (!(i <= pokemon_count)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(getPokemon(i));

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getPokemon = function getPokemon(id) {
  var url, res, data;
  return regeneratorRuntime.async(function getPokemon$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //   const API_URL =
          //     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          url = "https://pokeapi.co/api/v2/pokemon/".concat(id);
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context2.sent;
          createPokemonCard(data);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var createPokemonCard = function createPokemonCard(pokemon) {
  var pokemonEl = document.createElement('div');
  var pokeType = pokemon.types[0].type.name;
  var pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  var id = pokemon.id;
  var formattedId = id.toString().padStart(3, '0');
  pokemonEl.classList.add('pokemon');
  pokemonEl.style.backgroundColor = colors[pokeType];
  var pokemonInnerHTML = "\n        <div class=\"img-container\">\n          <img\n            src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(id, ".png\"\n          />\n        </div>\n        <div class=\"info\">\n          <span class=\"number\">#").concat(formattedId, "</span>\n          <h3 class=\"name\">").concat(pokeName, "</h3>\n          <small class=\"type\">Type: <span>").concat(pokeType, "</span></small>\n        </div>\n    ");
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
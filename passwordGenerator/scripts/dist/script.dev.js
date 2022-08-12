"use strict";

var resultEl = document.querySelector('.result');
var lengthEl = document.querySelector('#length');
var uppercaseEl = document.querySelector('#uppercase');
var lowercaseEl = document.querySelector('#lowercase');
var numberEl = document.querySelector('#numbers');
var symbolEl = document.querySelector('#symbols');
var generateBtn = document.querySelector('#generate');
var clipboardBtn = document.querySelector('#clipboard');
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
clipboardBtn.addEventListener('click', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(navigator.clipboard.writeText(resultEl.innerText));

        case 2:
          // Make this a toast message rather than alert
          alert('Password copied to clipboard');

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
generateBtn.addEventListener('click', function () {
  var length = lengthEl.value;
  var includeLower = lowercaseEl.checked;
  var includeUpper = uppercaseEl.checked;
  var includeNumbers = numberEl.checked;
  var includeSymbols = symbolEl.checked;
  resultEl.innerText = generatePassword(includeLower, includeUpper, includeNumbers, includeSymbols, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  var typesCount = lower + upper + number + symbol;
  var typesArr = [{
    lower: lower
  }, {
    upper: upper
  }, {
    number: number
  }, {
    symbol: symbol
  }].filter(function (option) {
    return Object.values(option)[0];
  });
  var generatedPassword = '';

  if (typesCount === 0) {
    return '';
  }

  var includedFunctions = typesArr.map(function (type) {
    return Object.keys(type)[0];
  });

  for (var i = 0; i < length; i++) {
    generatedPassword += randomFunc[includedFunctions[Math.floor(Math.random() * includedFunctions.length)]]();
  }

  return generatedPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
  return +Math.floor(Math.random() * 10);
}

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
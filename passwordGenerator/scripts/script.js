const resultEl = document.querySelector('.result')
const lengthEl = document.querySelector('#length')
const uppercaseEl = document.querySelector('#uppercase')
const lowercaseEl = document.querySelector('#lowercase')
const numberEl = document.querySelector('#numbers')
const symbolEl = document.querySelector('#symbols')
const generateBtn = document.querySelector('#generate')
const clipboardBtn = document.querySelector('#clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

clipboardBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(resultEl.innerText)

    // Make this a toast message rather than alert
    alert('Password copied to clipboard')
})

generateBtn.addEventListener('click', () => {
  const length = lengthEl.value
  const includeLower = lowercaseEl.checked
  const includeUpper = uppercaseEl.checked
  const includeNumbers = numberEl.checked
  const includeSymbols = symbolEl.checked

  resultEl.innerText = generatePassword(
    includeLower,
    includeUpper,
    includeNumbers,
    includeSymbols,
    length
  )
})

function generatePassword(lower, upper, number, symbol, length) {
  const typesCount = lower + upper + number + symbol
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (option) => Object.values(option)[0]
  )
  let generatedPassword = ''

  if (typesCount === 0) {
    return ''
  }

  let includedFunctions = typesArr.map((type) => Object.keys(type)[0])
  
  for (let i = 0; i < length; i++) {
    generatedPassword +=
      randomFunc[
        includedFunctions[Math.floor(Math.random() * includedFunctions.length)]
      ]()
  }

  return generatedPassword
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

function getRandomNumber() {
  return +Math.floor(Math.random() * 10)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}


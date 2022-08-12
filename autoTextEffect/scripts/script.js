const textEl = document.querySelector('#text')
const speedEl = document.querySelector('#speed')
const text = 'The Text Can Be Whatever You Want'

let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++

  idx > text.length && (idx = 1)

  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))

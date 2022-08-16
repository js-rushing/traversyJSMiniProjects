const background = document.querySelector('#background')
const password = document.querySelector('#password')

password.addEventListener('input', () => {
  let length = password.value.length
  let blurVal = 20 - 20 * (length / 20)

  background.style.filter = `blur(${blurVal >= 0 ? blurVal : 0}px)`
})

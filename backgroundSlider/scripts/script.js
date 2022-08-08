const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

let activeSlide = 0

setBgToBody()

leftBtn.addEventListener('click', () => {
  activeSlide > 0 ? activeSlide-- : (activeSlide = slides.length - 1)

  setActiveSlide()
  setBgToBody()
})

rightBtn.addEventListener('click', () => {
  activeSlide < slides.length - 1 ? activeSlide++ : (activeSlide = 0)

  setActiveSlide()
  setBgToBody()
})

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}

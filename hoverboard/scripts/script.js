const container = document.querySelector('#container')
const colors = ['#EF798A', '#F7A9A8', '#7D82B8', '#613F75', '#E5C3D1']
const SQUARES = 1008

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1D1D1D'
    element.style.boxShadow = 'none'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
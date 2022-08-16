const images = document.querySelectorAll('.phone img')
const links = document.querySelectorAll('li')

links.forEach((link, idx) => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('active')
        })
        link.classList.add('active')

        images.forEach(image => {
            image.classList.remove('show')
        })
        images[idx].classList.add('show')
    })
})
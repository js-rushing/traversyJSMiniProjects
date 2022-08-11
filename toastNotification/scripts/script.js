const button = document.querySelector('#button')
const toasts = document.querySelector('#toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

button.addEventListener('click', createNotification)

function createNotification() {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerText = messages[Math.floor(Math.random() * messages.length)]

    toasts.appendChild(toast)

    setTimeout(() => {
        toast.style.opacity = 0
        toast.style.transform = 'translateY(-1000%)'
    }, 4000)

    setTimeout(() => {
        toasts.removeChild(toast)
    }, 5000)
}
const user_API = 'https://randomuser.me/api/'

const result = document.querySelector('#result')
const filter = document.querySelector('#filter')
const listItems = []

getData()

async function getData() {
  const res = await fetch(`${user_API}?results=50`)

  const data = await res.json()

  data.results.forEach((user) => {
    const el = document.createElement('li')

    el.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="Sara">
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city}, ${user.location.country
    }</p>
        </div>
        `

    listItems.push(el)
  })

  result.innerHTML = ''

  listItems.forEach((item) => {
    result.appendChild(item)
  })
}

filter.addEventListener('input', () => {
    var search = filter.value.toLowerCase()

    listItems.forEach(item => {
        item.classList.add('hide')
    })

    listItems.forEach((item, idx) => {
        const username = item.querySelector('h4').innerText.toLowerCase()
        const location = item.querySelector('p').innerText.toLowerCase()

        if (username.match(search) || location.match(search)) {
            item.classList.remove('hide')
        }
    })
})
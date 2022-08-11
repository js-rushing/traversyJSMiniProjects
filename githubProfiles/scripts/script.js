const APIURL = 'https://api.github.com/users/'

const main = document.querySelector('#main')
const form = document.querySelector('#form')
const search = document.querySelector('#search')

async function getUser(username) {
  try {
    // axios() defaults to axios.get() - is same
    const { data } = await axios(APIURL + username)

    createUserCard(data)
    getRepos(username)
  } catch (err) {
    createErrorCard('No profile with this username')
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(`${APIURL}${username}/repos?sort=created`)

    addReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching repos')
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt=""
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${user.login}</h2>
      <p>
        ${user.bio ? user.bio : `User has no bio.`}
      </p>

      <ul>
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following}<strong>Following</strong></li>
        <li>${user.public_repos}<strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>`

  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.querySelector('#repos')

    repos.slice(0, 5).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `

  main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value

  user && getUser(user)

  search.value = ''
})

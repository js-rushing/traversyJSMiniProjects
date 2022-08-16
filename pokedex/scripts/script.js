const poke_container = document.querySelector('#poke-container')
const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  //   const API_URL =
  //     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  
  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div')
  const pokeType = pokemon.types[0].type.name
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id
  const formattedId = id.toString().padStart(3, '0')
  pokemonEl.classList.add('pokemon')
  pokemonEl.style.backgroundColor = colors[pokeType]


  const pokemonInnerHTML = `
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"
          />
        </div>
        <div class="info">
          <span class="number">#${formattedId}</span>
          <h3 class="name">${pokeName}</h3>
          <small class="type">Type: <span>${pokeType}</span></small>
        </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

fetchPokemons()

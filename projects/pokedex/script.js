let offset = 0;
const limit = 15
let singlePokemonURL = `https://pokeapi.co/api/v2/pokemon/`//+pokemon name
/* POKEMON INFO
name
sprites.front_default
types[1].type.name
*/
let pokeList = []
function displayPokemon(pokemon){
  let pokeCard = document.querySelector('#pokemon').content.cloneNode(true)
  pokeCard = pokeCard.querySelector('.pokemon')
  pokeCard.classList.add(pokemon.type)
  pokeCard.querySelector("img").src = pokemon.sprite
  pokeCard.querySelector("img").alt = pokemon.name
  pokeCard.querySelector(".name").textContent = pokemon.name
  pokeCard.querySelector(".type span").textContent = pokemon.type
  document.querySelector('#pokemonContainer').appendChild(pokeCard)
}
function getPokemon(pokeName)/* [obj] */{
  return fetch(singlePokemonURL+pokeName).then(res => res.json())
  .then(data => {
    return {
      name: data.name,
      sprite: data.sprites.front_default,
      type: data.types[0].type.name
    }
  })
}
function getPokemonList(){
  let pokeListURL = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  fetch(pokeListURL).then(res => {
    return res.json()
  }).then(data => {
    offset += limit
    return data.results
  }).then(results => {
    results.forEach(async pokemon => {
      let res = await getPokemon(pokemon.name)
      displayPokemon(res)
    })
  }).catch(err => console.log(err))
}
document.querySelector('#next').addEventListener('click', (e)=>{
  getPokemonList()
})
getPokemonList()
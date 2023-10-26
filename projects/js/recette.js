const ldbURL = `https://www.themealdb.com/api/json/v1/1/random.php`
let youtubeTemp =""

const getMeal = ()=>{
  return fetch(ldbURL).then(res => res.json())
  .then(data => data.meals[0])
}

const displayMainInfos = (infos, container)=>{
  console.log(infos)
  container.querySelector('.title').textContent = infos.strMeal
  container.querySelector('.origin').textContent = "Origin: " + infos.strArea
  container.querySelector('.howto').textContent = infos.strInstructions
  container.querySelector('img').src = infos.strMealThumb
  document.querySelector('.recetteDisplay').appendChild(container)
  youtubeTemp = infos.strYoutube
  let ingredients = {}
  let i = 1
  while (infos[`strIngredient${i}`] !== ""){
    ingredients[i] = [infos[`strIngredient${i}`], infos[`strMeasure${i}`]]
    i++
  }
  console.log(ingredients)
  displayIngredients(ingredients, container.querySelector(".desc"))
}
const displayIngredients = (ingredientsList, container)=>{
  Object.keys(ingredientsList).forEach(ingredientArr =>{
    let line = document.createElement('li')
    let ingredient = document.createElement('div')
    let measure = document.createElement('div')
    let separator = document.createElement('div')
    ingredient.textContent = ingredientsList[ingredientArr][0]
    measure.textContent = ingredientsList[ingredientArr][1]
    line.appendChild(ingredient)
    line.appendChild(separator)
    separator.classList.add('separator')
    line.appendChild(measure)
    line.classList.add('line')
    container.appendChild(line)
  })
  showVideo(youtubeTemp)
}
const showVideo = (link)=>{
  let video = document.createElement('a')
  video.href = link
  video.target = "_blank"
  video.textContent = 'Watch the video on youtube'
  document.querySelector(".uk-card-footer").appendChild(video)
}

document.querySelector('.hotmeal').addEventListener('click', async ()=>{
  document.querySelector('.hotmeal').textContent = "Obtenir une autre recette"
  if (document.querySelector('.recetteDisplay').firstElementChild)
    document.querySelector('.recetteDisplay').firstElementChild.remove()

  let mealCard = document.querySelector('#meal-card').content.cloneNode(true)
  mealCard = mealCard.querySelector('.uk-card')
  let mealInfo = await getMeal()
  displayMainInfos(mealInfo, mealCard)
})
const ldbURL = `https://www.themealdb.com/api/json/v1/1/random.php`

const getMeal = ()=>{
  return fetch(ldbURL).then(res => res.json())
  .then(data => data.meals[0])
}

const displayMainInfos = (infos, container, showAgain = false)=>{
  container.querySelector('.title').textContent = infos.strMeal
  container.querySelector('.origin').textContent = "Origin: " + infos.strArea
  container.querySelector('.howto').textContent = infos.strInstructions
  container.querySelector('img').src = infos.strMealThumb
  document.querySelector('.recetteDisplay').appendChild(container)
  showVideo(infos.strYoutube)
  let ingredients = {}
  let i = 1
  while (infos[`strIngredient${i}`] !== ""){
    ingredients[i] = [infos[`strIngredient${i}`], infos[`strMeasure${i}`]]
    i++
  }
  displayIngredients(ingredients, container.querySelector(".desc"))
  if (!showAgain) createMemo(infos)
}
const displayIngredients = (ingredientsList, container)=>{
  Object.keys(ingredientsList).forEach(ingredientArr =>{
    let line = document.createElement('li')
    let ingredient = document.createElement('div')
    let measure = document.createElement('div')
    ingredient.textContent = ingredientsList[ingredientArr][0]
    measure.textContent = ingredientsList[ingredientArr][1]
    line.appendChild(ingredient)
    line.appendChild(measure)
    line.classList.add('line')
    container.appendChild(line)
  })
}
const showVideo = (link)=>{
  let videoLink = document.createElement('a')
  videoLink.href = link
  videoLink.target = "_blank"
  videoLink.textContent = '▶️ Watch the video on youtube'
  document.querySelector(".infos").appendChild(videoLink)
}
const createMemo = (meal)=>{
  let memo = document.createElement('div')
  let title = document.createElement('p')
  title.textContent = meal.strMeal
  memo.style.backgroundImage = `url(${meal.strMealThumb})`
  memo.appendChild(title)
  memo.dataset.meal = JSON.stringify(meal)
  document.querySelector('.viewed').appendChild(memo)
  memo.addEventListener('click', ()=>{
    if (document.querySelector('.recetteDisplay').firstElementChild)
      document.querySelector('.recetteDisplay').firstElementChild.remove()
    let mealCard = document.querySelector('#meal-card').content.cloneNode(true)
    mealCard = mealCard.querySelector('.meal-card')
    let mealInfo = JSON.parse(memo.dataset.meal)
    displayMainInfos(mealInfo, mealCard, true)
  })
}
document.querySelector('.hotmeal').addEventListener('click', async ()=>{
  document.querySelector('.hotmeal').textContent = "🔍 Click again for more!"
  if (document.querySelector('.recetteDisplay').firstElementChild)
    document.querySelector('.recetteDisplay').firstElementChild.remove()

  let mealCard = document.querySelector('#meal-card').content.cloneNode(true)
  mealCard = mealCard.querySelector('.meal-card')
  let mealInfo = await getMeal()
  displayMainInfos(mealInfo, mealCard)
})
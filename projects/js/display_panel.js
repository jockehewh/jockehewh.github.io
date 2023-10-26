
// target = sideMenu

let controlDiv = document.createElement('div')
controlDiv.classList.add('monitoring')
sideMenu.insertBefore(controlDiv, sideMenu.querySelector('.resize'))
let monitoringBox = document.createElement("ul")
let mouseBox = document.createElement('li')
let mouseTitle = document.createElement("h3")
let mouseBoxSub = document.createElement("div")
//let timeBox = document.createElement("div")
let mouseMove = document.createElement("div")
let mouseDown = document.createElement("div")
let mouseHover = document.createElement("div")
let visitMoouseMoves = document.createElement('div')
let visitMoouseMovesTitle = document.createElement('h5')
let mouseBtn = document.createElement('button')

mouseTitle.textContent = "Mouse events"
mouseTitle.classList.add('uk-accordion-title')

controlDiv.appendChild(monitoringBox)
mouseBoxSub.classList.add("mouse", 'uk-accordion-content')
monitoringBox.appendChild(mouseBox)
monitoringBox.setAttribute('uk-accordion', "")
mouseMove.classList.add('mousemove')
mouseDown.classList.add('mousedown')
mouseHover.classList.add('mousehover')

//mouse down et mouse over
mouseBox.appendChild(mouseTitle)
mouseBox.appendChild(mouseBoxSub)
mouseBoxSub.appendChild(visitMoouseMoves)
mouseBoxSub.appendChild(mouseMove)
mouseBoxSub.appendChild(mouseDown)
mouseBoxSub.appendChild(mouseHover)


visitMoouseMoves.appendChild(visitMoouseMovesTitle)
visitMoouseMovesTitle.textContent = "Mouvements de la souris"

mouseBtn.textContent = "Print mouse path"
visitMoouseMoves.appendChild(mouseBtn)
mouseBtn.addEventListener('click', () => {
  visit.mouseMoves.forEach(coord => {
    let u = document.createElement('div')
    u.classList.add('mp')
    u.style.width = "20px"
    u.style.height = "20px"
    u.style.position = "absolute"
    u.style.background = "green"
    u.style.top = coord[0] + "px"
    u.style.left = coord[1] + "px"
    document.body.appendChild(u)
  })
})
let deleteTrace = document.createElement('button')
deleteTrace.textContent = "Delete mouse path"
visitMoouseMoves.appendChild(deleteTrace)
deleteTrace.addEventListener('click', () => {
  document.querySelectorAll('.mp').forEach(mp => {
    mp.remove();
  })
})

let mousex = document.createElement('p')
let mousey = document.createElement('p')
mousex.classList.add('mousex')
mousey.classList.add('mousey')
mouseMove.appendChild(mousex)
mouseMove.appendChild(mousey)

sideMenu.addEventListener('mousemoveend', ()=>{
  setTimeout(()=>{
    mouseMove.style.background = "unset"
  },500)
})
//mousedown
mouseDown.classList.add('mousedown')
mouseDown.addEventListener("mousedown", ()=>{
  mouseDown.style.background = "green"
})
mouseDown.addEventListener("mouseup", () => {
  mouseDown.style.background = "unset"
})

//mouseover
mouseHover.classList.add("mousehover")
mouseHover.addEventListener("mouseenter", () => {
  mouseHover.style.background = "green"
})
mouseHover.addEventListener("mouseleave", () => {
  mouseHover.style.background = "unset"
})
//ajouté les api navigateur

//---------------------------------------------------||
let navigatorBox = document.createElement('li')
let navigatorTitle = document.createElement("h3")
let navigatorBoxSub = document.createElement("div")
//let timeBox = document.createElement("div")
let navigatorStorage = document.createElement("div")
let navigatorVisit = document.createElement("div")
let navigatorConnexion = document.createElement("div")

monitoringBox.appendChild(navigatorBox)
navigatorBoxSub.classList.add('uk-accordion-content')
navigatorTitle.textContent = 'Navigator APIs'
navigatorTitle.classList.add('uk-accordion-title')
navigatorBox.appendChild(navigatorTitle)
navigatorBox.appendChild(navigatorBoxSub)

//navigatorBoxSub appendChild
navigatorBoxSub.appendChild(navigatorVisit)
//pour navigator visit 
let storageTitle = document.createElement('h5')
storageTitle.textContent = "Local storage"
let storageDescription = document.createElement('div')
//storageDescription.textContent = localStorage.visit
let visitTime = document.createElement('div')

let visitTimeTitle = document.createElement('h5')

visitTime.appendChild(visitTimeTitle)

visitTimeTitle.textContent = "Heure d'arrivé "


let visitP = document.createElement('p')
let visitS = document.createElement('span')
visitP.textContent = "Heure d'arrivé "
visitTimeTitle.appendChild(visitS)
visitS.textContent = new Intl.DateTimeFormat('fr', {timeStyle: "medium"}).format(visit.timeIn)

navigatorVisit.appendChild(visitTime)
navigatorVisit.appendChild(storageTitle)
navigatorVisit.appendChild(storageDescription)



// pour storageDescription

Object.keys(localStorage).forEach(key=>{
  let p = document.createElement('p')
  let br = document.createElement('br')
  p.textContent = key
  p.appendChild(br)
  let s = document.createElement('span')
  s.textContent = localStorage[key]
  p.appendChild(s)
  storageDescription.appendChild(p)
})
/* CONTROL PANEL 
  localStorage
  temps de visite (durée d'activité)
  vitesse de connexion
  //navigator.connection // navigator.language
  navigator.permission.
  navigator.userAgent
  navigator.share
*/
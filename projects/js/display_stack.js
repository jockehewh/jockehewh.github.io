// CARD HEADER |> stackPanel.querySelector(".uk-card-header")
// CARD BODY |> stackPanel.querySelector(".uk-card-body")

/* PANEL CONTAINER */
let flexDiv = document.createElement('div')
flexDiv.style.display = "flex"
flexDiv.style.flexDirection = "row"
flexDiv.style.flexWrap = "wrap"

let stackFront = ["Vanilla / Nodejs","Typescript","React","Vue","UIkit"]
let sideMenu = document.querySelector('.inside-side-menu')
let stackPanel = createPanel()
stackPanel.style.marginRight = "30px"
stackPanel.style.flex = "1"
stackPanel.style.minWidth = "250px"
stackPanel.style.maxWidth = "300px"
stackPanel.querySelector(".uk-card-header").textContent = "Stack Frontend"

let list = document.createElement('ul')
list.classList.add("uk-list", "uk-list-hyphen")
stackPanel.querySelector(".uk-card-body").appendChild(list)
flexDiv.appendChild(stackPanel)
sideMenu.insertBefore(flexDiv, sideMenu.querySelector('.resize'))
stackFront.forEach((el,i) =>{
  let li = document.createElement('li')
  i % 2 === 0 ? li.classList.add('uk-animation-slide-right') : li.classList.add('uk-animation-slide-left')
  li.textContent = el
  list.appendChild(li)
})

let stackBack = ["PHP", "Symphony", "MySQL", "Mongodb", "Rust"]
let stackPanel2 = createPanel()
stackPanel2.style.flex = "1"
stackPanel2.style.minWidth = "250px"
stackPanel2.style.maxWidth = "300px"
stackPanel2.querySelector(".uk-card-header").textContent = "Stack Backend"
let list2 = document.createElement('ul')
list2.classList.add("uk-list", "uk-list-hyphen")
stackPanel2.querySelector(".uk-card-body").appendChild(list2)
flexDiv.appendChild(stackPanel2)
stackBack.forEach((el, i) => {
  let li = document.createElement('li')
  i % 2 === 0 ? li.classList.add('uk-animation-slide-right') : li.classList.add('uk-animation-slide-left')
  li.textContent = el
  list2.appendChild(li)
})
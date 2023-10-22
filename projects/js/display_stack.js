/* 
MA STACK

Vanilla/Nodejs
Mongodb
mysql
Typescript
React
Vue
UIkit

ajouter des animation avec delay 700ms
*/

let sideMenu = document.querySelector('.inside-side-menu')
let stackPanel = createPanel()
stackPanel.querySelector(".uk-card-header").textContent = "Stack Javascript"
stackPanel.querySelector(".uk-card-body").textContent = `Vanilla/Nodejs
Mongodb
mysql
Typescript
React
Vue
UIkit`
//ORGANISER EN SECTIONS
sideMenu.insertBefore(stackPanel, sideMenu.querySelector('.resize'))
'use strict';

const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const scoreP1Dom = document.querySelector("#score--0")
const scoreP2Dom = document.querySelector("#score--1")
const temp1Dom = document.querySelector("#current--0")
const temp2Dom = document.querySelector("#current--1")
let p0 = document.querySelector('.player--0')
let p1 = document.querySelector('.player--1')
const image = document.querySelector('.dice') //src
let currentPlayer = 0
let scoreP1, scoreP2
let temp1 = 0
let temp2 = 0
let diceValue

btnNew.addEventListener('click', () => {
  scoreP1Dom.textContent = 0
  scoreP2Dom.textContent = 0
  temp1 = 0
  temp2 = 0
  image.src = "dice-1.png"
  p0.classList.add('player--active')
  p1.classList.remove('player--active')
})

btnRoll.addEventListener('click', () => {
  diceValue = Math.floor(Math.random() * 6 + 1)
  image.src = `dice-${diceValue}.png`
  if (!currentPlayer) {
    temp1 = parseInt(temp1Dom.textContent)
    if (diceValue !== 1) {
      temp1 += diceValue
    } else {
      temp1 = 0
      currentPlayer = !currentPlayer
      p0.classList.remove('player--active')
      p1.classList.add('player--active')
    }
    temp1Dom.textContent = temp1
  } else {
    temp2 = parseInt(temp2Dom.textContent)
    if (diceValue !== 1) {
      temp2 += diceValue
    } else {
      temp2 = 0
      currentPlayer = !currentPlayer
      p0.classList.add('player--active')
      p1.classList.remove('player--active')
    }
    temp2Dom.textContent = temp2
  }
})
btnHold.addEventListener('click', () => {
  if (!currentPlayer) {
    p0.classList.remove('player--active')
    p1.classList.add('player--active')
    scoreP1 = temp1 + parseInt(scoreP1Dom.textContent)
    temp1Dom.textContent = 0
    scoreP1Dom.textContent = scoreP1
    if (scoreP1 >= 100) alert('Player 1 Win!')
  } else {
    p0.classList.add('player--active')
    p1.classList.remove('player--active')
    scoreP2 = temp2 + parseInt(scoreP2Dom.textContent)
    temp2Dom.textContent = 0
    scoreP2Dom.textContent = scoreP2
    if (scoreP2 >= 100) alert('Player 2 Win!')
  }
  currentPlayer = !currentPlayer
})


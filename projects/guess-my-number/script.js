'use strict';

let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let btnCheck = document.querySelector('.check')
let btnAgain = document.querySelector('.again')
let number = document.querySelector('.guess')
let message = document.querySelector('.message')
let numberBox = document.querySelector('.number')
let MAX_GUESS = 20
let toGuess = Math.floor(Math.random() * MAX_GUESS + 1)
let playerGuess = 0

if(localStorage.highscore){
  highscore.textContent = localStorage.highscore
}

score.innerText = MAX_GUESS

const manageBtns = ()=>{
  document.querySelectorAll('dialog button').forEach(btn=>{
    btn.remove()
  })
  let i = 1
while(i <= MAX_GUESS){
  let btn = document.createElement('button')
  btn.innerText = i
  btn.dataset.number = i
  document.querySelector('dialog').appendChild(btn)
  btn.addEventListener('click', e =>{
    number.value = btn.innerText
    btnCheck.click()
    btn.setAttribute('disabled', '')
  })
  i++
}
}

manageBtns()

btnCheck.addEventListener('click', (e) => {
  let currentScore = parseInt(score.textContent)
  numberBox.style.left = "50%"
  numberBox.classList.remove('guessmoin', "guessplus")
  playerGuess = parseInt(number.value)
  document.querySelector(`[data-number="${playerGuess}"]`).setAttribute('disabled', '')
  console.log(playerGuess)
  if(playerGuess > toGuess){
    if (numberBox.style.left === "50%") {
      numberBox.classList.add('guessmoin')
    }
    message.textContent = "Guess lower!"
    number.value = ""
    currentScore--
    score.textContent = currentScore
  }
  if (playerGuess < toGuess) {
    if(numberBox.style.left === "50%"){
      numberBox.classList.add('guessplus')
    }
    message.textContent = "Guess higher!"
    number.value = ""
    currentScore--
    score.textContent = currentScore
  }
  if (currentScore === 0) {
    btnCheck.setAttribute('disabled', '')
    numberBox.classList.remove('guessmoin', "guessplus")
    numberBox.textContent = "Game over"
    numberBox.style.left = "50%"
    numberBox.style.width = "fit-content"
    document.body.style.backgroundColor = "#f00"
  }
  if (playerGuess === toGuess){
    if(localStorage.highscore){
      if (parseInt(localStorage.highscore) < currentScore)
      localStorage.highscore = currentScore
    }else{
      localStorage.highscore = currentScore
      highscore.textContent = currentScore
    }
    message.textContent = "You won!"
    btnCheck.setAttribute('disabled','')
    numberBox.style.width = "fit-content"
    numberBox.textContent = playerGuess + "!"
    document.body.style.backgroundColor = "#60b347"
  }
})

btnAgain.addEventListener('click', e => {
  numberBox.textContent = "?"
  document.body.style.backgroundColor = "#222"
  message.textContent = "Start guessing..."
  score.textContent = MAX_GUESS
  numberBox.style.left = "50%"
  numberBox.style.width = "15rem"
  btnCheck.removeAttribute('disabled', '')
  toGuess = Math.floor(Math.random() * MAX_GUESS + 1)
  number.value = ""
  manageBtns()
})
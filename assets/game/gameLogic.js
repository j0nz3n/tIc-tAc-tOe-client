'use strict'

/*
Tic - Tac - Toe Game Logic
*/

const gameAPI = require('./api')
const store = require('../scripts/store')
const tokens = ['X', 'O']
let gameOver = false
let turn = true // true = X | false = O
let thisWasClicked
let cell = []
let xMoves = []
let oMoves = []
// let thisGame = store.game.id

// Handles the clicked div and calls move
// according to who'sturn it is
const clickEvent = function (event) {
  thisWasClicked = event.target.id
  console.log("This Was Clicked: ", thisWasClicked, gameOver)
  turn ? playerMove(thisWasClicked, tokens[0]) : playerMove(thisWasClicked, tokens[1])
}

const resetGame = () => {
  // console.log(thisWasClicked)
  if ($('.row').hasClass('unclickable')) {
    // console.log($('.row'))
    $('.row').removeClass('unclickable')
  }
  $('.row').empty()
  xMoves = []
  oMoves= []
  turn = true
  gameOver = false
}

const playerMove = (target, token) => {
  turn ? xMoves.push(target) : oMoves.push(target)
  let thingclicked = document.getElementById(target)
  let index = thingclicked.dataset.index
  let value = token
  thingclicked.innerHTML = token
  $(thingclicked).toggleClass('unclickable')
  turn ? checkForWin(xMoves) : checkForWin(oMoves)
  turn ? turn = !turn : turn = !turn
  target = ''
  gameOver ? gameAPI.updateGame(index, value, true) && resetGame() : gameAPI.updateGame(index, value, false) 

}

const checkForWin = function (playerMoves) {
  const winScenario = [
    ["1", "2", "3"],    // top row
    ["4", "5", "6"],    // middle row
    ["7", "8", "9"], // bottom row
    ["1", "4", "7"],   // left column
    ["2", "5", "8"],   // middle column
    ["3", "6", "9"],   // right column
    ["1", "5", "9"],    // left to right diagnal
    ["3", "5", "7"]  // right to left diagnal
  ]

  const scenarioChecks = winScenario.map(scenario => {  // Grab each subArray in winScenario
    const winningMoves = playerMoves.filter(move => {   // Grab playerMoves and checks if
      return scenario.indexOf(move) !== -1              // that is a winning
    })
    return winningMoves.length === 3
  })

  const didWin = scenarioChecks.some(scenarioCheck => scenarioCheck === true)
  if(didWin === true) {
    gameOver = true
    turn ? alert('X WINS!') : alert('O WINS!')
    // setTimeout(resetGame, 1000)
  } 
  else if (xMoves.length + oMoves.length === 9 && !gameOver){
    alert("Draw")
    gameOver = true
  }
  // console.log("Player has done: ", playerMoves, turn)
  thisWasClicked = ''
  return gameOver
}


module.exports = {
  clickEvent,
  resetGame
}
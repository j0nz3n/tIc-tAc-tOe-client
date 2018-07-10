'use strict'

/*
Tic - Tac - Toe Game Logic
*/

const token = ['X', 'O']
let gameOver = false
let turn = true // true = X | false = O
let thisWasClicked
let cells = []
let xMoves = [] // arrays to hold player moves
let oMoves = [] // will be used to check for win

// Handles the clicked div and calls move
// according to who'sturn it is
const clickEvent = function (event) {
  thisWasClicked = event.target.id
  console.log("This Was Clicked: ", thisWasClicked)
  turn ? xTurn(thisWasClicked) : oTurn(thisWasClicked)
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

const xTurn = function (thisWasClicked) {
  xMoves.push(thisWasClicked)
  let thingClicked = document.getElementById(thisWasClicked)
  thingClicked.innerHTML = token[0]
  $(thingClicked).toggleClass('unclickable')
  checkForWin(xMoves)
  turn ? turn = !turn : turn = !turn
  thisWasClicked = ''
}

const oTurn = function (thisWasClicked) {
  oMoves.push(thisWasClicked)
  let thingClicked = document.getElementById(thisWasClicked)
  thingClicked.innerHTML = token[1]
  $(thingClicked).toggleClass('unclickable')
  checkForWin(oMoves)
  turn ? turn = false : turn = true
  thisWasClicked = ''
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
    setTimeout(resetGame, 1000)
  }
  // console.log("Player has done: ", playerMoves, turn)
  thisWasClicked = ''
  return turn, gameOver
}


module.exports = {
  clickEvent,
  resetGame
}
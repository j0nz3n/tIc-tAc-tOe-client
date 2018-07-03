'use strict'

/*
Tic - Tac - Toe Game Logic
*/

const token = ['X', 'O']
let gameOver = false
let turn = true // true = X | false = O
let thisWasClicked
let xMoves = [] // arrays to hold player moves
let oMoves = [] // will be used to check for win

// Handles the clicked div and calls move
// according to who'sturn it is
const clickEvent = function (event) {
  thisWasClicked = event.target.id
  console.log("This Was Clicked: ", thisWasClicked)
  turn ? xTurn(thisWasClicked) : oTurn(thisWasClicked)
}

const xTurn = function (thisWasClicked) {
  xMoves.push(thisWasClicked)
  let thingClicked = document.getElementById(thisWasClicked)
  thingClicked.innerHTML = token[0]
  $(thingClicked).addClass('unclickable')
  checkForWin(xMoves)
  turn ? turn = !turn : turn = !turn
  thisWasClicked = ''
}

const oTurn = function (thisWasClicked) {
  oMoves.push(thisWasClicked)
  let thingClicked = document.getElementById(thisWasClicked)
  thingClicked.innerHTML = token[1]
  $(thingClicked).addClass('unclickable')
  checkForWin(oMoves)
  turn ? turn = false : turn = true
  thisWasClicked = ''
}

const checkForWin = function (playerMoves) {
  const winScenario = [
    ["one", "two", "three"],    // top row
    ["four", "five", "six"],    // middle row
    ["seven", "eight", "nine"], // bottom row
    ["one", "four", "seven"],   // left column
    ["two", "five", "eight"],   // middle column
    ["three", "six", "nine"],   // right column
    ["one", "five", "nine"],    // left to right diagnal
    ["three", "five", "seven"]  // right to left diagnal
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
  }

  console.log("Player has done: ", playerMoves, turn)
  thisWasClicked = ''
  return turn, gameOver
}
const ttt = function () {

}

module.exports = {
  clickEvent
}
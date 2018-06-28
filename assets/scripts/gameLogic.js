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
  if (xMoves.length >= 3) {
    checkForWin(xMoves)
  } else {
    turn ? turn = !turn : turn = !turn
    thisWasClicked = ''
  }
  return turn
}

const oTurn = function (thisWasClicked) {
  oMoves.push(thisWasClicked)
  let thingClicked = document.getElementById(thisWasClicked)
  thingClicked.innerHTML = token[1]
  $(thingClicked).addClass('unclickable')
  if (oMoves.length >= 3) {
    checkForWin(oMoves)
  } else {
    turn ? turn = false : turn = true
    thisWasClicked = ''
  }
  return turn
}

const checkForWin = function (playerMoves) {
  const winScenario = [
    ["one", "two", "three"], // top row
    ["four", "five", "six"], // middle row
    ["seven", "eight", "nine"], // bottom row
    ["one", "four", "seven"], // left column
    ["two", "five", "eight"], // middle column
    ["three", "six", "nine"], // right column
    ["one", "five", "nine"], // left to right diagnal
    ["three", "five", "seven"] // right to left diagnal
  ]
  winScenario.forEach(function (scenario) {
      if (scenario.includes(playerMoves[0]) && scenario.includes(playerMoves[1]) && scenario.includes(playerMoves[2])) {
        console.log("Winner!")
        turn ? alert("X Wins!") : alert('O Wins')
        gameOver = true
        return gameOver
      }
  })
    console.log("Player has done: ", playerMoves, turn)
    turn ? turn = false : turn = true
    thisWasClicked = ''
    return turn, gameOver
}
const ttt = function () {

}

module.exports = {
  clickEvent
}

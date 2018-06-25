'use strict'

// funtion that takes a gridContainer and userClick
// a gridContainer is the tic-tac-toe board
// userClick is the child element that was clicked by the player
// each sub-array is the letter we are looking at to determin a win, loss or draw

const token = ['X', 'O']
let turn = true // true = X | false = O
let xMoves = [] // array to hold player moves
let oMoves = [] // will be used to check for win
let thisWasClicked
const row2 = []
const row0 = []
const row1 = []

const clickEvent = function (event) {
  thisWasClicked = event.target.id
  // console.log("you clicked: ", thingClicked)
  console.log("This Was Clicked: ", thisWasClicked)
  turn ? xTurn(thisWasClicked) : oTurn(thisWasClicked)
}

const xTurn = function (thisWasClicked) {
  xMoves.push(thisWasClicked)
  document.getElementById(thisWasClicked).innerHTML = token[0]
  turn = false
  console.log("X has done: ", xMoves, turn)
  thisWasClicked = ''
  return turn
}


const oTurn = function (thisWasClicked) {
  oMoves.push(thisWasClicked)
  document.getElementById(thisWasClicked).innerHTML = token[1]
  turn = true
  console.log("O has done: ", oMoves, turn)
  thisWasClicked = ''
  return turn
}

const ttt = function (gridContainer, coordinatePairs) {
  // step 1 find letter for first coordinate


}
//   for (let i = 0; i < gridContainer.length; i++) {
//     if (i >= 0 && i <= 3 ) {
//       row0.push(gridContainer[i])
//       // ['d', 'i', 'b', 't']
//       // on row 0
//     } else if (i > 3 && i <= 7) {
//       row1.push(gridContainer[i])
//       // ['l', 'o', 'a', 'm']
//       // on row 1
//     } else{
//       row2.push(gridContainer[i])
//       // ['b', 'c','g', 'r']
//       // on row2
//     }

//   }
//   const rows = [row0, row1, row2, row3]

//   const word = []

//   for (let i = 0; i < coordinatePairs.length; i++) {
//     const coordPair = coordinatePairs[i] // when i = 0, [0,0] when i = 1, [1,1]
//     // get correct letter
//     const letter = rows[coordPair[0]][coordPair[1]]
//     word.push(letter)
//   }

//   console.log(word.join(''))
//   // returns a string representing
//   // the concat of the letters at each of the coordinates
// }


module.exports = {
  clickEvent
}

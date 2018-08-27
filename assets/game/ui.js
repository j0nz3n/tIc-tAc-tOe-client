'use strict'

const store = require('../scripts/store')
const game = require('./gameLogic')

const newGameSuccess = (data) => {
  // console.log("The Current Game ID: " + data.game.id)
  store.game = data.game
  $('.gameboard').css('display', 'grid')
}

const newGameFailure = (err) => {
  console.log(err)
}

const allGamesSuccess = (data) => {
  store.allGames = data.games
  console.log(store.allGames)
}


module.exports = {
  newGameSuccess,
  newGameFailure,
  allGamesSuccess
}
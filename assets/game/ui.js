'use strict'

const store = require('../scripts/store')
const game = require('./gameLogic')

const newGameSuccess = (data) => {
  console.log("The Current Game ID: " + data.game.id)
  store.game = data.game
  $('.main').css('display', 'grid')

}

const newGameFailure = (err) => {
  console.log(err)
}

const allGamesSuccess = (data) => {
  store.allGames = data.games
  console.log(store.allGames)
}

const updateGame = (data) => {
  console.log(store.game)
}


module.exports = {
  newGameSuccess,
  newGameFailure,
  allGamesSuccess,
  updateGame
}
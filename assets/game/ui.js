'use strict'

const store = require('../scripts/store')

const newGameSuccess = (data) => {
  store.game = data.game
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
'use strict'
const gameLogic = require('./gameLogic')
const gameAPI = require('./api')
const ui = require('./ui')
const store = require('../scripts/store')

const clickHandler = function (event) { // Handles Game events // should be somewhere else
  gameLogic.clickEvent(event)
}

const new_game = function (event) {
  event.preventDefault()
  // console.log('New game ran!')
  
  gameAPI.newGame(event)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const all_games = function (event) {
  event.preventDefault()
  console.log('All Games ran!')

  // const data = 
  gameAPI.getAllGames(event)
    .then(ui.allGamesSuccess)
    .catch(ui.newGameFailure)
}

const addHandlers = () => {
  $('.row').click(clickHandler) // Handles Game events
  $('.newGame').click(new_game)
  $('.allGames').click(all_games)
}

module.exports = {
  addHandlers
}

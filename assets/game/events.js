'use strict'
const game = require('./gameLogic')

const clickHandler = function (event) { // Handles Game events // should be somewhere else
  game.clickEvent(event)
}

const reset_Game = function () {
  game.resetGame()
}

const addHandlers = () => {
  $('.row').click(clickHandler) // Handles Game events
  $('.reset').click(reset_Game)
}

module.exports = {
  addHandlers
}

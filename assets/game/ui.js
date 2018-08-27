'use strict'

const store = require('../scripts/store')

const newGameSuccess = (data) => {
  // console.log("The Current Game ID: " + data.game.id)
  store.game = data.game
  $('.gameboard').css('display', 'grid')
}

const newGameFailure = () => {
  $('#game-message').text("Something went wrong, please try again.")
  setTimeout(()=>{
    $('#game-message').text("")
  },2000)
}

const allGamesSuccess = (data) => {
  store.allGames = data.games
  $('#game-message').text(`${store.allGames.length} games have been played on this account`)
  setTimeout(()=>{
    $('#game-message').text("")
  },2000)
}


module.exports = {
  newGameSuccess,
  newGameFailure,
  allGamesSuccess
}
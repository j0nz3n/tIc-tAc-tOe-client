'use strict'

const store = require('../scripts/store')

const newGameSuccess = (data) => {
  store.game = data.game
}

const newGameFailure = (err) => {
  console.log(err)
}

const allGamesSuccess = (data) => {
 console.log(data)
}


module.exports = {
  newGameSuccess,
  newGameFailure,
  allGamesSuccess
}
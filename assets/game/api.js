'use strict'

const config = require('../scripts/config')
const store = require('../scripts/store')

const newGame = () =>  {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (data) =>  {
  return $.ajax({
    url: config.apiUrl + '/games' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      data
    }
  })
}

const getOneGame = (data) =>  {
  return $.ajax({
    url: config.apiUrl + '/games' + store.user.games.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      data
    }
  })
}

const getAllGames = () =>  {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token     
    }
  })
}

module.exports = {
  newGame,
  updateGame,
  getOneGame,
  getAllGames
}
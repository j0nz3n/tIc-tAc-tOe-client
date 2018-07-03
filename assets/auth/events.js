'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const game = require('../game/gameLogic')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Sign up ran!')

  const data = getFormFields(this) // this === event.target 
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Sign in ran!')

  const data = getFormFields(this) // this === event.target 
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Change Password ran!')

  const data = getFormFields(this) // this === event.target 
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Sign put ran!')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const clickHandler = function (event) { // Handles Game events // should be somewhere else
  game.clickEvent(event)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.row').click(clickHandler) // Handles Game events
}

module.exports = {
  addHandlers
}

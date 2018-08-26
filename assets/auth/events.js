'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')


const onSignUp = function (event) {
  event.preventDefault()
  console.log('Sign up ran!')

  const data = getFormFields(this) // this === event.target 
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Sign in ran!')
  const data = getFormFields(this) // this === event.target 
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('Change Password ran!')

  const data = getFormFields(this) // this === event.target 
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('Sign put ran!')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onShowSignIn = function () {
  $('#sigIn-modal').toggle('display')
}

const onShowSignUp = function () {
  $('#sigUp-modal').toggle('display')
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-form').on('submit', onSignOut)
  $('#show-signIn-btn').on('click', onShowSignIn)
  $('#show-signUp-btn').on('click', onShowSignUp)
  $('.modal-header span').on('click', () => {
    $('#sigIn-modal').toggle('display')
  })
  $('.modal-header span').on('click', () => {
    $('#sigUp-modal').toggle('display')
})
}

module.exports = {
  addHandlers
}

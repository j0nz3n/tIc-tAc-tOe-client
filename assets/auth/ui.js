'use strict'

const store = require('../scripts/store')
const modal = require('../auth/modal')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  modal.closeSigUpModal()
  modal.openSignInModal()
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Data is:', error)
}

const signInSuccess = function (data) {
  // console.log('signInSuccess ran. Token is:' + data.user.token)
  store.user = data.user
  let user = store.user.email
  modal.closeSignInModal()
  $('#message').html('<h3></h3>')
  $('#message').text('Hello, ' + user)
  // console.log("Hello, "+ store.user.email)
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Data is:', error)
}

const changePasswordSuccess = function () {
  $('#message').text('changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on Password change')
  $('#message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Data is:', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Data is:', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

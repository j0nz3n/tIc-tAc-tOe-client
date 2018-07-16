'use strict'

const store = require('../scripts/store')
const modal = require('../auth/modal')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  modal.closeSigUpModal()
  modal.openSignInModal()
  $('#sign-up-form')[0].reset()
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign' + error)
  $('#message').css('background-color', 'red')
  $('#sign-up-form')[0].reset()
  // console.log('Error Logging in:', error)
}

const signInSuccess = function (data) {
  store.user = data.user
  let user = store.user.email
  modal.closeSignInModal()
  $('#sign-in-form')[0].reset()
  $('#message').html('<h3></h3>')
  $('#message').text('Hello, ' + user)
  $('.game-btn').toggleClass('hidden')
  $('.auth-btn').toggleClass('hidden')
  
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in ' + error)
  $('#message').css('background-color', 'red')
  $('#sign-in-form')[0].reset()
  // console.log('signInFailure ran. Data is:', error)
}

const changePasswordSuccess = function () {
  $('#message').text('changed password successfully')
  $('#message').css('background-color', 'green')
  // console.log('changePasswordSuccess ran and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on Password change' + error)
  $('#message').css('background-color', 'red')
  // console.log('changePasswordFailure ran. Data is:', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  $('.game-baord').css('display', 'none')
  $('.game-btn').addClass('hidden')
  $('.auth-btn').removeClass('hidden')

  // console.log('signOutSuccess ran and nothing was returned')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out' + error)
  $('#message').css('background-color', 'red')
  // console.log('signOutFailure ran. Data is:', error)
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

'use strict'

const store = require('../scripts/store')
const navBtns = require('../scripts/templates/navbar.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  $('#sigUp-modal').toggle('display')
  $('#sigIn-modal').toggle('display')
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  $('#message').toggle('display')
  $('#sign-up-form')[0].reset()

}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#sigIn-modal').toggle('display')
  $('nav button').toggle('display')
  $('.hidden').removeClass('hidden')
  $('#message').toggle('display')
  $('#sign-in-form')[0].reset()
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  setTimeout(() => {
    $('#message').toggle('display')
    $('#sign-in-form')[0].reset()
  }, 1500)
}

const changePasswordSuccess = function () {
  $('#pw-message').text('changed password successfully')
  $('#pw-message').css('background-color', 'green')
  setTimeout(() => {
    $('#pw-message').toggle('display')
    $('#change-password')[0].reset()
    $('#change-pw').toggle('display')
  }, 1500)
}

const changePasswordFailure = function (error) {
  $('#pw-message').text('Error on Password change')
  $('#pw-message').css('background-color', 'red')
  // console.log('changePasswordFailure ran. Data is:', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  $('nav button').toggle('display')
  $('.gameboard').toggle('display')
  $('#settings').toggle('display')
  // console.log('signOutSuccess ran and nothing was returned')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
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

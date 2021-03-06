'use strict'

// Get modal element
const signUpModal = document.getElementById('signUpModal');
const signInModal = document.getElementById('signInModal');

// Get modal button
const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');

// Get close button
const closeSignUpBtn =  document.getElementById('closeSignUpBtn');
const closeSignInBtn =  document.getElementById('closeSignInBtn');

// Listen for Click
signUpBtn.addEventListener('click', openSignUpModal);
closeSignUpBtn.addEventListener('click', closeSigUpModal);

signInBtn.addEventListener('click', openSignInModal);
closeSignInBtn.addEventListener('click', closeSignInModal);

// Listen for click outside of modal
window.addEventListener('click', clickOutsideSignIn)
window.addEventListener('click', clickOutsideSignUp)

// Functions that open and close modal
function openSignUpModal () {
  signUpModal.style.display = "block"
}
function closeSigUpModal () {
  signUpModal.style.display = "none"
}

function openSignInModal () {
  signInModal.style.display = "block"
}
function closeSignInModal () {
  signInModal.style.display = "none"
}


// Function that closes modal if outside click
function clickOutsideSignUp (e) {
  if (e.target == signUpModal) {
  signUpModal.style.display = "none"
  }
}

function clickOutsideSignIn (e) {
  if (e.target == signInModal) {
  signInModal.style.display = "none"
  }
}

module.exports = {
  openSignUpModal,
  closeSigUpModal,
  openSignInModal,
  closeSignInModal,
  clickOutsideSignUp,
  clickOutsideSignIn
}
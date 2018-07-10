'use strict'

let apiUrl
const apiUrls = {
  production: 'https://j0nz3n.github.io/tIc-tAc-tOe-client',
  development: 'https://tic-tac-toe-wdi.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}

'use strict'
// require the store object, we will use it to share data between different files
const store = require('../store')

$('#new-game').hide()
$('#after-sign-in').hide()

const signUpSuccess = function (responseData) {
	// tell the user signup is successful
	$('#movie-display').text('You have signed up! Woohoo! Please sign in to start.')

	// remove existing classes and add a bootstrap class - text-success
	$('#movie-display').removeClass()
	$('#movie-display').addClass('text-white')

	// clear(reset) all of the forms
	$('form').trigger('reset')

	console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
	// tell the user signup failed
	$('#error-message').text('failed ! try again')

	// remove existing classes and add a bootstrap class
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')

	// print the error
	console.error('error is', error)
}

const signInSuccess = function (responseData) {
	// add the 'user' we got back in our response's data to the 'store' object
	// so we can access the user's token later in api.js
	store.user = responseData.user
	console.log('store is', store)
	// tell the user signup is successful
	$('#movie-display').text('welcome back!')

	// remove existing classes and add a bootstrap class - text-success
	$('#movie-display').removeClass()
	$('#movie-display').addClass('text-white')

	// clear(reset) all of the forms
	$('form').trigger('reset')

	// after sign in, hide the section with the id 'before-sign-in'
	$('#before-sign-in').hide()
	// after sign in, show the 'new-game' button
	$('#new-game').show()
	// after we sign in, hide the grid until 'new game' button is clicked
	$('#after-sign-in').hide()


	console.log('responseData is', responseData)
}

const signInFailure = function (error) {
	// tell the user signin failed
	$('#error-message').text('failed! Please try again')

	// remove existing classes and add a bootstrap class
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')

	// print the error
	console.error('error is', error)
}

const signOutSuccess = function (id) {
	// tell the user change of password is successful
	$('#movie-display').text('see you next time!')

	// remove existing classes and add a bootstrap class - text-success
	$('#movie-display').removeClass()
	$('#movie-display').addClass('text-white')

	$('form').trigger('reset')

	$('#after-sign-in').hide()
	$('#before-sign-in').show()
}

const signOutFailure = function (error) {
	// tell the user signout failed
	$('#error-message').text('Failed to sign out.')

	// remove existing classes and add a bootstrap class
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')

	// print the error
	console.error('error is', error)
}

const newGameSuccess = function (id) {

	// show the grid
	$('#after-sign-in').show()
}


// when the game is over, reset the game by clicking the 'new game' button
const gameOver = function () {

	// clear(reset) all of the inputs
	$('.new-game').trigger('reset')
}

module.exports = {
	signUpSuccess,
	signUpFailure,
	signInSuccess,
    signInFailure,
	signOutSuccess,
    signOutFailure,
	newGameSuccess,
}

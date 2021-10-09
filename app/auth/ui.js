'use strict'
// require the store object, we will use it to share data between different files
const store = require('../store')

const signUpSuccess = function (responseData) {
	// tell the user signup is successful
	$('#movie-display').text('you have signed up! woohoo!')

	// remove existing classes and add a bootstrap class - text-success
	$('#movie-display').removeClass()
	$('#movie-display').addClass('text-success')

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
	$('#movie-display').addClass('text-success')

	// clear(reset) all of the forms
	$('form').trigger('reset')

	// after sign in, hide the section with the id 'before-sign-in'
	$('#before-sign-in').hide()
	// after we sign in, show the section with the id' after-sign-in'
	$('#after-sign-in').show()

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

const changePasswordSuccess = function (responseData) {
	// tell the user change of password is successful
	$('#movie-display').text('you have changed your password.')

	// remove existing classes and add a bootstrap class - text-success
	$('#movie-display').removeClass()
	$('#movie-display').addClass('text-success')

	// clear(reset) all of the forms
	$('form').trigger('reset')

	console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
	// tell the user signup failed
	$('#error-message').text('Failed to change password, please try again.')

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
	$('#movie-display').addClass('text-primary')

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

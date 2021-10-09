// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// require our authEvent handler functions
const authEvent = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
	// whenever the sign-up form is submitted, call the 'onSignUp' function
	$('#sign-up').on('submit', authEvent.onSignUp)
	$('#sign-in').on('submit', authEvent.onSignIn)
    $('#change-password').on('submit', authEvent.onChangePassword)
	$('#sign-out').on('click', authEvent.onSignOut)
})

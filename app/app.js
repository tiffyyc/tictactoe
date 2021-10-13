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
	$('#sign-out').on('click', authEvent.onSignOut)
	$('#new-game').on('click', authEvent.onNewGame)

})

// game logic starts here! i can do it!

// add a click handler for when a space on the game board is clicked
// check if the space in the board is empty
if ('.box' === null) {
	// click to display 
	(this.on('click'), function () {
		this.text('O')
	} )
}

//alternate player on click
let playerOne = "X"
let playerTwo = "O"
let space = [ ]


// start the player off as X
let currentPlayer = 'X'

// check if the current player is X
if(currentPlayer === 'X') {
  // flip to O's turn next time
  currentPlayer = 'O'
} else {
  // switch back to X if it is O's turn
  currentPlayer = 'X'
}

//player clicking on square to add their symbols
// $('#square-1').on('click', function (){
	// if (currentPlayer === 'X') {
		// $('#square-1').text('O')
	// }  else {
		// $('#square-1').text('X')
	// } 
// })

// document.getElementById('#square-1').innerHTML = 'X'
// } else {
// document.getElementById('#square-1').innerHTML = 'O'

let winner = [
	
]

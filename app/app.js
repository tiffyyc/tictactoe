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

	// game variables
	// start the player off as X
	let currentPlayer = "X"

	// set an empty string to indicate all boxes are empty from start
	let gameCellArray = ['', '', '', '', '', '', '', '', '']
	// set a boolean to check if game is active or over
	let gameActive = true

	//messages displayed during the game
	const winnerMessage = () => `Player ${currentPlayer} wins!`
	const tieGame = () => `It's a draw!`
	const alternateTurn = () => `It's ${currentPlayer}'s turn'`

	// alternate player display on page (above gameboard)
	function alternatePlayer() {
		// check if the current player is X
		if (currentPlayer === 'X') {
			// flip to O's turn
			currentPlayer = 'O'
		} else {
			// switch back to X if it is O's turn
			currentPlayer = 'X'
		}
		//print on the page
		$('.player').innerHTML = alternateTurn()
	}

	//when clicking on one of the boxes, show the symbol of the current player
	function onBoxClicked(clickedBox, boxIndex) {
		//if the empty gameCellArray contains data-cell-index of the box, the clicked box will print x or o
		gameCellArray[boxIndex] = currentPlayer
		// calling the UI to print x or o
		clickedBox.innerHTML = currentPlayer
	}

	// event listener
	// click on each box
	$('.box').on('click', (event) => {
		// set variable 'clickedBox' as the box you are going to click
		const clickedBox = event.target
		// set variable 'boxIndex' to get the index of the boxes in HTML
		const boxIndex = parseInt(
			clickedBox.getAttribute('data-cell-index')
			)
			/* // if the box is filled or the game ended
			if (gameCellArray[boxIndex] !== '' || !gameActive) {
				// player cannot click anymore
			
			} else */
			// otherwise, player can keep playing the game
			onBoxClicked(clickedBox, boxIndex)
	})

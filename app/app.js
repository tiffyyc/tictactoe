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
	$('.box').on('click', boxClicked)
	$('#replay').on('click', replayGame)
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
	const tieGame = () => `Tied Game!`
	const alternateTurn = () => `${currentPlayer}'s turn`

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
		$('.players').text(alternateTurn())
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
	function boxClicked(event) {
		// set variable 'clickedBox' as the box you are going to click
		const clickedBox = event.target
		// set variable 'boxIndex' to get the index of the boxes in HTML
		const boxIndex = parseInt(
			clickedBox.getAttribute('data-cell-index')
			)
				// if the box is filled or the game is not over
				if (gameCellArray[boxIndex] === boxIndex || gameActive) {
					onBoxClicked(clickedBox, boxIndex)
					checkWinner()
					if(gameActive){
						alternatePlayer()
					}
				}
			console.log('player clicked')

				// when all cell are clicked, player cannot click anymore
				// game is tied
				if (!gameCellArray.includes('')) {
					gameActive = false
					// player cannot click anymore
					$('.players').text(tieGame())
					$('#replay').show()
					$('#new-game').hide()
				}
	}

	//winning conditions
	// to determine winners, player has to have three of the 'x' or 'o' displayed
	// either horizontally, vertically or diagonally
	// using the index of gameCellArray
	 const winningConditions = [
		 //horizontally
		 [0,1,2],
		 [3,4,5],
		 [6,7,8],
		 //vertically
		 [0,3,6],
		 [1,4,7],
		 [2,5,8],
		 //diagonally
		 [0,4,8],
		 [2,4,6]
	 ]

	 // create a function to check if the conditions are met
	 function checkWinner () {
			let playerWon = false
			// create a for loop to loop all conditions
			for (let i = 0; i <= 7; i++) {
				//check if the clickedBox met the condition of the 'winningConditions' variable
				const checkWinCell = winningConditions[i]
				// if cell are empty, game is not over
				 if (
					gameCellArray[checkWinCell[0]] === '' ||
					gameCellArray[checkWinCell[1]] === '' ||
					gameCellArray[checkWinCell[2]] === ''
				) {
					// game continue
					continue
				} 
				// if cell 0 is clicked, check cell 0 equals cell 1 and cell 1 equals cell 2
				if (
					gameCellArray[checkWinCell[0]] === gameCellArray[checkWinCell[1]] &&
					gameCellArray[checkWinCell[1]] === gameCellArray[checkWinCell[2]]
				) {
					playerWon = true
					//display winning message and replay button
					$('.players').text(winnerMessage())
					$('#replay').show()
					$('#new-game').hide()
					// game is OVER
					gameActive = false
					// break the loop
					break
				}
				 }
				 
		}

		//reset game to beginning state
function replayGame () {
	gameActive = true
	currentPlayer = 'X'
	gameCellArray = ['', '', '', '', '', '', '', '', '']
	$('.box').html('')
 console.log('restart game')
}
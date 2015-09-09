$(document).ready(function () {

// function for the game
	// var playGame = (function (){

// define variables for player 1, player 2, winning combinations
var firstPlayer
var secondPlayer
var emptySpace
var turn = 0
// var whoWon = function(){
// 	var playerX = ;
// 	var playerO = ;
// 	var catsGame = ;

// upon refresh, ask player 1 to choose X or O
alert("Player 1 select X or O");

// create buttons with listeners for the players

// if player 1 chooses X, else chooses O
$("button.player").on("click", function (){
	if ($(this).hasClass("playerX")) {
		firstPlayer = "X"
		turn = 1
		alert("You chose X!");
	}

	else {
	firstPlayer = "O"
	turn = 1
	alert("You chose O!")
	}
	
});

// create buttons with listeners for the gameboard
// all buttons should be blank, want the button text to change to either X or O upon click
$("button.squares").on("click", function (){
	($(this).html("EMPTY"));
	// if current turn is player1, clicked button should return X
var gamePlay = (function(){
	if (turn % 2 === 0) {
		player2
	}

});


	// if current turn is player2, clicked button should return O
	// if player1 or player2 clicks a square that is already chosen
	// alert("Please choose an empty space")
	
});

// define variables for the winning combinations
// if the following square combinations: 
// [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] 
// have all X or all O, then alert appropriate winner

// define variable for tie game
// if no winning combinations, then alert cat's draw

// create a function to reset and start a new game


// #########  MISC  ########### 

// $("button.player").on("click", function (){
// 	if ($(this).hasClass("playerO")) {
// 	alert("You chose O!");
// 	};
// });

// depending upon choice of player 1, first box clicked will be X or O
// $("button.playerX").on("click", function(){
// 	firstPlayer = "X"
// 	turn = 1
// });

// $("button.playerO").on("click", function(){
// 	firstPlayer = "O"
// 	turn = 2
// });

// var game = (function () {
// 	var playerX = ();
// 	var playerO = ();

// var findWinner = function(){
// 	var waysToWin = [ [1 ,2 ,3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],
// }
// });


// call playGame function
	// playGame.play();
	
});
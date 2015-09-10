$(document).ready(function () {

// function for the game
	// var playGame = (function (){

// define variables for player 1, player 2, winning combinations
var firstPlayer
var secondPlayer
var emptySpace
var turn = 0
moveCount = 0

// upon refresh, ask player 1 to choose X or O
alert("Player 1 select X or O");

// create buttons with listeners for the players

// if player 1 chooses X, else chooses O

$("button.player").on("click", function (){
	if ($(this).hasClass("playerX")) {
		firstPlayer = "X";
		alert("You chose X! Pick an empty space to begin.");
	}

	else if ($(this).hasClass("playerO")){
		turn = 1;
		firstPlayer = "O";
	alert("You chose O! Pick an empty space to begin.")
	}

	else {

	}
		
});


// switch between players
$("button.squares").on("click", function (){
	turn ++
	if (turn % 2 === 0) {
		$(this).text("O");
		moveCount++;
	}

	else {
		$(this).text("X");
		moveCount++;
	}

	findWinner ();
});

// find the winner of the game and declare if it's X, O, or cat's draw
function findWinner() {

	if ($("#1").text()==="X" && $("#2").text()==="X" && $("#3").text()==="X"){
		alert("X is the winner!");
	}

	else if ($("#4").text()==="X" && $("#5").text()==="X" && $("#6").text()==="X") {
		alert("X is the winner!");
	}

	else if ($("#7").text()==="X" && $("#8").text()==="X" && $("#9").text()==="X") {
		alert("X is the winner!");
	}	

	else if ($("#1").text()==="X" && $("#4").text()==="X" && $("#7").text()==="X") {
		alert("X is the winner!");
	}
	
	else if ($("#2").text()==="X" && $("#5").text()==="X" && $("#8").text()==="X") {
		alert("X is the winner!");
	}

	else if ($("#3").text()==="X" && $("#6").text()==="X" && $("#9").text()==="X") {
		alert("X is the winner!");
	}
	
	else if ($("#1").text()==="X" && $("#5").text()==="X" && $("#9").text()==="X") {
		alert("X is the winner!");
	}

	else if ($("#3").text()==="X" && $("#5").text()==="X" && $("#7").text()==="X") {
		alert("X is the winner!");
	}
	
	else if ($("#1").text()==="O" && $("#2").text()==="O" && $("#3").text()==="O"){
		alert("O is the winner!");
	}

	else if ($("#4").text()==="O" && $("#5").text()==="O" && $("#6").text()==="O") {
		alert("O is the winner!");
	}

	else if ($("#7").text()==="O" && $("#8").text()==="O" && $("#9").text()==="O") {
		alert("O is the winner!");
	}	

	else if ($("#1").text()==="O" && $("#4").text()==="O" && $("#7").text()==="O") {
		alert("O is the winner!");
	}
	
	else if ($("#2").text()==="O" && $("#5").text()==="O" && $("#8").text()==="O") {
		alert("O is the winner!");
	}

	else if ($("#3").text()==="O" && $("#6").text()==="O" && $("#9").text()==="O") {
		alert("O is the winner!");
	}
	
	else if ($("#1").text()==="O" && $("#5").text()==="O" && $("#9").text()==="O") {
		alert("O is the winner!");
	}

	else if ($("#3").text()==="O" && $("#5").text()==="O" && $("#7").text()==="O") {
		alert("O is the winner!");
	}
// if no winning combinations, then alert cat's draw
	else if (moveCount >= 9) {
		alert("It's a cat's draw!")
	}
	
};


// make sure player cannot click on a square that has been chosen

// create a function to reset and start a new game
	$("button.reset").click(function() {
	location.reload();
	});


});
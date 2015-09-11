$(document).ready(function () {

// define variables for player 1, player 2, turn variable to swith between, and move counter
var firstPlayer
var secondPlayer
var turn = 0
moveCount = 0

// create buttons with listeners for the players
// player 1 can choose X or O
$("button.player").on("click", function (){
	if ($(this).hasClass("playerX")) {
		firstPlayer = "X";
		$(".welcome").text("You chose X. Pick any space to begin!");
	}

	else if ($(this).hasClass("playerO")){
		turn = 1;
		firstPlayer = "O";
		$(".welcome").text("You chose O. Pick any space to begin!");
	}	
});

// switch between players using turn and modulus
// make sure player cannot click on a square that has been chosen using .one
// find a winner using a move count and calling function inside the turn function
$("button.squares").one("click", function (){
	turn ++
	$(".welcome").text("");
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

// find the winner of the game and declare if it's X, O, or cat's game
function findWinner() {

	if ($("#1").text()==="X" && $("#2").text()==="X" && $("#3").text()==="X"){
		$(".welcome").text("X is the winner!");
	}

	else if ($("#4").text()==="X" && $("#5").text()==="X" && $("#6").text()==="X") {
		$(".welcome").text("X is the winner!");
	}

	else if ($("#7").text()==="X" && $("#8").text()==="X" && $("#9").text()==="X") {
		$(".welcome").text("X is the winner!");
	}	

	else if ($("#1").text()==="X" && $("#4").text()==="X" && $("#7").text()==="X") {
		$(".welcome").text("X is the winner!");
	}
	
	else if ($("#2").text()==="X" && $("#5").text()==="X" && $("#8").text()==="X") {
		$(".welcome").text("X is the winner!");
	}

	else if ($("#3").text()==="X" && $("#6").text()==="X" && $("#9").text()==="X") {
		$(".welcome").text("X is the winner!");
	}
	
	else if ($("#1").text()==="X" && $("#5").text()==="X" && $("#9").text()==="X") {
		$(".welcome").text("X is the winner!");
	}

	else if ($("#3").text()==="X" && $("#5").text()==="X" && $("#7").text()==="X") {
		$(".welcome").text("X is the winner!");
	}
	
	else if ($("#1").text()==="O" && $("#2").text()==="O" && $("#3").text()==="O"){
		$(".welcome").text("O is the winner!");
	}

	else if ($("#4").text()==="O" && $("#5").text()==="O" && $("#6").text()==="O") {
		$(".welcome").text("O is the winner!");
	}

	else if ($("#7").text()==="O" && $("#8").text()==="O" && $("#9").text()==="O") {
		$(".welcome").text("O is the winner!");
	}	

	else if ($("#1").text()==="O" && $("#4").text()==="O" && $("#7").text()==="O") {
		$(".welcome").text("O is the winner!");
	}
	
	else if ($("#2").text()==="O" && $("#5").text()==="O" && $("#8").text()==="O") {
		$(".welcome").text("O is the winner!");
	}

	else if ($("#3").text()==="O" && $("#6").text()==="O" && $("#9").text()==="O") {
		$(".welcome").text("O is the winner!");
	}
	
	else if ($("#1").text()==="O" && $("#5").text()==="O" && $("#9").text()==="O") {
		$(".welcome").text("O is the winner!");
	}

	else if ($("#3").text()==="O" && $("#5").text()==="O" && $("#7").text()==="O") {
		$(".welcome").text("O is the winner!");
	}
// if no winning combinations, use move counter, counting to 9, then alert cat's game 
	else if (moveCount >= 9) {
		$(".welcome").text("It's a cat's game!");
	}
	
};

// create a function to reset and start a new game
	$("button.reset").click(function() {
	location.reload();
	});


});
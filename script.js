let userScore = 0;
let botScore = 0;

function playGame(){
	function getBotChoice(){
		const randomVal = Math.floor(Math.random()*3) + 1;
		let selection;
		switch (randomVal){
			case 1:
				selection = "rock";
				break;
			case 2:
				selection = "paper";
				break;
			case 3: 
				selection = "scissors";
				break;
		}
		return selection;
	}

	function getUserChoice(){
		const userInput = prompt("Enter a Choice.");
		const selection = userInput.toLowerCase();
		
		return selection;
	}

	function playRound(botSelection, userSelection){

		if(botSelection === "rock" && userSelection === "scissors"){
			console.log("You Lose the round!, Rock beats Scissors.");
			botScore++;
		}
		else if(botSelection === "paper" && userSelection === "rock"){
			console.log("You Lose the round!, Paper beats Rock.");
			botScore++;
		}
		else if(botSelection === "scissors" && userSelection === "paper"){
			console.log("You Lose the round!, Scissors beats Paper.");
			botScore++;
		}
		else if(botSelection === "scissors" && userSelection === "rock"){
			console.log("You Won the round!, Rock beats Scissors.");
			userScore++;
		}
		else if(botSelection === "rock" && userSelection === "paper"){
			console.log("You Won the round!, Paper beats Rock.");
			userScore++;
		}
		else if(botSelection === "paper" && userSelection === "scissors"){
			console.log("You Won the round!, Scissors beats Paper.");
			userScore++;
		}
		else if(botSelection === userSelection){
			console.log("This round is a Tie!");
		}

		console.log("User's Score : " + userScore);
		console.log("Bot's Score : " + botScore);


	}

	const botChoice = getBotChoice();
	const userChoice = getUserChoice();

	playRound(botChoice, userChoice);
}

for (let i = 0; i < 5; i ++){
	playGame();
}

if (userScore > botScore){
	console.log("Congratulations!, You won the Match.");
}
else if(userScore < botScore){
	console.log("You lose the Match, Bette luck Next time.");
}
else if(userScore === botScore){
	console.log("Its a Draw Match.");
}

console.log("Final Scores : \nUser's Score : "+userScore+"\nBot's Score : "+botScore);
console.log("Refresh to Play Again...");


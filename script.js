let userScore = 0;
let botScore = 0;

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

	if(botSelection == "rock" && userSelection == "scissors"){
		console.log("You Lose the round!, Rock beats Scissors.");
		botScore = botScore + 1;
	}
	else if(botSelection == "paper" && userSelection == "rock"){
		console.log("You Lose the round!, Paper beats Rock.");
		botScore = botScore + 1;
	}
	else if(botSelection == "scissors" && userSelection == "paper"){
		console.log("You Lose the round!, Scissors beats Paper.");
		botScore = botScore + 1;
	}
	else if(botSelection == "scissors" && userSelection == "rock"){
		console.log("You Won the round!, Rock beats Scissors.");
		userScore = userScore + 1;
	}
	else if(botSelection == "rock" && userSelection == "paper"){
		console.log("You Won the round!, Paper beats Rock.");
		userScore = userScore + 1;
	}
	else if(botSelection == "paper" && userSelection == "scissors"){
		console.log("You Won the round!, Scissors beats Paper.");
		userScore = userScore + 1;
	}
	else if(botSelection == userSelection){
		console.log("This round is a Tie!");
	}

	console.log("User's Score : " + userScore);
	console.log("Bot's Score : " + botScore);


}

const botChoice = getBotChoice();
const userChoice = getUserChoice();

playRound(botChoice, userChoice);



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

const botChoice = getBotChoice();




	let layerScore = 1
  let computerScore = 1;  
		
	// function defining the computers choices and how to randomly generate a choice. 
	function computerPlay() {    
		let choices = Math.ceil(Math.random(choices)*3);       
			if(choices==1) {         
				return 'rock';
			} else if(choices==2) {
				return 'paper';
			} else { 
				return 'scissors';        
			}     
		}
    
	//function defining a single round of Rock, Paper, Scissors - who wins and who
	function playRound(playerSelection, computerSelection) {
        	if (playerSelection === computerSelection)
            		{
			alert("You have tied with the computer!"); 
            		return "You have tied with the computer!";
            		}

  		else if (
			(playerSelection === 'rock' && computerSelection=== 'paper')||
	        	(playerSelection === 'paper' && computerSelection=== 'scissors')||
			(playerSelection === 'scissors' && computerSelection=== 'rock'))
			{
            		alert("You Lose! Computer Wins!");
                	return "You Lose! Computer Wins!" + " The Computer's score is " + computerScore++;
		 	} 
		else (
			(playerSelection === 'rock' && computerSelection === 'scissors') ||
			(playerSelection === 'paper' && computerSelection === 'rock') ||
			(playerSelection === 'scissors' && computerSelection === 'paper'))	
            		{ 
			alert("You Win! Computer looses!");
        		return "You Win! Computer looses!" + " The Player's score is " + playerScore++;
			}	
		}

	//function to run a play a round of Rock, Paper, Scissors using the above perameters
	function game() {
		let playerSelection = prompt("enter selection: rock, paper, or scissors", "").toLowerCase(); 
		let computerSelection = computerPlay();	
			while 
				(playerSelection == "" || playerSelection == null || playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" ) 
				{
				playerSelection = prompt("enter selection: rock, paper, or scissors", "").toLowerCase(); 
				}		 						 
				return playRound(playerSelection, computerPlay());
			}
	
	//loop the game 5 times
	for(let i=0;i<5;i++) {
		console.log(game());
		}

	//function to declare the score at the end of the game
	function score() {
		if (playerScore > computerScore) {
			alert("the Player Wins with a score of " + playerScore++ + " to the Computer's score of " + computerScore++);
		} else if (playerScore < computerScore) { 
			alert("the Player loses with a score of " + playerScore++ + " to the Computer's score of " + computerScore++);
		} else {
			alert("Its a tie " + playerScore++ + " to " + computerScore++);
		}
	}	
	score();
	

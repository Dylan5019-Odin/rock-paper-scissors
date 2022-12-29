//Choices that the computer can select from
const choices = ['rock', 'paper', 'scissors'];

  const beatenBy = {
    "scissors": "paper",
    "paper": "rock",
    "rock" : "scissors",
  };

// Function that generates a random choice from the choices array
const getComputerChoice = () => {
   return choices[Math.floor(Math.random() * choices.length)];
};


    
//Function to promnt the user for input
const playRound = (playerChoice, computerChoice) => { 
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
        return "Draw!"
    } else if (beatenBy[playerChoice] === computerChoice) {
        return `You Win! ${playerChoice} beats ${computerChoice}!`
    } else {
        return `You lose! ${playerChoice} losses to ${computerChoice}!`
    }
  
}





//Function to play 5 rounds and track the score
const Game = () => {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
      //Get user input, and generate a random choice for the computer
      let computerChoice = getComputerChoice();
      let playerChoice = prompt("Enter your choice");
      
      let result = playRound(playerChoice, computerChoice);

        if (result === `You Win! ${playerChoice} beats ${computerChoice}!`){
            playerScore++
        } else if (result === `You lose! ${playerChoice} losses to ${computerChoice}!`){
            computerScore++
        }

        console.log(result);

    }

    console.log(`Player Won: ${playerScore} Times\nComputer Won: ${computerScore} Times\nDrawn Games: ${5-(playerScore + computerScore)}`);


};

Game();
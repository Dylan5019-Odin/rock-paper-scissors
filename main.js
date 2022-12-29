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



//Get user input, and generate a random choice for the computer
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Enter your choice");


// play a round
console.log(playRound(playerChoice, computerChoice));
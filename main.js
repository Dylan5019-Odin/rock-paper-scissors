//Choices that the computer can select from
const choices = ["rock", "paper", "scissors"];

const beatenBy = {
  scissors: "paper",
  paper: "rock",
  rock: "scissors",
};

// Variables for player choice, and score
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// Function that generates a random choice from the choices array
const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

//Function to promnt the user for input
const playRound = (playerChoice, computerChoice) => {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === computerChoice) {
    return "Draw!";
  } else if (beatenBy[playerChoice] === computerChoice) {
    return `You Win! ${playerChoice} beats ${computerChoice}!`;
  } else {
    return `You lose! ${playerChoice} losses to ${computerChoice}!`;
  }
};

//Function to play rounds and track the score
const Game = () => {
  //Generate a random choice for the computer
  let computerChoice = getComputerChoice();

  let result = playRound(playerChoice, computerChoice);

  if (result === `You Win! ${playerChoice} beats ${computerChoice}!`) {
    playerScore++;
  } else if (
    result === `You lose! ${playerChoice} losses to ${computerChoice}!`
  ) {
    computerScore++;
  } else {
    draws++;
  }

  document.querySelector(".result").innerHTML = result;

  document.querySelector(".playerScore").innerHTML = playerScore;
  document.querySelector(".computerScore").innerHTML = computerScore;
  document.querySelector(".draws").innerHTML = draws;

  if (playerScore == 5 || computerScore == 5) {
    playButton.disabled = true;
    if (playerScore > computerScore) {
      document.querySelector(".winner").innerHTML = "Player Wins!";
    } else if (playerScore < computerScore) {
      document.querySelector(".winner").innerHTML = "Computer Wins!";
    }
  }
};

//Accessing Buttons for the game

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const playButton = document.querySelector(".play");

// Event Listeners && Changing Style to show the selected button
playButton.addEventListener("click", Game);

rockButton.addEventListener("click", (e) => {
  rockButton.style = "background: green";
  scissorsButton.style = "background: ";
  paperButton.style = "background: ";

  playerChoice = "rock";
});

paperButton.addEventListener("click", (e) => {
  rockButton.style = "background: ";
  scissorsButton.style = "background: ";
  paperButton.style = "background: green";

  playerChoice = "paper";
});

scissorsButton.addEventListener("click", (e) => {
  rockButton.style = "background: ";
  scissorsButton.style = "background: green";
  paperButton.style = "background: ";
  playerChoice = "scissors";
});

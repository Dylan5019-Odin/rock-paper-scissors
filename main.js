
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
   return (choice = choices[Math.floor(Math.random() * choices.length)]);
};

console.log(getComputerChoice());




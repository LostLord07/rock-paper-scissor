let computerChoice;
let userChoice;
let result = document.getElementById('result');
let computerChoiceDisplay = document.getElementById('computerChoice')
let userChoiceDisplay = document.getElementById('userChoice')
const choices = document.querySelectorAll("button");
console.log(choices);

choices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    getResults();
  })
);

let generateComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    computerChoice = "rock";
    computerChoiceDisplay.innerHTML = 'rock'
  } else if (randomNumber == 2) {
    computerChoice = "paper";
    computerChoiceDisplay.innerHTML = 'paper'
  } else {
    computerChoice = "scissor";
    computerChoiceDisplay.innerHTML = 'scissor'
  }
};

let getResults = () => {
    if (userChoice === computerChoice){
        result.innerHTML = ' It\'s a draw'
    }
   else if (computerChoice === 'rock'){
         if (userChoice === 'paper'){
            result.innerHTML= 'You won!!'
         }else{
            result.innerHTML = 'You lost!!'
         }
    }else if (computerChoice === 'paper'){
        if (userChoice === 'scissor'){
            result.innerHTML= 'You won!!'
         }else{
            result.innerHTML = 'You lost!!'
         }
    }else if (computerChoice === 'scissor'){
        if (userChoice === 'rock'){
            result.innerHTML= 'You won!!'
         }else{
            result.innerHTML = 'You lost!!'
         }
    }
};

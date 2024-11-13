const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scizors_button = document.getElementById('scizors');
const start_button = document.getElementById('start');
const result_field = document.getElementById('result');
const human_score_field = document.getElementById('human_score');
const computer_score_field = document.getElementById('computer_score');
const human_choice_field = document.getElementById('human_choice');
const computer_choice_field = document.getElementById('computer_choice');


let button_value = 'no_selection';
let human_score = 0;
let computer_score = 0

start_button.addEventListener('click',() =>{

    computerChoice = getComputerChoice();
    human_choice_field.textContent = button_value;
    computer_choice_field.textContent = computerChoice;

    let winner_value = playRound(button_value, computerChoice);
    if (winner_value === 0) {
        result_field.value = 'Computer won';
        computer_score ++;
    }
    else if (winner_value === 1) {
        result_field.value = 'Player won';
        human_score ++;
    }
    else{
        result_field.value = 'Draw';
    }    
    computer_score_field.textContent = computer_score;
    human_score_field.textContent = human_score;

})

rock_button.addEventListener('click',() => {
    button_value = 0;
    console.log('player choice: ',button_value);
})

paper_button.addEventListener('click',() => {
    button_value = 1;
    console.log('player choice: ',button_value);
})

scizors_button.addEventListener('click',() => {
    button_value = 2;
    console.log('player choice: ',button_value);
})

console.log('button value:', button_value);

let humanChoice = button_value;
let computerChoice = getComputerChoice();





function playRound(humanChoice, computerChoice) {
    if (humanChoice === 0){
        if (computerChoice === 0){
            return  2;
        }
        else if (computerChoice === 1){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if (humanChoice === 1){
        if (computerChoice === 0){
            return 1;
        }
        else if (computerChoice === 1){
            return 2;
        }
        else{
            return 0;
        }
    }
    else if (humanChoice ===2){
        if (computerChoice === 0){
            return 0;
        }
        else if(computerChoice === 1){
            return 1;
        }
        else{
            return 0;
        }
    }
}
  

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// FOR FUN
// function getComputerChoice() {
//     var notRandomNumbers = [0, 0, 0, 0, 0, 0, 0, 1, 1, 2];
//     var idx = Math.floor(Math.random() * notRandomNumbers.length);
//     return notRandomNumbers[idx];
// }

  

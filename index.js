// User Interaction:
//  Prompt User about game and rules
//  User enters choice [rock, paper, scissors]
//  User gets result for current round
//  Repeat rounds till best out of five wins

const choice = ["rock", "paper", "scissors"]; 
let score = [0, 0];


// A function that returns rock, paper. or scissors.
function getComputerChoice() {
    // generateChoice will be randomly 0, 1, 2 and it will be an index for choice
    let generateChoice = Math.floor(Math.random() * 3);

    return choice[generateChoice];
}

// A function that plays a single round given two choice items
function playRound(playerSelection, computerSelection) {
    updateLog(playerSelection, computerSelection);
    let result;
    // Same selection; draw case
    if (playerSelection === computerSelection) {
        result = "You both played " + playerSelection + " , this round is a draw";
    } else {
        let doesMyHandBeatsYours = myHandBeatsYours(playerSelection, computerSelection);
        if (doesMyHandBeatsYours) {
            result = "You played " + playerSelection + " and the computer played " + computerSelection + ". You win";
        } else {
            result = "You played " + playerSelection + " and the computer played " + computerSelection + ". You lose";
        }
    }
    return result;
}

// A helper function that checks wheather a choice beats the other
//  Does not check draws
function myHandBeatsYours(choice1, choice2) {
    // Check choice 1 in all three cases
    let result = 1;
    if (choice1 === choice[0] && choice2 === choice[1]) {
        result = 0;
    } else if (choice1 === choice[1] && choice2 === choice[2]) {
        result = 0;
    } else if (choice1 === choice[2] && choice2 === choice[0]) {
        result = 0;
    }

    return result;
}







// Start of UI interaction
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Logs
let logs = {}


rockButton.addEventListener('click', (event) => {
    console.log("Player Played Rock");
    let result = playRound(choice[0], getComputerChoice());

    console.log(result);
});

paperButton.addEventListener('click', () => {
    console.log("Player Played Paper");
    let result = playRound(choice[1], getComputerChoice());

    console.log(result); 
});

scissorsButton.addEventListener('click', () => {
    console.log("Player Played Scissors");
    let result = playRound(choice[2], getComputerChoice());

    console.log(result);
});

// EveryTime a round is played log the result
let updateLog = (playerSelection, ComputerSelection) => {

};


let logStr = JSON.stringify(logs);
console.log("Log: " + logStr);
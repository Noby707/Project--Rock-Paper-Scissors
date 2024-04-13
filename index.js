// User Interaction:
//  Prompt User about game and rules
//  User enters choice [rock, paper, scissors]
//  User gets result for current round
//  Repeat rounds till best out of five wins

const CHOICE = ["rock", "paper", "scissors"]; 
let score = [0, 0];


// A function that returns rock, paper. or scissors.
function getComputerChoice() {
    // generateChoice will be randomly 0, 1, 2 and it will be an index for choice
    let generateChoice = Math.floor(Math.random() * 3);

    return CHOICE[generateChoice];
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
            score[0]++;
        } else {
            result = "You played " + playerSelection + " and the computer played " + computerSelection + ". You lose";
            score[1]++;
        }
    }
    return result;
}

// A helper function that checks wheather a choice beats the other
//  Does not check draws
function myHandBeatsYours(choice1, choice2) {
    // Check choice 1 in all three cases
    let result = 1;
    if (choice1 === CHOICE[0] && choice2 === CHOICE[1]) {
        result = 0;
    } else if (choice1 === CHOICE[1] && choice2 === CHOICE[2]) {
        result = 0;
    } else if (choice1 === CHOICE[2] && choice2 === CHOICE[0]) {
        result = 0;
    }

    return result;
}







// Start of UI interaction
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

let scoreTag = document.getElementById("score");
let logsDiv = document.getElementById("log");

// Logs
let logs = {}

// Reset button
const restartTag = document.getElementsByClassName("restart")[0];
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

// rockButton.addEventListener('click', (event) => {
//     console.log("Player Played Rock");
//     let result = playRound(CHOICE[0], getComputerChoice());

//     // console.log(result);

//     updateScore();
//     displayLogs();
//     checkGameStatus();
// });



let buttonEventHandler = (event) => {
    // console.log(event.srcElement.idName);
    let idName = event.srcElement.id;
    let choice = idName;
    console.log("Player Played " + idName);
    let result = playRound(choice, getComputerChoice());

    // console.log(result);

    updateScore();
    displayLogs();
    checkGameStatus();
};

let addButtonsEventListeners = () => {
    rockButton.addEventListener('click', buttonEventHandler);
    paperButton.addEventListener('click', buttonEventHandler);
    scissorsButton.addEventListener('click', buttonEventHandler);
};

addButtonsEventListeners();



// EveryTime a round is played log the result
let updateLog = (playerSelection, computerSelection) => {
    let length = Object.keys(logs).length + 1;
    let myKey = "round " + length;
    logs[myKey] = [playerSelection, computerSelection];
};

let updateScore = () => {
    scoreTag.textContent = `Score: ${score[0]}, ${score[1]}`;
};

let displayLogs = () => {
    // let logStr = JSON.stringify(logs);
    // logsDiv.textContent = logStr;

    // logStr should display in order the rounds
    //  round 1: rock, scissor
    let logStr = "";
    let keys = Object.keys(logs);
    // console.log(keys);
    
    let pTag = document.createElement("p");

    for(let round of keys) {
        logStr = round + ": ";
        logStr += logs[round][0] + ", " + logs[round][1];
        pTag.textContent = logStr;
    }

    logsDiv.appendChild(pTag);
};

let checkGameStatus = () => {
    // Change Condition to a button pressed
    // Disable all buttons and display game winner
    if(logs["round 5"]) {
        addResetButton();
        disablePlayButtons();

        // Display the winner
        displayWinner();
    }
};

let reset = () => {
    // Reset score
    score = [0,0];
    updateScore();
    // Clear logs
    logs = {};
    updateLog();
    // Clear Score 
    while (logsDiv.firstChild) {
        logsDiv.removeChild(logsDiv.firstChild);
    }

    // Remove reset Button
    removeResetButton();

    // Add Event Listener to buttons again
    addButtonsEventListeners();
}

let addResetButton = () => {
    restartTag.appendChild(resetButton);
};

let removeResetButton = () => {
    restartTag.removeChild(resetButton);
}

let disablePlayButtons = () => {
    rockButton.removeEventListener('click', buttonEventHandler);
    paperButton.removeEventListener('click', buttonEventHandler);
    scissorsButton.removeEventListener('click', buttonEventHandler);
}

let displayWinner = () => {
    let dispalyMessage = `Score is ${score[0]}, ${score[1]}, `;
    
    if (score[0] == score[1]) {
        dispalyMessage += `it's a draw`;
    } else if (score[0] > score[1]) {
        displayMessage = `player wins!`;
    } else if (score[0] < score[1]) {
        displayMessage = `computer wins!`;
    }

    alert(displayMessage);
}


resetButton.addEventListener('click', reset);
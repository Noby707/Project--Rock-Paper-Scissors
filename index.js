// User Interaction:
//  Prompt User about game and rules
//  User enters choice [rock, paper, scissors]
//  User gets result for current round
//  Repeat rounds till best out of five wins

const choice = ["rock", "paper", "scissors"]; 

// A function that returns rock, paper. or scissors.
function getComputerChoice() {
    // generateChoice will be randomly 0, 1, 2 and it will be an index for choice
    let generateChoice = Math.floor(Math.random() * 3);

    return choice[generateChoice];
}


// Tests that values will always be between 0, 1, and 2
function getComputerChoiceTester() {
    for(let i = 0; i < 100; i++) {
        console.log(getComputerChoice());
    }
}

// A function that plays a single round given two choice items
function playRound(playerSelection, computerSelection) {
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

    console.log(choice1, choice2);

    return result;
}


// A game function to start the game

function game() {
    // Prompt User
    console.log("Hello Game!");
    console.log("This will be a game of rock, paper scissors. Best out of 5 rounds wins!");
    
    // Get playerSelection and Computer Selectoin
    let playerSelection;
    let computerSelection;
    let score = [0, 0];

    // Play five rounds
    for (let i = 0; i < 5; i++) {
        // Get Player and computer Selection
        playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
        computerSelection = getComputerChoice();

        // Get result then update the score
        let result = playRound(playerSelection, computerSelection);
        score = updateScore(score, result);

        // Show result and score
        console.log(result);
        showScore(score);
    }
    
    // Report Winner
    reportWinner(score);
}


// A helper function to show the winner
function reportWinner(score) {
    let report;
    // Check if player score is larger than computer score
    if (score[0] > score[1]) {
        report = "Player wins!";
    }
    // Check if the scores are a draw
    else if (score[0] == score[1]) {
        report = "Tis' a draw!";
    }
    // Check if the computer score is larger than the player score
    else {
        report = "Computer wins";
    }

    console.log(report);
}

// A helper function to update the score
function updateScore(score, result) {
    // Check two cases, if player won or if player lost
    let resultChar = result.charAt(result.length - 1);
    if (resultChar === 'n') {
        score[0]++;
    } else if (resultChar === 'e') {
        score[1]++;
    }

    return score;
}


// A helper function to show score
function showScore(score) {
    let text = "Score is " + score[0] + ", " + score[1] + ".";
    console.log(text);
}

// Start the game
game();
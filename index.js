// User Interaction:
//  Prompt User about game and rules
//  User enters choice [rock, paper, scissors]
//  User gets result for current round
//  Repeat rounds till best out of three wins

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






console.log("Hello Game!");
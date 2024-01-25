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







console.log("Hello Game!");
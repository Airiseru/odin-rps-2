function getComputerChoice() {
    // Function to make the computer randomly choose between Rock, Paper, or Scissors
    let compChoice = Math.floor(Math.random() * 3);
    
    switch(compChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerMove, compMove) {
    // Function to determine who wins a round
    let editedPlayerMove = playerMove.toLowerCase();

    switch(editedPlayerMove) {
        case "rock":
            return compMove == "Rock" ? 0: compMove == "Paper" ? -1 : 1;
        case "paper":
            return compMove == "Paper" ? 0: compMove == "Scissors" ? -1 : 1;
        case "scissors":
            return compMove == "Scissors" ? 0: compMove == "Rock" ? -1 : 1;
    }
}

function declareWinner(playerPoints, compPoints) {
    return (playerPoints > compPoints) ? "You won the game!" : (compPoints > playerPoints) ? "You lost the game!" : "It's a draw!";
}

function game() {
    let playerPoints = 0;
    let compPoints = 0;
    
    for (let roundNum = 1; roundNum <= 5; roundNum++) {
        let playerOption = prompt("RPS?").toLowerCase();
        let titledPlayerOption = playerOption.replace(playerOption[0], playerOption[0].toUpperCase());
        console.log(titledPlayerOption);
        let compOption = getComputerChoice();
        let winner = playRound(playerOption, compOption);
        
        if(winner == 1) {
            console.log(`You Win! ${titledPlayerOption} beats ${compOption}`);
            playerPoints += 1;
        }
        else if(winner == -1){
            console.log(`You Lose! ${compOption} beats ${titledPlayerOption}`);
            compPoints += 1;
        }
        else {
            console.log("It's a Draw!");
        }
    }

    console.log(declareWinner(playerPoints, compPoints));
}

game();

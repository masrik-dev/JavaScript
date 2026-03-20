// Rock, Paper, Scissors: Refactored with While Loop and an Array
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    while (playGame) {
        const playerChoice = prompt("Please enter rock, paper, or scissorr:");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors"
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                const result = 
                    playerOne === computer
                        ? "Tie game!"
                        : playerOne === "rock" && computer === "paper"
                        ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer Wins!`
            }
        }
    }
}
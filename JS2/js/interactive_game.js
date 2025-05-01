// First Interactive Game
console.log("Interactive Game")

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let player5 = playerChoice.trim().toLowerCase();
        if (player5 === "rock" || player5 === "paper" || player5 === "scissors") {
            let computer5Choice = Math.floor(Math.random() * 3 + 1)
            let computer5 = computer5Choice === 1 ? "rock"
                : computer5Choice === 2 ? "paper"
                : "scissors";
            let result5 =
                player5 === computer5
                    ? "Tie game!"
                    : player5 === "rock" && computer5 === "paper"
                    ? `player5: ${player5}\nComputer: ${computer5} \nComputer wins!`
                    : player5 === "paper" && computer5 === "scissors"
                    ? `player5: ${player5}\nComputer: ${computer5} \nComputer wins!`
                    : player5 === "scissors" && computer5 === "rock"
                    ? `player5: ${player5}\nComputer: ${computer5} \nComputer wins!`
                    : `player5: ${player5}\nComputer: ${computer5} \nPlayer wins!`
                alert(result5);
                let playAgain = confirm("Play Again?");
                playAgain ? location.reload() : alert("Ok, thanks for playing.");
        } else {
            alert("You didn't enter rock, paper, or scissors.")
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.")
    }
} else {
    alert("Ok, maybe next time.");
}
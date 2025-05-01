// Strings
const myVariable = "Mathematics";

// The length property
console.log(myVariable.length);

// String Methods
console.log(myVariable.charAt(6));

console.log(myVariable.indexOf("Mat"));

console.log(myVariable.slice(5, 8));

console.log(myVariable.split(""));

// End - String Methods

// Numbers
const myNumber = 42;

const myFloat = 42.01;

const myString = "42";
const myString_2 = "402.357ecf";

console.log(myNumber == myString);

console.log(myString + 3);

console.log(Number(myString) === myNumber)

console.log(Number(true));
console.log(Number(false));

//The Number.isInteger() method determines whether the passed value is an integer.

console.log(Number.isInteger(myString));
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));

//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN. Even it can fetch number from a string.

console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString_2));

//The toString() method returns a string representing the number.

/* console.log(Number.toString(myString));
console.log(Number.toString(myString_2)); */

console.log(Number.parseFloat("4.324abc").toFixed(2).toString());

//Nan is an acronym for Not a Number.
//The Number.isNaN() method determines whether the passed value is NaN and its type is Number.

console.log(Number.isNaN("MH"));

//The global isNaN() function determines whether a value is NaN or not
//Remember NaN = Not a Number

console.log(isNaN(52));
console.log(isNaN("MH"));

// -----------------------------------
// Math Object

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.4));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));

console.log(Math.pow(5, 2));
console.log(Math.min(2, 0.5, 9));

// For generating a random number from 0 to 1
console.log(Math.random());

// For generating a random number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


// Choose `Math.floor()` , Not `Math.ceil` for generating a random number from 1 to 10.

// Because `Math.random()` returns a range from 0 to 1 that includes 0 but not 1.

// `Math.ceil(Math.random()*10)` has a chance of resulting in zero.
// `Math.floor((Math.random()*10)+1)` is the way to go!

console.log("End Math Object");

//----------------------------
// Code challenge

console.log(typeof"Marvik");
console.log("Marvik".charAt());

console.log("check")

console.log(Math.floor(Math.random() * 4 + 1));
console.log(Math.floor(Math.random() * 4 + 1));
console.log(Math.floor(Math.random() * 4 + 1));

console.log("Return a random letter from a name: 'Marvik'.");

// Let's write a code that will return a random letter from a name:

const anyName = "Marvik";
console.log("Marvik".charAt(Math.floor(Math.random() * anyName.length)));
console.log("Marvik".charAt(Math.floor(Math.random() * anyName.length)));
console.log("Marvik".charAt(Math.floor(Math.random() * anyName.length)));

console.log("End");

// Conditionals: If statements
let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} and crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}.`;
} else {
    reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);

// New example
let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    // Nested if statement
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}
console.log(grade);

// Decision tree!
let playerOne = "rock";
let computer = "scissors";
let result;
if (playerOne === computer) {
    result = "The game is tie!";
} else if (playerOne === "rock") {
    if (computer === "paper"){
        result = "Computer wins!";
    } else {
        result = "playerOne wins!";
    }
} else if (playerOne === "paper") {
    if (computer === "scissors"){
        result = "Computer wins!";
    } else {
        result = "playerOne wins!";
    }
} else if (playerOne === "scissors") {
    if (computer === "rock"){
        result = "Computer wins!";
    } else {
        result = "playerOne wins!";
    }
}

console.log(result);

// End of If statements

// Switch Statements
console.log("Switch Statements");

switch (2) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
}

switch (Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
}

// rock, paper, scissors game using switch

let playerTwo = "scissors";
let computerTwo = "paper";

switch (playerTwo) {
    case computerTwo:
        console.log("Tie game!");
        break;
    case "rock":
        if (computerTwo === "paper") {
            console.log("computerTwo wins!");
        } else {
            console.log("playerTwo wins!");
        }
        break;
    case "paper":
        if (computerTwo === "scissors") {
            console.log("computerTwo wins!");
        } else {
            console.log("playerTwo wins!");
        }
        break;
    default:
        if (computerTwo === "rock") {
            console.log("computerTwo wins!");
        } else {
            console.log("playerTwo wins!")
        }
}

// Conditionals: Ternary Operator

console.log("Ternary Operators")

//syntax
//condition ? ifTrue : ifFalse

let soup2 = "Chicken Noodle Soup";
let response = soup2 ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);

let soup3;
let response2 = soup3 ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response2);

let soup4 = "Chicken Noodle soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned 
    ? "Sorry, no soup for you!" 
    : soup4 
    ? `Yes, we have ${soup4} today.` 
    : "Sorry, no soup today.";
console.log(soupAccess);


let testScore2 = 79;
let myGrade = testScore2 > 89 
    ? "A" 
    : testScore2 > 79
    ? "B"
    : testScore2 > 69
    ? "C"
    : testScore2 > 59
    ? "D"
    : "F";
console.log(`My test grade is a ${myGrade}.`);

// rock, paper, scissors game

let player3 = "rock";
let computer3 = "paper";
let result2 =
    player3 === computer3
        ? "Tie game!"
        : player3 === "rock" && computer === "paper"
        ? "Computer wins!"
        : player3 === "paper" && computer === "scissors"
        ? "Computer wins!"
        : player3 === "scissors" && computer === "rock"
        ? "Computer wins!"
        : "player3 wins!";
console.log(result2);

// End of Ternary Operator

// User Input
console.log("User Input!");

//alert("Hello World!");   // only work in web browser.
//or
//let myBoolean = confirm("Ok === True\nCancel === False");
//console.log(myBoolean);

//or [nullish coalescing (??) operator]
//let name = prompt("Please enter your name.");
//console.log(name ?? "You didn't enter your name.")

// let's trim all the white space of the input value
/* if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("You didn't enter your name.")
} */


// End of user input

// First Interactive Game
console.log("Interactive Game")

/* let playGame = confirm("Shall we play rock, paper, or scissors?");
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
} */

    



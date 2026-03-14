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

    
// End

// Loops
console.log("Loops");

let myNumber2 = 0;
while (myNumber2 < 50) {
    console.log(myNumber2);
    //myNumber2 = myNumber2 + 1;
    myNumber2++;  //or we can do it
}

let myNumber3 = 0;
while (myNumber3 < 20) {
    console.log(myNumber3);
    //myNumber3 = myNumber3 + 2;
    myNumber3 += 2;  //or we can do it
}

// don't create an endless loop

// do while loop
let myNumber4 = 30;
do {
    console.log(myNumber4);
} while (myNumber4 < 20) {
    console.log(myNumber4);
    myNumber4 += 5;
}

// for loop
console.log("for loop");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let name = "Syzniki";
for (let i = 0; i <= name.length; i++) {
    console.log(name.charAt(i));
}

// use of counter
let name2 = "Syjniaki Dostoyvozski";
let counter = 0;
let myLetter;
while (true) {
    myLetter = name2[counter];
    console.log(myLetter);
    if (myLetter === "z") break; // or this loop will continue
    counter++;
}

// continue key word
console.log("continue key word");
let name3 = "Syjniaki Dostoyvozski";
let counter2 = 0;
let myLetter2;
while (counter2 <= 7) {
    myLetter2 = name3[counter2];
    console.log(myLetter2);
    if (counter2 === 5) {
        counter2 += 2; // for this number 6 letter "k" will be missing in output
        continue;
    }
    if (myLetter2 === "z") break; // or this loop will continue
    counter2++;
}
console.log(counter2);

// Loops  
let myNumber5 = 0;
while (myNumber5 < 50) {
    console.log(myNumber5);
    // myNumber = myNumber + 1;
    myNumber5++;
    // myNumber += 2;  // increment it by 2.
}

// do while loop
let myNumber6 = 0;
// The do will execute at least one time on do while loop
do {
    myNumber6 +=2;
    console.log(myNumber6);
} while (myNumber6 < 50);

// for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let name5 = "Wholesome";
for (let i = 0; i<= name5.length; i++) {
    console.log(name5.charAt(i));
}

let name6 = "Othomindies";
let counter6 = 0;
let myLetter6;
while (counter6 <=6) {
    myLetter6 = name6[counter6];
    console.log(myLetter6);
    if (counter6 == 1) {
        counter6 += 2;
        continue;
    }
    if (myLetter6 == "i") break
    counter6++;
}
console.log(counter6);

// Functions

// Methods = Built-in Functions!

let fx = "coMeTOsenCe".toLowerCase();
console.log(fx);

// Function Declaration Syntax:

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 6))
// Another example
function sum(num3, num4) {
    if (num4 === undefined) {
        return num3 + num3;
    }
    return num3 + num4;
}
console.log(sum(2, 6))
console.log(sum(15))

// Another example

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("payerOne@SomeRandomEmail.com"));

// Arrow functions
const getUserNameFromEmail = email => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("payerOne@SomeRandomEmail.com"));

// Another example
const toProperCase = (name7) => {
    return name7.charAt(0).toUpperCase() + name7.slice(1).toLowerCase();
};
console.log(toProperCase("march"));


// var, let, and const
// var x = 1; // It is a legacy code, don't use much
// let x = 1; // Use let when the variable needs to change, like var
// const x = 1; // Short for constant

// global scope
var x = 1; // function scoped
let y = 2; // block scoped
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    {
        var x = 11; // function scoped, not block scoped
        const z = 6; // block scoped

        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
}

myFunc();
// lobal scope - block scope, and function scope

// Understanding SCOPE
// Global = Not in a function or block. Not desirable
// Local = In a function or block. Not global.
// var instantiates function() scoped variables.
// let and const instantiate {block} scoped variables.

// Helful Tips!
// Avoid using var. Stick with const and let
// Use const unless you need to reassign value.
// Use let if you know you will reassign value.

// Arrays
const myArray = [];

// add elements to an array 
myArray[0] = "Myking";
myArray[1] = 1001;
myArray[2] = false;

//refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

// add more data to our array
myArray.push("school");

console.log(myArray);

// remove something from our array
const lastItem = myArray.pop();
console.log(lastItem);

// add and remove something from front
const newLength = myArray.unshift(42);

console.log(newLength);
console.log(myArray);

// remove
const firstItem = myArray.shift();

console.log(firstItem);
console.log(myArray);

// remove or replace something from the midel of the array by 'splice' methods

// replace
myArray.splice(1, 1, 42);
console.log(myArray);

// remove
myArray.splice(1, 1);
console.log(myArray);

// not delete but incert a value or element in the midel of the array
myArray.splice(1, 0, 1001);
console.log(myArray);

// Different type of methods
const myArray_2 = ["A", "B", "C", "D", "E", "F"];

const newArray = myArray_2.slice(2, 5);

console.log(newArray);
console.log(myArray_2);

// reverse methods
const newArray_2 = myArray_2.reverse();
console.log(newArray_2); 

// join methods
const newArray_3 = myArray_2.join(); // it creates string
const newString = newArray_3;
console.log(newArray_3);

// split methods
const newArray_4 = newString.split(",");
console.log(newArray_4);

// concat methods
const myArrayA = ["a", "b", "c"];
const myArrayB = ["d", "e", "f"];

const newArray_5 = myArrayB.concat(myArrayA);
console.log(newArray_5);

// spred operator [...]
const newArray_6 = [...myArrayA, ...myArrayB];
console.log(newArray_6);
// if not spred operator
const newArray_7 = [myArrayA, myArrayB];
console.log(newArray_7);
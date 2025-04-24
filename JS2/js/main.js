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



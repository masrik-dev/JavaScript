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
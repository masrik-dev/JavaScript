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
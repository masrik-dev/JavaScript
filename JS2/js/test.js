// Objects
// key-value pairs in curly braces
const myObj = { name: "Dove" };
console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoor: "Iced Tea"
    }
};

console.log(anotherObj.answer);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.beverage[0]); // won't work, it will be undefined

console.log(anotherObj["alive"]);
console.log(anotherObj["beverage"]); // for nested object

console.log(anotherObj.beverage.morning); // for nested object

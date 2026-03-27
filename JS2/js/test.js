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
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
};

console.log(anotherObj.answer);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.beverage[0]); // won't work, it will be undefined

console.log(anotherObj["alive"]);
console.log(anotherObj["beverage"]); // for nested object

console.log(anotherObj.beverage.morning); // for nested object

console.log(anotherObj.action());  // action is method

// New Object

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrrooom!";
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);  // Inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "Whooooo!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {
    return "Shhhhh....";
};
console.log(tesla.engine());

// Let's create a Band Object
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};


console.log(Object.keys(band));
console.log(Object.values(band));
// for delete a property
delete band.drums;
console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(band[job]);  // for each of the object. if it is single object then band.X
    console.log(`On ${job}, it's ${band[job]}!`);
}


// destructuring objects
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

function sings({ vocals }) { return `${vocals} sings!` };
console.log(sings(band));

// Javascript Classes
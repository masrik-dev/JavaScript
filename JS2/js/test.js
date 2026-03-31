// Javascript Classes
//privet and public field

class Pizza {
    crust = "original";      //public field
    #sauce = "traditional";  //privet field
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust()); //public field
console.log(myPizza.sauce);     //privet field




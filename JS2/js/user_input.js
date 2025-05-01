// User Input

console.log("User Input!");

//alert("Hello World!");   // only work in web browser.
//or
//let myBoolean = confirm("Ok === True\nCancel === False");
//console.log(myBoolean);

//or [nullish coalescing (??) operator]
let name = prompt("Please enter your name.");
//console.log(name ?? "You didn't enter your name.")

// let's trim all the white space of the input value
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("You didn't enter your name.")
}

// JavaScript Event Listeners 
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
        // view.classList.toggle("purple"); // if the color is not added then it add the color
        // view.classList.toggle("darkblue"); // if the color is added then it remove the color
    }, false);

    div.addEventListener("click", (event) => {
    div.style.backgroundColor = "blue";
    }, false);

    h2.addEventListener("click", (event) => {
        // event.stopPropagation();
        // event.target.textContent = "Clicked";
        const myText = event.target.textContent;
        myText === "My 2nd View"
            ? (event.target.textContent = "Clicked")
            : (event.target.textContent = "My 2nd View");
    }, false);
};

// 5.12.33
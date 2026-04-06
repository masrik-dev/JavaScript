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
    }, false);

    div.addEventListener("click", (event) => {
    div.style.backgroundColor = "blue";
    }, false);

    h2.addEventListener("click", (event) => {
        event.stopPropagation();
        event.target.textContent = "Clicked";
    }, false);
};

// 5.00.00
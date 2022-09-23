const resultLength = document.querySelector("#resultLength");
const resultValues = document.querySelector("#resultValues");
const number = document.querySelector("#number");
const list = document.querySelector("#list");
let numbers = [];

const button = document.querySelector("button");
button.addEventListener("click", () => {

    if (!number.value) {
        alert("Enter a number please.");
        return;
    } else if (!list.textContent) {
        list.innerText = Number(number.value);
    } else {
        list.innerText = `${list.textContent}, ${Number(number.value)}`;
    }

    numbers.push(Number(number.value));
    number.value = "";

});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (numbers.length == 0) {
        alert("Please add a number to the list.");
        return;
    }

    resultLength.innerText = PlatziMath.evenOrOddLengthOfList(numbers)
        ? "The length of the list is odd" 
        : "The length of the list is even";

    resultValues.innerText = PlatziMath.evenOrOddValuesOfList(numbers)
        ? "The values addition of the list is odd" 
        : "The values addition of the list is even";

});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {

    number.value = "";
    resultLength.textContent = "";
    resultValues.textContent = "";
    list.textContent = "";
    numbers = [];

});
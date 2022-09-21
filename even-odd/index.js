const number = document.querySelector("#number");
const list = document.querySelector("#list");
const resultLength = document.querySelector("#resultLength");
const resultValues = document.querySelector("#resultValues");
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

    const evenOrOddLength = numbers.length % 2 == 0;
    resultLength.innerText = evenOrOddLength
        ? "La longitud de la lista es par"
        : "La longitud de la lista es impar";

    const evenOrOddValues = (numbers.reduce((prev, current) => prev + current)) % 2 == 0;
    resultValues.innerText = evenOrOddValues
        ? "La suma de la lista es par"
        : "La suma de la lista es impar";
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    number.value = "";
    resultLength.textContent = "";
    resultValues.textContent = "";
    list.textContent = "";
    numbers = [];
});
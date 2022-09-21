const numbersText = document.querySelector("#numbersText");
const averageText = document.querySelector("#averageText");
const inputNumber = document.querySelector("#inputNumber");
let arrayNumbers = [];

const addNumber = document.querySelector("#addNumber");
addNumber.addEventListener("click", () => {

    if (!inputNumber.value) {
        alert("Por favor, introduzca un número.");
        return;
    } else if (arrayNumbers.length == 0) {
        numbersText.innerText = `${numbersText.textContent} ${inputNumber.value}`;
    } else {
        numbersText.innerText = `${numbersText.textContent}, ${inputNumber.value}`;
    }

    arrayNumbers.push(Number(inputNumber.value));
    inputNumber.value = "";

});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (arrayNumbers.length == 0) {
        alert("Por favor, introduzca algún número para realizar la media.");
    } else {
        const average = (arrayNumbers.reduce((prev, current) => prev + current)) / arrayNumbers.length;
        averageText.innerText = `Average: ${average}`;
    }

});

const cleanResults = document.querySelector("#cleanResults");
cleanResults.addEventListener("click", () => {

    numbersText.innerText = "Numbers: ";
    averageText.innerText = "Average: ";
    inputNumber.value = "";
    arrayNumbers = [];

});
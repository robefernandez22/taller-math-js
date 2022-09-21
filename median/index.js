const medianResult = document.querySelector("#medianResult");
const listNumbers = document.querySelector("#listNumbers");
const number = document.querySelector("#number");
let numbers = [];

const addNumber = document.querySelector("#addNumber");
addNumber.addEventListener("click", () => {

    if (!number.value) {
        alert("Please, enter a number.");
        return;
    } else if (numbers.length == 0) {
        listNumbers.innerText = `${listNumbers.textContent} ${number.value}`;
    } else {
        listNumbers.innerText = `${listNumbers.textContent}, ${number.value}`;
    }

    numbers.push(Number(number.value));
    number.value = "";

});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const evenOrOdd = numbers.length % 2;
    let median = 0;

    if (evenOrOdd) {// Is odd
        
        const position = Math.floor(numbers.length / 2);
        median = numbers[position];

    } else { // Is even

        let firstPosition = numbers.length / 2;
        let secondPosition = firstPosition - 1;

        median = (numbers[firstPosition] + numbers[secondPosition]) / 2;

    }

    medianResult.textContent = `${medianResult.textContent} ${median}`;

});

const cleanResults = document.querySelector("#cleanResults");
cleanResults.addEventListener("click", () => {

    number.value = "";
    listNumbers.textContent = "Numbers:";
    medianResult.textContent = "Median result:";
    numbers = [];

});
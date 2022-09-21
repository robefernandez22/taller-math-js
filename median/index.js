const medianResult = document.querySelector("#medianResult");
const listNumbers = document.querySelector("#listNumbers");
let numbers = [];

const number = document.querySelector("#number");
number.addEventListener("keyup", (e) => e.keyCode === 13 ? addNumber() : null);

const addNumberButton = document.querySelector("#addNumberButton");
addNumberButton.addEventListener("click", addNumber);

const calculateMedian = document.querySelector("#calculateMedian");
calculateMedian.addEventListener("click", () => {

    let median = 0;
    const isEven = numbers.length % 2 == 0;

    if (isEven) {

        let firstPosition = numbers.length / 2;
        let secondPosition = firstPosition - 1;

        numbers.sort((a, b) => a - b);
        median = (numbers[firstPosition] + numbers[secondPosition]) / 2;

    } else {

        const position = Math.floor(numbers.length / 2);
        median = numbers[position];

    }

    medianResult.textContent = `Median result: ${median}`;

});

const cleanResults = document.querySelector("#cleanResults");
cleanResults.addEventListener("click", () => {

    number.value = "";
    listNumbers.textContent = "Numbers:";
    medianResult.textContent = "Median result:";
    numbers = [];

});

function addNumber() {
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
}
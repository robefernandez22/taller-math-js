const listNumbers = document.querySelector("#listNumbers");
const modaResult = document.querySelector("#modaResult");

let arrayNumbers = [];

const numberInput = document.querySelector("#numberInput");
numberInput.addEventListener("keyup", (e) => e.keyCode === 13 ? addNumbersToArray() : null);

const addNumber = document.querySelector("#addNumber");
addNumber.addEventListener("click", addNumbersToArray);

const calculateModeButton = document.querySelector("#calculateModeButton");
calculateModeButton.addEventListener("click", (e) => {

    e.preventDefault();

    if (arrayNumbers.length == 0) {
        alert("Please, enter numbers.");
        return;
    }

    calculateMode();

});

const clean = document.querySelector("#clean");
clean.addEventListener("click", () => {

    numberInput.value = "";
    listNumbers.textContent = "Numbers:";
    modaResult.textContent = "Moda:";
    arrayNumbers = [];

});

function calculateMode() {

    const listCount = {};
    for (let index = 0; index < arrayNumbers.length; index++) {
        const element = arrayNumbers[index];

        if (listCount[element]) {
            listCount[element] += 1;
        } else {
            listCount[element] = 1;
        }
    }

    let listOrder = Object.entries(listCount).sort((a, b) => { return a[1] - b[1] });
    let previous = listOrder[listOrder.length - 1][1];
    let currentResult = listOrder[listOrder.length - 1][0];

    for (let index = 0; index < listOrder.length - 1; index++) {

        const current = listOrder[index][1];

        if (current == previous) {
            currentResult += `, ${listOrder[index][0]}`;
        }

    }

    modaResult.textContent = `Moda: ${currentResult}`;

}

function addNumbersToArray() {

    if (!numberInput.value) {
        alert("Please, enter a number.");
        return;
    } else if (arrayNumbers.length == 0) {
        listNumbers.innerText = `Numbers: ${numberInput.value}`;
    } else {
        listNumbers.innerText = `${listNumbers.textContent}, ${numberInput.value}`;
    }

    arrayNumbers.push(Number(numberInput.value));
    numberInput.value = "";

}
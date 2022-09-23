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

    modaResult.textContent = `Moda: ${PlatziMath.calculateMode(arrayNumbers)}`;

});

const clean = document.querySelector("#clean");
clean.addEventListener("click", () => {

    numberInput.value = "";
    listNumbers.textContent = "Numbers:";
    modaResult.textContent = "Moda:";
    arrayNumbers = [];

});

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
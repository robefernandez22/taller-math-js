// Localizo el elemento con el ID numbersText para ir escribiendo los números ahí
const numbersText = document.querySelector("#numbersText");
// Localizo el elemento con el ID averageText para escribir el resultado de la media ahí
const averageText = document.querySelector("#averageText");
// Localizo el input donde se introducirán los números
const inputNumber = document.querySelector("#inputNumber");
// Declaro e inicializo el array que contendrá los números para hacer la media
let arrayNumbers = [];

// Localizo el botón que ejecutará la acción de añadir los números
const addNumber = document.querySelector("#addNumber");
addNumber.addEventListener("click", () => {

    // Evalúo si se ha introducido número
    if (!inputNumber.value) {
        alert("Por favor, introduzca un número.");
        return;
    // Evalúo si hay escrito algún número ya o no para ponerlo seguido de una coma o sin coma
    } else if (arrayNumbers.length == 0) {
        numbersText.innerText = `${numbersText.textContent} ${inputNumber.value}`;
    } else {
        numbersText.innerText = `${numbersText.textContent}, ${inputNumber.value}`;
    }

    // Añado el número introducido al array y limpio el input para que se pueda introducir otro número
    arrayNumbers.push(Number(inputNumber.value));
    inputNumber.value = "";

});

// Localizo el formulario y le añado evento submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    // Corto el envío del formulario
    e.preventDefault();

    // Evalúo si se ha introducido algún número
    if (arrayNumbers.length == 0) {
        alert("Por favor, introduzca algún número para realizar la media.");
    } else {
        // Hago la suma de los valores haciendo uso del método reduce y divido entre la longitud del array
        const average = (arrayNumbers.reduce((prev, current) => prev + current)) / arrayNumbers.length;
        // Escribo la media en el párrafo con el ID averageText
        averageText.innerText = `Average: ${average}`;
    }

});

// Localizo el elemento con el ID cleanResults, el cual es un botón para limpiar los resultados
const cleanResults = document.querySelector("#cleanResults");
cleanResults.addEventListener("click", () => {

    // Limpiamos campos y el array
    numbersText.innerText = "Numbers: ";
    averageText.innerText = "Average: ";
    inputNumber.value = "";
    arrayNumbers = [];

});
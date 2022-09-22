let notasPeso = [];

const nota = document.querySelector("#nota");
const peso = document.querySelector("#peso");
const tbody = document.querySelector("tbody");
const result = document.querySelector("#result");

const addValues = document.querySelector("#addValues");
addValues.addEventListener("click", () => {

    if (!nota.value) {
        alert("Por favor, introduzca una nota.");
        return;
    } else if (!peso.value) {
        alert("Por favor, introduzca un peso.");
        return;
    }

    notasPeso.push({ nota: Number(nota.value), peso: Number(peso.value) });

    const tr = document.createElement("tr");

    const tdNota = document.createElement("td");
    tr.append(tdNota);
    tdNota.innerText = nota.value;

    const tdPeso = document.createElement("td");
    tdPeso.innerText = peso.value;
    tr.append(tdPeso);

    tbody.append(tr);

    nota.value = "";
    peso.value = "";

});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (notasPeso.length == 0) {
        alert("Introduzca alguna nota y su correspondiente peso.");
        return;
    }

    const acumulacionNota = notasPeso.map((object) => { return object.nota * object.peso })
        .reduce((prev, current) => { return prev + current });
    
    const acumulacionPeso = notasPeso.map((object) => { return object.peso })
        .reduce((prev, current) => { return prev + current });

    const promedioPonderado = acumulacionNota / acumulacionPeso;
    result.innerText = `El promedio ponderado es ${promedioPonderado}`;

});

const cleanTable = document.querySelector("#cleanTable");
cleanTable.addEventListener("click", () => {

    tbody.innerHTML = "";
    result.innerText = "";
    acumulacionNota = 0;
    acumulacionPeso = 0;

});
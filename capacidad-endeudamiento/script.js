// INGRESOS
const objetoIngresos = {};

const descripcionIngreso = document.querySelector("#descripcion-ingreso");
const cantidadIngreso = document.querySelector("#cantidad-ingreso");

const tablaIngresos = document.querySelector("#tabla-ingresos");

const formIngresos = document.querySelector("#formIngresos");
formIngresos.addEventListener("submit", (e) => {

    // Cortamos envío del formulario
    e.preventDefault();

    if (!descripcionIngreso.value || !cantidadIngreso.value) {
        alert("Por favor, introduzca los datos del ingreso.");
        return;
    }

    // Añadimos ingreso al objeto de ingresos
    if (!objetoIngresos[descripcionIngreso.value]) {
        objetoIngresos[descripcionIngreso.value] = Number(cantidadIngreso.value);
    }

    // Añadimos datos a la tabla
    const tr = document.createElement("tr");

    const tdDescripcion = document.createElement("td");
    tdDescripcion.innerText = descripcionIngreso.value;
    tr.append(tdDescripcion);

    const tdCantidad = document.createElement("td");
    tdCantidad.innerText = cantidadIngreso.value;
    tr.append(tdCantidad);

    tablaIngresos.append(tr);

    // Borramos campos del formulario
    descripcionIngreso.value = "";
    cantidadIngreso.value = "";

});

// GASTOS
const objetoGastos = {};

const descripcionGasto = document.querySelector("#descripcion-gasto");
const cantidadGasto = document.querySelector("#cantidad-gasto");

const tablaGastos = document.querySelector("#tabla-gastos");

const formGastos = document.querySelector("#formGastos");
formGastos.addEventListener("submit", (e) => {

    // Cortamos envío del formulario
    e.preventDefault();

    if (!descripcionGasto.value || !cantidadGasto.value) {
        alert("Por favor, introduzca los datos del gasto.");
        return;
    }

    // Añadimos gasto al objeto de gastos
    if (!objetoGastos[descripcionGasto.value]) {
        objetoGastos[descripcionGasto.value] = Number(cantidadGasto.value);
    }

    // Añadimos datos a la tabla
    const tr = document.createElement("tr");

    const tdDescripcion = document.createElement("td");
    tdDescripcion.innerText = descripcionGasto.value;
    tr.append(tdDescripcion);

    const tdCantidad = document.createElement("td");
    tdCantidad.innerText = cantidadGasto.value;
    tr.append(tdCantidad);

    tablaGastos.append(tr);

    // Borramos campos del formulario
    descripcionGasto.value = "";
    cantidadGasto.value = "";

});

// RESULTADOS
const resultado = document.querySelector("#resultado");

const buttonCalcular = document.querySelector("#calcular");
buttonCalcular.addEventListener("click", () => {

    if (Object.values(objetoIngresos).length == 0 || Object.values(objetoGastos).length == 0) {
        alert("Por favor, introduzca ingresos y gastos.");
        return;
    }

    const totalIngresos = Object.values(objetoIngresos).reduce((prev, current) => prev + current);
    const totalGastos = Object.values(objetoGastos).reduce((prev, current) => prev + current);
    const capacidadEndeudamiento = ((totalIngresos - totalGastos) * 0.35).toFixed(2);
    resultado.innerText = `Su capacidad de endeudamiento es de ${capacidadEndeudamiento}`;

});
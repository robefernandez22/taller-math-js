function findTrabajador(name) {

    return trabajadores.find(t => t.name == name);

}

function medianPerPerson(name) {

    const jobs = findTrabajador(name).trabajos;
    const salarios = jobs.map((j) => j.salario);
    return PlatziMath.calculateMedian(salarios);

}

function mediaPorEmpresaAndYear(empresa, year) {

    const salarios = getEmpresas()[empresa][year];
    return PlatziMath.calculateMedian(salarios);

}

function getEmpresas() {
    const empresas = {};
    for (const trabajador of trabajadores) {
        for (const trabajo of trabajador.trabajos) {

            if (!empresas[trabajo.empresa]) {
                empresas[trabajo.empresa] = {};
            }

            if (!empresas[trabajo.empresa][trabajo.year]) {
                empresas[trabajo.empresa][trabajo.year] = [];
            }

            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);

        }
    }

    return empresas;
}

function projectionPerPerson(name) {

    const salarios = findTrabajador(name).trabajos.map((trabajo) => trabajo.salario);

    // 1. Sacar arreglo de incrementos
    let increments = [];
    for (let index = 1; index < salarios.length; index++) {

        const current = salarios[index];
        const previous = salarios[index - 1];
        const crecimiento = current - previous;
        const porcentajeCrecimiento = crecimiento / previous;

        increments.push(porcentajeCrecimiento);

    }

    // 2. De ese arreglo de incrementos, sacar la mediana
    const medianIncrements = PlatziMath.calculateMedian(increments);

    const ultimoSalario = salarios[salarios.length - 1];
    const aumento = ultimoSalario * medianIncrements;
    const nuevoSalario = aumento + ultimoSalario;
    return nuevoSalario;

}

function projectionPorEmpresa(empresa) {

    const empresaYears = Object.keys(getEmpresas()[empresa]);
    const medianas = [];
    for (const year of empresaYears) {
        medianas.push(mediaPorEmpresaAndYear(empresa, year));
    }

    let increments = [];
    for (let index = 1; index < medianas.length; index++) {

        const current = medianas[index];
        const previous = medianas[index - 1];
        const crecimiento = current - previous;
        const porcentajeCrecimiento = crecimiento / previous;

        increments.push(porcentajeCrecimiento);

    }

    const medianIncrements = PlatziMath.calculateMedian(increments);
    const utimaMediana = medianas[medianas.length - 1];
    const aumento = utimaMediana * medianIncrements;
    const nuevaMediana = aumento + utimaMediana;
    return nuevaMediana;

}

// Análisis general
function medianaGeneral() {

    const medianasPersonas = trabajadores.map((t) => medianPerPerson(t.name));
    return PlatziMath.calculateMedian(medianasPersonas);

}

function medianaTop10() {

    const medianasOrdenadas = trabajadores.map(
        (t) => medianPerPerson(t.name)
    ).sort((a, b) => a - b);

    const cantidad = medianasOrdenadas.length / 10;
    const limite = medianasOrdenadas.length - cantidad;

    // slice toma copia
    // splice toma copia y los elimina del otro array

    const topTen = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    const medianaTopTen = PlatziMath.calculateMedian(topTen);
    
    return medianaTopTen;

}
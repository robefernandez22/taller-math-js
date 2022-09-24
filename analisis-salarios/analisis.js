function findTrabajador(name) {

    return trabajadores.find(t => t.name == name);

}

function medianPerPerson(name) {

    const jobs = findPerson(name).trabajos;
    const salarios = jobs.map((j) => j.salario);
    return PlatziMath.calculateMedian(salarios);

}

function projectionPerPerson(name) {

    const trabajador = findTrabajador(name);
    const jobs = trabajador.trabajos;
    const salarios = jobs.map((j) => j.salario);

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
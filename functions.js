/**
 * Clase encargada de englobar funciones de cálculos matemáticos
 */
class PlatziMath {

    /**
     * Método encargado de calcular la media de un conjunto de elementos
     * @param {*} list 
     * @returns number
     */
    static calculateAverage(list) {
        return (list.reduce((prev, current) => prev + current)) / list.length;
    }

    /**
     * Método encargado de calcular si la longitud de una lista de elementos es par o impar
     * @param {*} list 
     * @returns number
     */
    static evenOrOddLengthOfList(list) {
        return list.length % 2;
    }

    /**
     * Método encargado de calcular si la suma de todos los valores de una lista es par o impar
     * @param {*} list 
     * @returns number
     */
    static evenOrOddValuesOfList(list) {
        return (list.reduce((prev, current) => prev + current)) % 2;
    }

    /**
     * Método encargado de calcular la mediana de una lista par.
     * De manera que, al ser la lista par, primero se ordena de menor a mayor.
     * Y luego, se suman los dos elementos del medio y se divide entre 2.
     * Ejemplo: se recibe: [1, 3, 2, 1], se ordena y queda así: [1, 1, 2, 3], 
     * se suman los dos valores del medio: 1 + 2 = 3 y el resultado se divide entre 2: 3 / 2 = 1.5
     * @param {*} list 
     * @returns number
     */
    static calculateMedianEven(list) {
        let firstPosition = list.length / 2;
        let secondPosition = firstPosition - 1;
        list.sort((a, b) => a - b);
        return (list[firstPosition] + list[secondPosition]) / 2;
    }

    /**
     * Método encargado de calcular la mediana de una lista impar.
     * En este caso es más facil, ya que nos quedamos con el elemento del medio.
     * @param {*} list 
     * @returns number
     */
    static calculateMedianOdd(list) {
        let position = Math.floor(list.length / 2);
        return list[position];
    }

    /**
     * Método encargado de calcular la moda de un conjunto de elementos.
     * @param {*} list 
     * @returns 
     */
    static calculateMode(list) {
        const listCount = {};

        for (let index = 0; index < list.length; index++) {
            const element = list[index];

            if (listCount[element]) {
                listCount[element] += 1;
            } else {
                listCount[element] = 1;
            }
        }

        const listOrder = Object.entries(listCount).sort((a, b) => { return a[1] - b[1] });
        let currentResult = listOrder[listOrder.length - 1][0];
        const previous = listOrder[listOrder.length - 1][1];

        for (let index = 0; index < listOrder.length - 1; index++) {

            const current = listOrder[index][1];

            if (current == previous) {
                currentResult += `, ${listOrder[index][0]}`;
            }

        }

        return currentResult;
    }

    /**
     * Método encargado de calcular el promedio ponderado 
     * de un conjunto de valores con sus respectivos pesos
     * @param {*} list 
     * @returns number
     */
    static weightedAverage(list) {
        const acumulacionNota = list.map((object) => { return object.nota * object.peso })
            .reduce((prev, current) => { return prev + current });

        const acumulacionPeso = list.map((object) => { return object.peso })
            .reduce((prev, current) => { return prev + current });

        return acumulacionNota / acumulacionPeso;
    }

}
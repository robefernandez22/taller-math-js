class Circle {

    constructor(radio, results) {
        this.radio = radio;
        this.results = results;
    }

    get diameter() {
        return this.radio * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return Math.pow(this.radio, 2) * Math.PI;
    }

    writeResults() {
        this.results.innerText =
            `Diameter: ${this.diameter.toFixed(2)}.
            Circumference: ${this.circumference.toFixed(2)}.
            Area: ${this.area.toFixed(2)}.`;
    }
}
class Triangle {

    constructor(sideOne, sideTwo, base, results) {
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.base = base;
        this.results = results;
    }

    get perimeter() {
        return this.sideOne + this.sideTwo + this.base;
    }

    get area() {
        return (this.base * this.height) / 2;
    }

    get height() {        
        const x = (this.sideTwo ** 2 - this.sideOne ** 2 + this.base ** 2) / (2 * this.base);
        const h = Math.sqrt(this.sideTwo ** 2 - x ** 2);
        return h;
    }

    writeResults() {
        this.results.innerText =
            `Perimeter: ${this.perimeter.toFixed(2)}.
            Area: ${this.area.toFixed(2)} cm².
            Height: ${this.height.toFixed(2)}`;
    }
}
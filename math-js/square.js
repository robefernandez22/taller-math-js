class Square {

    constructor(side, resultsSquare) {
        this.side = side;
        this.resultsSquare = resultsSquare;
    }

    get perimeter() {
        return this.side * 4;
    }

    get area() {
        return this.side * this.side;
    }

    writeResults() {
        this.resultsSquare.innerText =
            `Perimeter: ${this.perimeter.toFixed(2)}.
            Area: ${this.area.toFixed(2)}.`;
    }
}
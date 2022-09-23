/* Square */
document.querySelector("#formSquare").addEventListener("submit", (e) => {
    e.preventDefault();

    const side = Number(document.querySelector("#side").value);
    const resultsSquare = document.querySelector("#resultsSquare");

    const square = new Square(side, resultsSquare);
    square.writeResults();
});

/* Triangle */
document.querySelector("#formTriangle").addEventListener("submit", (e) => {
    e.preventDefault();

    const sideOne = Number(document.querySelector("#sideOne").value);
    const sideTwo = Number(document.querySelector("#sideTwo").value);
    const base = Number(document.querySelector("#base").value);
    const resultsTriangle = document.querySelector("#resultsTriangle");

    const triangle = new Triangle(sideOne, sideTwo, base, resultsTriangle);
    triangle.writeResults();
});

/* Circle */
document.querySelector("#formCircle").addEventListener("submit", (e) => {
    e.preventDefault();

    const radio = Number(document.querySelector("#radio").value);
    const circleResults = document.querySelector("#circleResults");

    const circle = new Circle(radio, circleResults);
    circle.writeResults();
});
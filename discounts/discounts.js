const discounts = [];
discounts.push(
    {
        name: "discount25",
        discount: 25
    },
    {
        name: "discount50",
        discount: 50
    },
    {
        name: "discount75",
        discount: 75
    },
    {
        name: "discount100",
        discount: 100
    }
);

const resultInput = document.querySelector("#result");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const price = Number(document.querySelector("#price").value);
    const discountCouppon = document.querySelector("#discountCouppon").value;

    const result = discounts.find(d => d.name == discountCouppon);

    if (!price || !discountCouppon) {
        alert("Por favor, rellene todos los campos.")
    } else if (result.length == 0) {
        alert("Lo lamentamos, pero el cupón no existe. El precio no tendrá descuento.");
        resultInput.value = `$${price}`;
    } else {
        const priceWithDiscount = (price * (100 - result.discount)) / 100;
        resultInput.value = `$${priceWithDiscount}`;
    }
});
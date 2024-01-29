// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
];
const taxValue = 1.20; // Corrected variable name from tax to taxValue

// Implement getPrices()
function getPrices(taxBoolean) {
    for (var i = 0; i < dishData.length; i++) {
        var finalPrice;
        if (taxBoolean === true) {
            finalPrice = dishData[i].price * taxValue;
        } else if (taxBoolean === false) {
            finalPrice = dishData[i].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = guests < 5 ? 5 : 10;

        console.log(`Discount is: $${discount}`);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);

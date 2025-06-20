//document.write('1234');

// I have $10
let my_money = 15;

// Pizza price
const pizza = 7;

// Cupcake price
const cupcake = 5;

// My money if I buy pizza
my_money = my_money - pizza;

const iHaveSufficientMoney = my_money >= cupcake

if (iHaveSufficientMoney) {

    // document.write isn't commonly used, but it works
    document.write('I can buy both :D');
} else {
    document.write('I cannot buy both :(');
}

// console.log is useful for checking if certain conditions are working correctly
console.log(my_money)
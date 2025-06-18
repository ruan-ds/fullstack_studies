//document.write('1234');

// I have $10
let my_money = 15;

// Pizza price
let pizza = 7;

// Cupcake price
let cupcake = 5;

// Change if I buy pizza
let change = my_money - pizza;

//document.write('Here is your change: ',change);

if (change < cupcake) {
    document.write('You cannot buy the cupcake, here is your order and your change: ',change);
} else if (change === 0) {
    document.write('Here is your order!');
} else {
    change = my_money - pizza - cupcake;
    document.write('Here is your order and your change ', change,'!');
}
//document.write('1234');

// I have $10
let my_money = 15;

// Pizza price
const pizza = 7;

// Cupcake price
const cupcake = 5;

// Change if I buy pizza
my_money = my_money - pizza;

//document.write('Here is your change: ',change);

if (my_money < cupcake) {
    document.write('You cannot buy the cupcake, here is your order and your change: ',my_money);
} else if (my_money === 0) {
    document.write('Here is your order!');
} else {
    my_money = my_money - cupcake;
    document.write('Here is your order and your change ', my_money,'!');
}
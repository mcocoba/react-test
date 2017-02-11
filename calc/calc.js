var readline = require('readline-sync');

var num1 = readline.question('Please enter a number: ');
var num2 = readline.question('Please enter another number: ');

var operator = readline.question('Please enter an operator(+,-,/,*): ');

var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b },
    '*': function(a, b) { return a * b },
};

console.log('Result: ' + operators[operator](parseInt(num1),parseInt(num2)));
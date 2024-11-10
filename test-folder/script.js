const calculator = require('fun-calculator');

console.log(calculator.add(2, 3));        // Should print a friendly addition message
console.log(calculator.subtract(5, 2));   // Should print a friendly subtraction message
console.log(calculator.multiply(4, 3));   // Should print a friendly multiplication message
console.log(calculator.divide(10, 2));    // Should print a friendly division message
console.log(calculator.divide(10, 0));    // Should handle division by zero

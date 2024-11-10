// index.js

function add(a, b) {
    return `Adding ${a} + ${b} gives ${a + b}`;
}

function subtract(a, b) {
    return `Subtracting ${a} - ${b} gives ${a - b}`;
}

function multiply(a, b) {
    return `Multiplying ${a} * ${b} gives ${a * b}`;
}

function divide(a, b) {
    if (b === 0) {
        return "Oops! Dividing by zero is not allowed.";
    }
    return `Dividing ${a} / ${b} gives ${a / b}`;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};

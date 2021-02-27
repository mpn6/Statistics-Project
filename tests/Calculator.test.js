//import the necessary classes & functions
const Calculator = require("../src/Calculator");

test('Calculator Add function', () => {
    let result = Calculator.Sum(1,2);
    expect(result).toBe(3);
});
test('Calculate the difference between two numbers', () => {
    let result = Calculator.Difference(1,2);
    expect(result).toBe(-1);
});
test('Calculate the product of two numbers', () => {
    let result = Calculator.Product(1,2);
    expect(result).toBe(2);

});
test('Calculate the quotient of two numbers', () => {
    let result = Calculator.Quotient(1,2);
    expect(result).toBe(.5);
});
test('Calculate the square of a number', () => {
    let result = Calculator.Square(2,2);
    expect(result).toBe(4);
});
test('Calculate the square root of a number', () => {
    let calculation = Calculator.SquareRoot(4);
    expect(calculation).toBe(2);
});
test('Calculator adding to calculations', () => {
    //assigning the results of the calc sum method to an object, calculator returns an object
    let result = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculations
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});
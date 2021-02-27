const Calculation = require("../src/Models/Calculation");
const Sum = require('../src/Operations/Sum')
const Difference = require('../src/Operations/Difference')
const Product = require('../src/Operations/Product')
const Quotient = require('../src/Operations/Quotient')
const Power = require('../src/Operations/Power')
const Root = require('../src/Operations/Root')


test('Test the results for the Sum function', () => {
    let op = Sum
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test the results for the Difference function', () => {
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test the results for the Product function', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test the results for the Quotient function', () => {
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(.5);
});

test('Test the results for the Power function', () => {
    let op = Power;
    let calculation = new Calculation(2,2,op);
    expect(calculation.GetResults()).toBe(4);
});
test('Test the results for the Root function', () => {
    let op = Root;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(2);
});
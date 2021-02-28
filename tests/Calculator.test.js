const Calculator = require('../src/Calculator');

test('Calculator sum function', () => {
    expect(Calculator.Sum(1,2).GetResults()).toBe(3);
});
test('Calculator difference function', () => {
    expect(Calculator.Difference(1,2).GetResults()).toBe(-1);
});
test('Calculator product function', () => {
    expect(Calculator.Product(1,2).GetResults()).toBe(2);
});
test('Calculator quotient function', () => {
    expect(Calculator.Quotient(1,2).GetResults()).toBe(.5);
});
test('Calculator exponential function', () => {
    expect(Calculator.Power(2,2).GetResults()).toBe(4);
});
test('Calculator root function', () => {
    expect(Calculator.Root(4,2).GetResults()).toBe(2);
});

test('Calculator adding to calculations array', () => {
    Calculator.Calculations = [];
    Calculator.AddCalculation(1);
    Calculator.Product(1,2);
    Calculator.Power(1,2);
    Calculator.Difference(1,2);
    expect(Calculator.Calculations.length).toBe(4);
});



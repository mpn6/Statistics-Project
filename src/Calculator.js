//import the necessary files & functions
const Calculation = require('./Models/Calculation')
const Sum = require('./Operations/Sum')
const Difference = require('./Operations/Difference')
const Product = require('./Operations/Product')
const Quotient = require('./Operations/Quotient')
const Power = require('./Operations/Power')
const Root = require('./Operations/Root')

class Calculator{
    static Calculations = []; //instantiate a calculations list
    static Sum(a,b){
        let calculation = new Calculation(a, b, Sum);
        this.Calculations.push(calculation)
        return calculation.GetResults();
    }
    static Difference(a,b){
        let calculation = new Calculation(a, b, Difference);
        this.Calculations.push(calculation)
        return calculation.GetResults();
    }
    static Product(a,b){
        let calculation = new Calculation(a, b, Product);
        this.Calculations.push(calculation)
        return calculation.GetResults();
    }
    static Quotient(a,b){
        let calculation = new Calculation(a, b, Quotient);
        this.Calculations.push(calculation)
        return calculation.GetResults();
    }
    static Square(a){
        let calculation = new Calculation(a, 2, Power);
        this.Calculations.push(calculation)
        return calculation.GetResults();
    }
    static SquareRoot(a){
        let calculation = new Calculation(a, 2, Root);
        this.Calculations.push(calculation)
        return calculation.GetResults();
    }
}
module.exports = Calculator;
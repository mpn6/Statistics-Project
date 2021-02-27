class Calculation {
    //the constructor instantiates and  sets the properties of the calculation object
    constructor(a, b, op) {
        //access calculation's internal properties
        this.a = a;
        this.b = b;
        this.op = op;
    }
    //function returns back the results of the calculation
    GetResults() {
        return this.op(this.a,this.b)
    }
}
module.exports = Calculation;
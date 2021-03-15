//imports the employeee libary

const Employee = require("./Employee.js");

// imports the preestablished employee constructor and then adds the requirment 
//for engineer also uses class


class Engineer extends Employee{
    //builds the engineer class
    constructor(employeeName, employeeID , employeeEmail ,rank,github){
        //calls back on the Employee constructor and take in the parameters then adds the new ones need
        super(employeeName, employeeID , employeeEmail ,rank);
        //looks for the Github value 
        this.github = github;
    }

}
//export newly created employeee
module.exports = Engineer;
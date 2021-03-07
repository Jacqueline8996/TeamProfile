//imports the employeee libary
const Employee = require("./Employee.js");

// imports the preestablished employee constructor and then adds the requirment 
//for engineer also uses class

class Intern extends Employee{
    //builds the Intern class
    constructor(employeeName, employeeID , employeeEmail ,rank,school){
        //calls back on the Employee constructor and take in the parameters then adds the new ones need
        super(employeeName, employeeID , employeeEmail ,rank);
        // looks for the school value 
        this.school = school;
    }
}

//export newly created employeee
module.exports = Intern;
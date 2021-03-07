//imports the employeee libary

const Employee = require("./Employee.js");

// imports the preestablished employee constructor and then adds the requirment 
//for engineer also uses class
class Manager extends Employee{
    //builds the Intern class
    constructor(employeeName, employeeID , employeeEmail ,rank,officeNumber){
        //calls back on the Employee constructor and take in the parameters then adds the new ones need
        super(employeeName, employeeID , employeeEmail ,rank);
        // looks for the office number
        this.officeNumber = officeNumber;
    }

}

//export newly created employeee
module.exports = Manager;
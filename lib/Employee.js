//Build up the employee constructor 
class Employee {
    //constructs the base constructor all other subjection will call upon this base
    constructor(employeeName, employeeID , employeeEmail ,rank) {
      this.employeeName = employeeName;
      this.employeeID = employeeID;
      this.employeeEmail = employeeEmail;
      this.rank = rank
    }
}

//export out the employee constructor 
module.exports = Employee;
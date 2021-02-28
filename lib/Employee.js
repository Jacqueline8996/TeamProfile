//Build up the employee constructor 
class Employee {
    constructor(employeeName, employeeID , employeeEmail ,rank) {
      this.employeeName = employeeName;
      this.employeeID = employeeID;
      this.employeeEmail = employeeEmail;
      this.rank = rank
    }
}



//export out the employee constructor 
module.exports = Employee;
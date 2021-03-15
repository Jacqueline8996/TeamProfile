const Employee = require("../lib/Employee.js");

//using test case to make sure the code works testing if input 
//valies actually go in 
test("Can the name name via constructor arguments", () => {
    const employeeName = "jane";
    const person = new Employee(employeeName);
    expect(person.employeeName).toBe(employeeName,22,"employee@gmail.com","Engineer");
});
  

test("Can set the id based on adding in ID", () => {
    const employeeID = 22;
    const person = new Employee("name",employeeID,"employee@gmail.com","Engineer");
    expect(person.employeeID).toBe(employeeID);
});


test("Can set the id based on adding in ID", () => {
    const employeeEmail = "1234@gmail.com";
    const person = new Employee("name",22,employeeEmail,"Engineer");
    expect(person.employeeEmail).toBe(employeeEmail);
});

test("Can set the rank via selecting rank", () => {
    const rank = "Engineer";
    const person = new Employee("name",22,"employee@gmail.com",rank);
    expect(person.rank).toBe(rank);
});

//getting the paramater and fetching results
test("getemployeeName() should retun Jane",() =>{
    const employeeName = "jane";
    const person = new Employee(employeeName,22,"employee@gmail.com","Engineer");
    expect(person.employeeName).toEqual(employeeName);
});

//getting the paramater and fetching id
test("getemployeeID() should retun 22",() =>{
    const employeeID  = 22;
    const person = new Employee("name",employeeID,"employee@gmail.com","Engineer");
    expect(person.employeeID).toEqual(employeeID);
});

//getting the paramater and fetching email
test("getemployeeID() should retun employee@gmail.com",() =>{
    const employeeEmail = "employee@gmail.com";
    const person = new Employee("name",22,employeeEmail,"Engineer");
    expect(person.employeeEmail).toEqual(employeeEmail);
});

//getting the paramater and fetching rank aka role
test("getrank() should retun Engineer",() =>{
    const rank  = "Engineer";
    const person = new Employee("name",22,"employee@gmail.com",rank);
    expect(person.rank).toEqual(rank);
});
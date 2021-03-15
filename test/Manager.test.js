const Manager = require("../lib/Manager.js");

//getting the school info
test("Can set school via constructor", () => {
    const officeNumber = 1234567;
    const person = new Manager("Name", 22, "test@test.com","Intern",officeNumber);
    expect(person.officeNumber).toEqual(officeNumber);
});

//getting the school info
test("getSchool should retun 1234567",() =>{
    const officeNumber = 1234567;
    const person = new Manager("Name", 22, "test@test.com","Intern",officeNumber);
    expect(person.officeNumber).toEqual(officeNumber);
});
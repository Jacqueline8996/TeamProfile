const Intern = require("../lib/Intern.js");

//getting the school info
test("Can set school via constructor", () => {
    const school = "umbc";
    const person = new Intern("Name", 22, "test@test.com","Intern",school);
    expect(person.school).toEqual(school);
});


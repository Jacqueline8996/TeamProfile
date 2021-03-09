const Intern = require("../lib/Intern.js");

//getting the school info
test("Can set school via constructor", () => {
    const school = "umbc";
    const person = new Intern("Name", 22, "test@test.com","Intern",school);
    expect(person.github).toEqual(school);
});

//getting the school info
test("getSchool should retun umbc",() =>{
    const school = "umbc";
    const person = new Intern("name",22,"employee@gmail.com","Intern",github);
    expect(person.getGithub()).toEqual(school);
});
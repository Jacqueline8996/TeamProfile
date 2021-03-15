const Engineer = require("../lib/Engineer");

//getting the github info
test("Can set github via constructor", () => {
    const github = "me.github";
    const person = new Engineer("Name", 1, "test@test.com","Engineer",github);
    expect(person.github).toEqual(github);
});

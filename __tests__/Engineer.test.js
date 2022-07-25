// Engineer
const Engineer = require("../lib/Engineer");

// Engineer object
test("Engineer object", () => {
   const engineer = new Engineer("Dion", 2, "dion@email.com","Engineer", "dionbhandari");

   expect(engineer.github).toEqual(expect.any(String));
});

// github test
test("github account", () => {
   const engineer = new Engineer("Dion", 2, "dion@email.com", "Engineer", "dionbhandari");
   expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// role test
test("gets role of employee", () => {
   const engineer = new Engineer("Dion", 2, "dion@email.com","Engineer", "dionbhandari");

   expect(engineer.getRole()).toEqual("Engineer");
});

// Intern
const Intern = require("../lib/Intern");

// Intern object
test("Intern object", () => {
   const intern = new Intern("Dion", 2, "dion@email.com", "Intern", "Parkway");

   expect(intern.school).toEqual(expect.any(String));
});

// schol test
test("school name", () => {
   const intern = new Intern("Dion", 2, "dion@email.com", "Intern", "Parkway");
   expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// role test
test("intern's role", () => {
   const intern = new Intern("Dion", 2, "dion@email.com", "Intern", "Parkway");

   expect(intern.getRole()).toEqual("Intern");
});

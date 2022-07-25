// Manager
const Manager = require("../lib/Manager");

// Manager object
test("Manager object", () => {
   const manager = new Manager("Kaya", 2, "Kaya@email.com", "Manager", "Parkway");

   expect(manager.officeNum).toEqual(expect.any(String));
});

// schol test
test("Office number", () => {
   const manager = new Manager("Kaya", 2, "Kaya@email.com", "Manager", "555-55-5555");
   expect(manager.getOfficeNum()).toEqual(expect.stringContaining(manager.officeNum.toString()));
});

// role test
test("Manager's role", () => {
   const manager = new Manager("Kaya", 2, "Kaya@email.com", "Manager", "Parkway");

   expect(manager.getRole()).toEqual("Manager");
});

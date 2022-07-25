// Employee
const Employee = require("../lib/Employee");

// employee object
test("employee object", () => {
   const employee = new Employee("Shom", 1, "shombhandari@email.com");
   expect(employee.name).toEqual(expect.any(String));
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toEqual(expect.any(String));
});

// employee name
test("employee name", () => {
   const employee = new Employee("Shom", 1, "shombhandari@email.com");
   expect(employee.getName()).toEqual(expect.any(String));
});

// employee id
test("employee id", () => {
   const employee = new Employee("Shom", 1, "shombhandari@email.com");
   expect(employee.getId()).toEqual(expect.any(Number));
});

// employee email
test("employee email", () => {
   const employee = new Employee("Shom", 1, "shombhandari@email.com");
   expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


// employee role
test("employee role", () => {
   const employee = new Employee("Shom", 1, "shombhandari@email.com");

   expect(employee.getRole()).toEqual("Employee");
});

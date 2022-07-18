const Employee = require("./Employee");

class Intern extends Employee {
   constructor(title, name, id, email, school) {
      this.school = school;
      super(title, name, id, email);
   }
}

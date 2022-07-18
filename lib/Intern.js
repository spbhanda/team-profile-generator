const Employee = require("./Employee");

class Intern extends Employee {
   constructor(name, title, id, email, school) {
      this.school = school;
      super(name, title, id, email);
   }
}

module.exports = Intern;

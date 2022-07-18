const Employee = require("./Employee");

class Manager extends Employee {
   constructor(name, title, id, email, officeNum) {
      this.officeNum = officeNum;
      super(name, title, id, email);
   }
}

module.exports = Manager;

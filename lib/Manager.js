const Employee = require("./Employee");

class Manager extends Employee {
   constructor(title, name, id, email, officeNum) {
      this.officeNum = officeNum;
      super(title, name, id, email);
   }
}

// module.exports = Manager;

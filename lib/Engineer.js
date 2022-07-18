
const Employee = require("./Employee");

class Engineer extends Employee {
   constructor(name, title, id, email, github) {
       this.github = github;
      super(name, title, id, email);
   }
}

module.exports = Engineer;
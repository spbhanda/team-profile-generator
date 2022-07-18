
const Employee = require("./Employee");

class Engineer extends Employee {
   constructor(title, name, id, email, github) {
       this.github = github;
      super(title, name, id, email);
   }
}

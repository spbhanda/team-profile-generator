const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Initialize
function startApp() {}
const roles = [
   {
      type: "input",
      name: "manager",
      message: "Manager Name?",
   },
];
const managerInfo = [
   {
      type: "text",
      name: "name",
      message: "Employee Name?",
   },

   {
      type: "text",
      name: "id",
      message: "Employee ID?",
   },
   {
      type: "text",
      name: "email",
      message: "Employee Email?",
   },
   {
      type: "text",
      name: "officeNumber",
      message: "office Number?",
   },
];
const teamMembers = [
   {
      type: "list",
      name: "role",
      message: "Employee Role?",
      choices: ["Engineer", "Intern"],
   },
   {
      type: "text",
      name: "name",
      message: "Employee Name?",
   },

   {
      type: "text",
      name: "id",
      message: "Employee ID?",
   },
   {
      type: "text",
      name: "email",
      message: "Employee Email?",
   },
];

inquirer.prompt(roles).then((team) => {
   if (team.role === "Manager" || team.role === "manager") {
      inquirer.prompt(managerInfo).then((answers) => {
         let newEmployee = new Manager(answers.name, answers.role, answers.id, answers.email);
         console.log(newEmployee.getName());
         console.log(newEmployee.getRole());
      });
   }
   if (answers.role === "Engineer") {
      let newEmployee = new Engineer(answers.name, answers.role, answers.id, answers.email);
      console.log(newEmployee.getName());
      console.log(newEmployee.getRole());
   }

   if (answers.role === "Intern") {
      let newEmployee = new Intern(answers.name, answers.role, answers.id, answers.email);
      console.log(newEmployee.getName());
      console.log(newEmployee.getRole());
   }
});

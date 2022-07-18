const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const Engineer = require("./Engineer");

function addEmployee() {
   inquirer.prompt()([
      {
         type: "text",
         name: "name",
         message: "Enter new team member's name",
      },
      {
         type: "list",
         name: "position",
         message: "What is the new employee's position?",
         Choices: ["Manager", "Engineer", "Intern"],
      },
   ]);
}

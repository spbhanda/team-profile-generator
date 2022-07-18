const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

// Initialize

const questions = [
   {
      type: "text",
      name: "title",
      message: "What is your title?",
   },

   {
      type: "text",
      name: "name",
      message: "What is your name?",
   },
   {
      type: "text",
      name: "office",
      message: "What is your Office?",
   },

   {
      type: "text",
      name: "id",
      message: "What is your ID?",
   },
];

inquirer.prompt(questions).then((answers) => {
   let emp1 = new Employee(answers.title, answers.name, answers.office, answers.id);
   console.log(emp1.title, emp1.name);
});

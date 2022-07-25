// create HTML page:
// const { generateTeamPage, generateManager, generateEngineer, generateIntern } = require("./src/literrals");
const generateTeamPage = require("./src/literrals");

// node modules
const fs = require("fs");
const inquirer = require("inquirer");

// team profiles and loop
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team array
const teamMembers = [];

const managerInfo = [
   {
      type: "input",
      name: "name",
      message: "Enter manager's name: ",
   },
   {
      type: "input",
      name: "id",
      message: "Enter employee ID: ",
   },
   {
      type: "input",
      name: "email",
      message: "Enter employee email: ",
      validate: (mgr) => {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(mgr)) {
            return "You must provide a valid email address!";
         }
         return true;
      },
   },
   {
      type: "input",
      name: "office",
      message: "Enter office number: ",
   },
];
const memberInfo = [
   {
      type: "list",
      name: "role",
      message: "Choose employee role: ",
      choices: ["Engineer", "Intern", "Finish"],
   },
   {
      type: "input",
      name: "name",
      message: "Enter employee name: ",
   },
   {
      type: "input",
      name: "id",
      message: "Enter employee ID: ",
   },
   {
      type: "input",
      name: "email",
      message: "Enter employee email?",
      validate: (emp) => {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(emp)) {
            return "You must provide a valid email address!";
         }
         return true;
      },
   },
   {
      type: "input",
      name: "school",
      message: "Enter intern school:",
      when: (emp) => emp.role === "Intern",
   },
   {
      type: "input",
      name: "github",
      message: "Enter engineer's github username:",
      when: (emp) => emp.role === "Engineer",
   },
   {
      type: "loop",
      name: "moreemployee",
      message: "Do you want add another employee?",
      questions: [
         {
            type: "list",
            name: "role",
            message: "Choose employee role: ",
            choices: ["Engineer", "Intern", "Finish"],
         },
         {
            type: "input",
            name: "name",
            message: "Enter employee name: ",
         },
         {
            type: "input",
            name: "id",
            message: "Enter employee ID: ",
         },
         {
            type: "input",
            name: "email",
            message: "Enter employee email: ",
            validate: (emp) => {
               const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               if (!emailRegex.test(emp)) {
                  return "You must provide a valid email address!";
               }
               return true;
            },
         },
         {
            type: "input",
            name: "school",
            message: "Enter intern school:",
            when: (emp) => emp.role === "Intern",
         },
         {
            type: "input",
            name: "github",
            message: "Enter engineer's github username:",
            when: (emp) => emp.role === "Engineer",
         },
      ],
   },
];
function AddManagerInfo() {
   console.log("\t\tAdd team manager \n====================================");
   inquirer.prompt(managerInfo).then((mgr) => {
      let newManager = new Manager(mgr.name, mgr.role, mgr.id, mgr.email, mgr.office);
      console.log("Team manager: " + newManager.getName());
      console.log("Office number: " + newManager.officeNum);
      teamMembers.push(newManager);

      AddTeamMember();
   });
}
function AddTeamMember() {
   console.log("\t\tAdd team members \n====================================");
   inquirer.prompt(memberInfo).then((emp) => {
      if (emp.role === "Engineer") {
         let newEngineer = new Engineer(emp.name, emp.role, emp.id, emp.email, emp.github);
         console.log("Engineer name: " + newEngineer.getName());
         console.log("Github username: " + newEngineer.getGithub());
         //store the engineer in teammembers
         teamMembers.push(newEngineer);
      } else if (emp.role === "Intern") {
         let newIntern = new Intern(emp.name, emp.role, emp.id, emp.email, emp.school);
         console.log("Intern name: " + newIntern.getName());
         console.log("Intern School: " + newIntern.school);
         //store the intern in teammembers
         teamMembers.push(newIntern);
      }
      for (let i = 0; i < emp.moreemployee.length; i++) {
         if (emp.moreemployee[i].role === "Engineer") {
            let otherEngineer = new Engineer(
               emp.moreemployee[i].name,
               emp.moreemployee[i].role,
               emp.moreemployee[i].id,
               emp.moreemployee[i].email,
               emp.moreemployee[i].github
            );
            console.log("Other engineer name: " + otherEngineer.getName());
            console.log("Other github username: " + otherEngineer.getGithub());
            //store the engineer in teammembers
            teamMembers.push(otherEngineer);
         } else if (emp.moreemployee[i].role === "Intern") {
            let otherIntern = new Intern(
               emp.moreemployee[i].name,
               emp.moreemployee[i].role,
               emp.moreemployee[i].id,
               emp.moreemployee[i].email,
               emp.moreemployee[i].school
            );
            console.log("Other Intern name: " + otherIntern.getName());
            console.log("Other Intern School: " + otherIntern.school);
            //store the intern in teammembers
            teamMembers.push(otherIntern);
         }
      }
      createHTML();
   });
}

function createHTML() {
   fs.writeFile("./dist/index.html", generateTeamPage(teamMembers), (err) =>
      err ? console.log(err) : console.log("File created successfully!")
   );
}

AddManagerInfo();
// viewTeam();

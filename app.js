//Welcome to Profile Extender!

// NPM packages require.
const inq = require("inquirer");
const fs = require("fs");

// Reference block
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Arrays for each employee block
const internArr= [];
const managerArr = [];
const engineerArr =[];

//Function to 
function aManager() {
    const Questions = [
      {
        type: "input",
        message: "Enter The Manager's First Name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the Employee's ID number: ",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the Manager's office room number: ",
        name: "officeNumber",
      },
      {
        type: "input",
        message: "Enter the Manager's work e-mail: ",
        name: "email",
      },
    ];

    inq.prompt(Questions).then((answers)=> {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      managerArr.push(manager);
      aEmployee();
    });
  };

  // Function to add another employee
  function aEmployee() {
    const nextEmployee = [
      {
        type: "list",
        message: "Would you like to add a another employee? :",
        name: "nextEmployee",
        choices: ["YES", "NO"],
      },
    ];

//next prompt population
    inq.prompt(nextEmployee).then((answers)=> {

      if (answers.nextEmployee === "YES") {
        return getRole();
      } else {
        renderHtml(managerArr,engineerArr,internArr)
      }
    });
  };

//function to retrieve the role of the next employee.
  function getRole() {
    const pickRole = [
      {
        type: "list",
        message: "Select the type of employee you would like to add: ",
        name: "role",
        choices: ["ENGINEER", "INTERN"],
      }
    ];
    inq.prompt(pickRole).then((answers)=> {

      if (answers.role === "ENGINEER") {
        return aEngineer();
      } else {
        return aIntern();
      };
    });
  };

  // Function to populate Engineer information questions
  function aEngineer() {
    const Questions = [
      {
          type: "input",
          message: "Enter the Engineer's FIRST name: ",
          name: "name",
        },
        {
          type: "input",
          message: "Enter the Engineer's Id number: ",
          name: "id",
        },
        {
          type: "input",
          message: "Enter the Engineer's work e-mail: ",
          name: "email",

        },
      {
        type: "input",
        message: "Enter the Engineer's github username: ",
        name: "github",
      },
    ];
    inq.prompt(Questions).then((answers)=> {
      const engineer = new Engineer(answers.name, answers.id,answers.email,answers.github);
      engineerArr.push(engineer);
      aEmployee();
  
  });
  };

  // Function to populate intern information questions
  function internQuestions() {
    const Questions = [
      {
          type: "input",
          message: "Enter the name of the intern: ",
          name: "name",
        },
        {
          type: "input",
          message: "Enter the intern's Id number: ",
          name: "id",
        },
        {
          type: "input",
          message: "Enter work e-mail: ",
          name: "email",
        },
      {
        type: "input",
        message: "Enter the University the intern attends: ",
        name: "school",
      },
    ];
    inq.prompt(Questions).then((answers)=> {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      internArr.push(intern);
      aEmployee();})
  };
  
  aManager();
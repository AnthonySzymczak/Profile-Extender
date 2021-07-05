// Welcome to the Engineer.js file

// Require Employee.js
const Employee = require("./Employee");

//  Engineer class constructor, which extends Employee.js 
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // retrieves the employee's github account information
  getGithub() {
    return this.github;
  }

  //retrieves Role issued
  getRole() {
    return "Engineer";
  }
}
// exports to Engineer
module.exports = Engineer;
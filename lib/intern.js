// Welcome to the Intern.js file
const Employee = require("./Employee");
  
//  Intern class constructor, which extends employee.js
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // retrieves school attended
  getSchool() {
    return this.school;
  }

  // retrieves role issued
  getRole() {
    return "Intern";
  }
}

//exports to intern section
module.exports = Intern;
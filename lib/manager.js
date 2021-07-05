// Welcome to the Manager.js file
const Employee = require("./Employee");

//  Manager class constructor, which extends employee.js 
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = parseInt(officeNumber);
  }

  //retrieves office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  //retrieves role issued
  getRole() {
    return "Manager";
  }
}

//exports to manager section
module.exports = Manager;
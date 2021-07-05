// Welcome to the Manager.js file
const Employee = require("./Employee");

//  Manager class constructor, which extends employee.js 
class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = parseInt(officenumber);
  }

  //retrieves office number
  getOfficeNumber() {
    return this.officenumber;
  }

  //retrieves role issued
  getRole() {
    return "Manager";
  }
}

//exports to manager section
module.exports = Manager;
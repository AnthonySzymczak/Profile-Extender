// Welcome to the Employee.js file
//  Employee class constructor 
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = parseInt(id);
      this.email = email;
    }

    //retrieves employee's name
    getName() {
      return this.name;
    }

    // retrieves employee's id
    getId() {
      return this.id;
    }

    // retrieves employee's e-mail
    getEmail() {
      return this.email;
    }

    // retrieves role issued
    getRole(){
      return "Employee"
    }
  }
  
  //exports to employee
  module.exports = Employee;
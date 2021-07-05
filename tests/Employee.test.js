const Employee = require('../lib/Employee');

test('Publishes employee (as object)', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

// declares the employee's name
test('employee name', () => {
    const name = 'Tony'
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

// declares the employee's id
test('employee ID', () => {
    const testId = 999;
    const employee = new Employee('Tony', testId);
    expect(employee.id).toBe(testId);
});

// declares the employee's email
test('employee e-mail', () => {
    const testEmail = 'anthonyszymczak@msn.com'
    const employee = new Employee('Tony', 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
// retrieves employee's name
test('getName', () => {
    const testName = 'Tony'
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

// retrieves employee's id
test('getId', () => {
    const testId = 999
    const employee = new Employee('Tony', testId);
    expect(employee.getId()).toBe(testId);
});

//retrieves employee's e-mail
test('getEmail', () => {
    const testEmail = 'anthonyszymczak@msn.com'
    const employee = new Employee('Tony', 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

// retrieves roll of employee
test('getRole function', () => {
    const testRole = 'Employee'
    const employee = new Employee('Tony', 1, 'anthonyszymczak@msn.com');
    expect(employee.getRole()).toBe(testRole);
});
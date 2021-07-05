const Employee = require('../lib/Employee');

test('Publishes the employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('PUB employee name', () => {
    const name = 'Tony'
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
test('PUB employee ID', () => {
    const testId = 100;
    const employee = new Employee('Tony', testId);
    expect(employee.id).toBe(testId);
});
test('PUB employee e-mail', () => {
    const testEmail = 'anthonyszymczak@msn.com'
    const employee = new Employee('Tony', 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('grab name from getName', () => {
    const testName = 'Tony'
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('grab ID from getId', () => {
    const testId = '999'
    const employee = new Employee('Tony', testId);
    expect(employee.getId()).toBe(testId);
});
test('grab email from getEmail', () => {
    const testEmail = 'anthonyszymczak@msn.com'
    const employee = new Employee('Tony', 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = 'Employee'
    const employee = new Employee('Tony', 1, 'anthonyszymczak@msn.com');
    expect(employee.getRole()).toBe(testRole);
});
//Welcome to the Intern test!

// Declaration require
const Intern = require('../lib/Intern');

// Intern's School information
test('School the intern goes to', ()=> {
const testSchool = 'UCF';
const employee = new Intern('Tony', 1, 'anthonyszymczak@msn.com', testSchool);
expect(employee.school).toBe(testSchool);
});

// Retrieves role of Intern
test('getRole', ()=> {
    const testIntern = 'Intern';
    const employee = new Intern('Tony', 1, 'anthonyszymczak@msn.com', testIntern);
    expect(employee.getRole()).toBe(testIntern);
});

// Retrieves School the Intern goes to
test('getSchool', ()=> {
    const testSchool = 'UCF';
    const employee = new Intern('Tony', 1, 'anthonyszymczak@msn.com', testSchool);
    expect(employee.getSchool()).toBe(testSchool);
    });
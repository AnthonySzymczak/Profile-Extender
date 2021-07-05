//Welcome to The Engineer test!

// Declaration require
const Engineer = require('../lib/Engineer');

// Github information test
test('github info', ()=> {
    const testGithub = 'AnthonySzymczak';
    const employee = new Engineer('Tony', 1, 'anthonyszymczak@msn.com', testGithub);
    expect(employee.github).toBe(testGithub);
})

// Retrieves role of Engineer
test('getRole', ()=> {
    const testEngineer = 'Engineer';
    const employee = new Engineer('Tony', 1, 'anthonyszymczak@msn.com', testEngineer);
    expect(employee.getRole()).toBe(testEngineer);
})

// Retrieves github of the Engineer
test('getGithub', ()=> {
    const testGithub = 'AnthonySzymczak';
    const employee = new Engineer('Tony', 1, 'anthonyszymczak@msn.com', testGithub);
    expect(employee.getGithub()).toBe(testGithub);
})
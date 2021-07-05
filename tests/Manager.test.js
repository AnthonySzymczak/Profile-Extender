//Welcome to the Manager test!

const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

// Office Number declaration
test('Managers Office Number', ()=> {
const testOffice = 205;
const employee = new Manager('Tony', 1, 'anthonyszymczak@msn.com', testOffice);
expect(employee.officeNumber).toBe(testOffice);
});

// Retrieves role of Manager
test('getRole', ()=> {
    const testManager = 'Manager';
    const employee = new Manager('Tony', 1, 'anthonyszymczak@msn.com', testManager);
    expect(employee.getRole()).toBe(testManager);
});

// Retrieves Manager's Office Number
test('getOfficeNumber', ()=> {
    const testOffice = 205;
    const employee = new Manager('Tony', 1, 'anthonyszymczak@msn.com', testOffice);
    expect(employee.getOfficeNumber()).toBe(testOffice);
});
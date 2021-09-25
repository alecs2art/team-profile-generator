const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("returns employee name", () => {
    const employee = new Employee('alec', 48, "alecs2art@gmail.com");

    expect(employee.getName()).toBe('alec');
});

test("returns employee id", () => {
    const employee = new Employee('alec', 48, "alecs2art@gmail.com");

    expect(employee.getId()).toBe(48);
});

test("returns employee email", () => {
    const employee = new Employee('alec', 48, "alecs2art@gmail.com");

    expect(employee.getEmail()).toBe('alecs2art@gmail.com');
});

test("returns employee office number", () => {
    const employee = new Manager('alec', 48, "alecs2art@gmail.com", 1);

    expect(employee.getOfficeNumber()).toBe(1);
});


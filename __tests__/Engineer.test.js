const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("return employee name", () => {
    const employee = new Employee('alec', 48, "alecs2art@gmail.com");

    expect(employee.getName()).toBe('alec');
});

test("return employee id", () => {
    const employee = new Employee('alec', 48, "alecs2art@gmail.com");

    expect(employee.getId()).toBe(48);
});

test("return employee email", () => {
    const employee = new Employee('alec', 48, "alecs2art@gmail.com");

    expect(employee.getEmail()).toBe('alecs2art@gmail.com');
});

test("return gitub user", () => {
    const employee = new Engineer("alec", 48, "alecs2art@gmail.com", "alecs2art");

    expect(employee.getGithubUser()).toBe("alecs2art");
});
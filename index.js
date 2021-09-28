const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const employeeArray = [];



const newEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "employeePostion",
            message: "What is the new employee's postion?",
            choices: [
                "Engineer",
                "Manager",
                "Intern"
            ]
        }
    ])
    .then((data) => {
        if (data.employeePostion === "Manager") {
            managerQuestions();
        }
        if (data.employeePostion === "Engineer") {
            engineerQuestions();
        }
        if (data.employeePostion === "Intern") {
            internQuestions();
        }
    })
}

const engineerQuestions = () => {
    return inquirer.prompt([ 
        {
            type: "text",
            name: "name",
            message: "Please enter the name for the new engineer."
        },
        {
            type: "text",
            name: "id",
            message: "Please enter the id to be asscotiated with the new engineer." 
        },
        {
            type: "text",
            name: "email",
            message: "Please enter the email of the new engineer."
        },
        {
            type: "text",
            name: "githubUsername",
            message: "Please enter the username of the engineer's GitHub account."
        },
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add in a new employee?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ])
    .then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.githubUsername);
        employeeArray.push(engineer);

        if (data.addAnother === "Yes") {
            newEmployee();
        }
    })
}

const managerQuestions = () => {
    return inquirer.prompt([ 
        {
            type: "text",
            name: "name",
            message: "Please enter the name for the new manager."
        },
        {
            type: "text",
            name: "id",
            message: "Please enter the id to be asscotiated with the new manager." 
        },
        {
            type: "text",
            name: "email",
            message: "Please enter the email of the new manager."
        },
        {
            type: "text",
            name: "officeNumber",
            message: "Please enter the office number for the manager."
        },
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add in a new employee?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ])
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.githubUsername);
        employeeArray.push(manager);

        if (data.addAnother === "Yes") {
            newEmployee();
        }
    })
}

const internQuestions = () => {
    return inquirer.prompt([ 
        {
            type: "text",
            name: "name",
            message: "Please enter the name for the new intern."
        },
        {
            type: "text",
            name: "id",
            message: "Please enter the id to be asscotiated with the new intern." 
        },
        {
            type: "text",
            name: "email",
            message: "Please enter the email of the new intern."
        },
        {
            type: "text",
            name: "school",
            message: "Please enter the name of the intern's school."
        },
        {
            type: "list",
            name: "addAnother",
            message: "Would you like to add in a new employee?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ])
    .then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.githubUsername);
        employeeArray.push(intern);

        if (data.addAnother === "Yes") {
            newEmployee();
        }
    })
}

newEmployee();


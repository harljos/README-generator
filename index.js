// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "Title",
    },
    {
        type: "input",
        message: "Provide a Description of the project.",
        name: "Description",
    },
    {
        type: "input",
        message: "What license is your project using?",
        name: "License",
    },
    {
        type: "input",
        message: "What is the usage for the project?",
        name: "Usage",
    },
    {
        type: "input",
        message: "Who are the contributors?",
        name: "Contributors",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            markdown.generateMarkdown(data);
        }   
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", data)
            console.log(data);
        });
}

// Function call to initialize app
init();

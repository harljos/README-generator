// Includes packages needed for the application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
// an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a Description of the project.",
        name: "description"
    },
    {
        type: "input",
        message: "What license is your project using?",
        name: "license"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage for the project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contributions guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the instructions to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown.generateMarkdown(data), (err) => {
        if (err) {
            console.error(err);
        } 
    });
}

// function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", data)
        });
}

// Function call to initialize app
init();

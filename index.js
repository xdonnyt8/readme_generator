const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please Enter your Project Title"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of the project."
    },
    {
        type: "input",
        name: "install",
        message: "How do you install all the dependencies?"
    },
    {
        type: "input",
        name: "license",
        message: "What licenses does your project have?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What does the user need to know to contribute to this project?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What does the user need to know to contribute to this project?"
    }



];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
       
    })

}

// function call to initialize program
init();

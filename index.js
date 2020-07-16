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
        name: "authors",
        message: "Who contributed to make this project?"
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
        name: "usage",
        message: "How do you run the program?"
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
        name: "test",
        message: "How would you test the project?"
    },
    {
        type: "input",
        name: "question",
        message: "Is there any question to be asked?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    }


];

// function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Pulling a readme file out of thin air.")
        writeToFile("README.md", generateMarkdown({...response}))

    })

}

// function call to initialize program
init();

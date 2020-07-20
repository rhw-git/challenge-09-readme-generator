const inquirer = require("inquirer");

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter your project title.",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter your project description.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter the installation instructions of your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter the usage information of your project.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please enter the contribution guideline.",
    },
    {
      type: "input",
      name: "test",
      message: "Please enter the test instructions.",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please choose a license",
      choices: [
        "Apache License 2.0",
        "GNU GPLv3",
        "GNU AGPLv3",
        "GNU LGPLv3",
        "Mozilla Public License",
        "MIT License",
        "ISC",
        "Boot Software License 1.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "gitName",
      message: "Please enter your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email addresss.",
    },
  ]);
};

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  questions();
}

// function call to initialize program
init();

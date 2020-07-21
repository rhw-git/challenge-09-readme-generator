const inquirer = require("inquirer");
const generateMarkdown = require("./src/generateMarkdown.js");
const fs = require("fs");

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
        "MIT",
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
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      if (err) {
        reject(err);
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// function to initialize program
function init() {
  questions()
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((data) => {
      console.log(data);
      return writeToFile(data);
    });
}

// function call to initialize program
init();

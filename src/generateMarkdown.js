// import fs library
const fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  // deconstruct data
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    license,
    gitName,
    email,
  } = data;
  return `
  # ${title}

  ##  Description

  ${description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Badges](#badges)
  - [GitHub](#github)
  - [Contact](#contact)
  - [Tests](#tests)

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## Contribution

  ${contribution}

  ## License

  ${license}

  ## Badges

  [github-languages-image]: ![Conda - License](https://img.shields.io/conda/l/conda-forge/setuptools?color=Blue&label=License&logo=${license}&logoColor=blue&style=plastic)

  ## GitHub

  My GitHub link: (https://github.com/${gitName})

  ## Contact

  You can reach me by email: (${email})

  ## Tests

  ${test}
  `;
}

module.exports = generateMarkdown;

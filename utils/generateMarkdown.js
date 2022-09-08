//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue.png)`
 }
 
 //[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 //(https://img.shields.io/badge/License-MIT-yellow.svg) and other function to create this part (https://opensource.org/licenses/MIT)

//  //function that returns the license link
//  function renderLicenseLink(license) {}
 
// // function that returns the license section of README
//  function renderLicenseSection(license) {}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Project}
${renderLicenseBadge(data.license)}

${data.Description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.Installation}

## Usage
${data.Usage}

## License
${data.license}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
For any questions, please contact me via the information provided below:
${data.Email}
${data.GitHub}

`;
}
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

module.exports = generateMarkdown;

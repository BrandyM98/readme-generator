//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue.png)`
 }
 

//  //function that returns the license link
//  function renderLicenseLink(license) {}
 
// // function that returns the license section of README
//  function renderLicenseSection(license) {}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Project}
${renderLicenseBadge(data.License)}

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
${data.License}

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

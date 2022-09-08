//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue.png)`
 }
 
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
This project is license under 
${data.license}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
If you have any questions, please do not hesitate to contact me via email: ${data.Email}. You can view additional projects of mine via:${data.GitHub}.

`;
}
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

module.exports = generateMarkdown;

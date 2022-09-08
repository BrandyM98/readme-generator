// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 return `![license](https://img.shields.io/badge/license-${license}-blue.png)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Project}
${renderLicenseBadge(data.License)}

${data.Description}
## Table of Contents
- [Installation](#installation)
-

## Installation

${data.Installation}

## Usage
${data.Usage}
${data.License}

## Questions
If you have any ?
${data.Email}
${data.GitHub}

`;
}
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

module.exports = generateMarkdown;

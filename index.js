const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// questions for user input

// added questions from professional README template
let questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Project'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'Chose the appropriate license for the project: ',
        name: 'license',
        choices: [
           'ApacheLicense2.0',
           'GNUGeneralPublicLicensev3.0',
           'MITLicense'
        ]
    },
    {
        type: 'input',
        message: 'Who all contributed to this project?',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'Are there included test?',
        name: 'Tests'
    },
    {
        type: 'input',
        message: 'What is your gitHub user name?',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'What is your emial?',
        name: 'Email'
    }
]; 

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        fs.writeFileSync('output/README.md', generateMarkdown(answers));

    })

}

// Function call to initialize app
init();

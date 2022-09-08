// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
let questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Project'
    },
    {
        type: 'input',
        message: 'Provide a short discription of your project: ',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Describe the installation process: ',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'what instructions do you have for the user to accurately use your project?',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'Chose the appropriate license for the project: ',
        name: 'License',
        choices: [
           'hfd',
           'h,jg',
           'kghjf'
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
]; //add badges

// TODO: Create a function to write README file
function writeToFile(fileName, data) {} //delete

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        fs.writeFileSync('output/README.md', generateMarkdown(answers));

    })

}

// Function call to initialize app
init();

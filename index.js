// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
//const questions = [];

inquirer.prompt([
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'provide a short discription of your project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe the installation process: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'what instructions do you have for the user to accurately use your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who all contributed to this project?',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'Chose the appropriate license for the project: ',
        name: 'license',
        choices: [
            //add license choices here
        ]
    },
    {
        type: 'input',
        message: 'Are there included test?',
        name: 'tests'
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

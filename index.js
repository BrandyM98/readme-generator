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
        message: 'provide a short discription explaining your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'what are the steps required to install the project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'what instructions do you have for the user to accurately use your project?',
        name: 'usage'
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

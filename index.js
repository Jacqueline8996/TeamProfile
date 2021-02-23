//Importing data and programs from  othere folders
const inquirer = require("inquirer");



//ask the user in nodes what question,and then put the information into a read me file
const askEmployee = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Title of your project?',
            name: 'title'
        },
       
    ]);
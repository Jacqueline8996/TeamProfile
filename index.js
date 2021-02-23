//Importing data and programs from  othere folders
const inquirer = require("inquirer");

const jobRank = ['Engineer', 'Intern','Manager']

//ask the user in nodes what question,and then put the information into a read me file
const employeeQueston = () =>
    inquirer.prompt([
        //Basic QUesiton for everyone 
        {
            type: 'list',
            message: 'What is the employee position',
            choices: jobRank,
            name: 'rank',
            loop: false
        },
        {
            type: 'input',
            message: 'What is the employee Name?',
            name: 'employeeName'
        },
        {
            type: 'input',
            message: 'What is the employee ID?',
            name: 'employeeID'
        },
        {
            type: 'input',
            message: 'What is the Employee email?',
            name: 'employeeEmail'
        },
       // Specific quetsion for Engineer 
       {
            when: (response) => response.role === jobRank[0],
            type: "input",
            message: "what is your git hub?",
            name:"github",
        },
        //specific question for intern

        {
            when: (response) => response.role === jobRank[1],
            type: "input",
            message: "what is your School?r",
            name:"school",
        },
        //specific question for manager
        {
            when: (response) => response.role === jobRank[2],
            type: "input",
            message: "what is your office number?",
            name:"officeNumber",
        },

    ])  
    .then((response) =>{


    
        console.log("my response are",response)
    });
    


employeeQueston();
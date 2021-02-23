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
        //Specific quetsion for Engineer 
        // {
        //     type: 'input',
        //     message: 'What is the Employee email?',
        //     name: 'employeeEmail'
        // },
        // //specific question 

        // {
        //     type: 'input',
        //     message: 'What is the Employee email?',
        //     name: 'employeeEmail'
        // },
        // //specific question for Intern 
        //  {
        //     type: 'input',
        //     message: 'What is the Employee email?',
        //     name: 'employeeEmail'
        // },

    
    ])  
    .then((response) =>{
        //enginer question
        // if (response.rank === jobRank[0]) {
        //     console.log("this is a Engineer");
        //     inquirer.prompt([
        //         {
        //         type: "input",
        //         message: "what is your git hub?",
        //         name:"github",
        //         },
        //     ])
        // }
        // //Intern question
        // if (response.rank === jobRank[1]) {
        //     console.log("this is a intern");
        //     inquirer.prompt([
        //         {
        //         type: "input",
        //         message: "what is your School?r",
        //         name:"phoneNumber",
        //         },
        //     ])
        // }
        // //Manager extra question
        // if (response.rank === jobRank[2]) {
        //     console.log("this is a manager");
        //     inquirer.prompt([
        //         {
        //         type: "input",
        //         message: "what is your office number?",
        //         name:"school",
        //         },
        //     ])
        // }


    
        console.log("my response are",response)
    });
    


employeeQueston();
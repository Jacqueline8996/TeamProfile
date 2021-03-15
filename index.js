//Importing data and programs from  othere folders
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const displayPage = require("./src/displayPage.js");

const jobRank = ['Engineer', 'Intern','Manager']
let employeeInfo = [];
let employeesArray = [];

//start the program 
const startScreen = () =>{
    console.log("Welcome to the Team ProfileGenerator!")
    console.log("Here you can add teams to a team and profile page!")
}

//figures out what they want to do 
const TaskTodo = () =>{
    inquirer.prompt([
        //option of what you want to do 
        {
            type: 'list',
            message: 'What Do you want to add an Employee?',
            choices: ["Add Employee","Exit"],
            name: 'optionChoices',
            loop: false
        },

    ])
     .then((response) =>{
         //goes into the second portion
         
        if(response.optionChoices[0] === response.optionChoices[0]){
           
            // console.log("what did i chooose",response.optionChoices )
            employeeInfo = goMainQues(response.optionChoices);
            
        }
        else{
            
            // console.log("what did i chooose",response.optionChoices )
            goMainQues(response.optionChoices);
            
        }
         
    });
}

function exitWindow(){
    displayPage(employeesArray);
    console.log("Thank you Your page has been generated good Bye");
    return 
}
//ask the user in nodes what question,and then put the information into a read me file
function goMainQues(keepGoing){

    if(keepGoing === "Exit"){
        exitWindow();
        return 
    }else{
        employeeQueston(); 
    }

}
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
            type: "input",
            message: "what is your git hub?",
            name:"github",
            when: (response) => response.rank === jobRank[0],
        },
        //specific question for intern

        {
            type: "input",
            message: "what is your School?",
            name:"school",
            when: (response) => response.rank === jobRank[1],
        },
        //specific question for manager
        {
            type: "input",
            message: "what is your office number?",
            name:"officeNumber",
            when: (response) => response.rank === jobRank[2],
        },

    ]) .then((response) =>{

        let eName = response.employeeName;
        let eID = response.employeeID;
        let eEmail = response.employeeEmail;
        let eRank = response.rank;
        switch(response.rank){

        //enginer
        case(jobRank[0]):
            let eGit = response.github;
            employeeInfo = new Engineer(eName, eID, eEmail,eRank, eGit);
            employeesArray.push(employeeInfo);
            console.log("Engineer has been added!");
            break;
        //adds intern
        case(jobRank[1]):
            let eSchool = response.school;
            employeeInfo = new Intern(eName, eID, eEmail, eRank,eSchool);
            employeesArray.push(employeeInfo);
            console.log("Intern has been added!");
            break;
        //adds manger
        case(jobRank[2]):
            let eOffice = response.officeNumber;
            employeeInfo = new Manager(eName, eID, eEmail, eRank,eOffice);
            employeesArray.push(employeeInfo);
            console.log("Manager has been added!");
            break;
    
        }
        TaskTodo();
    }
   
        
);





const main = () =>{
    startScreen();
    
    TaskTodo();
}


main();
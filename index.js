//Importing data and programs from  othere folders
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const jobRank = ['Engineer', 'Intern','Manager']
// function Person(employeeName,employeeID,employeeEmail,rank){
//     this.employeeName = employeeName;
//     this.employeeID = employeeID;
//     this.employeeEmail = employeeEmail;
//     this.rank = rank;
//     if (rank === jobRank[0]){
//         this.github = github;
//     };
//     if (rank === jobRank[1]){
//         this.school = school;
//     };
//     if (rank === jobRank[2]){
//         this.officeNumber = of;

//     };


// }


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
            message: 'What is the employee position',
            choices: ["Add Employee","Exit"],
            name: 'optionChoices',
            loop: false
        },

    ])
     .then((response) =>{
         //goes into the second portion
         
        if(response.optionChoices[0] === response.optionChoices[0]){
            let keepAsk = true;
            console.log("what is keepsk",keepAsk)
            console.log("what did i chooose",response.optionChoices )
            goMainQues(response.optionChoices);
            

        }
        else{
            // 
            console.log("what did i chooose",response.optionChoices )
            let keepAsk = false;
            console.log("what is keepsk",keepAsk)
            goMainQues(response.optionChoices);
            
        }
         
    });
}

function exitWindow(){
   
    console.log("Thank you Your page has been generated good Bye")
    // console.log("list of employees",employee);
    return 
}
//ask the user in nodes what question,and then put the information into a read me file
function goMainQues(keepGoing){

    //keeps requesting until false
    if(keepGoing === "Exit"){
        // console.log("keep ask",keepAsk);
        exitWindow();
        return 
    }else{
        // console.log("keep ask",keepAsk);
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
            message: "what is your School?r",
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
        let eID = response.employeeName;
        let eEmail = response.employeeEmail;
        let eRank = response.rank;
        console.log("my response",response)

        // // const addRecruit = ({ eName, employeeID, eEmail, officeNumber, github, school, eRank}) => {
        //     console.log("my response are",response)
        //     //enginer 
        //     switch(response.rank){
        //     //enginer
        //     case(jobRank[0]):
        //         let eGit = response.github;
        //         employee = new Engineer(eName, employeeID, eEmai, eGit);
        //         console.log("Engineer has been added!");
        //         break;
        //     //intern
        //     case(jobRank[1]):
        //         let eSchool = response.school;
        //         employee = new Intern(eName, employeeID, eEmai, eSchool);
        //         console.log("Intern has been added!");

        //         break;
        //     //manger
        //     case(jobRank[1]):
        //         let eOffice = response.officeNumber;
        //         employee = new Manager(eName, employeeID, eEmai, eOffice);
        //         console.log("Manager has been added!");
        //         break;
        //     }
        // }
        // addRecruit();
        TaskTodo();
        
       
         
    }
   
        
);





const main = () =>{
    startScreen();
    TaskTodo();





}


main();
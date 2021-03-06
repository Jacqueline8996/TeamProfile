//Importing data and programs from  othere folders
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const jobRank = ['Engineer', 'Intern','Manager']
let employeeInfo = [];
let employeesArray = [];
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
            employeeInfo = goMainQues(response.optionChoices);
            
            // employeesArray.push(employeeInfo);
            // console.log(employeesArray);
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
    console.log("my array ",employeesArray);
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
        let eID = response.employeeID;
        let eEmail = response.employeeEmail;
        let eRank = response.rank;
        console.log("my response",response)

        
        console.log("my response are",response)
        //enginer 
        switch(response.rank){
        //enginer
        case(jobRank[0]):
            let eGit = response.github;
            console.log("variable", eName, eID, eEmail, eGit)
            employeeInfo = new Engineer(eName, eID, eEmail,eRank, eGit);
            console.log("my employe info is ",employeeInfo);
            employeesArray.push(employeeInfo);
            // console.log("my employe info is ",employeeInfo);
            console.log(employeesArray);
            console.log("Engineer has been added!");
            break;
        case(jobRank[1]):
            let eSchool = response.school;
            console.log("variable", eName, eID, eEmail, eSchool)
            employeeInfo = new Intern(eName, eID, eEmail, eRank,eSchool);
            console.log("my employe info is ",employeeInfo);
            employeesArray.push(employeeInfo);
            // console.log("my employe info is ",employeeInfo);

            console.log("Intern has been added!");
            break;
        //manger
        case(jobRank[2]):
            let eOffice = response.officeNumber;
            console.log("variable", eName, eID, eEmail, eOffice)
            employeeInfo = new Manager(eName, eID, eEmail, eRank,eOffice);
            console.log("my employe info is ",employeeInfo);
            employeesArray.push(employeeInfo);
            // console.log("my employe info is ",employeeInfo);
            console.log("Manager has been added!");
            break;
    
        }
        // employeesArray.push(employeeInfo);
        // console.log(employeesArray);
        TaskTodo();

        
       
    }
   
        
);





const main = () =>{
    startScreen();
    
    TaskTodo();
    
   
}


main();
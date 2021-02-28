//Importing data and programs from  othere folders
const inquirer = require("inquirer");

const jobRank = ['Engineer', 'Intern','Manager']



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
            
            console.log("my response are",response)
            TaskTodo();
       
         
    }
   
        
);





const main = () =>{
    startScreen();
    TaskTodo();





}


main();
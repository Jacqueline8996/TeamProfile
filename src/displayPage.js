const fs = require("fs");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");

let teamArray;

//dettermins weather the what paramaters to push throught 
const buildMyTeam = (employeesArray) => {
    teamArray = employeesArray?.map((rank) => {
        console.log("list",employeesArray);
      if (rank instanceof Manager) {
        return generateManager(rank);
      } else if (rank instanceof Engineer) {
        return generateEngineer(rank);
      } else if (rank instanceof Intern) {
        return generateIntern(rank);
       
      }
});
const html = makeHTML(teamArray);

    fs.writeFile("dist/index.html", html, (err) =>
    console.log("Your Team Profile has been generated!")
    );
};


//Generates the boxes for manager
const generateManager =({employeeName,employeeID,rank,employeeEmail,officeNum}) =>

`<div class="container-fluid">
<div class ="row" id ="info">
    <div class="card" style="width: 18rem;" >
        <div class="card-header" id=${rank}>
        <h3>${employeeName}</h3>
        <i class="fas fa-coffee"><h3>${rank}</h3></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${employeeID}</li>
                <li class="list-group-item">${employeeEmail}</li>
                <li class="list-group-item">${officeNum}</li>
            </ul>
        </div>
    </div>
</div>
</div>`

//Generates the boxes  for engineer
const generateEngineer =({employeeName,employeeID,rank,employeeEmail,github}) =>

`<div class="container-fluid">
<div class ="row" id ="info">
    <div class="card" style="width: 18rem;" >
        <div class="card-header" id=${rank}>
        <h3>${employeeName}</h3>
        <i class="fas fa-coffee"><h3>${rank}</h3></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${employeeID}</li>
                <li class="list-group-item">${employeeEmail}</li>
                <li class="list-group-item">${github}</li>
            </ul>
        </div>
    </div>
</div>
</div>`

//Generates the boxes  for intern 
const generateIntern=({employeeName,employeeID,rank,employeeEmail,school}) =>

`<div class="container-fluid">
<div class ="row" id ="info">
    <div class="card" style="width: 18rem;" >
        <div class="card-header" id=${rank}>
        <h3>${employeeName}</h3>
        <i class="fas fa-coffee"><h3>${rank}</h3></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${employeeID}</li>
                <li class="list-group-item">${employeeEmail}</li>
                <li class="list-group-item">${school}</li>
            </ul>
        </div>
    </div>
</div>
</div>`

//makes the base HTML code for the page 
const makeHTML = ()=>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   

</head>
<body>
    <header>
        <div >
            <h1 class="titleBox">My Team</h1>
        </div>
    </header>

    <section class = "teamInfo">
        <h2>Your Team:</h2>
        ${teamArray?.join("")}
    </section>
    
</body>
</html>`



module.exports = buildMyTeam;
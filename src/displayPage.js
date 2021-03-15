//imports the files from other libary
const fs = require("fs");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");

let teamArray;

//dettermins weather the what paramaters to push throught 
const buildMyTeam = (employeesArray) => {
    teamArray = employeesArray?.map((rank) => {
      if (rank instanceof Manager) {
        return generateManager(rank);
      } else if (rank instanceof Engineer) {
        return generateEngineer(rank);
      } else if (rank instanceof Intern) {
        return generateIntern(rank);
       
      }
});
//reads in the file to create the html
const html = makeHTML(teamArray);
    fs.writeFile("dist/index.html", html, (err) =>
    console.log("Your Team Profile has been generated!")
    );
};


//Generates html body for the boxes for manager
const generateManager =({employeeName,employeeID,rank,employeeEmail,officeNumber}) =>
`<div class="card" style="width: 18rem;" >
    <div class="card-header" id=${rank}>
    <h3>Name:${employeeName}</h3>
    <i class="fas fa-coffee"><h3>${rank}</h3></i>
    </div>
    <div class = "space">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID:${employeeID}</li>
            <li class="list-group-item">Employee Email:${employeeEmail}</li>
            <li class="list-group-item">Office Number:${officeNumber}</li>
        </ul>
    </div>
</div>`

//Generates html body the boxes  for engineer
const generateEngineer =({employeeName,employeeID,rank,employeeEmail,github}) =>
`<div class="card" style="width: 18rem;" >
    <div class="card-header" id=${rank}>
    <h3>Name:${employeeName}</h3>
    <i class="fas fa-coffee"><h3>${rank}</h3></i>
    </div>
    <div class = "space">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID:${employeeID}</li>
            <li class="list-group-item">Employee Email:${employeeEmail}</li>
            <li class="list-group-item">Git Hub:${github}</li>
        </ul>
    </div>
</div>`

//Generates html body the boxes  for intern 
const generateIntern=({employeeName,employeeID,rank,employeeEmail,school}) =>
`<div class="card" style="width: 18rem;" >
    <div class="card-header" id=${rank}>
    <h3>Name:${employeeName}</h3>
    <i class="fas fa-coffee"><h3>${rank}</h3></i>
    </div>
    <div class = "space">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID:${employeeID}</li>
            <li class="list-group-item">Employee Email:${employeeEmail}</li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
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
    <link rel="stylesheet" href="../src/style.css">
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
        <div class="container-fluid">
        <div class ="row" id ="info">
        ${teamArray?.join("")}
        </div>
        </div>
    </section>
</body>
</html>`


module.exports = buildMyTeam;
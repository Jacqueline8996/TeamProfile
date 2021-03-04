const fs = require("fs");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");

let teamArray;

//dettermins weather the what paramaters to push throught 
const buildMyTeam = (employeeList) => {
    teamArray = employeeList?.map((rank) => {
      if (rank instanceof Manager) {
          special =officeNumber;
        return generateMember(employeeName, employeeID,rank,employeeEmail,special);
      } else if (rank instanceof Engineer) {
        special =github;
        return generateMember(employeeName, employeeID,rank,employeeEmail,special);
      } else if (rank instanceof Intern) {
        special =school;
        return generateMember(employeeName, employeeID,rank,employeeEmail,special);
      }
});


//Generates the boxes  for each member
const generateMember =({name,id,rank, email, special}) =>
`<div class="container-fluid">
<div class ="row" id ="info">
    <div class="card" style="width: 18rem;" >
        <div class="card-header" id=${rank}>
        <h3>${name}</h3>
        <i class="fas fa-coffee"><h3>${rank}</h3></i>
        </div>
        <div class = "space">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${id}</li>
                <li class="list-group-item">${email}</li>
                <li class="list-group-item">${special}</li>
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
    <link rel="stylesheet" href="style.css">
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

const html = makeHTML(teamArray);

fs.writeFile("dist/index.html", html, (err) =>
  console.log("Your Team Profile has been generated!")
);
};

module.exports = buildMyTeam;
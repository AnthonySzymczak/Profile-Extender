const employeeArr = require('../index');

let managerAnswers = ``;
let engineerAnswers = ``;
let internAnswers = ``;


//Manager Card Template
const managerCard = (employeeArr) => {
    
  const managerTemplate = employeeArr.filter(employee=> employee.getRole()=== 'Manager').map(manager => {
        
        return `
        <div class="col-12 col-sm-4">
        <div class="card employee-card m-2 bg-secondary">
        <div class="card-header bg-info">
        <h2 class="card-title text-white">${manager.name}</h2>
        <h3 class="card-title text-white"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()} </h3>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush border rounded-lg">
        <li class="list-group-item">ID: ${manager.id}  </li>
        <li class="list-group-item list-group-item-action">Email: ${manager.email} </a></li>
        <li class="list-group-item">Office number: ${manager.officeNumber} </li>
        </ul>
        </div>
        </div>
        </div>
        `;
    })
  
    return managerTemplate;
    };

//Engineer Card Template
const engineerCard = (employeeArr) => {
    
  const engineerTemplate = employeeArr.filter(employee=> employee.getRole()=== 'Engineer').map(engineer => {
        
        return `
        <div class="col-12 col-sm-4">
        <div class="card employee-card m-2 bg-secondary">
        <div class="card-header bg-info">
        <h2 class="card-title text-white"> ${engineer.name} </h2>
        <h3 class="card-title text-white"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()} </h3>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush border rounded-lg">
        <li class="list-group-item">ID: ${engineer.id} </li>
        <li class="list-group-item list-group-item-action">Email: ${engineer.email} </a></li>
        <li class="list-group-item">GitHub: ${engineer.github} </a></li>
        </ul>
        </div>
        </div>
        </div>
        `;
    })
  
    return engineerTemplate;
};

//Intern Card template
const internCard = (employeeArr) => {
   const internTemplate = employeeArr.filter(employee=> employee.getRole()=== 'Intern').map(intern => {
        
        return `
        <div class="col-12 col-sm-4">
        <div class="card employee-card m-2 bg-secondary">
        <div class="card-header bg-info">
        <h2 class="card-title text-white"> ${intern.name} </h2>
        <h3 class="card-title text-white"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()} </h3>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush border rounded-lg">
        <li class="list-group-item">ID: ${intern.id} </li>
        <li class="list-group-item list-group-item-action">Email: ${intern.email} </a></li>
        <li class="list-group-item ">School: ${intern.school} </li>
        </ul>
        </div>
        </div>
        </div>
        `;
    })
   
    return internTemplate;
    };

    const htmlArr = [];
    
    // Section to Render and write to Html file
    const renderHtml = (managerArr, engineerArr, internArr) => {
      htmlArr.push(managerCard(managerArr))
      htmlArr.push(engineerCard(engineerArr))
  htmlArr.push(internCard(internArr))
  console.log(htmlArr);
  return `
    <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <title>My Team</title>
    </head>
    <body>
    <div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron p-01 mb-3 team-heading bg-danger">
            <h1 class="text-center">The Team</h1>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row">
        <div class="team-area col-12">
            <div class="row">
                
            </div>
        </div>
    </div>
</div>
        ${htmlArr.join('')}
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    </body>
  </html>
    `;
};

module.exports = (managerArr, engineerArr, internArr) => renderHtml(managerArr, engineerArr, internArr);
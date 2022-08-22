const createTeam = (team) => {

    const createManager = (manager) => {
        return `


        <div class="container">
            <div class="card d-flex justify-content-center text-area">
                <div class="card-header card-body text-bg-primary mb-3">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas"></i>${manager.getRole()}</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>

    `;
    }

    const createEngineer = (engineer) => {
        return `

        <div class="container">
    <div class="card d-flex justify-content-center text-area">
      <div class="card-header card-body text-bg-primary mb-3">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fas"></i>${engineer.getRole()}</h3>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}"></a></li>
            </ul>
      </div>
    </div>
  </div>

  `;

    }

    const createIntern = (intern) => {
        return `

    <div class="container">
    <div class="card d-flex justify-content-center text-area">
      <div class="card-header card-body text-bg-primary mb-3">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fas"></i>${intern.getRole()}</h3>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
      </div>
    </div>
  </div>

    `;
    };


const html = [];

html.push(
    team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => createManager(manager))
);
html.push(
    team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => createEngineer(engineer))
        .join("")
);
html.push(
    team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => createIntern(intern))
        .join("")
);

return html.join("");
}

module.exports = (team) => {
    return `

    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container-fluid">
     <div class="row">
        <div class="text-bg-danger p-3">
          <h1 class="text-center">My Team</h1>
        </div>
    </div>
 </div>

 <div class="container">
 <div class="row">
     <div class="team-area d-flex justify-content-center">
         ${createTeam(team)}
     </div>
 </div>
</div>
</body>
</html>
 `;
};

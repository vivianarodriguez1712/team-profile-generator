const inquirer = require('inquirer');
const fs = require("fs");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createTeam = require('./src/page-template')
const Manager = require('./lib/Manager')

const newemployeeInfo = []

const employeeQuestion = async () => {
  await inquirer.prompt([
    {
      type: 'list',
      name: 'add',
      message: 'Want to add an employee?',
      choices: ['Engineer', 'Intern', 'Finish building my team']
    }

  ]).then(async choice => {
    await ifOptions(choice)
    // this is for employeeQuestions
    // console.info('Answer:', choice);
    allEmployees();
  })
}

const employeeInfo = async () => {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter managers name'
    },
    {
      type: "input",
      name: "id",
      message: "Enter employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address",

    },
    {
      type: "input",
      name: "number",
      message: "Enter office number",

    },

  ]).then(answers => {

    employeeQuestion();

    // for the first .then on line 29
    //  console.info('Answer:', answers);
  })

};

employeeInfo();

const ifOptions = async (answers) => {
console.log(employeeQuestion)
 if (answers.add === "Manager") {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter managers name'
        },
        {
          type: "input",
          name: "id",
          message: "Enter employee ID",
        },
        {
          type: "input",
          name: "email",
          message: "Enter email address",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter office number",
        },

      ]).then(school => {

      const newManager = new Manager(
        officeNumber.name,
        officeNumber.id,
        officeNumber.email,
        officeNumber.officeNumber
      );

      newemployeeInfo.push(manager);

      console.log.push(newemployeeInfo);

      return employeeQuestion();
     })

      } else if (answers.add === "Engineer") {
        return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter engineers name'
        },
        {
          type: "input",
          name: "id",
          message: "Enter employee ID",
        },
        {
          type: "input",
          name: "email",
          message: "Enter email address",

        },
        {
          type: "input",
          name: "github",
          message: "Enter your GitHub user name?",
        },
      ]).then(github => {

        const engineer = new Engineer(
          github.name,
          github.id,
          github.email,
          github.github
        );

        newemployeeInfo.push(engineer);

        console.log(newemployeeInfo);
       
         return employeeQuestion(); 
      })
  


  } else if (answers.add === "Intern") {
     return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter interns name'
        },
        {
          type: "input",
          name: "id",
          message: "Enter employee ID",
        },
        {
          type: "input",
          name: "email",
          message: "Enter email address",

        },
        {
          type: "input",
          name: "school",
          message: "Enter your school name",
        },

      ]).then(school => {

        const intern = new Intern(
          school.name,
          school.id,
          school.email,
          school.school
        );

        newemployeeInfo.push(intern);

        console.log(newemployeeInfo);

        return employeeQuestion();
      })
 }
}

 function allEmployees () {
  fs.writeFileSync("dist/list.html", createTeam(newemployeeInfo))
  }





//  const end = async (answers) => {
//   await inquirer.prompt ([
//    {
//      type: 'list',
//      name: 'done',
//      message: 'Are you done building you team?',
//      choice: ['yes', 'no'],
//    }

// .then(end, answers => { 
//      console.info('Answer:', answers);
//     })

  
 
//  ])}
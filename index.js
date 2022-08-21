const inquirer = require('inquirer');
const fs = require("fs");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')

const newemployeeInfo = []

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

    const employeeQuestion = async () => {
      await inquirer.prompt([
        {
          type: 'list',
          name: 'add',
          message: 'Want to add an employee?',
          choices: ['Engineer', 'Intern', 'Finish building my team']
        }

      ]).then(choice => {
        ifOptions(choice)
        // this is for employeeQuestions
        // console.info('Answer:', choice);
      })
    }
    employeeQuestion();

    // for the first .then on line 29
    //  console.info('Answer:', answers);
  })

};

employeeInfo();

const ifOptions = async (answers) => {


  if (answers.add === "Engineer") {
    const employeeAnswer = inquirer
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
          answers.name,
          answers.id,
          answers.email,
          github.github
        );

        newemployeeInfo.push(engineer);

        console.log(newemployeeInfo);
      })


  } else if (answers.add === "Intern") {
    const internInfo = inquirer
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
          answers.name,
          answers.id,
          answers.email,
          school.school
        );

        newemployeeInfo.push(intern);

        console.log(newemployeeInfo);
      })
 }
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